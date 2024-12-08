randomizeStickerValues()

randomizePosition('skimo-thumb')
randomizePosition('elevation')
randomizePosition('distance')
randomizePosition('hwy2')

setTimeout(() => {
    staggerDisplay(['hwy2', 'distance', 'skimo-thumb', 'elevation']);
}, 500);

function staggerDisplay(classArray) {
    // Create a shuffled copy of the array
    const shuffledArray = [...classArray].sort(() => Math.random() - 0.5);
    
    shuffledArray.forEach((className, index) => {
        const element = document.querySelector(`.${className}`);
        if (!element) return;
        
        const randomDelay = Math.floor(Math.random() * 501) + 250; // 250-750ms
        setTimeout(() => {
            element.style.display = 'flex';
        }, randomDelay * index);
    });
}

function randomizePosition(stickerClass) {
    const sticker = document.querySelector(`.${stickerClass}`);
    if (!sticker) return;

    // Random rotation between -45 and 45 degrees
    const rotation = Math.floor(Math.random() * 91) - 45;
    
    // Random position values (keeping sticker mostly visible)
    const top = Math.floor(Math.random() * 60) + 5; // 5-65 vmin
    const side = Math.floor(Math.random() * 30) - 5; // -5-25 vmin
    
    // Randomly choose left or right positioning
    const isLeft = Math.random() > 0.5;
    
    sticker.style.transform = `rotate(${rotation}deg)`;
    sticker.style.top = `${top}vmin`;
    
    if (isLeft) {
        sticker.style.left = `${side}vmin`;
        sticker.style.right = 'auto';
    } else {
        sticker.style.right = `${side}vmin`;
        sticker.style.left = 'auto';
    }
}


function randomizeStickerValues() {
    // Get sticker elements
    const distanceSticker = document.querySelector('.sticker.distance');
    const elevationSticker = document.querySelector('.sticker.elevation');

    // Function to get random integer between min and max
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to get random float between min and max with 2 decimal places
    function getRandomFloat(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }

    // Functions to update sticker values with rapid animation
    function animateDistanceValue() {
        const valueElement = distanceSticker.querySelector('.value');
        let duration = 1000; // 1 second of rapid changes
        let interval;
        
        interval = setInterval(() => {
            const randomValue = getRandomFloat(16, 27);
            valueElement.textContent = `${randomValue}mi`;
        }, 50); // Update every 50ms during animation
        
        setTimeout(() => {
            clearInterval(interval);
            const finalValue = getRandomFloat(16, 27);
            valueElement.textContent = `${finalValue}mi`;
        }, duration);
    }

    function animateElevationValue() {
        const valueElement = elevationSticker.querySelector('.value');
        let duration = 1000; // 1 second of rapid changes
        let interval;
        
        interval = setInterval(() => {
            const randomValue = getRandomInt(7000, 12000);
            valueElement.textContent = `${randomValue}ft`;
        }, 50); // Update every 50ms during animation
        
        setTimeout(() => {
            clearInterval(interval);
            const finalValue = getRandomInt(7000, 12000);
            valueElement.textContent = `${finalValue}ft`;
        }, duration);
    }

    // Initial updates
    animateDistanceValue();
    animateElevationValue();

    // Set intervals to trigger animations independently
    function scheduleNextDistanceAnimation() {
        const delay = getRandomFloat(1500, 3000);
        setTimeout(() => {
            animateDistanceValue();
            scheduleNextDistanceAnimation();
        }, delay);
    }

    function scheduleNextElevationAnimation() {
        const delay = getRandomFloat(1500, 3000);
        setTimeout(() => {
            animateElevationValue();
            scheduleNextElevationAnimation();
        }, delay);
    }

    scheduleNextDistanceAnimation();
    scheduleNextElevationAnimation();
}