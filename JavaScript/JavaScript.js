/*function transitionAcceuilDroite(){
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
    document.getElementById('imagesDuVoyage1').style.display = "block";
    document.getElementById('imagesDuVoyage2').style.display = "none";
    document.getElementById('imagesDuVoyage3').style.display = "none";
    document.getElementById('imagesDuVoyage4').style.display = "none";
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
    document.getElementById('imagesDuVoyage1').style.display = "none";
    document.getElementById('imagesDuVoyage2').style.display = "block";
    document.getElementById('imagesDuVoyage3').style.display = "none";
    document.getElementById('imagesDuVoyage4').style.display = "none";
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
    document.getElementById('imagesDuVoyage1').style.display = "none";
    document.getElementById('imagesDuVoyage2').style.display = "none";
    document.getElementById('imagesDuVoyage3').style.display = "block";
    document.getElementById('imagesDuVoyage4').style.display = "none";
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
    document.getElementById('imagesDuVoyage1').style.display = "none";
    document.getElementById('imagesDuVoyage2').style.display = "none";
    document.getElementById('imagesDuVoyage3').style.display = "none";
    document.getElementById('imagesDuVoyage4').style.display = "block";
}
function transitionPresentation2(){
    if(document.getElementById('menuTextPresentation2').style.display == "none"){
        document.getElementById('menuTextPresentation2').style.display = "block";
        document.getElementById('menuPresentation2').style.background = "white";
    }else{
        document.getElementById('menuTextPresentation2').style.display = "none";
        document.getElementById('menuPresentation2').style.background = "whitesmoke";
    }
}
function transitionItineraire2(){
    if(document.getElementById('menuTextItineraire2').style.display == "block"){
        document.getElementById('menuTextItineraire2').style.display = "none";
        document.getElementById('menuItineraire2').style.background = "whitesmoke";
        document.getElementById('imagesDuVoyage2').style.display = "none";
        document.getElementById('imagesDuVoyage1').style.display = "block";
    }    else{
        document.getElementById('menuTextItineraire2').style.display = "block";
        document.getElementById('menuItineraire2').style.background = "white";
        document.getElementById('imagesDuVoyage2').style.display = "block";
        document.getElementById('imagesDuVoyage1').style.display = "none";
        document.getElementById('imagesDuVoyage3').style.display = "none";
        document.getElementById('imagesDuVoyage4').style.display = "none";
    }
}
function transitionHebergement2(){   
    if(document.getElementById('menuTextHebergement2').style.display == "block"){
        document.getElementById('menuTextHebergement2').style.display = "none";
        document.getElementById('menuHebergement2').style.background = "whitesmoke";
        document.getElementById('imagesDuVoyage3').style.display = "none";
        document.getElementById('imagesDuVoyage1').style.display = "block"; 
    }   else{
        document.getElementById('menuTextHebergement2').style.display = "block";
        document.getElementById('menuHebergement2').style.background = "white";
        document.getElementById('imagesDuVoyage3').style.display = "block";
        document.getElementById('imagesDuVoyage1').style.display = "none";    
        document.getElementById('imagesDuVoyage2').style.display = "none";
        document.getElementById('imagesDuVoyage4').style.display = "none";
    }
}
function transitionBudget2(){
    if(document.getElementById('menuTextBudget2').style.display == "block"){
        document.getElementById('menuTextBudget2').style.display = "none";
        document.getElementById('menuBudget2').style.background = "whitesmoke";
        document.getElementById('imagesDuVoyage4').style.display = "none";
        document.getElementById('imagesDuVoyage1').style.display = "block";   
    }    else{
        document.getElementById('menuTextBudget2').style.display = "block";
        document.getElementById('menuBudget2').style.background = "white";
        document.getElementById('imagesDuVoyage4').style.display = "block"; 
        document.getElementById('imagesDuVoyage1').style.display = "none";  
        document.getElementById('imagesDuVoyage2').style.display = "none";
        document.getElementById('imagesDuVoyage3').style.display = "none"; 
    }
}*/
positionAccueil = 1;

function sauter(variante) {
    positionAccueil = variante;
    position(positionAccueil);
}

function decaler(decalage) {
    if (positionAccueil + decalage >= 1 && positionAccueil + decalage <= 3) {
        positionAccueil += decalage;
        position(positionAccueil);
    }
}

function position(variante) {

    document.getElementById('gauche').style.cursor = "url(img/decorations/flecheGauche.svg), w-resize"
    document.getElementById('droite').style.cursor = "url(img/decorations/flecheDroite.svg), e-resize"

    document.getElementById('rondBlanc1').style.backgroundColor = "rgb(255, 255, 255)"
    document.getElementById('rondBlanc2').style.backgroundColor = "rgb(255, 255, 255)"
    document.getElementById('rondBlanc3').style.backgroundColor = "rgb(255, 255, 255)"

    if (variante == 1) {
        document.getElementById('imageHotel').style.transform = "translateX(0%)";
        document.getElementById('imageCroisiere').style.transform = "translateX(100%)";
        document.getElementById('imageSafari').style.transform = "translateX(200%)";

        document.getElementById('gauche').style.cursor = "url(img/decorations/croix.svg), not-allowed"

        document.getElementById('rondBlanc1').style.backgroundColor = "rgb(45, 37, 117)"

    } else if (variante == 2) {
        document.getElementById('imageHotel').style.transform = "translateX(-100%)";
        document.getElementById('imageCroisiere').style.transform = "translateX(0%)";
        document.getElementById('imageSafari').style.transform = "translateX(100%)";

        document.getElementById('rondBlanc2').style.backgroundColor = "rgb(117, 37, 86)"

    } else if (variante == 3) {
        document.getElementById('imageHotel').style.transform = "translateX(-200%)";
        document.getElementById('imageCroisiere').style.transform = "translateX(-100%)";
        document.getElementById('imageSafari').style.transform = "translateX(0%)";

        document.getElementById('droite').style.cursor = "url(img/decorations/croix.svg), not-allowed"

        document.getElementById('rondBlanc3').style.backgroundColor = "rgb(117, 80, 37)"
    }
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
    document.getElementById('imagesDuVoyage1').style.display = "block";
    document.getElementById('imagesDuVoyage2').style.display = "none";
    document.getElementById('imagesDuVoyage3').style.display = "none";
    document.getElementById('imagesDuVoyage4').style.display = "none";
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
    document.getElementById('imagesDuVoyage1').style.display = "none";
    document.getElementById('imagesDuVoyage2').style.display = "block";
    document.getElementById('imagesDuVoyage3').style.display = "none";
    document.getElementById('imagesDuVoyage4').style.display = "none";
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
    document.getElementById('imagesDuVoyage1').style.display = "none";
    document.getElementById('imagesDuVoyage2').style.display = "none";
    document.getElementById('imagesDuVoyage3').style.display = "block";
    document.getElementById('imagesDuVoyage4').style.display = "none";
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
    document.getElementById('imagesDuVoyage1').style.display = "none";
    document.getElementById('imagesDuVoyage2').style.display = "none";
    document.getElementById('imagesDuVoyage3').style.display = "none";
    document.getElementById('imagesDuVoyage4').style.display = "block";
}
function transitionPresentation2(){
    if(document.getElementById('menuTextPresentation2').style.display == "none"){
        document.getElementById('menuTextPresentation2').style.display = "block";
        document.getElementById('menuPresentation2').style.background = "white";
    }else{
        document.getElementById('menuTextPresentation2').style.display = "none";
        document.getElementById('menuPresentation2').style.background = "whitesmoke";
    }
}
function transitionItineraire2(){
    if(document.getElementById('menuTextItineraire2').style.display == "block"){
        document.getElementById('menuTextItineraire2').style.display = "none";
        document.getElementById('menuItineraire2').style.background = "whitesmoke";
        document.getElementById('imagesDuVoyage2').style.display = "none";
        document.getElementById('imagesDuVoyage1').style.display = "block";
    }    else{
        document.getElementById('menuTextItineraire2').style.display = "block";
        document.getElementById('menuItineraire2').style.background = "white";
        document.getElementById('imagesDuVoyage2').style.display = "block";
        document.getElementById('imagesDuVoyage1').style.display = "none";
        document.getElementById('imagesDuVoyage3').style.display = "none";
        document.getElementById('imagesDuVoyage4').style.display = "none";
    }
}
function transitionHebergement2(){   
    if(document.getElementById('menuTextHebergement2').style.display == "block"){
        document.getElementById('menuTextHebergement2').style.display = "none";
        document.getElementById('menuHebergement2').style.background = "whitesmoke";
        document.getElementById('imagesDuVoyage3').style.display = "none";
        document.getElementById('imagesDuVoyage1').style.display = "block"; 
    }   else{
        document.getElementById('menuTextHebergement2').style.display = "block";
        document.getElementById('menuHebergement2').style.background = "white";
        document.getElementById('imagesDuVoyage3').style.display = "block";
        document.getElementById('imagesDuVoyage1').style.display = "none";    
        document.getElementById('imagesDuVoyage2').style.display = "none";
        document.getElementById('imagesDuVoyage4').style.display = "none";
    }
}
function transitionBudget2(){
    if(document.getElementById('menuTextBudget2').style.display == "block"){
        document.getElementById('menuTextBudget2').style.display = "none";
        document.getElementById('menuBudget2').style.background = "whitesmoke";
        document.getElementById('imagesDuVoyage4').style.display = "none";
        document.getElementById('imagesDuVoyage1').style.display = "block";   
    }    else{
        document.getElementById('menuTextBudget2').style.display = "block";
        document.getElementById('menuBudget2').style.background = "white";
        document.getElementById('imagesDuVoyage4').style.display = "block"; 
        document.getElementById('imagesDuVoyage1').style.display = "none";  
        document.getElementById('imagesDuVoyage2').style.display = "none";
        document.getElementById('imagesDuVoyage3').style.display = "none"; 
    }
}
