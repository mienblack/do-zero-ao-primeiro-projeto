
let like =  document.getElementById("like")

like.addEventListener("click", function () {

    let lastImage = like.getAttribute("src")

    if (lastImage == "./images/thumbs-up.png") {
        like.setAttribute("src", "./images/thumbs-down.png")

    console.log(lastImage);
    } else {
        like.setAttribute("src", "./images/thumbs-up.png")

        console.log(lastImage)
    }
    
})