import React, { useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { getLanguageInfo, translations } from "./language";
import { graphql, useStaticQuery } from "gatsby";
import LanguageSelector from "./language-selector";
import ThemeToggle from "./theme-toggle";

const Layout = ({ children, pageTitle, location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          languages {
            langs
            defaultLangKey
          }
        }
      }
    }
  `);

  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const { langKey } = getLanguageInfo(
    location || { pathname: "/" },
    langs,
    defaultLangKey
  );
  const t = translations[langKey];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <html lang={langKey} />
        <title>
          {pageTitle ? `${pageTitle} | ` : ""}
          {t.site.title}
        </title>
        <meta name="description" content={t.site.description} />
      </Helmet>

      <header className="bg-base-100 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="navbar bg-base-100">
            <div className="navbar-start">
              <div className="dropdown">
                <button
                  aria-label="Menu"
                  onClick={toggleMenu}
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                  <span className="sr-only">Menu</span>
                </button>
                <ul
                  className={`menu dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 ${
                    isMenuOpen ? "block" : "hidden"
                  }`}
                >
                  {/* Mobile-only theme and language controls */}
                  <li className="lg:hidden">
                    <div className="flex items-center justify-between">
                      <ThemeToggle />
                      <LanguageSelector location={location} />
                    </div>
                  </li>
                </ul>
              </div>
              <Link
                to={langKey === defaultLangKey ? "/" : `/${langKey}/`}
                className="text-xl font-bold text-primary font-headers"
              >
                {t.site.title}
              </Link>
            </div>

            <div className="navbar-end">
              {/* Language selector - visible only on desktop */}
              <div className="hidden lg:block">
                <LanguageSelector location={location} />
              </div>

              {/* Desktop-only theme control */}
              <div className="hidden lg:block ml-2">
                <ThemeToggle />
              </div>
              <a
                href="https://airbnb.ca/rooms/1413810727910339261"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary ml-2"
              >
                {t.nav.book}
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-base-100 text-base-100-content py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">{t.site.title}</h3>
              <p>{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t.footer.contact}</h3>
              <p>{t.footer.email}: chaletpetitebuche@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t.footer.follow}</h3>
              <div className="flex flex-col">
                <a
                  href="https://www.instagram.com/chaletpetitebuche/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent underline mb-2"
                >
                  Instagram
                </a>
                <span>{t.footer.registration}</span>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>
              © {new Date().getFullYear()} {t.site.title}. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
