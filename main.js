const button = document.querySelector('.bts');
 const catImage = document.getElementById('catImage');

 button.addEventListener('mouseenter', () => {
     catImage.style.display = 'block';
 });

 button.addEventListener('mouseleave', () => {
     catImage.style.display = 'none';
 });
  const showVideoBtn = document.getElementById('showVideoBtn');
  const videoContainer = document.getElementById('videoContainer');
  const myVideo = document.getElementById('myVideo');

 
