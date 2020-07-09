
function searchBiggest(graph, gtVal = 0) {
    let val = 0

    if (graph.next.length > 0) val = recursiveLoop(graph.next, gtVal, 0)
    
    if (graph.val > gtVal) gtVal = graph.val
    if (val > gtVal) gtVal = val

    return gtVal
}

function recursiveLoop (arr, gtVal, i = 0) {
    if (i < arr.length) {
        gtVal = searchBiggest(arr[i], gtVal)
        gtVal = recursiveLoop(arr, gtVal, ++i)
    }
    return gtVal
}

module.exports = searchBiggest
