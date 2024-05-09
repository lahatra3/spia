document.getElementById('cards').onmousemove = (e) => {
  for (const card of document.getElementsByClassName('card')) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty(
      `background`,
      ` radial-gradient(
    600px circle at var(${x}) var(${y}),
    rgba(255, 255, 255, 0.4),
    transparent 40%
  )`
    );
  }
};
