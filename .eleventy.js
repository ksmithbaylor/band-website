module.exports = eleventyConfig => {
  eleventyConfig.setTemplateFormats([
    'njk',
    'ttf',
    'eot',
    'svg',
    'woff',
    'css'
  ]);

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
