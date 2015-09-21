var ChildComponent = function() {
  this.message = "I'm child";
};

ChildComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'child'
  }),
  new ng.ViewAnnotation({
    template: '<p>{{ message }}</p>'
  })
];

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(ChildComponent);
});
