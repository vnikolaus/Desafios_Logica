const array = [
    [-9,-9,-9,1,1,1],
    [ 0,-9, 0,4,3,2],
    [-9,-9,-9,1,2,3],
    [ 0, 0, 8,6,6,0],
    [ 0, 0, 0,-2,0,0],
    [ 0, 0, 1,2,4,0]
]

console.log("hourglassSum(array): ", hourglassSum(array));

function hourglassSum (arr) {
    let total = -1e4
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            const max = calculateArray(arr, i, j)
            total = max > total ? max : total
        } 
    }
    
    function calculateArray(arr, row, col) {
        return arr[row][col] + arr[row][col + 1] + arr[row][col + 2] + arr[row + 1][col + 1] + arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2]
    }

    console.log("total: ", total);
    return total
}