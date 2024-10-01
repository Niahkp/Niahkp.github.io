
const pics = [
    {
        src: "images/birthday.jpg", 
        title: "Birthday",
        description: "Happy Birthday! I hope you have a great day"
    },
    {
        src: "images/clown.jpg",
        title: "Clown",
        description: "I dressed like a clown for halloween :)"
    },
    {
        src: "images/rain.jpg",
        title: "Rain",
        description: "Oh No! It's raining today :("
    },
    {
        src: "images/read.jpg",
        title: "Book",
        description: "I love to read, this is my faviorte book!"
    },
    {
        src: "images/shovel.jpg",
        title: "Shovel",
        description: "Lets plant some vegetabales in tbe garden."
    },
    {
        src: "images/work.jpg",
        title: "Computer",
        description: "I have to get this assignment done by Sunday."
    }
];


function loadImages() {
    const container = document.getElementById('image');

    pics.forEach((image, index) => {
        let img = document.createElement('img');
        img.src = image.src; 
        img.alt = image.title;
        img.addEventListener('click', () => showDescription(index));
        container.appendChild(img);
    });
}


function showDescription(index) {
    const descriptionDiv = document.getElementById('message');
    const image = pics[index];
    descriptionDiv.innerHTML = `<h3>${image.title}</h3><p>${image.description}</p>`;
}

window.onload = loadImages;