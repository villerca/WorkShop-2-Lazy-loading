/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import { registerImage } from "./lazy";
import { createImageNodes } from "./utils";

// crear (1) imagen
//agregar imagen

/*<div* class="p-4">
            <img class="mx-auto"
            width="320"
            src="https://randomfox.ca/images/2.jpg" alt="">
          </div*/


// Cargue las imagenes existentes cuando cargue la página
const allImages = document.querySelectorAll("img[data-src]");
allImages.forEach(registerImage);

// Agregar nuevas imagenes
const imageContainer = document.querySelector("#images");
const button = document.querySelector("button[type='submit']");
button.addEventListener("click", () => {
  const [node, image] = createImageNodes();
  registerImage(image);
  imageContainer.append(node);
});

// Limpiar
const clean = document.querySelector("button[type='reset']");
clean.addEventListener("click", () => {
  imageContainer.innerHTML = "";
});
