let excanva = document.querySelector('#exportcanva');
var canva = document.getElementById("myCanva");

if (canva){
    var ctx = canva.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canva.width, canva.height);
}
if (excanva){
    excanva.addEventListener('click', () => {
        let canva = document.getElementById("myCanva");
        canva.style.rotateX = "180deg";
        let dataURL = canva.toDataURL("image/jpeg");
        let date = new Date();
        let dateChaine = date.toLocaleString("fr-FR", {fractionalSecondDigits: 3});
        localStorage.setItem("image_" + dateChaine + date, dataURL);
        let a = document.createElement("a");
        a.href = dataURL;
        a.download = "mon-dessin.jpg";
        a.click();
    })
}