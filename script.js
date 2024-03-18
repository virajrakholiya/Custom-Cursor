let a = document.querySelector('body')
let b =document.querySelector('.cursor')

a.addEventListener('mousemove',function (move) {
    b.style.top = move.y+('px')
    b.style.left = move.x+('px')
    console.log(move)
})

a.addEventListener('mouseleave',function name() {
    b.style.display = 'none'
})
a.addEventListener('mouseenter',function () {
    b.style.display = 'flex'

    
})