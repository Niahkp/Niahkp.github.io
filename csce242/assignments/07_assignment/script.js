const canvas = document.getElementById('starCanvas');
const con = canvas.getContext('2d');
const drawButton = document.getElementById('draw');
const countUser = document.getElementById('count');
const errorMessage = document.getElementById('error');
const starInfo = document.getElementById('starInfo');

let stars = [];

drawButton.addEventListener('click', () => {
    const count = parseInt(countUser.value);

    if (isNaN(count) || count <= 0) {
        errorMessage.textContent = 'Invalid!';
        return;
    }

    errorMessage.textContent = ''; 
    drawStars(count);
});

function drawStars(count) {
    
    con.clearRect(0, 0, canvas.width, canvas.height);
    stars = [];

    
    for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        stars.push({ x, y });
        drawStar(x, y);
    }
}

function drawStar(x, y) {
    con.beginPath();
    con.fillStyle = 'yellow';
    con.arc(x, y, 5, 0, Math.PI * 2);
    con.fill();
    con.closePath();
}


canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const distance = Math.sqrt((x - star.x) ** 2 + (y - star.y) ** 2);

        if (distance <= 5) { 
            starInfo.textContent = `Star number ${i + 1}`;
            break;
        }
    }
});