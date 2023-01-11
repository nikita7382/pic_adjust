const panel=document.querySelectorAll('.panel')

panel.forEach((i)=>{
    console.log(i)
    i.addEventListener('mouseover',()=>{
        // console.log('hovered')
        // i.style.flex=10
        i.classList.add('active')
    })

    i.addEventListener('mouseout',()=>{
        // console.log('hovered')
        // i.style.flex=0.5
        i.classList.remove('active')
    })
})

