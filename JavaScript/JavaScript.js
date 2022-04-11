function transitionAcceuilDroite(){
    document.getElementById('imageHotel').style.display = "none";
    imageCroisiere.style.display = "block";
    } 
function transitionAcceuilDroite2(){
    document.getElementById('imageCroisiere').style.display = "none";
    document.getElementById('imageSafari').style.display = "block";
}
function transitionAcceuilGauche2(){
    document.getElementById('imageHotel').style.display = "block";
    document.getElementById('imageCroisiere').style.display = "none";
}
function transitionAcceuilGauche3(){
    document.getElementById('imageCroisiere').style.display = "block";
    document.getElementById('imageSafari').style.display = "none";
}
function transitionAcceuilDroiteDirect(){
    document.getElementById('imageHotel').style.display = "none";
    document.getElementById('imageSafari').style.display = "block";
}
function transitionAcceuilDroiteDirectR(){
    document.getElementById('imageHotel').style.display = "block";
    document.getElementById('imageSafari').style.display = "none";
}
function transitionSection3Droite(){
    document.getElementById('imageEquipe').style.display = "none";
    document.getElementById('imageEquipe2').style.display = "block";
    document.getElementById('section3Text').style.display = "none";
    document.getElementById('section3Text2').style.display = "block";
}
function transitionSection3Gauche(){
    document.getElementById('imageEquipe2').style.display = "none";
    document.getElementById('imageEquipe').style.display = "block";
    document.getElementById('section3Text').style.display = "block";
    document.getElementById('section3Text2').style.display = "none";
}
function transitionAProposHotelDroite(){
    document.getElementById('imageEquipe').style.display = "none";
    document.getElementById('imageEquipe2').style.display = "block";
}
function transitionAProposHotelGauche(){
    document.getElementById('imageEquipe2').style.display = "none";
    document.getElementById('imageEquipe').style.display = "block";
}


function transitionPresentation(){
    document.getElementById('menuTextPresentation').style.display = "block";
    document.getElementById('menuTextHebergement').style.display = "none";
    document.getElementById('menuTextItineraire').style.display = "none";
    document.getElementById('menuTextBudget').style.display = "none";
    document.getElementById('menuPresentation').style.background = "white";
    document.getElementById('menuHebergement').style.background = "whitesmoke";
    document.getElementById('menuItineraire').style.background = "whitesmoke";
    document.getElementById('menuBudget').style.background = "whitesmoke";
}
function transitionItineraire(){
    document.getElementById('menuTextItineraire').style.display = "block";
    document.getElementById('menuTextHebergement').style.display = "none";
    document.getElementById('menuTextPresentation').style.display = "none";
    document.getElementById('menuTextBudget').style.display = "none";
    document.getElementById('menuPresentation').style.background = "whitesmoke";
    document.getElementById('menuHebergement').style.background = "whitesmoke";
    document.getElementById('menuItineraire').style.background = "white";
    document.getElementById('menuBudget').style.background = "whitesmoke";
}
function transitionHebergement(){
    document.getElementById('menuTextHebergement').style.display = "block";
    document.getElementById('menuTextItineraire').style.display = "none";
    document.getElementById('menuTextPresentation').style.display = "none";
    document.getElementById('menuTextBudget').style.display = "none";
    document.getElementById('menuPresentation').style.background = "whitesmoke";
    document.getElementById('menuHebergement').style.background = "white";
    document.getElementById('menuItineraire').style.background = "whitesmoke";
    document.getElementById('menuBudget').style.background = "whitesmoke";
}
function transitionBudget(){
    document.getElementById('menuTextBudget').style.display = "block";
    document.getElementById('menuTextHebergement').style.display = "none";
    document.getElementById('menuTextPresentation').style.display = "none";
    document.getElementById('menuTextItineraire').style.display = "none";
    document.getElementById('menuPresentation').style.background = "whitesmoke";
    document.getElementById('menuHebergement').style.background = "whitesmoke";
    document.getElementById('menuItineraire').style.background = "whitesmoke";
    document.getElementById('menuBudget').style.background = "white";
}


