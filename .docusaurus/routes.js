import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Pomodazzle-electron/blog',
    component: ComponentCreator('/Pomodazzle-electron/blog', '98b'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/archive',
    component: ComponentCreator('/Pomodazzle-electron/blog/archive', '647'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/authors',
    component: ComponentCreator('/Pomodazzle-electron/blog/authors', 'a16'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/Pomodazzle-electron/blog/authors/all-sebastien-lorber-articles', '486'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/authors/yangshun',
    component: ComponentCreator('/Pomodazzle-electron/blog/authors/yangshun', 'a8a'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/first-blog-post',
    component: ComponentCreator('/Pomodazzle-electron/blog/first-blog-post', 'bb6'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/long-blog-post',
    component: ComponentCreator('/Pomodazzle-electron/blog/long-blog-post', 'dc4'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/mdx-blog-post',
    component: ComponentCreator('/Pomodazzle-electron/blog/mdx-blog-post', '9c0'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/tags',
    component: ComponentCreator('/Pomodazzle-electron/blog/tags', 'ef4'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/tags/docusaurus',
    component: ComponentCreator('/Pomodazzle-electron/blog/tags/docusaurus', 'c5a'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/tags/facebook',
    component: ComponentCreator('/Pomodazzle-electron/blog/tags/facebook', '8a6'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/tags/hello',
    component: ComponentCreator('/Pomodazzle-electron/blog/tags/hello', '42c'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/tags/hola',
    component: ComponentCreator('/Pomodazzle-electron/blog/tags/hola', '3a0'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/blog/welcome',
    component: ComponentCreator('/Pomodazzle-electron/blog/welcome', '7a7'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/markdown-page',
    component: ComponentCreator('/Pomodazzle-electron/markdown-page', '35f'),
    exact: true
  },
  {
    path: '/Pomodazzle-electron/docs',
    component: ComponentCreator('/Pomodazzle-electron/docs', 'e54'),
    routes: [
      {
        path: '/Pomodazzle-electron/docs',
        component: ComponentCreator('/Pomodazzle-electron/docs', '6e6'),
        routes: [
          {
            path: '/Pomodazzle-electron/docs',
            component: ComponentCreator('/Pomodazzle-electron/docs', '145'),
            routes: [
              {
                path: '/Pomodazzle-electron/docs/category/installation-and-usage-guide',
                component: ComponentCreator('/Pomodazzle-electron/docs/category/installation-and-usage-guide', 'cb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/category/tutorial---extras',
                component: ComponentCreator('/Pomodazzle-electron/docs/category/tutorial---extras', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/intro',
                component: ComponentCreator('/Pomodazzle-electron/docs/intro', '5f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Pomodazzle-electron/docs/tutorial-basics/congratulations', '5ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Pomodazzle-electron/docs/tutorial-basics/deploy-your-site', '213'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/tutorial-basics/download',
                component: ComponentCreator('/Pomodazzle-electron/docs/tutorial-basics/download', '53f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/tutorial-basics/install',
                component: ComponentCreator('/Pomodazzle-electron/docs/tutorial-basics/install', 'd89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/tutorial-basics/launch',
                component: ComponentCreator('/Pomodazzle-electron/docs/tutorial-basics/launch', 'edb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/tutorial-basics/using',
                component: ComponentCreator('/Pomodazzle-electron/docs/tutorial-basics/using', '03a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Pomodazzle-electron/docs/tutorial-extras/manage-docs-versions', 'adf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Pomodazzle-electron/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Pomodazzle-electron/docs/tutorial-extras/translate-your-site', 'cf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Pomodazzle-electron/',
    component: ComponentCreator('/Pomodazzle-electron/', '9ff'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
