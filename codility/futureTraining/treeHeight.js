// 100%
var path

function currIsEmpty() {
  var n = path[path.length-1]
  return n.l === null && n.r === null
}

function node() {
  return path[path.length-1]
}

function solution(T) {
  var maxLevel = 1
  var lastDirection
  path = []
  path.push(T)

  while (T.l !== null || T.r !== null) {

    if (currIsEmpty()) {
      path.pop()
      node()[lastDirection] = null
    }

    if (node().l) {
      lastDirection = 'l'
      path.push(node().l)
      maxLevel = Math.max(maxLevel, path.length)

    } else if (node().r) {
      lastDirection = 'r'
      path.push(node().r)
      maxLevel = Math.max(maxLevel, path.length)
    }
  }

  return maxLevel-1
}

// 100%
function solution(T) {
  return travel(T)
}

function travel(node) {
  if (!node) return -1
  var heightLeft = travel(node.l)
  var heightRight = travel(node.r)
  return 1 + Math.max(heightLeft, heightRight)
}

module.exports = solution
