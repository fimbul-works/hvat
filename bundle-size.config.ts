const mainBundles = ["bundles/bundle.js"];

export default {
  groups: [
    {
      name: "Bundle",
      include: mainBundles,
    },
    {
      name: "Type Guards",
      include: "bundles/*.js",
      exclude: mainBundles,
    },
  ],
  minify: true,
};
