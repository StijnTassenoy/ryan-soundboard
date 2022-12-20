"use strict";

let soundList = ["Tronk", "Blowjob", "Vijzn", "Fotos", "Gazon", "Nieje", "Kak", "AHHH", "Gerust",
                "Jajahh", "Oefening", "Tronie", "Aarslikker Denny", "La Mer", "Neen", "Braken",
                "Bellen", "Preut", "Salut", "Wa Ist", "Uhuhu", "Escaleren", "Vrij", "Nietnemeer",
                "Waddest", "Hohohohoho", "Dagezien", "Blijven", "Waszeda", "Prikentik", "Zaadput",
                "Interesseren", "Da Kind", "Filmavond", "Laat Maar", "Handjes", "West Vlamingen",
                "Mij Killt", "Die Keirel", "Sebiet", "Ni Lopen", "Double Kill", "Camionnette Stijn", "Chocolade",
                "Hallo", "Kakken", "Op De Baan", "Zoemaar", "Vettigen Das", "Gerust Laten", "Wooh", "Juiste Antwoord", "Gaarne", "Faking Nice", "NiGezegd",
                "Bedgen", "Boerkes", "EEJ", "Eij Das Rickert", "Ik Ben Bezig", "Jeezeke", "Kloeit",
                "Ni Door Weh", "Not Even Answer", "Oe Da Komt", "Oud A Bek", "P P P", "Please Answer",
                "Sac A Dos", "Screenshare", "Snotteren", "Sst Sst", "Vroeg Les", "Vrolijke Bui", "Was Tees",
                "Wie Doet Da Nou", "Wtf Fotos", "Zijt Stil"];

let gpsList = ["1 Km Rechtdoor", "2 Km Rechtdoor", "10 Km Rechtdoor", "Aanrijden",
                "Rotonde 1", "Rotonde 2", "Rotonde 3", "Rotonde 4", "Omdraaien", "Sla Rechts Af", "Traktor", "Volg Amsterdam",
                "Volg Brussel", "Volg Merchtem", "Volg New-York", "Volg Parijs"];

let pubgList = ["1 Kill", "2 Man Hier", "4Times", "Appartments", "Be Quiet", "Doodgegaan", "F_ck You", "GGWP", "Iemand 7.62", "Ik Heb Kar",
                "Ik Kom Af", "Knocked", "Kzie ze ni", "Meepakken", "Nog Niks", "Opt Dak Geland", "Rushn", "Schijt Van", "Scopes", "Surrender", "Teammate", "Tis Goe", "Tuurlijk", "Weir Aar Joe", "Yes", "Yorick Ja Duwen",
                "5min Hunt", "Crate", "Farterig Spel", "Fucking Noob", "Hij Zit Baajtn", "Hij Zit Ni Baajtn", "Placebo Binnen",
                "Schone Kill", "Stond Nie Op", "Stond Op Single", "Take My Loot", "Waar Zit Die"];

document.addEventListener('DOMContentLoaded', init);


function init() {

    addSounds();

}

function addSounds(){


    for(let i = 0; i < soundList.length; i++){
        document.querySelector("#FullSoundBoard").innerHTML += "<button id='" + soundList[i] + "' onclick='playSound(\"" + soundList[i].toString()+ "\")'>" + soundList[i] + "</button>";
    }

    for(let i = 0; i < gpsList.length; i++){
        document.querySelector("#GPS").innerHTML += "<button id='" + gpsList[i] + "' onclick='playSoundGPS(\"" + gpsList[i].toString()+ "\")'>" + gpsList[i] + "</button>";
    }

    for(let i = 0; i < pubgList.length; i++){
        document.querySelector("#PUBG").innerHTML += "<button id='" + pubgList[i] + "' onclick='playSoundPUBG(\"" + pubgList[i].toString()+ "\")'>" + pubgList[i] + "</button>";
    }
}

function playSound(sound) {
        let trigger = new Audio("assets/media/" + sound +".mp3");
        trigger.play();
        trigger.currentTime=0;
}

function playSoundGPS(sound) {
    let trigger = new Audio("assets/media_GPS/" + sound +".mp3");
    trigger.play();
    trigger.currentTime=0;
}

function playSoundPUBG(sound) {
    let trigger = new Audio("assets/media_PUBG/" + sound +".mp3");
    trigger.play();
    trigger.currentTime=0;
}

function openBox(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}
