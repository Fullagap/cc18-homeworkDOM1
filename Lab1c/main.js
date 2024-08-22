let main = document.querySelector('main')
let comments = []

main.childNodes.forEach(el => {
  if (el.nodeType === 1) {
    console.log(el.tagName)
  }
  if (el.nodeType === 8) {
    comments.push(el.textContent)
  }
})

console.log(comments)

function showTags(el) {
  if (el.nodeType !== 1) { return }
  console.log(el.tagName)
  if (el.children.length > 0) {
    for (let x of el.children) {
      showTags(x)
    }
  }
}

showTags(main)
// console.log(main.children[0].children.length)




