const containerBox = document.querySelector('.container');

for (let i = 0; i < 16 * 16; i++) {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  containerBox.appendChild(grid);
}

const grids = document.querySelectorAll('.grid');

grids.forEach((grid) => {
  grid.addEventListener('mouseover', () => {
    grid.style.backgroundColor = 'blue'; // Change the color to your desired color
  });
});

