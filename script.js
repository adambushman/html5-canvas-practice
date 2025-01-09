const hexagonLayout = [
    { abbrev: "HI", full_name: "Hawaii", center_x: 0, center_y: 0, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "FL", full_name: "Florida", center_x: 171.4730299, center_y: 0, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/florida_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "GA", full_name: "Georgia", center_x: 161.9467505, center_y: 16.5, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/georgia_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "TX", full_name: "Texas", center_x: 85.736515, center_y: 16.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "OK", full_name: "Oklahoma", center_x: 76.2102355, center_y: 33, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "LA", full_name: "Louisiana", center_x: 95.2627944, center_y: 33, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "AL", full_name: "Alabama", center_x: 133.3679122, center_y: 33, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "SC", full_name: "South Carolina", center_x: 152.4204711, center_y: 33, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/south-carolina_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "NC", full_name: "North Carolina", center_x: 171.4730299, center_y: 33, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/north-carolina_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "DC", full_name: "Washington DC", center_x: 180.9993094, center_y: 49.5, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/dc_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "VA", full_name: "Virginia", center_x: 161.9467505, center_y: 49.5, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/virginia_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "TN", full_name: "Tennessee", center_x: 142.8941916, center_y: 49.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "MS", full_name: "Mississippi", center_x: 123.8416327, center_y: 49.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "AR", full_name: "Arkansas", center_x: 104.7890739, center_y: 49.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "KS", full_name: "Kansas", center_x: 85.736515, center_y: 49.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "NM", full_name: "New Mexico", center_x: 66.6839561, center_y: 49.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "AZ", full_name: "Arizona", center_x: 47.6313972, center_y: 49.5, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/arizona_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "CA", full_name: "California", center_x: 19.0525589, center_y: 66, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/california_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "NV", full_name: "Nevada", center_x: 38.1051178, center_y: 66, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "UT", full_name: "Utah", center_x: 57.1576766, center_y: 66, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/utah_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "CO", full_name: "Colorado", center_x: 76.2102355, center_y: 66, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "NE", full_name: "Nebraska", center_x: 95.2627944, center_y: 66, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/nebraska_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "MO", full_name: "Missouri", center_x: 114.3153533, center_y: 66, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/missouri_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "KY", full_name: "Kentucky", center_x: 133.3679122, center_y: 66, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "WV", full_name: "West Virginia", center_x: 152.4204711, center_y: 66, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "MD", full_name: "Maryland", center_x: 171.4730299, center_y: 66, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/maryland_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "DE", full_name: "Delaware", center_x: 190.5255888, center_y: 66, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "CT", full_name: "Conneticut", center_x: 219.1044272, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "NJ", full_name: "New Jersey", center_x: 200.0518683, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "PA", full_name: "Pennsylvania", center_x: 180.9993094, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "OH", full_name: "Ohio", center_x: 161.9467505, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "IN", full_name: "Indiana", center_x: 142.8941916, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "IL", full_name: "Illinois", center_x: 123.8416327, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "IA", full_name: "Iowa", center_x: 104.7890739, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "SD", full_name: "South Dakota", center_x: 85.736515, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "WY", full_name: "Wyoming", center_x: 66.6839561, center_y: 82.5, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/wyoming_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "ID", full_name: "Idaho", center_x: 47.6313972, center_y: 82.5, src: "https://raw.githubusercontent.com/adambushman/d3-js-learn-and-practice/refs/heads/master/D3-v.7/Travel%20Map/img/idaho_family-photo%20copy.webp", x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "OR", full_name: "Oregon", center_x: 28.5788383, center_y: 82.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "WA", full_name: "Washington", center_x: 38.1051178, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "MT", full_name: "Montana", center_x: 57.1576766, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "ND", full_name: "North Dakota", center_x: 76.2102355, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "MN", full_name: "Minnesota", center_x: 95.2627944, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "WI", full_name: "Wisconsin", center_x: 114.3153533, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "MI", full_name: "Michigan", center_x: 152.4204711, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "NY", full_name: "New York", center_x: 190.5255888, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "MA", full_name: "Massachusetts", center_x: 209.5781477, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "RI", full_name: "Rhode Island", center_x: 228.6307066, center_y: 99, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "NH", full_name: "New Hampshire", center_x: 238.156986, center_y: 115.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "VT", full_name: "Vermont", center_x: 219.1044272, center_y: 115.5, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "AK", full_name: "Alaska", center_x: 0, center_y: 132, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 },
    { abbrev: "ME", full_name: "Maine", center_x: 228.6307066, center_y: 132, src: null, x_adjust: Math.random() * 50 - 25, y_adjust: Math.random() * 50 - 25 }
];



const canvas = document.getElementById("hexCanvas");
const ctx = canvas.getContext("2d");

// Canvas size
const cHeight = 1920;
const cWidth = 1080;
const qualityFactor = 3;

// Hexagon size
const hexRadius = 80;


// Function to calculate hexagon points from center
function calculateHexagonPoints(center_x, center_y, radius) {
    const points = [];
    for (let i = 0; i < 6; i++) {
        const angle = ((Math.PI / 3) * i) + (Math.PI / 6); // 60 degrees in radians, starting at 30
        const x = center_x + radius * Math.cos(angle);
        const y = center_y + radius * Math.sin(angle);
        points.push({ x, y });
    }
    return points;
}

// Function to render a single hexagon
function renderHexagon(ctx, center_x, center_y, radius, image, x_adjust = 0, y_adjust = 0) {
    const scale = 0.80;
    const [alt_width, alt_height] = [cHeight * scale, cWidth * scale]
    const [offset_width, offset_height] = [(cHeight * (1 - scale)) / 2, (cWidth * (1 - scale)) / 2]
    const [new_center_x, new_center_y] = [
        (center_x / Math.max(...hexagonLayout.map(d => d.center_x)) * alt_width) + offset_width,
        (alt_height - (center_y / Math.max(...hexagonLayout.map(d => d.center_y)) * alt_height)) + offset_height
    ];
    const points = calculateHexagonPoints(new_center_x, new_center_y, radius * scale);

    // Create hexagonal clipping path
    ctx.save(); // Save context state
    ctx.beginPath();
    points.forEach((point, index) => {
        if (index === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }
    });
    ctx.closePath();
    ctx.clip();

    // Calculate hexagon bounds
    const hexHeight = 2 * radius; // Width is diameter
    const hexWidth = Math.sqrt(3) * radius; // Height for a hexagon

    // Image aspect ratio (width / height)
    const imgAspectRatio = image.width / image.height;

    // Determine scaled dimensions to fit inside the hexagon
    let drawWidth, drawHeight;
    if (imgAspectRatio > hexWidth / hexHeight) {
        // Image is wider relative to the hexagon
        drawHeight = hexHeight;
        drawWidth = hexHeight * imgAspectRatio; // Scale width proportionally
    } else {
        // Image is taller relative to the hexagon
        drawWidth = hexWidth;
        drawHeight = hexWidth / imgAspectRatio; // Scale height proportionally
    }

    // Center the image within the hexagon
    const drawX = (new_center_x - drawWidth / 2) + x_adjust;
    const drawY = (new_center_y - drawHeight / 2) + y_adjust;

    // Draw the image scaled to fit inside the hexagon
    ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);

    ctx.restore(); // Restore context state

    // Draw hexagon border
    ctx.beginPath();
    points.forEach((point, index) => {
        if (index === 0) {
            ctx.moveTo(point.x, point.y);
        } else {
            ctx.lineTo(point.x, point.y);
        }
    });
    ctx.closePath();
}


// Function to render all hexagons based on layout
function renderHexagonLayout(layout, radius, images, ctx) {
    layout.forEach((hex, index) => {
        const { center_x, center_y, x_adjust, y_adjust } = hex;
        renderHexagon(ctx, center_x, center_y, radius, images[index], x_adjust, y_adjust);
    });
}


function loadImages(layout, callback) {
    const images = [];
    let loadedCount = 0;

    layout.forEach((hex, index) => {
        const image = new Image();
        image.src = "Gecko.jpg";// hex.src ?? "https://www.announcementconverters.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/S/-/S-ILG11F_10.JPG";
        image.onload = () => {
            images[index] = image;
            loadedCount++;
            if (loadedCount === layout.length) {
                callback(images); // Call the callback when all images are loaded
            }
        };
    });
}

function resizeCanvas() {
    canvas.width = 1920; // Fixed width for the canvas
    canvas.height = 1080; // Fixed height for the canvas

    // Scale all drawing operations by the scaleFactor
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = "#f0f0f0"; // Set background color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill canvas with color

    loadImages(hexagonLayout, (images) => {
        renderHexagonLayout(hexagonLayout, hexRadius, images, ctx);
    });
}


// Listen for window resize events
window.addEventListener("resize", resizeCanvas);

// Initialize canvas
resizeCanvas();

const printWidth = 10800; // 36 inches × 300 DPI
const printHeight = 7200; // 24 inches × 300 DPI

// Generate high-resolution download
function downloadCanvasAsHighResJPEG() {
    // Create a temporary canvas at the target print resolution
    const tempCanvas = document.createElement("canvas");
    const tempCtx = tempCanvas.getContext("2d");

    tempCanvas.width = printWidth; // 10,800 px for 36"
    tempCanvas.height = printHeight; // 7,200 px for 24"

    // Calculate the scale factor
    const scaleFactor = printWidth / canvas.width;

    // Scale the entire context
    tempCtx.scale(scaleFactor, scaleFactor);

    // Draw background color
    tempCtx.fillStyle = "#f0f0f0";
    tempCtx.fillRect(0, 0, canvas.width, canvas.height); // Use original canvas size

    // Load images again for high-resolution rendering
    loadImages(hexagonLayout, (images) => {
        // Render hexagons with the scaled context
        hexagonLayout.forEach((hex, index) => {
            renderHexagon(tempCtx, hex.center_x, hex.center_y, hexRadius, images[index], hex.x_adjust, hex.y_adjust);
        });

        // Generate the high-resolution JPEG
        const downloadLink = document.createElement("a");
        downloadLink.download = "hexagon-layout-highres.jpg";
        downloadLink.href = tempCanvas.toDataURL("image/jpeg", 0.9); // Set JPEG quality
        downloadLink.click();
    });
}



// Add event listener to the download button
document.getElementById("downloadBtn").addEventListener("click", downloadCanvasAsHighResJPEG);

// Listen for window resize events
window.addEventListener("resize", resizeCanvas);

// Center canvas
document.addEventListener("DOMContentLoaded", () => {
    const canvasWrapper = document.getElementById("canvasWrapper");
    canvasWrapper.scrollLeft = (canvasWrapper.scrollWidth - canvasWrapper.clientWidth) / 2;
});
