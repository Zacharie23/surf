// Bouton "Afficher plus"
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-afficher-plus");
  const services = document.getElementById("services");

  btn.addEventListener("click", () => {
    if (services.style.display === "none") {
      services.style.display = "block";
      btn.textContent = "Afficher moins";
    } else {
      services.style.display = "none";
      btn.textContent = "Afficher plus";
    }
  });
});
