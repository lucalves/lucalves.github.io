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
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/android/android.png'
      },
	  {
        topic: 'firebase',
        description: `I am a Firebase enthusiast and user and the power it has to offer`,
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png'
      },
	  {
        topic: 'git',
        description: `I run version control on the Git platform and contribute to the open source platform Github`,
        image: 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'
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
