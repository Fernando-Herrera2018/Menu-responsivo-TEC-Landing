function showMenu() {
  let menu = document.getElementById('menu')

  if (menu.classList.contains("open")) {
    menu.classList.remove("open")
  } else {
    menu.classList.add("open")
  }
}