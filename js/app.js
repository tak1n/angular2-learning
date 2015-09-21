// var AppComponent = ng
//     .Component({
//       selector: 'my-app'
//     })
//     .View({
//       template: '<h1 id="output">My First Angular 2 App</h1>'
//     })
//     .Class({
//       constructor: function () { }
//     });

var AppComponent = function() {
  this.message = "App Message";
};

AppComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'app'
  }),
  new ng.ViewAnnotation({
    // template: '<h1 id="output">My First Angular 2 App with ES5</h1>'
    templateUrl: 'templates/app.html',
    directives: [DisplayComponent, ParentComponent]
  })
];

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(AppComponent);
});
