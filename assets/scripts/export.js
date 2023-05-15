let excanva = document.querySelector('#exportcanva');
let canva = document.getElementById("myCanva");
let clearCanva = document.querySelector("#erasecanva");

if (canva){
    let ctx = canva.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canva.width, canva.height);
}
if (clearCanva){
    clearCanva.addEventListener('click', () => {
        window.location.reload();
    })
}
if (excanva){
    excanva.addEventListener('click', () => {
        let canva = document.getElementById("myCanva");
        var ctx = canva.getContext("2d");
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