let totalImages = 0;
let loadedImages = 0;

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
});

const isIntersecting = (intersectionEntry) => intersectionEntry.isIntersecting;
    


const loadImage = (intersectionEntry) => {
    const imgNode = intersectionEntry.target; // container (DIV)
    imgNode.src = imgNode.dataset.src;
    
    // load imagen
    imgNode.onload = () => {

        loadedImages += 1;
        logState();
    }
    

    observer.unobserve(imgNode);
};




//
export const registerImage = (image) => {
    // IntersectionObserver -> observar(imagen)
    observer.observe(image);
    loadedImages += 1;
    logState();
};

function logState() {
    console.log(`⚪️ Total imagenes: ${totalImages}`);
    console.log(`🟣 Imagenes cargadas: ${loadedImages}`);
    console.log("--------------------------------");
}