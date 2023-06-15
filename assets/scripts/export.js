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
        
        // Créer un canvas temporaire
        let tempCanvas = document.createElement("canvas");
        let tempCtx = tempCanvas.getContext("2d");
        tempCanvas.width = canva.width;
        tempCanvas.height = canva.height;
        
        // Effectuer une translation horizontale pour déplacer l'origine
        tempCtx.translate(tempCanvas.width, 0);
        
        // Effectuer une mise à l'échelle négative pour inverser l'image horizontalement
        tempCtx.scale(-1, 1);
        
        // Dessiner le contenu du canvas actuel sur le canvas temporaire avec la transformation
        tempCtx.drawImage(canva, 0, 0);
        
        // Exporter l'image du canvas temporaire
        let dataURL = tempCanvas.toDataURL("image/jpeg");
        
        let date = new Date();
        let chaine = date.toISOString().slice(0, 10) + "-" + date.getDay() + "-" + date.toISOString().slice(11, 23).replace("T", "-");
        localStorage.setItem("image_" + chaine, canva.toDataURL("image/jpeg"));
        let a = document.createElement("a");
        a.href = dataURL;
        a.download = "mon-dessin.jpg";
        a.click();
    })
}

