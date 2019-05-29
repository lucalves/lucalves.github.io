// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
	
  // Use the package `saber-theme-portfolio`
  // More: https://saber.land/docs/themes.html
  theme: 'portfolio',

  // Configure the theme
  themeConfig: {
    style: 'dark',
    github: 'lucalves',
    twitter: 'lucalves11',
    sponsorLink: '',
    sponsorTip: 'Support my work',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      }
    ],
	skills: [
      {
        topic: 'android',
        description: `I'm android developer and Google Developer Group Maceió member`,
        // `image` is optional, by default we load from GitHub
        image: 'https://source.android.com/setup/images/Android_greenrobot.png'
      },
	  {
        topic: 'web',
        description: `I run version control on the Git platform and contribute to the open source platform Github`,
        // `image` is optional, by default we load from GitHub
        image: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'
      },
	  {
        topic: 'vue',
        description: `I'm a Vue passionate, enthusiast and ecosystem contributor`,
        // `image` is optional, by default we load from GitHub
        image: 'https://cdn-images-1.medium.com/max/1600/1*wqYF-8Dmh7LhtLkKfERc3Q.png'
      }
    ],
  },

  permalinks: {
    page: '/:slug',
    post: '/posts/:slug'
  },

  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    }
  ]
}
