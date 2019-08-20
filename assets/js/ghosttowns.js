import initUI from './ui/ui';
import './ui/forms';
import 'flexslider';
import './app';

window.$ = $;

initUI();

$('.flexslider').flexslider({
    animation: 'slide',
});
