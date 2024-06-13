const cols = document.querySelectorAll('.col')

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

        col.style.background = generateRandomColor()
    })
}
setRandomColors()