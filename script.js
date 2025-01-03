const canvas = document.getElementById("hexCanvas");
const ctx = canvas.getContext("2d");
const scaleFactor = 1;

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
const backgroundImageURL = "Gecko.jpg"; // Replace with your image URL
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
    ctx.clip(); // Clip the canvas to the hexagon
}

// Function to draw the background image within the hexagon
function drawClippedBackground(points) {
    createHexagonalClipPath(points);

    // Calculate image fitting dimensions (cover style)
    const hexBounds = {
        minX: Math.min(...points.map(p => p.x)),
        minY: Math.min(...points.map(p => p.y)),
        maxX: Math.max(...points.map(p => p.x)),
        maxY: Math.max(...points.map(p => p.y)),
    };
    const hexWidth = hexBounds.maxX - hexBounds.minX;
    const hexHeight = hexBounds.maxY - hexBounds.minY;

    const imgAspectRatio = backgroundImage.width / backgroundImage.height;
    const hexAspectRatio = hexWidth / hexHeight;

    let drawWidth, drawHeight;
    if (imgAspectRatio > hexAspectRatio) {
        drawWidth = hexHeight * imgAspectRatio;
        drawHeight = hexHeight;
    } else {
        drawWidth = hexWidth;
        drawHeight = hexWidth / imgAspectRatio;
    }

    const drawX = hexBounds.minX - (drawWidth - hexWidth) / 2;
    const drawY = hexBounds.minY - (drawHeight - hexHeight) / 2;

    ctx.drawImage(backgroundImage, drawX, drawY, drawWidth, drawHeight);

    // Restore to prevent clipping other drawings
    ctx.restore();
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

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Handle canvas resizing
function resizeCanvas() {
    // Set the canvas internal resolution to scaleFactor times the display size
    const displayWidth = 1920;//canvas.offsetWidth;
    const displayHeight = 1080;//canvas.offsetHeight;
    canvas.width = displayWidth * scaleFactor;
    canvas.height = displayHeight * scaleFactor;

    // Scale all drawing operations by the scaleFactor
    ctx.scale(scaleFactor, scaleFactor);

    // Draw background color
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = "#f0f0f0"; // Set your desired background color
    ctx.fillRect(0, 0, displayWidth, displayHeight); // Fill the canvas with color

    const new_data = [];
    [{ center_x: 86.60254, center_y: 0 }].map(d => {
        const unit = 1;
        const rads = [Math.PI / 6, Math.PI / 2, Math.PI * 5 / 6, Math.PI * 7 / 6, Math.PI * 3 / 2, Math.PI * 11 / 6];

        rads.forEach(r => {
            const calc_x = (unit * Math.cos(r)) + d.center_x;
            const calc_y = (unit * Math.sin(r)) + d.center_y;
            new_data.push({
                id: "San Diego", x: calc_x, y: calc_y, center_x: d.center_x, center_y: d.center_y
            })
        });
    });
    console.log(data, new_data);

    if (backgroundImage.complete) {
        const transformedPoints = scaleAndTransformPoints(new_data, displayWidth, displayHeight);

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

// Function to download the canvas as a JPEG
function downloadCanvasAsJPEG() {
    const downloadLink = document.createElement("a");
    downloadLink.download = "canvas-hexagon.jpg";
    downloadLink.href = canvas.toDataURL("image/jpeg", 0.9); // Set JPEG quality (0.0 - 1.0)
    downloadLink.click();
}

// Add event listener to the download button
document.getElementById("downloadBtn").addEventListener("click", downloadCanvasAsJPEG);

// Listen for window resize events
window.addEventListener("resize", resizeCanvas);

// Initialize canvas
resizeCanvas();

// Center canvas
document.addEventListener("DOMContentLoaded", () => {
    const canvasWrapper = document.getElementById("canvasWrapper");
    canvasWrapper.scrollLeft = (canvasWrapper.scrollWidth - canvasWrapper.clientWidth) / 2;
});
