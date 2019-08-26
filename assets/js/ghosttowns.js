import 'flexslider';
import Glide from '@glidejs/glide';
import mediumZoom from 'medium-zoom';
import initUI from './ui/ui';
import './ui/forms';
import './app';

window.$ = $;

initUI();

$('.flexslider').flexslider({
    animation: 'slide',
});

if ($('.glide').length > 0) {
    new Glide('.glide', {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
    }).mount();
}

mediumZoom('[data-zoomable]', {
    background: '#000000',
});
