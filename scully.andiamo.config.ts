import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "andiamo",
  outDir: './dist/static',
  // routes: {
  //   '/videos/:id': {
  //     type: 'json',
  //     slug: {
  //       url: 'https://andiamo-works.netlify.app/videos',
  //       resultsHandler: (response) => response.data,
  //       property: 'id',
  //     },
  //   },
  // },
  routes: {},
  extraRoutes: [
    '/news/andiamo-new-website','/videos/475158192'
  ]
};
