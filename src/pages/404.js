import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { translations } from "../components/language";

const NotFoundPage = ({ location }) => {
  // For the 404 page, we'll default to English
  const langKey = "en";
  const t = translations[langKey];

  return (
    <Layout pageTitle="404: Not Found" location={location}>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">404: Not Found</h1>
        <p className="text-lg mb-6">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          {t.nav.home}
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
