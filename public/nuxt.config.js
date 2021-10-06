export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'tupachanga.mx',
        htmlAttrs: {
            lang: 'es'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['static/assets/css/bootstrap.css',
        'static/assets/css/blocks.css'
    ],
    script: [{
            src: "static/assets/js/popper.min.js",
            type: "text/javascript"
        },
        {
            src: "static/assets/js/bootstrap.min.js",
            type: "text/javascript"
        },
        {
            src: "static/assets/js/tupachanga.js",
            type: "text/javascript"
        }
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        'nuxt-vue-select',
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            plugins: [
                ["@babel/plugin-proposal-class-properties", { "loose": true }],
                ["@babel/plugin-proposal-private-methods", { "loose": true }],
                ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
            ]
        }
    }
}
