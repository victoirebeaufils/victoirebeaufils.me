module.exports = {
  siteMetadata: {
      title: "Victoire Beaufils' website ",
      author: 'Victoire Beaufils',
      description:"This website showcases a few programming projects which I worked on paired with some of my fields of interest"
    
    },
  plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `source sans pro\:300,400,600,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              name: 'blog',
              path: `${__dirname}/src/blog`
          }
      },
        {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: `${__dirname}/src/images/blog`
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