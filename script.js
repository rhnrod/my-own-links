function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');
}

//Emoji & expression array
const magicArr = [
    "๐ฆพ", "๐ซ", "๐ง ",
    "โก", "๐ฅ", "โจ", "๐ซง",
    "๐", "๐", "๐ฅญ", "๐ฅฅ", "๐",
    "๐", "๐", "๐", "๐ฑ", "๐ฃ", "๐ค", "๐ซ",
    "๐ซ", "๐ฅค", "๐ง", "๐ง",
    "๐", "๐น๏ธ", "๐งถ", "๐"
];
const mageArr = ["๐จโ๐ป","๐จโ๐ป","๐จโ๐ป","๐จโ๐ป","๐จโ๐ป","๐จโ๐ป","๐จโ๐ป","๐จโ๐ป", "๐ฅท", "๐งโโ๏ธ"];

window.addEventListener('load', function(){
    mage.innerText = mageArr[Math.floor(Math.random() * mageArr.length)];
});

window.addEventListener('load', function(){
    magic.innerText = magicArr[Math.floor(Math.random() * magicArr.length)];
});
