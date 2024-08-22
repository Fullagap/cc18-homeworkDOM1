// const p1 = document.querySelector('#para1')

// console.log(p1)
// p1.style.color = 'gold'

// // const pp1 = document.querySelector('.container > p:nth-child(3)')
// // pp1.style.color = 'blue'

// const ctn = document.getElementsByClassName('container')
// console.log(ctn)

// // ctn[0].style.border = '1px solid blue'

// const allP = document.querySelectorAll('p')
// // allP.forEach(el => {
// //     el.style.color = 'red'
// // })

// for (let el of allP) {
//     el.style.color = 'red'
// }

// console.log(document.documentElement)
// console.log(document.body)

// console.log(document.body.children)
// console.log(document.)

// const p1 = document.querySelector('#para1')
// p1.onclick = () => {
//     // p1.innerHTML = 'DOM = Document Object'
//     let newText = prompt("new text : ") || p1.innerHTML
//     // p1.innerHTML += newText
//     p1.textContent += newText
// }

// console.log(p1.attributes)
// p1.setAttribute('class','active')
// console.log(p1.outerHTML)

const list = document.querySelector('#list')

const item = document.createElement('li')
// console.log(item)
item.textContent = 'BYD'
item.setAttribute('class','active')
console.log(item.outerHTML)

// list.before(item)
// list.after(item)

list.lastElementChild.replaceWith(item)