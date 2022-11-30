window.onload = () => {
    // let vertices = cara1.points
    let angleZ = -1 //grados
    let angleY = 1 //grados
    let angleX = 1 //grados
    let vertex = [
        [300,   500,    500,    300,   500,    500,    300,     300],
        [300,   300,    500,    500,   300,    500,    300,     500],
        [100,   100,    100,    100,   -100,   -100,   -100,    -100]
    ]

    let edges = [
        { // 0
            "point1":[vertex[0][0],vertex[1][0],vertex[2][0]],
            "point2":[vertex[0][1],vertex[1][1],vertex[2][1]]
        },
        { // 1
            "point1":[vertex[0][1],vertex[1][1],vertex[2][1]],
            "point2":[vertex[0][2],vertex[1][2],vertex[2][2]]
        },
        { // 2
            "point1":[vertex[0][2],vertex[1][2],vertex[2][2]],
            "point2":[vertex[0][3],vertex[1][3],vertex[2][3]]
        },
        {// 3
            "point1":[vertex[0][3],vertex[1][3],vertex[2][3]],
            "point2":[vertex[0][0],vertex[1][0],vertex[2][0]]
        },
        {// 4
            "point1":[vertex[0][0],vertex[1][0],vertex[2][0]],
            "point2":[vertex[0][6],vertex[1][6],vertex[2][6]]
        },
        { // 5
            "point1":[vertex[0][1],vertex[1][1],vertex[2][1]],
            "point2":[vertex[0][4],vertex[1][4],vertex[2][4]]
        },
        { // 6
            "point1":[vertex[0][2],vertex[1][2],vertex[2][2]],
            "point2":[vertex[0][5],vertex[1][5],vertex[2][5]]
        },
        {// 7
            "point1":[vertex[0][3],vertex[1][3],vertex[2][3]],
            "point2":[vertex[0][7],vertex[1][7],vertex[2][7]]
        },
        {// 8
            "point1":[vertex[0][6],vertex[1][6],vertex[2][6]],
            "point2":[vertex[0][4],vertex[1][4],vertex[2][4]]
        },
        { // 9
            "point1":[vertex[0][4],vertex[1][4],vertex[2][4]],
            "point2":[vertex[0][5],vertex[1][5],vertex[2][5]]
        },
        { // 10
            "point1":[vertex[0][5],vertex[1][5],vertex[2][5]],
            "point2":[vertex[0][7],vertex[1][7],vertex[2][7]]
        },
        {// 11
            "point1":[vertex[0][7],vertex[1][7],vertex[2][7]],
            "point2":[vertex[0][6],vertex[1][6],vertex[2][6]]
        }
    ]

    let centerPos = getCenter(vertex)
    createPoints(vertex)
    createEdges(edges)

    counter = 0
    setInterval(function () {
        // randomize the angle every 50 cicles
        if (counter > 50) {
            max = 5
            min = -5
            counter = 0
            angleZ = Math.random() * (max - min + 1) + min
            angleX = Math.random() * (max - min + 1) + min
            angleY = Math.random() * (max - min + 1) + min
        } else {
            counter++
        }
        // rotate the vertex's matrix
        vertex = rotate(vertex,centerPos,angleZ, angleY, angleX)
        
        // recalculate the edges
        edges = [
            { // 0
                "point1":[vertex[0][0],vertex[1][0],vertex[2][0]],
                "point2":[vertex[0][1],vertex[1][1],vertex[2][1]]
            },
            { // 1
                "point1":[vertex[0][1],vertex[1][1],vertex[2][1]],
                "point2":[vertex[0][2],vertex[1][2],vertex[2][2]]
            },
            { // 2
                "point1":[vertex[0][2],vertex[1][2],vertex[2][2]],
                "point2":[vertex[0][3],vertex[1][3],vertex[2][3]]
            },
            {// 3
                "point1":[vertex[0][3],vertex[1][3],vertex[2][3]],
                "point2":[vertex[0][0],vertex[1][0],vertex[2][0]]
            },
            {// 4
                "point1":[vertex[0][0],vertex[1][0],vertex[2][0]],
                "point2":[vertex[0][6],vertex[1][6],vertex[2][6]]
            },
            { // 5
                "point1":[vertex[0][1],vertex[1][1],vertex[2][1]],
                "point2":[vertex[0][4],vertex[1][4],vertex[2][4]]
            },
            { // 6
                "point1":[vertex[0][2],vertex[1][2],vertex[2][2]],
                "point2":[vertex[0][5],vertex[1][5],vertex[2][5]]
            },
            {// 7
                "point1":[vertex[0][3],vertex[1][3],vertex[2][3]],
                "point2":[vertex[0][7],vertex[1][7],vertex[2][7]]
            },
            {// 8
                "point1":[vertex[0][6],vertex[1][6],vertex[2][6]],
                "point2":[vertex[0][4],vertex[1][4],vertex[2][4]]
            },
            { // 9
                "point1":[vertex[0][4],vertex[1][4],vertex[2][4]],
                "point2":[vertex[0][5],vertex[1][5],vertex[2][5]]
            },
            { // 10
                "point1":[vertex[0][5],vertex[1][5],vertex[2][5]],
                "point2":[vertex[0][7],vertex[1][7],vertex[2][7]]
            },
            {// 11
                "point1":[vertex[0][7],vertex[1][7],vertex[2][7]],
                "point2":[vertex[0][6],vertex[1][6],vertex[2][6]]
            }
        ]

        // redraw the vertex
        vertex[0].forEach((row,i)=>{
            let point = document.querySelector("#vertex"+i)
            point.cx.baseVal.value = Math.floor(row)
            point.cy.baseVal.value = Math.floor(vertex[1][i])
        })

        // redraw the edges
        edges.forEach((object,i) =>{
            let line = document.querySelector("#edge"+i)
            line.x1.baseVal.value = Math.floor(object.point1[0])
            line.y1.baseVal.value = Math.floor(object.point1[1])
            line.x2.baseVal.value = Math.floor(object.point2[0])
            line.y2.baseVal.value = Math.floor(object.point2[1])
        })
    }, 30)
}

function getCenter(vertex){
    let result = []
    vertex.forEach(row=>{
        let counter = 0
        let cosa = 0
        row.forEach(col =>{
            cosa += parseFloat(col)
            counter++
        })
        result.push(parseFloat(cosa/counter))
    })
    return result
}

function createPoints(vertex){
    const svgns = "http://www.w3.org/2000/svg"
    vertex[0].forEach((row,i) =>{
        let point = document.createElementNS(svgns,"circle")
        point.id = "vertex"+i
        point.cx.baseVal.value = Math.floor(row)
        point.cy.baseVal.value = Math.floor(vertex[1][i])
        point.r.baseVal.value = 5
        point.style.fill = "green"
        document.querySelector("svg").appendChild(point)
    })
    
}

function createEdges(edges){
    const svgns = "http://www.w3.org/2000/svg"
    edges.forEach((object,i) =>{
        let line = document.createElementNS(svgns,"line")
        line.id = "edge"+i
        line.x1.baseVal.value = Math.floor(object.point1[0])
        line.y1.baseVal.value = Math.floor(object.point1[1])
        line.x2.baseVal.value = Math.floor(object.point2[0])
        line.y2.baseVal.value = Math.floor(object.point2[1])
        line.style = "stroke:rgb(0,255,0);stroke-width:2"
        document.querySelector("svg").appendChild(line)
    })
    
}

function scalarProd(matrix1, matrix2){
    // we check if it is a vector or a matrix
    if(typeof(matrix1.length) === 'undefined')
        row_m1 = 1
    else
        row_m1 = matrix1.length
    
    if(typeof(matrix1[0].length) === 'undefined')
        col_m1 = 1
    else
        col_m1 = matrix1[0].length

    if(typeof(matrix2.length) === 'undefined')
        row_m2 = 1
    else
        row_m2 = matrix2.length
    
    if(typeof(matrix2[0].length) === 'undefined')
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


function rotate(vertex,centerPoint, angleZ, angleY, angleX) {
    // We need to determine the position according to the rotation center
    let vectorsToRotate=[]
    let array = []
    vertex.forEach((row,i) => {
        array = []
        row.forEach((coordinate) =>{
            array.push(parseFloat(coordinate-centerPoint[i]))
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
    const rotationXYZ = scalarProd(rotationX,scalarProd(rotationZ,rotationY))

    // Rotation of all the vertex
    let result = scalarProd(rotationXYZ,vectorsToRotate)

    // we have to translate each vector to the original position
    result.forEach((row,i) => {
        row.forEach((coordinate,j) =>{
            result[i][j] += parseFloat(centerPoint[i])
        })
    })

    return result
}