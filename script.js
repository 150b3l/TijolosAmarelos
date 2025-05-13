function generateStatic() {
    const canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    function draw() {
        const imageData = ctx.createImageData(canvas.width, canvas.height);
        for (let i = 0; i < imageData.data.length; i += 4) {
            const shade = Math.random() * 255;
            imageData.data[i] = shade;
            imageData.data[i + 1] = shade;
            imageData.data[i + 2] = shade;
            imageData.data[i + 3] = 255;
        }
        ctx.putImageData(imageData, 0, 0);
    }

    document.querySelector(".tv-static").appendChild(canvas);

    setInterval(draw, 33);
}

window.onload = generateStatic;
