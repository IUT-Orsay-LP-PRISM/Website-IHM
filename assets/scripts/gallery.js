for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    if (key.startsWith("image_")) {
        const imgElement = document.createElement("img");
        imgElement.src = value;

        const divElement = document.createElement("div");
        divElement.classList.add("box");
        divElement.appendChild(imgElement);

        document.getElementById("galerie").appendChild(divElement);
    }
}




