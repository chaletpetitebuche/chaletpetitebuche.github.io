import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { translations } from "../components/language";

const HomePage = ({ pageContext = {}, location }) => {
  // Always set langKey to "en" for this file, regardless of pageContext
  const langKey = "en";
  const t = translations[langKey];

  return (
    <Layout pageTitle={t.nav.home} location={location}>
      {/* Hero Section */}
      <section className="relative h-screen">
        <StaticImage
          src="../images/chalet-printemps.jpeg"
          alt="Cabin in the forest"
          placeholder="blurUp"
          layout="fullWidth"
          className="h-full"
          objectPosition="center"
          objectFit="cover"
          formats={["auto", "webp", "avif"]}
          quality={95}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8">{t.hero.subtitle}</p>
            <a
              href="https://airbnb.ca/rooms/1413810727910339261"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <StaticImage
                src="../images/chalet-printemps.jpeg"
                alt="Cabin interior"
                className="rounded-lg shadow-xl"
                formats={["auto", "webp", "avif"]}
                quality={95}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                {t.about.title}
              </h2>
              <p className="text-lg">{t.about.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              {t.amenities.title}
            </h2>
            <p className="text-lg mt-3">{t.amenities.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                    />
                  </svg>
                  {t.amenities.wifi}
                </h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">
                  <svg
                    strokeWidth={1.5}
                    fill="currentColor"
                    className="w-6 h-6 text-secondary"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m544 0h-512a32 32 0 0 0 -32 32v160a32 32 0 0 0 32 32h512a32 32 0 0 0 32-32v-160a32 32 0 0 0 -32-32zm0 192h-512v-160h512zm-472-32h432a8 8 0 0 0 8-8v-16a8 8 0 0 0 -8-8h-432a8 8 0 0 0 -8 8v16a8 8 0 0 0 8 8zm152 264a56 56 0 0 1 -56 56h-16a56.09 56.09 0 0 1 -54.79-67.76c5.36-26.18 29.68-44.24 56.4-44.24h14.39a8 8 0 0 0 8-8v-16a8 8 0 0 0 -8-8h-16a88.09 88.09 0 0 0 -87.57 96.78c4.45 45.72 45.57 79.22 91.48 79.22h12.09a88 88 0 0 0 88-88v-168h-32zm196.1-120h-12.1a8 8 0 0 0 -8 8v16a8 8 0 0 0 8 8h16a56.09 56.09 0 0 1 54.79 67.76c-5.36 26.18-29.68 44.24-56.4 44.24h-14.39a56 56 0 0 1 -56-56v-136h-32v136a88 88 0 0 0 88 88h16a88.09 88.09 0 0 0 87.57-96.78c-4.45-45.72-45.57-79.22-91.47-79.22z" />
                  </svg>
                  {t.amenities.heating}
                </h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">
                  <svg
                    strokeWidth={1.5}
                    fill="currentColor"
                    className="w-6 h-6 text-secondary"
                    viewBox="0 0 576 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m0 60c0 142.9 69.8 215.8 188.6 226.5l-104.4 92.6c-25.8 22.9-27 63-2.6 87.3l28 28c24.6 24.6 64.6 23.1 87.3-2.6l93.1-105.1c96.3 113.5 89.4 105.4 90.3 106.3 22.9 24.4 61.9 25.7 86.2 1.4l28-28c24.1-24.1 23.2-63.3-1.6-86.4l-108.1-100.3 7.2-7.7c38.8 12.1 77.1 7 110.3-26.1 20.9-20.9 61.7-79.7 66.8-87.1 20.1-28.5-7.3-66.8-37.4-70.6-2.8-22.1-23.6-41.5-43.9-44-3.9-31-42.6-57.1-70.6-37.4-7.4 5.1-66.2 46-87.1 66.9-32.1 32.1-38.7 70.3-26.1 110.3l-11.2 10.3-192-178.2c-38.2-35.5-100.8-8.4-100.8 43.9zm379.7 177.2-18.4 20.7-44.9-41.7 22.5-19.9c-18.8-33-15.4-70.7 13.9-100 19.5-19.6 82.8-63.3 82.8-63.3 7.6-5.5 25.1 12.3 19.4 19.7l-81 80.9c-7 8.2 10.9 26.4 19.4 19.7l86.1-76.4c7.4-5.4 24.9 12 19.5 19.5l-76.4 86.1c-6.6 8.5 11.5 26.5 19.8 19.5l80.9-80.9c7.4-5.8 25.2 11.8 19.7 19.4 0 0-43.7 63.2-63.3 82.9-29.6 29.4-67.3 32.4-100 13.8zm-161 65.5 50.4 59.3-96.1 108.6c-10.7 12-29.3 12.7-40.8 1.2l-28-28c-11.4-11.4-10.8-30.1 1.2-40.8zm-186.7-242.7c0-24.4 29.1-37.2 47.1-20.5l392 364c11.6 10.8 12 29.1.7 40.3l-28 28c-11.2 11.2-29.4 10.9-40.2-.6l-182.6-215.2c-140 0-189-78.8-189-196z" />
                  </svg>
                  {t.amenities.kitchen}
                </h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">
                  <svg
                    strokeWidth={1.5}
                    stroke="none"
                    fill="currentColor"
                    className="w-6 h-6 text-secondary"
                    viewBox="0 0 640 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m536 480h-432a8 8 0 0 0 -8 8v16a8 8 0 0 0 8 8h432a8 8 0 0 0 8-8v-16a8 8 0 0 0 -8-8zm72-480h-576a32 32 0 0 0 -32 32v352a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32v-352a32 32 0 0 0 -32-32zm0 384h-576v-352h576z" />
                  </svg>
                  {t.amenities.tv}
                </h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">
                  <svg
                    strokeWidth={1.5}
                    stroke="none"
                    fill="currentColor"
                    className="w-6 h-6 text-secondary"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m80 144c39.76 0 72-32.24 72-72 0-39.77-32.24-72-72-72s-72 32.23-72 72c0 39.76 32.24 72 72 72zm0-112c22.06 0 40 17.94 40 40s-17.94 40-40 40-40-17.94-40-40 17.94-40 40-40zm255.58 184.28c.25 4.29 3.63 7.72 7.93 7.72h15.98c4.54 0 8.34-3.8 8.11-8.34-2.03-40.37-18.75-77.44-45.6-100.42-19.77-16.92-32.18-44.75-33.96-75.52-.25-4.29-3.63-7.71-7.93-7.71h-15.98c-4.54 0-8.34 3.8-8.11 8.34 2.03 40.37 18.75 77.44 45.6 100.42 19.76 16.91 32.17 44.74 33.96 75.51zm96 0c.25 4.29 3.63 7.72 7.93 7.72h15.98c4.54 0 8.34-3.8 8.11-8.34-2.03-40.37-18.75-77.44-45.6-100.42-19.77-16.92-32.18-44.75-33.96-75.52-.25-4.29-3.63-7.71-7.93-7.71h-15.98c-4.54 0-8.34 3.8-8.11 8.34 2.03 40.37 18.75 77.44 45.6 100.42 19.76 16.91 32.17 44.74 33.96 75.51zm-327.58 231.72h16c4.42 0 8-3.58 8-8v-112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v112c0 4.42 3.58 8 8 8zm96 0h16c4.42 0 8-3.58 8-8v-112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v112c0 4.42 3.58 8 8 8zm96 0h16c4.42 0 8-3.58 8-8v-112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v112c0 4.42 3.58 8 8 8zm96 0h16c4.42 0 8-3.58 8-8v-112c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v112c0 4.42 3.58 8 8 8zm88-192h-208l-110.93-83.2a63.99 63.99 0 0 0 -38.4-12.8h-58.67c-35.35 0-64 28.65-64 64v224c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64v-160c0-17.67-14.33-32-32-32zm-448-32c0-17.64 14.36-32 32-32h58.67c6.88 0 13.7 2.27 19.2 6.4l76.8 57.6h-186.67zm448 224c0 17.64-14.36 32-32 32h-384c-17.64 0-32-14.36-32-32v-160h448z" />
                  </svg>
                  {t.amenities.porch}
                </h3>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                  </svg>
                  {t.amenities.firepit}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">
              {t.activities.title}
            </h2>
            <p className="text-lg mt-3">{t.activities.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{t.activities.hiking.title}</h3>
                <p>{t.activities.hiking.description}</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{t.activities.fishing.title}</h3>
                <p>{t.activities.fishing.description}</p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title">{t.activities.wildlife.title}</h3>
                <p>{t.activities.wildlife.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                {t.location.title}
              </h2>
              <p className="text-lg">{t.location.description}</p>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-64 bg-gray-300 rounded-lg shadow-xl flex items-center justify-center">
                <iframe
                  width="100%"
                  height="256"
                  className="rounded-lg shadow-xl"
                  style={{ border: 0 }}
                  load="lazy"
                  allowFullScreen
                  title="Location of Chalet La Petite Bûche"
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ9cc4XwgVxkwRO-Q3veEKkj0&key=AIzaSyCyuaT_TN_EAoIX1WTWDlUl_IOTEcMzl9I"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
