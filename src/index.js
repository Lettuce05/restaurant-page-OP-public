import {loadHomeScreen} from './homeScreen';
import {loadOurStory} from './ourStoryScreen';
import {loadMenuScreen} from './menuScreen';
import {loadContactUsScreen} from './contactUsScreen';
import {loadNewsScreen} from './newsScreen';

function removeAllChildNodes(parent) {
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

// menu button code
const menuIcon = document.querySelector(".hamburger");
const content = document.getElementById("content")

menuIcon.addEventListener("click", ()=>{
    menuIcon.classList.toggle("change");
    const links = document.querySelector(".links");
    links.classList.toggle("mobile-links");
});

// call loadHomeScreen when website is loaded
removeAllChildNodes(content);
content.appendChild(loadHomeScreen());

// navbar options
const logo = document.querySelector(".logo");
const ourStoryTab = document.getElementById("ourStoryTab");
const menuTab = document.getElementById("menuTab");
const contactTab = document.getElementById("contactTab");
const newsTab = document.getElementById("newsTab");

// navbar event listeners
logo.addEventListener("click", ()=> {
    removeAllChildNodes(content);
    content.appendChild(loadHomeScreen());
});

ourStoryTab.addEventListener("click", ()=> {
    removeAllChildNodes(content);
    content.appendChild(loadOurStory());
});

menuTab.addEventListener("click", ()=> {
    removeAllChildNodes(content);
    content.appendChild(loadMenuScreen());
});

contactTab.addEventListener("click", ()=> {
    removeAllChildNodes(content);
    content.appendChild(loadContactUsScreen());
    addMap();
});

newsTab.addEventListener("click", ()=> {
    removeAllChildNodes(content);
    content.appendChild(loadNewsScreen());
});

// Leaflet code
function addMap() {
    var mymap = L.map('map').setView([36.1523, -115.33271], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibGV0dHVjZTA1IiwiYSI6ImNrbGpzZGl6dTA5OG4ycHAzM3YycWMxZGYifQ.tB8ByW6GYWeg7R15wJfKfA'
    }).addTo(mymap);
    
    var marker = L.marker([36.1523, -115.33271]).addTo(mymap);
}
