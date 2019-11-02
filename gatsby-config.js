module.exports = {
  siteMetadata: {
      title: 'Victoire Beaufils Portfolio ',
      author: 'Victoire Beaufils',
      description:"My website"
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-contentful',
        options:{
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'src',
              path: `${__dirname}/src/`
          }
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  'gatsby-remark-relative-images',
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          maxWidth: 750,
                          linkImagesToOriginal: false
                      }
                  }
              ]
          }
      }
  ]
}