// Her finder jeg teksten med antal deltagere til fællesspisning
const antalTekst = document.getElementById("faellesspisning-antal");

// Her finder jeg kun den første deltag-knap, fordi det kun er fællesspisning der skal virke
const knap = document.querySelector(".primar");

// Her finder jeg listen med deltagere til fællesspisning
const deltagerListe = document.getElementById("faellesspisning-deltagere");

// Hvis knappen findes, giver jeg den en klik-funktion
if (knap) {
  knap.addEventListener("click", () => {

    // Hvis knappen allerede er aktiv, skal deltagelsen fjernes igen
    if (knap.classList.contains("aktiv")) {
      knap.classList.remove("aktiv");
      knap.textContent = "Deltag";

      // Her sætter jeg antallet tilbage til 0 (if sætning tjekker om elementet findes)
      if (antalTekst) {
        antalTekst.textContent = "👥 0 beboere kommer";
      }

      // Her fjerner jeg Dalias profil hvis den findes
      const daliaProfil = document.getElementById("dalia-profil");
      if (daliaProfil) {
        daliaProfil.remove();
      }

      // Her skjuler jeg boksen i toppen igen
      if (faellesspisningInfo) {
        faellesspisningInfo.classList.add("skjult");
      }

      // Her sletter jeg fra browserens hukommelse at Dalia deltager
      localStorage.removeItem("faellesspisning");

    } else {
      // Hvis knappen ikke er aktiv endnu, tilmelder jeg Dalia
      knap.classList.add("aktiv");
      knap.textContent = "✅ Deltager";

      // Her ændrer jeg antallet til 1
      if (antalTekst) {
        antalTekst.textContent = "👥 1 beboer kommer";
      }

      // Her tilføjer jeg Dalias profil hvis den ikke allerede er der
      if (deltagerListe && !document.getElementById("dalia-profil")) {
        const nyProfil = document.createElement("span");
        nyProfil.className = "voksen";
        nyProfil.id = "dalia-profil";
        nyProfil.textContent = "DA";

        deltagerListe.appendChild(nyProfil);
      }

      // Her gemmer jeg i browseren at Dalia deltager
      localStorage.setItem("faellesspisning", "ja");
    }
  });
}