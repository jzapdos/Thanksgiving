window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if (this.window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
});


new SimpleLightbox({elements: '#work .row a'});

document.getElementById('askButton').addEventListener('click', function() {
    var thanksgiving = Math.floor(Math.random() * 10);  // Change to 10 options
    var response = '';

    switch (thanksgiving) {
        case 9: response = 'turkey'; break;
        case 8: response = 'pumpkin pie'; break;
        case 7: response = 'mashed potatoes'; break;
        case 6: response = 'cranberry sauce'; break;
        case 5: response = 'stuffing'; break;
        case 4: response = 'roasted sweet potatoes'; break;
        case 3: response = 'warm cornbread'; break;
        case 2: response = 'green bean casserole'; break;
        case 1: response = 'pecan pie'; break;
        case 0: response = 'gravy'; break;
        default: response = 'Invalid number';
    }

    output.innerText = `You will get, ${response}!`;
});