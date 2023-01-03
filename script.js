const clips = new Audio [
    "audio/big-mouth.mp3",
    "audio/bumper.mp3",
    "audio/dont-like-church-sneaking-in-on-my-privacy-understand.mp3",
    "audio/hi-there.mp3",
    "audio/i-got-some-special-for-you.mp3",
    "audio/i-wanna-real-shortly-she-dont-get-tired-youre-crazy-rap.mp3",
    "audio/lied-2.mp3",
    "audio/shut-up-fool.mp3",
    "audio/what-you-talking-about-man.mp3",
    "audio/you-know-shut-up-with-your-jibber-jabber-give-you-a-little-job-boo.mp3",
    "audio/you-nut.mp3",
    "audio/youre-very-lucky-man-i-could-have-been-real-mad.mp3",
];

function getRandomClip() {
    return clips[Math.floor(Math.random() * clips.length)];
  }

  function playAudio() {
    const element = document.getElementById('t');
    const randomClip = getRandomClip();
    document.getElementById('t').play();
  }
  
  const image = document.getElementById('t');
  image.addEventListener('click', playAudio);


  /*
  
  function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
  }
  
  function changeInnerHTML() {
    const element = document.getElementById('fact');
    const randomFact = getRandomFact();
    document.getElementById('fact').innerHTML = randomFact;
  }
  
  const button = document.getElementById('button');
  button.addEventListener('click', changeInnerHTML);*/
  
  
  
  