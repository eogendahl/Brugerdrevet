// Her tjekker jeg om Dalia har trykket deltag til fællesspisning
const deltagerFaellesspisning = localStorage.getItem("faellesspisning");

// Hvis hun deltager, opdaterer jeg antallet og tilføjer hendes profil
if (deltagerFaellesspisning === "ja") {
  const antalTekst = document.getElementById("faellesspisning-antal");
  const deltagerListe = document.getElementById("faellesspisning-deltagere");

  // Her ændrer jeg teksten fra 5 til 6
  if (antalTekst) {
    antalTekst.textContent = "👥 6 beboere kommer";
  }

  // Her tjekker jeg om Dalia allerede er tilføjet
  if (deltagerListe && !document.getElementById("dalia-profil")) {
    const nyProfil = document.createElement("span");
    nyProfil.className = "voksen";
    nyProfil.id = "dalia-profil";
    nyProfil.textContent = "DA";

    deltagerListe.appendChild(nyProfil);
  }
}