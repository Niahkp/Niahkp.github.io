//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"

const getCocktails = async() => {
    try {
        return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")).json();
    } catch(error) {
        console.log(error);
    }

    const section = document.createElement("section");
    section.classList.add("cocktails");
    document.getElementById("breweries-section").append(section);
}