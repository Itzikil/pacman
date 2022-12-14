'use strict'

function renderBoard(mat, selector) {

    var strHTML = '<table border="0"><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = 'cell cell-' + i + '-' + j

            if (i === 0 || i === mat.length - 1){
                strHTML += `<td class="${className} floor">${cell}</td>`
                }
            else if ( j === 0 || j === mat[0].length - 1 ||
                (j === 2 && i > 3 && i < mat.length - 2)||
                (j === mat[0].length -3 && i > 3 && i < mat.length - 2)||
                (j ===8  && i > 1 && i < mat.length - 2)||
                (j ===10  && i > 1 && i < mat.length - 2)) {
                strHTML += `<td class="${className} wall">${cell}</td>`
                }else{

                    strHTML += `<td class="${className}">${cell}</td>`
                }
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
    
    const elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
    // Select the elCell and set the value
    const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
    elCell.innerHTML = value
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
