const fs = require("fs");
const path = require("path");
const { config } = require("vuepress-theme-hope");


module.exports = config({
  base: "/fs-student-guide/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Codeworks FS Student Guide',
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
    ['meta', { name: 'theme-color', content: '#3093d9' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'application-name', content: 'CodeWorks FS Student Guide' }],
    ['meta', { name: 'ROBOTS', content: 'FOLLOW' }],
    ['meta', { name: 'og:image', content: 'https://bcw.blob.core.windows.net/public/img/8600856373152463' }],
    ['meta', { name: 'og:type', content: 'article' }],
    ['meta', { name: 'og:url', content: 'https://codeworksacademy.com/fs-student-guide' }],
    ['meta', { name: 'og:title', content: 'Learn to Code. Develop Your Future' }],
    ['meta', { name: 'og:locale', content: 'en_US' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: 'https://bcw.blob.core.windows.net/public/img/2900578872732848',
    editLinks: true,
    repo: 'BoiseCodeWorks/codeworks-fs-student-guide',
    repoLabel: 'Contribute!',
    docsDir: 'src',
    docsBranch: 'main',
    darkmode: "switch",
    themeColor: {
      blue: "#2196f3",
      red: "#f26d6d",
      green: "#00ffdc",
      orange: "#fb9b5f",
      purple: "#8e44ad",
      banana: "#ffe135"
    },
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
        ...getSideBar('resources/wk3', 'Advancing with JS'),
        ...getSideBar('resources/wk4', 'Asynchronous Code'),
        ...getSideBar('resources/wk5', 'Servers with Node/Express'),
        ...getSideBar('resources/wk6', 'Frontend Frameworks with Vue3'),
        ...getSideBar('resources/wk8-9', 'Working In a Professional Environment'),
        ...getSideBar('resources/wk10', 'Foundations of C#'),
        ...getSideBar('resources/wk11', 'Dotnet WebApi\'s')
      ]
    }
  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    ["@mr-hope/sitemap", { hostname: 'https://codeworksacademy.com/fs-student-guide' }],
  ]
})

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
