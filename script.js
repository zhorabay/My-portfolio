const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');
const worksSection = document.getElementById('cards');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navMenu.classList.toggle('is-active');
});

document.querySelectorAll('.nav').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('is-active');
  navMenu.classList.remove('is-active');
}));

const cardsData = [
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea <br><br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
];

function display() {
  let displayCard = '';
  for (let i = 0; i < 6; i += 1) {
    displayCard += `
  
                <div class="card">
                    <img class="card-media" src="${cardsData[i].image}" alt="placeholder">
                    <div class="sub-card"> <h2>${cardsData[i].name} <br> Gain+Glory</h2>
                        <div class="languages">
                            <ul>
                               <li>${cardsData[i].technologies[0]}</li>
                               <li>${cardsData[i].technologies[1]}</li>
                               <li>${cardsData[i].technologies[2]}</li>
                               <li>${cardsData[i].technologies[3]}</li>
                            </ul>
                        </div>
                        <button class="wrapper seepopup">See project</button>
                    </div>
                </div>
  
     `;
  }
  worksSection.innerHTML = displayCard;
}

display();

const showPopupBtn = document.querySelectorAll('.seepopup');
const popUpContainer = document.createElement('section');
popUpContainer.className = 'popup_section';
popUpContainer.classList.add('bg_color6');
showPopupBtn.forEach((e, i) => {
  e.addEventListener('click', () => {
    const popupEle = `
    <article class="popup_article">

        <button type="button" class="close_popup">&times;</button>
    
        <img class="bg-popup" src="images/Snapshoot Portfolio.jpg" alt="">
        <img class="bg-popup-m" src="images/SPMobile.jpg" alt="">
        <div class="mod-div-1">
            <div class="title-popup">
                <h4>Keeping track of hundreds of components</h4>
                <div class="mod-div-2-1">
                    <button  class="wrapper" id="see-projects-btn" type="submit"><a href="${cardsData[i].liveLink}"><span>See Live</span><img class="icn" src="images/Icon-Export.png" alt="see-live">
                    </a></button>
                    <button class="wrapper" id="see-projects-btn" type="submit"><a href="${cardsData[i].Source}"><span>See Source</span><img class="icn" src="images/Icon-GitHub.png" alt="see-source">
                    </a></button>
                </div>
            </div>
            <div class="desln">
                <ul class="desln">
                    <li><a class="lang-popup" href="#">Codekit</a></li>
                    <li><a class="lang-popup" href="#">GitHub</a></li>
                    <li><a class="lang-popup" href="#">Javascript</a></li>
                    <li><a class="lang-popup" href="#">Bootstrap</a></li>
                    <li><a class="lang-popup" href="#">Terminal</a></li>
                    <li><a class="lang-popup" href="#">Codepin</a></li>
                </ul>
            </div>
            <div class="mobln">
                <ul>
                    <li><a class="lang-popup" href="#">Ruby on Rails</a></li>
                    <li><a class="lang-popup" href="#">CSS</a></li>
                    <li><a class="lang-popup" href="#">Javascript</a></li>
                </ul>
            </div>
        </div>

        <div class="mod-div-3"><p class="details">${cardsData[i].description}</p></div>
        <div class="mod-div-2">
            <button  class="wrapper" id="see-projects-btn" type="submit"><a href="${cardsData[i].liveLink}"><span>See Live</span><img class="icn" src="images/Icon-Export.png" alt="see-live">
            </a></button>
            <button class="wrapper" id="see-projects-btn" type="submit"><a href="${cardsData[i].Source}"><span>See Source</span><img class="icn" src="images/Icon-GitHub.png" alt="see-source">
            </a></button>
        </div>
        
    </article>  

    `;

    const body = document.querySelector('body');
    body.appendChild(popUpContainer);
    const popUpBox = document.querySelector('.popup_section');
    popUpBox.innerHTML = popupEle;
    const closePopup = document.querySelectorAll('.close_popup');
    const closePopup2 = document.querySelectorAll('.bg-popup-m');
    const closePopup3 = document.querySelectorAll('.bg_color6');
    closePopup.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
    closePopup2.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
    closePopup3.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
  });
});


const email = document.getElementById('email');
const error = email.nextElementSibling;

const emailRegExp = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

window.addEventListener('load', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? 'valid' : 'invalid';
});

email.addEventListener('input', () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
  } else {
    email.className = 'invalid';
    error.textContent = 'Please enter a valid email address! Email adress should be in lower case';
  }
});