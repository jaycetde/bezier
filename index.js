'use strict';

var B1, B2, B3, B4;

B1 = function (t) {
  var a = 1 - t;
  return a * a * a;
};

B2 = function (t) {
  var a = 1 - t;
  return 3 * a * a * t;
};

B3 = function (t) {
  return 3 * (1 - t) * t * t;
};

B4 = function (t) {
  return t * t * t;
};

function bezier(c1, c2, c3, c4, t) {
 
  var pos = []
    , a = 1 - t
    , b1 = B1(a)
    , b2 = B2(a, t)
    , b3 = B3(a, t)
    , b4 = B4(t)
  ;
  
  pos[0] = c1[0] * b1 + c2[0] * b2 + c3[0] * b3 + c4[0] * b4;
  pos[1] = c1[1] * b1 + c2[1] * b2 + c3[1] * b3 + c4[1] * b4;

  return pos;

}

exports.x = function (x1, x2, x3, x4, t) {
  return x1 * B1(t) + x2 * B2(t) + x3 * B3(t) + x4 * B4(t);
};

exports.y = function (y1, y2, y3, y4, t) {
  return y1 * B1(t) + y2 * B2(t) + y3 * B3(t) + y4 * B4(t);
};

exports.point = function (p1, p2, p3, p4, t) {
  return [
    exports.x(p1[0], p2[0], p3[0], p4[0], t),
    exports.y(p1[1], p2[1], p3[1], p4[1], t)
  ];
};
