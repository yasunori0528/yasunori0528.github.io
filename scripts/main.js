let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
    }
}
  
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};
