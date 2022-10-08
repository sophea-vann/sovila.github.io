module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/sovila.github.io/" : "/",
  transpileDependencies: ["vuetify"],
};
