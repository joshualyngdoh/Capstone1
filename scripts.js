/* eslint-disable no-unused-vars */
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const speakersCards = document.querySelector('.speakers-a');

function OpenMenu() {
  document.querySelector('.mobilemenu').style.display = 'flex';
  document.querySelector('.closeicon').style.display = 'block';
  document.querySelector('main').style.filter = ' blur(6px)';
}

function CloseMenu() {
  document.querySelector('.mobilemenu').style.display = 'none';
  document.querySelector('header').style.filter = ' blur(0)';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('headeline').style.filter = ' blur(0)';
  document.querySelector('footer').style.filter = ' blur(0)';
}

about.addEventListener('click', () => {
  document.querySelector('.mobilemenu').style.display = 'none';
  document.querySelector('header').style.filter = ' blur(0)';
  document.querySelector('.headeline').style.filter = ' blur(0)';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('footer').style.filter = ' blur(0)';
});

home.addEventListener('click', () => {
  document.querySelector('.mobilemenu').style.display = 'none';
  document.querySelector('header').style.filter = ' blur(0)';
  document.querySelector('.headeline').style.filter = ' blur(0)';
  document.querySelector('main').style.filter = ' blur(0)';
  document.querySelector('footer').style.filter = ' blur(0)';
});

const SpeakersList = [
  {
    speakername: 'Bill Gates',
    image: 'images/speaker 1.jpg',
    designation: 'Co-founder of Microsoft',
    bio: 'William Henry Gates III is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft',
  },
  {
    speakername: 'Linus Torvalds',
    image: 'images/speaker 2.jpg',
    designation: 'Founder of Linux',
    bio: 'Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and the lead developer of the Linux kernel. He also created the distributed version control system Git. ',
  },
  {
    speakername: 'Tim Cook',
    image: 'images/speaker 4.jpg',
    designation: 'CEO of Apple',
    bio: 'Timothy Donald Cook is an American business executive who has been the chief executive officer of Apple Inc. since 2011. Cook previously served as the companys chief operating officer under its co-founder Steve Jobs.',
  },
  {
    speakername: 'Sundar Pichai',
    image: 'images/speaker 3.jpg',
    designation: 'CEO of Google',
    bio: 'Pichai Sundararajan, better known as Sundar Pichai, is an Indian-American business executive. He is the chief executive officer of Alphabet Inc. and its subsidiary Google. Born in Madurai, India, Pichai earned his degree from IIT Kharagpur in metallurgical engineering.',
  },
  {
    speakername: 'Brian Chesky',
    image: 'images/speaker 5.jpg',
    designation: 'CEO of Airbnb',
    bio: 'Brian Joseph Chesky is an American businessman and industrial designer. He is the co-founder and CEO of the peer-to-peer lodging service Airbnb. Chesky was named one of Times "100 Most Influential People of 2015".',
  },
  {
    speakername: 'Steve Jobs',
    image: 'images/speaker 6.jpg',
    designation: 'Co-founder of Apple',
    bio: 'Steve Jobs was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Companys board of directors following its acquisition of Pixar; and the founder, chairman, and CEO of NeXT.',
  },
];

for (let i = 0; i < SpeakersList.length; i += 1) {
  speakersCards.innerHTML += `
  <div class="speakers_wrap">
  <img src="${SpeakersList[i].image}" alt="speakers">
  <div class="present">
      <h4>${SpeakersList[i].speakername}</h4>
      <p class="desc">${SpeakersList[i].designation}</p>
      <hr>
      <p>${SpeakersList[i].bio}</p>
  </div>
</div>
  `;
}