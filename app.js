const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', event => {
    if(event.code.toLowerCase() === 'space'){
        setRandomColors();
    }
})
document.addEventListener('click', (event) => {
    const type = event.target.dataset.type

    if(type === 'lock') {
        console.log('lock')
    }
})
function generateRandomColor(){
    //RGB
    //#FF0000
    //#00FF00
    //#0000FF

    const hexCodes = '0123456789ABCDEFG'
    let color = ''
    for(let i = 0; i < 6; i++){
        // получаем символ из hexCodes случайным образом,
        // Math.floor округляем чтоб получить целое
        // Math.random() получаем рандомное число и умножаем на длину hexCodes
        color += hexCodes[Math.floor(Math.random() * hexCodes.length )]

    }
    return '#' + color;
}

function setRandomColors(){
    cols.forEach((col) => {
        const text = col.querySelector('h2')        
        const button = col.querySelector('button');

        const color = chroma.random(); 

        text.textContent = color;
        col.style.background = color;

        setTextColor(text, color); 
        setTextColor(button, color); 
    })
}

function setTextColor(text, color){
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()