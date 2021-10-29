const sanityClient = require("@sanity/client");
const imageUrlBuilder = require("@sanity/image-url");
const blocksToHtml = require("@sanity/block-content-to-html");

const sanity = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

exports.handler = async (event) => {
  const id = event.queryStringParameters.id || "home";
    console.log(id);
  const query = `*[_type == "post"][slug.current=="${id}"]`;

  const post = await sanity.fetch(query).then((result) => {
    console.log(result);
    const thisPostArray = result.map((post) => {
      const output = {
        createdAt: post._createdAt,
        name: post.title,
        url: `${process.env.URL}/.netlify/functions/getPost`,
        categories: post.categories,
        body: blocksToHtml({ blocks: post.body }),
        meta: post.metaDescription,
      };
      console.log(output);

      const image =
        post.mainImage.asset
          ? post.mainImage.asset._ref
          : null;

      if (image) {
        output.image = imageUrlBuilder(sanity).image(image).url();
      }
      console.log(output);
      return output;
    });
    const thisPost = thisPostArray[0];
    console.log(thisPost);
    return thisPost;
  });

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post)
  }
};
