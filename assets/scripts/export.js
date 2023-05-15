let excanva = document.querySelector('#exportcanva');
var canva = document.getElementById("myCanva");

if (canva){
    var ctx = canva.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canva.width, canva.height);
}
if (excanva){
    excanva.addEventListener('click', () => {
        console.log(excanva)
        let canva = document.getElementById("myCanva");
        let dataURL = canva.toDataURL("image/jpeg");
        let a = document.createElement("a");
        a.href = dataURL;
        a.download = "mon-dessin.jpg";
        a.click();
    })
}