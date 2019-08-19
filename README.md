# ghosttownfinder.com

This site is built with Statamic, React, Mapbox, and Algolia.

## Initial Setup

This project uses Vagrant and is provisioned with the [FM Development Standard](https://github.com/fostermadeco/development-standard). See that repo for more about the necessary requirements for using Vagrant.

To run this project for the first time after cloning, init via the `Makefile`:

```
make init
```

Then install the dependencies:
```
vagrant ssh
composer install
npm install
```

### Updating the Provisioner

If you want to update the provisioner run:

```
make update-provisioner
```

## Asset Task Usage

This project uses [Mix](https://laravel.com/docs/master/mix) for build process.

NOTE: All tasks and commands should be run on the Vagrant box.

**Development Task**

Creates static files in `/site/themes/ghosttowns/`:
```
npm run dev
```

**Watch Task**

Uses BrowserSync to refresh assets and reload browser:
```
npm run watch
```

View the site at [http://localhost:3000/](http://localhost:3000/) or the proxy as set in `webpack.mix.js`, e.g. [http://ghosttownfinder.dev:3000](http://ghosttownfinder.dev:3000)

**Production Task:**
```
npm run production
```

## Deployment

Add additional notes about how to deploy this on a live system
