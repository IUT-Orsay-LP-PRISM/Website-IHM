

const formesWrapper = document.querySelectorAll(".forme__wrapper");

document.addEventListener("mousemove", e => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  formesWrapper.forEach(formeWrapper => {
    const speed = -50;

    const xPosition = (x - 0.5) * speed;
    const yPosition = (y - 0.5) * speed;

    formeWrapper.style.transform = `translate(${xPosition}px, ${yPosition}px)`;
  });
});


