const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
];

let messageIndex = 0;
const maxClicks = 8;

function handleNoClick() {
    messageIndex++;
    const noButton = document.querySelector('.no-button');
    if (messageIndex >= maxClicks) {
        window.location.href = 'no_page.html';
    }

    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";

}
