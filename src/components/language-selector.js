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
    // Save the selected language to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', selectedLangKey);
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost gap-1 normal-case"
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
        <span className="hidden md:inline">
          {langKey === "en" ? "English" : "Français"}
        </span>
        <svg
          width="12px"
          height="12px"
          className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <div
        tabIndex={0}
        className="dropdown-content bg-base-200 text-base-content rounded-box top-px mt-16 w-56 overflow-y-auto shadow"
      >
        <ul className="menu menu-sm gap-1 p-3">
          {langsMenu.map((lang) => (
            <li key={lang.langKey}>
              <Link
                to={lang.link}
                className={`${lang.selected ? "active" : ""}`}
                onClick={() => handleLanguageSelect(lang.langKey)}
              >
                {lang.langKey === "en" ? "English" : "Français"}
                {lang.selected && (
                  <span className="badge badge-sm badge-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSelector;
