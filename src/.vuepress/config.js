const fs = require("fs");
const path = require("path");

module.exports = {
  base: "/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Codeworks Workbook',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Resource for Codeworks Immersive FullStack Students",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Resources',
        link: '/resources/',
      },
      {
        text: 'Vocab',
        link: '/vocab/'
      },
      {
        text: 'Codeworks',
        link: 'https://boisecodeworks.com'
      }
    ],
    sidebar: {
      '/vocab/': [...getSideBar('vocab', 'Vocabulary')],
      '/resources/': [
        ...getSideBar('resources', 'Student Resources'),
        ...getSideBar('resources/wk1', 'Building Blocks Of Web Development'),
        ...getSideBar('resources/wk2', 'Intro To Js'),
        ...getSideBar('resources/wk3', 'Advancing with Javascript'),
        ...getSideBar('resources/wk4', 'Asynchronous Code'),
        ...getSideBar('resources/wk5', 'Servers with Node/Express'),
      ]
    }
  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}

function getSideBar(folder, title) {
  const extension = [".md"];
  const root = folder.lastIndexOf('/') === -1 ? '' : folder.slice(folder.lastIndexOf('/') + 1)
  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(file =>
      file.toLowerCase() != "readme.md" &&
      fs.statSync(path.join(`${__dirname}/../${folder}`, file)).isFile() &&
      extension.includes(path.extname(file))
    ).map(filename => {
      if (!root) {
        return filename
      }
      return root + '/' + filename
    });
  const children = [...files]
  if (!root) {
    children.unshift('')
  }
  return [{ title: title, children }];
}
