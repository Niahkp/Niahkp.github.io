const getIcecream = async() => {
    try {
        return (await fetch("https://portiaportia.github.io/json/ice-creams.json")).json();
    } catch(error) {
        console.log(error);
    }
}

const showIcecream = async() => {
    const icecreamData = await getIcecream();
    const baseUrl = 'https://portiaportia.github.io/json/images/ice-creams/';

    icecreamData.forEach((cream)=>{
       
        if(!cream.image.includes('-2')){
            const section = document.createElement("section");
            section.classList.add("cream");

            // Create the image element
            const img = document.createElement("img");
            img.src = `${baseUrl}${cream.image}`;
            img.alt = cream.name;

            // Create the overlay div
            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            overlay.textContent = cream.name;

            // Append the image and overlay
            section.appendChild(img);
            section.appendChild(overlay);
            
            document.getElementById("icecream-section").append(section);
        
        }
    });
}

showIcecream();
