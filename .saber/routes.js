
    export default [
      {
              path: "/posts/my-first-post",
              meta: {
                __relative: '_posts/my-first-post.md',
                __pageId: '31819616'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--_posts-my-first-post-md" */ "C:/Users/Lucas/Desktop/my-portfolio/pages/_posts/my-first-post.md?saberPage=31819616")
                
              }
            },
{
              path: "/about",
              meta: {
                __relative: 'about.md',
                __pageId: '00ac3892'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-md" */ "C:/Users/Lucas/Desktop/my-portfolio/pages/about.md?saberPage=00ac3892")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: 'b2491da6'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "C:/Users/Lucas/Desktop/my-portfolio/pages/index.md?saberPage=b2491da6")
                
              }
            },
{
              path: "/posts",
              meta: {
                __relative: 'posts.md',
                __pageId: '65589ae8'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--posts-md" */ "C:/Users/Lucas/Desktop/my-portfolio/pages/posts.md?saberPage=65589ae8")
                
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
      
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "C:/Users/Lucas/Desktop/my-portfolio/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]