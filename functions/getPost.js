// const sanityClient = require("@sanity/client");
// // const imageUrlBuilder = require("@sanity/image-url");
// // const blocksToHtml = require("@sanity/block-content-to-html");

// const sanity = sanityClient({
//   projectId: process.env.SANITY_PROJECT_ID,
//   dataset: process.env.SANITY_DATASET,
//   useCdn: true,
// });

// exports.handler = async (id) => {
//   // const query = '*[_type == "post" && slug.current == $name] {slug}';
//   // const params = {name: id};

//   sanity.sanityClient.getDocument(id).then((post) => {
//     console.log(post);
//     return post;
//   })

 
  




//   //   console.log(query);
//   // const post = await sanity.fetch(query).then((result) => {
//   //   const qhisPost = result => {
//   //     const output = {
//   //       createdAt: post.createdAt,
//   //       id: post.slug.current,
//   //       name: post.title,
//   //       url: `${process.env.URL}/.netlify/functions/getPost`,
//   //       categories: post.categories,
//   //       body: blocksToHtml({ blocks: post.body }),
//   //     };
//   //     const image =
//   //       post.mainImage.asset
//   //         ? post.mainImage.asset._ref
//   //         : null;

//   //     if (image) {
//   //       output.image = imageUrlBuilder(sanity).image(image).url();
//   //     }
//   //     return output;
//   //   };
//   //   return qhisPost;
//   // });
   

//   return {
//     statusCode: 200,
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(post),
//   }
  
  
// };
