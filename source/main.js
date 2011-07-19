(function() {
  var main, slidingPane;
  slidingPane = {
    kind: "SlidingPane",
    flex: 1,
    components: [
      {
        name: 'punchCard',
        kind: 'Tomato.PunchCard'
      }, {
        name: 'todo',
        kind: 'Tomato.ToDo'
      }, {
        name: 'hourGlass',
        kind: 'Tomato.HourGlass'
      }
    ]
  };
  main = {
    name: "Tomato.Main",
    kind: enyo.VFlexBox,
    components: [
      {
        kind: "PageHeader",
        content: "Tomato"
      }, slidingPane
    ]
  };
  enyo.kind(main);
}).call(this);
