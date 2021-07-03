export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60dfddaf37f112d24618fda3',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-b72vu85d',
                  apiId: '9bd376fb-efaf-477c-935b-f1925514e6d0'
                },
                {
                  buildHookId: '60dfddaf37f112ca7218fe60',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-q1vftvpb',
                  apiId: 'e5fe8307-743b-4083-9c29-5b173c05ccdb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alogan5201/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-q1vftvpb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
