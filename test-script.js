const canvas = document.getElementById("hexCanvas");
const ctx = canvas.getContext("2d");

// Dataset: Original points (relative to their center)
const data = [
    { id: "San Diego", x: 86.60254, y: 10, center_x: 86.60254, center_y: 0 },
    { id: "San Diego", x: 77.94229, y: 5, center_x: 86.60254, center_y: 0 },
    { id: "San Diego", x: 77.94229, y: -5, center_x: 86.60254, center_y: 0 },
    { id: "San Diego", x: 86.60254, y: -10, center_x: 86.60254, center_y: 0 },
    { id: "San Diego", x: 95.26279, y: -5, center_x: 86.60254, center_y: 0 },
    { id: "San Diego", x: 95.26279, y: 5, center_x: 86.60254, center_y: 0 },
];

// Background image URL
const backgroundImageURL = "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"; // Replace with your image URL
const backgroundImage = new Image();
backgroundImage.src = backgroundImageURL;

// Function to transform and scale points
function scaleAndTransformPoints(points, canvasWidth, canvasHeight) {
    const maxX = Math.max(...points.map(p => Math.abs(p.x - points[0].center_x)));
    const maxY = Math.max(...points.map(p => Math.abs(p.y - points[0].center_y)));
    const maxDimension = Math.max(maxX, maxY);
    const scaleFactor = Math.min(canvasWidth, canvasHeight) / (maxDimension * 2.5); // Include margin

    const offsetX = canvasWidth / 2;
    const offsetY = canvasHeight / 2;

    return points.map(p => ({
        x: (p.x - points[0].center_x) * scaleFactor + offsetX,
        y: (p.y - points[0].center_y) * scaleFactor + offsetY,
    }));
}

// Function to create a hexagonal clipping path
function createHexagonalClipPath(points) {
    ctx.beginPath();
    points.forEach((point, index) => {
        if (index === 0) {
            ctx.moveTo(point.x, point.y); // Start at the first point
        } else {
            ctx.lineTo(point.x, point.y); // Draw lines to subsequent points
        }
    });
    ctx.closePath(); // Close the hexagon shape
    //ctx.clip(); // Clip the canvas to the hexagon
}

// Function to draw the background image within the hexagon
function drawClippedBackground(points) {
    createHexagonalClipPath(points);

    const hexBounds = {
        minX: Math.min(...points.map((p) => p.x)),
        minY: Math.min(...points.map((p) => p.y)),
        maxX: Math.max(...points.map((p) => p.x)),
        maxY: Math.max(...points.map((p) => p.y)),
    };
    const hexWidth = hexBounds.maxX - hexBounds.minX;
    const hexHeight = hexBounds.maxY - hexBounds.minY;

    // Image dimensions adjusted by scale
    const drawWidth = backgroundImage.width * scale;
    const drawHeight = backgroundImage.height * scale;

    // Center the image horizontally and vertically
    const drawX = hexBounds.minX - (drawWidth - hexWidth) / 2 + imageOffsetX;
    const drawY = hexBounds.minY - (drawHeight - hexHeight) / 2 + imageOffsetY;

    ctx.drawImage(backgroundImage, drawX, drawY, drawWidth, drawHeight);

    ctx.restore(); // Restore canvas state
}





// Function to draw the hexagon border
function drawHexagonBorder(points) {
    ctx.beginPath();
    points.forEach((point, index) => {
        if (index === 0) {
            ctx.moveTo(point.x, point.y); // Start at the first point
        } else {
            ctx.lineTo(point.x, point.y); // Draw lines to subsequent points
        }
    });
    ctx.closePath();

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.stroke();
}

// Handle canvas resizing
function resizeCanvas() {
    canvas.width = 500;
    canvas.height = 500;

    if (backgroundImage.complete) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const transformedPoints = scaleAndTransformPoints(data, canvas.width, canvas.height);

        // Save context to restore after clipping
        ctx.save();

        drawClippedBackground(transformedPoints);
        drawHexagonBorder(transformedPoints);
    } else {
        backgroundImage.onload = () => {
            resizeCanvas(); // Re-run once image is loaded
        };
    }
}



function calculateMaxOffsets(hexBounds, drawWidth, drawHeight, hexWidth, hexHeight) {
    let minOffsetX, maxOffsetX, minOffsetY, maxOffsetY;

    // Restrict Y-axis (vertical fit)
    if (drawHeight >= hexHeight) {
        minOffsetY = hexBounds.minY;
        maxOffsetY = hexBounds.minY;
    } else {
        // Allow Y-axis movement (horizontal fit)
        minOffsetY = hexBounds.minY - (drawHeight - hexHeight);
        maxOffsetY = hexBounds.minY;
    }

    // Allow X-axis movement
    minOffsetX = hexBounds.minX - (drawWidth - hexWidth);
    maxOffsetX = hexBounds.minX;

    return {
        minOffsetX,
        maxOffsetX,
        minOffsetY,
        maxOffsetY,
    };
}

function recalculateOffsets() {
    const hexWidth = canvas.width;
    const hexHeight = canvas.height;

    const drawWidth = backgroundImage.width * scale;
    const drawHeight = backgroundImage.height * scale;

    // Constrain horizontal movement
    const maxOffsetX = (drawWidth - hexWidth) / 2;
    const minOffsetX = -maxOffsetX;
    imageOffsetX = Math.min(Math.max(imageOffsetX, minOffsetX), maxOffsetX);

    // Constrain vertical movement
    const maxOffsetY = (drawHeight - hexHeight) / 2;
    const minOffsetY = -maxOffsetY;
    imageOffsetY = Math.min(Math.max(imageOffsetY, minOffsetY), maxOffsetY);
}



let isDragging = false;
let dragStartX = 0;
let dragStartY = 0;
let imageOffsetX = 0; // Current image offset
let imageOffsetY = 0; // Current image offset
let scale = 0.55; // Current zoom level
let minScale = 0.5; //canvas.height / backgroundImage.height; // Fill top-to-bottom
let maxScale = 2.5; // Maximum zoom (3x original size)
let initialDistance = 0; // Distance between fingers during pinch
let initialScale = scale;


canvas.addEventListener("mousemove", (e) => {
    if (isDragging) {
        const deltaX = e.clientX - dragStartX;
        const deltaY = e.clientY - dragStartY;

        // Convert delta to canvas coordinates
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;

        imageOffsetX += deltaX * scaleX / scale; // Adjust for current zoom level
        imageOffsetY += deltaY * scaleY / scale; // Adjust for current zoom level

        dragStartX = e.clientX;
        dragStartY = e.clientY;

        resizeCanvas(); // Redraw the canvas
    }
});

canvas.addEventListener("mousedown", (e) => {
    const mouseX = e.clientX - canvas.getBoundingClientRect().left;
    const mouseY = e.clientY - canvas.getBoundingClientRect().top;

    // Check if the mouse is over the image before allowing drag
    const hexBounds = {
        minX: canvas.width / 2 - backgroundImage.width / 2 + imageOffsetX,
        minY: canvas.height / 2 - backgroundImage.height / 2 + imageOffsetY,
        maxX: canvas.width / 2 + backgroundImage.width / 2 + imageOffsetX,
        maxY: canvas.height / 2 + backgroundImage.height / 2 + imageOffsetY,
    };

    if (
        mouseX >= hexBounds.minX &&
        mouseX <= hexBounds.maxX &&
        mouseY >= hexBounds.minY &&
        mouseY <= hexBounds.maxY
    ) {
        isDragging = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        canvas.style.cursor = "grabbing";
    }
});

canvas.addEventListener("mouseup", () => {
    isDragging = false;
    canvas.style.cursor = "grab";
});

canvas.addEventListener("mouseleave", () => {
    isDragging = false;
});

// Touch Events
canvas.addEventListener("touchstart", (e) => {
    isDragging = true;
    const touch = e.touches[0];
    dragStartX = touch.clientX;
    dragStartY = touch.clientY;
});

canvas.addEventListener("touchmove", (e) => {
    if (isDragging) {
        const touch = e.touches[0];
        const deltaX = touch.clientX - dragStartX;
        const deltaY = touch.clientY - dragStartY;

        imageOffsetX += deltaX;
        imageOffsetY += deltaY;

        dragStartX = touch.clientX;
        dragStartY = touch.clientY;

        resizeCanvas(); // Redraw with updated offsets
    }
});

canvas.addEventListener("touchend", () => {
    isDragging = false;
});

document.getElementById("scrollbar").addEventListener("input", (e) => {
    // Map scrollbar range (1-300) to scale range (minScale to maxScale)
    const zoomPercentage = e.target.value / 90.9;
    scale = zoomPercentage * (maxScale - minScale) - minScale;

    // Recalculate offsets to ensure the image stays in the correct position
    recalculateOffsets();
    console.log("Scale:", scale);
    resizeCanvas(); // Redraw the canvas with the new scale
});



// Listen for window resize events
window.addEventListener("resize", resizeCanvas);

// Initialize canvas
resizeCanvas();

