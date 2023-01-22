const form = document.querySelector("#form-habits")
const nwlHabits = new NLWSetup(form)

const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nwlHabits.dayExists(today)

  if (dayExists) {
    return
  }

  nwlHabits.addDay(today)
}

function save() {
  localStorage.setItem(`NLWHabits`, JSON.stringify(nwlHabits.data))
}

const data = JSON.parse(localStorage.getItem(`NLWHabits`)) || {}
nwlHabits.setData(data)
nwlHabits.load()
