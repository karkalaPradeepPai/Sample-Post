import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home',{path: '/'});
  this.route('about');
  this.route('contact', function () {
    this.route('email');
    this.route('phone');
      });
  this.route('posts');
});

export default Router;
