(function() {
  var dot;
  dot = {
    name: 'PunchCard.Dot',
    kind: enyo.Control,
    nodeTag: "canvas",
    domAttributes: {
      width: 300,
      height: 300
    },
    rendered: function() {
      var can, pen;
      if (!this.hasNode()) {
        return this;
      }
      can = this.node;
      pen = can.getContext('2d');
      pen.moveTo(40, 140);
      pen.bezierCurveTo(40, 10, 250, 10, 250, 140);
      pen.lineWidth = 5;
      pen.strokeStyle = '#FFF9900';
      pen.stroke();
      return this;
    },
    mousemoveHandler: function(inSender, e) {
      var can, pen;
      if (this.owner.dragging && this.hasNode()) {
        can = this.node;
        pen = can.getContext('2d');
        pen.fillStyle = 'green';
        pen.fillRect(e.offsetX, e.offsetY, 5, 5);
      }
      return this;
    }
  };
  enyo.kind(dot);
}).call(this);
