let excanva = document.querySelector('#exportcanva');
let canva = document.getElementById("myCanva");

if (canva){
    let ctx = canva.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canva.width, canva.height);
}


if (excanva){
    excanva.addEventListener('click', () => {
        let canva = document.getElementById("myCanva");
        let ctx = canva.getContext("2d");
        let dataURL = canva.toDataURL("image/jpeg");
        let date = new Date();
        let chaine = date.toISOString().slice(0, 10) + "-" + date.getDay() + "-" + date.toISOString().slice(11, 23).replace("T", "-");
        localStorage.setItem("image_" + chaine, dataURL);
        let a = document.createElement("a");
        a.href = dataURL;
        a.download = "mon-dessin.jpg";
        a.click();
    })
}