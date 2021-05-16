module.exports = {
  siteMetadata: {
    title: `./rajakumar.me`,
    description: "",
    siteUrl: "https://rajakumar.me"
  },
  plugins: [{
    resolve: `gatsby-plugin-gtag`,
    options: {
      trackingId: `UA-184468386-1`,
      head: false,
      anonymize: true,
    },
  },
  {
    resolve: "gatsby-plugin-sass",
    options: {
      implementation: require('sass')
    }
  }, {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    // "gatsby-plugin-manifest",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
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
    resolve: "gatsby-source-filesystem",
    options: {
      name: "pages",
      path: "./src/pages/",
    },
    __key: "pages",
  },
  ],
};
