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
       
        //dont use the pics with -2 on the end
        if(!cream.image.includes('-2')){
            const section = document.createElement("section");
            section.classList.add("cream");

            const img = document.createElement("img");
            img.src = `${baseUrl}${cream.image}`;
            img.alt = cream.name;

            const overlay = document.createElement("div");
            overlay.classList.add("overlay");
            overlay.textContent = cream.name;

            section.appendChild(img);
            section.appendChild(overlay);
            
            document.getElementById("icecream-section").append(section);
        
        }
    });
}

showIcecream();
