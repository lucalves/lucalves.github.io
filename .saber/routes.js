
    export default [
      {
              path: "/posts/my-first-post",
              meta: {
                __relative: '_posts/my-first-post.md',
                __pageId: 'f1174ebe'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-my-first-post-md" */ "C:/Users/TI/Desktop/lucalves.github.io/pages/_posts/my-first-post.md?saberPage=f1174ebe")
                
              }
            },
{
              path: "/posts/o-poder-do-aprendizado",
              meta: {
                __relative: '_posts/o-poder-do-aprendizado.md',
                __pageId: 'efe7821e'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-o-poder-do-aprendizado-md" */ "C:/Users/TI/Desktop/lucalves.github.io/pages/_posts/o-poder-do-aprendizado.md?saberPage=efe7821e")
                
              }
            },
{
              path: "/about",
              meta: {
                __relative: 'about.md',
                __pageId: 'cafc9b34'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-md" */ "C:/Users/TI/Desktop/lucalves.github.io/pages/about.md?saberPage=cafc9b34")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '40b0eb01'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "C:/Users/TI/Desktop/lucalves.github.io/pages/index.md?saberPage=40b0eb01")
                
              }
            },
{
              path: "/posts",
              meta: {
                __relative: 'posts.md',
                __pageId: '67292c60'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--posts-md" */ "C:/Users/TI/Desktop/lucalves.github.io/pages/posts.md?saberPage=67292c60")
                
              }
            },
{
              path: "/tags/welcome",
              meta: {
                __relative: 'undefined',
                __pageId: 'internal_blog__tag__welcome'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--internal_blog__tag__welcome" */ "#cache/pages/internal_blog__tag__welcome.saberpage?saberPage=internal_blog__tag__welcome")
                
              }
            },
{
              path: "/tags/presentation",
              meta: {
                __relative: 'undefined',
                __pageId: 'internal_blog__tag__presentation'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--internal_blog__tag__presentation" */ "#cache/pages/internal_blog__tag__presentation.saberpage?saberPage=internal_blog__tag__presentation")
                
              }
            },
{
              path: "/tags/learn",
              meta: {
                __relative: 'undefined',
                __pageId: 'internal_blog__tag__learn'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--internal_blog__tag__learn" */ "#cache/pages/internal_blog__tag__learn.saberpage?saberPage=internal_blog__tag__learn")
                
              }
            },
{
              path: "/tags/aprendizado",
              meta: {
                __relative: 'undefined',
                __pageId: 'internal_blog__tag__aprendizado'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--internal_blog__tag__aprendizado" */ "#cache/pages/internal_blog__tag__aprendizado.saberpage?saberPage=internal_blog__tag__aprendizado")
                
              }
            },
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "C:/Users/TI/Desktop/lucalves.github.io/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]