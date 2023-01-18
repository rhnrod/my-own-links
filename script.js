function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');
}

//Emoji & expression array
const magicArr = [
    "🦾", "🫀", "🧠",
    "⚡", "🔥", "✨", "🫧",
    "🍊", "🍋", "🥭", "🥥", "🍄",
    "🍟", "🍔", "🍕", "🍱", "🍣", "🍤", "🍫",
    "🫖", "🥤", "🧋", "🧉",
    "🎈", "🕹️", "🧶", "📚"
];
const mageArr = ["👨‍💻", "🥷", "🧙‍♂️"];

window.addEventListener('load', function(){
    mage.innerText = mageArr[Math.floor(Math.random() * mageArr.length)];
});

window.addEventListener('load', function(){
    magic.innerText = magicArr[Math.floor(Math.random() * magicArr.length)];
});
