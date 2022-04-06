const navItems = document.querySelector('.nav-items');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navigationBarClose = document.querySelector('.navbar');
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
		pic: './images/desktop-images/img1.png',
		companyId: 'CANOPY',
		work: 'Back End Dev',
		date: 2015,
		description:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
		techUse: ['html', 'css', 'javaScript'],
		projectDemo: 'https://epaltechs.github.io/Setup-Portfolio/',
		projectSource: 'https://epaltechs.github.io/Setup-Portfolio',
	},

	{
		id: 2,
		name: 'Multi-Post Stories',
		pic: './images/desktop-images/img2.png',
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
		pic: './images/desktop-images/img3.png',
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
		pic: './images/desktop-images/img4.png',
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
let mainContainer = document.getElementById('workscontainer');
let popup = document.getElementById('popup');
const windowPopup = document.querySelector('.winUp');
function popupFunc(id) {
  let oneCard = projects.filter(el => el.id == id);
  oneCard = oneCard[0];
  const popupContent = ` <div class="container windowPopup popup">
                <div class="pop-header">
                    <h4 class="h-4">${oneCard.name}</h4>
                    <span class="closePopup" onclick="closePopupFunc()"><i class="fa fa-times"></i></span>
                    <ul class="pop-description-element">
                        <li class="element" id="companyID">${oneCard.companyId}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="workType">${oneCard.work}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element" id="date">${oneCard.date}</li>
                    </ul>
                </div>
                <img class="work-pic" src=${oneCard.pic} alt="landing page view" />
                <img class="work-pic pop-img" src=${oneCard.pic} alt="nature image" />
                <div class="pop-element">
                    <p class="description-text">
                        ${oneCard.description}
                    </p>
                    <div class="pop-items">
                        <ul class="languages">
 ${oneCard.techUse.map((el)=>`<li class="lang">${el}</li>`).join('')}
                        </ul>
                        <div class="bottom-bar"></div>
                        <div class="navigation-links">
                            <form action=${oneCard.projectDemo} class="btnSource">
                                <span class="popup-link-icon">
                                  <input  type="submit" value="See live" />
                                <img src="./images/Icon-Export.png" alt="See live">
                                </span>
                            </form>
                            <form action=${oneCard.projectSource} class="btnSource">
                                <span class="popup-link-icon">
                                  <input  type="submit" value="See Source" />
                                <img src="./images/Icon-GitHub.png" alt="See source">
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>`
  windowPopup.style.display = 'flex';
  navigationBarClose.style.display = 'none';
  document.body.style.overflow = 'hidden';
  return popup.innerHTML = popupContent;
}
function closePopupFunc() {
  windowPopup.style.display = 'none';
  navigationBarClose.style.display = 'flex';
  document.body.style.overflow = 'scroll';
  return;
}
function worksContainer() {
  let element = projects.map((val,index) => {
	const cards =index % 2===0? `<div class="container">
  <img class="work-pic" src="./images/Portoflio_Card/work.png" alt="nature image" />
  <img class="work-pic" src=${val.pic} alt="landing page view" />
  <div class="work-description">
      <h4>${val.name}</h4>
      <ul class="description-element">
          <li>${val.companyId}</li>
          <li class="element">
              <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">${val.work}</li>
          <li class="element">
              <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">${val.date}</li>
      </ul>
      <p class="description-text">${val.description}</p>
      <ul class="languages">
       ${val.techUse.map((el)=>`<li class="lang">${el}</li>`).join('')}
      </ul>
      <button class="btn openPopup" id="firstBtn" type="submit" onclick="popupFunc(${val.id})">See Project</button>
  </div>
</div>`:
   `            <div class="container">
                <img class="work-pic" src="./images/Portoflio_Card/work1.png" alt="multi-post stories image" />
                <div class="work-description">
                    <h4>${val.name}</h4>
                    <ul class="description-element">
                        <li>${val.companyId}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element">${val.work}</li>
                        <li class="element">
                            <img class="bullet" src="./images/bullet.png" alt="bullet" />
                        </li>
                        <li class="element">${val.date}</li>
                    </ul>
                    <p class="description-text">${val.description}</p>
                    <ul class="languages">
                        ${val.techUse.map((el)=>`<li class="lang">${el}</li>`).join('')}
                    </ul>
                    <button class="btn openPopup" id="secondBtn" onclick="popupFunc(${val.id})" type="submit">See
                        Project</button>
                </div>
                <img class="work-pic-1" src=${val.pic} alt="professional art printing image" />
            </div>`
    return cards;
	})
	return element;
}

window.addEventListener('load', () => {
	mainContainer.innerHTML = worksContainer();
	return mainContainer;
});

// const nameID = document.getElementById('name');
// const imgSrc = document.getElementsByClassName('work-pic');
// const companyIdentity = document.getElementById('companyID');
// const workTitle = document.getElementById('workType');
// const documentDate = document.getElementById('date');
// const description = document.getElementById('descriptionTxt');
// const btnDemoProjectLink = document.querySelector('.btnDemo');
// const btnSourceProjectLink = document.querySelector('.btnSource');
// const btn1 = document.querySelector('#firstBtn');
// const btn2 = document.querySelector('#secondBtn');
// const btn3 = document.querySelector('#thirdBtn');
// const btn4 = document.querySelector('#lastBtn');
// const windowPopup = document.querySelector('.winUp');
// const closePopupWindow = document.querySelector('.closePopup');


// closePopupWindow.addEventListener('click', () => {
// 	windowPopup.style.display = 'none';
// 	navigationBarClose.style.display = 'flex';
// });

// btn1.addEventListener('click', () => {
// 	windowPopup.style.display = 'flex';
// 	navigationBarClose.style.display = 'none';
// });
// btn2.addEventListener('click', () => {
// 	windowPopup.style.display = 'flex';
// 	navigationBarClose.style.display = 'none';
// });
// btn3.addEventListener('click', () => {
// 	windowPopup.style.display = 'flex';
// 	navigationBarClose.style.display = 'none';
// });
// btn4.addEventListener('click', () => {
// 	windowPopup.style.display = 'flex';
// 	navigationBarClose.style.display = 'none';
// });

// const { projectContent } = projects;
// nameID.innerHTML = projectContent.name;
// imgSrc.src = projectContent.pic;
// companyIdentity.innerHTML = projectContent.companyId;
// workTitle.innerHTML = projectContent.work;
// documentDate.innerHTML = projectContent.date;
// description.innerHTML = projectContent.description;
// const techLength = projectContent.techUse.length;

// for (let i = 0; i < techLength; i += 1) {
// 	const element = document.createElement('li');
// 	element.innerHTML = `${projectContent.techUse[i]}`;

// 	projects.techUse.appendChild(element);
// }
// btnDemoProjectLink.action = projectContent.btnDemoProjectLink;
// btnSourceProjectLink.action = projectContent.btnSourceProjectLink;

// for (let i = 0; i < projects.length; i += 1) {
// 	document.querySelector('popup').innerHTML = `

//         <div class="container windowPopup popup">
//                 <div class="pop-header">
//                     <h4 class="h-4">${projectContent[i].companyId}</h4>
//                     <span class="closePopup"><i class="fa fa-times"></i></span>
//                     <ul class="pop-description-element">
//                         <li class="element" id="companyID">${projectContent[i].companyIdentity}</li>
//                         <li class="element">
//                             <img class="bullet" src="./images/bullet.png" alt="bullet" />
//                         </li>
//                         <li class="element" id="workType">${projectContent[i].work_title}Back End Dev</li>
//                         <li class="element">
//                             <img class="bullet" src="./images/bullet.png" alt="bullet" />
//                         </li>
//                         <li class="element" id="date">${projectContent[i].documentDate}2015</li>
//                     </ul>
//                 </div>
//                 <img id="imgID" class="work-pic" src="${projectContent[i].imgSrc}" alt="landing page view" />
//                 <img id="imgID" class="work-pic pop-img" src="${projectContent[i].imgSrc}" alt="nature image" />
//                 <div class="pop-element">
//                     <p class="description-text" id="descriptionTxt">
//                         ${projectContent[i].description}
//                     </p>
//                     <p class="description-tex" id="descriptionTxt">
//                         ${projectContent[i].description}
//                     </p>
//                     <div class="pop-items">
//                         <ul class="languages" id="languages-1">
//                             <li class="lang" id="techUse">${projectContent[i].techUse}html</li>
//                             <li class="lang1" id="techUse">${projectContent[i].techUse}css</li>
//                             <li class="lang2" id="techUse">${projectContent[i].techUse}javaScript</li>
//                         </ul>
//                         <div class="bottom-bar"></div>
//                         <div class="navigation-links">
//                             <button action="${projectContent[i].projectDemo}" class="btn btnSource">
//                                 <input class = "btn" type="submit" value="See live" /><i class="fab fa-external-link-alt"></i>
//                             </button>
//                             <button action="${projectContent[i].projectSource}" class="btn btnDemo">
//                                 <input class = "btn" type="submit" value="See Source"> <i class="fab fa-github"></i>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//   `;
// }
