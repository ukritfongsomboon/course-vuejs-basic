var ele = document.getElementById('example-data')
ele.innerHTML = 'Hello world !!'

document.querySelector('input').addEventListener('input', updateValue)

function updateValue(e) {
  document.getElementById('example-log').innerHTML = e.target.value
}

document.querySelector('button').addEventListener('click', clear)
function clear() {
  document.querySelector('input').value = ''
  document.getElementById('example-log').innerHTML = ''
}