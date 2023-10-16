"use strict";

const categories = ["media", "media_online", "media_pubg", "media_gps"]

document.addEventListener("DOMContentLoaded", function() {
    createNavigation(categories);
    addParallaxEffect();
    
});

/** 
 * Function to dynamically load navigation.
 * @param {Array} navTitles
 */
function createNavigation(navTitles){
    const navContainer = document.getElementById("nav-list");

    navTitles.forEach(function(category) {
        let navListItem = document.createElement("li");
        navListItem.classList.add("nav-item");
        let navItem = document.createElement("a");
        navItem.href = "#";
        let icon = document.createElement("i");
        let categoryDisplayName = category;
        switch(category) {
            case "media":
                categoryDisplayName = "Original Gangster";
                icon.classList.add("fa-solid");
                icon.classList.add("fa-skull");
                break;
            case "media_online":
                categoryDisplayName = "Online Gangster"
                icon.classList.add("fa-solid");
                icon.classList.add("fa-globe");
                break;
            case "media_pubg":
                categoryDisplayName = "PUBG"
                icon.classList.add("fa-solid");
                icon.classList.add("fa-person-rifle");
                break;
            case "media_gps":
                categoryDisplayName = "GPS"
                icon.classList.add("fa-solid");
                icon.classList.add("fa-map");
              break;
            default:
                categoryDisplayName
        }

        navItem.appendChild(icon);
        navItem.appendChild(document.createTextNode(categoryDisplayName));

        
        navItem.addEventListener("click", function() {
            loadSounds(category);
        });
        
        navListItem.appendChild(navItem);
        navContainer.appendChild(navListItem);
    });
    
}



/** 
 * Function to load sounds for a specific category.
 * @param {string} category
 */
function loadSounds(category) {
    let regex = new RegExp('href="\/assets\/' + category + '\/(.*?\.mp3)');
    let soundContainer = document.getElementById("sound-container");
    soundContainer.innerHTML = ""; // Clear previous sounds

    fetch("assets/" + category)
        .then(response => response.text())
        .then(data => {
            let files = data.split("\n").filter(file => file.trim() !== "");
            files.forEach(function(str) {
                let match = regex.exec(str);
                if (match && match.length > 1) {
                    let filename = decodeURIComponent(match[1]);
                    let soundButton = document.createElement("button");
                    soundButton.textContent = filename.replace(".mp3", "");
                    soundButton.addEventListener("click", function() {
                        playSound(category, filename);
                    });
                    soundContainer.appendChild(soundButton);
                }
            });
        })
        .catch(error => {
            console.error("Error loading files:", error);
        });
  
    
    const parallaxBg = document.querySelector(".parallax-bg");
    switch(category) {
        case "media":
            parallaxBg.style.backgroundImage = 'url("/images/fap.png")';  
            break;
        case "media_online":
            parallaxBg.style.backgroundImage = 'url("/images/online.jpg")';  
            break;
        case "media_pubg":
            parallaxBg.style.backgroundImage = 'url("/images/gps.jpg")';  
            break;
        case "media_gps":
            parallaxBg.style.backgroundImage = 'url("/images/gps.jpg")';  
            break;
        default:
            parallaxBg.style.backgroundImage = 'url("/images/fap.png")'; 
    }

}

/** 
 * Function to play a sound from a given category and file.
 * @param {string} category
 * @param {string} sound
 */
function playSound(category, sound) {
    let trigger = new Audio("assets/" + category + "/" + sound);
    trigger.play();
    trigger.currentTime=0;
}

function addParallaxEffect(){
    const parallaxBg = document.querySelector(".parallax-bg");

    document.addEventListener("mousemove", function(event) {
        const mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
        const mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
        const offsetX = mouseX * 30;
        const offsetY = mouseY * 30;
        parallaxBg.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
    });
}