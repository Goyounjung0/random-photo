const imageContainerElement = document.querySelector(".image-container");
const buttonElement = document.querySelector(".btn");

buttonElement.addEventListener("click", () => {
  const imageNum = 10; // Number of new images to load each time the button is clicked
  addNewImages(imageNum);
});

/**
 * Function to add new random images to the image container
 * @param {number} imageNum - Number of images to add
 */

function addNewImages(imageNum) {
  // Loop through the specified number of times (imageNum)
  for (let index = 0; index < imageNum; index++) {
    const newImagesElement = document.createElement("img");

    // Set the src attribute of the img element to a random image URL
    // Math.random() generates a random number between 0 and 1
    // Multiplying by 2000 and using Math.floor ensures a whole number between 0 and 1999
    newImagesElement.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    // Append the new img element to the image container
    imageContainerElement.appendChild(newImagesElement);
  }
}
