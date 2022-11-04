const addTo = document.querySelector("#addTo");
const input = document.querySelector(".input");
const ulList = document.querySelector("#myUL") ;
const picnd = document.querySelector(".picnd");

addTo.addEventListener("click",(e)=>{
    
    e.stopPropagation()
    let temp = `<li>${input.value}  <img src="Group 77.png"></li>`
    ulList.innerHTML+=temp
    input.value=""
   
})
ulList.addEventListener("click",(e)=>{
  if(e.target.tagName="IMG"){
 e.target.parentElement.remove()
  }
})

const sortButton = document.querySelector('.img1');
const sortButton1 = document.querySelector('.img2')

sortButton.style.display = 'block';
sortButton1.style.display = 'none'

sortButton.addEventListener("click", () => {
    sortButton1.style.display = 'block';
    sortButton.style.display = 'none'
    let ar = []
    const data = [...ulList.children]
    data.forEach(item => {
        ar.push(item.innerHTML)
    })
    ar.sort();
    ulList.innerHTML = ""
    ar.forEach(item => {
        let li = `<li>${item}   </li>`

        ulList.innerHTML += li
    })
})

sortButton1.addEventListener("click", () => {
    sortButton.style.display = 'block';
    sortButton1.style.display = 'none'
    let ar = []
    const data = [...ulList.children]
    data.forEach(item => {
        ar.push(item.innerHTML)
    })
    ar.sort();
    ar.reverse()
    ulList.innerHTML = ""
    ar.forEach(item => {
        let li = `<li>${item}   </li>`

        ulList.innerHTML += li
    })
})