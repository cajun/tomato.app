(function() {
  var main;
  main = {
    name: "Tomato.Main",
    kind: enyo.VFlexBox,
    components: [
      {
        kind: "PageHeader",
        content: "Tomato"
      }, {
        kind: "SlidingPane",
        flex: 1,
        components: [
          {
            name: 'left',
            width: '200px'
          }, {
            name: 'middle',
            width: '200px',
            peekWidth: 68
          }, {
            name: 'right',
            flex: 1,
            onResize: 'slidingResize'
          }
        ]
      }
    ]
  };
  enyo.kind(main);
}).call(this);
