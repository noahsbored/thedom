document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    console.log( user);
});

function changeColor() {
    let box = document.getElementById('box');
    box.style.backgroundColor = box.style.backgroundColor === 'red' ? 'blue' : 'red';
}

document.getElementById('hoverBox').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});
document.getElementById('hoverBox').addEventListener('mouseout', function() {
    this.style.backgroundColor = 'lightgray';
});

function changeStyle() {
    let button = document.getElementById('styleButton');
    button.style.fontSize = '20px';
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
}
