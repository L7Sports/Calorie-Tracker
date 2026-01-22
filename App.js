let goal = 2000;
let eaten = 0;

function addCalories() {
  const input = document.getElementById("caloriesInput");
  const value = Number(input.value);
  if (!value) return;

  eaten += value;
  localStorage.setItem("eaten", eaten);
  updateUI();
  input.value = "";
}

function updateUI() {
  document.getElementById("remaining").textContent =
    `${goal - eaten} kcal left`;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}

eaten = Number(localStorage.getItem("eaten")) || 0;
updateUI();
