//(function ($) {
    var patterns = [
{
"pattern": {
  "title": "Men's Shirt Block",
  "defaults": [ "40", "100", "24.4", "44.6", "40", "85", "81" ],
  "measurements": [ "neck", "chest", "armscye_depth", "waist_length", "back_width", "sleeve_length", "shirt_length" ], 
  "main": [
    {
      "id": "outline",
      "type": "path",
      "d": [
        ["m", ["0","0"] ],
        ["L", ["pt.G.x","pt.G.y"] ],
        ["L", ["pt.H.x","pt.H.y"] ],
        ["L", ["pt.V.x","pt.V.y"] ],
        ["C", ["pt.Vout.x","pt.Vout.y"], ["pt.Win.x","pt.Win.y"], ["pt.W.x","pt.W.y"] ],
        ["L", ["pt.Y.x","pt.Y.y"] ],
        ["C", ["pt.Yout.x","pt.Yout.y"], ["pt.Lin.x","pt.Lin.y"], ["pt.L.x","pt.L.y"] ],
        ["C", ["pt.Lout.x","pt.Lout.y"], ["pt.Min.x","pt.Min.y"], ["pt.M.x","pt.M.y"] ],
        ["C", ["pt.Mout.x","pt.Mout.y"], ["pt.Qin.x","pt.Qin.y"], ["pt.Q.x","pt.Q.y"] ],
        ["C", ["pt.Qout.x","pt.Qout.y"], ["pt.Uin.x","pt.Uin.y"], ["pt.U.x","pt.U.y"] ],
        ["L", ["pt.S.x","pt.S.y"] ],
        ["C", ["pt.Sout.x","pt.Sout.y"], ["pt.Ain.x","pt.Ain.y"], ["pt.A.x","pt.A.y"] ],
        ["z"]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"3", "stroke":"#000000", "fill":"none" }
    },
    {
      "id": "sleeve",
        "type": "path",
        "d": [
          ["M", ["pt.l.x","pt.l.y"] ],
          ["L", ["pt.b.x","pt.b.y"] ],
          ["L", ["pt.i.x","pt.i.y"] ],
          ["L", ["pt.j.x","pt.j.y"] ],
          ["L", ["pt.k.x","pt.k.y"] ],
          ["L", ["pt.q.x","pt.q.y"] ],
          ["L", ["pt.s.x","pt.s.y"] ],
          ["L", ["pt.m.x","pt.m.y"] ],
          ["L", ["pt.p.x","pt.p.y"] ],
          ["z"]
        ],
        "drawattr": {},
        "appearanceattr": { "stroke-width":"3", "stroke":"#000000", "fill":"none" }
    }
  ],
  "construction": [
    {
      "id": "armscye line",
      "type": "path",
      "d": [
        ["m", ["pt.B.x","pt.B.y"] ],
        ["L", ["pt.C.x","pt.C.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    },
    {
      "id": "waist line",
      "type": "path",
      "d": [
        ["m", ["pt.E.x","pt.E.y"] ],
        ["L", ["pt.F.x","pt.F.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    },
    {
      "id": "mid line",
      "type": "path",
      "d": [
        ["m", ["pt.M.x","pt.M.y"] ],
        ["L", ["pt.O.x","pt.O.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    },
    {
      "id": "elbow line",
      "type": "path",
      "d": [
        ["M", ["pt.k.x","pt.z.y"] ],
        ["L", ["pt.l.x","pt.z.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    },
    {
      "id": "arm line",
      "type": "path",
      "d": [
        ["m", ["pt.i.x","pt.i.y"] ],
        ["L", ["pt.m.x","pt.m.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    },
    {
      "id": "arm hole for sleeve",
      "type": "path",
      "d": [
        ["M", ["pt.g.x","pt.g.y"] ],
        ["L", ["pt.e.x","pt.e.y"] ],
        ["L", ["pt.h.x","pt.h.y"] ],
        ["L", ["pt.b.x","pt.b.y"] ],
        ["L", ["pt.f.x","pt.f.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    }
  ],
  "points": {
    "A": { "x": "0", "y": "0" },
    "B": { "x": "0", "y": "1.1*meas.armscye_depth" },
    "C": { "x": ".58*meas.chest", "y": "pt.B.y" },
    "D": { "x": "pt.C.x", "y": "0" },
    "E": { "x": "0", "y": "1.02*meas.waist_length" },
    "F": { "x": "pt.C.x", "y": "1.02*meas.waist_length" },
    "G": { "x": "0", "y": "1.01*meas.shirt_length" },
    "H": { "x": "pt.C.x", "y": "pt.G.y" },
    "I": { "x": ".563*meas.back_width", "y": "pt.B.y" },
    "J": { "x": "pt.I.x", "y": "pt.A.y" },
    "K": { "x": ".348*meas.chest", "y": "pt.B.y" },
    "L": { "x": "pt.K.x", "y": "pt.K.y-.143*meas.armscye_depth" },
    "M": { "x": "(pt.K.x+pt.I.x)/2-(.005*meas.chest)", "y": "pt.K.y" },
    "N": { "x": "pt.M.x", "y": "pt.E.y" },
    "O": { "x": "pt.M.x", "y": "pt.G.y" },
    "P": { "x": "pt.A.x", "y": ".54*meas.armscye_depth" },
    "Q": { "x": "pt.I.x", "y": "pt.P.y" },
    "R": { "x": ".188*meas.neck", "y": "0" },
    "S": { "x": "pt.R.x", "y": "-0.05*meas.neck" },
    "T": { "x": "pt.I.x", "y": "pt.Q.y-.414*meas.armscye_depth" },
    "U": { "x": "pt.T.x+.0875*meas.back_width", "y": "pt.T.y" },
    "V": { "x": "pt.D.x", "y": "pt.D.y+.2*meas.neck" },
    "W": { "x": "pt.V.x-.175*meas.neck", "y": "pt.D.y" },
    "X": { "x": "pt.U.x", "y": "pt.U.y+.082*meas.armscye_depth" },
    "Y": { "x": "pt.W.x-Math.sqrt((((pt.U.x-pt.S.x)*(pt.U.x-pt.S.x))+((pt.U.y-pt.S.y)*(pt.U.y-pt.S.y)))-(pt.X.y*pt.X.y))", "y": "pt.X.y" },
    "Ain":  { "x": "(pt.A.x+pt.S.x)/2", "y": "pt.A.y" },
    "Lin":  { "x": "pt.L.x+(dist(pt.L,pt.Y)/3)*Math.cos(angleBetween(pt.M,pt.Y))", "y": "pt.L.y+(dist(pt.L,pt.Y)/3)*Math.sin(angleBetween(pt.M,pt.Y))" },
    "Lout": { "x": "pt.L.x+(dist(pt.L,pt.M)/3)*Math.cos(angleBetween(pt.M,pt.Y)+Math.PI)", "y": "pt.L.y+(dist(pt.L,pt.M)/3)*Math.sin(angleBetween(pt.M,pt.Y)+Math.PI)" },
    "Min":  { "x": "pt.M.x+(pt.L.x-pt.M.x)/3", "y": "pt.M.y"},
    "Mout": { "x": "pt.Q.x", "y": "pt.M.y"},
    "Qin":  { "x": "pt.Q.x", "y": "pt.Q.y" },
    "Qout": { "x": "pt.Q.x", "y": "pt.Q.y" },
    "Sout": { "x": "pt.S.x", "y": "pt.S.y/2" },
    "Uin":  { "x": "pt.Q.x", "y": "pt.U.y+(dist(pt.Q,pt.U)/2)" },
    "Vout": { "x": "pt.V.x-((pt.V.x-pt.W.x)/2)", "y": "pt.V.y" },
    "Win":  { "x": "pt.W.x", "y": "pt.W.y+((pt.V.y-pt.W.y)/2)" },
    "Yout": { "x": "pt.L.x", "y": "pt.Y.y+(dist(pt.L,pt.Y)/3)" },

    "slshift":  { "x": "1.25*pt.C.x-pt.A.x", "y": "0" },
    "a": { "x": "pt.slshift.x + pt.K.x", "y": "pt.K.y" },
    "b": { "x": "pt.slshift.x + pt.L.x", "y": "pt.L.y" },
    "armsclen": { "x": "bezierLength(pt.Y,pt.Yout,pt.Lin,pt.L) + bezierLength(pt.L,pt.Lout,pt.Min,pt.M) + bezierLength(pt.M,pt.Mout,pt.Qin,pt.Q) + bezierLength(pt.Q,pt.Qout,pt.Uin,pt.U)", "y": "0" },
    "c": { "x": "pt.a.x", "y": "pt.a.y - pt.armsclen.x/3" },
    "d": { "x": "pt.a.x", "y": "pt.a.y - pt.armsclen.x/6" },
    "e": { "x": "pt.slshift.x + pt.Q.x", "y": "pt.d.y" },
    "f": { "x": "pt.slshift.x + pt.Y.x", "y": "pt.Y.y" },
    "g": { "x": "pt.slshift.x + pt.U.x", "y": "pt.U.y" },
    "h": { "x": "pt.slshift.x + pt.M.x", "y": "pt.M.y" },
    "i": { "x": "pt.b.x - Math.sqrt( 1.1*dist(pt.b,pt.f)*1.1*dist(pt.b,pt.f) - (pt.b.y-pt.c.y)*(pt.b.y-pt.c.y) )", "y": "pt.c.y" },
    "j": { "x": "pt.i.x - Math.sqrt( 1.1*dist(pt.e,pt.g)*1.1*dist(pt.e,pt.g) - (pt.d.y-pt.c.y)*(pt.d.y-pt.c.y) )", "y": "pt.d.y" },
    "k": { "x": "pt.j.x - Math.sqrt( 1.1*dist(pt.e,pt.h)*1.1*dist(pt.e,pt.h) - (pt.a.y-pt.d.y)*(pt.a.y-pt.d.y) )", "y": "pt.a.y" },
    "l": { "x": "pt.a.x + Math.sqrt( 1.1*dist(pt.b,pt.h)*1.1*dist(pt.b,pt.h) - (pt.h.y-pt.b.y)*(pt.h.y-pt.b.y) )", "y": "pt.a.y" },
    "m": { "x": "pt.i.x", "y": "pt.i.y + 1*meas.sleeve_length" },
    "n": { "x": "pt.l.x", "y": "pt.m.y" },
    "o": { "x": "pt.k.x", "y": "pt.m.y" },
    "p": { "x": "pt.n.x - .1*(pt.n.x-pt.o.x)", "y": "pt.n.y" },
    "q": { "x": "pt.o.x + .1*(pt.n.x-pt.o.x)", "y": "pt.o.y" },
    "r": { "x": "(pt.q.x+pt.m.x)/2", "y": "pt.m.y" },
    "s": { "x": "pt.r.x", "y": "pt.r.y + .02*(pt.n.x-pt.o.x)" },
    "t": { "x": "pt.r.x", "y": "pt.s.y - .2*(pt.n.x-pt.o.x)" },
    "z": { "x": "pt.l.x", "y": "(pt.l.y+pt.n.y)/2" }
  }
}
},

{
"pattern": {
  "title": "Women's Basic Bodice Block",
  "defaults": [ "88", "70", "21", "12", "41", "37", "34", "20.6", "32.4", "7" ],
  "measurements": [ "bust", "waist", "armscye_depth", "shoulder", "nape_to_waist", "neck", "back_width", "waist_to_hip", "chest_width", "bust_dart_width" ], 
  "main": [
    {
      "id": "outline",
      "type": "path",
      "d": [
        ["m", ["pt.A.x","pt.A.y"] ],
        ["L", ["pt.E.x","pt.E.y"] ],
        ["L", ["pt.Ql.x","pt.Ql.y"] ],
        ["L", ["pt.P.x","pt.P.y"] ],
        ["L", ["pt.Qr.x","pt.Qr.y"] ],
        ["L", ["pt.AAl.x","pt.AAl.y"] ],
        ["L", ["pt.Z.x","pt.Z.y"] ],
        ["L", ["pt.AAr.x","pt.AAr.y"] ],
        ["L", ["pt.Vl.x","pt.Vl.y"] ],
        ["L", ["pt.BP.x","pt.BP.y"] ],
        ["L", ["pt.Vr.x","pt.Vr.y"] ],
        ["L", ["pt.F.x","pt.F.y"] ],
        ["L", ["pt.S.x","pt.S.y"] ],
        ["L", ["pt.R.x","pt.R.y"] ],
        ["L", ["pt.U.x","pt.U.y"] ],
        ["L", ["pt.W.x","pt.W.y"] ],
        ["L", ["pt.X.x","pt.X.y"] ],
        ["L", ["pt.Y.x","pt.Y.y"] ],
        ["L", ["pt.Tdiag.x","pt.Tdiag.y"] ],
        ["L", ["pt.Z.x","pt.Z.y"] ],
        ["L", ["pt.Ldiag.x","pt.Ldiag.y"] ],
        ["L", ["pt.N.x","pt.N.y"] ],
        ["L", ["pt.I.x","pt.I.y"] ],
        ["L", ["pt.Jd1.x","pt.Jd1.y"] ],
        ["L", ["pt.K.x","pt.K.y"] ],
        ["L", ["pt.Jd2.x","pt.Jd2.y"] ],
        ["L", ["pt.G.x","pt.G.y"] ],
        ["z"]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"3", "stroke":"#000000", "fill":"none" }
    }
  ],
  "construction": [
    {
      "id": "armscye line",
      "type": "path",
      "d": [
        ["m", ["pt.B.x","pt.B.y"] ],
        ["L", ["pt.C.x","pt.C.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    },
    {
      "id": "waist line",
      "type": "path",
      "d": [
        ["m", ["pt.E.x","pt.E.y"] ],
        ["L", ["pt.F.x","pt.F.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    },
    {
      "id": "mid line",
      "type": "path",
      "d": [
        ["m", ["pt.Z.x","pt.Z.y"] ],
        ["L", ["pt.AA.x","pt.AA.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    }
  ],
  "points": {
    "A": { "x": "0", "y": "meas.neck*.0375" },
    "B": { "x": "0", "y": "pt.A.y + 1.024*meas.armscye_depth" },
    "C": { "x": "pt.B.x + .55*meas.bust", "y": "pt.B.y" },
    "D": { "x": "pt.C.x", "y": "0" },
    "E": { "x": "0", "y": "meas.nape_to_waist" },
    "F": { "x": "pt.C.x", "y": "pt.E.y" },
    "G": { "x": ".195*meas.neck", "y": "0" },
    "H": { "x": "0", "y": "pt.A.y + .167*meas.armscye_depth" },
    "I": { "x": "pt.G.x+ Math.sqrt((1.083*meas.shoulder*1.083*meas.shoulder)-(pt.H.y*pt.H.y))", "y": "pt.H.y" },
    "J": { "x": "(pt.G.x+pt.I.x)/2", "y": "(pt.G.y+pt.I.y)/2" },
    "Jd1": { "x": "pt.J.x + (.0417*meas.shoulder) * Math.cos(Math.asin((pt.I.y-pt.G.y)/(dist(pt.G,pt.I))))", "y": "pt.J.y + (.0417*meas.shoulder) * Math.sin(Math.asin((pt.I.y-pt.G.y)/(dist(pt.G,pt.I))))" },
    "Jd2": { "x": "pt.J.x - (.0417*meas.shoulder) * Math.cos(Math.asin((pt.I.y-pt.G.y)/(dist(pt.G,pt.I))))", "y": "pt.J.y - (.0417*meas.shoulder) * Math.cos(Math.asin((pt.I.y-pt.G.y)/(dist(pt.G,pt.I))))" },
    "K": { "x": "pt.J.x-.083*meas.shoulder", "y": "pt.J.y + .417*meas.shoulder" },
    "L": { "x": ".515*meas.back_width", "y": "pt.B.y" },
    "M": { "x": "pt.L.x", "y": "pt.H.y" },
    "N": { "x": "pt.M.x", "y": "(pt.M.y+pt.L.y)/2" },
    "P": { "x": "(pt.B.x+pt.L.x)/2", "y": "pt.B.y" },
    "Q": { "x": "pt.P.x", "y": "pt.E.y" },
    "R": { "x": "pt.D.x - (.182*meas.neck*Math.cos(Math.atan(-pt.D.y/pt.D.x)))", "y": "pt.D.y + (.182*meas.neck*Math.sin(Math.atan(-pt.D.y/pt.D.x)))" },
    "S": { "x": "pt.D.x", "y": "pt.D.y + .195*meas.neck" },
    "T": { "x": "pt.C.x - .5*meas.chest_width - .5*meas.bust_dart_width", "y": "pt.C.y" },
    "U": { "x": "(pt.T.x+pt.C.x)/2", "y": "pt.T.y" },
    "V": { "x": "pt.U.x", "y": "pt.F.y" },
    "BP": { "x": "pt.U.x", "y": "pt.A.y+1.143*meas.armscye_depth" },
    "W": { "x": "pt.R.x - (meas.bust_dart_width*Math.cos(Math.atan(-pt.D.y/pt.D.x)))", "y": "pt.R.y + (meas.bust_dart_width*Math.sin(Math.atan(-pt.D.y/pt.D.x)))" },
    "XI": { "x": "pt.I.x", "y": "pt.I.y+.125*meas.shoulder" },
    "X": { "x": "pt.W.x - Math.sqrt((meas.shoulder*meas.shoulder)-((pt.XI.y-pt.W.y)*(pt.XI.y-pt.W.y)))", "y": "pt.XI.y" },
    "Y": { "x": "pt.T.x", "y": "pt.T.y - meas.armscye_depth/3" },
    "Z": { "x": "(pt.L.x+pt.T.x)/2", "y": "pt.T.y" },
    "AA": { "x": "pt.Z.x", "y": "pt.E.y" },
    "Tdiag": { "x": "pt.T.x - .023*meas.bust*Math.cos(Math.PI/4)", "y": "pt.T.y - .023*meas.bust*Math.sin(Math.PI/4)" },
    "Ldiag": { "x": "pt.L.x + .028*meas.bust*Math.cos(Math.PI/4)", "y": "pt.L.y - .028*meas.bust*Math.sin(Math.PI/4)" },
    "AB": { "x": "pt.F.x", "y": "pt.F.y + .011*meas.bust" },
    "Dart": { "x": "(1.034*meas.bust-meas.waist)/6", "y": "0" },
    "Ql": { "x": "pt.Q.x-.95*pt.Dart.x/2", "y": "pt.F.y" },
    "Qr": { "x": "pt.Q.x+.95*pt.Dart.x/2", "y": "pt.F.y" },
    "AAl": { "x": "pt.AA.x-pt.Dart.x/3", "y": "pt.F.y" },
    "AAr": { "x": "pt.AA.x+2*pt.Dart.x/3", "y": "pt.F.y" },
    "Vl": { "x": "pt.V.x-1.05*pt.Dart.x/2", "y": "pt.F.y" },
    "Vr": { "x": "pt.V.x+1.05*pt.Dart.x/2", "y": "pt.F.y" }
  }
}
},

{
"pattern": {
  "title": "Women's Basic Skirt",
  "defaults": [ "70", "94", "70", "20.6" ],
  "measurements": [ "waist", "hips", "skirt_length", "waist_to_hip" ], 
  "main": [
    {
      "id": "outline",
      "type": "path",
      "d": [
        ["m", ["pt.A.x","pt.A.y"] ],
        ["L", ["pt.K.x","pt.K.y"] ],
        ["L", ["pt.L.x","pt.L.y"] ],
        ["L", ["pt.K.x","pt.K.y"] ],
        ["L", ["pt.M.x","pt.M.y"] ],
        ["L", ["pt.N.x","pt.N.y"] ],
        ["L", ["pt.M.x","pt.M.y"] ],
        ["L", ["pt.J.x","pt.J.y"] ],
        ["L", ["pt.G.x","pt.G.y"] ],
        ["L", ["pt.Q.x","pt.Q.y"] ],
        ["L", ["pt.R.x","pt.R.y"] ],
        ["L", ["pt.S.x","pt.S.y"] ],
        ["L", ["pt.R.x","pt.R.y"] ],
        ["L", ["pt.B.x","pt.B.y"] ],
        ["L", ["pt.D.x","pt.D.y"] ],
        ["L", ["pt.C.x","pt.C.y"] ],
        ["z"]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"3", "stroke":"#000000", "fill":"none" }
    }
  ],
  "construction": [
    {
      "id": "hip line",
      "type": "path",
      "d": [
        ["m", ["pt.E.x","pt.E.y"] ],
        ["L", ["pt.F.x","pt.F.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    },
    {
      "id": "mid line",
      "type": "path",
      "d": [
        ["m", ["pt.G.x","pt.G.y"] ],
        ["L", ["pt.H.x","pt.H.y"] ]
      ],
      "drawattr": {},
      "appearanceattr": { "stroke-width":"1", "stroke":"#555555", "fill":"none" }
    }
  ],
  "points": {
    "A": { "x": "0", "y": "0" },
    "B": { "x": ".516*meas.hips", "y": "0" },
    "C": { "x": "0", "y": "meas.skirt_length" },
    "D": { "x": "pt.B.x", "y": "pt.C.y" },
    "E": { "x": "0", "y": "meas.waist_to_hip" },
    "F": { "x": "pt.B.x", "y": "pt.E.y" },
    "G": { "x": ".266*meas.hips", "y": "pt.F.y" },
    "H": { "x": "pt.G.x", "y": "pt.C.y" },
    "I": { "x": ".311*meas.waist", "y": "0" },
    "J": { "x": "pt.I.x", "y": "-.018*meas.waist" },
    "K": { "x": "(pt.A.x+pt.J.x)/3", "y": "(pt.A.y+pt.J.y)/3" },
    "L": { "x": "pt.K.x + .2*meas.waist*Math.sin(Math.asin((pt.A.y-pt.K.y)/(dist(pt.A,pt.J)/3)))", "y": "pt.K.y + .2*meas.waist*Math.cos(Math.asin((pt.A.y-pt.K.y)/(dist(pt.A,pt.J)/3)))" },
    "M": { "x": "2*(pt.A.x+pt.J.x)/3", "y": "2*(pt.A.y+pt.J.y)/3" },
    "N": { "x": "pt.M.x + .179*meas.waist*Math.sin(Math.asin((pt.A.y-pt.M.y)/(2*dist(pt.A,pt.J)/3)))", "y": "pt.M.y + .179*meas.waist*Math.cos(Math.asin((pt.A.y-pt.M.y)/(2*dist(pt.A,pt.J)/3)))" },
    "P": { "x": "pt.B.x - .282*meas.waist", "y": "0" },
    "Q": { "x": "pt.P.x", "y": "-.018*meas.waist" },
    "R": { "x": "pt.Q.x + (pt.B.x-pt.Q.x)/3", "y": "2*(pt.Q.y+pt.B.y)/3" },
    "S": { "x": "pt.R.x + .143*meas.waist*Math.sin(Math.asin((pt.Q.y-pt.R.y)/(dist(pt.Q,pt.B)/3)))", "y": "pt.R.y + .143*meas.waist*Math.cos(Math.asin((pt.Q.y-pt.R.y)/(dist(pt.Q,pt.B)/3)))" }
  }
}
}

    ];
	
	var measurements = [
{
  "clientdata": {
    "customername": "Man1",
    "units": "cm",
    "measurements": {
      "hips": "130",
      "bust": "100",
      "waist": "120",
      "shoulder": "100",
      "nape_to_waist": "100",
      "waist_to_hip": "25",
      "chest_width": "100",
      "neck": "40",
      "chest": "100",
      "armscye_depth": "24.4",
      "waist_length": "44.6",
      "back_width": "40",
      "sleeve_length": "85",
      "shirt_length": "81",
      "bust_dart_width": "100",
      "skirt_length": "65"
    }
  }
},

{
  "clientdata": {
    "customername": "Woman1",
    "units": "cm",
    "measurements": {
      "hips": "100",
      "bust": "88",
      "waist": "70",
      "shoulder": "12",
      "nape_to_waist": "41",
      "waist_to_hip": "20.6",
      "chest_width": "32.4",
      "neck": "37",
      "chest": "100",
      "armscye_depth": "21",
      "armscye_girth": "41.3",
      "waist_length": "42",
      "back_width": "34",
      "side": "21.6",
      "sleeve_length": "87",
      "shirt_length": "75",
      "bust_dart_width": "7",
      "skirt_length": "72",
      "upper_front_height": "25.7",
      "elbow_height": "34.9",
      "elbow_girth": "25.4",
      "hand_girth": "20"
    }
  }
}
	
	
	];

// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)

var db = window.indexedDB.open('FriendDB');

if (db.version != '1') {
  // User's first visit, initialize database.
  db.createObjectStore('Friends', // name of new object store
                        'id',      // key path
                        true);     // auto increment?
  db.setVersion('1');
} else {
  // DB already initialized.
}

var store = db.openObjectStore('Friends');

var user = store.put({name: 'Eric',
                       gender: 'male',
                       likes: 'html5'});

console.log(user.id);
		
	

    var Pattern = Backbone.Model.extend({
        urlRoot: '/pattern',
		defaults: {                                         // the "default" property of the Model class
            name: ''
        }
    });
	
	var Measurement = Backbone.Model.extend({
		urlRoot: 'pattern',
		defaults: {
			"clientdata": {
				"customername": "Man1",
				"units": "cm",
				"measurements": {
				  "hips": "130",
				  "bust": "100",
				  "waist": "120"
				}
			}
		},
		database: databasev1,
		storeName:"measurements"
	});
		
    var Book = Backbone.Collection.extend({
		model: Pattern
    });
	
	var Bodies = Backbone.Collection.extend({
		model: Measurement
	});
    
	var MeasurementView = Backbone.View.extend({
		el: 'form#measurementInput',
		initialize: function(){
			console.log('measurementview initialized');
			console.log(this.$el);
			this.model = new Measurement();
		},
		events: {
			'click #submit': 'saveToLocal'
		},
		saveToLocal: function(e){
			e.preventDefault();
				console.log('save to local');
			this.model.get('clientdata').customername = this.$el.find('#customername').val();
				console.log(this.model);
			this.model.get('clientdata').units = $("input[name=units]:checked").attr('id');
			localStorage.setItem('measurement',JSON.stringify(this.model));
			this.model.save();
		}
		
	});
	
    var PatternView = Backbone.View.extend({
        tagName:    "button",
        //className:  "contact-container",
        //template:   $('#contactTemplate').html(),
        
        render: function () {
            //var tmpl = _.template(this.template);           // store _.template() function for future reference
            
            //this.$el.html(tmpl(this.model.toJSON()));       // interpolate data in template, then insert in this view's element's html
            //this.$el.html(this.model.toJSON());       
            this.$el.html(this.model.get('pattern').title);       
            return this;                                    // convenient for chaining
        },
		
		events: {
			"click": "saveToLocal"
		},
		
		saveToLocal: function(){
			console.log('save to localstorage!');
			window.localStorage.setItem(this.model.get('pattern').title+'-'+(new Date()).toISOString(),JSON.stringify(this.model));
		}/*,
        
        events: {
            "click button.delete": "deleteContact"
        }*/
    });
    
    var BookView = Backbone.View.extend({
        el:     $('#patterns'),
        
        initialize: function () {
			this.$el.empty();
            this.collection = new Book(patterns);
			this.render();
            //this.$el.find('#filter').append(this.createSelect());
            //this.on("change:filterType", this.filterByType, this);
            //this.collection.on("reset", this.render, this);
            //this.collection.on("add", this.renderContact, this);
        },
        
        render: function () {
            var that = this;
            //this.$el.find('article').remove();
            _.each(this.collection.models, function (item){
                that.renderPattern(item); 
            }, this);
        },
        
        renderPattern: function (item) {
            var patternView = new PatternView({
                model:  item
            });
            this.$el.append(patternView.render().el);
        }
    });
    
    var ContactsRouter = Backbone.Router.extend({
        routes: {
            "filter/:type": "urlFilter"
        },
        
        urlFilter: function (type) {
            directory.filterType = type;
            directory.trigger("change:filterType");
        }
    });
    
    var book = new BookView();
	var measures = new MeasurementView();
    
    var contactsRouter = new ContactsRouter();
    
    Backbone.history.start();
		
//} (jQuery));