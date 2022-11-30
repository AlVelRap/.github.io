window.onload = () => {
    // let vertices = cara1.points
    let angleZ = -1 //grados
    let angleY = 1 //grados
    let angleX = 1 //grados

    let svg = document.querySelector("svg")

    let infLimit = svg.viewBox.baseVal.x
    let supLimit = svg.width.baseVal.value

    let max = 5
    let min = -5
    let dispX = Math.random() * (max - min + 1) + min
    let dispY = Math.random() * (max - min + 1) + min
    let dispZ = Math.random() * (max - min + 1) + min
    let translationVector = [dispX, dispY, dispZ]

    let vertex = [
        [300, 500, 500, 300, 500, 500, 300, 300, 400,400,(100 * Math.tan(Math.PI / 180 * 60)+400),(400-100 * Math.tan(Math.PI / 180 * 60)),400,400],
        [300, 300, 500, 500, 300, 500, 300, 500, (100 * Math.tan(Math.PI / 180 * 60)+400),(400-100 * Math.tan(Math.PI / 180 * 60)),400,400,400,400],
        [100, 100, 100, 100, -100, -100, -100, -100, 0,0,0,0,(100 * Math.tan(Math.PI / 180 * 60)),(-100 * Math.tan(Math.PI / 180 * 60))]
    ]

    let edges = [
        { // 0
            "point1": [vertex[0][0], vertex[1][0], vertex[2][0]],
            "point2": [vertex[0][1], vertex[1][1], vertex[2][1]]
        },
        { // 1
            "point1": [vertex[0][1], vertex[1][1], vertex[2][1]],
            "point2": [vertex[0][2], vertex[1][2], vertex[2][2]]
        },
        { // 2
            "point1": [vertex[0][2], vertex[1][2], vertex[2][2]],
            "point2": [vertex[0][3], vertex[1][3], vertex[2][3]]
        },
        {// 3
            "point1": [vertex[0][3], vertex[1][3], vertex[2][3]],
            "point2": [vertex[0][0], vertex[1][0], vertex[2][0]]
        },
        {// 4
            "point1": [vertex[0][0], vertex[1][0], vertex[2][0]],
            "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
        },
        { // 5
            "point1": [vertex[0][1], vertex[1][1], vertex[2][1]],
            "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
        },
        { // 6
            "point1": [vertex[0][2], vertex[1][2], vertex[2][2]],
            "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
        },
        {// 7
            "point1": [vertex[0][3], vertex[1][3], vertex[2][3]],
            "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
        },
        {// 8
            "point1": [vertex[0][6], vertex[1][6], vertex[2][6]],
            "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
        },
        { // 9
            "point1": [vertex[0][4], vertex[1][4], vertex[2][4]],
            "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
        },
        { // 10
            "point1": [vertex[0][5], vertex[1][5], vertex[2][5]],
            "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
        },
        {// 11
            "point1": [vertex[0][7], vertex[1][7], vertex[2][7]],
            "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
        },
        // the piramid on the botton face
        {// 12
            "point1": [vertex[0][8], vertex[1][8], vertex[2][8]],
            "point2": [vertex[0][2], vertex[1][2], vertex[2][2]]
        },
        {// 13
            "point1": [vertex[0][8], vertex[1][8], vertex[2][8]],
            "point2": [vertex[0][3], vertex[1][3], vertex[2][3]]
        },
        {// 14
            "point1": [vertex[0][8], vertex[1][8], vertex[2][8]],
            "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
        },
        {// 15
            "point1": [vertex[0][8], vertex[1][8], vertex[2][8]],
            "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
        },
        // the piramid on the upper face
        {// 16
            "point1": [vertex[0][9], vertex[1][9], vertex[2][9]],
            "point2": [vertex[0][0], vertex[1][0], vertex[2][0]]
        },
        {// 17
            "point1": [vertex[0][9], vertex[1][9], vertex[2][9]],
            "point2": [vertex[0][1], vertex[1][1], vertex[2][1]]
        },
        {// 18
            "point1": [vertex[0][9], vertex[1][9], vertex[2][9]],
            "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
        },
        {// 19
            "point1": [vertex[0][9], vertex[1][9], vertex[2][9]],
            "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
        },
        // the piramid on the right face
        {// 20
            "point1": [vertex[0][10], vertex[1][10], vertex[2][10]],
            "point2": [vertex[0][1], vertex[1][1], vertex[2][1]]
        },
        {// 21
            "point1": [vertex[0][10], vertex[1][10], vertex[2][10]],
            "point2": [vertex[0][2], vertex[1][2], vertex[2][2]]
        },
        {// 22
            "point1": [vertex[0][10], vertex[1][10], vertex[2][10]],
            "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
        },
        {// 23
            "point1": [vertex[0][10], vertex[1][10], vertex[2][10]],
            "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
        },
        // the piramid on the left face
        {// 24
            "point1": [vertex[0][11], vertex[1][11], vertex[2][11]],
            "point2": [vertex[0][0], vertex[1][0], vertex[2][0]]
        },
        {// 25
            "point1": [vertex[0][11], vertex[1][11], vertex[2][11]],
            "point2": [vertex[0][3], vertex[1][3], vertex[2][3]]
        },
        {// 26
            "point1": [vertex[0][11], vertex[1][11], vertex[2][11]],
            "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
        },
        {// 27
            "point1": [vertex[0][11], vertex[1][11], vertex[2][11]],
            "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
        },
        // the piramid on the front face
        {// 20
            "point1": [vertex[0][12], vertex[1][12], vertex[2][12]],
            "point2": [vertex[0][0], vertex[1][0], vertex[2][0]]
        },
        {// 21
            "point1": [vertex[0][12], vertex[1][12], vertex[2][12]],
            "point2": [vertex[0][1], vertex[1][1], vertex[2][1]]
        },
        {// 22
            "point1": [vertex[0][12], vertex[1][12], vertex[2][12]],
            "point2": [vertex[0][2], vertex[1][2], vertex[2][2]]
        },
        {// 23
            "point1": [vertex[0][12], vertex[1][12], vertex[2][12]],
            "point2": [vertex[0][3], vertex[1][3], vertex[2][3]]
        },
        // the piramid on the back face
        {// 24
            "point1": [vertex[0][13], vertex[1][13], vertex[2][13]],
            "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
        },
        {// 25
            "point1": [vertex[0][13], vertex[1][13], vertex[2][13]],
            "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
        },
        {// 26
            "point1": [vertex[0][13], vertex[1][13], vertex[2][13]],
            "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
        },
        {// 27
            "point1": [vertex[0][13], vertex[1][13], vertex[2][13]],
            "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
        }
    ]

    let centerPos = getCenter(vertex)
    createPoints(vertex)
    createEdges(edges)

    let check1 = 0
    let check2 = 0
    let counter = 0
    setInterval(function () {
        // randomize the angle every 50 cicles
        if (counter > 50) {
            max = 5
            min = -5
            counter = 0
            angleZ = Math.random() * (max - min + 1) + min
            angleX = Math.random() * (max - min + 1) + min
            angleY = Math.random() * (max - min + 1) + min

            // dispX = Math.random() * (max - min + 1) + min
            // dispY = Math.random() * (max - min + 1) + min
            // dispZ = Math.random() * (max - min + 1) + min

            // translationVector = [dispX, dispY, dispZ]
        } else {
            counter++
        }
        // translate the vertex's matrix
        vertex = translate(vertex, translationVector)
        // We need to check if the new matrix it's out of bundaries (0,0 to 1000,1000)
        // We check colision y we allow some time to change direction
        const condition1 = (element) => element <= infLimit
        const condition2 = (element) => element >= supLimit
        if (vertex[0].some(condition1) | vertex[0].some(condition2)) {// in the x Axis
            if (check1 >= 30) {
                translationVector[0] = -translationVector[0]
                check1 = 0
            } else {
                check1++
            }
        } else {
            check1 = 30
        }
        if (vertex[1].some(condition1) | vertex[1].some(condition2)) {// in the y Axis
            if (check2 >= 30) {
                translationVector[1] = -translationVector[1]
                check2 = 0
            } else {
                check2++
            }
        } else {
            check2 = 30
        }

        // Get the new center
        centerPos = getCenter(vertex)
        // rotate the vertex's matrix
        vertex = rotate(vertex, centerPos, angleZ, angleY, angleX)

        let edges = [
            { // 0
                "point1": [vertex[0][0], vertex[1][0], vertex[2][0]],
                "point2": [vertex[0][1], vertex[1][1], vertex[2][1]]
            },
            { // 1
                "point1": [vertex[0][1], vertex[1][1], vertex[2][1]],
                "point2": [vertex[0][2], vertex[1][2], vertex[2][2]]
            },
            { // 2
                "point1": [vertex[0][2], vertex[1][2], vertex[2][2]],
                "point2": [vertex[0][3], vertex[1][3], vertex[2][3]]
            },
            {// 3
                "point1": [vertex[0][3], vertex[1][3], vertex[2][3]],
                "point2": [vertex[0][0], vertex[1][0], vertex[2][0]]
            },
            {// 4
                "point1": [vertex[0][0], vertex[1][0], vertex[2][0]],
                "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
            },
            { // 5
                "point1": [vertex[0][1], vertex[1][1], vertex[2][1]],
                "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
            },
            { // 6
                "point1": [vertex[0][2], vertex[1][2], vertex[2][2]],
                "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
            },
            {// 7
                "point1": [vertex[0][3], vertex[1][3], vertex[2][3]],
                "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
            },
            {// 8
                "point1": [vertex[0][6], vertex[1][6], vertex[2][6]],
                "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
            },
            { // 9
                "point1": [vertex[0][4], vertex[1][4], vertex[2][4]],
                "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
            },
            { // 10
                "point1": [vertex[0][5], vertex[1][5], vertex[2][5]],
                "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
            },
            {// 11
                "point1": [vertex[0][7], vertex[1][7], vertex[2][7]],
                "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
            },
            // the piramid on the botton face
            {// 12
                "point1": [vertex[0][8], vertex[1][8], vertex[2][8]],
                "point2": [vertex[0][2], vertex[1][2], vertex[2][2]]
            },
            {// 13
                "point1": [vertex[0][8], vertex[1][8], vertex[2][8]],
                "point2": [vertex[0][3], vertex[1][3], vertex[2][3]]
            },
            {// 14
                "point1": [vertex[0][8], vertex[1][8], vertex[2][8]],
                "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
            },
            {// 15
                "point1": [vertex[0][8], vertex[1][8], vertex[2][8]],
                "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
            },
            // the piramid on the upper face
            {// 16
                "point1": [vertex[0][9], vertex[1][9], vertex[2][9]],
                "point2": [vertex[0][0], vertex[1][0], vertex[2][0]]
            },
            {// 17
                "point1": [vertex[0][9], vertex[1][9], vertex[2][9]],
                "point2": [vertex[0][1], vertex[1][1], vertex[2][1]]
            },
            {// 18
                "point1": [vertex[0][9], vertex[1][9], vertex[2][9]],
                "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
            },
            {// 19
                "point1": [vertex[0][9], vertex[1][9], vertex[2][9]],
                "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
            },
            // the piramid on the right face
            {// 20
                "point1": [vertex[0][10], vertex[1][10], vertex[2][10]],
                "point2": [vertex[0][1], vertex[1][1], vertex[2][1]]
            },
            {// 21
                "point1": [vertex[0][10], vertex[1][10], vertex[2][10]],
                "point2": [vertex[0][2], vertex[1][2], vertex[2][2]]
            },
            {// 22
                "point1": [vertex[0][10], vertex[1][10], vertex[2][10]],
                "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
            },
            {// 23
                "point1": [vertex[0][10], vertex[1][10], vertex[2][10]],
                "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
            },
            // the piramid on the left face
            {// 24
                "point1": [vertex[0][11], vertex[1][11], vertex[2][11]],
                "point2": [vertex[0][0], vertex[1][0], vertex[2][0]]
            },
            {// 25
                "point1": [vertex[0][11], vertex[1][11], vertex[2][11]],
                "point2": [vertex[0][3], vertex[1][3], vertex[2][3]]
            },
            {// 26
                "point1": [vertex[0][11], vertex[1][11], vertex[2][11]],
                "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
            },
            {// 27
                "point1": [vertex[0][11], vertex[1][11], vertex[2][11]],
                "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
            },
            // the piramid on the front face
            {// 20
                "point1": [vertex[0][12], vertex[1][12], vertex[2][12]],
                "point2": [vertex[0][0], vertex[1][0], vertex[2][0]]
            },
            {// 21
                "point1": [vertex[0][12], vertex[1][12], vertex[2][12]],
                "point2": [vertex[0][1], vertex[1][1], vertex[2][1]]
            },
            {// 22
                "point1": [vertex[0][12], vertex[1][12], vertex[2][12]],
                "point2": [vertex[0][2], vertex[1][2], vertex[2][2]]
            },
            {// 23
                "point1": [vertex[0][12], vertex[1][12], vertex[2][12]],
                "point2": [vertex[0][3], vertex[1][3], vertex[2][3]]
            },
            // the piramid on the back face
            {// 24
                "point1": [vertex[0][13], vertex[1][13], vertex[2][13]],
                "point2": [vertex[0][4], vertex[1][4], vertex[2][4]]
            },
            {// 25
                "point1": [vertex[0][13], vertex[1][13], vertex[2][13]],
                "point2": [vertex[0][5], vertex[1][5], vertex[2][5]]
            },
            {// 26
                "point1": [vertex[0][13], vertex[1][13], vertex[2][13]],
                "point2": [vertex[0][6], vertex[1][6], vertex[2][6]]
            },
            {// 27
                "point1": [vertex[0][13], vertex[1][13], vertex[2][13]],
                "point2": [vertex[0][7], vertex[1][7], vertex[2][7]]
            }
        ]

        // redraw the vertex
        vertex[0].forEach((row, i) => {
            let point = document.querySelector("#vertex" + i)
            point.cx.baseVal.value = Math.floor(row)
            point.cy.baseVal.value = Math.floor(vertex[1][i])
        })

        // redraw the edges
        edges.forEach((object, i) => {
            let line = document.querySelector("#edge" + i)
            line.x1.baseVal.value = Math.floor(object.point1[0])
            line.y1.baseVal.value = Math.floor(object.point1[1])
            line.x2.baseVal.value = Math.floor(object.point2[0])
            line.y2.baseVal.value = Math.floor(object.point2[1])
        })
    }, 30)
}

function getCenter(vertex) {
    let result = []
    vertex.forEach(row => {
        let counter = 0
        let cosa = 0
        row.forEach(col => {
            cosa += parseFloat(col)
            counter++
        })
        result.push(parseFloat(cosa / counter))
    })
    return result
}

function createPoints(vertex) {
    const svgns = "http://www.w3.org/2000/svg"
    vertex[0].forEach((row, i) => {
        let point = document.createElementNS(svgns, "circle")
        point.id = "vertex" + i
        point.cx.baseVal.value = Math.floor(row)
        point.cy.baseVal.value = Math.floor(vertex[1][i])
        point.r.baseVal.value = 5
        point.style.fill = "green"
        document.querySelector("svg").appendChild(point)
    })

}

function createEdges(edges) {
    const svgns = "http://www.w3.org/2000/svg"
    edges.forEach((object, i) => {
        let line = document.createElementNS(svgns, "line")
        line.id = "edge" + i
        line.x1.baseVal.value = Math.floor(object.point1[0])
        line.y1.baseVal.value = Math.floor(object.point1[1])
        line.x2.baseVal.value = Math.floor(object.point2[0])
        line.y2.baseVal.value = Math.floor(object.point2[1])
        line.style = "stroke:rgb(0,255,0);stroke-width:2"
        document.querySelector("svg").appendChild(line)
    })

}

function scalarProd(matrix1, matrix2) {
    // we check if it is a vector or a matrix
    if (typeof (matrix1.length) === 'undefined')
        row_m1 = 1
    else
        row_m1 = matrix1.length

    if (typeof (matrix1[0].length) === 'undefined')
        col_m1 = 1
    else
        col_m1 = matrix1[0].length

    if (typeof (matrix2.length) === 'undefined')
        row_m2 = 1
    else
        row_m2 = matrix2.length

    if (typeof (matrix2[0].length) === 'undefined')
        col_m2 = 1
    else
        col_m2 = matrix2[0].length
    // We create the matrix that will contain the result of the Scalar product
    let result = new Array(row_m1)
    for (x = 0; x < result.length; x++)
        result[x] = new Array(col_m2).fill(0)
    // Multiplicar matrices
    for (x = 0; x < result.length; x++) {
        for (y = 0; y < result[x].length; y++) {
            for (z = 0; z < col_m1; z++) {
                result[x][y] += parseFloat(matrix1[x][z] * matrix2[z][y])
            }
        }
    }

    return result
}

function translate(vertex, translationVector) {
    vertex.forEach((row, i) => {
        row.forEach((coordinate, j) => {
            vertex[i][j] += parseFloat(translationVector[i])
        })
    })
    return vertex
}

function rotate(vertex, centerPoint, angleZ, angleY, angleX) {
    // We need to determine the position according to the rotation center
    let vectorsToRotate = []
    let array = []
    vertex.forEach((row, i) => {
        array = []
        row.forEach((coordinate) => {
            array.push(parseFloat(coordinate - centerPoint[i]))
        })
        vectorsToRotate.push(array)
    });

    // convert from degrees to radians
    radiansZ = Math.PI / 180 * angleZ
    radiansY = Math.PI / 180 * angleY
    radiansX = Math.PI / 180 * angleX
    // we define the rotation matrix according to each axis
    const rotationZ = [
        [Math.cos(radiansZ), -Math.sin(radiansZ), 0],
        [Math.sin(radiansZ), Math.cos(radiansZ), 0],
        [0, 0, 1]
    ]

    const rotationY = [
        [Math.cos(radiansY), 0, Math.sin(radiansY)],
        [0, 1, 0],
        [-Math.sin(radiansY), 0, Math.cos(radiansY)]
    ]

    const rotationX = [
        [1, 0, 0],
        [0, Math.cos(radiansX), -Math.sin(radiansX)],
        [0, Math.sin(radiansX), Math.cos(radiansX)]
    ]

    // Creation of the final rotation matrix
    const rotationXYZ = scalarProd(rotationX, scalarProd(rotationZ, rotationY))

    // Rotation of all the vertex
    let result = scalarProd(rotationXYZ, vectorsToRotate)

    // we have to translate each vector to the original position
    result.forEach((row, i) => {
        row.forEach((coordinate, j) => {
            result[i][j] += parseFloat(centerPoint[i])
        })
    })

    return result
}