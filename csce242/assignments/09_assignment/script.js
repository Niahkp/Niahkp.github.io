class Bird {
  constructor(name, size, lifespan, food, habitat, interestingFact, image) {
    this.name = name;
    this.size = size;
    this.lifespan = lifespan;
    this.food = food;
    this.habitat = habitat;
    this.interestingFact = interestingFact;
    this.image = image;
  }

  getSection = () => `
      <div class="bird-box" onclick="openModal('${this.name}')">
        <h3>${this.name}</h3>
        <img src="images/${this.image}" alt="${this.name}">
      </div>
    `;


  getBox = () => `
      <div class="info">
        <h2>${this.name}</h2>
        <img src="images/${this.image}" alt="${this.name}">
        <p>Size:</strong> ${this.size}</p>
        <p>Lifespan:</strong> ${this.lifespan}</p>
        <p>Food:</strong> ${this.food}</p>
        <p>Habitat:</strong> ${this.habitat}</p>
        <p>Interesting Fact:</strong> ${this.interestingFact}</p>
      </div>
    `;
}

const birds = [
  new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar', 'Trees', "They're nicknamed 'Hummers'", 'hummingbird.jpeg'),
  new Bird('Blue Jay', '9.8-11.8 inches', '7 years', 'Insects', 'Forests', 'They can mimic hawks to warn other jays of their presence.', 'bluejay.jpeg'),
  new Bird('Cardinal', '8.3-9.1 inches', '3-5 years', 'Seeds', 'Woodlands', 'Cardinals get their red feathers from food ', 'cardinal.jpeg'),
  new Bird('Robin', '7.9-11 inches', '2 years', 'Insects', 'Robins have about 2,900 feathers', 'robinbird.jpeg')
];

function loadBirds() {
  const container = document.getElementById('birds');
  birds.forEach(bird => {
    container.innerHTML += bird.getSection();
  });
}

function openModal(birdName) {
  const bird = birds.find(b => b.name === birdName);
  document.getElementById('modalContent').innerHTML = bird.getBox();
  document.getElementById('birdModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('birdModal').style.display = 'none';
}

document.getElementById('close-btn').addEventListener('click', closeModal);

window.onload = loadBirds;