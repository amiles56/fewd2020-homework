// Defines an array of objects called navs. Navs contains values for Text, Url, Class and Alt.
const navs = [{
    Text: ' Home ',
    Url: 'index.html',
    Class: ' Home ',
    Alt: ' Click here to view the home link '
},
{
    Text: ' Link-1 ',
    Url: ' link-1.html ',
    Class: ' link-1',
    Alt: ' Click Here to visit Link-1 '
},
{
    Text: ' Link-2 ',
    Url: ' link-2.html',
    Class: ' link-2 ',
    Alt: ' Click here to visit Link-2 '
},
{
    Text: ' Link-3 ',
    Url: ' link-3.html ',
    Class: ' Click here to visit Link-3 ',
    Alt: ' Click Here to visit Link 3 '
}
];

// Loop that places list items to create the navBar. 
const navBarMarkup = `
${navs.map(nav => `<li class="navlink"><a href=${nav.Url} class="${nav.Class}" alt="${nav.Alt}">${nav.Text}</a>`).join(' ')}</li>
`;

// document.querySelector(' ul ') searches our HTML page for an unordered list
// or <ul> tag. It uses .innerHTML to output our navBarMarkup variable.

document.querySelector(' ul ').innerHTML = navBarMarkup;

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

function toggleNav(){
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
    toggleNav();
});