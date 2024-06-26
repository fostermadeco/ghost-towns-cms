const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const Dotenv = require('dotenv-webpack');

const host = 'ghosttownfinder.dev';
const vagrantIP = '192.168.202.153';

mix.setPublicPath('./site/themes/ghosttowns');

// be sure to use mix.js - not mix.scripts or mix.babel
mix.js(['assets/js/lib/modernizr.js', 'assets/js/ghosttowns.js'], 'site/themes/ghosttowns/js/ghosttowns.js');

// order matters, before scss to set sass variable
mix.copy(
    'node_modules/@fortawesome/fontawesome-free/webfonts',
    'site/themes/ghosttowns/fonts/@fortawesome/fontawesome-free'
);

// Autoprefixer on by default
// Webpack was throwing an error for when using Mix's options.autoprefixer.options
// If you need to overwrite default browsers add a .browserlistrc file
// Previously Mix didn't support .browserlistrc files, but I think it does now
// https://laravel-mix.com/docs/4.1/css-preprocessors#postcss-plugins
mix.sass('assets/scss/ghosttowns.scss', 'site/themes/ghosttowns/css').options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')],
});

// Makes $ available globally, no need to import it
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

// React images references were working only when images was in root
mix.copyDirectory('images', 'site/themes/ghosttowns/img');
mix.copyDirectory('assets/fonts', 'site/themes/ghosttowns/fonts');

mix.webpackConfig({
    plugins: [new Dotenv()],
});

if (!mix.config.production) {
    mix.browserSync({
        proxy: `https://${host}`,
        // compiled files in public or templates
        files: ['site/themes/ghosttowns/**/*'],
        host: vagrantIP,
        port: 3000,
        open: false,
        https: {
            key: `/etc/ssl/private/${host}.key`,
            cert: `/etc/ssl/certs/${host}.crt`,
        },
        watchOptions: {
            usePolling: true,
            interval: 500,
        },
    });
}

if (mix.config.production) {
    mix.version();
}
