import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { translations } from "../components/language";

// This is the French version of the 404 page
const NotFoundFrPage = ({ location }) => {
  // Hard-code the language key to French for this page
  const langKey = "fr";
  const t = translations[langKey];

  return (
    <Layout pageTitle="404: Page Non Trouvée" location={location}>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">404: Page Non Trouvée</h1>
        <p className="text-lg mb-6">
          La page que vous recherchez n'existe pas.
        </p>
        <Link to="/fr/" className="btn btn-primary">
          {t.nav.home}
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundFrPage;
