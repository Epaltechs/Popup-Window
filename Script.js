const navItems = document.querySelector('.nav-items');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

function show() {
  navItems.style.display = 'flex';
  navItems.style.right = '0';
}

function close() {
  navItems.style.right = '100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.querySelectorAll('.item');
navItems.addEventListener('click', () => {
  navItems.style.right = '100%';
});

const projects = [
  {
  id: 1,
    name: 'Tonic',
    pic: 'images/section-work/snapshoot4.png',
    companyId: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techUse: ['html', 'css', 'javaScript'],
    projectDemo: 'https://epaltechs.github.io/Setup-Portfolio/',
    projectSource: 'https://epaltechs.github.io/Setup-Portfolio',
  },

  {
  id: 2,
    name: 'Multi-Post Stories',
    pic: 'images/section-work/snapshoot3.png',
    companyId: 'FACEBOOK',
    work: 'Full Stack Dev',
    date: 2015,
    description:
            'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming <br> their friends.',
    techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectDemo: 'https://epaltechs.github.io/Setup-Portfolio/',
    projectSource: 'https://epaltechs.github.io/Setup-Portfolio',
  },

  {
  id: 3,
    name: 'Facebook 360',
    pic: 'images/section-work/snapshoot.png',
    companyId: 'FACEBOOK',
    work: 'Full Stack Dev',
    date: 2015,
    description:
            'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectDemo: 'https://epaltechs.github.io/Setup-Portfolio/',
    projectSource: 'https://epaltechs.github.io/Setup-Portfolio',
  },

 {
  id: 4,
    name: 'Uber Navigation',
    pic: 'images/section-work/snapshoot1.png',
    companyId: 'Uber',
    work: 'Lead Developer',
    date: 2015,
    description:
            'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectDemo: 'https://epaltechs.github.io/Setup-Portfolio/',
    projectSource: 'https://epaltechs.github.io/Setup-Portfolio',
  },
];
let mainContainer = document.getElementById("workscontainer");
function worksContainer() {
  
  let element=projects.map(val=>{   
  return `<div class="container">
  <img class="work-pic" src="./images/Portoflio_Card/work.png" alt="nature image" />
  <img class="work-pic" src="./images/desktop-images/img1.png" alt="landing page view" />
  <div class="work-description">
      <h4>Tonic</h4>
      <ul class="description-element">
          <li>CANOPY</li>
          <li class="element">
              <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">Full Stack Dev</li>
          <li class="element">
              <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">2015</li>
      </ul>
      <p class="description-text">
          A daily selection of privately personalized reads; no accounts or sign-ups required.
      </p>
      <ul class="languages" id="languages-1">
          <li class="lang">html</li>
          <li class="lang1">css</li>
          <li class="lang2">javaScript</li>
      </ul>
      <button class="btn openPopup" id="firstBtn" type="submit">See Project</button>
  </div>
</div>`

  });    return element;
}

window.addEventListener("load",()=> mainContainer.innerHTML=worksContainer);

const nameID = document.getElementById('name');
const imgSrc = document.getElementsByClassName('work-pic');
const companyIdentity = document.getElementById('companyID');
const workTitle = document.getElementById('workType');
const documentDate = document.getElementById('date');
const description = document.getElementById('descriptionTxt');
const btnDemoProjectLink = document.querySelector('.btnDemo');
const btnSourceProjectLink = document.querySelector('.btnSource');
const btn1 = document.querySelector('#firstBtn');
const btn2 = document.querySelector('#secondBtn');
const btn3 = document.querySelector('#thirdBtn');
const btn4 = document.querySelector('#lastBtn');
const windowPopup = document.querySelector('.winUp');
const closePopupWindow = document.querySelector('.closePopup');
const navigationBarClose = document.querySelector('.navbar');

closePopupWindow.addEventListener('click', () => {
  windowPopup.style.display = 'none';
  navigationBarClose.style.display = 'flex';
});

btn1.addEventListener('click', () => {
  windowPopup.style.display = 'flex';
  navigationBarClose.style.display = 'none';
});
btn2.addEventListener('click', () => {
  windowPopup.style.display = 'flex';
  navigationBarClose.style.display = 'none';
});
btn3.addEventListener('click', () => {
  windowPopup.style.display = 'flex';
  navigationBarClose.style.display = 'none';
});
btn4.addEventListener('click', () => {
  windowPopup.style.display = 'flex';
  navigationBarClose.style.display = 'none';
});

const { projectContent } = projects;
nameID.innerHTML = projectContent.name;
imgSrc.src = projectContent.pic;
companyIdentity.innerHTML = projectContent.companyId;
workTitle.innerHTML = projectContent.work;
documentDate.innerHTML = projectContent.date;
description.innerHTML = projectContent.description;
const techLength = projectContent.techUse.length;

for (let i = 0; i < techLength; i += 1) {
  const element = document.createElement('li');
  element.innerHTML = `${projectContent.techUse[i]}`;

  projects.techUse.appendChild(element);
}
btnDemoProjectLink.action = projectContent.btnDemoProjectLink;
btnSourceProjectLink.action = projectContent.btnSourceProjectLink;

for (let i = 0; i < projects.length; i += 1) {
  document.querySelector('popup').innerHTML = `
       
        <div class="container windowPopup popup">
                <div class="pop-header">
                    <h4 class="h-4">${projectContent[i].companyId}</h4>
                    <span class="closePopup"><i class="fa fa-times"></i></span>
                    <ul class="pop-description-element">
                        <li class="element" id="companyID">${projectContent[i].companyIdentity}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="workType">${projectContent[i].work_title}Back End Dev</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="date">${projectContent[i].documentDate}2015</li>
                    </ul>
                </div>
                <img id="imgID" class="work-pic" src="${projectContent[i].imgSrc}" alt="landing page view" />
                <img id="imgID" class="work-pic pop-img" src="${projectContent[i].imgSrc}" alt="nature image" />
                <div class="pop-element">
                    <p class="description-text" id="descriptionTxt">
                        ${projectContent[i].description}
                    </p>
                    <p class="description-tex" id="descriptionTxt">
                        ${projectContent[i].description}
                    </p>
                    <div class="pop-items">
                        <ul class="languages" id="languages-1">
                            <li class="lang" id="techUse">${projectContent[i].techUse}html</li>
                            <li class="lang1" id="techUse">${projectContent[i].techUse}css</li>
                            <li class="lang2" id="techUse">${projectContent[i].techUse}javaScript</li>  
                        </ul>
                        <div class="bottom-bar"></div>
                        <div class="navigation-links">
                            <button action="${projectContent[i].projectDemo}" class="btn btnSource">
                                <input class = "btn" type="submit" value="See live" /><i class="fab fa-external-link-alt"></i>
                            </button>
                            <button action="${projectContent[i].projectSource}" class="btn btnDemo">
                                <input class = "btn" type="submit" value="See Source"> <i class="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
  `;
} 
