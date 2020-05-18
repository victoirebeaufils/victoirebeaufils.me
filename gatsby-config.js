module.exports = {
  siteMetadata: {
      title: 'Victoire Beaufils ',
      author: 'Victoire Beaufils',
      description:"This website showcases a few programming projects which I worked on paired with some of my fields of interest"
  },
  plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
        
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
      },
      {resolve: 'gatsby-plugin-manifest',
    options:{
        name: 'Victoire Beaufils',
        icon:'src/images/icon.png'
    }
    }
  ]
}