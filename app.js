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
    }

    AppComponent.annotations = [
      new ng.ComponentAnnotation({
        selector: 'my-app-es5'
      }),
      new ng.ViewAnnotation({
        template: '<h1 id="output">My First Agnular 2 App with ES5</h1>'
      })
    ];

    document.addEventListener('DOMContentLoaded', function() {
      ng.bootstrap(AppComponent);
    });
