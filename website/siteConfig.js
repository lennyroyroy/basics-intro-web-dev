/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Glitch',
    image: 'https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Flogo-day.svg',
    infoLink: 'https://glitch.com',
    pinned: true,
    target:'_blank',
  },
    {
    caption: 'Codepen',
    image: 'https://blog.codepen.io/wp-content/uploads/2014/03/codepen-logo.svg',
    infoLink: 'https://codepen.io',
    pinned: true,
    target:'_blank',
  },
  {
    caption: 'Slides',
    image: 'https://static.slid.es/logo/slides-logo-495x479.png',
    infoLink: 'https://slides.com',
    pinned: true,
    target:'_blank',
  },
  {
    caption: 'Docusaurus',
    image: 'https://seeklogo.com/images/D/docusaurus-logo-808B78C0CA-seeklogo.com.png',
    infoLink: 'https://docusaurus.io',
    pinned: true,
    target:'_blank',
  },
  {
    caption: 'Tunetank',
    image: 'https://tunetank.com/img/logo_word.svg',
    infoLink: 'https://tunetank.com',
    pinned: true,
    target:'_blank',
  },
    {
    caption: 'Anchor',
    image: 'http://c93fea60bb98e121740fc38ff31162a8.s3.amazonaws.com/wp-content/uploads/2017/03/anchor-fm.jpg',
    infoLink: 'https://anchor.fm',
    pinned: true,
    target:'_blank',
  },


  
];

const siteConfig = {
  title: 'The Basics', // Title for your website.
  tagline: 'Learn the basics of HTMl & CSS with Lennyroy. In this 8 week course we will dive deep into the foundations of modern web technology.',
  tagline_display: 'Intro to Web Development',
  docsSideNavCollapsible: true,
  wrapPagesHTML: true,
  url: 'https://thebasics.dev' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'basics-intro-web-dev',
  headerLinks: [
    { page: "slides", label: "Slides" },
    {doc: 'Extras/video-library', label: 'Videos'},
    {doc: 'Extras/challenges', label: 'Challenges'},
    { blog: true, label: 'Blog' }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/LC-white-full.png',
  footerIcon: 'img/LR-white@2x.png',
  favicon: 'img/favicon.ico',
  /* colors for website */
  colors: {
    primaryColor: '#5c194d',
    secondaryColor: '#401135',
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Lennyroy Codes`,
  gaTrackingId: 'UA-146614083-1',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'monokai',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  scrollToTop: true,
    scrollToTopOptions: {
    zIndex: 100,
  },

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
