import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import { getLanguageInfo } from "./language";

const LanguageSelector = ({ location }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          languages {
            langs
            defaultLangKey
          }
        }
      }
    }
  `);

  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const { langKey, langsMenu } = getLanguageInfo(
    location || { pathname: "/" },
    langs,
    defaultLangKey
  );

  // Function to handle language selection
  const handleLanguageSelect = (selectedLangKey) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", selectedLangKey);
    }
  };

  return (
    <div
      className="flex items-center space-x-2"
      role="navigation"
      aria-label="Language selection"
    >
      {langsMenu.map((lang) => (
        <Link
          key={lang.langKey}
          to={lang.link}
          onClick={() => handleLanguageSelect(lang.langKey)}
          className={`font-medium px-2 py-1 rounded-md transition-colors ${
            lang.selected
              ? "text-primary font-bold bg-primary bg-opacity-10 border border-primary"
              : "text-base-content hover:text-primary border border-transparent"
          }`}
          aria-label={`Switch to ${
            lang.langKey === "en" ? "English" : "Français"
          }${lang.selected ? " (current)" : ""}`}
          aria-current={lang.selected ? "true" : "false"}
        >
          {lang.langKey.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSelector;
