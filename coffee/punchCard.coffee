buttonGroup =
  kind: 'RadioGroup'
  name: 'buttons'
  components: [
    { caption: 'One'   , value: 'one'   }
    { caption: 'Two'   , value: 'two'   }
    { caption: 'Three' , value: 'three' }
  ]

punchCard =
  name:   'Tomato.PunchCard'
  kind:   enyo.SlidingView
  width:  '500px'
  components: [  
    { kind: "PageHeader", content: "Punch Card" }
    buttonGroup
    { name: "statusText", content: "Select one"}
    { 
      kind:          'PunchCard.Dot'
      ondragstart:   'itemDragStart'
      ondragfinish:  'itemDragFinish'
    }
  ]
  itemDragFinish: (inSender, e) -> @dragging = false
  itemDragStart:  (inSender, e) -> @dragging = true

enyo.kind punchCard



