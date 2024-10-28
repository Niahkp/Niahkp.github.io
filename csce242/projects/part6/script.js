
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener(('click'), () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('toggle');
});



const loadMenuItems = (menuItems) => {
    const menuGrid = document.getElementById('menuGrid');
    menuItems.forEach((item)=> {
    
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = 
            `<img src="${item.img_name}" alt="${item.name}">
            <h2>${item.name}</h2>
            <p>${item.description}</p>`;

        menuItem.addEventListener(('click'), () => showModal(item));

        menuGrid.appendChild(menuItem);
    });
};

const showModal = (item) => {
    const modal = document.getElementById('itemModal');
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalImage').src = item.img_name;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalPrice').textContent = `Price: ${item.price}`;
    document.getElementById('modalOptions').textContent = `Options: ${item.options.join(', ')}`;

    modal.style.display = 'block';

    const closeModal = document.querySelector('.close');
    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

};


const getMenuItems = async () => {
    try {
        const response = await fetch('menu.json'); 
        const data = await response.json(); 
        loadMenuItems(data.menuItems); 
    } catch (error) {
        console.log(error);
    }
};

getMenuItems();
