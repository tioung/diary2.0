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
  const btn=document.createElement('button')
  const date = new Date()
  const month = date.toLocaleString('default', { month: 'long' });
  const dateString=`${month} ${date.getDate()}, ${date.toLocaleTimeString()} `
  btn.textContent=dateString
  btn.classList.add('btn')
  btn.addEventListener('click',()=>div.classList.toggle('hide'))
  diary.appendChild(btn)



  form.textentry.value=''
})
