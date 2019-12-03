// Your code goes here

// array of ipsum

const WORDS = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
    'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
    'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
    'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
    'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
    'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
    'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
    'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
    'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
    'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
    'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
    'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
    'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
    'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
    'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
    'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
    'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
    'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
    'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
    'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
    'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
    'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
    'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
    'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
    'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
    'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
    'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
    'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
    'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
    'elementum', 'tempor', 'risus', 'cras'
];

const state = {
    scale: '1',
    Os: 'O',
    bus: 'Fun'
};

// grab all elements and set their transition
const allElements = document.querySelectorAll('*');
allElements.forEach(el => {
    el.style.transition = '0.5s';
});

// grab all paragraphs
const pElements = document.querySelectorAll('p');

// EVENT ONE -- mousemove
pElements.forEach(el => {
    el.addEventListener('mousemove', () => {

        // this should be fun...
        pElements.forEach(p => {
            // get random word
            const randomWord = WORDS[Math.floor(Math.random()*WORDS.length)];
            p.textContent = p.textContent + ' ' + randomWord;
        });
    });
});

// EVENT TWO -- scroll
window.addEventListener('scroll', () => {
    const newScale = state.scale === '1' ? '1.01' : '1';

    allElements.forEach(el => {
        el.style.transform = `scale(${newScale})`;
    });

    state.scale = newScale;
});

// EVENT THREE -- click
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation(); // <-- MVP GOAL
        e.target.textContent = '😝';
        e.target.style.transition = '1s';
        e.target.style.transform = 'scale(2)';
    });
});

// EVENT FOUR -- click 2
const header = document.querySelector('header');
header.addEventListener('click', () => {
    state.bus = state.bus === 'Fun' ? 'Unfun' : 'Fun';
    document.querySelector('.logo-heading').textContent = state.bus + ' Bus';
});

const body = document.querySelector('body');
const msg = document.querySelector('#msg');

// EVENT FIVE -- resize
window.addEventListener('resize', () => {
    let startText = 'STO';
    state.Os += 'OO';
    startText += state.Os;
    startText += 'P';

    msg.style.wordBreak = 'break-all';
    msg.style.fontSize = '50px';
    msg.textContent = startText;
    
});

// EVENT SIX -- mouseenter
const images = document.querySelectorAll('img')
images.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.opacity = '0.5';
    });
});

// EVENT SEVEN -- mouseleave
images.forEach(img => {
    img.addEventListener('mouseleave', () => {
        img.style.opacity = '1';
    });
});

