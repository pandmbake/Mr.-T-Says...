let currentAudio;

const clips = [
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

  
  const playButton = document.getElementById('t');
  
  playButton.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
    }
  
    const randomIndex = Math.floor(Math.random() * clips.length);
  const randomClip = clips[randomIndex];

  currentAudio = new Audio(randomClip);
  currentAudio.play();
});






  
  
  