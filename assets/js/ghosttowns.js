import 'flexslider';
import Glide from '@glidejs/glide';
import initUI from './ui/ui';
import './ui/forms';
import './app';

window.$ = $;

initUI();

$('.flexslider').flexslider({
    animation: 'slide',
});

new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 3,
}).mount();
