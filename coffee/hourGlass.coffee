hourGlass =
  name:      'Tomato.HourGlass'
  kind:      enyo.SlidingView
  flex:    1 
  onResize:  'slidingResize'
  components: [  
    { kind: "PageHeader", content: "Timer" }
    {name: "hourGlassText", content: "I am Hour glass"}
  ]

enyo.kind hourGlass
