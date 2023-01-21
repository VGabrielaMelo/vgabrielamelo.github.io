const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", registro)
form.addEventListener("change", save)

function registro() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já registrado!")
    return
  }

  alert("Dia registrado com sucesso!")
  nlwSetup.addDay(today)
}

function save() {
  console.log("Saved!")
  localStorage.setItem("Rocket@habitsVGM", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("Rocket@habitsVGM")) || {}
nlwSetup.setData(data)
nlwSetup.load()
