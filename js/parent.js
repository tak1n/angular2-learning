var ParentComponent = function() {
};

ParentComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'parent'
  }),
  new ng.ViewAnnotation({
    templateUrl: 'templates/parent.html',
    directives: [ChildComponent]
  })
];

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(ParentComponent);
});
