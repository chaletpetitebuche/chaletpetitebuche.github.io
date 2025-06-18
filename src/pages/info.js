import React from "react";
import Layout from "../components/layout";
import { translations } from "../components/language";

// This is the default guests info page (French)
const GuestsPage = ({ location }) => {
  // French is now the default language
  const langKey = "fr";
  const t = translations[langKey];

  return (
    <Layout pageTitle={t.guests.title} location={location}>
      <div className="bg-base-200 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-primary mb-12">
            {t.guests.title}
          </h1>

          <div className="card bg-base-100 shadow-xl mb-12">
            <div className="card-body">
              <h2 className="card-title text-2xl text-primary">
                {t.guests.welcome}
              </h2>
              <p className="text-lg">{t.guests.intro}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary">
                  {t.guests.checkin.title}
                </h2>
                <p className="font-semibold">{t.guests.checkin.info}</p>
                <p>{t.guests.checkin.process}</p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-xl text-primary">
                  {t.guests.emergency.title}
                </h2>
                <p>{t.guests.emergency.contact}</p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl mb-12">
            <div className="card-body">
              <h2 className="card-title text-2xl text-primary">
                {t.guests.amenities.title}
              </h2>
              <p className="mb-6">{t.guests.amenities.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                    />
                  </svg>
                  <span>{t.amenities.wifi}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                  </svg>
                  <span>{t.amenities.heating}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                    />
                  </svg>
                  <span>{t.amenities.kitchen}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                    />
                  </svg>
                  <span>{t.amenities.bathroom}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span>{t.amenities.porch}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                  </svg>
                  <span>{t.amenities.firepit}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl mb-12">
            <div className="card-body">
              <h2 className="card-title text-2xl text-primary">
                {t.guests.rules.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.guests.rules.item1}</li>
                <li>{t.guests.rules.item2}</li>
                <li>{t.guests.rules.item3}</li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl text-primary">
                {t.guests.local.title}
              </h2>
              <p className="mb-6">{t.guests.local.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h3 className="card-title">Restaurant Local</h3>
                    <p>
                      Un restaurant chaleureux à seulement 10 minutes, servant
                      des repas de la ferme à la table.
                    </p>
                  </div>
                </div>
                <div className="card bg-base-200">
                  <div className="card-body">
                    <h3 className="card-title">Épicerie</h3>
                    <p>
                      Une petite épicerie bien approvisionnée à environ 15
                      minutes du chalet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GuestsPage;
