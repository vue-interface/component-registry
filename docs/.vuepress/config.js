const path = require('path');

module.exports = {
    serviceWorker: true,
    title: 'Vue Interface',
    description: 'A collection of standalone UI components built for Vue.',
    plugins: [
        ['vuepress-plugin-template-constants', {
            pkg: require(path.resolve('package.json'))
        }]
    ],
    themeConfig: {
        sidebarDepth: 2,
        sidebar: {
            // fallback
            '/': [
                ''
            ]
        },
        footer: "Ⓒ Active Engagement, LLC"
        /*
        nav: [
          { text: "Works", link: "/", position: "left", external: false },
          { text: "Instagram", link: "https://www.instagram.com/its.nwa/", position: "left", external: true },
          { text: "Say hi!", link: "mailto:sayhi@mydomain.com", position: "right", external: true },
          { text: 'Journal', link: '/journal/', position: 'right', external: false },
        ]
        */
    }
};