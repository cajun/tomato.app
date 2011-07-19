dot =
  name: 'PunchCard.Dot'
  kind: enyo.Control
  nodeTag: "canvas"
  domAttributes: 
    width: 300
    height: 300

  rendered: ->
    return @ unless @hasNode() # what is this doing?
    
    can = @node
    pen = can.getContext '2d'

    pen.moveTo 40, 140
    pen.bezierCurveTo 40, 10, 250, 10, 250, 140
    pen.lineWidth   = 5
    pen.strokeStyle = '#FFF9900'
    pen.stroke()
    return @

  mousemoveHandler: (inSender, e) ->
    if @owner.dragging and @hasNode()
      can = @node
      pen = can.getContext '2d'

      pen.fillStyle = 'green'
      pen.fillRect e.offsetX, e.offsetY, 5, 5

    return @

enyo.kind dot
