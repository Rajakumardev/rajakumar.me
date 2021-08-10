module.exports = {
  siteMetadata: {
    title: `./rajakumar.me`,
    description: "Hi, i have been creating web apps and android apps since 2010, working as a engineer for 2+ years. i created this blog to share my learning. also you can join the newsletter to get updates.",
    author: "@rajakumar",
    keywords: "developer, javascript, sass, micro-sass, reactjs, portfolio, rajakumar, rajakumardev",
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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
          },
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 720
              // linkImagesToOriginal: false,
            }
          }
        ]
      }
    },
    "gatsby-plugin-mdx",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: "images",
      path: `${__dirname}/src/posts`,
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
