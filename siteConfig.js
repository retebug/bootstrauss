/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/ostrich.svg',
    infoLink: 'https://www.cid.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'OStrich' /* title for your website */,
  tagline: 'UX Guidelines for Business Applications',
  url: 'https://retebug.github.io/bootstrauss/' /* your website url */,
  baseUrl: 'https://retebug.github.io/bootstrauss/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'bootstrauss',
  organizationName: 'retebug',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc2', label: 'Setup'},
    {doc: 'Atoms/a01', label: 'Components'},
    {page: 'help', label: 'Patterns'},
    {search: true},
    {blog: false}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/ostrich.svg',
  footerIcon: 'img/ostrich.svg',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#2D3050',
    secondaryColor: '#548AFF',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      '"Noto Sans", sans-serif'
    ]
  },*/

  separateCss: ['static/css/non-docusaurus', 'static/assets/separate-css'],
  stylesheets: ['https://escid-ux-guidelines.cid-dev.net/assets/css/screen.css?v=39fc73b5b9bc86b9e2feb95ba70b0ebb'],

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' cid.com',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/ostrich.png',
  twitterImage: 'img/ostrich.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/retebug/bootstrauss',
};

module.exports = siteConfig;
