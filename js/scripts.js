var PersonalInfo = document.getElementById('PersonalInfo');
var Education = document.getElementById('Education');
var Experience = document.getElementById('Experience');
var Contact = document.getElementById('Contact');
var Social = document.getElementById('Social');

var btninfor = document.getElementById('btninfo');
var btneduc = document.getElementById('btnedu');
var btnexpe = document.getElementById('btnexp');
var bntcont = document.getElementById('bntcont');
var bntsoc = document.getElementById('bntsoc');


function displayPersonalInfo(){
    PersonalInfo.style.transform="translateX(0)";
    Education.style.transform="translateX(100%)";
    Experience.style.transform="translateX(100%)";
    Contact.style.transform="translateX(100%)";
    Social.style.transform="translateX(100%)";

    btninfor.style.color="#008080"
    btneduc.style.color="#fff"
    btnexpe.style.color="#fff"
    bntcont.style.color="#fff"
    bntsoc.style.color="#fff"

    PersonalInfo.style.transitionDelay=".5s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
    Social.style.transitionDelay="0s";

}
function displayEducation(){
    PersonalInfo.style.transform="translateX(100%)";
    Education.style.transform="translateX(0)";
    Experience.style.transform="translateX(100%)";
    Contact.style.transform="translateX(100%)";
    Social.style.transform="translateX(100%)";

    btninfor.style.color="#fff"
    btneduc.style.color="#008080"
    btnexpe.style.color="#fff"
    bntcont.style.color="#fff"
    bntsoc.style.color="#fff"

    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay=".5s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
    Social.style.transitionDelay="0s";
}
function displayExperience(){
    PersonalInfo.style.transform="translateX(100%)";
    Education.style.transform="translateX(100%)";
    Experience.style.transform="translateX(0)";
    Contact.style.transform="translateX(100%)";
    Social.style.transform="translateX(100%)";

    btninfor.style.color="#fff "
    btneduc.style.color="#fff"
    btnexpe.style.color="#008080"
    bntcont.style.color="#fff"
    bntsoc.style.color="#fff"

    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay=".5s";
    Contact.style.transitionDelay="0s";
    Social.style.transitionDelay="0s";
}
function displayContact(){
    PersonalInfo.style.transform="translateX(100%)";
    Education.style.transform="translateX(100%)";
    Experience.style.transform="translateX(100%)";
    Contact.style.transform="translateX(0)";
    Social.style.transform="translateX(100%)";

    btninfor.style.color="#fff"
    btneduc.style.color="#fff"
    btnexpe.style.color="#fff"
    bntcont.style.color="#008080"
    bntsoc.style.color="#fff"

    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay=".5s";
    Social.style.transitionDelay="0s";
}
function displaySocial(){
    PersonalInfo.style.transform="translateX(100%)";
    Education.style.transform="translateX(100%)";
    Experience.style.transform="translateX(100%)";
    Contact.style.transform="translateX(100%)";
    Social.style.transform="translateX(0)";

    btninfor.style.color="#fff"
    btneduc.style.color="#fff"
    btnexpe.style.color="#fff"
    bntcont.style.color="#fff"
    bntsoc.style.color="#008080"

    PersonalInfo.style.transitionDelay="0s";
    Education.style.transitionDelay="0s";
    Experience.style.transitionDelay="0s";
    Contact.style.transitionDelay="0s";
    Social.style.transitionDelay=".5s";
}