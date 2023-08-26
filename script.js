const mainGrid = document.querySelector('.mainGrid')

function createGrid(size) {
    mainGrid.innerHTML = '';
    
    for (let i = 1; i <= size * size; i++) {
        const div = document.createElement('div');
        mainGrid.appendChild(div);
        div.classList.add('gridCell');
    }
    
    const cellSizePercentage = 100 / size; // Calculate percentage for cell size
    const gridCells = document.querySelectorAll('.gridCell');
    
    gridCells.forEach(cell => {
        cell.style.width = cellSizePercentage + '%';
        cell.style.height = cellSizePercentage + '%';
    });
}


createGrid(16)


const allCells = document.querySelectorAll('.gridCell')
allCells.forEach((cell) => {

    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'blue'
    })

})

//Reset button
const resetBtn = document.querySelector('.resetBtn')
resetBtn.addEventListener('click', () => {
    allCells.forEach(cell => {
        cell.style.backgroundColor = ''; 
    });
});


//Grid Size

const gridSizer = document.querySelector('.sizer')

gridSizer.addEventListener('click', () => {
    let gridInteger = prompt('Enter grid size: ')
    createGrid(gridInteger)
})
