window.onload = function(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(20, 10, 150, 100);
    a = Math.random();
    ctx.fillText(toString(a), 300, 300, 140);
}
