require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "xxio-catalogue",
  },
  plugins: [
  
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "XXIO EU & Uk Catalogue",
        short_name: "XXIO",
        start_url: "/",
        background_color: "#000",
        theme_color: "#FFFFFF",
        display: "fullscreen",
        icon: "./src/images/icon.png",
        icons: [
          {
            src: "./src/images/icon.png",
            sizes: `512x512`,
            type: `image/png`,
            purpose: "any",
          },
          {
            src: "./src/images/icon-maskable.png",
            sizes: `512x512`,
            type: `image/png`,
            purpose: "maskable",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ["/"],
      },
    },
    {
      resolve: "gatsby-source-contentful",
      // not deploying by webhook - still
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_TOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_ID,
        useNameForId: false,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout.jsx`),
      },
    },
  ],
};
