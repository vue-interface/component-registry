var o = function() {
  return o = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, o.apply(this, arguments);
};
function d(t) {
  return t.toLowerCase();
}
var v = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], _ = /[^A-Z0-9]+/gi;
function w(t, e) {
  e === void 0 && (e = {});
  for (var r = e.splitRegexp, n = r === void 0 ? v : r, i = e.stripRegexp, a = i === void 0 ? _ : i, h = e.transform, m = h === void 0 ? d : h, g = e.delimiter, p = g === void 0 ? " " : g, s = l(l(t, n, "$1\0$2"), a, "\0"), u = 0, f = s.length; s.charAt(u) === "\0"; )
    u++;
  for (; s.charAt(f - 1) === "\0"; )
    f--;
  return s.slice(u, f).split("\0").map(m).join(p);
}
function l(t, e, r) {
  return e instanceof RegExp ? t.replace(e, r) : e.reduce(function(n, i) {
    return n.replace(i, r);
  }, t);
}
function E(t, e) {
  return e === void 0 && (e = {}), w(t, o({
    delimiter: "."
  }, e));
}
function c(t, e) {
  return e === void 0 && (e = {}), E(t, o({
    delimiter: "-"
  }, e));
}
class R {
  constructor(e = {}) {
    this.components = /* @__PURE__ */ new Map(), Object.entries(e).forEach(([r, n]) => {
      this.register(r, n);
    });
  }
  get(e) {
    const r = this.components.get(e = c(e));
    if (r)
      return r;
    throw new Error(`"${e}" has not been registered yet!`);
  }
  register(e, r) {
    return typeof e == "object" ? (Object.entries(e).forEach(([n, i]) => {
      this.register(c(n), i);
    }), this) : (this.components.set(c(e), r), this);
  }
  remove(e) {
    return this.components.delete(c(e)), this;
  }
  reset() {
    return this.components = /* @__PURE__ */ new Map(), this;
  }
}
function A(t = {}) {
  return new R(t);
}
export {
  R as ComponentRegistry,
  A as factory
};
