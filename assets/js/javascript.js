"use strict";

const categories = ["media", "media_pubg", "media_gps"]

document.addEventListener("DOMContentLoaded", function() {
    createNavigation(categories);
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
        icon.textContent = category;
        
        navItem.addEventListener("click", function() {
            loadSounds(category);
        });
        
        navContainer.appendChild(navListItem);
        navListItem.appendChild(navItem);
        navItem.appendChild(icon);
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