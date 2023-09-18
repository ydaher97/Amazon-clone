const smallImages = document.querySelectorAll(".small-image");
const mainImage = document.querySelector(".main-image");

const onEnter = (event, index) => {
    mainImage.style = `background: url("./imges/img-${index}.jpg") no-repeat center center/cover;`;
    smallImages.forEach((smallImage) => {
      smallImage.classList.remove("image-active");
    });
    event.target.classList.add("image-active");
  };
  
  smallImages.forEach((smallImage, index) => {
    smallImage.addEventListener("mouseenter", (event) => onEnter(event, index));
  });

