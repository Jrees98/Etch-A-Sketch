const mainGrid = document.querySelector('.mainGrid')

for (let i = 1; i<= 256 ; i++) {
    const div = document.createElement('div')
    mainGrid.appendChild(div)
    div.classList.add('gridCell')
}

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
        cell.style.backgroundColor = ''; // Reset to default (empty string)
    });
});


//Grid Size

const gridSizer = document.querySelector('.sizer')

gridSizer.addEventListener('click', () => {
    let gridInteger = prompt('Enter grid size: ')
    console.log(gridInteger)
})
