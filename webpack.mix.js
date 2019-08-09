const mix = require('laravel-mix');

const host = 'ghosttownfinder.dev';
const vagrantIP = '192.168.202.153';

mix.setPublicPath('./site/themes/ghosttowns');

// be sure to use mix.js - not mix.scripts or mix.babel
mix.js(['assets/js/lib/modernizr.js', 'assets/js/main.js'], 'site/themes/ghosttowns/js/main.js');

// order matters, before scss to set sass variable
mix.copy('node_modules/@fortawesome/fontawesome-free/webfonts', 'site/themes/ghosttowns/fonts/@fortawesome/fontawesome-free');

// Autoprefixer on by default
// Webpack was throwing an error for when using Mix's options.autoprefixer.options
// If you need to overwrite default browsers add a .browserlistrc file
// Previously Mix didn't support .browserlistrc files, but I think it does now
// https://laravel-mix.com/docs/4.1/css-preprocessors#postcss-plugins
mix.sass('assets/scss/main.scss', 'site/themes/ghosttowns/css');

// Makes $ available globally, no need to import it
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});

mix.copyDirectory('assets/images', 'sites/themes/ghosttowns/images');
// mix.copyDirectory('assets/fonts', 'public/assets/fonts');

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
