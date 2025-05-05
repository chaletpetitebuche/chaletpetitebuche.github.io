// lang.js

// Get the user's preferred language
function getPreferredLanguage() {
  // Check localStorage first
  const savedPreference = localStorage.getItem("preferredLanguage");
  if (savedPreference) return savedPreference;

  // Detect from browser settings
  const userLangs = navigator.languages || [navigator.language || "en"];

  // Find the first language that starts with 'fr' or 'en'
  const preferred = userLangs.find((lang) => {
    const lowerLang = lang.toLowerCase();
    return lowerLang.startsWith("fr") || lowerLang.startsWith("en");
  });

  // Return the found language or default to 'fr'
  return preferred
    ? preferred.toLowerCase().startsWith("fr")
      ? "fr"
      : "en"
    : "fr";
}

// Set the language and update the page content
function setLanguage(lang) {
  localStorage.setItem("preferredLanguage", lang);
  document.querySelectorAll(".lang-fr, .lang-en").forEach((el) => {
    el.style.display = "none";
  });
  document.querySelectorAll(`.lang-${lang}`).forEach((el) => {
    el.style.display = "block";
  });
}

// On page load, detect and apply the preferred language
window.onload = () => {
  const userLang = getPreferredLanguage();
  setLanguage(userLang);
};
