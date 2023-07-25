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
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    Source: 'https://github.com/zhorabay/My-portfolio',
    liveLink: 'https://github.com/zhorabay/My-portfolio',

  },
  {
    name: 'Multi-Post Stories',
    image: 'images/images.png',
    technologies: ['Ruby on Rails', 'CSS', 'JavaScript', 'HTML'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
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