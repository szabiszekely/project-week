const snowflakes = document.querySelectorAll('.snowflake');

snowflakes.forEach(snowflake => {
  const maxTop = window.innerHeight;
  const maxLeft = window.innerWidth;
  const top = Math.floor(Math.random() * maxTop);
  const left = Math.floor(Math.random() * maxLeft);

  snowflake.style.top = $;{top}px;
  snowflake.style.left = $;{left}px;
});