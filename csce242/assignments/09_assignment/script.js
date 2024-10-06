// Bird class to hold bird information
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

  // Get the section that shows the bird name and image
  getSection() {
    return `
      <div class="bird-card" onclick="openModal('${this.name}')">
        <h3>${this.name}</h3>
        <img src="images/${this.image}" alt="${this.name}">
      </div>
    `;
  }

  // Get the expanded section with all bird information
  getExpandedSection() {
    return `
      <div class="info">
        <h2>${this.name}</h2>
        <img src="images/${this.image}" alt="${this.name}">
        <p><strong>Size:</strong> ${this.size}</p>
        <p><strong>Lifespan:</strong> ${this.lifespan}</p>
        <p><strong>Food:</strong> ${this.food}</p>
        <p><strong>Habitat:</strong> ${this.habitat}</p>
        <p><strong>Interesting Fact:</strong> ${this.interestingFact}</p>
      </div>
    `;
  }
}

// Array of bird objects
const birds = [
  new Bird('Hummingbird', '2.5 inches', '3-5 years', 'Nectar (Sugar water)', 'Trees', "They're nicknamed 'Hummers'", 'hummingbird.jpeg'),
  new Bird('Blue Jay', '10-12 inches', '7 years', 'Insects, nuts, seeds', 'Forests', 'They are known for their intelligence', 'bluejay.jpeg'),
  new Bird('Cardinal', '8-9 inches', '3 years', 'Seeds, fruits, insects', 'Woodlands', 'Males are bright red to attract females', 'cardinal.jpeg'),
  new Bird('Robin', '9-11 inches', '2 years', 'Insects, worms', 'Gardens, woodlands', 'Robins are one of the first birds to sing at dawn', 'robinbird.jpeg')
];

// Function to load bird sections on the page
function loadBirds() {
  const container = document.getElementById('bird-container');
  birds.forEach(bird => {
    container.innerHTML += bird.getSection();
  });
}

// Function to open the modal and display bird information
function openModal(birdName) {
  const bird = birds.find(b => b.name === birdName);
  document.getElementById('modalContent').innerHTML = bird.getExpandedSection();
  document.getElementById('birdModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('birdModal').style.display = 'none';
}

// Load birds when the page loads
window.onload = loadBirds;