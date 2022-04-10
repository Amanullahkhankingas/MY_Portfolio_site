// console.log('scrift is running....')

document.querySelector('.cross').style.display = 'none'

// document.querySelector('.ham').style.display = 'none'

document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('gosidebar')
    
    
    // if(document.querySelector('.sidebar').classList.contains('.gosidebar')){
    
    //     document.querySelector('.ham').style.display = 'inline'
    //     document.querySelector('.cross').style.display = 'none'
    // }
    // else{
    
    //     document.querySelector('.cross').style.display = 'inline'
    //     document.querySelector('.ham').style.display = 'none'
    
    // }

    
})



// document.querySelector('.ham').addEventListener('click',()=>{
//     document.querySelector('.gosidebar').style.display = 'none'
    
    
    
    
//     document.querySelector('.sidebar').style.display ='inline'
    
// })

// document.querySelector('.cross').addEventListener( 'click',()=>{
//     document.querySelector('.sidebar').style.display ='none'



//     document.querySelector('.gosidebar').style.display = 'inline'
// })

