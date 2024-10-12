
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('toggle');
});


// Function to load menu items into the grid
const loadMenuItems = (menuItems) => {
    const menuGrid = document.getElementById('menuGrid');
    menuItems.forEach(item => {
        // Create menu item elements
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.img_name}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
        `;

        // Add click event to show modal
        menuItem.addEventListener('click', () => showModal(item));

        // Append to the menu grid
        menuGrid.appendChild(menuItem);
    });
};

// Show modal with item details
const showModal = (item) => {
    const modal = document.getElementById('itemModal');
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalImage').src = item.img_name;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalPrice').textContent = `Price: ${item.price}`;
    document.getElementById('modalOptions').textContent = `Options: ${item.options.join(', ')}`;

    modal.style.display = 'block';

    // Close modal when 'x' is clicked
    const closeModal = document.querySelector('.close');
    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};

// Function to fetch menu items
const fetchMenuItems = async () => {
    try {
        const response = await fetch('menu.json'); // Use await instead of .then()
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Throw error for non-2xx responses
        }
        const data = await response.json(); // Await the JSON response
        loadMenuItems(data.menuItems); // Call the function to load menu items
    } catch (error) {
        console.error('Error fetching menu items:', error);
    }
};

// Call the function to fetch menu items
fetchMenuItems();
