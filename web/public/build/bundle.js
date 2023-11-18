var app = (function () {
  "use strict";
  function t() {}
  function e(t) {
    return t();
  }
  function n() {
    return Object.create(null);
  }
  function s(t) {
    t.forEach(e);
  }
  function o(t) {
    return "function" == typeof t;
  }
  function c(t, e) {
    return t != t
      ? e == e
      : t !== e || (t && "object" == typeof t) || "function" == typeof t;
  }
  let r, a;
  function i(e, n, s) {
    e.$$.on_destroy.push(
      (function (e, ...n) {
        if (null == e) return t;
        const s = e.subscribe(...n);
        return s.unsubscribe ? () => s.unsubscribe() : s;
      })(n, s)
    );
  }
  function l(t, e, n, s) {
    return t[1] && s
      ? (function (t, e) {
          for (const n in e) t[n] = e[n];
          return t;
        })(n.ctx.slice(), t[1](s(e)))
      : n.ctx;
  }
  function u(t, e) {
    t.appendChild(e);
  }
  function d(t, e, n) {
    t.insertBefore(e, n || null);
  }
  function f(t) {
    t.parentNode && t.parentNode.removeChild(t);
  }
  function p(t) {
    return document.createElement(t);
  }
  function m(t) {
    return document.createTextNode(t);
  }
  function h() {
    return m(" ");
  }
  function v() {
    return m("");
  }
  function g(t, e, n, s) {
    return t.addEventListener(e, n, s), () => t.removeEventListener(e, n, s);
  }
  function $(t, e, n) {
    null == n
      ? t.removeAttribute(e)
      : t.getAttribute(e) !== n && t.setAttribute(e, n);
  }
  function y(t) {
    return "" === t ? null : +t;
  }
  function w(t, e) {
    (e = "" + e), t.wholeText !== e && (t.data = e);
  }
  function b(t, e) {
    t.value = null == e ? "" : e;
  }
  function _(t, e, n, s) {
    null === n
      ? t.style.removeProperty(e)
      : t.style.setProperty(e, n, s ? "important" : "");
  }
  function x(t, e, n) {
    t.classList[n ? "add" : "remove"](e);
  }
  function k(t) {
    a = t;
  }
  function j() {
    if (!a) throw new Error("Function called outside component initialization");
    return a;
  }
  function L(t) {
    j().$$.on_mount.push(t);
  }
  const C = [],
    z = [],
    T = [],
    E = [],
    N = Promise.resolve();
  let M = !1;
  function S(t) {
    T.push(t);
  }
  const F = new Set();
  let O = 0;
  function U() {
    const t = a;
    do {
      for (; O < C.length; ) {
        const t = C[O];
        O++, k(t), I(t.$$);
      }
      for (k(null), C.length = 0, O = 0; z.length; ) z.pop()();
      for (let t = 0; t < T.length; t += 1) {
        const e = T[t];
        F.has(e) || (F.add(e), e());
      }
      T.length = 0;
    } while (C.length);
    for (; E.length; ) E.pop()();
    (M = !1), F.clear(), k(t);
  }
  function I(t) {
    if (null !== t.fragment) {
      t.update(), s(t.before_update);
      const e = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, e),
        t.after_update.forEach(S);
    }
  }
  const A = new Set();
  let P;
  function V() {
    P = { r: 0, c: [], p: P };
  }
  function B() {
    P.r || s(P.c), (P = P.p);
  }
  function Y(t, e) {
    t && t.i && (A.delete(t), t.i(e));
  }
  function D(t, e, n, s) {
    if (t && t.o) {
      if (A.has(t)) return;
      A.add(t),
        P.c.push(() => {
          A.delete(t), s && (n && t.d(1), s());
        }),
        t.o(e);
    } else s && s();
  }
  function Z(t, e) {
    D(t, 1, 1, () => {
      e.delete(t.key);
    });
  }
  function J(t, e, n, s, o, c, r, a, i, l, u, d) {
    let f = t.length,
      p = c.length,
      m = f;
    const h = {};
    for (; m--; ) h[t[m].key] = m;
    const v = [],
      g = new Map(),
      $ = new Map();
    for (m = p; m--; ) {
      const t = d(o, c, m),
        a = n(t);
      let i = r.get(a);
      i ? s && i.p(t, e) : ((i = l(a, t)), i.c()),
        g.set(a, (v[m] = i)),
        a in h && $.set(a, Math.abs(m - h[a]));
    }
    const y = new Set(),
      w = new Set();
    function b(t) {
      Y(t, 1), t.m(a, u), r.set(t.key, t), (u = t.first), p--;
    }
    for (; f && p; ) {
      const e = v[p - 1],
        n = t[f - 1],
        s = e.key,
        o = n.key;
      e === n
        ? ((u = e.first), f--, p--)
        : g.has(o)
        ? !r.has(s) || y.has(s)
          ? b(e)
          : w.has(o)
          ? f--
          : $.get(s) > $.get(o)
          ? (w.add(s), b(e))
          : (y.add(o), f--)
        : (i(n, r), f--);
    }
    for (; f--; ) {
      const e = t[f];
      g.has(e.key) || i(e, r);
    }
    for (; p; ) b(v[p - 1]);
    return v;
  }
  function R(t) {
    t && t.c();
  }
  function W(t, n, c, r) {
    const { fragment: a, after_update: i } = t.$$;
    a && a.m(n, c),
      r ||
        S(() => {
          const n = t.$$.on_mount.map(e).filter(o);
          t.$$.on_destroy ? t.$$.on_destroy.push(...n) : s(n),
            (t.$$.on_mount = []);
        }),
      i.forEach(S);
  }
  function X(t, e) {
    const n = t.$$;
    null !== n.fragment &&
      (s(n.on_destroy),
      n.fragment && n.fragment.d(e),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function q(t, e) {
    -1 === t.$$.dirty[0] &&
      (C.push(t), M || ((M = !0), N.then(U)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
  }
  function H(e, o, c, r, i, l, u, d = [-1]) {
    const p = a;
    k(e);
    const m = (e.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: t,
      not_equal: i,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(o.context || (p ? p.$$.context : [])),
      callbacks: n(),
      dirty: d,
      skip_bound: !1,
      root: o.target || p.$$.root,
    });
    u && u(m.root);
    let h = !1;
    if (
      ((m.ctx = c
        ? c(e, o.props || {}, (t, n, ...s) => {
            const o = s.length ? s[0] : n;
            return (
              m.ctx &&
                i(m.ctx[t], (m.ctx[t] = o)) &&
                (!m.skip_bound && m.bound[t] && m.bound[t](o), h && q(e, t)),
              n
            );
          })
        : []),
      m.update(),
      (h = !0),
      s(m.before_update),
      (m.fragment = !!r && r(m.ctx)),
      o.target)
    ) {
      if (o.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(o.target);
        m.fragment && m.fragment.l(t), t.forEach(f);
      } else m.fragment && m.fragment.c();
      o.intro && Y(e.$$.fragment),
        W(e, o.target, o.anchor, o.customElement),
        U();
    }
    k(p);
  }
  class G {
    $destroy() {
      X(this, 1), (this.$destroy = t);
    }
    $on(e, n) {
      if (!o(n)) return t;
      const s = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
      return (
        s.push(n),
        () => {
          const t = s.indexOf(n);
          -1 !== t && s.splice(t, 1);
        }
      );
    }
    $set(t) {
      var e;
      this.$$set &&
        ((e = t), 0 !== Object.keys(e).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const K = atob("UmVuZXdlZC1CYW5raW5n");
  async function Q(t, e = {}) {
    const n = {
        method: "post",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(e),
      },
      s = await fetch(`https://${K}/${t}`, n);
    return await s.json();
  }
  const tt = [];
  function et(e, n = t) {
    let s;
    const o = new Set();
    function r(t) {
      if (c(e, t) && ((e = t), s)) {
        const t = !tt.length;
        for (const t of o) t[1](), tt.push(t, e);
        if (t) {
          for (let t = 0; t < tt.length; t += 2) tt[t][0](tt[t + 1]);
          tt.length = 0;
        }
      }
    }
    return {
      set: r,
      update: function (t) {
        r(t(e));
      },
      subscribe: function (c, a = t) {
        const i = [c, a];
        return (
          o.add(i),
          1 === o.size && (s = n(r) || t),
          c(e),
          () => {
            o.delete(i), 0 === o.size && (s(), (s = null));
          }
        );
      },
    };
  }
  const nt = et(!1),
    st = et(!1),
    ot = et("");
  let ct = et(null);
  const rt = et(!1),
    at = et("USD");
  let it = et({ account: {}, actionType: "" });
  const lt = et([]),
    ut = et();
  function dt(t, e) {
    const n = (n) => {
      n.data.action === t && e(n.data);
    };
    var s;
    L(() => window.addEventListener("message", n)),
      (s = () => window.removeEventListener("message", n)),
      j().$$.on_destroy.push(s);
  }
  function ft(t) {
    let e;
    const n = t[2].default,
      s = (function (t, e, n, s) {
        if (t) {
          const o = l(t, e, n, s);
          return t[0](o);
        }
      })(n, t, t[1], null);
    return {
      c() {
        s && s.c();
      },
      m(t, n) {
        s && s.m(t, n), (e = !0);
      },
      p(t, o) {
        s &&
          s.p &&
          (!e || 2 & o) &&
          (function (t, e, n, s, o, c) {
            if (o) {
              const r = l(e, n, s, c);
              t.p(r, o);
            }
          })(
            s,
            n,
            t,
            t[1],
            e
              ? (function (t, e, n, s) {
                  if (t[2] && s) {
                    const o = t[2](s(n));
                    if (void 0 === e.dirty) return o;
                    if ("object" == typeof o) {
                      const t = [],
                        n = Math.max(e.dirty.length, o.length);
                      for (let s = 0; s < n; s += 1) t[s] = e.dirty[s] | o[s];
                      return t;
                    }
                    return e.dirty | o;
                  }
                  return e.dirty;
                })(n, t[1], o, null)
              : (function (t) {
                  if (t.ctx.length > 32) {
                    const e = [],
                      n = t.ctx.length / 32;
                    for (let t = 0; t < n; t++) e[t] = -1;
                    return e;
                  }
                  return -1;
                })(t[1]),
            null
          );
      },
      i(t) {
        e || (Y(s, t), (e = !0));
      },
      o(t) {
        D(s, t), (e = !1);
      },
      d(t) {
        s && s.d(t);
      },
    };
  }
  function pt(t) {
    let e,
      n,
      s = t[0] && ft(t);
    return {
      c() {
        s && s.c(), (e = v());
      },
      m(t, o) {
        s && s.m(t, o), d(t, e, o), (n = !0);
      },
      p(t, [n]) {
        t[0]
          ? s
            ? (s.p(t, n), 1 & n && Y(s, 1))
            : ((s = ft(t)), s.c(), Y(s, 1), s.m(e.parentNode, e))
          : s &&
            (V(),
            D(s, 1, 1, () => {
              s = null;
            }),
            B());
      },
      i(t) {
        n || (Y(s), (n = !0));
      },
      o(t) {
        D(s), (n = !1);
      },
      d(t) {
        s && s.d(t), t && f(e);
      },
    };
  }
  function mt(t, e, n) {
    let s,
      { $$slots: o = {}, $$scope: c } = e;
    return (
      nt.subscribe((t) => {
        n(0, (s = t));
      }),
      dt("setVisible", (t) => {
        lt.set(t.accounts),
          ct.update(() => t.accounts[0].id),
          nt.set(t.status),
          st.set(t.loading),
          rt.set(t.atm);
      }),
      dt("setLoading", (t) => {
        st.set(t.status);
      }),
      dt("notify", (t) => {
        ot.set(t.status),
          setTimeout(() => {
            ot.set("");
          }, 3500);
      }),
      dt("updateLocale", (t) => {
        ut.set(t.translations), at.set(t.currency);
      }),
      L(() => {
        const t = (t) => {
          s &&
            ["Escape"].includes(t.code) &&
            (Q("closeInterface"),
            nt.set(!1),
            it.update((t) =>
              Object.assign(Object.assign({}, t), { actionType: "" })
            ));
        };
        return (
          window.addEventListener("keydown", t),
          () => window.removeEventListener("keydown", t)
        );
      }),
      (t.$$set = (t) => {
        "$$scope" in t && n(1, (c = t.$$scope));
      }),
      [s, c, o]
    );
  }
  class ht extends G {
    constructor(t) {
      super(), H(this, t, mt, pt, c, {});
    }
  }
  let vt;
  function gt(t) {
    return t.toLocaleString("en-US", { style: "currency", currency: vt });
  }
  at.subscribe((t) => {
    vt = t;
  });
  const $t = (t, e = 1e3) => {
    if (!window.invokeNative)
      for (const n of t)
        setTimeout(() => {
          window.dispatchEvent(
            new MessageEvent("message", {
              data: { action: n.action, data: n.data },
            })
          );
        }, e);
  };
  function yt(t) {
    let e,
      n = t[2].frozen + "";
    return {
      c() {
        e = m(n);
      },
      m(t, n) {
        d(t, e, n);
      },
      p(t, s) {
        4 & s && n !== (n = t[2].frozen + "") && w(e, n);
      },
      d(t) {
        t && f(e);
      },
    };
  }
  function wt(t) {
    let e,
      n,
      o,
      c,
      r,
      a,
      i,
      l,
      v = t[2].withdraw_but + "",
      y = t[2].transfer_but + "",
      b = !t[1] && bt(t);
    return {
      c() {
        b && b.c(),
          (e = h()),
          (n = p("button")),
          (o = m(v)),
          (c = h()),
          (r = p("button")),
          (a = m(y)),
          $(n, "class", "btn btn-orange svelte-cfi317"),
          $(r, "class", "btn btn-grey svelte-cfi317");
      },
      m(s, f) {
        b && b.m(s, f),
          d(s, e, f),
          d(s, n, f),
          u(n, o),
          d(s, c, f),
          d(s, r, f),
          u(r, a),
          i || ((l = [g(n, "click", t[6]), g(r, "click", t[7])]), (i = !0));
      },
      p(t, n) {
        t[1]
          ? b && (b.d(1), (b = null))
          : b
          ? b.p(t, n)
          : ((b = bt(t)), b.c(), b.m(e.parentNode, e)),
          4 & n && v !== (v = t[2].withdraw_but + "") && w(o, v),
          4 & n && y !== (y = t[2].transfer_but + "") && w(a, y);
      },
      d(t) {
        b && b.d(t), t && f(e), t && f(n), t && f(c), t && f(r), (i = !1), s(l);
      },
    };
  }
  function bt(t) {
    let e,
      n,
      s,
      o,
      c = t[2].deposit_but + "";
    return {
      c() {
        (e = p("button")),
          (n = m(c)),
          $(e, "class", "btn btn-green svelte-cfi317");
      },
      m(c, r) {
        d(c, e, r), u(e, n), s || ((o = g(e, "click", t[5])), (s = !0));
      },
      p(t, e) {
        4 & e && c !== (c = t[2].deposit_but + "") && w(n, c);
      },
      d(t) {
        t && f(e), (s = !1), o();
      },
    };
  }
  function _t(e) {
    let n,
      s,
      o,
      c,
      r,
      a,
      i,
      l,
      v,
      y,
      b,
      _,
      x,
      k,
      j,
      L,
      C,
      z,
      T,
      E,
      N,
      M,
      S,
      F,
      O,
      U,
      I,
      A = e[0].type + "",
      P = e[2].account + "",
      V = e[0].id + "",
      B = e[0].type + "",
      Y = e[2].account + "",
      D = e[0].name + "",
      Z = gt(e[0].amount) + "",
      J = e[2].balance + "";
    function R(t, e) {
      return t[0].isFrozen ? yt : wt;
    }
    let W = R(e),
      X = W(e);
    return {
      c() {
        (n = p("section")),
          (s = p("h4")),
          (o = m(A)),
          (c = m(P)),
          (r = m("/ ")),
          (a = m(V)),
          (i = h()),
          (l = p("h5")),
          (v = m(B)),
          (y = m(Y)),
          (b = p("br")),
          (_ = h()),
          (x = p("span")),
          (k = m(D)),
          (j = h()),
          (L = p("div")),
          (C = p("strong")),
          (z = m(Z)),
          (T = h()),
          (E = p("br")),
          (N = h()),
          (M = p("span")),
          (S = m(J)),
          (F = h()),
          (O = p("div")),
          X.c(),
          $(s, "class", "svelte-cfi317"),
          $(x, "class", "svelte-cfi317"),
          $(l, "class", "svelte-cfi317"),
          $(C, "class", "svelte-cfi317"),
          $(L, "class", "price svelte-cfi317"),
          $(O, "class", "btns-group svelte-cfi317"),
          $(n, "class", "account svelte-cfi317");
      },
      m(t, f) {
        d(t, n, f),
          u(n, s),
          u(s, o),
          u(s, c),
          u(s, r),
          u(s, a),
          u(n, i),
          u(n, l),
          u(l, v),
          u(l, y),
          u(l, b),
          u(l, _),
          u(l, x),
          u(x, k),
          u(n, j),
          u(n, L),
          u(L, C),
          u(C, z),
          u(L, T),
          u(L, E),
          u(L, N),
          u(L, M),
          u(M, S),
          u(n, F),
          u(n, O),
          X.m(O, null),
          U || ((I = g(n, "click", e[8])), (U = !0));
      },
      p(t, [e]) {
        1 & e && A !== (A = t[0].type + "") && w(o, A),
          4 & e && P !== (P = t[2].account + "") && w(c, P),
          1 & e && V !== (V = t[0].id + "") && w(a, V),
          1 & e && B !== (B = t[0].type + "") && w(v, B),
          4 & e && Y !== (Y = t[2].account + "") && w(y, Y),
          1 & e && D !== (D = t[0].name + "") && w(k, D),
          1 & e && Z !== (Z = gt(t[0].amount) + "") && w(z, Z),
          4 & e && J !== (J = t[2].balance + "") && w(S, J),
          W === (W = R(t)) && X
            ? X.p(t, e)
            : (X.d(1), (X = W(t)), X && (X.c(), X.m(O, null)));
      },
      i: t,
      o: t,
      d(t) {
        t && f(n), X.d(), (U = !1), I();
      },
    };
  }
  function xt(t, e, n) {
    let s, o;
    i(t, lt, (t) => n(9, (s = t))), i(t, ut, (t) => n(2, (o = t)));
    let c,
      { account: r } = e;
    function a(t) {
      ct.update(() => t);
    }
    function l(t, e) {
      let n = s.find((e) => t === e.id);
      it.update(() => ({ actionType: e, account: n }));
    }
    rt.subscribe((t) => {
      n(1, (c = t));
    });
    return (
      (t.$$set = (t) => {
        "account" in t && n(0, (r = t.account));
      }),
      [
        r,
        c,
        o,
        a,
        l,
        () => l(r.id, "deposit"),
        () => l(r.id, "withdraw"),
        () => l(r.id, "transfer"),
        () => a(r.id),
      ]
    );
  }
  class kt extends G {
    constructor(t) {
      super(), H(this, t, xt, _t, c, { account: 0 });
    }
  }
  function jt(t, e, n) {
    const s = t.slice();
    return (s[6] = e[n]), s;
  }
  function Lt(e) {
    let n,
      s,
      o = e[1].account_not_found + "";
    return {
      c() {
        (n = p("h3")),
          (s = m(o)),
          _(n, "text-align", "left"),
          _(n, "color", "#F3F4F5"),
          _(n, "margin-top", "1rem");
      },
      m(t, e) {
        d(t, n, e), u(n, s);
      },
      p(t, e) {
        2 & e && o !== (o = t[1].account_not_found + "") && w(s, o);
      },
      i: t,
      o: t,
      d(t) {
        t && f(n);
      },
    };
  }
  function Ct(t) {
    let e,
      n,
      s = [],
      o = new Map(),
      c = t[2].filter(t[5]);
    const r = (t) => t[6].id;
    for (let e = 0; e < c.length; e += 1) {
      let n = jt(t, c, e),
        a = r(n);
      o.set(a, (s[e] = zt(a, n)));
    }
    return {
      c() {
        for (let t = 0; t < s.length; t += 1) s[t].c();
        e = v();
      },
      m(t, o) {
        for (let e = 0; e < s.length; e += 1) s[e].m(t, o);
        d(t, e, o), (n = !0);
      },
      p(t, n) {
        5 & n &&
          ((c = t[2].filter(t[5])),
          V(),
          (s = J(s, n, r, 1, t, c, o, e.parentNode, Z, zt, e, jt)),
          B());
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < c.length; t += 1) Y(s[t]);
          n = !0;
        }
      },
      o(t) {
        for (let t = 0; t < s.length; t += 1) D(s[t]);
        n = !1;
      },
      d(t) {
        for (let e = 0; e < s.length; e += 1) s[e].d(t);
        t && f(e);
      },
    };
  }
  function zt(t, e) {
    let n, s, o;
    return (
      (s = new kt({ props: { account: e[6] } })),
      {
        key: t,
        first: null,
        c() {
          (n = v()), R(s.$$.fragment), (this.first = n);
        },
        m(t, e) {
          d(t, n, e), W(s, t, e), (o = !0);
        },
        p(t, n) {
          e = t;
          const o = {};
          5 & n && (o.account = e[6]), s.$set(o);
        },
        i(t) {
          o || (Y(s.$$.fragment, t), (o = !0));
        },
        o(t) {
          D(s.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && f(n), X(s, t);
        },
      }
    );
  }
  function Tt(t) {
    let e,
      n,
      s,
      o,
      c,
      r,
      a,
      i,
      l,
      v,
      y,
      _,
      x,
      k,
      j = t[1].accounts + "";
    const L = [Ct, Lt],
      C = [];
    function z(t, e) {
      return (
        5 & e && (l = null),
        null == l && (l = !!(t[2].filter(t[3]).length > 0)),
        l ? 0 : 1
      );
    }
    return (
      (v = z(t, -1)),
      (y = C[v] = L[v](t)),
      {
        c() {
          (e = p("aside")),
            (n = p("h3")),
            (s = m(j)),
            (o = h()),
            (c = p("input")),
            (a = h()),
            (i = p("section")),
            y.c(),
            $(n, "class", "heading"),
            $(c, "type", "text"),
            $(c, "class", "acc-search svelte-1jrs5kj"),
            $(c, "placeholder", (r = t[1].account_search)),
            $(i, "class", "scroller"),
            $(e, "class", "svelte-1jrs5kj");
        },
        m(r, l) {
          d(r, e, l),
            u(e, n),
            u(n, s),
            u(e, o),
            u(e, c),
            b(c, t[0]),
            u(e, a),
            u(e, i),
            C[v].m(i, null),
            (_ = !0),
            x || ((k = g(c, "input", t[4])), (x = !0));
        },
        p(t, [e]) {
          (!_ || 2 & e) && j !== (j = t[1].accounts + "") && w(s, j),
            (!_ || (2 & e && r !== (r = t[1].account_search))) &&
              $(c, "placeholder", r),
            1 & e && c.value !== t[0] && b(c, t[0]);
          let n = v;
          (v = z(t, e)),
            v === n
              ? C[v].p(t, e)
              : (V(),
                D(C[n], 1, 1, () => {
                  C[n] = null;
                }),
                B(),
                (y = C[v]),
                y ? y.p(t, e) : ((y = C[v] = L[v](t)), y.c()),
                Y(y, 1),
                y.m(i, null));
        },
        i(t) {
          _ || (Y(y), (_ = !0));
        },
        o(t) {
          D(y), (_ = !1);
        },
        d(t) {
          t && f(e), C[v].d(), (x = !1), k();
        },
      }
    );
  }
  function Et(t, e, n) {
    let s, o;
    i(t, ut, (t) => n(1, (s = t))), i(t, lt, (t) => n(2, (o = t)));
    let c = "";
    return [
      c,
      s,
      o,
      (t) => t.name.toLowerCase().includes(c.toLowerCase()),
      function () {
        (c = this.value), n(0, c);
      },
      (t) => t.name.toLowerCase().includes(c.toLowerCase()),
    ];
  }
  class Nt extends G {
    constructor(t) {
      super(), H(this, t, Et, Tt, c, {});
    }
  }
  function Mt(e) {
    let n,
      s,
      o,
      c,
      r,
      a,
      i,
      l,
      v,
      g,
      y,
      b,
      k,
      j,
      L,
      C,
      z,
      T,
      E,
      N,
      M,
      S,
      F,
      O,
      U,
      I,
      A,
      P,
      V,
      B,
      Y,
      D,
      Z,
      J,
      R,
      W,
      X = e[0].title + "",
      q = e[0].trans_type.toUpperCase() + "",
      H = e[0].trans_id + "",
      G = gt(e[0].amount) + "",
      K = e[0].receiver + "",
      Q = e[2](e[0].time) + "",
      tt = e[0].issuer + "",
      et = e[1].message + "",
      nt = e[0].message + "";
    return {
      c() {
        (n = p("section")),
          (s = p("h5")),
          (o = p("span")),
          (c = m(X)),
          (r = h()),
          (a = p("p")),
          (i = m("[")),
          (l = m(q)),
          (v = m("]")),
          (g = h()),
          (y = p("span")),
          (b = m(H)),
          (k = h()),
          (j = p("h4")),
          (L = p("div")),
          (C = p("span")),
          (z = p("i")),
          (T = h()),
          (E = m(G)),
          (N = h()),
          (M = p("span")),
          (S = m(K)),
          (F = h()),
          (O = p("span")),
          (U = m(Q)),
          (I = h()),
          (A = p("br")),
          (P = h()),
          (V = m(tt)),
          (B = h()),
          (Y = p("h6")),
          (D = m(et)),
          (Z = h()),
          (J = p("br")),
          (R = h()),
          (W = m(nt)),
          $(a, "class", "svelte-1wevdpb"),
          $(o, "class", "title-container svelte-1wevdpb"),
          x(o, "withdrawTitle", "withdraw" === e[0].trans_type),
          $(y, "class", "trans_id svelte-1wevdpb"),
          x(y, "withdrawId", "withdraw" === e[0].trans_type),
          $(s, "class", "svelte-1wevdpb"),
          $(z, "class", "fa-solid fa-money-bill"),
          $(C, "class", "svelte-1wevdpb"),
          x(C, "withdraw", "withdraw" === e[0].trans_type),
          _(L, "display", "flex"),
          _(L, "flex-direction", "column"),
          _(L, "justify-content", "flex-start"),
          _(L, "align-items", "flex-start"),
          $(M, "class", "svelte-1wevdpb"),
          $(O, "class", "svelte-1wevdpb"),
          $(j, "class", "svelte-1wevdpb"),
          $(Y, "class", "svelte-1wevdpb"),
          $(n, "class", "transaction svelte-1wevdpb");
      },
      m(t, e) {
        d(t, n, e),
          u(n, s),
          u(s, o),
          u(o, c),
          u(o, r),
          u(o, a),
          u(a, i),
          u(a, l),
          u(a, v),
          u(s, g),
          u(s, y),
          u(y, b),
          u(n, k),
          u(n, j),
          u(j, L),
          u(L, C),
          u(C, z),
          u(C, T),
          u(C, E),
          u(j, N),
          u(j, M),
          u(M, S),
          u(j, F),
          u(j, O),
          u(O, U),
          u(O, I),
          u(O, A),
          u(O, P),
          u(O, V),
          u(n, B),
          u(n, Y),
          u(Y, D),
          u(Y, Z),
          u(Y, J),
          u(Y, R),
          u(Y, W);
      },
      p(t, [e]) {
        1 & e && X !== (X = t[0].title + "") && w(c, X),
          1 & e && q !== (q = t[0].trans_type.toUpperCase() + "") && w(l, q),
          1 & e && x(o, "withdrawTitle", "withdraw" === t[0].trans_type),
          1 & e && H !== (H = t[0].trans_id + "") && w(b, H),
          1 & e && x(y, "withdrawId", "withdraw" === t[0].trans_type),
          1 & e && G !== (G = gt(t[0].amount) + "") && w(E, G),
          1 & e && x(C, "withdraw", "withdraw" === t[0].trans_type),
          1 & e && K !== (K = t[0].receiver + "") && w(S, K),
          1 & e && Q !== (Q = t[2](t[0].time) + "") && w(U, Q),
          1 & e && tt !== (tt = t[0].issuer + "") && w(V, tt),
          2 & e && et !== (et = t[1].message + "") && w(D, et),
          1 & e && nt !== (nt = t[0].message + "") && w(W, nt);
      },
      i: t,
      o: t,
      d(t) {
        t && f(n);
      },
    };
  }
  function St(t, e, n) {
    let s;
    i(t, ut, (t) => n(1, (s = t)));
    let { transaction: o } = e;
    return (
      (t.$$set = (t) => {
        "transaction" in t && n(0, (o = t.transaction));
      }),
      [
        o,
        s,
        function (t) {
          let e;
          const n = Math.floor(Date.now() / 1e3) - t,
            o = Math.floor(n / 60),
            c = Math.floor(o / 60),
            r = Math.floor(c / 24),
            a = Math.floor(r / 7);
          return (
            (e =
              0 !== a && a > 1
                ? s.weeks.replace("%s", a)
                : 0 !== a && 1 === a
                ? s.aweek
                : 0 !== r && r > 1
                ? s.days.replace("%s", r)
                : 0 !== r && 1 === r
                ? s.aday
                : 0 !== c && c > 1
                ? s.hours.replace("%s", c)
                : 0 !== c && 1 === c
                ? s.ahour
                : 0 !== o && o > 1
                ? s.mins.replace("%s", o)
                : 0 !== o && 1 === o
                ? s.amin
                : s.secs),
            e
          );
        },
      ]
    );
  }
  class Ft extends G {
    constructor(t) {
      super(), H(this, t, St, Mt, c, { transaction: 0 });
    }
  }
  function Ot(t, e, n) {
    const s = t.slice();
    return (s[10] = e[n]), s;
  }
  function Ut(e) {
    let n,
      s = e[3].select_account + "";
    return {
      c() {
        n = m(s);
      },
      m(t, e) {
        d(t, n, e);
      },
      p(t, e) {
        8 & e && s !== (s = t[3].select_account + "") && w(n, s);
      },
      i: t,
      o: t,
      d(t) {
        t && f(n);
      },
    };
  }
  function It(t) {
    let e, n, s, o, c;
    const r = [Pt, At],
      a = [];
    function i(t, n) {
      return (
        5 & n && (e = null),
        null == e && (e = !!(t[2].transactions.filter(t[7]).length > 0)),
        e ? 0 : 1
      );
    }
    return (
      (n = i(t, -1)),
      (s = a[n] = r[n](t)),
      {
        c() {
          s.c(), (o = v());
        },
        m(t, e) {
          a[n].m(t, e), d(t, o, e), (c = !0);
        },
        p(t, e) {
          let c = n;
          (n = i(t, e)),
            n === c
              ? a[n].p(t, e)
              : (V(),
                D(a[c], 1, 1, () => {
                  a[c] = null;
                }),
                B(),
                (s = a[n]),
                s ? s.p(t, e) : ((s = a[n] = r[n](t)), s.c()),
                Y(s, 1),
                s.m(o.parentNode, o));
        },
        i(t) {
          c || (Y(s), (c = !0));
        },
        o(t) {
          D(s), (c = !1);
        },
        d(t) {
          a[n].d(t), t && f(o);
        },
      }
    );
  }
  function At(e) {
    let n,
      s,
      o = e[3].trans_not_found + "";
    return {
      c() {
        (n = p("h3")),
          (s = m(o)),
          _(n, "text-align", "left"),
          _(n, "color", "#F3F4F5"),
          _(n, "margin-top", "1rem");
      },
      m(t, e) {
        d(t, n, e), u(n, s);
      },
      p(t, e) {
        8 & e && o !== (o = t[3].trans_not_found + "") && w(s, o);
      },
      i: t,
      o: t,
      d(t) {
        t && f(n);
      },
    };
  }
  function Pt(t) {
    let e,
      n,
      s = [],
      o = new Map(),
      c = t[2].transactions.filter(t[9]);
    const r = (t) => t[10].trans_id;
    for (let e = 0; e < c.length; e += 1) {
      let n = Ot(t, c, e),
        a = r(n);
      o.set(a, (s[e] = Vt(a, n)));
    }
    return {
      c() {
        for (let t = 0; t < s.length; t += 1) s[t].c();
        e = v();
      },
      m(t, o) {
        for (let e = 0; e < s.length; e += 1) s[e].m(t, o);
        d(t, e, o), (n = !0);
      },
      p(t, n) {
        5 & n &&
          ((c = t[2].transactions.filter(t[9])),
          V(),
          (s = J(s, n, r, 1, t, c, o, e.parentNode, Z, Vt, e, Ot)),
          B());
      },
      i(t) {
        if (!n) {
          for (let t = 0; t < c.length; t += 1) Y(s[t]);
          n = !0;
        }
      },
      o(t) {
        for (let t = 0; t < s.length; t += 1) D(s[t]);
        n = !1;
      },
      d(t) {
        for (let e = 0; e < s.length; e += 1) s[e].d(t);
        t && f(e);
      },
    };
  }
  function Vt(t, e) {
    let n, s, o;
    return (
      (s = new Ft({ props: { transaction: e[10] } })),
      {
        key: t,
        first: null,
        c() {
          (n = v()), R(s.$$.fragment), (this.first = n);
        },
        m(t, e) {
          d(t, n, e), W(s, t, e), (o = !0);
        },
        p(t, n) {
          e = t;
          const o = {};
          5 & n && (o.transaction = e[10]), s.$set(o);
        },
        i(t) {
          o || (Y(s.$$.fragment, t), (o = !0));
        },
        o(t) {
          D(s.$$.fragment, t), (o = !1);
        },
        d(t) {
          t && f(n), X(s, t);
        },
      }
    );
  }
  function Bt(t) {
    let e,
      n,
      s,
      o,
      c,
      r,
      a,
      i = t[3].export_data + "";
    return {
      c() {
        (e = p("div")),
          (n = p("button")),
          (s = p("i")),
          (o = h()),
          (c = m(i)),
          $(s, "class", "fa-solid fa-file-export fa-fw"),
          $(n, "class", "btn btn-green"),
          _(n, "display", "flex"),
          _(n, "align-items", "center"),
          _(n, "justify-content", "center"),
          _(n, "gap", "1rem"),
          $(e, "class", "export-data svelte-1henvca");
      },
      m(i, l) {
        var f;
        d(i, e, l),
          u(e, n),
          u(n, s),
          u(n, o),
          u(n, c),
          r ||
            ((a = g(
              n,
              "click",
              ((f = t[4]),
              function (t) {
                return t.preventDefault(), f.call(this, t);
              })
            )),
            (r = !0));
      },
      p(t, e) {
        8 & e && i !== (i = t[3].export_data + "") && w(c, i);
      },
      d(t) {
        t && f(e), (r = !1), a();
      },
    };
  }
  function Yt(t) {
    let e,
      n,
      s,
      o,
      c,
      a,
      i,
      l,
      v,
      y,
      _,
      x,
      k,
      j,
      L,
      C,
      z,
      T,
      E,
      N,
      M,
      S,
      F = t[3].transactions + "",
      O = t[3].bank_name + "";
    const U = [It, Ut],
      I = [];
    function A(t, e) {
      return t[2] ? 0 : 1;
    }
    (z = A(t)), (T = I[z] = U[z](t));
    let P = !t[1] && Bt(t);
    return {
      c() {
        var u, d;
        (e = p("section")),
          (n = p("h3")),
          (s = p("span")),
          (o = m(F)),
          (c = h()),
          (a = p("div")),
          (i = p("img")),
          (v = h()),
          (y = p("span")),
          (_ = m(O)),
          (x = h()),
          (k = p("input")),
          (L = h()),
          (C = p("section")),
          T.c(),
          (E = h()),
          P && P.c(),
          (u = i.src),
          (d = l = "./img/bank.png"),
          r || (r = document.createElement("a")),
          (r.href = d),
          u !== r.href && $(i, "src", "./img/bank.png"),
          $(i, "alt", "bang icon"),
          $(i, "class", "svelte-1henvca"),
          $(a, "class", "svelte-1henvca"),
          $(n, "class", "heading svelte-1henvca"),
          $(k, "type", "text"),
          $(k, "class", "transactions-search svelte-1henvca"),
          $(k, "placeholder", (j = t[3].trans_search)),
          $(C, "class", "scroller svelte-1henvca"),
          $(e, "class", "transactions-container svelte-1henvca");
      },
      m(r, l) {
        d(r, e, l),
          u(e, n),
          u(n, s),
          u(s, o),
          u(n, c),
          u(n, a),
          u(a, i),
          u(a, v),
          u(a, y),
          u(y, _),
          u(e, x),
          u(e, k),
          b(k, t[0]),
          u(e, L),
          u(e, C),
          I[z].m(C, null),
          u(e, E),
          P && P.m(e, null),
          (N = !0),
          M || ((S = g(k, "input", t[8])), (M = !0));
      },
      p(t, [n]) {
        (!N || 8 & n) && F !== (F = t[3].transactions + "") && w(o, F),
          (!N || 8 & n) && O !== (O = t[3].bank_name + "") && w(_, O),
          (!N || (8 & n && j !== (j = t[3].trans_search))) &&
            $(k, "placeholder", j),
          1 & n && k.value !== t[0] && b(k, t[0]);
        let s = z;
        (z = A(t)),
          z === s
            ? I[z].p(t, n)
            : (V(),
              D(I[s], 1, 1, () => {
                I[s] = null;
              }),
              B(),
              (T = I[z]),
              T ? T.p(t, n) : ((T = I[z] = U[z](t)), T.c()),
              Y(T, 1),
              T.m(C, null)),
          t[1]
            ? P && (P.d(1), (P = null))
            : P
            ? P.p(t, n)
            : ((P = Bt(t)), P.c(), P.m(e, null));
      },
      i(t) {
        N || (Y(T), (N = !0));
      },
      o(t) {
        D(T), (N = !1);
      },
      d(t) {
        t && f(e), I[z].d(), P && P.d(), (M = !1), S();
      },
    };
  }
  function Dt(t, e, n) {
    let s, o, c, r;
    i(t, ct, (t) => n(5, (o = t))),
      i(t, lt, (t) => n(6, (c = t))),
      i(t, ut, (t) => n(3, (r = t)));
    let a = "";
    let l = !1;
    rt.subscribe((t) => {
      n(1, (l = t));
    });
    return (
      (t.$$.update = () => {
        96 & t.$$.dirty && n(2, (s = c.find((t) => o === t.id)));
      }),
      [
        a,
        l,
        s,
        r,
        function () {
          if (
            (null == s && console.log("No account selected"),
            0 === s.transactions.length)
          )
            return (
              ot.set("No transactions to export!"),
              void setTimeout(() => {
                ot.set("");
              }, 3500)
            );
          ((t) => {
            const e = document.createElement("input");
            (e.value = t),
              document.body.appendChild(e),
              e.select(),
              document.execCommand("copy"),
              document.body.removeChild(e);
          })(
            ((t) => {
              const e = Object.keys(t[0]),
                n = function (t, e) {
                  return null === e ? "" : e;
                };
              let s = t.map(function (t) {
                return e
                  .map(function (e) {
                    return JSON.stringify(t[e], n);
                  })
                  .join(",");
              });
              return s.unshift(e.join(",")), (s = s.join("\r\n")), s;
            })(s.transactions)
          ),
            ot.set("Data copied to clipboard!"),
            setTimeout(() => {
              ot.set("");
            }, 3500);
        },
        o,
        c,
        (t) =>
          t.message.toLowerCase().includes(a.toLowerCase()) ||
          t.trans_id.toLowerCase().includes(a.toLowerCase()) ||
          t.receiver.toLowerCase().includes(a.toLowerCase()),
        function () {
          (a = this.value), n(0, a);
        },
        (t) =>
          t.message.toLowerCase().includes(a.toLowerCase()) ||
          t.trans_id.toLowerCase().includes(a.toLowerCase()) ||
          t.receiver.toLowerCase().includes(a.toLowerCase()),
      ]
    );
  }
  class Zt extends G {
    constructor(t) {
      super(), H(this, t, Dt, Yt, c, {});
    }
  }
  function Jt(t) {
    let e,
      n,
      s,
      o,
      c,
      r,
      a,
      i,
      l,
      v,
      g = gt(t[0][0].cash) + "";
    return (
      (s = new Nt({})),
      (c = new Zt({})),
      {
        c() {
          (e = p("div")),
            (n = p("section")),
            R(s.$$.fragment),
            (o = h()),
            R(c.$$.fragment),
            (r = h()),
            (a = p("h5")),
            (i = p("i")),
            (l = m(g)),
            $(n, "class", "svelte-1mww25k"),
            $(i, "class", "fa-solid fa-wallet fa-fw"),
            $(a, "class", "svelte-1mww25k"),
            $(e, "class", "main svelte-1mww25k");
        },
        m(t, f) {
          d(t, e, f),
            u(e, n),
            W(s, n, null),
            u(n, o),
            W(c, n, null),
            u(e, r),
            u(e, a),
            u(a, i),
            u(a, l),
            (v = !0);
        },
        p(t, [e]) {
          (!v || 1 & e) && g !== (g = gt(t[0][0].cash) + "") && w(l, g);
        },
        i(t) {
          v || (Y(s.$$.fragment, t), Y(c.$$.fragment, t), (v = !0));
        },
        o(t) {
          D(s.$$.fragment, t), D(c.$$.fragment, t), (v = !1);
        },
        d(t) {
          t && f(e), X(s), X(c);
        },
      }
    );
  }
  function Rt(t, e, n) {
    let s;
    return i(t, lt, (t) => n(0, (s = t))), [s];
  }
  class Wt extends G {
    constructor(t) {
      super(), H(this, t, Rt, Jt, c, {});
    }
  }
  function Xt(t) {
    let e,
      n,
      s,
      o,
      c,
      r,
      a,
      i = t[4].transfer + "";
    return {
      c() {
        (e = p("div")),
          (n = p("label")),
          (s = m(i)),
          (o = h()),
          (c = p("input")),
          $(n, "for", "stateId"),
          $(n, "class", "svelte-1ynylej"),
          $(c, "type", "text"),
          $(c, "name", "stateId"),
          $(c, "id", "stateId"),
          $(c, "placeholder", "#"),
          $(c, "class", "svelte-1ynylej"),
          $(e, "class", "form-row svelte-1ynylej");
      },
      m(i, l) {
        d(i, e, l),
          u(e, n),
          u(n, s),
          u(e, o),
          u(e, c),
          b(c, t[2]),
          r || ((a = g(c, "input", t[11])), (r = !0));
      },
      p(t, e) {
        16 & e && i !== (i = t[4].transfer + "") && w(s, i),
          4 & e && c.value !== t[2] && b(c, t[2]);
      },
      d(t) {
        t && f(e), (r = !1), a();
      },
    };
  }
  function qt(e) {
    let n,
      o,
      c,
      r,
      a,
      i,
      l,
      v,
      _,
      x,
      k,
      j,
      L,
      C,
      z,
      T,
      E,
      N,
      M,
      S,
      F,
      O,
      U,
      I,
      A,
      P,
      V,
      B,
      Y,
      D,
      Z = e[3].account.type + "",
      J = e[4].account + "",
      R = e[3].account.id + "",
      W = e[4].amount + "",
      X = e[4].comment + "",
      q = e[4].cancel + "",
      H = e[4].confirm + "",
      G = "transfer" === e[3].actionType && Xt(e);
    return {
      c() {
        (n = p("section")),
          (o = p("section")),
          (c = p("h2")),
          (r = m(Z)),
          (a = m(J)),
          (i = m("/ ")),
          (l = m(R)),
          (v = h()),
          (_ = p("form")),
          (x = p("div")),
          (k = p("label")),
          (j = m(W)),
          (L = h()),
          (C = p("input")),
          (z = h()),
          (T = p("div")),
          (E = p("label")),
          (N = m(X)),
          (M = h()),
          (S = p("input")),
          (F = h()),
          G && G.c(),
          (O = h()),
          (U = p("div")),
          (I = p("button")),
          (A = m(q)),
          (P = h()),
          (V = p("button")),
          (B = m(H)),
          $(c, "class", "svelte-1ynylej"),
          $(k, "for", "amount"),
          $(k, "class", "svelte-1ynylej"),
          $(C, "type", "number"),
          $(C, "name", "amount"),
          $(C, "id", "amount"),
          $(C, "placeholder", "$"),
          $(C, "class", "svelte-1ynylej"),
          $(x, "class", "form-row svelte-1ynylej"),
          $(E, "for", "comment"),
          $(E, "class", "svelte-1ynylej"),
          $(S, "type", "text"),
          $(S, "name", "comment"),
          $(S, "id", "comment"),
          $(S, "placeholder", "//"),
          $(S, "class", "svelte-1ynylej"),
          $(T, "class", "form-row svelte-1ynylej"),
          $(I, "type", "button"),
          $(I, "class", "btn btn-orange"),
          $(V, "type", "button"),
          $(V, "class", "btn btn-green"),
          $(U, "class", "btns-group"),
          $(_, "action", "#"),
          $(o, "class", "popup-content svelte-1ynylej"),
          $(n, "class", "popup-container svelte-1ynylej");
      },
      m(t, s) {
        d(t, n, s),
          u(n, o),
          u(o, c),
          u(c, r),
          u(c, a),
          u(c, i),
          u(c, l),
          u(o, v),
          u(o, _),
          u(_, x),
          u(x, k),
          u(k, j),
          u(x, L),
          u(x, C),
          b(C, e[0]),
          u(_, z),
          u(_, T),
          u(T, E),
          u(E, N),
          u(T, M),
          u(T, S),
          b(S, e[1]),
          u(_, F),
          G && G.m(_, null),
          u(_, O),
          u(_, U),
          u(U, I),
          u(I, A),
          u(U, P),
          u(U, V),
          u(V, B),
          Y ||
            ((D = [
              g(C, "input", e[9]),
              g(S, "input", e[10]),
              g(I, "click", e[5]),
              g(V, "click", e[12]),
            ]),
            (Y = !0));
      },
      p(t, [e]) {
        8 & e && Z !== (Z = t[3].account.type + "") && w(r, Z),
          16 & e && J !== (J = t[4].account + "") && w(a, J),
          8 & e && R !== (R = t[3].account.id + "") && w(l, R),
          16 & e && W !== (W = t[4].amount + "") && w(j, W),
          1 & e && y(C.value) !== t[0] && b(C, t[0]),
          16 & e && X !== (X = t[4].comment + "") && w(N, X),
          2 & e && S.value !== t[1] && b(S, t[1]),
          "transfer" === t[3].actionType
            ? G
              ? G.p(t, e)
              : ((G = Xt(t)), G.c(), G.m(_, O))
            : G && (G.d(1), (G = null)),
          16 & e && q !== (q = t[4].cancel + "") && w(A, q),
          16 & e && H !== (H = t[4].confirm + "") && w(B, H);
      },
      i: t,
      o: t,
      d(t) {
        t && f(n), G && G.d(), (Y = !1), s(D);
      },
    };
  }
  function Ht(t, e, n) {
    let s, o, c, r;
    i(t, it, (t) => n(3, (s = t))),
      i(t, ct, (t) => n(7, (o = t))),
      i(t, lt, (t) => n(8, (c = t))),
      i(t, ut, (t) => n(4, (r = t)));
    let a = 0,
      l = "",
      u = "";
    function d() {
      it.update((t) => Object.assign(Object.assign({}, t), { actionType: "" }));
    }
    function f() {
      st.set(!0),
        Q(s.actionType, {
          fromAccount: s.account.id,
          amount: a,
          comment: l,
          stateid: u,
        }).then((t) => {
          setTimeout(() => {
            !1 !== t && lt.set(t), st.set(!1);
          }, 1e3);
        }),
        d();
    }
    return (
      (t.$$.update = () => {
        384 & t.$$.dirty && c.find((t) => o === t.id);
      }),
      [
        a,
        l,
        u,
        s,
        r,
        d,
        f,
        o,
        c,
        function () {
          (a = y(this.value)), n(0, a);
        },
        function () {
          (l = this.value), n(1, l);
        },
        function () {
          (u = this.value), n(2, u);
        },
        () => f(),
      ]
    );
  }
  class Gt extends G {
    constructor(t) {
      super(), H(this, t, Ht, qt, c, {});
    }
  }
  function Kt(e) {
    let n;
    return {
      c() {
        (n = p("section")),
          (n.innerHTML =
            '<section class="loading-content svelte-1ao9gz5"><div class="loading-spinner svelte-1ao9gz5"><div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div> \n            <div class="svelte-1ao9gz5"></div></div></section>'),
          $(n, "class", "loading-container svelte-1ao9gz5");
      },
      m(t, e) {
        d(t, n, e);
      },
      p: t,
      i: t,
      o: t,
      d(t) {
        t && f(n);
      },
    };
  }
  class Qt extends G {
    constructor(t) {
      super(), H(this, t, null, Kt, c, {});
    }
  }
  function te(e) {
    let n, s, o, c, r, a;
    return {
      c() {
        (n = p("section")),
          (s = p("section")),
          (o = p("i")),
          (c = h()),
          (r = p("strong")),
          (a = m(e[0])),
          $(
            o,
            "class",
            "start-icon fa fa-info-circle faa-shake animated fa-2x"
          ),
          $(r, "class", "font__weight-bold"),
          _(r, "font-size", "0.69vw"),
          $(s, "class", "notificaion-content svelte-aywcjm"),
          $(n, "class", "notificaion-container svelte-aywcjm");
      },
      m(t, e) {
        d(t, n, e), u(n, s), u(s, o), u(s, c), u(s, r), u(r, a);
      },
      p(t, [e]) {
        1 & e && w(a, t[0]);
      },
      i: t,
      o: t,
      d(t) {
        t && f(n);
      },
    };
  }
  function ee(t, e, n) {
    let s;
    return i(t, ot, (t) => n(0, (s = t))), [s];
  }
  class ne extends G {
    constructor(t) {
      super(), H(this, t, ee, te, c, {});
    }
  }
  function se(t) {
    let e, n;
    return (
      (e = new Gt({})),
      {
        c() {
          R(e.$$.fragment);
        },
        m(t, s) {
          W(e, t, s), (n = !0);
        },
        i(t) {
          n || (Y(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          D(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          X(e, t);
        },
      }
    );
  }
  function oe(t) {
    let e, n;
    return (
      (e = new ne({})),
      {
        c() {
          R(e.$$.fragment);
        },
        m(t, s) {
          W(e, t, s), (n = !0);
        },
        i(t) {
          n || (Y(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          D(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          X(e, t);
        },
      }
    );
  }
  function ce(t) {
    let e, n, s, o, c;
    e = new Wt({});
    let r = "" !== t[0].actionType && se(),
      a = "" !== t[1] && oe();
    return {
      c() {
        R(e.$$.fragment),
          (n = h()),
          r && r.c(),
          (s = h()),
          a && a.c(),
          (o = v());
      },
      m(t, i) {
        W(e, t, i),
          d(t, n, i),
          r && r.m(t, i),
          d(t, s, i),
          a && a.m(t, i),
          d(t, o, i),
          (c = !0);
      },
      p(t, e) {
        "" !== t[0].actionType
          ? r
            ? 1 & e && Y(r, 1)
            : ((r = se()), r.c(), Y(r, 1), r.m(s.parentNode, s))
          : r &&
            (V(),
            D(r, 1, 1, () => {
              r = null;
            }),
            B()),
          "" !== t[1]
            ? a
              ? 2 & e && Y(a, 1)
              : ((a = oe()), a.c(), Y(a, 1), a.m(o.parentNode, o))
            : a &&
              (V(),
              D(a, 1, 1, () => {
                a = null;
              }),
              B());
      },
      i(t) {
        c || (Y(e.$$.fragment, t), Y(r), Y(a), (c = !0));
      },
      o(t) {
        D(e.$$.fragment, t), D(r), D(a), (c = !1);
      },
      d(t) {
        X(e, t), t && f(n), r && r.d(t), t && f(s), a && a.d(t), t && f(o);
      },
    };
  }
  function re(t) {
    let e, n;
    return (
      (e = new Qt({})),
      {
        c() {
          R(e.$$.fragment);
        },
        m(t, s) {
          W(e, t, s), (n = !0);
        },
        i(t) {
          n || (Y(e.$$.fragment, t), (n = !0));
        },
        o(t) {
          D(e.$$.fragment, t), (n = !1);
        },
        d(t) {
          X(e, t);
        },
      }
    );
  }
  function ae(t) {
    let e, n, s, o, c, r;
    s = new ht({ props: { $$slots: { default: [ce] }, $$scope: { ctx: t } } });
    let a = t[2] && re();
    return {
      c() {
        (e = p("link")),
          (n = h()),
          R(s.$$.fragment),
          (o = h()),
          a && a.c(),
          (c = v()),
          $(e, "rel", "stylesheet"),
          $(
            e,
            "href",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          ),
          $(
            e,
            "integrity",
            "sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          ),
          $(e, "crossorigin", "anonymous"),
          $(e, "referrerpolicy", "no-referrer");
      },
      m(t, i) {
        u(document.head, e),
          d(t, n, i),
          W(s, t, i),
          d(t, o, i),
          a && a.m(t, i),
          d(t, c, i),
          (r = !0);
      },
      p(t, [e]) {
        const n = {};
        11 & e && (n.$$scope = { dirty: e, ctx: t }),
          s.$set(n),
          t[2]
            ? a
              ? 4 & e && Y(a, 1)
              : ((a = re()), a.c(), Y(a, 1), a.m(c.parentNode, c))
            : a &&
              (V(),
              D(a, 1, 1, () => {
                a = null;
              }),
              B());
      },
      i(t) {
        r || (Y(s.$$.fragment, t), Y(a), (r = !0));
      },
      o(t) {
        D(s.$$.fragment, t), D(a), (r = !1);
      },
      d(t) {
        f(e), t && f(n), X(s, t), t && f(o), a && a.d(t), t && f(c);
      },
    };
  }
  function ie(t, e, n) {
    let s, o, c;
    return (
      i(t, it, (t) => n(0, (s = t))),
      i(t, ot, (t) => n(1, (o = t))),
      i(t, st, (t) => n(2, (c = t))),
      $t([{ action: "setVisible", data: !0 }]),
      [s, o, c]
    );
  }
  return new (class extends G {
    constructor(t) {
      super(), H(this, t, ie, ae, c, {});
    }
  })({ target: document.body });
})();
//# sourceMappingURL=bundle.js.map
