module.exports = (ctx) => {
  if (ctx.meteor) {
    const config = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    };

    if (ctx.env === "production") {
      config.plugins.autoprefixer = {
        browsers: ["defaults"],
      };
    }

    return config;
  } else {
    return {};
  }
};
