// let loginBtn = document.querySelector('.header-login-btn')
let loginModal = document.querySelector('.login-modal')
// loginBtn.onclick = function () {
function login () {
  loginModal.classList.add('show')
  document.body.classList.add("stop-scrolling")
}

loginModal.onsubmit = function(event) {
  event.preventDefault()
  console.log(event.target.username.value)
  console.log(event.target.password.value)
  let username = event.target.username.value
  let password = event.target.password.value
  let userInfoElem = document.querySelector('.userinfo')
  userInfoElem.innerHTML = `<span>${username}</span><button onclick="logout()">Logout</button>`
  loginModal.classList.remove('show')
  document.body.classList.remove("stop-scrolling")
}

function logout() {
  let userInfoElem = document.querySelector('.userinfo')
  userInfoElem.innerHTML = '<button class="header-login-btn" onclick="login()">Login</button>'
}