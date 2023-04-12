const moveImg = document.querySelector('.move-img');
const container = document.querySelector('body'); // ou un conteneur plus petit

container.addEventListener('mousemove', e => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const imgRect = moveImg.getBoundingClientRect();
  const centerX = imgRect.left + (imgRect.width / 2);
  const centerY = imgRect.top + (imgRect.height / 2);
  const deltaX = mouseX - centerX;
  const deltaY = mouseY - centerY;
  const percentX = deltaX / (container.clientWidth / 2);
  const percentY = deltaY / (container.clientHeight / 2);
  const transformString = `translate(${percentX * 10}px, ${percentY * 10}px)`;

  moveImg.style.transform = transformString;
});