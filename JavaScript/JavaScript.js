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

