window.onload = function(){
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    //ctx.fillStyle = "green";
    //ctx.fillRect(20, 10, 150, 100);
    ctx.font = "50px serif";
    a = Math.random();
    ctx.fillText("yasunori", 100, 100, 140);
}
