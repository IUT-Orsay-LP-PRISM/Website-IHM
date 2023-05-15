let excanva = document.querySelector('#exportcanva');
if (excanva){
    excanva.addEventListener('click', () => {
        console.log(excanva)
        let canva = document.getElementById("myCanva");
        let dataURL = canva.toDataURL("image/png");
        let a = document.createElement("a");
        a.href = dataURL;
        a.download = "mon-dessin.png";
        a.click();
    })
}