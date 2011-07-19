(function() {
  var buttonGroup, punchCard;
  buttonGroup = {
    kind: 'RadioGroup',
    name: 'buttons',
    components: [
      {
        caption: 'One',
        value: 'one'
      }, {
        caption: 'Two',
        value: 'two'
      }, {
        caption: 'Three',
        value: 'three'
      }
    ]
  };
  punchCard = {
    name: 'Tomato.PunchCard',
    kind: enyo.SlidingView,
    width: '500px',
    components: [
      {
        kind: "PageHeader",
        content: "Punch Card"
      }, buttonGroup, {
        name: "statusText",
        content: "Select one"
      }, {
        kind: 'PunchCard.Dot',
        ondragstart: 'itemDragStart',
        ondragfinish: 'itemDragFinish'
      }
    ],
    itemDragFinish: function(inSender, e) {
      return this.dragging = false;
    },
    itemDragStart: function(inSender, e) {
      return this.dragging = true;
    }
  };
  enyo.kind(punchCard);
}).call(this);
