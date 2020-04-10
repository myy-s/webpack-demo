import x from './x.js'
import img from "./assets/entry.png"

const div = document.getElementById('lalala')
div.innerHTML = `
    <img src="${img}">
`
const btn = document.createElement('button')
btn.innerText = '懒加载'
div.appendChild(btn)
btn.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误')
    })
}
console.log("hi", x);