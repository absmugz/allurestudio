const { mix } = require('laravel-mix');
const WebpackRTLPlugin = require('webpack-rtl-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
        'resources/assets/allure-theme/css/style.css',
        'resources/assets/allure-theme/css/default.css',
        'resources/assets/allure-theme/css/color-option-allure.css',
        'resources/assets/allure-theme/plugins/jquery-ui/jquery-ui.min.css',
        'resources/assets/allure-theme/plugins/bootstrap/css/bootstrap.min.css',
        'resources/assets/allure-theme/plugins/font-awesome/css/font-awesome.min.css',
        'resources/assets/allure-theme/plugins/selectbox/select_option1.css',
        'resources/assets/allure-theme/plugins/owl-carousel/owl.carousel.min.css',
        'resources/assets/allure-theme/plugins/fancybox/jquery.fancybox.pack.css',
        'resources/assets/allure-theme/plugins/isotope/isotope.min.css',
        'resources/assets/allure-theme/plugins/datepicker/datepicker.min.css',
        'resources/assets/allure-theme/plugins/bootstrapthumbnail/bootstrap-thumbnail.css'
    ], 'public/css/frontend.css')
    .sass('resources/assets/sass/backend/app.scss', 'public/css/backend.css')
    .js([
        'resources/assets/allure-theme/plugins/jquery/jquery.min.js',
        'resources/assets/allure-theme/plugins/jquery-ui/jquery-ui.min.js',
        'resources/assets/allure-theme/plugins/bootstrap/js/bootstrap.min.js',
        'resources/assets/allure-theme/plugins/selectbox/jquery.selectbox-0.1.3.min.js',
        'resources/assets/allure-theme/plugins/owl-carousel/owl.carousel.min.js',
        'resources/assets/allure-theme/plugins/isotope/isotope.min.js',
        'resources/assets/allure-theme/plugins/fancybox/jquery.fancybox.pack.js',
        'resources/assets/allure-theme/plugins/isotope/isotope-triger.min.js',
        'resources/assets/allure-theme/plugins/smoothscroll/SmoothScroll.min.js',
        'resources/assets/allure-theme/plugins/datepicker/bootstrap-datepicker.min.js',
        'resources/assets/allure-theme/plugins/syotimer/jquery.syotimer.min.js',
        'resources/assets/allure-theme/js/custom.js',
        'resources/assets/js/frontend/app.js',
        'resources/assets/js/plugin/sweetalert/sweetalert.min.js',
        'resources/assets/js/plugins.js'
    ], 'public/js/frontend.js')
    .js([
        'resources/assets/js/backend/app.js',
        'resources/assets/js/plugin/sweetalert/sweetalert.min.js',
        'resources/assets/js/plugins.js'
    ], 'public/js/backend.js')
    .webpackConfig({
        plugins: [
            new WebpackRTLPlugin('/css/[name].rtl.css')
        ]
    });

if(mix.config.inProduction){
    mix.version();
}
