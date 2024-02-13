document.getElementById('yesButton').addEventListener('click', function() {
    openLetterModal();
});

document.getElementById('noButton').addEventListener('click', function() {
    const randomPosition = getRandomPosition();
    this.style.position = 'absolute';
    this.style.left = randomPosition.x + 'px';
    this.style.top = randomPosition.y + 'px';
});

// Display letter modal when "Yes" button is clicked
function openLetterModal() {
    const letterModal = document.getElementById('letterModal');
    const closeBtn = document.getElementsByClassName('close')[0];

    letterModal.style.display = 'block';

    // Close letter modal when clicking on the close button or outside the modal
    closeBtn.onclick = function() {
        letterModal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == letterModal) {
            letterModal.style.display = 'none';
        }
    };
}

// Function to get random position for the "No" button
function getRandomPosition() {
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - 150; // Adjust the button width
    const maxY = container.clientHeight - 50; // Adjust the button height

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    return { x: randomX, y: randomY };
}
