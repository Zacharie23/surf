document.addEventListener("DOMContentLoaded", () => {
  const temoignages = [
    {
      nom: "Julie M.",
      date: "12 juin 2025",
      commentaire:
        "Super service, équipe très accueillante et matériel au top !",
      note: 5,
    },
    {
      nom: "Thomas R.",
      date: "3 mai 2025",
      commentaire: "Une belle découverte pour notre week-end surf. Merci !",
      note: 4,
    },
    {
      nom: "Emma T.",
      date: "28 avril 2025",
      commentaire: "Excellent coaching et bons conseils pour débutants.",
      note: 5,
    },
  ];

  const container = document.getElementById("temoignages-container");

  temoignages.forEach((avis) => {
    const carte = document.createElement("div");
    carte.className = "carte-temoignage";

    carte.innerHTML = `
      <p class="avis-commentaire">"${avis.commentaire}"</p>
      <p class="avis-nom">${avis.nom} - <span class="avis-date">${
      avis.date
    }</span></p>
      <p class="avis-note">Note : ${"⭐".repeat(avis.note)}</p>
    `;

    container.appendChild(carte);
  });
});
