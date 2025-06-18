/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Chalet La Petite Bûche`,
    siteUrl: `https://chaletpetitebuche.github.io`,
    description: `A cozy micro-cabin retreat in the heart of the forest.`,
    author: `@chaletpetitebuche`,
    languages: {
      langs: ["en", "fr"],
      defaultLangKey: "fr",
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault: "fr",
        langKeyForNull: "fr",
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chalet La Petite Bûche`,
        short_name: `Chalet PB`,
        start_url: `/`,
        background_color: `#f5f5f4`,
        theme_color: `#3f6212`,
        display: `standalone`,
        icon: `src/images/favicon.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
};
