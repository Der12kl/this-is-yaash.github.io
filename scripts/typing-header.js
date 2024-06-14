// typing-header.js
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "I'm a Final Year MS Student. 👨‍🎓",
        "I like to Explore & Research. 🔍",
        "Open-Source & Linux enthusiast. 🐧",
        "I'm passionate about Open-Source Software Development. 💻",
        "I'm enthusiastic about Community-Building and Knowledge Sharing. 🌟",
    ];
    
    let index = 0;
    let textIndex = 0;
    const typingSpeed = 50; // Speed of typing
    const deletingSpeed = 50; // Speed of deleting
    const delayBetweenTexts = 2000; // Delay between texts

    const typingHeaderElement = document.getElementById("typing-header");

    function typeText() {
        if (textIndex < texts[index].length) {
            typingHeaderElement.textContent += texts[index].charAt(textIndex);
            textIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(deleteText, delayBetweenTexts);
        }
    }

    function deleteText() {
        if (textIndex > 0) {
            typingHeaderElement.textContent = texts[index].substring(0, textIndex - 1);
            textIndex--;
            setTimeout(deleteText, deletingSpeed);
        } else {
            index = (index + 1) % texts.length;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText();
});
