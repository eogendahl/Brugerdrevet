// =============================
// INVITER POPUP
// =============================

// Her finder jeg popupen til invitationer
const popup = document.getElementById("invitePopup");

// Her finder jeg alle knapper der skal åbne invitation-popupen
const openButtons = document.querySelectorAll(".open-popup");

// Her finder jeg luk-knappen inde i invitation-popupen
const closeButton = document.getElementById("closePopup");

// Her finder jeg knappen der sender invitationen
const sendButton = document.getElementById("sendInvite");

// Her finder jeg stedet hvor feedback-beskeden skal vises
const feedback = document.getElementById("feedback");

// Når man klikker på en inviter-knap, åbner popupen
openButtons.forEach(button => {
  button.addEventListener("click", () => {
    popup.classList.add("vis");
    feedback.textContent = "";
  });
});

// Når man klikker på luk, lukker popupen igen
closeButton.addEventListener("click", () => {
  popup.classList.remove("vis");
});

// Hvis man klikker udenfor popup-boksen, lukker den også
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("vis");
  }
});

// Når man klikker på send invitation
sendButton.addEventListener("click", () => {
  // Her finder jeg alle valgte beboere som ikke allerede er låst som deltagere
  const checked = document.querySelectorAll(".beboer input:checked:not(:disabled)");

  // Her laver jeg en liste med deres navne
  const navne = Array.from(checked).map(person => person.value);

  // Hvis ingen er valgt, viser jeg en besked
  if (navne.length === 0) {
    feedback.textContent = "Du har ikke valgt nogen beboere endnu.";
    return;
  }

  // Her viser jeg hvem invitationen er sendt til
  feedback.textContent = "Invitation sendt til: " + navne.join(", ");

  // Efter 1,5 sekund lukker popupen og nulstiller valgene
  setTimeout(() => {
    popup.classList.remove("vis");
    checked.forEach(box => box.checked = false);
    feedback.textContent = "";
  }, 1500);
});


// =============================
// DELTAG I FÆLLESSPISNING
// =============================

// Her finder jeg kun den første deltag-knap, fordi det kun er fællesspisning der skal virke
const knap = document.querySelector(".primar");

// Her finder jeg teksten med antal deltagere til fællesspisning
const antalTekst = document.getElementById("faellesspisning-antal");

// Her finder jeg listen med deltagere til fællesspisning
const deltagerListe = document.getElementById("faellesspisning-deltagere");

// Her finder jeg boksen i toppen som kun skal vises når Dalia deltager
const faellesspisningInfo = document.getElementById("faellesspisning-info");

// Hvis knappen findes, giver jeg den en klik-funktion
if (knap) {
  knap.addEventListener("click", () => {

    // Hvis knappen allerede er aktiv, skal deltagelsen fjernes igen
    if (knap.classList.contains("aktiv")) {
      knap.classList.remove("aktiv");
      knap.textContent = "Deltag";

      // Her sætter jeg antallet tilbage til 5 (if sætning tjekker om elementet findes)
      if (antalTekst) {
        antalTekst.textContent = "👥 5 beboere kommer";
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

      // Her ændrer jeg antallet til 6
      if (antalTekst) {
        antalTekst.textContent = "👥 6 beboere kommer";
      }

      // Her tilføjer jeg Dalias profil hvis den ikke allerede er der
      if (deltagerListe && !document.getElementById("dalia-profil")) {
        const nyProfil = document.createElement("span");
        nyProfil.className = "voksen";
        nyProfil.id = "dalia-profil";
        nyProfil.textContent = "DA";

        deltagerListe.appendChild(nyProfil);
      }

      // Her viser jeg fællesspisning i boksen i toppen
      if (faellesspisningInfo) {
        faellesspisningInfo.classList.remove("skjult");
      }

      // Her gemmer jeg i browseren at Dalia deltager
      localStorage.setItem("faellesspisning", "ja");
    }
  });
}


// =============================
// HUSK STATUS VED GENINDLÆSNING
// =============================

// Hvis browseren allerede har gemt at Dalia deltager,
// så viser jeg det automatisk når siden åbnes igen
if (localStorage.getItem("faellesspisning") === "ja") {

  // Gør knappen grøn igen
  if (knap) {
    knap.classList.add("aktiv");
    knap.textContent = "✅ Deltager";
  }

  // Sætter antallet til 6 igen
  if (antalTekst) {
    antalTekst.textContent = "👥 6 beboere kommer";
  }

  // Tilføjer Dalias profil igen hvis den ikke allerede er der
  if (deltagerListe && !document.getElementById("dalia-profil")) {
    const nyProfil = document.createElement("span");
    nyProfil.className = "voksen";
    nyProfil.id = "dalia-profil";
    nyProfil.textContent = "DA";

    deltagerListe.appendChild(nyProfil);
  }

  // Viser boksen i toppen igen
  if (faellesspisningInfo) {
    faellesspisningInfo.classList.remove("skjult");
  }
}


// =============================
// 🚶 FØLGESKAB POPUP
// =============================

// Her finder jeg alle knapper der skal åbne popupen til følgeskab
const openFoelgesButtons = document.querySelectorAll(".open-foelges-popup");

// Her finder jeg selve følgeskab-popupen
const foelgesPopup = document.getElementById("foelgesPopup");

// Her finder jeg luk-knappen i følgeskab-popupen
const closeFoelgesPopup = document.getElementById("closeFoelgesPopup");

// Her finder jeg knappen der sender følgeskabs-forespørgslen
const sendFoelges = document.getElementById("sendFoelges");

// Her finder jeg stedet hvor feedbacken skal vises
const foelgesFeedback = document.getElementById("foelgesFeedback");

// Når man klikker på en find følgeskab-knap, åbner popupen
openFoelgesButtons.forEach(button => {
  button.addEventListener("click", () => {
    foelgesPopup.classList.add("vis");
    foelgesFeedback.textContent = "";
  });
});

// Når man klikker på luk, lukker popupen
closeFoelgesPopup.addEventListener("click", () => {
  foelgesPopup.classList.remove("vis");
});

// Hvis man klikker udenfor popup-boksen, lukker den også
foelgesPopup.addEventListener("click", (e) => {
  if (e.target === foelgesPopup) {
    foelgesPopup.classList.remove("vis");
  }
});

// Når man klikker på send forespørgsel
sendFoelges.addEventListener("click", () => {
  // Her finder jeg alle valgte beboere i følgeskab-popupen
  const checkedFoelges = document.querySelectorAll("#foelgesPopup .beboer input:checked");
  const navneFoelges = Array.from(checkedFoelges).map(person => person.value);

  // Hvis ingen er valgt, viser jeg en besked
  if (navneFoelges.length === 0) {
    foelgesFeedback.textContent = "Du har ikke valgt nogen beboere endnu.";
    return;
  }

  // Her viser jeg hvem forespørgslen er sendt til
  foelgesFeedback.textContent = "Følgeskabs-forespørgsel sendt til: " + navneFoelges.join(", ");

  // Efter 1,5 sekund lukker popupen og nulstiller valgene
  setTimeout(() => {
    foelgesPopup.classList.remove("vis");
    checkedFoelges.forEach(box => box.checked = false);
    foelgesFeedback.textContent = "";
  }, 1500);
});

// =============================
// LÆS MERE POPUP
// =============================

const laesMerePopup = document.getElementById("laesMerePopup");
const openLaesMereButtons = document.querySelectorAll(".open-laes-mere-popup");
const closeLaesMerePopup = document.getElementById("closeLaesMerePopup");

openLaesMereButtons.forEach(button => {
  button.addEventListener("click", () => {
    laesMerePopup.classList.add("vis");
  });
});

closeLaesMerePopup.addEventListener("click", () => {
  laesMerePopup.classList.remove("vis");
});

laesMerePopup.addEventListener("click", (e) => {
  if (e.target === laesMerePopup) {
    laesMerePopup.classList.remove("vis");
  }
});