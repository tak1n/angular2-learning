var ParentComponent = function() {
};

ParentComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: 'parent'
  }),
  new ng.ViewAnnotation({
    template: '<p>This is parent</p>' +
              '<child></child>',
    directives: [ChildComponent]
  })
];

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(ParentComponent);
});
