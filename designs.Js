// Select color input
// Select size input
document.addEventListener("submit", changeGrid)
var table = document.getElementById("pixelCanvas")
var canves = document.getElementById("sizePicker")
// When size is submitted by the user, call makeGrid()

var height = document.getElementById("inputHeight").value
var width = document.getElementById("inputWidth").value
var grid = makeGrid(height, width)
document.body.appendChild(grid)

$('td').click(function () {
    var color = document.getElementById('colorPicker').value
    $(this).css('background-color', color)
})
function changeGrid(event) {
    var height = document.getElementById("inputHeight").value
    var width = document.getElementById("inputWidth").value
    var grid2 = makeGrid(height, width)

    document.body.replaceChild(grid2, grid)
    event.preventDefault()
    $('td').click(function () {
        var color = document.getElementById('colorPicker').value
        $(this).css('background-color', color)
    })
}

// makeGrid(,) function

function makeGrid(rows, cols, ) {
    var i = 0
    var grid = document.createElement('table')
    grid.className = 'grid'
    for (var r = 0; r < rows; ++r) {
        var tr = grid.appendChild(document.createElement('tr'))
        for (var c = 0; c < cols; ++c) {
            tr.appendChild(document.createElement('td'))
        }
    }
    return grid
}
