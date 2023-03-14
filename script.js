let aboutContent = document.getElementById("content-about");
let discoveryContent = document.getElementById("content-discovery");
let divisionsContent = document.getElementById("content-divisions");
let databaseContent = document.getElementById("content-database");
let centralArchiveContent = document.getElementById("content-central-archive");
let libraryAndECenterContent = document.getElementById("content-library-and-e-center");


function onClickDiscovery() {
  aboutContent.style.display = "none";
  divisionsContent.style.display = "none";
  databaseContent.style.display = "none";
  centralArchiveContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
}

function onClickAbout() {
  databaseContent.style.display = "none";
  centralArchiveContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
  divisionsContent.style.display = "none";
  aboutContent.style.display = "flex";
  discoveryContent.style.display = "none";
  expand = false;
}

function onClickDivisions() {
  aboutContent.style.display = "none";
  databaseContent.style.display = "none";
  centralArchiveContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
  divisionsContent.style.display = "flex";
  discoveryContent.style.display = "none";
}

function onClickDatabase() {
  divisionsContent.style.display = "none";
  aboutContent.style.display = "none";
  centralArchiveContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
  databaseContent.style.display = "flex";
  discoveryContent.style.display = "none";
}

function onClickCentralArchive() {
  databaseContent.style.display = "none";
  divisionsContent.style.display = "none";
  aboutContent.style.display = "none";
  libraryAndECenterContent.style.display = "none";
  centralArchiveContent.style.display = "flex";
  discoveryContent.style.display = "none";
}

function onClickLibraryAndECenter() {
  centralArchiveContent.style.display = "none";
  databaseContent.style.display = "none";
  divisionsContent.style.display = "none";
  aboutContent.style.display = "none";
  libraryAndECenterContent.style.display = "flex";
  discoveryContent.style.display = "none";
}

function updateTime() {
  let now = new Date();
  let options = {
    hour: 'numeric',
    minute: 'numeric',
  };
  document.getElementById("local-time").innerText = "Time: " + Intl.DateTimeFormat('en-UK', options).format(now);
}

setInterval(updateTime, 1000);


let btnContainer = document.getElementById("navbar-nav");
let btns = document.getElementsByClassName("nav-link");

for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener('click', function(){
    let current = document.getElementsByClassName("asem");
    current[0].className = current[0].className.replace(" asem");
    this.className += " asem";
  })
}