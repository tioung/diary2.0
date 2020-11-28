//caching
const form=document.querySelector('form')
const diary=document.querySelector('.diary')

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  //create div and hide it
  const div=document.createElement('div')
  div.textContent=form.textentry.value
  div.classList.add('entry')
  div.classList.add('hide')
  diary.appendChild(div)

  //create entry button


  form.textentry.value=''
})
console.log(textEntry);
