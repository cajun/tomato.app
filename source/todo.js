(function() {
  var drawers, todayItem, todaysDrawer, todaysList, todo;
  todayItem = {
    name: 'Tomato.TodayItem',
    kind: enyo.SwipableItem,
    layoutKind: enyo.HFlexLayout,
    components: [
      {
        name: 'caption',
        flex: 1
      }, {
        kind: 'Button'
      }
    ]
  };
  todaysList = {
    kind: enyo.VirtualList,
    width: '500px',
    height: '500px',
    onSetupRow: "setupRow",
    components: [todayItem]
  };
  todaysDrawer = {
    name: 'Tomato.TodaysDrawer',
    kind: enyo.DividerDrawer,
    caption: "Today's Tasks",
    components: [todaysList]
  };
  drawers = {
    name: 'Tomato.Drawers',
    kind: enyo.VFlexBox,
    components: [todaysDrawer]
  };
  todo = {
    name: 'Tomato.ToDo',
    kind: enyo.SlidingView,
    width: '500px',
    components: [
      {
        kind: "PageHeader",
        content: "Tasks"
      }, drawers
    ],
    setupRow: function(inSender, inIndex) {
      if (inIndex < 100) {
        this.$.caption.setContent("I am item: " + inIndex);
        this.$.button.setCaption("Button" + inIndex);
        return true;
      }
    }
  };
  enyo.kind(todo);
}).call(this);
