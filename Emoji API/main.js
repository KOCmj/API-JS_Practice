document.addEventListener('DOMContentLoaded', () => {
    const emojiFigure = document.querySelector('.emoji');
    const emojiFigure1 = document.querySelector('.emoji1');
    const displayEmoji = (emojiCode) => {
        emojiFigure.innerHTML = emojiCode; 
        emojiFigure1.innerHTML = emojiCode;
    };

    fetch('https://emojihub.yurace.pro/api/random')
        .then(response => response.json())
        .then(data => {
            const htmlCode = data.htmlCode[0];

            displayEmoji(htmlCode); 
        })
        .catch(error => console.error('Error fetching random emoji:', error));
});

