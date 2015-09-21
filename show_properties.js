var DisplayComponent = function() {
  this.name = "Anna";
  this.names = ['Josef', 'Seppl', 'Hans', 'Wurscht'];
};

DisplayComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'display'
  }),
  new ng.ViewAnnotation({
    template:
       '<p>My name is {{ name }}</p>' +
       '<p>Friends:</p>' +
       '<ul>' +
       '<li *ng-for="#name of names">' +
       '{{ name }}' +
       '</li>' +
       '</ul>',
    directives: [ng.NgFor]
  })
];

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(DisplayComponent);
});
