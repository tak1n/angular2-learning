var DisplayComponent = function() {
  this.name = "Anna";
  this.names = ['Josef', 'Seppl', 'Hans', 'Wurscht'];
};

DisplayComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'display'
  }),
  new ng.ViewAnnotation({
    templateUrl: 'templates/display.html',
    directives: [ng.NgFor]
  })
];

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(DisplayComponent);
});
