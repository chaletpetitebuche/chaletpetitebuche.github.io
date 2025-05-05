import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { getLanguageInfo, translations } from "./language";
import { graphql, useStaticQuery } from "gatsby";
import LanguageSelector from "./language-selector";
import ThemeToggle from "./theme-toggle";

const Layout = ({ children, pageTitle, location }) => {
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
  const { langKey, langsMenu } = getLanguageInfo(
    location || { pathname: "/" },
    langs,
    defaultLangKey
  );
  const t = translations[langKey];

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
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link
                      to={langKey === defaultLangKey ? "/" : `/${langKey}/`}
                    >
                      {t.nav.home}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={
                        langKey === defaultLangKey
                          ? "/guests/"
                          : `/${langKey}/guests/`
                      }
                    >
                      {t.nav.guests}
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to={langKey === defaultLangKey ? "/" : `/${langKey}/`}
                className="text-xl font-bold text-primary"
              >
                {t.site.title}
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link to={langKey === defaultLangKey ? "/" : `/${langKey}/`}>
                    {t.nav.home}
                  </Link>
                </li>
                <li>
                  <Link
                    to={
                      langKey === defaultLangKey
                        ? "/guests/"
                        : `/${langKey}/guests/`
                    }
                  >
                    {t.nav.guests}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end">
              <ThemeToggle />
              <LanguageSelector location={location} />
              <a
                href="https://airbnb.com"
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

      <footer className="bg-neutral text-neutral-content py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">{t.site.title}</h3>
              <p>{t.footer.description}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t.footer.contact}</h3>
              <p>{t.footer.email}: contact@chaletpetitebuche.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">{t.footer.follow}</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/chaletpetitebuche/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Instagram
                </a>
                <a
                  href="https://airbnb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  Airbnb
                </a>
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
