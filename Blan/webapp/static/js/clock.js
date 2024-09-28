// Function to update the clock every second
function updateClock() {
    const now = new Date(); // Get current time
    const hours = String(now.getHours()).padStart(2, '0');  // Format hours
    const minutes = String(now.getMinutes()).padStart(2, '0');  // Format minutes
    const seconds = String(now.getSeconds()).padStart(2, '0');  // Format seconds

    // Combine hours, minutes, and seconds in HH:MM:SS format
    const currentTime = `${hours}:${minutes}`;
    
    // Update the content of the time element
    document.getElementById('time').textContent = currentTime;
}

// Call the updateClock function every second
setInterval(updateClock, 1000);

// Call the function once immediately to avoid delay
updateClock();