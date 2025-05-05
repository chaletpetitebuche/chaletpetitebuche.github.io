import "./src/styles/global.css";

// Browser language detection for Gatsby
export const onClientEntry = () => {
  // Skip this during SSR/build time and only run in browser
  if (typeof window === "undefined" || typeof navigator === "undefined") return;

  // Only run on the initial page load (homepage)
  if (window.location.pathname === "/") {
    // Check localStorage first - only proceed with detection if no valid preference exists
    const savedPreference = localStorage.getItem("preferredLanguage");

    // If there's a valid saved preference (fr or en), use it without detection
    if (
      savedPreference &&
      (savedPreference === "fr" || savedPreference === "en")
    ) {
      // Redirect to the appropriate language version if needed
      if (savedPreference === "fr") {
        window.location.replace("/fr/");
      }
      return;
    }

    // No valid saved preference, so detect from browser settings
    const userLangs = navigator.languages || [navigator.language || "en"];

    // Find the first language that starts with 'fr' or 'en'
    const preferred = userLangs.find((lang) => {
      const lowerLang = lang.toLowerCase();
      return lowerLang.startsWith("fr") || lowerLang.startsWith("en");
    });

    // Determine the language based on the match (default to 'fr' if no match)
    const preferredLang = preferred
      ? preferred.toLowerCase().startsWith("fr")
        ? "fr"
        : "en"
      : "fr";

    // Save the preference
    localStorage.setItem("preferredLanguage", preferredLang);

    // Redirect to the appropriate language version if needed
    if (preferredLang === "fr") {
      window.location.replace("/fr/");
    }
  }
};
