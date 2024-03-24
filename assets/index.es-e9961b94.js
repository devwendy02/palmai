import {
    g as bo,
    d as ne,
    e as Pm,
    w as Xl,
    f as Zl,
    h as Nc,
    t as Eo,
    i as Sm,
    a as ef,
    j as Ei,
    D as Om,
    k as Rm,
    N as ee,
    l as Am,
    m as gc,
    n as Tm,
    V as Cm,
    R as $m,
    F as kh,
    K as Nm,
    x as Dm,
    L as Fm,
    o as Kh,
    $ as Lm,
    p as jm,
    q as Jn,
    Z as Vh,
    J as qm,
    X as Mm,
    _ as tf,
    s as Fr,
    u as zm,
    v as Um,
    y as pn,
    z as Nt,
    U as tr,
    A as bi,
    B as hr,
    C as Hm,
    E as dn,
    G as rf,
    H as Bm,
    I as km,
    M as Km,
    O as nf,
    P as Vm,
    Q as sf,
    S as of ,
    T as gn,
    W as yc,
    Y as fo,
    a0 as vn,
    a1 as Gm,
    a2 as po,
    a3 as Wm,
    a4 as Jm,
    a5 as Qm,
    a6 as oo,
    a7 as Ym,
    a8 as Xm,
    a9 as Xa,
    aa as Gh,
    ab as Zm,
    ac as e1,
    ad as t1,
    ae as Wh,
    af as r1,
    ag as i1,
    ah as n1,
    ai as s1,
    aj as o1,
    ak as a1,
    al as c1,
    am as Kn,
    an as af,
    ao as Za,
    ap as u1,
    aq as h1,
    ar as l1
} from "./index-567080d8.js";
import {
    e as Or,
    $ as Dc
} from "./events-f9222c1d.js";
const f1 = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    p1 = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    d1 = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function g1(a, t) {
    if (a === "__proto__" || a === "constructor" && t && typeof t == "object" && "prototype" in t) {
        y1(a);
        return
    }
    return t
}

function y1(a) {
    console.warn(`[destr] Dropping "${a}" key to prevent prototype pollution.`)
}

function ao(a, t = {}) {
    if (typeof a != "string") return a;
    const r = a.trim();
    if (a[0] === '"' && a.at(-1) === '"' && !a.includes("\\")) return r.slice(1, -1);
    if (r.length <= 9) {
        const n = r.toLowerCase();
        if (n === "true") return !0;
        if (n === "false") return !1;
        if (n === "undefined") return;
        if (n === "null") return null;
        if (n === "nan") return Number.NaN;
        if (n === "infinity") return Number.POSITIVE_INFINITY;
        if (n === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!d1.test(a)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return a
    }
    try {
        if (f1.test(a) || p1.test(a)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(a, g1)
        }
        return JSON.parse(a)
    } catch (n) {
        if (t.strict) throw n;
        return a
    }
}

function v1(a) {
    return !a || typeof a.then != "function" ? Promise.resolve(a) : a
}

function zt(a, ...t) {
    try {
        return v1(a(...t))
    } catch (r) {
        return Promise.reject(r)
    }
}

function m1(a) {
    const t = typeof a;
    return a === null || t !== "object" && t !== "function"
}

function _1(a) {
    const t = Object.getPrototypeOf(a);
    return !t || t.isPrototypeOf(Object)
}

function go(a) {
    if (m1(a)) return String(a);
    if (_1(a) || Array.isArray(a)) return JSON.stringify(a);
    if (typeof a.toJSON == "function") return go(a.toJSON());
    throw new Error("[unstorage] Cannot stringify value!")
}

function cf() {
    if (typeof Buffer === void 0) throw new TypeError("[unstorage] Buffer is not supported!")
}
const vc = "base64:";

function w1(a) {
    if (typeof a == "string") return a;
    cf();
    const t = Buffer.from(a).toString("base64");
    return vc + t
}

function b1(a) {
    return typeof a != "string" || !a.startsWith(vc) ? a : (cf(), Buffer.from(a.slice(vc.length), "base64"))
}

function ur(a) {
    return a ? a.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
}

function E1(...a) {
    return ur(a.join(":"))
}

function co(a) {
    return a = ur(a), a ? a + ":" : ""
}
const I1 = "memory",
    x1 = () => {
        const a = new Map;
        return {
            name: I1,
            options: {},
            hasItem(t) {
                return a.has(t)
            },
            getItem(t) {
                return a.get(t) ? ? null
            },
            getItemRaw(t) {
                return a.get(t) ? ? null
            },
            setItem(t, r) {
                a.set(t, r)
            },
            setItemRaw(t, r) {
                a.set(t, r)
            },
            removeItem(t) {
                a.delete(t)
            },
            getKeys() {
                return Array.from(a.keys())
            },
            clear() {
                a.clear()
            },
            dispose() {
                a.clear()
            }
        }
    };

function P1(a = {}) {
    const t = {
            mounts: {
                "": a.driver || x1()
            },
            mountpoints: [""],
            watching: !1,
            watchListeners: [],
            unwatch: {}
        },
        r = p => {
            for (const w of t.mountpoints)
                if (p.startsWith(w)) return {
                    base: w,
                    relativeKey: p.slice(w.length),
                    driver: t.mounts[w]
                };
            return {
                base: "",
                relativeKey: p,
                driver: t.mounts[""]
            }
        },
        n = (p, w) => t.mountpoints.filter(R => R.startsWith(p) || w && p.startsWith(R)).map(R => ({
            relativeBase: p.length > R.length ? p.slice(R.length) : void 0,
            mountpoint: R,
            driver: t.mounts[R]
        })),
        s = (p, w) => {
            if (t.watching) {
                w = ur(w);
                for (const R of t.watchListeners) R(p, w)
            }
        },
        c = async () => {
            if (!t.watching) {
                t.watching = !0;
                for (const p in t.mounts) t.unwatch[p] = await Jh(t.mounts[p], s, p)
            }
        },
        f = async () => {
            if (t.watching) {
                for (const p in t.unwatch) await t.unwatch[p]();
                t.unwatch = {}, t.watching = !1
            }
        },
        g = (p, w, R) => {
            const x = new Map,
                C = D => {
                    let V = x.get(D.base);
                    return V || (V = {
                        driver: D.driver,
                        base: D.base,
                        items: []
                    }, x.set(D.base, V)), V
                };
            for (const D of p) {
                const V = typeof D == "string",
                    ie = ur(V ? D : D.key),
                    he = V ? void 0 : D.value,
                    le = V || !D.options ? w : { ...w,
                        ...D.options
                    },
                    ue = r(ie);
                C(ue).items.push({
                    key: ie,
                    value: he,
                    relativeKey: ue.relativeKey,
                    options: le
                })
            }
            return Promise.all([...x.values()].map(D => R(D))).then(D => D.flat())
        },
        m = {
            hasItem(p, w = {}) {
                p = ur(p);
                const {
                    relativeKey: R,
                    driver: x
                } = r(p);
                return zt(x.hasItem, R, w)
            },
            getItem(p, w = {}) {
                p = ur(p);
                const {
                    relativeKey: R,
                    driver: x
                } = r(p);
                return zt(x.getItem, R, w).then(C => ao(C))
            },
            getItems(p, w) {
                return g(p, w, R => R.driver.getItems ? zt(R.driver.getItems, R.items.map(x => ({
                    key: x.relativeKey,
                    options: x.options
                })), w).then(x => x.map(C => ({
                    key: E1(R.base, C.key),
                    value: ao(C.value)
                }))) : Promise.all(R.items.map(x => zt(R.driver.getItem, x.relativeKey, x.options).then(C => ({
                    key: x.key,
                    value: ao(C)
                })))))
            },
            getItemRaw(p, w = {}) {
                p = ur(p);
                const {
                    relativeKey: R,
                    driver: x
                } = r(p);
                return x.getItemRaw ? zt(x.getItemRaw, R, w) : zt(x.getItem, R, w).then(C => b1(C))
            },
            async setItem(p, w, R = {}) {
                if (w === void 0) return m.removeItem(p);
                p = ur(p);
                const {
                    relativeKey: x,
                    driver: C
                } = r(p);
                C.setItem && (await zt(C.setItem, x, go(w), R), C.watch || s("update", p))
            },
            async setItems(p, w) {
                await g(p, w, async R => {
                    R.driver.setItems && await zt(R.driver.setItems, R.items.map(x => ({
                        key: x.relativeKey,
                        value: go(x.value),
                        options: x.options
                    })), w), R.driver.setItem && await Promise.all(R.items.map(x => zt(R.driver.setItem, x.relativeKey, go(x.value), x.options)))
                })
            },
            async setItemRaw(p, w, R = {}) {
                if (w === void 0) return m.removeItem(p, R);
                p = ur(p);
                const {
                    relativeKey: x,
                    driver: C
                } = r(p);
                if (C.setItemRaw) await zt(C.setItemRaw, x, w, R);
                else if (C.setItem) await zt(C.setItem, x, w1(w), R);
                else return;
                C.watch || s("update", p)
            },
            async removeItem(p, w = {}) {
                typeof w == "boolean" && (w = {
                    removeMeta: w
                }), p = ur(p);
                const {
                    relativeKey: R,
                    driver: x
                } = r(p);
                x.removeItem && (await zt(x.removeItem, R, w), (w.removeMeta || w.removeMata) && await zt(x.removeItem, R + "$", w), x.watch || s("remove", p))
            },
            async getMeta(p, w = {}) {
                typeof w == "boolean" && (w = {
                    nativeOnly: w
                }), p = ur(p);
                const {
                    relativeKey: R,
                    driver: x
                } = r(p), C = Object.create(null);
                if (x.getMeta && Object.assign(C, await zt(x.getMeta, R, w)), !w.nativeOnly) {
                    const D = await zt(x.getItem, R + "$", w).then(V => ao(V));
                    D && typeof D == "object" && (typeof D.atime == "string" && (D.atime = new Date(D.atime)), typeof D.mtime == "string" && (D.mtime = new Date(D.mtime)), Object.assign(C, D))
                }
                return C
            },
            setMeta(p, w, R = {}) {
                return this.setItem(p + "$", w, R)
            },
            removeMeta(p, w = {}) {
                return this.removeItem(p + "$", w)
            },
            async getKeys(p, w = {}) {
                p = co(p);
                const R = n(p, !0);
                let x = [];
                const C = [];
                for (const D of R) {
                    const ie = (await zt(D.driver.getKeys, D.relativeBase, w)).map(he => D.mountpoint + ur(he)).filter(he => !x.some(le => he.startsWith(le)));
                    C.push(...ie), x = [D.mountpoint, ...x.filter(he => !he.startsWith(D.mountpoint))]
                }
                return p ? C.filter(D => D.startsWith(p) && !D.endsWith("$")) : C.filter(D => !D.endsWith("$"))
            },
            async clear(p, w = {}) {
                p = co(p), await Promise.all(n(p, !1).map(async R => {
                    if (R.driver.clear) return zt(R.driver.clear, R.relativeBase, w);
                    if (R.driver.removeItem) {
                        const x = await R.driver.getKeys(R.relativeBase || "", w);
                        return Promise.all(x.map(C => R.driver.removeItem(C, w)))
                    }
                }))
            },
            async dispose() {
                await Promise.all(Object.values(t.mounts).map(p => Qh(p)))
            },
            async watch(p) {
                return await c(), t.watchListeners.push(p), async () => {
                    t.watchListeners = t.watchListeners.filter(w => w !== p), t.watchListeners.length === 0 && await f()
                }
            },
            async unwatch() {
                t.watchListeners = [], await f()
            },
            mount(p, w) {
                if (p = co(p), p && t.mounts[p]) throw new Error(`already mounted at ${p}`);
                return p && (t.mountpoints.push(p), t.mountpoints.sort((R, x) => x.length - R.length)), t.mounts[p] = w, t.watching && Promise.resolve(Jh(w, s, p)).then(R => {
                    t.unwatch[p] = R
                }).catch(console.error), m
            },
            async unmount(p, w = !0) {
                p = co(p), !(!p || !t.mounts[p]) && (t.watching && p in t.unwatch && (t.unwatch[p](), delete t.unwatch[p]), w && await Qh(t.mounts[p]), t.mountpoints = t.mountpoints.filter(R => R !== p), delete t.mounts[p])
            },
            getMount(p = "") {
                p = ur(p) + ":";
                const w = r(p);
                return {
                    driver: w.driver,
                    base: w.base
                }
            },
            getMounts(p = "", w = {}) {
                return p = ur(p), n(p, w.parents).map(x => ({
                    driver: x.driver,
                    base: x.mountpoint
                }))
            }
        };
    return m
}

function Jh(a, t, r) {
    return a.watch ? a.watch((n, s) => t(n, r + s)) : () => {}
}
async function Qh(a) {
    typeof a.dispose == "function" && await zt(a.dispose)
}

function Bi(a) {
    return new Promise((t, r) => {
        a.oncomplete = a.onsuccess = () => t(a.result), a.onabort = a.onerror = () => r(a.error)
    })
}

function uf(a, t) {
    const r = indexedDB.open(a);
    r.onupgradeneeded = () => r.result.createObjectStore(t);
    const n = Bi(r);
    return (s, c) => n.then(f => c(f.transaction(t, s).objectStore(t)))
}
let ec;

function Zn() {
    return ec || (ec = uf("keyval-store", "keyval")), ec
}

function Yh(a, t = Zn()) {
    return t("readonly", r => Bi(r.get(a)))
}

function S1(a, t, r = Zn()) {
    return r("readwrite", n => (n.put(t, a), Bi(n.transaction)))
}

function O1(a, t = Zn()) {
    return t("readwrite", r => (r.delete(a), Bi(r.transaction)))
}

function R1(a = Zn()) {
    return a("readwrite", t => (t.clear(), Bi(t.transaction)))
}

function A1(a, t) {
    return a.openCursor().onsuccess = function() {
        this.result && (t(this.result), this.result.continue())
    }, Bi(a.transaction)
}

function T1(a = Zn()) {
    return a("readonly", t => {
        if (t.getAllKeys) return Bi(t.getAllKeys());
        const r = [];
        return A1(t, n => r.push(n.key)).then(() => r)
    })
}
const C1 = a => JSON.stringify(a, (t, r) => typeof r == "bigint" ? r.toString() + "n" : r),
    $1 = a => {
        const t = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
            r = a.replace(t, '$1"$2n"$3');
        return JSON.parse(r, (n, s) => typeof s == "string" && s.match(/^\d+n$/) ? BigInt(s.substring(0, s.length - 1)) : s)
    };

function es(a) {
    if (typeof a != "string") throw new Error(`Cannot safe json parse value of type ${typeof a}`);
    try {
        return $1(a)
    } catch {
        return a
    }
}

function Hi(a) {
    return typeof a == "string" ? a : C1(a) || ""
}
const N1 = "idb-keyval";
var D1 = (a = {}) => {
    const t = a.base && a.base.length > 0 ? `${a.base}:` : "",
        r = s => t + s;
    let n;
    return a.dbName && a.storeName && (n = uf(a.dbName, a.storeName)), {
        name: N1,
        options: a,
        async hasItem(s) {
            return !(typeof await Yh(r(s), n) > "u")
        },
        async getItem(s) {
            return await Yh(r(s), n) ? ? null
        },
        setItem(s, c) {
            return S1(r(s), c, n)
        },
        removeItem(s) {
            return O1(r(s), n)
        },
        getKeys() {
            return T1(n)
        },
        clear() {
            return R1(n)
        }
    }
};
const F1 = "WALLET_CONNECT_V2_INDEXED_DB",
    L1 = "keyvaluestorage";
let j1 = class {
    constructor() {
        this.indexedDb = P1({
            driver: D1({
                dbName: F1,
                storeName: L1
            })
        })
    }
    async getKeys() {
        return this.indexedDb.getKeys()
    }
    async getEntries() {
        return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(t => [t.key, t.value])
    }
    async getItem(t) {
        const r = await this.indexedDb.getItem(t);
        if (r !== null) return r
    }
    async setItem(t, r) {
        await this.indexedDb.setItem(t, Hi(r))
    }
    async removeItem(t) {
        await this.indexedDb.removeItem(t)
    }
};
var tc = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
    yo = {
        exports: {}
    };
(function() {
    let a;

    function t() {}
    a = t, a.prototype.getItem = function(r) {
        return this.hasOwnProperty(r) ? String(this[r]) : null
    }, a.prototype.setItem = function(r, n) {
        this[r] = String(n)
    }, a.prototype.removeItem = function(r) {
        delete this[r]
    }, a.prototype.clear = function() {
        const r = this;
        Object.keys(r).forEach(function(n) {
            r[n] = void 0, delete r[n]
        })
    }, a.prototype.key = function(r) {
        return r = r || 0, Object.keys(this)[r]
    }, a.prototype.__defineGetter__("length", function() {
        return Object.keys(this).length
    }), typeof tc < "u" && tc.localStorage ? yo.exports = tc.localStorage : typeof window < "u" && window.localStorage ? yo.exports = window.localStorage : yo.exports = new t
})();

function q1(a) {
    var t;
    return [a[0], es((t = a[1]) != null ? t : "")]
}
let M1 = class {
    constructor() {
        this.localStorage = yo.exports
    }
    async getKeys() {
        return Object.keys(this.localStorage)
    }
    async getEntries() {
        return Object.entries(this.localStorage).map(q1)
    }
    async getItem(t) {
        const r = this.localStorage.getItem(t);
        if (r !== null) return es(r)
    }
    async setItem(t, r) {
        this.localStorage.setItem(t, Hi(r))
    }
    async removeItem(t) {
        this.localStorage.removeItem(t)
    }
};
const z1 = "wc_storage_version",
    Xh = 1,
    U1 = async (a, t, r) => {
        const n = z1,
            s = await t.getItem(n);
        if (s && s >= Xh) {
            r(t);
            return
        }
        const c = await a.getKeys();
        if (!c.length) {
            r(t);
            return
        }
        const f = [];
        for (; c.length;) {
            const g = c.shift();
            if (!g) continue;
            const m = g.toLowerCase();
            if (m.includes("wc@") || m.includes("walletconnect") || m.includes("wc_") || m.includes("wallet_connect")) {
                const p = await a.getItem(g);
                await t.setItem(g, p), f.push(g)
            }
        }
        await t.setItem(n, Xh), r(t), H1(a, f)
    },
    H1 = async (a, t) => {
        t.length && t.forEach(async r => {
            await a.removeItem(r)
        })
    };
let B1 = class {
    constructor() {
        this.initialized = !1, this.setInitialized = r => {
            this.storage = r, this.initialized = !0
        };
        const t = new M1;
        this.storage = t;
        try {
            const r = new j1;
            U1(t, r, this.setInitialized)
        } catch {
            this.initialized = !0
        }
    }
    async getKeys() {
        return await this.initialize(), this.storage.getKeys()
    }
    async getEntries() {
        return await this.initialize(), this.storage.getEntries()
    }
    async getItem(t) {
        return await this.initialize(), this.storage.getItem(t)
    }
    async setItem(t, r) {
        return await this.initialize(), this.storage.setItem(t, r)
    }
    async removeItem(t) {
        return await this.initialize(), this.storage.removeItem(t)
    }
    async initialize() {
        this.initialized || await new Promise(t => {
            const r = setInterval(() => {
                this.initialized && (clearInterval(r), t())
            }, 20)
        })
    }
};
var mn = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var mc = function(a, t) {
    return mc = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var s in n) n.hasOwnProperty(s) && (r[s] = n[s])
    }, mc(a, t)
};

function k1(a, t) {
    mc(a, t);

    function r() {
        this.constructor = a
    }
    a.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
var _c = function() {
    return _c = Object.assign || function(t) {
        for (var r, n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (var c in r) Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c])
        }
        return t
    }, _c.apply(this, arguments)
};

function K1(a, t) {
    var r = {};
    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && t.indexOf(n) < 0 && (r[n] = a[n]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(a); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[s]) && (r[n[s]] = a[n[s]]);
    return r
}

function V1(a, t, r, n) {
    var s = arguments.length,
        c = s < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n,
        f;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(a, t, r, n);
    else
        for (var g = a.length - 1; g >= 0; g--)(f = a[g]) && (c = (s < 3 ? f(c) : s > 3 ? f(t, r, c) : f(t, r)) || c);
    return s > 3 && c && Object.defineProperty(t, r, c), c
}

function G1(a, t) {
    return function(r, n) {
        t(r, n, a)
    }
}

function W1(a, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(a, t)
}

function J1(a, t, r, n) {
    function s(c) {
        return c instanceof r ? c : new r(function(f) {
            f(c)
        })
    }
    return new(r || (r = Promise))(function(c, f) {
        function g(w) {
            try {
                p(n.next(w))
            } catch (R) {
                f(R)
            }
        }

        function m(w) {
            try {
                p(n.throw(w))
            } catch (R) {
                f(R)
            }
        }

        function p(w) {
            w.done ? c(w.value) : s(w.value).then(g, m)
        }
        p((n = n.apply(a, t || [])).next())
    })
}

function Q1(a, t) {
    var r = {
            label: 0,
            sent: function() {
                if (c[0] & 1) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        },
        n, s, c, f;
    return f = {
        next: g(0),
        throw: g(1),
        return: g(2)
    }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
        return this
    }), f;

    function g(p) {
        return function(w) {
            return m([p, w])
        }
    }

    function m(p) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; r;) try {
            if (n = 1, s && (c = p[0] & 2 ? s.return : p[0] ? s.throw || ((c = s.return) && c.call(s), 0) : s.next) && !(c = c.call(s, p[1])).done) return c;
            switch (s = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
                case 0:
                case 1:
                    c = p;
                    break;
                case 4:
                    return r.label++, {
                        value: p[1],
                        done: !1
                    };
                case 5:
                    r.label++, s = p[1], p = [0];
                    continue;
                case 7:
                    p = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (c = r.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
                        r.label = p[1];
                        break
                    }
                    if (p[0] === 6 && r.label < c[1]) {
                        r.label = c[1], c = p;
                        break
                    }
                    if (c && r.label < c[2]) {
                        r.label = c[2], r.ops.push(p);
                        break
                    }
                    c[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            p = t.call(a, r)
        } catch (w) {
            p = [6, w], s = 0
        } finally {
            n = c = 0
        }
        if (p[0] & 5) throw p[1];
        return {
            value: p[0] ? p[1] : void 0,
            done: !0
        }
    }
}

function Y1(a, t, r, n) {
    n === void 0 && (n = r), a[n] = t[r]
}

function X1(a, t) {
    for (var r in a) r !== "default" && !t.hasOwnProperty(r) && (t[r] = a[r])
}

function wc(a) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        r = t && a[t],
        n = 0;
    if (r) return r.call(a);
    if (a && typeof a.length == "number") return {
        next: function() {
            return a && n >= a.length && (a = void 0), {
                value: a && a[n++],
                done: !a
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function hf(a, t) {
    var r = typeof Symbol == "function" && a[Symbol.iterator];
    if (!r) return a;
    var n = r.call(a),
        s, c = [],
        f;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(s = n.next()).done;) c.push(s.value)
    } catch (g) {
        f = {
            error: g
        }
    } finally {
        try {
            s && !s.done && (r = n.return) && r.call(n)
        } finally {
            if (f) throw f.error
        }
    }
    return c
}

function Z1() {
    for (var a = [], t = 0; t < arguments.length; t++) a = a.concat(hf(arguments[t]));
    return a
}

function e_() {
    for (var a = 0, t = 0, r = arguments.length; t < r; t++) a += arguments[t].length;
    for (var n = Array(a), s = 0, t = 0; t < r; t++)
        for (var c = arguments[t], f = 0, g = c.length; f < g; f++, s++) n[s] = c[f];
    return n
}

function Qn(a) {
    return this instanceof Qn ? (this.v = a, this) : new Qn(a)
}

function t_(a, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(a, t || []),
        s, c = [];
    return s = {}, f("next"), f("throw"), f("return"), s[Symbol.asyncIterator] = function() {
        return this
    }, s;

    function f(x) {
        n[x] && (s[x] = function(C) {
            return new Promise(function(D, V) {
                c.push([x, C, D, V]) > 1 || g(x, C)
            })
        })
    }

    function g(x, C) {
        try {
            m(n[x](C))
        } catch (D) {
            R(c[0][3], D)
        }
    }

    function m(x) {
        x.value instanceof Qn ? Promise.resolve(x.value.v).then(p, w) : R(c[0][2], x)
    }

    function p(x) {
        g("next", x)
    }

    function w(x) {
        g("throw", x)
    }

    function R(x, C) {
        x(C), c.shift(), c.length && g(c[0][0], c[0][1])
    }
}

function r_(a) {
    var t, r;
    return t = {}, n("next"), n("throw", function(s) {
        throw s
    }), n("return"), t[Symbol.iterator] = function() {
        return this
    }, t;

    function n(s, c) {
        t[s] = a[s] ? function(f) {
            return (r = !r) ? {
                value: Qn(a[s](f)),
                done: s === "return"
            } : c ? c(f) : f
        } : c
    }
}

function i_(a) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = a[Symbol.asyncIterator],
        r;
    return t ? t.call(a) : (a = typeof wc == "function" ? wc(a) : a[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this
    }, r);

    function n(c) {
        r[c] = a[c] && function(f) {
            return new Promise(function(g, m) {
                f = a[c](f), s(g, m, f.done, f.value)
            })
        }
    }

    function s(c, f, g, m) {
        Promise.resolve(m).then(function(p) {
            c({
                value: p,
                done: g
            })
        }, f)
    }
}

function n_(a, t) {
    return Object.defineProperty ? Object.defineProperty(a, "raw", {
        value: t
    }) : a.raw = t, a
}

function s_(a) {
    if (a && a.__esModule) return a;
    var t = {};
    if (a != null)
        for (var r in a) Object.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    return t.default = a, t
}

function o_(a) {
    return a && a.__esModule ? a : {
        default: a
    }
}

function a_(a, t) {
    if (!t.has(a)) throw new TypeError("attempted to get private field on non-instance");
    return t.get(a)
}

function c_(a, t, r) {
    if (!t.has(a)) throw new TypeError("attempted to set private field on non-instance");
    return t.set(a, r), r
}
const u_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        get __assign() {
            return _c
        },
        __asyncDelegator: r_,
        __asyncGenerator: t_,
        __asyncValues: i_,
        __await: Qn,
        __awaiter: J1,
        __classPrivateFieldGet: a_,
        __classPrivateFieldSet: c_,
        __createBinding: Y1,
        __decorate: V1,
        __exportStar: X1,
        __extends: k1,
        __generator: Q1,
        __importDefault: o_,
        __importStar: s_,
        __makeTemplateObject: n_,
        __metadata: W1,
        __param: G1,
        __read: hf,
        __rest: K1,
        __spread: Z1,
        __spreadArrays: e_,
        __values: wc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Io = bo(u_);
var qn = {},
    rc = {},
    Mn = {};
let ki = class {};
const h_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        IEvents: ki
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    l_ = bo(h_);
var Zh;

function f_() {
    if (Zh) return Mn;
    Zh = 1, Object.defineProperty(Mn, "__esModule", {
        value: !0
    }), Mn.IHeartBeat = void 0;
    const a = l_;
    class t extends a.IEvents {
        constructor(n) {
            super()
        }
    }
    return Mn.IHeartBeat = t, Mn
}
var el;

function lf() {
    return el || (el = 1, function(a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), Io.__exportStar(f_(), a)
    }(rc)), rc
}
var ic = {},
    zi = {},
    tl;

function p_() {
    if (tl) return zi;
    tl = 1, Object.defineProperty(zi, "__esModule", {
        value: !0
    }), zi.HEARTBEAT_EVENTS = zi.HEARTBEAT_INTERVAL = void 0;
    const a = ne;
    return zi.HEARTBEAT_INTERVAL = a.FIVE_SECONDS, zi.HEARTBEAT_EVENTS = {
        pulse: "heartbeat_pulse"
    }, zi
}
var rl;

function ff() {
    return rl || (rl = 1, function(a) {
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), Io.__exportStar(p_(), a)
    }(ic)), ic
}
var il;

function d_() {
    if (il) return qn;
    il = 1, Object.defineProperty(qn, "__esModule", {
        value: !0
    }), qn.HeartBeat = void 0;
    const a = Io,
        t = Or,
        r = ne,
        n = lf(),
        s = ff();
    class c extends n.IHeartBeat {
        constructor(g) {
            super(g), this.events = new t.EventEmitter, this.interval = s.HEARTBEAT_INTERVAL, this.interval = (g == null ? void 0 : g.interval) || s.HEARTBEAT_INTERVAL
        }
        static init(g) {
            return a.__awaiter(this, void 0, void 0, function*() {
                const m = new c(g);
                return yield m.init(), m
            })
        }
        init() {
            return a.__awaiter(this, void 0, void 0, function*() {
                yield this.initialize()
            })
        }
        stop() {
            clearInterval(this.intervalRef)
        }
        on(g, m) {
            this.events.on(g, m)
        }
        once(g, m) {
            this.events.once(g, m)
        }
        off(g, m) {
            this.events.off(g, m)
        }
        removeListener(g, m) {
            this.events.removeListener(g, m)
        }
        initialize() {
            return a.__awaiter(this, void 0, void 0, function*() {
                this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval))
            })
        }
        pulse() {
            this.events.emit(s.HEARTBEAT_EVENTS.pulse)
        }
    }
    return qn.HeartBeat = c, qn
}(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const t = Io;
    t.__exportStar(d_(), a), t.__exportStar(lf(), a), t.__exportStar(ff(), a)
})(mn);
var $e = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var bc = function(a, t) {
    return bc = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var s in n) n.hasOwnProperty(s) && (r[s] = n[s])
    }, bc(a, t)
};

function g_(a, t) {
    bc(a, t);

    function r() {
        this.constructor = a
    }
    a.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
var Ec = function() {
    return Ec = Object.assign || function(t) {
        for (var r, n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (var c in r) Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c])
        }
        return t
    }, Ec.apply(this, arguments)
};

function y_(a, t) {
    var r = {};
    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && t.indexOf(n) < 0 && (r[n] = a[n]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(a); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[s]) && (r[n[s]] = a[n[s]]);
    return r
}

function v_(a, t, r, n) {
    var s = arguments.length,
        c = s < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n,
        f;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(a, t, r, n);
    else
        for (var g = a.length - 1; g >= 0; g--)(f = a[g]) && (c = (s < 3 ? f(c) : s > 3 ? f(t, r, c) : f(t, r)) || c);
    return s > 3 && c && Object.defineProperty(t, r, c), c
}

function m_(a, t) {
    return function(r, n) {
        t(r, n, a)
    }
}

function __(a, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(a, t)
}

function w_(a, t, r, n) {
    function s(c) {
        return c instanceof r ? c : new r(function(f) {
            f(c)
        })
    }
    return new(r || (r = Promise))(function(c, f) {
        function g(w) {
            try {
                p(n.next(w))
            } catch (R) {
                f(R)
            }
        }

        function m(w) {
            try {
                p(n.throw(w))
            } catch (R) {
                f(R)
            }
        }

        function p(w) {
            w.done ? c(w.value) : s(w.value).then(g, m)
        }
        p((n = n.apply(a, t || [])).next())
    })
}

function b_(a, t) {
    var r = {
            label: 0,
            sent: function() {
                if (c[0] & 1) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        },
        n, s, c, f;
    return f = {
        next: g(0),
        throw: g(1),
        return: g(2)
    }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
        return this
    }), f;

    function g(p) {
        return function(w) {
            return m([p, w])
        }
    }

    function m(p) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; r;) try {
            if (n = 1, s && (c = p[0] & 2 ? s.return : p[0] ? s.throw || ((c = s.return) && c.call(s), 0) : s.next) && !(c = c.call(s, p[1])).done) return c;
            switch (s = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
                case 0:
                case 1:
                    c = p;
                    break;
                case 4:
                    return r.label++, {
                        value: p[1],
                        done: !1
                    };
                case 5:
                    r.label++, s = p[1], p = [0];
                    continue;
                case 7:
                    p = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (c = r.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
                        r.label = p[1];
                        break
                    }
                    if (p[0] === 6 && r.label < c[1]) {
                        r.label = c[1], c = p;
                        break
                    }
                    if (c && r.label < c[2]) {
                        r.label = c[2], r.ops.push(p);
                        break
                    }
                    c[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            p = t.call(a, r)
        } catch (w) {
            p = [6, w], s = 0
        } finally {
            n = c = 0
        }
        if (p[0] & 5) throw p[1];
        return {
            value: p[0] ? p[1] : void 0,
            done: !0
        }
    }
}

function E_(a, t, r, n) {
    n === void 0 && (n = r), a[n] = t[r]
}

function I_(a, t) {
    for (var r in a) r !== "default" && !t.hasOwnProperty(r) && (t[r] = a[r])
}

function Ic(a) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        r = t && a[t],
        n = 0;
    if (r) return r.call(a);
    if (a && typeof a.length == "number") return {
        next: function() {
            return a && n >= a.length && (a = void 0), {
                value: a && a[n++],
                done: !a
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function pf(a, t) {
    var r = typeof Symbol == "function" && a[Symbol.iterator];
    if (!r) return a;
    var n = r.call(a),
        s, c = [],
        f;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(s = n.next()).done;) c.push(s.value)
    } catch (g) {
        f = {
            error: g
        }
    } finally {
        try {
            s && !s.done && (r = n.return) && r.call(n)
        } finally {
            if (f) throw f.error
        }
    }
    return c
}

function x_() {
    for (var a = [], t = 0; t < arguments.length; t++) a = a.concat(pf(arguments[t]));
    return a
}

function P_() {
    for (var a = 0, t = 0, r = arguments.length; t < r; t++) a += arguments[t].length;
    for (var n = Array(a), s = 0, t = 0; t < r; t++)
        for (var c = arguments[t], f = 0, g = c.length; f < g; f++, s++) n[s] = c[f];
    return n
}

function Yn(a) {
    return this instanceof Yn ? (this.v = a, this) : new Yn(a)
}

function S_(a, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(a, t || []),
        s, c = [];
    return s = {}, f("next"), f("throw"), f("return"), s[Symbol.asyncIterator] = function() {
        return this
    }, s;

    function f(x) {
        n[x] && (s[x] = function(C) {
            return new Promise(function(D, V) {
                c.push([x, C, D, V]) > 1 || g(x, C)
            })
        })
    }

    function g(x, C) {
        try {
            m(n[x](C))
        } catch (D) {
            R(c[0][3], D)
        }
    }

    function m(x) {
        x.value instanceof Yn ? Promise.resolve(x.value.v).then(p, w) : R(c[0][2], x)
    }

    function p(x) {
        g("next", x)
    }

    function w(x) {
        g("throw", x)
    }

    function R(x, C) {
        x(C), c.shift(), c.length && g(c[0][0], c[0][1])
    }
}

function O_(a) {
    var t, r;
    return t = {}, n("next"), n("throw", function(s) {
        throw s
    }), n("return"), t[Symbol.iterator] = function() {
        return this
    }, t;

    function n(s, c) {
        t[s] = a[s] ? function(f) {
            return (r = !r) ? {
                value: Yn(a[s](f)),
                done: s === "return"
            } : c ? c(f) : f
        } : c
    }
}

function R_(a) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = a[Symbol.asyncIterator],
        r;
    return t ? t.call(a) : (a = typeof Ic == "function" ? Ic(a) : a[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this
    }, r);

    function n(c) {
        r[c] = a[c] && function(f) {
            return new Promise(function(g, m) {
                f = a[c](f), s(g, m, f.done, f.value)
            })
        }
    }

    function s(c, f, g, m) {
        Promise.resolve(m).then(function(p) {
            c({
                value: p,
                done: g
            })
        }, f)
    }
}

function A_(a, t) {
    return Object.defineProperty ? Object.defineProperty(a, "raw", {
        value: t
    }) : a.raw = t, a
}

function T_(a) {
    if (a && a.__esModule) return a;
    var t = {};
    if (a != null)
        for (var r in a) Object.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    return t.default = a, t
}

function C_(a) {
    return a && a.__esModule ? a : {
        default: a
    }
}

function $_(a, t) {
    if (!t.has(a)) throw new TypeError("attempted to get private field on non-instance");
    return t.get(a)
}

function N_(a, t, r) {
    if (!t.has(a)) throw new TypeError("attempted to set private field on non-instance");
    return t.set(a, r), r
}
const D_ = Object.freeze(Object.defineProperty({
        __proto__: null,
        get __assign() {
            return Ec
        },
        __asyncDelegator: O_,
        __asyncGenerator: S_,
        __asyncValues: R_,
        __await: Yn,
        __awaiter: w_,
        __classPrivateFieldGet: $_,
        __classPrivateFieldSet: N_,
        __createBinding: E_,
        __decorate: v_,
        __exportStar: I_,
        __extends: g_,
        __generator: b_,
        __importDefault: C_,
        __importStar: T_,
        __makeTemplateObject: A_,
        __metadata: __,
        __param: m_,
        __read: pf,
        __rest: y_,
        __spread: x_,
        __spreadArrays: P_,
        __values: Ic
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    F_ = bo(D_);
var nc, nl;

function L_() {
    if (nl) return nc;
    nl = 1;

    function a(r) {
        try {
            return JSON.stringify(r)
        } catch {
            return '"[Circular]"'
        }
    }
    nc = t;

    function t(r, n, s) {
        var c = s && s.stringify || a,
            f = 1;
        if (typeof r == "object" && r !== null) {
            var g = n.length + f;
            if (g === 1) return r;
            var m = new Array(g);
            m[0] = c(r);
            for (var p = 1; p < g; p++) m[p] = c(n[p]);
            return m.join(" ")
        }
        if (typeof r != "string") return r;
        var w = n.length;
        if (w === 0) return r;
        for (var R = "", x = 1 - f, C = -1, D = r && r.length || 0, V = 0; V < D;) {
            if (r.charCodeAt(V) === 37 && V + 1 < D) {
                switch (C = C > -1 ? C : 0, r.charCodeAt(V + 1)) {
                    case 100:
                    case 102:
                        if (x >= w || n[x] == null) break;
                        C < V && (R += r.slice(C, V)), R += Number(n[x]), C = V + 2, V++;
                        break;
                    case 105:
                        if (x >= w || n[x] == null) break;
                        C < V && (R += r.slice(C, V)), R += Math.floor(Number(n[x])), C = V + 2, V++;
                        break;
                    case 79:
                    case 111:
                    case 106:
                        if (x >= w || n[x] === void 0) break;
                        C < V && (R += r.slice(C, V));
                        var ie = typeof n[x];
                        if (ie === "string") {
                            R += "'" + n[x] + "'", C = V + 2, V++;
                            break
                        }
                        if (ie === "function") {
                            R += n[x].name || "<anonymous>", C = V + 2, V++;
                            break
                        }
                        R += c(n[x]), C = V + 2, V++;
                        break;
                    case 115:
                        if (x >= w) break;
                        C < V && (R += r.slice(C, V)), R += String(n[x]), C = V + 2, V++;
                        break;
                    case 37:
                        C < V && (R += r.slice(C, V)), R += "%", C = V + 2, V++, x--;
                        break
                }++x
            }++V
        }
        return C === -1 ? r : (C < D && (R += r.slice(C)), R)
    }
    return nc
}
var sc, sl;

function j_() {
    if (sl) return sc;
    sl = 1;
    const a = L_();
    sc = s;
    const t = de().console || {},
        r = {
            mapHttpRequest: D,
            mapHttpResponse: D,
            wrapRequestSerializer: V,
            wrapResponseSerializer: V,
            wrapErrorSerializer: V,
            req: D,
            res: D,
            err: x
        };

    function n(j, U) {
        return Array.isArray(j) ? j.filter(function(ve) {
            return ve !== "!stdSerializers.err"
        }) : j === !0 ? Object.keys(U) : !1
    }

    function s(j) {
        j = j || {}, j.browser = j.browser || {};
        const U = j.browser.transmit;
        if (U && typeof U.send != "function") throw Error("pino: transmit option must have a send function");
        const Q = j.browser.write || t;
        j.browser.write && (j.browser.asObject = !0);
        const ve = j.serializers || {},
            Z = n(j.browser.serialize, ve);
        let Ie = j.browser.serialize;
        Array.isArray(j.browser.serialize) && j.browser.serialize.indexOf("!stdSerializers.err") > -1 && (Ie = !1);
        const Oe = ["error", "fatal", "warn", "info", "debug", "trace"];
        typeof Q == "function" && (Q.error = Q.fatal = Q.warn = Q.info = Q.debug = Q.trace = Q), j.enabled === !1 && (j.level = "silent");
        const T = j.level || "info",
            b = Object.create(Q);
        b.log || (b.log = ie), Object.defineProperty(b, "levelVal", {
            get: ge
        }), Object.defineProperty(b, "level", {
            get: oe,
            set: K
        });
        const $ = {
            transmit: U,
            serialize: Z,
            asObject: j.browser.asObject,
            levels: Oe,
            timestamp: C(j)
        };
        b.levels = s.levels, b.level = T, b.setMaxListeners = b.getMaxListeners = b.emit = b.addListener = b.on = b.prependListener = b.once = b.prependOnceListener = b.removeListener = b.removeAllListeners = b.listeners = b.listenerCount = b.eventNames = b.write = b.flush = ie, b.serializers = ve, b._serialize = Z, b._stdErrSerialize = Ie, b.child = G, U && (b._logEvent = R());

        function ge() {
            return this.level === "silent" ? 1 / 0 : this.levels.values[this.level]
        }

        function oe() {
            return this._level
        }

        function K(k) {
            if (k !== "silent" && !this.levels.values[k]) throw Error("unknown level " + k);
            this._level = k, c($, b, "error", "log"), c($, b, "fatal", "error"), c($, b, "warn", "error"), c($, b, "info", "log"), c($, b, "debug", "log"), c($, b, "trace", "log")
        }

        function G(k, W) {
            if (!k) throw new Error("missing bindings for child Pino");
            W = W || {}, Z && k.serializers && (W.serializers = k.serializers);
            const ut = W.serializers;
            if (Z && ut) {
                var Be = Object.assign({}, ve, ut),
                    jr = j.browser.serialize === !0 ? Object.keys(Be) : Z;
                delete k.serializers, m([k], jr, Be, this._stdErrSerialize)
            }

            function xe(It) {
                this._childLevel = (It._childLevel | 0) + 1, this.error = p(It, k, "error"), this.fatal = p(It, k, "fatal"), this.warn = p(It, k, "warn"), this.info = p(It, k, "info"), this.debug = p(It, k, "debug"), this.trace = p(It, k, "trace"), Be && (this.serializers = Be, this._serialize = jr), U && (this._logEvent = R([].concat(It._logEvent.bindings, k)))
            }
            return xe.prototype = this, new xe(this)
        }
        return b
    }
    s.levels = {
        values: {
            fatal: 60,
            error: 50,
            warn: 40,
            info: 30,
            debug: 20,
            trace: 10
        },
        labels: {
            10: "trace",
            20: "debug",
            30: "info",
            40: "warn",
            50: "error",
            60: "fatal"
        }
    }, s.stdSerializers = r, s.stdTimeFunctions = Object.assign({}, {
        nullTime: he,
        epochTime: le,
        unixTime: ue,
        isoTime: fe
    });

    function c(j, U, Q, ve) {
        const Z = Object.getPrototypeOf(U);
        U[Q] = U.levelVal > U.levels.values[Q] ? ie : Z[Q] ? Z[Q] : t[Q] || t[ve] || ie, f(j, U, Q)
    }

    function f(j, U, Q) {
        !j.transmit && U[Q] === ie || (U[Q] = function(ve) {
            return function() {
                const Ie = j.timestamp(),
                    Oe = new Array(arguments.length),
                    T = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
                for (var b = 0; b < Oe.length; b++) Oe[b] = arguments[b];
                if (j.serialize && !j.asObject && m(Oe, this._serialize, this.serializers, this._stdErrSerialize), j.asObject ? ve.call(T, g(this, Q, Oe, Ie)) : ve.apply(T, Oe), j.transmit) {
                    const $ = j.transmit.level || U.level,
                        ge = s.levels.values[$],
                        oe = s.levels.values[Q];
                    if (oe < ge) return;
                    w(this, {
                        ts: Ie,
                        methodLevel: Q,
                        methodValue: oe,
                        transmitLevel: $,
                        transmitValue: s.levels.values[j.transmit.level || U.level],
                        send: j.transmit.send,
                        val: U.levelVal
                    }, Oe)
                }
            }
        }(U[Q]))
    }

    function g(j, U, Q, ve) {
        j._serialize && m(Q, j._serialize, j.serializers, j._stdErrSerialize);
        const Z = Q.slice();
        let Ie = Z[0];
        const Oe = {};
        ve && (Oe.time = ve), Oe.level = s.levels.values[U];
        let T = (j._childLevel | 0) + 1;
        if (T < 1 && (T = 1), Ie !== null && typeof Ie == "object") {
            for (; T-- && typeof Z[0] == "object";) Object.assign(Oe, Z.shift());
            Ie = Z.length ? a(Z.shift(), Z) : void 0
        } else typeof Ie == "string" && (Ie = a(Z.shift(), Z));
        return Ie !== void 0 && (Oe.msg = Ie), Oe
    }

    function m(j, U, Q, ve) {
        for (const Z in j)
            if (ve && j[Z] instanceof Error) j[Z] = s.stdSerializers.err(j[Z]);
            else if (typeof j[Z] == "object" && !Array.isArray(j[Z]))
            for (const Ie in j[Z]) U && U.indexOf(Ie) > -1 && Ie in Q && (j[Z][Ie] = Q[Ie](j[Z][Ie]))
    }

    function p(j, U, Q) {
        return function() {
            const ve = new Array(1 + arguments.length);
            ve[0] = U;
            for (var Z = 1; Z < ve.length; Z++) ve[Z] = arguments[Z - 1];
            return j[Q].apply(this, ve)
        }
    }

    function w(j, U, Q) {
        const ve = U.send,
            Z = U.ts,
            Ie = U.methodLevel,
            Oe = U.methodValue,
            T = U.val,
            b = j._logEvent.bindings;
        m(Q, j._serialize || Object.keys(j.serializers), j.serializers, j._stdErrSerialize === void 0 ? !0 : j._stdErrSerialize), j._logEvent.ts = Z, j._logEvent.messages = Q.filter(function($) {
            return b.indexOf($) === -1
        }), j._logEvent.level.label = Ie, j._logEvent.level.value = Oe, ve(Ie, j._logEvent, T), j._logEvent = R(b)
    }

    function R(j) {
        return {
            ts: 0,
            messages: [],
            bindings: j || [],
            level: {
                label: "",
                value: 0
            }
        }
    }

    function x(j) {
        const U = {
            type: j.constructor.name,
            msg: j.message,
            stack: j.stack
        };
        for (const Q in j) U[Q] === void 0 && (U[Q] = j[Q]);
        return U
    }

    function C(j) {
        return typeof j.timestamp == "function" ? j.timestamp : j.timestamp === !1 ? he : le
    }

    function D() {
        return {}
    }

    function V(j) {
        return j
    }

    function ie() {}

    function he() {
        return !1
    }

    function le() {
        return Date.now()
    }

    function ue() {
        return Math.round(Date.now() / 1e3)
    }

    function fe() {
        return new Date(Date.now()).toISOString()
    }

    function de() {
        function j(U) {
            return typeof U < "u" && U
        }
        try {
            return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
                get: function() {
                    return delete Object.prototype.globalThis, this.globalThis = this
                },
                configurable: !0
            }), globalThis
        } catch {
            return j(self) || j(window) || j(this) || {}
        }
    }
    return sc
}
var Ui = {},
    ol;

function df() {
    return ol || (ol = 1, Object.defineProperty(Ui, "__esModule", {
        value: !0
    }), Ui.PINO_CUSTOM_CONTEXT_KEY = Ui.PINO_LOGGER_DEFAULTS = void 0, Ui.PINO_LOGGER_DEFAULTS = {
        level: "info"
    }, Ui.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Ui
}
var er = {},
    al;

function q_() {
    if (al) return er;
    al = 1, Object.defineProperty(er, "__esModule", {
        value: !0
    }), er.generateChildLogger = er.formatChildLoggerContext = er.getLoggerContext = er.setBrowserLoggerContext = er.getBrowserLoggerContext = er.getDefaultLoggerOptions = void 0;
    const a = df();

    function t(g) {
        return Object.assign(Object.assign({}, g), {
            level: (g == null ? void 0 : g.level) || a.PINO_LOGGER_DEFAULTS.level
        })
    }
    er.getDefaultLoggerOptions = t;

    function r(g, m = a.PINO_CUSTOM_CONTEXT_KEY) {
        return g[m] || ""
    }
    er.getBrowserLoggerContext = r;

    function n(g, m, p = a.PINO_CUSTOM_CONTEXT_KEY) {
        return g[p] = m, g
    }
    er.setBrowserLoggerContext = n;

    function s(g, m = a.PINO_CUSTOM_CONTEXT_KEY) {
        let p = "";
        return typeof g.bindings > "u" ? p = r(g, m) : p = g.bindings().context || "", p
    }
    er.getLoggerContext = s;

    function c(g, m, p = a.PINO_CUSTOM_CONTEXT_KEY) {
        const w = s(g, p);
        return w.trim() ? `${w}/${m}` : m
    }
    er.formatChildLoggerContext = c;

    function f(g, m, p = a.PINO_CUSTOM_CONTEXT_KEY) {
        const w = c(g, m, p),
            R = g.child({
                context: w
            });
        return n(R, w, p)
    }
    return er.generateChildLogger = f, er
}(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.pino = void 0;
    const t = F_,
        r = t.__importDefault(j_());
    Object.defineProperty(a, "pino", {
        enumerable: !0,
        get: function() {
            return r.default
        }
    }), t.__exportStar(df(), a), t.__exportStar(q_(), a)
})($e);
class M_ extends ki {
    constructor(t) {
        super(), this.opts = t, this.protocol = "wc", this.version = 2
    }
}
class z_ extends ki {
    constructor(t, r) {
        super(), this.core = t, this.logger = r, this.records = new Map
    }
}
class U_ {
    constructor(t, r) {
        this.logger = t, this.core = r
    }
}
let H_ = class extends ki {
        constructor(t, r) {
            super(), this.relayer = t, this.logger = r
        }
    },
    B_ = class extends ki {
        constructor(t) {
            super()
        }
    },
    k_ = class {
        constructor(t, r, n, s) {
            this.core = t, this.logger = r, this.name = n
        }
    };
class K_ extends ki {
    constructor(t, r) {
        super(), this.relayer = t, this.logger = r
    }
}
let V_ = class extends ki {
        constructor(t, r) {
            super(), this.core = t, this.logger = r
        }
    },
    G_ = class {
        constructor(t, r) {
            this.projectId = t, this.logger = r
        }
    },
    W_ = class {
        constructor(t) {
            this.opts = t, this.protocol = "wc", this.version = 2
        }
    },
    J_ = class {
        constructor(t) {
            this.client = t
        }
    };
var Fc = {},
    gf = {};
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    var t = Pm,
        r = Xl;
    a.DIGEST_LENGTH = 64, a.BLOCK_SIZE = 128;
    var n = function() {
        function g() {
            this.digestLength = a.DIGEST_LENGTH, this.blockSize = a.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
        }
        return g.prototype._initState = function() {
            this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
        }, g.prototype.reset = function() {
            return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
        }, g.prototype.clean = function() {
            r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset()
        }, g.prototype.update = function(m, p) {
            if (p === void 0 && (p = m.length), this._finished) throw new Error("SHA512: can't update because hash was finished.");
            var w = 0;
            if (this._bytesHashed += p, this._bufferLength > 0) {
                for (; this._bufferLength < a.BLOCK_SIZE && p > 0;) this._buffer[this._bufferLength++] = m[w++], p--;
                this._bufferLength === this.blockSize && (c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
            }
            for (p >= this.blockSize && (w = c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, m, w, p), p %= this.blockSize); p > 0;) this._buffer[this._bufferLength++] = m[w++], p--;
            return this
        }, g.prototype.finish = function(m) {
            if (!this._finished) {
                var p = this._bytesHashed,
                    w = this._bufferLength,
                    R = p / 536870912 | 0,
                    x = p << 3,
                    C = p % 128 < 112 ? 128 : 256;
                this._buffer[w] = 128;
                for (var D = w + 1; D < C - 8; D++) this._buffer[D] = 0;
                t.writeUint32BE(R, this._buffer, C - 8), t.writeUint32BE(x, this._buffer, C - 4), c(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, C), this._finished = !0
            }
            for (var D = 0; D < this.digestLength / 8; D++) t.writeUint32BE(this._stateHi[D], m, D * 8), t.writeUint32BE(this._stateLo[D], m, D * 8 + 4);
            return this
        }, g.prototype.digest = function() {
            var m = new Uint8Array(this.digestLength);
            return this.finish(m), m
        }, g.prototype.saveState = function() {
            if (this._finished) throw new Error("SHA256: cannot save finished state");
            return {
                stateHi: new Int32Array(this._stateHi),
                stateLo: new Int32Array(this._stateLo),
                buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                bufferLength: this._bufferLength,
                bytesHashed: this._bytesHashed
            }
        }, g.prototype.restoreState = function(m) {
            return this._stateHi.set(m.stateHi), this._stateLo.set(m.stateLo), this._bufferLength = m.bufferLength, m.buffer && this._buffer.set(m.buffer), this._bytesHashed = m.bytesHashed, this._finished = !1, this
        }, g.prototype.cleanSavedState = function(m) {
            r.wipe(m.stateHi), r.wipe(m.stateLo), m.buffer && r.wipe(m.buffer), m.bufferLength = 0, m.bytesHashed = 0
        }, g
    }();
    a.SHA512 = n;
    var s = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

    function c(g, m, p, w, R, x, C) {
        for (var D = p[0], V = p[1], ie = p[2], he = p[3], le = p[4], ue = p[5], fe = p[6], de = p[7], j = w[0], U = w[1], Q = w[2], ve = w[3], Z = w[4], Ie = w[5], Oe = w[6], T = w[7], b, $, ge, oe, K, G, k, W; C >= 128;) {
            for (var ut = 0; ut < 16; ut++) {
                var Be = 8 * ut + x;
                g[ut] = t.readUint32BE(R, Be), m[ut] = t.readUint32BE(R, Be + 4)
            }
            for (var ut = 0; ut < 80; ut++) {
                var jr = D,
                    xe = V,
                    It = ie,
                    L = he,
                    F = le,
                    A = ue,
                    h = fe,
                    I = de,
                    te = j,
                    pe = U,
                    be = Q,
                    Ne = ve,
                    Fe = Z,
                    Re = Ie,
                    xt = Oe,
                    mt = T;
                if (b = de, $ = T, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = (le >>> 14 | Z << 32 - 14) ^ (le >>> 18 | Z << 32 - 18) ^ (Z >>> 41 - 32 | le << 32 - (41 - 32)), $ = (Z >>> 14 | le << 32 - 14) ^ (Z >>> 18 | le << 32 - 18) ^ (le >>> 41 - 32 | Z << 32 - (41 - 32)), K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, b = le & ue ^ ~le & fe, $ = Z & Ie ^ ~Z & Oe, K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, b = s[ut * 2], $ = s[ut * 2 + 1], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, b = g[ut % 16], $ = m[ut % 16], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, ge = k & 65535 | W << 16, oe = K & 65535 | G << 16, b = ge, $ = oe, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = (D >>> 28 | j << 32 - 28) ^ (j >>> 34 - 32 | D << 32 - (34 - 32)) ^ (j >>> 39 - 32 | D << 32 - (39 - 32)), $ = (j >>> 28 | D << 32 - 28) ^ (D >>> 34 - 32 | j << 32 - (34 - 32)) ^ (D >>> 39 - 32 | j << 32 - (39 - 32)), K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, b = D & V ^ D & ie ^ V & ie, $ = j & U ^ j & Q ^ U & Q, K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, I = k & 65535 | W << 16, mt = K & 65535 | G << 16, b = L, $ = Ne, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = ge, $ = oe, K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, L = k & 65535 | W << 16, Ne = K & 65535 | G << 16, V = jr, ie = xe, he = It, le = L, ue = F, fe = A, de = h, D = I, U = te, Q = pe, ve = be, Z = Ne, Ie = Fe, Oe = Re, T = xt, j = mt, ut % 16 === 15)
                    for (var Be = 0; Be < 16; Be++) b = g[Be], $ = m[Be], K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = g[(Be + 9) % 16], $ = m[(Be + 9) % 16], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, ge = g[(Be + 1) % 16], oe = m[(Be + 1) % 16], b = (ge >>> 1 | oe << 32 - 1) ^ (ge >>> 8 | oe << 32 - 8) ^ ge >>> 7, $ = (oe >>> 1 | ge << 32 - 1) ^ (oe >>> 8 | ge << 32 - 8) ^ (oe >>> 7 | ge << 32 - 7), K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, ge = g[(Be + 14) % 16], oe = m[(Be + 14) % 16], b = (ge >>> 19 | oe << 32 - 19) ^ (oe >>> 61 - 32 | ge << 32 - (61 - 32)) ^ ge >>> 6, $ = (oe >>> 19 | ge << 32 - 19) ^ (ge >>> 61 - 32 | oe << 32 - (61 - 32)) ^ (oe >>> 6 | ge << 32 - 6), K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, g[Be] = k & 65535 | W << 16, m[Be] = K & 65535 | G << 16
            }
            b = D, $ = j, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = p[0], $ = w[0], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, p[0] = D = k & 65535 | W << 16, w[0] = j = K & 65535 | G << 16, b = V, $ = U, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = p[1], $ = w[1], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, p[1] = V = k & 65535 | W << 16, w[1] = U = K & 65535 | G << 16, b = ie, $ = Q, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = p[2], $ = w[2], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, p[2] = ie = k & 65535 | W << 16, w[2] = Q = K & 65535 | G << 16, b = he, $ = ve, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = p[3], $ = w[3], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, p[3] = he = k & 65535 | W << 16, w[3] = ve = K & 65535 | G << 16, b = le, $ = Z, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = p[4], $ = w[4], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, p[4] = le = k & 65535 | W << 16, w[4] = Z = K & 65535 | G << 16, b = ue, $ = Ie, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = p[5], $ = w[5], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, p[5] = ue = k & 65535 | W << 16, w[5] = Ie = K & 65535 | G << 16, b = fe, $ = Oe, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = p[6], $ = w[6], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, p[6] = fe = k & 65535 | W << 16, w[6] = Oe = K & 65535 | G << 16, b = de, $ = T, K = $ & 65535, G = $ >>> 16, k = b & 65535, W = b >>> 16, b = p[7], $ = w[7], K += $ & 65535, G += $ >>> 16, k += b & 65535, W += b >>> 16, G += K >>> 16, k += G >>> 16, W += k >>> 16, p[7] = de = k & 65535 | W << 16, w[7] = T = K & 65535 | G << 16, x += 128, C -= 128
        }
        return x
    }

    function f(g) {
        var m = new n;
        m.update(g);
        var p = m.digest();
        return m.clean(), p
    }
    a.hash = f
})(gf);
(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    }), a.convertSecretKeyToX25519 = a.convertPublicKeyToX25519 = a.verify = a.sign = a.extractPublicKeyFromSecretKey = a.generateKeyPair = a.generateKeyPairFromSeed = a.SEED_LENGTH = a.SECRET_KEY_LENGTH = a.PUBLIC_KEY_LENGTH = a.SIGNATURE_LENGTH = void 0;
    const t = Zl,
        r = gf,
        n = Xl;
    a.SIGNATURE_LENGTH = 64, a.PUBLIC_KEY_LENGTH = 32, a.SECRET_KEY_LENGTH = 64, a.SEED_LENGTH = 32;

    function s(L) {
        const F = new Float64Array(16);
        if (L)
            for (let A = 0; A < L.length; A++) F[A] = L[A];
        return F
    }
    const c = new Uint8Array(32);
    c[0] = 9;
    const f = s(),
        g = s([1]),
        m = s([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
        p = s([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
        w = s([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
        R = s([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
        x = s([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

    function C(L, F) {
        for (let A = 0; A < 16; A++) L[A] = F[A] | 0
    }

    function D(L) {
        let F = 1;
        for (let A = 0; A < 16; A++) {
            let h = L[A] + F + 65535;
            F = Math.floor(h / 65536), L[A] = h - F * 65536
        }
        L[0] += F - 1 + 37 * (F - 1)
    }

    function V(L, F, A) {
        const h = ~(A - 1);
        for (let I = 0; I < 16; I++) {
            const te = h & (L[I] ^ F[I]);
            L[I] ^= te, F[I] ^= te
        }
    }

    function ie(L, F) {
        const A = s(),
            h = s();
        for (let I = 0; I < 16; I++) h[I] = F[I];
        D(h), D(h), D(h);
        for (let I = 0; I < 2; I++) {
            A[0] = h[0] - 65517;
            for (let pe = 1; pe < 15; pe++) A[pe] = h[pe] - 65535 - (A[pe - 1] >> 16 & 1), A[pe - 1] &= 65535;
            A[15] = h[15] - 32767 - (A[14] >> 16 & 1);
            const te = A[15] >> 16 & 1;
            A[14] &= 65535, V(h, A, 1 - te)
        }
        for (let I = 0; I < 16; I++) L[2 * I] = h[I] & 255, L[2 * I + 1] = h[I] >> 8
    }

    function he(L, F) {
        let A = 0;
        for (let h = 0; h < 32; h++) A |= L[h] ^ F[h];
        return (1 & A - 1 >>> 8) - 1
    }

    function le(L, F) {
        const A = new Uint8Array(32),
            h = new Uint8Array(32);
        return ie(A, L), ie(h, F), he(A, h)
    }

    function ue(L) {
        const F = new Uint8Array(32);
        return ie(F, L), F[0] & 1
    }

    function fe(L, F) {
        for (let A = 0; A < 16; A++) L[A] = F[2 * A] + (F[2 * A + 1] << 8);
        L[15] &= 32767
    }

    function de(L, F, A) {
        for (let h = 0; h < 16; h++) L[h] = F[h] + A[h]
    }

    function j(L, F, A) {
        for (let h = 0; h < 16; h++) L[h] = F[h] - A[h]
    }

    function U(L, F, A) {
        let h, I, te = 0,
            pe = 0,
            be = 0,
            Ne = 0,
            Fe = 0,
            Re = 0,
            xt = 0,
            mt = 0,
            st = 0,
            je = 0,
            Qe = 0,
            Ye = 0,
            ot = 0,
            Ue = 0,
            Xe = 0,
            De = 0,
            ke = 0,
            ht = 0,
            Me = 0,
            Pt = 0,
            Dt = 0,
            Ut = 0,
            Ht = 0,
            jt = 0,
            Wt = 0,
            rr = 0,
            qr = 0,
            Jt = 0,
            Kr = 0,
            hi = 0,
            Si = 0,
            lt = A[0],
            tt = A[1],
            ft = A[2],
            pt = A[3],
            at = A[4],
            rt = A[5],
            St = A[6],
            Ot = A[7],
            dt = A[8],
            Rt = A[9],
            gt = A[10],
            _t = A[11],
            yt = A[12],
            Je = A[13],
            At = A[14],
            Tt = A[15];
        h = F[0], te += h * lt, pe += h * tt, be += h * ft, Ne += h * pt, Fe += h * at, Re += h * rt, xt += h * St, mt += h * Ot, st += h * dt, je += h * Rt, Qe += h * gt, Ye += h * _t, ot += h * yt, Ue += h * Je, Xe += h * At, De += h * Tt, h = F[1], pe += h * lt, be += h * tt, Ne += h * ft, Fe += h * pt, Re += h * at, xt += h * rt, mt += h * St, st += h * Ot, je += h * dt, Qe += h * Rt, Ye += h * gt, ot += h * _t, Ue += h * yt, Xe += h * Je, De += h * At, ke += h * Tt, h = F[2], be += h * lt, Ne += h * tt, Fe += h * ft, Re += h * pt, xt += h * at, mt += h * rt, st += h * St, je += h * Ot, Qe += h * dt, Ye += h * Rt, ot += h * gt, Ue += h * _t, Xe += h * yt, De += h * Je, ke += h * At, ht += h * Tt, h = F[3], Ne += h * lt, Fe += h * tt, Re += h * ft, xt += h * pt, mt += h * at, st += h * rt, je += h * St, Qe += h * Ot, Ye += h * dt, ot += h * Rt, Ue += h * gt, Xe += h * _t, De += h * yt, ke += h * Je, ht += h * At, Me += h * Tt, h = F[4], Fe += h * lt, Re += h * tt, xt += h * ft, mt += h * pt, st += h * at, je += h * rt, Qe += h * St, Ye += h * Ot, ot += h * dt, Ue += h * Rt, Xe += h * gt, De += h * _t, ke += h * yt, ht += h * Je, Me += h * At, Pt += h * Tt, h = F[5], Re += h * lt, xt += h * tt, mt += h * ft, st += h * pt, je += h * at, Qe += h * rt, Ye += h * St, ot += h * Ot, Ue += h * dt, Xe += h * Rt, De += h * gt, ke += h * _t, ht += h * yt, Me += h * Je, Pt += h * At, Dt += h * Tt, h = F[6], xt += h * lt, mt += h * tt, st += h * ft, je += h * pt, Qe += h * at, Ye += h * rt, ot += h * St, Ue += h * Ot, Xe += h * dt, De += h * Rt, ke += h * gt, ht += h * _t, Me += h * yt, Pt += h * Je, Dt += h * At, Ut += h * Tt, h = F[7], mt += h * lt, st += h * tt, je += h * ft, Qe += h * pt, Ye += h * at, ot += h * rt, Ue += h * St, Xe += h * Ot, De += h * dt, ke += h * Rt, ht += h * gt, Me += h * _t, Pt += h * yt, Dt += h * Je, Ut += h * At, Ht += h * Tt, h = F[8], st += h * lt, je += h * tt, Qe += h * ft, Ye += h * pt, ot += h * at, Ue += h * rt, Xe += h * St, De += h * Ot, ke += h * dt, ht += h * Rt, Me += h * gt, Pt += h * _t, Dt += h * yt, Ut += h * Je, Ht += h * At, jt += h * Tt, h = F[9], je += h * lt, Qe += h * tt, Ye += h * ft, ot += h * pt, Ue += h * at, Xe += h * rt, De += h * St, ke += h * Ot, ht += h * dt, Me += h * Rt, Pt += h * gt, Dt += h * _t, Ut += h * yt, Ht += h * Je, jt += h * At, Wt += h * Tt, h = F[10], Qe += h * lt, Ye += h * tt, ot += h * ft, Ue += h * pt, Xe += h * at, De += h * rt, ke += h * St, ht += h * Ot, Me += h * dt, Pt += h * Rt, Dt += h * gt, Ut += h * _t, Ht += h * yt, jt += h * Je, Wt += h * At, rr += h * Tt, h = F[11], Ye += h * lt, ot += h * tt, Ue += h * ft, Xe += h * pt, De += h * at, ke += h * rt, ht += h * St, Me += h * Ot, Pt += h * dt, Dt += h * Rt, Ut += h * gt, Ht += h * _t, jt += h * yt, Wt += h * Je, rr += h * At, qr += h * Tt, h = F[12], ot += h * lt, Ue += h * tt, Xe += h * ft, De += h * pt, ke += h * at, ht += h * rt, Me += h * St, Pt += h * Ot, Dt += h * dt, Ut += h * Rt, Ht += h * gt, jt += h * _t, Wt += h * yt, rr += h * Je, qr += h * At, Jt += h * Tt, h = F[13], Ue += h * lt, Xe += h * tt, De += h * ft, ke += h * pt, ht += h * at, Me += h * rt, Pt += h * St, Dt += h * Ot, Ut += h * dt, Ht += h * Rt, jt += h * gt, Wt += h * _t, rr += h * yt, qr += h * Je, Jt += h * At, Kr += h * Tt, h = F[14], Xe += h * lt, De += h * tt, ke += h * ft, ht += h * pt, Me += h * at, Pt += h * rt, Dt += h * St, Ut += h * Ot, Ht += h * dt, jt += h * Rt, Wt += h * gt, rr += h * _t, qr += h * yt, Jt += h * Je, Kr += h * At, hi += h * Tt, h = F[15], De += h * lt, ke += h * tt, ht += h * ft, Me += h * pt, Pt += h * at, Dt += h * rt, Ut += h * St, Ht += h * Ot, jt += h * dt, Wt += h * Rt, rr += h * gt, qr += h * _t, Jt += h * yt, Kr += h * Je, hi += h * At, Si += h * Tt, te += 38 * ke, pe += 38 * ht, be += 38 * Me, Ne += 38 * Pt, Fe += 38 * Dt, Re += 38 * Ut, xt += 38 * Ht, mt += 38 * jt, st += 38 * Wt, je += 38 * rr, Qe += 38 * qr, Ye += 38 * Jt, ot += 38 * Kr, Ue += 38 * hi, Xe += 38 * Si, I = 1, h = te + I + 65535, I = Math.floor(h / 65536), te = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = be + I + 65535, I = Math.floor(h / 65536), be = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Re + I + 65535, I = Math.floor(h / 65536), Re = h - I * 65536, h = xt + I + 65535, I = Math.floor(h / 65536), xt = h - I * 65536, h = mt + I + 65535, I = Math.floor(h / 65536), mt = h - I * 65536, h = st + I + 65535, I = Math.floor(h / 65536), st = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Qe + I + 65535, I = Math.floor(h / 65536), Qe = h - I * 65536, h = Ye + I + 65535, I = Math.floor(h / 65536), Ye = h - I * 65536, h = ot + I + 65535, I = Math.floor(h / 65536), ot = h - I * 65536, h = Ue + I + 65535, I = Math.floor(h / 65536), Ue = h - I * 65536, h = Xe + I + 65535, I = Math.floor(h / 65536), Xe = h - I * 65536, h = De + I + 65535, I = Math.floor(h / 65536), De = h - I * 65536, te += I - 1 + 37 * (I - 1), I = 1, h = te + I + 65535, I = Math.floor(h / 65536), te = h - I * 65536, h = pe + I + 65535, I = Math.floor(h / 65536), pe = h - I * 65536, h = be + I + 65535, I = Math.floor(h / 65536), be = h - I * 65536, h = Ne + I + 65535, I = Math.floor(h / 65536), Ne = h - I * 65536, h = Fe + I + 65535, I = Math.floor(h / 65536), Fe = h - I * 65536, h = Re + I + 65535, I = Math.floor(h / 65536), Re = h - I * 65536, h = xt + I + 65535, I = Math.floor(h / 65536), xt = h - I * 65536, h = mt + I + 65535, I = Math.floor(h / 65536), mt = h - I * 65536, h = st + I + 65535, I = Math.floor(h / 65536), st = h - I * 65536, h = je + I + 65535, I = Math.floor(h / 65536), je = h - I * 65536, h = Qe + I + 65535, I = Math.floor(h / 65536), Qe = h - I * 65536, h = Ye + I + 65535, I = Math.floor(h / 65536), Ye = h - I * 65536, h = ot + I + 65535, I = Math.floor(h / 65536), ot = h - I * 65536, h = Ue + I + 65535, I = Math.floor(h / 65536), Ue = h - I * 65536, h = Xe + I + 65535, I = Math.floor(h / 65536), Xe = h - I * 65536, h = De + I + 65535, I = Math.floor(h / 65536), De = h - I * 65536, te += I - 1 + 37 * (I - 1), L[0] = te, L[1] = pe, L[2] = be, L[3] = Ne, L[4] = Fe, L[5] = Re, L[6] = xt, L[7] = mt, L[8] = st, L[9] = je, L[10] = Qe, L[11] = Ye, L[12] = ot, L[13] = Ue, L[14] = Xe, L[15] = De
    }

    function Q(L, F) {
        U(L, F, F)
    }

    function ve(L, F) {
        const A = s();
        let h;
        for (h = 0; h < 16; h++) A[h] = F[h];
        for (h = 253; h >= 0; h--) Q(A, A), h !== 2 && h !== 4 && U(A, A, F);
        for (h = 0; h < 16; h++) L[h] = A[h]
    }

    function Z(L, F) {
        const A = s();
        let h;
        for (h = 0; h < 16; h++) A[h] = F[h];
        for (h = 250; h >= 0; h--) Q(A, A), h !== 1 && U(A, A, F);
        for (h = 0; h < 16; h++) L[h] = A[h]
    }

    function Ie(L, F) {
        const A = s(),
            h = s(),
            I = s(),
            te = s(),
            pe = s(),
            be = s(),
            Ne = s(),
            Fe = s(),
            Re = s();
        j(A, L[1], L[0]), j(Re, F[1], F[0]), U(A, A, Re), de(h, L[0], L[1]), de(Re, F[0], F[1]), U(h, h, Re), U(I, L[3], F[3]), U(I, I, p), U(te, L[2], F[2]), de(te, te, te), j(pe, h, A), j(be, te, I), de(Ne, te, I), de(Fe, h, A), U(L[0], pe, be), U(L[1], Fe, Ne), U(L[2], Ne, be), U(L[3], pe, Fe)
    }

    function Oe(L, F, A) {
        for (let h = 0; h < 4; h++) V(L[h], F[h], A)
    }

    function T(L, F) {
        const A = s(),
            h = s(),
            I = s();
        ve(I, F[2]), U(A, F[0], I), U(h, F[1], I), ie(L, h), L[31] ^= ue(A) << 7
    }

    function b(L, F, A) {
        C(L[0], f), C(L[1], g), C(L[2], g), C(L[3], f);
        for (let h = 255; h >= 0; --h) {
            const I = A[h / 8 | 0] >> (h & 7) & 1;
            Oe(L, F, I), Ie(F, L), Ie(L, L), Oe(L, F, I)
        }
    }

    function $(L, F) {
        const A = [s(), s(), s(), s()];
        C(A[0], w), C(A[1], R), C(A[2], g), U(A[3], w, R), b(L, A, F)
    }

    function ge(L) {
        if (L.length !== a.SEED_LENGTH) throw new Error(`ed25519: seed must be ${a.SEED_LENGTH} bytes`);
        const F = (0, r.hash)(L);
        F[0] &= 248, F[31] &= 127, F[31] |= 64;
        const A = new Uint8Array(32),
            h = [s(), s(), s(), s()];
        $(h, F), T(A, h);
        const I = new Uint8Array(64);
        return I.set(L), I.set(A, 32), {
            publicKey: A,
            secretKey: I
        }
    }
    a.generateKeyPairFromSeed = ge;

    function oe(L) {
        const F = (0, t.randomBytes)(32, L),
            A = ge(F);
        return (0, n.wipe)(F), A
    }
    a.generateKeyPair = oe;

    function K(L) {
        if (L.length !== a.SECRET_KEY_LENGTH) throw new Error(`ed25519: secret key must be ${a.SECRET_KEY_LENGTH} bytes`);
        return new Uint8Array(L.subarray(32))
    }
    a.extractPublicKeyFromSecretKey = K;
    const G = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

    function k(L, F) {
        let A, h, I, te;
        for (h = 63; h >= 32; --h) {
            for (A = 0, I = h - 32, te = h - 12; I < te; ++I) F[I] += A - 16 * F[h] * G[I - (h - 32)], A = Math.floor((F[I] + 128) / 256), F[I] -= A * 256;
            F[I] += A, F[h] = 0
        }
        for (A = 0, I = 0; I < 32; I++) F[I] += A - (F[31] >> 4) * G[I], A = F[I] >> 8, F[I] &= 255;
        for (I = 0; I < 32; I++) F[I] -= A * G[I];
        for (h = 0; h < 32; h++) F[h + 1] += F[h] >> 8, L[h] = F[h] & 255
    }

    function W(L) {
        const F = new Float64Array(64);
        for (let A = 0; A < 64; A++) F[A] = L[A];
        for (let A = 0; A < 64; A++) L[A] = 0;
        k(L, F)
    }

    function ut(L, F) {
        const A = new Float64Array(64),
            h = [s(), s(), s(), s()],
            I = (0, r.hash)(L.subarray(0, 32));
        I[0] &= 248, I[31] &= 127, I[31] |= 64;
        const te = new Uint8Array(64);
        te.set(I.subarray(32), 32);
        const pe = new r.SHA512;
        pe.update(te.subarray(32)), pe.update(F);
        const be = pe.digest();
        pe.clean(), W(be), $(h, be), T(te, h), pe.reset(), pe.update(te.subarray(0, 32)), pe.update(L.subarray(32)), pe.update(F);
        const Ne = pe.digest();
        W(Ne);
        for (let Fe = 0; Fe < 32; Fe++) A[Fe] = be[Fe];
        for (let Fe = 0; Fe < 32; Fe++)
            for (let Re = 0; Re < 32; Re++) A[Fe + Re] += Ne[Fe] * I[Re];
        return k(te.subarray(32), A), te
    }
    a.sign = ut;

    function Be(L, F) {
        const A = s(),
            h = s(),
            I = s(),
            te = s(),
            pe = s(),
            be = s(),
            Ne = s();
        return C(L[2], g), fe(L[1], F), Q(I, L[1]), U(te, I, m), j(I, I, L[2]), de(te, L[2], te), Q(pe, te), Q(be, pe), U(Ne, be, pe), U(A, Ne, I), U(A, A, te), Z(A, A), U(A, A, I), U(A, A, te), U(A, A, te), U(L[0], A, te), Q(h, L[0]), U(h, h, te), le(h, I) && U(L[0], L[0], x), Q(h, L[0]), U(h, h, te), le(h, I) ? -1 : (ue(L[0]) === F[31] >> 7 && j(L[0], f, L[0]), U(L[3], L[0], L[1]), 0)
    }

    function jr(L, F, A) {
        const h = new Uint8Array(32),
            I = [s(), s(), s(), s()],
            te = [s(), s(), s(), s()];
        if (A.length !== a.SIGNATURE_LENGTH) throw new Error(`ed25519: signature must be ${a.SIGNATURE_LENGTH} bytes`);
        if (Be(te, L)) return !1;
        const pe = new r.SHA512;
        pe.update(A.subarray(0, 32)), pe.update(L), pe.update(F);
        const be = pe.digest();
        return W(be), b(I, te, be), $(te, A.subarray(32)), Ie(I, te), T(h, I), !he(A, h)
    }
    a.verify = jr;

    function xe(L) {
        let F = [s(), s(), s(), s()];
        if (Be(F, L)) throw new Error("Ed25519: invalid public key");
        let A = s(),
            h = s(),
            I = F[1];
        de(A, g, I), j(h, g, I), ve(h, h), U(A, A, h);
        let te = new Uint8Array(32);
        return ie(te, A), te
    }
    a.convertPublicKeyToX25519 = xe;

    function It(L) {
        const F = (0, r.hash)(L.subarray(0, 32));
        F[0] &= 248, F[31] &= 127, F[31] |= 64;
        const A = new Uint8Array(F.subarray(0, 32));
        return (0, n.wipe)(F), A
    }
    a.convertSecretKeyToX25519 = It
})(Fc);
const Q_ = "EdDSA",
    Y_ = "JWT",
    yf = ".",
    vf = "base64url",
    X_ = "utf8",
    Z_ = "utf8",
    ew = ":",
    tw = "did",
    rw = "key",
    cl = "base58btc",
    iw = "z",
    nw = "K36",
    sw = 32;

function mo(a) {
    return Eo(Nc(Hi(a), X_), vf)
}

function mf(a) {
    const t = Nc(nw, cl),
        r = iw + Eo(Sm([t, a]), cl);
    return [tw, rw, r].join(ew)
}

function ow(a) {
    return Eo(a, vf)
}

function aw(a) {
    return Nc([mo(a.header), mo(a.payload)].join(yf), Z_)
}

function cw(a) {
    return [mo(a.header), mo(a.payload), ow(a.signature)].join(yf)
}

function ul(a = Zl.randomBytes(sw)) {
    return Fc.generateKeyPairFromSeed(a)
}
async function uw(a, t, r, n, s = ne.fromMiliseconds(Date.now())) {
    const c = {
            alg: Q_,
            typ: Y_
        },
        f = mf(n.publicKey),
        g = s + r,
        m = {
            iss: f,
            sub: a,
            aud: t,
            iat: s,
            exp: g
        },
        p = aw({
            header: c,
            payload: m
        }),
        w = Fc.sign(n.secretKey, p);
    return cw({
        header: c,
        payload: m,
        signature: w
    })
}
const hw = "PARSE_ERROR",
    lw = "INVALID_REQUEST",
    fw = "METHOD_NOT_FOUND",
    pw = "INVALID_PARAMS",
    _f = "INTERNAL_ERROR",
    Lc = "SERVER_ERROR",
    dw = [-32700, -32600, -32601, -32602, -32603],
    Wn = {
        [hw]: {
            code: -32700,
            message: "Parse error"
        },
        [lw]: {
            code: -32600,
            message: "Invalid Request"
        },
        [fw]: {
            code: -32601,
            message: "Method not found"
        },
        [pw]: {
            code: -32602,
            message: "Invalid params"
        },
        [_f]: {
            code: -32603,
            message: "Internal error"
        },
        [Lc]: {
            code: -32e3,
            message: "Server error"
        }
    },
    wf = Lc;

function gw(a) {
    return dw.includes(a)
}

function hl(a) {
    return Object.keys(Wn).includes(a) ? Wn[a] : Wn[wf]
}

function yw(a) {
    const t = Object.values(Wn).find(r => r.code === a);
    return t || Wn[wf]
}

function bf(a, t, r) {
    return a.message.includes("getaddrinfo ENOTFOUND") || a.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${r} RPC url at ${t}`) : a
}
var Ef = {};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var xc = function(a, t) {
    return xc = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var s in n) n.hasOwnProperty(s) && (r[s] = n[s])
    }, xc(a, t)
};

function vw(a, t) {
    xc(a, t);

    function r() {
        this.constructor = a
    }
    a.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r)
}
var Pc = function() {
    return Pc = Object.assign || function(t) {
        for (var r, n = 1, s = arguments.length; n < s; n++) {
            r = arguments[n];
            for (var c in r) Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c])
        }
        return t
    }, Pc.apply(this, arguments)
};

function mw(a, t) {
    var r = {};
    for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && t.indexOf(n) < 0 && (r[n] = a[n]);
    if (a != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(a); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(a, n[s]) && (r[n[s]] = a[n[s]]);
    return r
}

function _w(a, t, r, n) {
    var s = arguments.length,
        c = s < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n,
        f;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") c = Reflect.decorate(a, t, r, n);
    else
        for (var g = a.length - 1; g >= 0; g--)(f = a[g]) && (c = (s < 3 ? f(c) : s > 3 ? f(t, r, c) : f(t, r)) || c);
    return s > 3 && c && Object.defineProperty(t, r, c), c
}

function ww(a, t) {
    return function(r, n) {
        t(r, n, a)
    }
}

function bw(a, t) {
    if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(a, t)
}

function Ew(a, t, r, n) {
    function s(c) {
        return c instanceof r ? c : new r(function(f) {
            f(c)
        })
    }
    return new(r || (r = Promise))(function(c, f) {
        function g(w) {
            try {
                p(n.next(w))
            } catch (R) {
                f(R)
            }
        }

        function m(w) {
            try {
                p(n.throw(w))
            } catch (R) {
                f(R)
            }
        }

        function p(w) {
            w.done ? c(w.value) : s(w.value).then(g, m)
        }
        p((n = n.apply(a, t || [])).next())
    })
}

function Iw(a, t) {
    var r = {
            label: 0,
            sent: function() {
                if (c[0] & 1) throw c[1];
                return c[1]
            },
            trys: [],
            ops: []
        },
        n, s, c, f;
    return f = {
        next: g(0),
        throw: g(1),
        return: g(2)
    }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
        return this
    }), f;

    function g(p) {
        return function(w) {
            return m([p, w])
        }
    }

    function m(p) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; r;) try {
            if (n = 1, s && (c = p[0] & 2 ? s.return : p[0] ? s.throw || ((c = s.return) && c.call(s), 0) : s.next) && !(c = c.call(s, p[1])).done) return c;
            switch (s = 0, c && (p = [p[0] & 2, c.value]), p[0]) {
                case 0:
                case 1:
                    c = p;
                    break;
                case 4:
                    return r.label++, {
                        value: p[1],
                        done: !1
                    };
                case 5:
                    r.label++, s = p[1], p = [0];
                    continue;
                case 7:
                    p = r.ops.pop(), r.trys.pop();
                    continue;
                default:
                    if (c = r.trys, !(c = c.length > 0 && c[c.length - 1]) && (p[0] === 6 || p[0] === 2)) {
                        r = 0;
                        continue
                    }
                    if (p[0] === 3 && (!c || p[1] > c[0] && p[1] < c[3])) {
                        r.label = p[1];
                        break
                    }
                    if (p[0] === 6 && r.label < c[1]) {
                        r.label = c[1], c = p;
                        break
                    }
                    if (c && r.label < c[2]) {
                        r.label = c[2], r.ops.push(p);
                        break
                    }
                    c[2] && r.ops.pop(), r.trys.pop();
                    continue
            }
            p = t.call(a, r)
        } catch (w) {
            p = [6, w], s = 0
        } finally {
            n = c = 0
        }
        if (p[0] & 5) throw p[1];
        return {
            value: p[0] ? p[1] : void 0,
            done: !0
        }
    }
}

function xw(a, t, r, n) {
    n === void 0 && (n = r), a[n] = t[r]
}

function Pw(a, t) {
    for (var r in a) r !== "default" && !t.hasOwnProperty(r) && (t[r] = a[r])
}

function Sc(a) {
    var t = typeof Symbol == "function" && Symbol.iterator,
        r = t && a[t],
        n = 0;
    if (r) return r.call(a);
    if (a && typeof a.length == "number") return {
        next: function() {
            return a && n >= a.length && (a = void 0), {
                value: a && a[n++],
                done: !a
            }
        }
    };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
}

function If(a, t) {
    var r = typeof Symbol == "function" && a[Symbol.iterator];
    if (!r) return a;
    var n = r.call(a),
        s, c = [],
        f;
    try {
        for (;
            (t === void 0 || t-- > 0) && !(s = n.next()).done;) c.push(s.value)
    } catch (g) {
        f = {
            error: g
        }
    } finally {
        try {
            s && !s.done && (r = n.return) && r.call(n)
        } finally {
            if (f) throw f.error
        }
    }
    return c
}

function Sw() {
    for (var a = [], t = 0; t < arguments.length; t++) a = a.concat(If(arguments[t]));
    return a
}

function Ow() {
    for (var a = 0, t = 0, r = arguments.length; t < r; t++) a += arguments[t].length;
    for (var n = Array(a), s = 0, t = 0; t < r; t++)
        for (var c = arguments[t], f = 0, g = c.length; f < g; f++, s++) n[s] = c[f];
    return n
}

function Xn(a) {
    return this instanceof Xn ? (this.v = a, this) : new Xn(a)
}

function Rw(a, t, r) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var n = r.apply(a, t || []),
        s, c = [];
    return s = {}, f("next"), f("throw"), f("return"), s[Symbol.asyncIterator] = function() {
        return this
    }, s;

    function f(x) {
        n[x] && (s[x] = function(C) {
            return new Promise(function(D, V) {
                c.push([x, C, D, V]) > 1 || g(x, C)
            })
        })
    }

    function g(x, C) {
        try {
            m(n[x](C))
        } catch (D) {
            R(c[0][3], D)
        }
    }

    function m(x) {
        x.value instanceof Xn ? Promise.resolve(x.value.v).then(p, w) : R(c[0][2], x)
    }

    function p(x) {
        g("next", x)
    }

    function w(x) {
        g("throw", x)
    }

    function R(x, C) {
        x(C), c.shift(), c.length && g(c[0][0], c[0][1])
    }
}

function Aw(a) {
    var t, r;
    return t = {}, n("next"), n("throw", function(s) {
        throw s
    }), n("return"), t[Symbol.iterator] = function() {
        return this
    }, t;

    function n(s, c) {
        t[s] = a[s] ? function(f) {
            return (r = !r) ? {
                value: Xn(a[s](f)),
                done: s === "return"
            } : c ? c(f) : f
        } : c
    }
}

function Tw(a) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var t = a[Symbol.asyncIterator],
        r;
    return t ? t.call(a) : (a = typeof Sc == "function" ? Sc(a) : a[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
        return this
    }, r);

    function n(c) {
        r[c] = a[c] && function(f) {
            return new Promise(function(g, m) {
                f = a[c](f), s(g, m, f.done, f.value)
            })
        }
    }

    function s(c, f, g, m) {
        Promise.resolve(m).then(function(p) {
            c({
                value: p,
                done: g
            })
        }, f)
    }
}

function Cw(a, t) {
    return Object.defineProperty ? Object.defineProperty(a, "raw", {
        value: t
    }) : a.raw = t, a
}

function $w(a) {
    if (a && a.__esModule) return a;
    var t = {};
    if (a != null)
        for (var r in a) Object.hasOwnProperty.call(a, r) && (t[r] = a[r]);
    return t.default = a, t
}

function Nw(a) {
    return a && a.__esModule ? a : {
        default: a
    }
}

function Dw(a, t) {
    if (!t.has(a)) throw new TypeError("attempted to get private field on non-instance");
    return t.get(a)
}

function Fw(a, t, r) {
    if (!t.has(a)) throw new TypeError("attempted to set private field on non-instance");
    return t.set(a, r), r
}
const Lw = Object.freeze(Object.defineProperty({
        __proto__: null,
        get __assign() {
            return Pc
        },
        __asyncDelegator: Aw,
        __asyncGenerator: Rw,
        __asyncValues: Tw,
        __await: Xn,
        __awaiter: Ew,
        __classPrivateFieldGet: Dw,
        __classPrivateFieldSet: Fw,
        __createBinding: xw,
        __decorate: _w,
        __exportStar: Pw,
        __extends: vw,
        __generator: Iw,
        __importDefault: Nw,
        __importStar: $w,
        __makeTemplateObject: Cw,
        __metadata: bw,
        __param: ww,
        __read: If,
        __rest: mw,
        __spread: Sw,
        __spreadArrays: Ow,
        __values: Sc
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    jw = bo(Lw);
var ii = {},
    ll;

function qw() {
    if (ll) return ii;
    ll = 1, Object.defineProperty(ii, "__esModule", {
        value: !0
    }), ii.isBrowserCryptoAvailable = ii.getSubtleCrypto = ii.getBrowerCrypto = void 0;

    function a() {
        return (globalThis == null ? void 0 : globalThis.crypto) || (globalThis == null ? void 0 : globalThis.msCrypto) || {}
    }
    ii.getBrowerCrypto = a;

    function t() {
        const n = a();
        return n.subtle || n.webkitSubtle
    }
    ii.getSubtleCrypto = t;

    function r() {
        return !!a() && !!t()
    }
    return ii.isBrowserCryptoAvailable = r, ii
}
var ni = {},
    fl;

function Mw() {
    if (fl) return ni;
    fl = 1, Object.defineProperty(ni, "__esModule", {
        value: !0
    }), ni.isBrowser = ni.isNode = ni.isReactNative = void 0;

    function a() {
        return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative"
    }
    ni.isReactNative = a;

    function t() {
        return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u"
    }
    ni.isNode = t;

    function r() {
        return !a() && !t()
    }
    return ni.isBrowser = r, ni
}(function(a) {
    Object.defineProperty(a, "__esModule", {
        value: !0
    });
    const t = jw;
    t.__exportStar(qw(), a), t.__exportStar(Mw(), a)
})(Ef);

function jc(a = 3) {
    const t = Date.now() * Math.pow(10, a),
        r = Math.floor(Math.random() * Math.pow(10, a));
    return t + r
}

function xf(a = 6) {
    return BigInt(jc(a))
}

function yn(a, t, r) {
    return {
        id: r || jc(),
        jsonrpc: "2.0",
        method: a,
        params: t
    }
}

function qc(a, t) {
    return {
        id: a,
        jsonrpc: "2.0",
        result: t
    }
}

function xo(a, t, r) {
    return {
        id: a,
        jsonrpc: "2.0",
        error: zw(t, r)
    }
}

function zw(a, t) {
    return typeof a > "u" ? hl(_f) : (typeof a == "string" && (a = Object.assign(Object.assign({}, hl(Lc)), {
        message: a
    })), typeof t < "u" && (a.data = t), gw(a.code) && (a = yw(a.code)), a)
}
class Uw {}
class Hw extends Uw {
    constructor() {
        super()
    }
}
class Bw extends Hw {
    constructor(t) {
        super()
    }
}
const kw = "^https?:",
    Kw = "^wss?:";

function Vw(a) {
    const t = a.match(new RegExp(/^\w+:/, "gi"));
    if (!(!t || !t.length)) return t[0]
}

function Pf(a, t) {
    const r = Vw(a);
    return typeof r > "u" ? !1 : new RegExp(t).test(r)
}

function pl(a) {
    return Pf(a, kw)
}

function dl(a) {
    return Pf(a, Kw)
}

function Gw(a) {
    return new RegExp("wss?://localhost(:d{2,5})?").test(a)
}

function Sf(a) {
    return typeof a == "object" && "id" in a && "jsonrpc" in a && a.jsonrpc === "2.0"
}

function Mc(a) {
    return Sf(a) && "method" in a
}

function Po(a) {
    return Sf(a) && (ai(a) || Lr(a))
}

function ai(a) {
    return "result" in a
}

function Lr(a) {
    return "error" in a
}
class ci extends Bw {
    constructor(t) {
        super(t), this.events = new Or.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners()
    }
    async connect(t = this.connection) {
        await this.open(t)
    }
    async disconnect() {
        await this.close()
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async request(t, r) {
        return this.requestStrict(yn(t.method, t.params || [], t.id || xf().toString()), r)
    }
    async requestStrict(t, r) {
        return new Promise(async (n, s) => {
            if (!this.connection.connected) try {
                await this.open()
            } catch (c) {
                s(c)
            }
            this.events.on(`${t.id}`, c => {
                Lr(c) ? s(c.error) : n(c.result)
            });
            try {
                await this.connection.send(t, r)
            } catch (c) {
                s(c)
            }
        })
    }
    setConnection(t = this.connection) {
        return t
    }
    onPayload(t) {
        this.events.emit("payload", t), Po(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", {
            type: t.method,
            data: t.params
        })
    }
    onClose(t) {
        t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason?`(${t.reason})`:""}`)), this.events.emit("disconnect")
    }
    async open(t = this.connection) {
        this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
    }
    async close() {
        await this.connection.close()
    }
    registerEventListeners() {
        this.hasRegisteredEventListeners || (this.connection.on("payload", t => this.onPayload(t)), this.connection.on("close", t => this.onClose(t)), this.connection.on("error", t => this.events.emit("error", t)), this.connection.on("register_error", t => this.onClose()), this.hasRegisteredEventListeners = !0)
    }
}
const Ww = () => typeof WebSocket < "u" ? WebSocket : typeof globalThis < "u" && typeof globalThis.WebSocket < "u" ? globalThis.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"),
    Jw = () => typeof WebSocket < "u" || typeof globalThis < "u" && typeof globalThis.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u",
    gl = a => a.split("?")[0],
    yl = 10,
    Qw = Ww();
class Yw {
    constructor(t) {
        if (this.url = t, this.events = new Or.EventEmitter, this.registering = !1, !dl(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        this.url = t
    }
    get connected() {
        return typeof this.socket < "u"
    }
    get connecting() {
        return this.registering
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async open(t = this.url) {
        await this.register(t)
    }
    async close() {
        return new Promise((t, r) => {
            if (typeof this.socket > "u") {
                r(new Error("Connection already closed"));
                return
            }
            this.socket.onclose = n => {
                this.onClose(n), t()
            }, this.socket.close()
        })
    }
    async send(t, r) {
        typeof this.socket > "u" && (this.socket = await this.register());
        try {
            this.socket.send(Hi(t))
        } catch (n) {
            this.onError(t.id, n)
        }
    }
    register(t = this.url) {
        if (!dl(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
        if (this.registering) {
            const r = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((n, s) => {
                this.events.once("register_error", c => {
                    this.resetMaxListeners(), s(c)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.socket > "u") return s(new Error("WebSocket connection is missing or invalid"));
                    n(this.socket)
                })
            })
        }
        return this.url = t, this.registering = !0, new Promise((r, n) => {
            const s = Ef.isReactNative() ? void 0 : {
                    rejectUnauthorized: !Gw(t)
                },
                c = new Qw(t, [], s);
            Jw() ? c.onerror = f => {
                const g = f;
                n(this.emitError(g.error))
            } : c.on("error", f => {
                n(this.emitError(f))
            }), c.onopen = () => {
                this.onOpen(c), r(c)
            }
        })
    }
    onOpen(t) {
        t.onmessage = r => this.onPayload(r), t.onclose = r => this.onClose(r), this.socket = t, this.registering = !1, this.events.emit("open")
    }
    onClose(t) {
        this.socket = void 0, this.registering = !1, this.events.emit("close", t)
    }
    onPayload(t) {
        if (typeof t.data > "u") return;
        const r = typeof t.data == "string" ? es(t.data) : t.data;
        this.events.emit("payload", r)
    }
    onError(t, r) {
        const n = this.parseError(r),
            s = n.message || n.toString(),
            c = xo(t, s);
        this.events.emit("payload", c)
    }
    parseError(t, r = this.url) {
        return bf(t, gl(r), "WS")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > yl && this.events.setMaxListeners(yl)
    }
    emitError(t) {
        const r = this.parseError(new Error((t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${gl(this.url)}`));
        return this.events.emit("register_error", r), r
    }
}
var _o = {
    exports: {}
};
_o.exports;
(function(a, t) {
    var r = 200,
        n = "__lodash_hash_undefined__",
        s = 1,
        c = 2,
        f = 9007199254740991,
        g = "[object Arguments]",
        m = "[object Array]",
        p = "[object AsyncFunction]",
        w = "[object Boolean]",
        R = "[object Date]",
        x = "[object Error]",
        C = "[object Function]",
        D = "[object GeneratorFunction]",
        V = "[object Map]",
        ie = "[object Number]",
        he = "[object Null]",
        le = "[object Object]",
        ue = "[object Promise]",
        fe = "[object Proxy]",
        de = "[object RegExp]",
        j = "[object Set]",
        U = "[object String]",
        Q = "[object Symbol]",
        ve = "[object Undefined]",
        Z = "[object WeakMap]",
        Ie = "[object ArrayBuffer]",
        Oe = "[object DataView]",
        T = "[object Float32Array]",
        b = "[object Float64Array]",
        $ = "[object Int8Array]",
        ge = "[object Int16Array]",
        oe = "[object Int32Array]",
        K = "[object Uint8Array]",
        G = "[object Uint8ClampedArray]",
        k = "[object Uint16Array]",
        W = "[object Uint32Array]",
        ut = /[\\^$.*+?()[\]{}|]/g,
        Be = /^\[object .+?Constructor\]$/,
        jr = /^(?:0|[1-9]\d*)$/,
        xe = {};
    xe[T] = xe[b] = xe[$] = xe[ge] = xe[oe] = xe[K] = xe[G] = xe[k] = xe[W] = !0, xe[g] = xe[m] = xe[Ie] = xe[w] = xe[Oe] = xe[R] = xe[x] = xe[C] = xe[V] = xe[ie] = xe[le] = xe[de] = xe[j] = xe[U] = xe[Z] = !1;
    var It = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis,
        L = typeof self == "object" && self && self.Object === Object && self,
        F = It || L || Function("return this")(),
        A = t && !t.nodeType && t,
        h = A && !0 && a && !a.nodeType && a,
        I = h && h.exports === A,
        te = I && It.process,
        pe = function() {
            try {
                return te && te.binding && te.binding("util")
            } catch {}
        }(),
        be = pe && pe.isTypedArray;

    function Ne(v, P) {
        for (var H = -1, Y = v == null ? 0 : v.length, Ve = 0, me = []; ++H < Y;) {
            var Ze = v[H];
            P(Ze, H, v) && (me[Ve++] = Ze)
        }
        return me
    }

    function Fe(v, P) {
        for (var H = -1, Y = P.length, Ve = v.length; ++H < Y;) v[Ve + H] = P[H];
        return v
    }

    function Re(v, P) {
        for (var H = -1, Y = v == null ? 0 : v.length; ++H < Y;)
            if (P(v[H], H, v)) return !0;
        return !1
    }

    function xt(v, P) {
        for (var H = -1, Y = Array(v); ++H < v;) Y[H] = P(H);
        return Y
    }

    function mt(v) {
        return function(P) {
            return v(P)
        }
    }

    function st(v, P) {
        return v.has(P)
    }

    function je(v, P) {
        return v == null ? void 0 : v[P]
    }

    function Qe(v) {
        var P = -1,
            H = Array(v.size);
        return v.forEach(function(Y, Ve) {
            H[++P] = [Ve, Y]
        }), H
    }

    function Ye(v, P) {
        return function(H) {
            return v(P(H))
        }
    }

    function ot(v) {
        var P = -1,
            H = Array(v.size);
        return v.forEach(function(Y) {
            H[++P] = Y
        }), H
    }
    var Ue = Array.prototype,
        Xe = Function.prototype,
        De = Object.prototype,
        ke = F["__core-js_shared__"],
        ht = Xe.toString,
        Me = De.hasOwnProperty,
        Pt = function() {
            var v = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "");
            return v ? "Symbol(src)_1." + v : ""
        }(),
        Dt = De.toString,
        Ut = RegExp("^" + ht.call(Me).replace(ut, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Ht = I ? F.Buffer : void 0,
        jt = F.Symbol,
        Wt = F.Uint8Array,
        rr = De.propertyIsEnumerable,
        qr = Ue.splice,
        Jt = jt ? jt.toStringTag : void 0,
        Kr = Object.getOwnPropertySymbols,
        hi = Ht ? Ht.isBuffer : void 0,
        Si = Ye(Object.keys, Object),
        lt = lr(F, "DataView"),
        tt = lr(F, "Map"),
        ft = lr(F, "Promise"),
        pt = lr(F, "Set"),
        at = lr(F, "WeakMap"),
        rt = lr(Object, "create"),
        St = Gr(lt),
        Ot = Gr(tt),
        dt = Gr(ft),
        Rt = Gr(pt),
        gt = Gr(at),
        _t = jt ? jt.prototype : void 0,
        yt = _t ? _t.valueOf : void 0;

    function Je(v) {
        var P = -1,
            H = v == null ? 0 : v.length;
        for (this.clear(); ++P < H;) {
            var Y = v[P];
            this.set(Y[0], Y[1])
        }
    }

    function At() {
        this.__data__ = rt ? rt(null) : {}, this.size = 0
    }

    function Tt(v) {
        var P = this.has(v) && delete this.__data__[v];
        return this.size -= P ? 1 : 0, P
    }

    function Ro(v) {
        var P = this.__data__;
        if (rt) {
            var H = P[v];
            return H === n ? void 0 : H
        }
        return Me.call(P, v) ? P[v] : void 0
    }

    function Ao(v) {
        var P = this.__data__;
        return rt ? P[v] !== void 0 : Me.call(P, v)
    }

    function To(v, P) {
        var H = this.__data__;
        return this.size += this.has(v) ? 0 : 1, H[v] = rt && P === void 0 ? n : P, this
    }
    Je.prototype.clear = At, Je.prototype.delete = Tt, Je.prototype.get = Ro, Je.prototype.has = Ao, Je.prototype.set = To;

    function vr(v) {
        var P = -1,
            H = v == null ? 0 : v.length;
        for (this.clear(); ++P < H;) {
            var Y = v[P];
            this.set(Y[0], Y[1])
        }
    }

    function Co() {
        this.__data__ = [], this.size = 0
    }

    function $o(v) {
        var P = this.__data__,
            H = Oi(P, v);
        if (H < 0) return !1;
        var Y = P.length - 1;
        return H == Y ? P.pop() : qr.call(P, H, 1), --this.size, !0
    }

    function No(v) {
        var P = this.__data__,
            H = Oi(P, v);
        return H < 0 ? void 0 : P[H][1]
    }

    function Do(v) {
        return Oi(this.__data__, v) > -1
    }

    function Fo(v, P) {
        var H = this.__data__,
            Y = Oi(H, v);
        return Y < 0 ? (++this.size, H.push([v, P])) : H[Y][1] = P, this
    }
    vr.prototype.clear = Co, vr.prototype.delete = $o, vr.prototype.get = No, vr.prototype.has = Do, vr.prototype.set = Fo;

    function Vr(v) {
        var P = -1,
            H = v == null ? 0 : v.length;
        for (this.clear(); ++P < H;) {
            var Y = v[P];
            this.set(Y[0], Y[1])
        }
    }

    function Vi() {
        this.size = 0, this.__data__ = {
            hash: new Je,
            map: new(tt || vr),
            string: new Je
        }
    }

    function Lo(v) {
        var P = li(this, v).delete(v);
        return this.size -= P ? 1 : 0, P
    }

    function Gi(v) {
        return li(this, v).get(v)
    }

    function jo(v) {
        return li(this, v).has(v)
    }

    function qo(v, P) {
        var H = li(this, v),
            Y = H.size;
        return H.set(v, P), this.size += H.size == Y ? 0 : 1, this
    }
    Vr.prototype.clear = Vi, Vr.prototype.delete = Lo, Vr.prototype.get = Gi, Vr.prototype.has = jo, Vr.prototype.set = qo;

    function Wi(v) {
        var P = -1,
            H = v == null ? 0 : v.length;
        for (this.__data__ = new Vr; ++P < H;) this.add(v[P])
    }

    function rs(v) {
        return this.__data__.set(v, n), this
    }

    function is(v) {
        return this.__data__.has(v)
    }
    Wi.prototype.add = Wi.prototype.push = rs, Wi.prototype.has = is;

    function Rr(v) {
        var P = this.__data__ = new vr(v);
        this.size = P.size
    }

    function Mo() {
        this.__data__ = new vr, this.size = 0
    }

    function zo(v) {
        var P = this.__data__,
            H = P.delete(v);
        return this.size = P.size, H
    }

    function Uo(v) {
        return this.__data__.get(v)
    }

    function Ho(v) {
        return this.__data__.has(v)
    }

    function ns(v, P) {
        var H = this.__data__;
        if (H instanceof vr) {
            var Y = H.__data__;
            if (!tt || Y.length < r - 1) return Y.push([v, P]), this.size = ++H.size, this;
            H = this.__data__ = new Vr(Y)
        }
        return H.set(v, P), this.size = H.size, this
    }
    Rr.prototype.clear = Mo, Rr.prototype.delete = zo, Rr.prototype.get = Uo, Rr.prototype.has = Ho, Rr.prototype.set = ns;

    function ss(v, P) {
        var H = Yi(v),
            Y = !H && vs(v),
            Ve = !H && !Y && bn(v),
            me = !H && !Y && !Ve && ws(v),
            Ze = H || Y || Ve || me,
            Ct = Ze ? xt(v.length, String) : [],
            Te = Ct.length;
        for (var Ge in v)(P || Me.call(v, Ge)) && !(Ze && (Ge == "length" || Ve && (Ge == "offset" || Ge == "parent") || me && (Ge == "buffer" || Ge == "byteLength" || Ge == "byteOffset") || fs(Ge, Te))) && Ct.push(Ge);
        return Ct
    }

    function Oi(v, P) {
        for (var H = v.length; H--;)
            if (ys(v[H][0], P)) return H;
        return -1
    }

    function _n(v, P, H) {
        var Y = P(v);
        return Yi(v) ? Y : Fe(Y, H(v))
    }

    function Ri(v) {
        return v == null ? v === void 0 ? ve : he : Jt && Jt in Object(v) ? hs(v) : Ko(v)
    }

    function wn(v) {
        return Ti(v) && Ri(v) == g
    }

    function Ai(v, P, H, Y, Ve) {
        return v === P ? !0 : v == null || P == null || !Ti(v) && !Ti(P) ? v !== v && P !== P : os(v, P, H, Y, Ai, Ve)
    }

    function os(v, P, H, Y, Ve, me) {
        var Ze = Yi(v),
            Ct = Yi(P),
            Te = Ze ? m : Mr(v),
            Ge = Ct ? m : Mr(P);
        Te = Te == g ? le : Te, Ge = Ge == g ? le : Ge;
        var wt = Te == le,
            ir = Ge == le,
            $t = Te == Ge;
        if ($t && bn(v)) {
            if (!bn(P)) return !1;
            Ze = !0, wt = !1
        }
        if ($t && !wt) return me || (me = new Rr), Ze || ws(v) ? Ji(v, P, H, Y, Ve, me) : ko(v, P, Te, H, Y, Ve, me);
        if (!(H & s)) {
            var et = wt && Me.call(v, "__wrapped__"),
                Qt = ir && Me.call(P, "__wrapped__");
            if (et || Qt) {
                var Ar = et ? v.value() : v,
                    mr = Qt ? P.value() : P;
                return me || (me = new Rr), Ve(Ar, mr, H, Y, me)
            }
        }
        return $t ? (me || (me = new Rr), us(v, P, H, Y, Ve, me)) : !1
    }

    function Bo(v) {
        if (!_s(v) || ds(v)) return !1;
        var P = Xi(v) ? Ut : Be;
        return P.test(Gr(v))
    }

    function as(v) {
        return Ti(v) && ms(v.length) && !!xe[Ri(v)]
    }

    function cs(v) {
        if (!gs(v)) return Si(v);
        var P = [];
        for (var H in Object(v)) Me.call(v, H) && H != "constructor" && P.push(H);
        return P
    }

    function Ji(v, P, H, Y, Ve, me) {
        var Ze = H & s,
            Ct = v.length,
            Te = P.length;
        if (Ct != Te && !(Ze && Te > Ct)) return !1;
        var Ge = me.get(v);
        if (Ge && me.get(P)) return Ge == P;
        var wt = -1,
            ir = !0,
            $t = H & c ? new Wi : void 0;
        for (me.set(v, P), me.set(P, v); ++wt < Ct;) {
            var et = v[wt],
                Qt = P[wt];
            if (Y) var Ar = Ze ? Y(Qt, et, wt, P, v, me) : Y(et, Qt, wt, v, P, me);
            if (Ar !== void 0) {
                if (Ar) continue;
                ir = !1;
                break
            }
            if ($t) {
                if (!Re(P, function(mr, zr) {
                        if (!st($t, zr) && (et === mr || Ve(et, mr, H, Y, me))) return $t.push(zr)
                    })) {
                    ir = !1;
                    break
                }
            } else if (!(et === Qt || Ve(et, Qt, H, Y, me))) {
                ir = !1;
                break
            }
        }
        return me.delete(v), me.delete(P), ir
    }

    function ko(v, P, H, Y, Ve, me, Ze) {
        switch (H) {
            case Oe:
                if (v.byteLength != P.byteLength || v.byteOffset != P.byteOffset) return !1;
                v = v.buffer, P = P.buffer;
            case Ie:
                return !(v.byteLength != P.byteLength || !me(new Wt(v), new Wt(P)));
            case w:
            case R:
            case ie:
                return ys(+v, +P);
            case x:
                return v.name == P.name && v.message == P.message;
            case de:
            case U:
                return v == P + "";
            case V:
                var Ct = Qe;
            case j:
                var Te = Y & s;
                if (Ct || (Ct = ot), v.size != P.size && !Te) return !1;
                var Ge = Ze.get(v);
                if (Ge) return Ge == P;
                Y |= c, Ze.set(v, P);
                var wt = Ji(Ct(v), Ct(P), Y, Ve, me, Ze);
                return Ze.delete(v), wt;
            case Q:
                if (yt) return yt.call(v) == yt.call(P)
        }
        return !1
    }

    function us(v, P, H, Y, Ve, me) {
        var Ze = H & s,
            Ct = Qi(v),
            Te = Ct.length,
            Ge = Qi(P),
            wt = Ge.length;
        if (Te != wt && !Ze) return !1;
        for (var ir = Te; ir--;) {
            var $t = Ct[ir];
            if (!(Ze ? $t in P : Me.call(P, $t))) return !1
        }
        var et = me.get(v);
        if (et && me.get(P)) return et == P;
        var Qt = !0;
        me.set(v, P), me.set(P, v);
        for (var Ar = Ze; ++ir < Te;) {
            $t = Ct[ir];
            var mr = v[$t],
                zr = P[$t];
            if (Y) var En = Ze ? Y(zr, mr, $t, P, v, me) : Y(mr, zr, $t, v, P, me);
            if (!(En === void 0 ? mr === zr || Ve(mr, zr, H, Y, me) : En)) {
                Qt = !1;
                break
            }
            Ar || (Ar = $t == "constructor")
        }
        if (Qt && !Ar) {
            var Ci = v.constructor,
                qt = P.constructor;
            Ci != qt && "constructor" in v && "constructor" in P && !(typeof Ci == "function" && Ci instanceof Ci && typeof qt == "function" && qt instanceof qt) && (Qt = !1)
        }
        return me.delete(v), me.delete(P), Qt
    }

    function Qi(v) {
        return _n(v, Wo, ls)
    }

    function li(v, P) {
        var H = v.__data__;
        return ps(P) ? H[typeof P == "string" ? "string" : "hash"] : H.map
    }

    function lr(v, P) {
        var H = je(v, P);
        return Bo(H) ? H : void 0
    }

    function hs(v) {
        var P = Me.call(v, Jt),
            H = v[Jt];
        try {
            v[Jt] = void 0;
            var Y = !0
        } catch {}
        var Ve = Dt.call(v);
        return Y && (P ? v[Jt] = H : delete v[Jt]), Ve
    }
    var ls = Kr ? function(v) {
            return v == null ? [] : (v = Object(v), Ne(Kr(v), function(P) {
                return rr.call(v, P)
            }))
        } : Ke,
        Mr = Ri;
    (lt && Mr(new lt(new ArrayBuffer(1))) != Oe || tt && Mr(new tt) != V || ft && Mr(ft.resolve()) != ue || pt && Mr(new pt) != j || at && Mr(new at) != Z) && (Mr = function(v) {
        var P = Ri(v),
            H = P == le ? v.constructor : void 0,
            Y = H ? Gr(H) : "";
        if (Y) switch (Y) {
            case St:
                return Oe;
            case Ot:
                return V;
            case dt:
                return ue;
            case Rt:
                return j;
            case gt:
                return Z
        }
        return P
    });

    function fs(v, P) {
        return P = P ? ? f, !!P && (typeof v == "number" || jr.test(v)) && v > -1 && v % 1 == 0 && v < P
    }

    function ps(v) {
        var P = typeof v;
        return P == "string" || P == "number" || P == "symbol" || P == "boolean" ? v !== "__proto__" : v === null
    }

    function ds(v) {
        return !!Pt && Pt in v
    }

    function gs(v) {
        var P = v && v.constructor,
            H = typeof P == "function" && P.prototype || De;
        return v === H
    }

    function Ko(v) {
        return Dt.call(v)
    }

    function Gr(v) {
        if (v != null) {
            try {
                return ht.call(v)
            } catch {}
            try {
                return v + ""
            } catch {}
        }
        return ""
    }

    function ys(v, P) {
        return v === P || v !== v && P !== P
    }
    var vs = wn(function() {
            return arguments
        }()) ? wn : function(v) {
            return Ti(v) && Me.call(v, "callee") && !rr.call(v, "callee")
        },
        Yi = Array.isArray;

    function Vo(v) {
        return v != null && ms(v.length) && !Xi(v)
    }
    var bn = hi || He;

    function Go(v, P) {
        return Ai(v, P)
    }

    function Xi(v) {
        if (!_s(v)) return !1;
        var P = Ri(v);
        return P == C || P == D || P == p || P == fe
    }

    function ms(v) {
        return typeof v == "number" && v > -1 && v % 1 == 0 && v <= f
    }

    function _s(v) {
        var P = typeof v;
        return v != null && (P == "object" || P == "function")
    }

    function Ti(v) {
        return v != null && typeof v == "object"
    }
    var ws = be ? mt(be) : as;

    function Wo(v) {
        return Vo(v) ? ss(v) : cs(v)
    }

    function Ke() {
        return []
    }

    function He() {
        return !1
    }
    a.exports = Go
})(_o, _o.exports);
var Xw = _o.exports;
const Zw = ef(Xw);

function eb(a, t) {
    if (a.length >= 255) throw new TypeError("Alphabet too long");
    for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
    for (var s = 0; s < a.length; s++) {
        var c = a.charAt(s),
            f = c.charCodeAt(0);
        if (r[f] !== 255) throw new TypeError(c + " is ambiguous");
        r[f] = s
    }
    var g = a.length,
        m = a.charAt(0),
        p = Math.log(g) / Math.log(256),
        w = Math.log(256) / Math.log(g);

    function R(D) {
        if (D instanceof Uint8Array || (ArrayBuffer.isView(D) ? D = new Uint8Array(D.buffer, D.byteOffset, D.byteLength) : Array.isArray(D) && (D = Uint8Array.from(D))), !(D instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
        if (D.length === 0) return "";
        for (var V = 0, ie = 0, he = 0, le = D.length; he !== le && D[he] === 0;) he++, V++;
        for (var ue = (le - he) * w + 1 >>> 0, fe = new Uint8Array(ue); he !== le;) {
            for (var de = D[he], j = 0, U = ue - 1;
                (de !== 0 || j < ie) && U !== -1; U--, j++) de += 256 * fe[U] >>> 0, fe[U] = de % g >>> 0, de = de / g >>> 0;
            if (de !== 0) throw new Error("Non-zero carry");
            ie = j, he++
        }
        for (var Q = ue - ie; Q !== ue && fe[Q] === 0;) Q++;
        for (var ve = m.repeat(V); Q < ue; ++Q) ve += a.charAt(fe[Q]);
        return ve
    }

    function x(D) {
        if (typeof D != "string") throw new TypeError("Expected String");
        if (D.length === 0) return new Uint8Array;
        var V = 0;
        if (D[V] !== " ") {
            for (var ie = 0, he = 0; D[V] === m;) ie++, V++;
            for (var le = (D.length - V) * p + 1 >>> 0, ue = new Uint8Array(le); D[V];) {
                var fe = r[D.charCodeAt(V)];
                if (fe === 255) return;
                for (var de = 0, j = le - 1;
                    (fe !== 0 || de < he) && j !== -1; j--, de++) fe += g * ue[j] >>> 0, ue[j] = fe % 256 >>> 0, fe = fe / 256 >>> 0;
                if (fe !== 0) throw new Error("Non-zero carry");
                he = de, V++
            }
            if (D[V] !== " ") {
                for (var U = le - he; U !== le && ue[U] === 0;) U++;
                for (var Q = new Uint8Array(ie + (le - U)), ve = ie; U !== le;) Q[ve++] = ue[U++];
                return Q
            }
        }
    }

    function C(D) {
        var V = x(D);
        if (V) return V;
        throw new Error(`Non-${t} character`)
    }
    return {
        encode: R,
        decodeUnsafe: x,
        decode: C
    }
}
var tb = eb,
    rb = tb;
const Of = a => {
        if (a instanceof Uint8Array && a.constructor.name === "Uint8Array") return a;
        if (a instanceof ArrayBuffer) return new Uint8Array(a);
        if (ArrayBuffer.isView(a)) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
        throw new Error("Unknown type, must be binary type")
    },
    ib = a => new TextEncoder().encode(a),
    nb = a => new TextDecoder().decode(a);
class sb {
    constructor(t, r, n) {
        this.name = t, this.prefix = r, this.baseEncode = n
    }
    encode(t) {
        if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
        throw Error("Unknown type, must be binary type")
    }
}
class ob {
    constructor(t, r, n) {
        if (this.name = t, this.prefix = r, r.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
        this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n
    }
    decode(t) {
        if (typeof t == "string") {
            if (t.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
            return this.baseDecode(t.slice(this.prefix.length))
        } else throw Error("Can only multibase decode strings")
    }
    or(t) {
        return Rf(this, t)
    }
}
class ab {
    constructor(t) {
        this.decoders = t
    }
    or(t) {
        return Rf(this, t)
    }
    decode(t) {
        const r = t[0],
            n = this.decoders[r];
        if (n) return n.decode(t);
        throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
    }
}
const Rf = (a, t) => new ab({ ...a.decoders || {
        [a.prefix]: a
    },
    ...t.decoders || {
        [t.prefix]: t
    }
});
class cb {
    constructor(t, r, n, s) {
        this.name = t, this.prefix = r, this.baseEncode = n, this.baseDecode = s, this.encoder = new sb(t, r, n), this.decoder = new ob(t, r, s)
    }
    encode(t) {
        return this.encoder.encode(t)
    }
    decode(t) {
        return this.decoder.decode(t)
    }
}
const So = ({
        name: a,
        prefix: t,
        encode: r,
        decode: n
    }) => new cb(a, t, r, n),
    ts = ({
        prefix: a,
        name: t,
        alphabet: r
    }) => {
        const {
            encode: n,
            decode: s
        } = rb(r, t);
        return So({
            prefix: a,
            name: t,
            encode: n,
            decode: c => Of(s(c))
        })
    },
    ub = (a, t, r, n) => {
        const s = {};
        for (let w = 0; w < t.length; ++w) s[t[w]] = w;
        let c = a.length;
        for (; a[c - 1] === "=";) --c;
        const f = new Uint8Array(c * r / 8 | 0);
        let g = 0,
            m = 0,
            p = 0;
        for (let w = 0; w < c; ++w) {
            const R = s[a[w]];
            if (R === void 0) throw new SyntaxError(`Non-${n} character`);
            m = m << r | R, g += r, g >= 8 && (g -= 8, f[p++] = 255 & m >> g)
        }
        if (g >= r || 255 & m << 8 - g) throw new SyntaxError("Unexpected end of data");
        return f
    },
    hb = (a, t, r) => {
        const n = t[t.length - 1] === "=",
            s = (1 << r) - 1;
        let c = "",
            f = 0,
            g = 0;
        for (let m = 0; m < a.length; ++m)
            for (g = g << 8 | a[m], f += 8; f > r;) f -= r, c += t[s & g >> f];
        if (f && (c += t[s & g << r - f]), n)
            for (; c.length * r & 7;) c += "=";
        return c
    },
    kt = ({
        name: a,
        prefix: t,
        bitsPerChar: r,
        alphabet: n
    }) => So({
        prefix: t,
        name: a,
        encode(s) {
            return hb(s, n, r)
        },
        decode(s) {
            return ub(s, n, r, a)
        }
    }),
    lb = So({
        prefix: "\0",
        name: "identity",
        encode: a => nb(a),
        decode: a => ib(a)
    });
var fb = Object.freeze({
    __proto__: null,
    identity: lb
});
const pb = kt({
    prefix: "0",
    name: "base2",
    alphabet: "01",
    bitsPerChar: 1
});
var db = Object.freeze({
    __proto__: null,
    base2: pb
});
const gb = kt({
    prefix: "7",
    name: "base8",
    alphabet: "01234567",
    bitsPerChar: 3
});
var yb = Object.freeze({
    __proto__: null,
    base8: gb
});
const vb = ts({
    prefix: "9",
    name: "base10",
    alphabet: "0123456789"
});
var mb = Object.freeze({
    __proto__: null,
    base10: vb
});
const _b = kt({
        prefix: "f",
        name: "base16",
        alphabet: "0123456789abcdef",
        bitsPerChar: 4
    }),
    wb = kt({
        prefix: "F",
        name: "base16upper",
        alphabet: "0123456789ABCDEF",
        bitsPerChar: 4
    });
var bb = Object.freeze({
    __proto__: null,
    base16: _b,
    base16upper: wb
});
const Eb = kt({
        prefix: "b",
        name: "base32",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567",
        bitsPerChar: 5
    }),
    Ib = kt({
        prefix: "B",
        name: "base32upper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
        bitsPerChar: 5
    }),
    xb = kt({
        prefix: "c",
        name: "base32pad",
        alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
        bitsPerChar: 5
    }),
    Pb = kt({
        prefix: "C",
        name: "base32padupper",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
        bitsPerChar: 5
    }),
    Sb = kt({
        prefix: "v",
        name: "base32hex",
        alphabet: "0123456789abcdefghijklmnopqrstuv",
        bitsPerChar: 5
    }),
    Ob = kt({
        prefix: "V",
        name: "base32hexupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
        bitsPerChar: 5
    }),
    Rb = kt({
        prefix: "t",
        name: "base32hexpad",
        alphabet: "0123456789abcdefghijklmnopqrstuv=",
        bitsPerChar: 5
    }),
    Ab = kt({
        prefix: "T",
        name: "base32hexpadupper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
        bitsPerChar: 5
    }),
    Tb = kt({
        prefix: "h",
        name: "base32z",
        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
        bitsPerChar: 5
    });
var Cb = Object.freeze({
    __proto__: null,
    base32: Eb,
    base32upper: Ib,
    base32pad: xb,
    base32padupper: Pb,
    base32hex: Sb,
    base32hexupper: Ob,
    base32hexpad: Rb,
    base32hexpadupper: Ab,
    base32z: Tb
});
const $b = ts({
        prefix: "k",
        name: "base36",
        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
    }),
    Nb = ts({
        prefix: "K",
        name: "base36upper",
        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    });
var Db = Object.freeze({
    __proto__: null,
    base36: $b,
    base36upper: Nb
});
const Fb = ts({
        name: "base58btc",
        prefix: "z",
        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
    }),
    Lb = ts({
        name: "base58flickr",
        prefix: "Z",
        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
    });
var jb = Object.freeze({
    __proto__: null,
    base58btc: Fb,
    base58flickr: Lb
});
const qb = kt({
        prefix: "m",
        name: "base64",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        bitsPerChar: 6
    }),
    Mb = kt({
        prefix: "M",
        name: "base64pad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        bitsPerChar: 6
    }),
    zb = kt({
        prefix: "u",
        name: "base64url",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
        bitsPerChar: 6
    }),
    Ub = kt({
        prefix: "U",
        name: "base64urlpad",
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
        bitsPerChar: 6
    });
var Hb = Object.freeze({
    __proto__: null,
    base64: qb,
    base64pad: Mb,
    base64url: zb,
    base64urlpad: Ub
});
const Af = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),
    Bb = Af.reduce((a, t, r) => (a[r] = t, a), []),
    kb = Af.reduce((a, t, r) => (a[t.codePointAt(0)] = r, a), []);

function Kb(a) {
    return a.reduce((t, r) => (t += Bb[r], t), "")
}

function Vb(a) {
    const t = [];
    for (const r of a) {
        const n = kb[r.codePointAt(0)];
        if (n === void 0) throw new Error(`Non-base256emoji character: ${r}`);
        t.push(n)
    }
    return new Uint8Array(t)
}
const Gb = So({
    prefix: "🚀",
    name: "base256emoji",
    encode: Kb,
    decode: Vb
});
var Wb = Object.freeze({
        __proto__: null,
        base256emoji: Gb
    }),
    Jb = Tf,
    vl = 128,
    Qb = 127,
    Yb = ~Qb,
    Xb = Math.pow(2, 31);

function Tf(a, t, r) {
    t = t || [], r = r || 0;
    for (var n = r; a >= Xb;) t[r++] = a & 255 | vl, a /= 128;
    for (; a & Yb;) t[r++] = a & 255 | vl, a >>>= 7;
    return t[r] = a | 0, Tf.bytes = r - n + 1, t
}
var Zb = Oc,
    eE = 128,
    ml = 127;

function Oc(a, n) {
    var r = 0,
        n = n || 0,
        s = 0,
        c = n,
        f, g = a.length;
    do {
        if (c >= g) throw Oc.bytes = 0, new RangeError("Could not decode varint");
        f = a[c++], r += s < 28 ? (f & ml) << s : (f & ml) * Math.pow(2, s), s += 7
    } while (f >= eE);
    return Oc.bytes = c - n, r
}
var tE = Math.pow(2, 7),
    rE = Math.pow(2, 14),
    iE = Math.pow(2, 21),
    nE = Math.pow(2, 28),
    sE = Math.pow(2, 35),
    oE = Math.pow(2, 42),
    aE = Math.pow(2, 49),
    cE = Math.pow(2, 56),
    uE = Math.pow(2, 63),
    hE = function(a) {
        return a < tE ? 1 : a < rE ? 2 : a < iE ? 3 : a < nE ? 4 : a < sE ? 5 : a < oE ? 6 : a < aE ? 7 : a < cE ? 8 : a < uE ? 9 : 10
    },
    lE = {
        encode: Jb,
        decode: Zb,
        encodingLength: hE
    },
    Cf = lE;
const _l = (a, t, r = 0) => (Cf.encode(a, t, r), t),
    wl = a => Cf.encodingLength(a),
    Rc = (a, t) => {
        const r = t.byteLength,
            n = wl(a),
            s = n + wl(r),
            c = new Uint8Array(s + r);
        return _l(a, c, 0), _l(r, c, n), c.set(t, s), new fE(a, r, t, c)
    };
class fE {
    constructor(t, r, n, s) {
        this.code = t, this.size = r, this.digest = n, this.bytes = s
    }
}
const $f = ({
    name: a,
    code: t,
    encode: r
}) => new pE(a, t, r);
class pE {
    constructor(t, r, n) {
        this.name = t, this.code = r, this.encode = n
    }
    digest(t) {
        if (t instanceof Uint8Array) {
            const r = this.encode(t);
            return r instanceof Uint8Array ? Rc(this.code, r) : r.then(n => Rc(this.code, n))
        } else throw Error("Unknown type, must be binary type")
    }
}
const Nf = a => async t => new Uint8Array(await crypto.subtle.digest(a, t)),
    dE = $f({
        name: "sha2-256",
        code: 18,
        encode: Nf("SHA-256")
    }),
    gE = $f({
        name: "sha2-512",
        code: 19,
        encode: Nf("SHA-512")
    });
var yE = Object.freeze({
    __proto__: null,
    sha256: dE,
    sha512: gE
});
const Df = 0,
    vE = "identity",
    Ff = Of,
    mE = a => Rc(Df, Ff(a)),
    _E = {
        code: Df,
        name: vE,
        encode: Ff,
        digest: mE
    };
var wE = Object.freeze({
    __proto__: null,
    identity: _E
});
new TextEncoder, new TextDecoder;
const bl = { ...fb,
    ...db,
    ...yb,
    ...mb,
    ...bb,
    ...Cb,
    ...Db,
    ...jb,
    ...Hb,
    ...Wb
};
({ ...yE,
    ...wE
});

function Lf(a) {
    return globalThis.Buffer != null ? new Uint8Array(a.buffer, a.byteOffset, a.byteLength) : a
}

function bE(a = 0) {
    return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Lf(globalThis.Buffer.allocUnsafe(a)) : new Uint8Array(a)
}

function jf(a, t, r, n) {
    return {
        name: a,
        prefix: t,
        encoder: {
            name: a,
            prefix: t,
            encode: r
        },
        decoder: {
            decode: n
        }
    }
}
const El = jf("utf8", "u", a => "u" + new TextDecoder("utf8").decode(a), a => new TextEncoder().encode(a.substring(1))),
    oc = jf("ascii", "a", a => {
        let t = "a";
        for (let r = 0; r < a.length; r++) t += String.fromCharCode(a[r]);
        return t
    }, a => {
        a = a.substring(1);
        const t = bE(a.length);
        for (let r = 0; r < a.length; r++) t[r] = a.charCodeAt(r);
        return t
    }),
    EE = {
        utf8: El,
        "utf-8": El,
        hex: bl.base16,
        latin1: oc,
        ascii: oc,
        binary: oc,
        ...bl
    };

function IE(a, t = "utf8") {
    const r = EE[t];
    if (!r) throw new Error(`Unsupported encoding "${t}"`);
    return (t === "utf8" || t === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Lf(globalThis.Buffer.from(a, "utf-8")) : r.decoder.decode(`${r.prefix}${a}`)
}
const qf = "wc",
    xE = 2,
    zc = "core",
    Ii = `${qf}@2:${zc}:`,
    PE = {
        name: zc,
        logger: "error"
    },
    SE = {
        database: ":memory:"
    },
    OE = "crypto",
    Il = "client_ed25519_seed",
    RE = ne.ONE_DAY,
    AE = "keychain",
    TE = "0.3",
    CE = "messages",
    $E = "0.3",
    NE = ne.SIX_HOURS,
    DE = "publisher",
    Mf = "irn",
    FE = "error",
    zf = "wss://relay.walletconnect.com",
    xl = "wss://relay.walletconnect.org",
    LE = "relayer",
    Gt = {
        message: "relayer_message",
        message_ack: "relayer_message_ack",
        connect: "relayer_connect",
        disconnect: "relayer_disconnect",
        error: "relayer_error",
        connection_stalled: "relayer_connection_stalled",
        transport_closed: "relayer_transport_closed",
        publish: "relayer_publish"
    },
    jE = "_subscription",
    si = {
        payload: "payload",
        connect: "connect",
        disconnect: "disconnect",
        error: "error"
    },
    qE = ne.ONE_SECOND,
    ME = "2.10.2",
    zE = 1e4,
    UE = "0.3",
    HE = "WALLETCONNECT_CLIENT_ID",
    Dr = {
        created: "subscription_created",
        deleted: "subscription_deleted",
        expired: "subscription_expired",
        disabled: "subscription_disabled",
        sync: "subscription_sync",
        resubscribed: "subscription_resubscribed"
    },
    BE = "subscription",
    kE = "0.3",
    KE = ne.FIVE_SECONDS * 1e3,
    VE = "pairing",
    GE = "0.3",
    zn = {
        wc_pairingDelete: {
            req: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 1e3
            },
            res: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 1001
            }
        },
        wc_pairingPing: {
            req: {
                ttl: ne.THIRTY_SECONDS,
                prompt: !1,
                tag: 1002
            },
            res: {
                ttl: ne.THIRTY_SECONDS,
                prompt: !1,
                tag: 1003
            }
        },
        unregistered_method: {
            req: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 0
            },
            res: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 0
            }
        }
    },
    Vn = {
        create: "pairing_create",
        expire: "pairing_expire",
        delete: "pairing_delete",
        ping: "pairing_ping"
    },
    kr = {
        created: "history_created",
        updated: "history_updated",
        deleted: "history_deleted",
        sync: "history_sync"
    },
    WE = "history",
    JE = "0.3",
    QE = "expirer",
    Sr = {
        created: "expirer_created",
        deleted: "expirer_deleted",
        expired: "expirer_expired",
        sync: "expirer_sync"
    },
    YE = "0.3",
    ac = "verify-api",
    vo = "https://verify.walletconnect.com",
    Pl = "https://verify.walletconnect.org";
class XE {
    constructor(t, r) {
        this.core = t, this.logger = r, this.keychain = new Map, this.name = AE, this.version = TE, this.initialized = !1, this.storagePrefix = Ii, this.init = async () => {
            if (!this.initialized) {
                const n = await this.getKeyChain();
                typeof n < "u" && (this.keychain = n), this.initialized = !0
            }
        }, this.has = n => (this.isInitialized(), this.keychain.has(n)), this.set = async (n, s) => {
            this.isInitialized(), this.keychain.set(n, s), await this.persist()
        }, this.get = n => {
            this.isInitialized();
            const s = this.keychain.get(n);
            if (typeof s > "u") {
                const {
                    message: c
                } = ee("NO_MATCHING_KEY", `${this.name}: ${n}`);
                throw new Error(c)
            }
            return s
        }, this.del = async n => {
            this.isInitialized(), this.keychain.delete(n), await this.persist()
        }, this.core = t, this.logger = $e.generateChildLogger(r, this.name)
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setKeyChain(t) {
        await this.core.storage.setItem(this.storageKey, sf(t))
    }
    async getKeyChain() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? of (t) : void 0
    }
    async persist() {
        await this.setKeyChain(this.keychain)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class ZE {
    constructor(t, r, n) {
        this.core = t, this.logger = r, this.name = OE, this.initialized = !1, this.init = async () => {
            this.initialized || (await this.keychain.init(), this.initialized = !0)
        }, this.hasKeys = s => (this.isInitialized(), this.keychain.has(s)), this.getClientId = async () => {
            this.isInitialized();
            const s = await this.getClientSeed(),
                c = ul(s);
            return mf(c.publicKey)
        }, this.generateKeyPair = () => {
            this.isInitialized();
            const s = Am();
            return this.setPrivateKey(s.publicKey, s.privateKey)
        }, this.signJWT = async s => {
            this.isInitialized();
            const c = await this.getClientSeed(),
                f = ul(c),
                g = gc();
            return await uw(g, s, RE, f)
        }, this.generateSharedKey = (s, c, f) => {
            this.isInitialized();
            const g = this.getPrivateKey(s),
                m = Tm(g, c);
            return this.setSymKey(m, f)
        }, this.setSymKey = async (s, c) => {
            this.isInitialized();
            const f = c || Cm(s);
            return await this.keychain.set(f, s), f
        }, this.deleteKeyPair = async s => {
            this.isInitialized(), await this.keychain.del(s)
        }, this.deleteSymKey = async s => {
            this.isInitialized(), await this.keychain.del(s)
        }, this.encode = async (s, c, f) => {
            this.isInitialized();
            const g = $m(f),
                m = Hi(c);
            if (kh(g)) {
                const x = g.senderPublicKey,
                    C = g.receiverPublicKey;
                s = await this.generateSharedKey(x, C)
            }
            const p = this.getSymKey(s),
                {
                    type: w,
                    senderPublicKey: R
                } = g;
            return Nm({
                type: w,
                symKey: p,
                message: m,
                senderPublicKey: R
            })
        }, this.decode = async (s, c, f) => {
            this.isInitialized();
            const g = Dm(c, f);
            if (kh(g)) {
                const m = g.receiverPublicKey,
                    p = g.senderPublicKey;
                s = await this.generateSharedKey(m, p)
            }
            try {
                const m = this.getSymKey(s),
                    p = Fm({
                        symKey: m,
                        encoded: c
                    });
                return es(p)
            } catch (m) {
                this.logger.error(`Failed to decode message from topic: '${s}', clientId: '${await this.getClientId()}'`), this.logger.error(m)
            }
        }, this.getPayloadType = s => {
            const c = Kh(s);
            return Lm(c.type)
        }, this.getPayloadSenderPublicKey = s => {
            const c = Kh(s);
            return c.senderPublicKey ? Eo(c.senderPublicKey, jm) : void 0
        }, this.core = t, this.logger = $e.generateChildLogger(r, this.name), this.keychain = n || new XE(this.core, this.logger)
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    async setPrivateKey(t, r) {
        return await this.keychain.set(t, r), t
    }
    getPrivateKey(t) {
        return this.keychain.get(t)
    }
    async getClientSeed() {
        let t = "";
        try {
            t = this.keychain.get(Il)
        } catch {
            t = gc(), await this.keychain.set(Il, t)
        }
        return IE(t, "base16")
    }
    getSymKey(t) {
        return this.keychain.get(t)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class eI extends U_ {
    constructor(t, r) {
        super(t, r), this.logger = t, this.core = r, this.messages = new Map, this.name = CE, this.version = $E, this.initialized = !1, this.storagePrefix = Ii, this.init = async () => {
            if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                    const n = await this.getRelayerMessages();
                    typeof n < "u" && (this.messages = n), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                        type: "method",
                        method: "restore",
                        size: this.messages.size
                    })
                } catch (n) {
                    this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(n)
                } finally {
                    this.initialized = !0
                }
            }
        }, this.set = async (n, s) => {
            this.isInitialized();
            const c = gn(s);
            let f = this.messages.get(n);
            return typeof f > "u" && (f = {}), typeof f[c] < "u" || (f[c] = s, this.messages.set(n, f), await this.persist()), c
        }, this.get = n => {
            this.isInitialized();
            let s = this.messages.get(n);
            return typeof s > "u" && (s = {}), s
        }, this.has = (n, s) => {
            this.isInitialized();
            const c = this.get(n),
                f = gn(s);
            return typeof c[f] < "u"
        }, this.del = async n => {
            this.isInitialized(), this.messages.delete(n), await this.persist()
        }, this.logger = $e.generateChildLogger(t, this.name), this.core = r
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    async setRelayerMessages(t) {
        await this.core.storage.setItem(this.storageKey, sf(t))
    }
    async getRelayerMessages() {
        const t = await this.core.storage.getItem(this.storageKey);
        return typeof t < "u" ? of (t) : void 0
    }
    async persist() {
        await this.setRelayerMessages(this.messages)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class tI extends H_ {
    constructor(t, r) {
        super(t, r), this.relayer = t, this.logger = r, this.events = new Or.EventEmitter, this.name = DE, this.queue = new Map, this.publishTimeout = ne.toMiliseconds(ne.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, s, c) => {
            var f;
            this.logger.debug("Publishing Payload"), this.logger.trace({
                type: "method",
                method: "publish",
                params: {
                    topic: n,
                    message: s,
                    opts: c
                }
            });
            try {
                const g = (c == null ? void 0 : c.ttl) || NE,
                    m = yc(c),
                    p = (c == null ? void 0 : c.prompt) || !1,
                    w = (c == null ? void 0 : c.tag) || 0,
                    R = (c == null ? void 0 : c.id) || xf().toString(),
                    x = {
                        topic: n,
                        message: s,
                        opts: {
                            ttl: g,
                            relay: m,
                            prompt: p,
                            tag: w,
                            id: R
                        }
                    },
                    C = setTimeout(() => this.queue.set(R, x), this.publishTimeout);
                try {
                    await await Jn(this.rpcPublish(n, s, g, m, p, w, R), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(R), this.relayer.events.emit(Gt.publish, x)
                } catch (D) {
                    if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (f = c == null ? void 0 : c.internal) != null && f.throwOnFailedPublish) throw this.removeRequestFromQueue(R), D;
                    return
                } finally {
                    clearTimeout(C)
                }
                this.logger.debug("Successfully Published Payload"), this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: {
                        topic: n,
                        message: s,
                        opts: c
                    }
                })
            } catch (g) {
                throw this.logger.debug("Failed to Publish Payload"), this.logger.error(g), g
            }
        }, this.on = (n, s) => {
            this.events.on(n, s)
        }, this.once = (n, s) => {
            this.events.once(n, s)
        }, this.off = (n, s) => {
            this.events.off(n, s)
        }, this.removeListener = (n, s) => {
            this.events.removeListener(n, s)
        }, this.relayer = t, this.logger = $e.generateChildLogger(r, this.name), this.registerEventListeners()
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    rpcPublish(t, r, n, s, c, f, g) {
        var m, p, w, R;
        const x = {
            method: fo(s.protocol).publish,
            params: {
                topic: t,
                message: r,
                ttl: n,
                prompt: c,
                tag: f
            },
            id: g
        };
        return Ei((m = x.params) == null ? void 0 : m.prompt) && ((p = x.params) == null || delete p.prompt), Ei((w = x.params) == null ? void 0 : w.tag) && ((R = x.params) == null || delete R.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "message",
            direction: "outgoing",
            request: x
        }), this.relayer.request(x)
    }
    removeRequestFromQueue(t) {
        this.queue.delete(t)
    }
    checkQueue() {
        this.queue.forEach(async t => {
            const {
                topic: r,
                message: n,
                opts: s
            } = t;
            await this.publish(r, n, s)
        })
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(mn.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart) {
                this.needsTransportRestart = !1, this.relayer.events.emit(Gt.connection_stalled);
                return
            }
            this.checkQueue()
        }), this.relayer.on(Gt.message_ack, t => {
            this.removeRequestFromQueue(t.id.toString())
        })
    }
}
class rI {
    constructor() {
        this.map = new Map, this.set = (t, r) => {
            const n = this.get(t);
            this.exists(t, r) || this.map.set(t, [...n, r])
        }, this.get = t => this.map.get(t) || [], this.exists = (t, r) => this.get(t).includes(r), this.delete = (t, r) => {
            if (typeof r > "u") {
                this.map.delete(t);
                return
            }
            if (!this.map.has(t)) return;
            const n = this.get(t);
            if (!this.exists(t, r)) return;
            const s = n.filter(c => c !== r);
            if (!s.length) {
                this.map.delete(t);
                return
            }
            this.map.set(t, s)
        }, this.clear = () => {
            this.map.clear()
        }
    }
    get topics() {
        return Array.from(this.map.keys())
    }
}
var iI = Object.defineProperty,
    nI = Object.defineProperties,
    sI = Object.getOwnPropertyDescriptors,
    Sl = Object.getOwnPropertySymbols,
    oI = Object.prototype.hasOwnProperty,
    aI = Object.prototype.propertyIsEnumerable,
    Ol = (a, t, r) => t in a ? iI(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    Un = (a, t) => {
        for (var r in t || (t = {})) oI.call(t, r) && Ol(a, r, t[r]);
        if (Sl)
            for (var r of Sl(t)) aI.call(t, r) && Ol(a, r, t[r]);
        return a
    },
    cc = (a, t) => nI(a, sI(t));
class cI extends K_ {
    constructor(t, r) {
        super(t, r), this.relayer = t, this.logger = r, this.subscriptions = new Map, this.topicMap = new rI, this.events = new Or.EventEmitter, this.name = BE, this.version = kE, this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = Ii, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
        }, this.subscribe = async (n, s) => {
            await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                type: "method",
                method: "subscribe",
                params: {
                    topic: n,
                    opts: s
                }
            });
            try {
                const c = yc(s),
                    f = {
                        topic: n,
                        relay: c
                    };
                this.pending.set(n, f);
                const g = await this.rpcSubscribe(n, c);
                return this.onSubscribe(g, f), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: {
                        topic: n,
                        opts: s
                    }
                }), g
            } catch (c) {
                throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(c), c
            }
        }, this.unsubscribe = async (n, s) => {
            await this.restartToComplete(), this.isInitialized(), typeof(s == null ? void 0 : s.id) < "u" ? await this.unsubscribeById(n, s.id, s) : await this.unsubscribeByTopic(n, s)
        }, this.isSubscribed = async n => this.topics.includes(n) ? !0 : await new Promise((s, c) => {
            const f = new ne.Watch;
            f.start(this.pendingSubscriptionWatchLabel);
            const g = setInterval(() => {
                !this.pending.has(n) && this.topics.includes(n) && (clearInterval(g), f.stop(this.pendingSubscriptionWatchLabel), s(!0)), f.elapsed(this.pendingSubscriptionWatchLabel) >= KE && (clearInterval(g), f.stop(this.pendingSubscriptionWatchLabel), c(new Error("Subscription resolution timeout")))
            }, this.pollingInterval)
        }).catch(() => !1), this.on = (n, s) => {
            this.events.on(n, s)
        }, this.once = (n, s) => {
            this.events.once(n, s)
        }, this.off = (n, s) => {
            this.events.off(n, s)
        }, this.removeListener = (n, s) => {
            this.events.removeListener(n, s)
        }, this.restart = async () => {
            this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
        }, this.relayer = t, this.logger = $e.generateChildLogger(r, this.name), this.clientId = ""
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.subscriptions.size
    }
    get ids() {
        return Array.from(this.subscriptions.keys())
    }
    get values() {
        return Array.from(this.subscriptions.values())
    }
    get topics() {
        return this.topicMap.topics
    }
    hasSubscription(t, r) {
        let n = !1;
        try {
            n = this.getSubscription(t).topic === r
        } catch {}
        return n
    }
    onEnable() {
        this.cached = [], this.initialized = !0
    }
    onDisable() {
        this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
    }
    async unsubscribeByTopic(t, r) {
        const n = this.topicMap.get(t);
        await Promise.all(n.map(async s => await this.unsubscribeById(t, s, r)))
    }
    async unsubscribeById(t, r, n) {
        this.logger.debug("Unsubscribing Topic"), this.logger.trace({
            type: "method",
            method: "unsubscribe",
            params: {
                topic: t,
                id: r,
                opts: n
            }
        });
        try {
            const s = yc(n);
            await this.rpcUnsubscribe(t, r, s);
            const c = tr("USER_DISCONNECTED", `${this.name}, ${t}`);
            await this.onUnsubscribe(t, r, c), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: {
                    topic: t,
                    id: r,
                    opts: n
                }
            })
        } catch (s) {
            throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s), s
        }
    }
    async rpcSubscribe(t, r) {
        const n = {
            method: fo(r.protocol).subscribe,
            params: {
                topic: t
            }
        };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        try {
            await await Jn(this.relayer.request(n), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Gt.connection_stalled)
        }
        return gn(t + this.clientId)
    }
    async rpcBatchSubscribe(t) {
        if (!t.length) return;
        const r = t[0].relay,
            n = {
                method: fo(r.protocol).batchSubscribe,
                params: {
                    topics: t.map(s => s.topic)
                }
            };
        this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: n
        });
        try {
            return await await Jn(this.relayer.request(n), this.subscribeTimeout)
        } catch {
            this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Gt.connection_stalled)
        }
    }
    rpcUnsubscribe(t, r, n) {
        const s = {
            method: fo(n.protocol).unsubscribe,
            params: {
                topic: t,
                id: r
            }
        };
        return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: s
        }), this.relayer.request(s)
    }
    onSubscribe(t, r) {
        this.setSubscription(t, cc(Un({}, r), {
            id: t
        })), this.pending.delete(r.topic)
    }
    onBatchSubscribe(t) {
        t.length && t.forEach(r => {
            this.setSubscription(r.id, Un({}, r)), this.pending.delete(r.topic)
        })
    }
    async onUnsubscribe(t, r, n) {
        this.events.removeAllListeners(r), this.hasSubscription(r, t) && this.deleteSubscription(r, n), await this.relayer.messages.del(t)
    }
    async setRelayerSubscriptions(t) {
        await this.relayer.core.storage.setItem(this.storageKey, t)
    }
    async getRelayerSubscriptions() {
        return await this.relayer.core.storage.getItem(this.storageKey)
    }
    setSubscription(t, r) {
        this.subscriptions.has(t) || (this.logger.debug("Setting subscription"), this.logger.trace({
            type: "method",
            method: "setSubscription",
            id: t,
            subscription: r
        }), this.addSubscription(t, r))
    }
    addSubscription(t, r) {
        this.subscriptions.set(t, Un({}, r)), this.topicMap.set(r.topic, t), this.events.emit(Dr.created, r)
    }
    getSubscription(t) {
        this.logger.debug("Getting subscription"), this.logger.trace({
            type: "method",
            method: "getSubscription",
            id: t
        });
        const r = this.subscriptions.get(t);
        if (!r) {
            const {
                message: n
            } = ee("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(n)
        }
        return r
    }
    deleteSubscription(t, r) {
        this.logger.debug("Deleting subscription"), this.logger.trace({
            type: "method",
            method: "deleteSubscription",
            id: t,
            reason: r
        });
        const n = this.getSubscription(t);
        this.subscriptions.delete(t), this.topicMap.delete(n.topic, t), this.events.emit(Dr.deleted, cc(Un({}, n), {
            reason: r
        }))
    }
    async persist() {
        await this.setRelayerSubscriptions(this.values), this.events.emit(Dr.sync)
    }
    async reset() {
        if (this.cached.length) {
            const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
            for (let r = 0; r < t; r++) {
                const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                await this.batchSubscribe(n)
            }
        }
        this.events.emit(Dr.resubscribed)
    }
    async restore() {
        try {
            const t = await this.getRelayerSubscriptions();
            if (typeof t > "u" || !t.length) return;
            if (this.subscriptions.size) {
                const {
                    message: r
                } = ee("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r)
            }
            this.cached = t, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t)
        }
    }
    async batchSubscribe(t) {
        if (!t.length) return;
        const r = await this.rpcBatchSubscribe(t);
        vn(r) && this.onBatchSubscribe(r.map((n, s) => cc(Un({}, t[s]), {
            id: n
        })))
    }
    async onConnect() {
        this.restartInProgress || (await this.restart(), this.onEnable())
    }
    onDisconnect() {
        this.onDisable()
    }
    async checkPending() {
        if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
        const t = [];
        this.pending.forEach(r => {
            t.push(r)
        }), await this.batchSubscribe(t)
    }
    registerEventListeners() {
        this.relayer.core.heartbeat.on(mn.HEARTBEAT_EVENTS.pulse, async () => {
            await this.checkPending()
        }), this.relayer.on(Gt.connect, async () => {
            await this.onConnect()
        }), this.relayer.on(Gt.disconnect, () => {
            this.onDisconnect()
        }), this.events.on(Dr.created, async t => {
            const r = Dr.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), await this.persist()
        }), this.events.on(Dr.deleted, async t => {
            const r = Dr.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), await this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async restartToComplete() {
        this.restartInProgress && await new Promise(t => {
            const r = setInterval(() => {
                this.restartInProgress || (clearInterval(r), t())
            }, this.pollingInterval)
        })
    }
}
var uI = Object.defineProperty,
    Rl = Object.getOwnPropertySymbols,
    hI = Object.prototype.hasOwnProperty,
    lI = Object.prototype.propertyIsEnumerable,
    Al = (a, t, r) => t in a ? uI(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    fI = (a, t) => {
        for (var r in t || (t = {})) hI.call(t, r) && Al(a, r, t[r]);
        if (Rl)
            for (var r of Rl(t)) lI.call(t, r) && Al(a, r, t[r]);
        return a
    };
class pI extends B_ {
    constructor(t) {
        super(t), this.protocol = "wc", this.version = 2, this.events = new Or.EventEmitter, this.name = LE, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async r => {
            this.logger.debug("Publishing Request Payload");
            try {
                return await this.toEstablishConnection(), await this.provider.request(r)
            } catch (n) {
                throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n
            }
        }, this.onPayloadHandler = r => {
            this.onProviderPayload(r)
        }, this.onConnectHandler = () => {
            this.events.emit(Gt.connect)
        }, this.onDisconnectHandler = () => {
            this.onProviderDisconnect()
        }, this.onProviderErrorHandler = r => {
            this.logger.error(r), this.events.emit(Gt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
        }, this.registerProviderListeners = () => {
            this.provider.on(si.payload, this.onPayloadHandler), this.provider.on(si.connect, this.onConnectHandler), this.provider.on(si.disconnect, this.onDisconnectHandler), this.provider.on(si.error, this.onProviderErrorHandler)
        }, this.core = t.core, this.logger = typeof t.logger < "u" && typeof t.logger != "string" ? $e.generateChildLogger(t.logger, this.name) : $e.pino($e.getDefaultLoggerOptions({
            level: t.logger || FE
        })), this.messages = new eI(this.logger, t.core), this.subscriber = new cI(this, this.logger), this.publisher = new tI(this, this.logger), this.relayUrl = (t == null ? void 0 : t.relayUrl) || zf, this.projectId = t.projectId, this.provider = {}
    }
    async init() {
        this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
        try {
            await this.transportOpen()
        } catch {
            this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${xl}...`), await this.restartTransport(xl)
        }
        this.initialized = !0, setTimeout(async () => {
            this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
        }, zE)
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    get connected() {
        return this.provider.connection.connected
    }
    get connecting() {
        return this.provider.connection.connecting
    }
    async publish(t, r, n) {
        this.isInitialized(), await this.publisher.publish(t, r, n), await this.recordMessageEvent({
            topic: t,
            message: r,
            publishedAt: Date.now()
        })
    }
    async subscribe(t, r) {
        var n;
        this.isInitialized();
        let s = ((n = this.subscriber.topicMap.get(t)) == null ? void 0 : n[0]) || "";
        if (s) return s;
        let c;
        const f = g => {
            g.topic === t && (this.subscriber.off(Dr.created, f), c())
        };
        return await Promise.all([new Promise(g => {
            c = g, this.subscriber.on(Dr.created, f)
        }), new Promise(async g => {
            s = await this.subscriber.subscribe(t, r), g()
        })]), s
    }
    async unsubscribe(t, r) {
        this.isInitialized(), await this.subscriber.unsubscribe(t, r)
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async transportClose() {
        this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Jn(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
    }
    async transportOpen(t) {
        if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
            t && t !== this.relayUrl && (this.relayUrl = t, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
            try {
                await Promise.all([new Promise(r => {
                    if (!this.initialized) return r();
                    this.subscriber.once(Dr.resubscribed, () => {
                        r()
                    })
                }), new Promise(async (r, n) => {
                    try {
                        await Jn(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                    } catch (s) {
                        n(s);
                        return
                    }
                    r()
                })])
            } catch (r) {
                this.logger.error(r);
                const n = r;
                if (!this.isConnectionStalled(n.message)) throw r;
                this.provider.events.emit(si.disconnect)
            } finally {
                this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
            }
        }
    }
    async restartTransport(t) {
        await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = t || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
    }
    async confirmOnlineStateOrThrow() {
        if (!await Vh()) throw new Error("No internet connection detected. Please restart your network and try again.")
    }
    isConnectionStalled(t) {
        return this.staleConnectionErrors.some(r => t.includes(r))
    }
    async createProvider() {
        this.provider.connection && this.unregisterProviderListeners();
        const t = await this.core.crypto.signJWT(this.relayUrl);
        this.provider = new ci(new Yw(qm({
            sdkVersion: ME,
            protocol: this.protocol,
            version: this.version,
            relayUrl: this.relayUrl,
            projectId: this.projectId,
            auth: t,
            useOnCloseEvent: !0
        }))), this.registerProviderListeners()
    }
    async recordMessageEvent(t) {
        const {
            topic: r,
            message: n
        } = t;
        await this.messages.set(r, n)
    }
    async shouldIgnoreMessageEvent(t) {
        const {
            topic: r,
            message: n
        } = t;
        if (!n || n.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
        if (!await this.subscriber.isSubscribed(r)) return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
        const s = this.messages.has(r, n);
        return s && this.logger.debug(`Ignoring duplicate message: ${n}`), s
    }
    async onProviderPayload(t) {
        if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                type: "payload",
                direction: "incoming",
                payload: t
            }), Mc(t)) {
            if (!t.method.endsWith(jE)) return;
            const r = t.params,
                {
                    topic: n,
                    message: s,
                    publishedAt: c
                } = r.data,
                f = {
                    topic: n,
                    message: s,
                    publishedAt: c
                };
            this.logger.debug("Emitting Relayer Payload"), this.logger.trace(fI({
                type: "event",
                event: r.id
            }, f)), this.events.emit(r.id, f), await this.acknowledgePayload(t), await this.onMessageEvent(f)
        } else Po(t) && this.events.emit(Gt.message_ack, t)
    }
    async onMessageEvent(t) {
        await this.shouldIgnoreMessageEvent(t) || (this.events.emit(Gt.message, t), await this.recordMessageEvent(t))
    }
    async acknowledgePayload(t) {
        const r = qc(t.id, !0);
        await this.provider.connection.send(r)
    }
    unregisterProviderListeners() {
        this.provider.off(si.payload, this.onPayloadHandler), this.provider.off(si.connect, this.onConnectHandler), this.provider.off(si.disconnect, this.onDisconnectHandler), this.provider.off(si.error, this.onProviderErrorHandler)
    }
    async registerEventListeners() {
        this.events.on(Gt.connection_stalled, () => {
            this.restartTransport().catch(r => this.logger.error(r))
        });
        let t = await Vh();
        Mm(async r => {
            this.initialized && t !== r && (t = r, r ? await this.restartTransport().catch(n => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(n => this.logger.error(n))))
        })
    }
    onProviderDisconnect() {
        this.events.emit(Gt.disconnect), this.attemptToReconnect()
    }
    attemptToReconnect() {
        this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
            await this.restartTransport().catch(t => this.logger.error(t))
        }, ne.toMiliseconds(qE)))
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    async toEstablishConnection() {
        if (await this.confirmOnlineStateOrThrow(), !this.connected) {
            if (this.connectionAttemptInProgress) return await new Promise(t => {
                const r = setInterval(() => {
                    this.connected && (clearInterval(r), t())
                }, this.connectionStatusPollingInterval)
            });
            await this.restartTransport()
        }
    }
}
var dI = Object.defineProperty,
    Tl = Object.getOwnPropertySymbols,
    gI = Object.prototype.hasOwnProperty,
    yI = Object.prototype.propertyIsEnumerable,
    Cl = (a, t, r) => t in a ? dI(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    $l = (a, t) => {
        for (var r in t || (t = {})) gI.call(t, r) && Cl(a, r, t[r]);
        if (Tl)
            for (var r of Tl(t)) yI.call(t, r) && Cl(a, r, t[r]);
        return a
    };
class Oo extends k_ {
    constructor(t, r, n, s = Ii, c = void 0) {
        super(t, r, n, s), this.core = t, this.logger = r, this.name = n, this.map = new Map, this.version = UE, this.cached = [], this.initialized = !1, this.storagePrefix = Ii, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(f => {
                this.getKey && f !== null && !Ei(f) ? this.map.set(this.getKey(f), f) : Om(f) ? this.map.set(f.id, f) : Rm(f) && this.map.set(f.topic, f)
            }), this.cached = [], this.initialized = !0)
        }, this.set = async (f, g) => {
            this.isInitialized(), this.map.has(f) ? await this.update(f, g) : (this.logger.debug("Setting value"), this.logger.trace({
                type: "method",
                method: "set",
                key: f,
                value: g
            }), this.map.set(f, g), await this.persist())
        }, this.get = f => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
            type: "method",
            method: "get",
            key: f
        }), this.getData(f)), this.getAll = f => (this.isInitialized(), f ? this.values.filter(g => Object.keys(f).every(m => Zw(g[m], f[m]))) : this.values), this.update = async (f, g) => {
            this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                type: "method",
                method: "update",
                key: f,
                update: g
            });
            const m = $l($l({}, this.getData(f)), g);
            this.map.set(f, m), await this.persist()
        }, this.delete = async (f, g) => {
            this.isInitialized(), this.map.has(f) && (this.logger.debug("Deleting value"), this.logger.trace({
                type: "method",
                method: "delete",
                key: f,
                reason: g
            }), this.map.delete(f), await this.persist())
        }, this.logger = $e.generateChildLogger(r, this.name), this.storagePrefix = s, this.getKey = c
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.map.size
    }
    get keys() {
        return Array.from(this.map.keys())
    }
    get values() {
        return Array.from(this.map.values())
    }
    async setDataStore(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getDataStore() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getData(t) {
        const r = this.map.get(t);
        if (!r) {
            const {
                message: n
            } = ee("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(n), new Error(n)
        }
        return r
    }
    async persist() {
        await this.setDataStore(this.values)
    }
    async restore() {
        try {
            const t = await this.getDataStore();
            if (typeof t > "u" || !t.length) return;
            if (this.map.size) {
                const {
                    message: r
                } = ee("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = t, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class vI {
    constructor(t, r) {
        this.core = t, this.logger = r, this.name = VE, this.version = GE, this.events = new Dc, this.initialized = !1, this.storagePrefix = Ii, this.ignoredPayloadTypes = [tf], this.registeredMethods = [], this.init = async () => {
            this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
        }, this.register = ({
            methods: n
        }) => {
            this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...n])]
        }, this.create = async () => {
            this.isInitialized();
            const n = gc(),
                s = await this.core.crypto.setSymKey(n),
                c = Fr(ne.FIVE_MINUTES),
                f = {
                    protocol: Mf
                },
                g = {
                    topic: s,
                    expiry: c,
                    relay: f,
                    active: !1
                },
                m = zm({
                    protocol: this.core.protocol,
                    version: this.core.version,
                    topic: s,
                    symKey: n,
                    relay: f
                });
            return await this.pairings.set(s, g), await this.core.relayer.subscribe(s), this.core.expirer.set(s, c), {
                topic: s,
                uri: m
            }
        }, this.pair = async n => {
            this.isInitialized(), this.isValidPair(n);
            const {
                topic: s,
                symKey: c,
                relay: f
            } = Um(n.uri);
            let g;
            if (this.pairings.keys.includes(s) && (g = this.pairings.get(s), g.active)) throw new Error(`Pairing already exists: ${s}. Please try again with a new connection URI.`);
            this.core.crypto.keychain.has(s) || (await this.core.crypto.setSymKey(c, s), await this.core.relayer.subscribe(s, {
                relay: f
            }));
            const m = Fr(ne.FIVE_MINUTES),
                p = {
                    topic: s,
                    relay: f,
                    expiry: m,
                    active: !1
                };
            return await this.pairings.set(s, p), this.core.expirer.set(s, m), n.activatePairing && await this.activate({
                topic: s
            }), this.events.emit(Vn.create, p), p
        }, this.activate = async ({
            topic: n
        }) => {
            this.isInitialized();
            const s = Fr(ne.THIRTY_DAYS);
            await this.pairings.update(n, {
                active: !0,
                expiry: s
            }), this.core.expirer.set(n, s)
        }, this.ping = async n => {
            this.isInitialized(), await this.isValidPing(n);
            const {
                topic: s
            } = n;
            if (this.pairings.keys.includes(s)) {
                const c = await this.sendRequest(s, "wc_pairingPing", {}),
                    {
                        done: f,
                        resolve: g,
                        reject: m
                    } = pn();
                this.events.once(Nt("pairing_ping", c), ({
                    error: p
                }) => {
                    p ? m(p) : g()
                }), await f()
            }
        }, this.updateExpiry = async ({
            topic: n,
            expiry: s
        }) => {
            this.isInitialized(), await this.pairings.update(n, {
                expiry: s
            })
        }, this.updateMetadata = async ({
            topic: n,
            metadata: s
        }) => {
            this.isInitialized(), await this.pairings.update(n, {
                peerMetadata: s
            })
        }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async n => {
            this.isInitialized(), await this.isValidDisconnect(n);
            const {
                topic: s
            } = n;
            this.pairings.keys.includes(s) && (await this.sendRequest(s, "wc_pairingDelete", tr("USER_DISCONNECTED")), await this.deletePairing(s))
        }, this.sendRequest = async (n, s, c) => {
            const f = yn(s, c),
                g = await this.core.crypto.encode(n, f),
                m = zn[s].req;
            return this.core.history.set(n, f), this.core.relayer.publish(n, g, m), f.id
        }, this.sendResult = async (n, s, c) => {
            const f = qc(n, c),
                g = await this.core.crypto.encode(s, f),
                m = await this.core.history.get(s, n),
                p = zn[m.request.method].res;
            await this.core.relayer.publish(s, g, p), await this.core.history.resolve(f)
        }, this.sendError = async (n, s, c) => {
            const f = xo(n, c),
                g = await this.core.crypto.encode(s, f),
                m = await this.core.history.get(s, n),
                p = zn[m.request.method] ? zn[m.request.method].res : zn.unregistered_method.res;
            await this.core.relayer.publish(s, g, p), await this.core.history.resolve(f)
        }, this.deletePairing = async (n, s) => {
            await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, tr("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), s ? Promise.resolve() : this.core.expirer.del(n)])
        }, this.cleanup = async () => {
            const n = this.pairings.getAll().filter(s => bi(s.expiry));
            await Promise.all(n.map(s => this.deletePairing(s.topic)))
        }, this.onRelayEventRequest = n => {
            const {
                topic: s,
                payload: c
            } = n;
            switch (c.method) {
                case "wc_pairingPing":
                    return this.onPairingPingRequest(s, c);
                case "wc_pairingDelete":
                    return this.onPairingDeleteRequest(s, c);
                default:
                    return this.onUnknownRpcMethodRequest(s, c)
            }
        }, this.onRelayEventResponse = async n => {
            const {
                topic: s,
                payload: c
            } = n, f = (await this.core.history.get(s, c.id)).request.method;
            switch (f) {
                case "wc_pairingPing":
                    return this.onPairingPingResponse(s, c);
                default:
                    return this.onUnknownRpcMethodResponse(f)
            }
        }, this.onPairingPingRequest = async (n, s) => {
            const {
                id: c
            } = s;
            try {
                this.isValidPing({
                    topic: n
                }), await this.sendResult(c, n, !0), this.events.emit(Vn.ping, {
                    id: c,
                    topic: n
                })
            } catch (f) {
                await this.sendError(c, n, f), this.logger.error(f)
            }
        }, this.onPairingPingResponse = (n, s) => {
            const {
                id: c
            } = s;
            setTimeout(() => {
                ai(s) ? this.events.emit(Nt("pairing_ping", c), {}) : Lr(s) && this.events.emit(Nt("pairing_ping", c), {
                    error: s.error
                })
            }, 500)
        }, this.onPairingDeleteRequest = async (n, s) => {
            const {
                id: c
            } = s;
            try {
                this.isValidDisconnect({
                    topic: n
                }), await this.deletePairing(n), this.events.emit(Vn.delete, {
                    id: c,
                    topic: n
                })
            } catch (f) {
                await this.sendError(c, n, f), this.logger.error(f)
            }
        }, this.onUnknownRpcMethodRequest = async (n, s) => {
            const {
                id: c,
                method: f
            } = s;
            try {
                if (this.registeredMethods.includes(f)) return;
                const g = tr("WC_METHOD_UNSUPPORTED", f);
                await this.sendError(c, n, g), this.logger.error(g)
            } catch (g) {
                await this.sendError(c, n, g), this.logger.error(g)
            }
        }, this.onUnknownRpcMethodResponse = n => {
            this.registeredMethods.includes(n) || this.logger.error(tr("WC_METHOD_UNSUPPORTED", n))
        }, this.isValidPair = n => {
            if (!hr(n)) {
                const {
                    message: s
                } = ee("MISSING_OR_INVALID", `pair() params: ${n}`);
                throw new Error(s)
            }
            if (!Hm(n.uri)) {
                const {
                    message: s
                } = ee("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
                throw new Error(s)
            }
        }, this.isValidPing = async n => {
            if (!hr(n)) {
                const {
                    message: c
                } = ee("MISSING_OR_INVALID", `ping() params: ${n}`);
                throw new Error(c)
            }
            const {
                topic: s
            } = n;
            await this.isValidPairingTopic(s)
        }, this.isValidDisconnect = async n => {
            if (!hr(n)) {
                const {
                    message: c
                } = ee("MISSING_OR_INVALID", `disconnect() params: ${n}`);
                throw new Error(c)
            }
            const {
                topic: s
            } = n;
            await this.isValidPairingTopic(s)
        }, this.isValidPairingTopic = async n => {
            if (!dn(n, !1)) {
                const {
                    message: s
                } = ee("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
                throw new Error(s)
            }
            if (!this.pairings.keys.includes(n)) {
                const {
                    message: s
                } = ee("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
                throw new Error(s)
            }
            if (bi(this.pairings.get(n).expiry)) {
                await this.deletePairing(n);
                const {
                    message: s
                } = ee("EXPIRED", `pairing topic: ${n}`);
                throw new Error(s)
            }
        }, this.core = t, this.logger = $e.generateChildLogger(r, this.name), this.pairings = new Oo(this.core, this.logger, this.name, this.storagePrefix)
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
    registerRelayerEvents() {
        this.core.relayer.on(Gt.message, async t => {
            const {
                topic: r,
                message: n
            } = t;
            if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))) return;
            const s = await this.core.crypto.decode(r, n);
            try {
                Mc(s) ? (this.core.history.set(r, s), this.onRelayEventRequest({
                    topic: r,
                    payload: s
                })) : Po(s) && (await this.core.history.resolve(s), await this.onRelayEventResponse({
                    topic: r,
                    payload: s
                }), this.core.history.delete(r, s.id))
            } catch (c) {
                this.logger.error(c)
            }
        })
    }
    registerExpirerEvents() {
        this.core.expirer.on(Sr.expired, async t => {
            const {
                topic: r
            } = rf(t.target);
            r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Vn.expire, {
                topic: r
            }))
        })
    }
}
class mI extends z_ {
    constructor(t, r) {
        super(t, r), this.core = t, this.logger = r, this.records = new Map, this.events = new Or.EventEmitter, this.name = WE, this.version = JE, this.cached = [], this.initialized = !1, this.storagePrefix = Ii, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(n => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.set = (n, s, c) => {
            if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                    type: "method",
                    method: "set",
                    topic: n,
                    request: s,
                    chainId: c
                }), this.records.has(s.id)) return;
            const f = {
                id: s.id,
                topic: n,
                request: {
                    method: s.method,
                    params: s.params || null
                },
                chainId: c,
                expiry: Fr(ne.THIRTY_DAYS)
            };
            this.records.set(f.id, f), this.events.emit(kr.created, f)
        }, this.resolve = async n => {
            if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                    type: "method",
                    method: "update",
                    response: n
                }), !this.records.has(n.id)) return;
            const s = await this.getRecord(n.id);
            typeof s.response > "u" && (s.response = Lr(n) ? {
                error: n.error
            } : {
                result: n.result
            }, this.records.set(s.id, s), this.events.emit(kr.updated, s))
        }, this.get = async (n, s) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
            type: "method",
            method: "get",
            topic: n,
            id: s
        }), await this.getRecord(s)), this.delete = (n, s) => {
            this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                type: "method",
                method: "delete",
                id: s
            }), this.values.forEach(c => {
                if (c.topic === n) {
                    if (typeof s < "u" && c.id !== s) return;
                    this.records.delete(c.id), this.events.emit(kr.deleted, c)
                }
            })
        }, this.exists = async (n, s) => (this.isInitialized(), this.records.has(s) ? (await this.getRecord(s)).topic === n : !1), this.on = (n, s) => {
            this.events.on(n, s)
        }, this.once = (n, s) => {
            this.events.once(n, s)
        }, this.off = (n, s) => {
            this.events.off(n, s)
        }, this.removeListener = (n, s) => {
            this.events.removeListener(n, s)
        }, this.logger = $e.generateChildLogger(r, this.name)
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get size() {
        return this.records.size
    }
    get keys() {
        return Array.from(this.records.keys())
    }
    get values() {
        return Array.from(this.records.values())
    }
    get pending() {
        const t = [];
        return this.values.forEach(r => {
            if (typeof r.response < "u") return;
            const n = {
                topic: r.topic,
                request: yn(r.request.method, r.request.params, r.id),
                chainId: r.chainId
            };
            return t.push(n)
        }), t
    }
    async setJsonRpcRecords(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getJsonRpcRecords() {
        return await this.core.storage.getItem(this.storageKey)
    }
    getRecord(t) {
        this.isInitialized();
        const r = this.records.get(t);
        if (!r) {
            const {
                message: n
            } = ee("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw new Error(n)
        }
        return r
    }
    async persist() {
        await this.setJsonRpcRecords(this.values), this.events.emit(kr.sync)
    }
    async restore() {
        try {
            const t = await this.getJsonRpcRecords();
            if (typeof t > "u" || !t.length) return;
            if (this.records.size) {
                const {
                    message: r
                } = ee("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = t, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t)
        }
    }
    registerEventListeners() {
        this.events.on(kr.created, t => {
            const r = kr.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: t
            }), this.persist()
        }), this.events.on(kr.updated, t => {
            const r = kr.updated;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: t
            }), this.persist()
        }), this.events.on(kr.deleted, t => {
            const r = kr.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                record: t
            }), this.persist()
        }), this.core.heartbeat.on(mn.HEARTBEAT_EVENTS.pulse, () => {
            this.cleanup()
        })
    }
    cleanup() {
        try {
            this.records.forEach(t => {
                ne.toMiliseconds(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id))
            })
        } catch (t) {
            this.logger.warn(t)
        }
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class _I extends V_ {
    constructor(t, r) {
        super(t, r), this.core = t, this.logger = r, this.expirations = new Map, this.events = new Or.EventEmitter, this.name = QE, this.version = YE, this.cached = [], this.initialized = !1, this.storagePrefix = Ii, this.init = async () => {
            this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(n => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
        }, this.has = n => {
            try {
                const s = this.formatTarget(n);
                return typeof this.getExpiration(s) < "u"
            } catch {
                return !1
            }
        }, this.set = (n, s) => {
            this.isInitialized();
            const c = this.formatTarget(n),
                f = {
                    target: c,
                    expiry: s
                };
            this.expirations.set(c, f), this.checkExpiry(c, f), this.events.emit(Sr.created, {
                target: c,
                expiration: f
            })
        }, this.get = n => {
            this.isInitialized();
            const s = this.formatTarget(n);
            return this.getExpiration(s)
        }, this.del = n => {
            if (this.isInitialized(), this.has(n)) {
                const s = this.formatTarget(n),
                    c = this.getExpiration(s);
                this.expirations.delete(s), this.events.emit(Sr.deleted, {
                    target: s,
                    expiration: c
                })
            }
        }, this.on = (n, s) => {
            this.events.on(n, s)
        }, this.once = (n, s) => {
            this.events.once(n, s)
        }, this.off = (n, s) => {
            this.events.off(n, s)
        }, this.removeListener = (n, s) => {
            this.events.removeListener(n, s)
        }, this.logger = $e.generateChildLogger(r, this.name)
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    get storageKey() {
        return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
    }
    get length() {
        return this.expirations.size
    }
    get keys() {
        return Array.from(this.expirations.keys())
    }
    get values() {
        return Array.from(this.expirations.values())
    }
    formatTarget(t) {
        if (typeof t == "string") return Bm(t);
        if (typeof t == "number") return km(t);
        const {
            message: r
        } = ee("UNKNOWN_TYPE", `Target type: ${typeof t}`);
        throw new Error(r)
    }
    async setExpirations(t) {
        await this.core.storage.setItem(this.storageKey, t)
    }
    async getExpirations() {
        return await this.core.storage.getItem(this.storageKey)
    }
    async persist() {
        await this.setExpirations(this.values), this.events.emit(Sr.sync)
    }
    async restore() {
        try {
            const t = await this.getExpirations();
            if (typeof t > "u" || !t.length) return;
            if (this.expirations.size) {
                const {
                    message: r
                } = ee("RESTORE_WILL_OVERRIDE", this.name);
                throw this.logger.error(r), new Error(r)
            }
            this.cached = t, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values
            })
        } catch (t) {
            this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t)
        }
    }
    getExpiration(t) {
        const r = this.expirations.get(t);
        if (!r) {
            const {
                message: n
            } = ee("NO_MATCHING_KEY", `${this.name}: ${t}`);
            throw this.logger.error(n), new Error(n)
        }
        return r
    }
    checkExpiry(t, r) {
        const {
            expiry: n
        } = r;
        ne.toMiliseconds(n) - Date.now() <= 0 && this.expire(t, r)
    }
    expire(t, r) {
        this.expirations.delete(t), this.events.emit(Sr.expired, {
            target: t,
            expiration: r
        })
    }
    checkExpirations() {
        this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t))
    }
    registerEventListeners() {
        this.core.heartbeat.on(mn.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Sr.created, t => {
            const r = Sr.created;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), this.persist()
        }), this.events.on(Sr.expired, t => {
            const r = Sr.expired;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), this.persist()
        }), this.events.on(Sr.deleted, t => {
            const r = Sr.deleted;
            this.logger.info(`Emitting ${r}`), this.logger.debug({
                type: "event",
                event: r,
                data: t
            }), this.persist()
        })
    }
    isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
    }
}
class wI extends G_ {
    constructor(t, r) {
        super(t, r), this.projectId = t, this.logger = r, this.name = ac, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async () => {
            if (this.verifyDisabled || Km() || !nf()) return;
            const n = vo;
            this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
            try {
                await this.createIframe()
            } catch (s) {
                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(s)
            }
            if (!this.initialized) {
                this.removeIframe(), this.verifyUrl = Pl;
                try {
                    await this.createIframe()
                } catch (s) {
                    this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(s), this.verifyDisabled = !0
                }
            }
        }, this.register = async n => {
            this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init())
        }, this.resolve = async n => {
            if (this.isDevEnv) return "";
            const s = (n == null ? void 0 : n.verifyUrl) || vo;
            let c;
            try {
                c = await this.fetchAttestation(n.attestationId, s)
            } catch (f) {
                this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${s}`), this.logger.info(f), c = await this.fetchAttestation(n.attestationId, Pl)
            }
            return c
        }, this.fetchAttestation = async (n, s) => {
            this.logger.info(`resolving attestation: ${n} from url: ${s}`);
            const c = this.startAbortTimer(ne.ONE_SECOND * 2),
                f = await fetch(`${s}/attestation/${n}`, {
                    signal: this.abortController.signal
                });
            return clearTimeout(c), f.status === 200 ? await f.json() : void 0
        }, this.addToQueue = n => {
            this.queue.push(n)
        }, this.processQueue = () => {
            this.queue.length !== 0 && (this.queue.forEach(n => this.sendPost(n)), this.queue = [])
        }, this.sendPost = n => {
            var s;
            try {
                if (!this.iframe) return;
                (s = this.iframe.contentWindow) == null || s.postMessage(n, "*"), this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`)
            } catch {}
        }, this.createIframe = async () => {
            let n;
            const s = c => {
                c.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", s), n())
            };
            await Promise.race([new Promise(c => {
                if (document.getElementById(ac)) return c();
                window.addEventListener("message", s);
                const f = document.createElement("iframe");
                f.id = ac, f.src = `${this.verifyUrl}/${this.projectId}`, f.style.display = "none", document.body.append(f), this.iframe = f, n = c
            }), new Promise((c, f) => setTimeout(() => {
                window.removeEventListener("message", s), f("verify iframe load timeout")
            }, ne.toMiliseconds(ne.FIVE_SECONDS)))])
        }, this.removeIframe = () => {
            this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
        }, this.logger = $e.generateChildLogger(r, this.name), this.verifyUrl = vo, this.abortController = new AbortController, this.isDevEnv = Vm() && {}.IS_VITEST
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    startAbortTimer(t) {
        return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), ne.toMiliseconds(t))
    }
}
var bI = Object.defineProperty,
    Nl = Object.getOwnPropertySymbols,
    EI = Object.prototype.hasOwnProperty,
    II = Object.prototype.propertyIsEnumerable,
    Dl = (a, t, r) => t in a ? bI(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    Fl = (a, t) => {
        for (var r in t || (t = {})) EI.call(t, r) && Dl(a, r, t[r]);
        if (Nl)
            for (var r of Nl(t)) II.call(t, r) && Dl(a, r, t[r]);
        return a
    };
class Uc extends M_ {
    constructor(t) {
        super(t), this.protocol = qf, this.version = xE, this.name = zc, this.events = new Or.EventEmitter, this.initialized = !1, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.projectId = t == null ? void 0 : t.projectId, this.relayUrl = (t == null ? void 0 : t.relayUrl) || zf, this.customStoragePrefix = t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "";
        const r = typeof(t == null ? void 0 : t.logger) < "u" && typeof(t == null ? void 0 : t.logger) != "string" ? t.logger : $e.pino($e.getDefaultLoggerOptions({
            level: (t == null ? void 0 : t.logger) || PE.logger
        }));
        this.logger = $e.generateChildLogger(r, this.name), this.heartbeat = new mn.HeartBeat, this.crypto = new ZE(this, this.logger, t == null ? void 0 : t.keychain), this.history = new mI(this, this.logger), this.expirer = new _I(this, this.logger), this.storage = t != null && t.storage ? t.storage : new B1(Fl(Fl({}, SE), t == null ? void 0 : t.storageOptions)), this.relayer = new pI({
            core: this,
            logger: this.logger,
            relayUrl: this.relayUrl,
            projectId: this.projectId
        }), this.pairing = new vI(this, this.logger), this.verify = new wI(this.projectId || "", this.logger)
    }
    static async init(t) {
        const r = new Uc(t);
        await r.initialize();
        const n = await r.crypto.getClientId();
        return await r.storage.setItem(HE, n), r
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    async start() {
        this.initialized || await this.initialize()
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
        } catch (t) {
            throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t), this.logger.error(t.message), t
        }
    }
}
const xI = Uc,
    Uf = "wc",
    Hf = 2,
    Bf = "client",
    Hc = `${Uf}@${Hf}:${Bf}:`,
    uc = {
        name: Bf,
        logger: "error",
        controller: !1,
        relayUrl: "wss://relay.walletconnect.com"
    },
    Ll = "WALLETCONNECT_DEEPLINK_CHOICE",
    PI = "proposal",
    kf = "Proposal expired",
    SI = "session",
    uo = ne.SEVEN_DAYS,
    OI = "engine",
    Hn = {
        wc_sessionPropose: {
            req: {
                ttl: ne.FIVE_MINUTES,
                prompt: !0,
                tag: 1100
            },
            res: {
                ttl: ne.FIVE_MINUTES,
                prompt: !1,
                tag: 1101
            }
        },
        wc_sessionSettle: {
            req: {
                ttl: ne.FIVE_MINUTES,
                prompt: !1,
                tag: 1102
            },
            res: {
                ttl: ne.FIVE_MINUTES,
                prompt: !1,
                tag: 1103
            }
        },
        wc_sessionUpdate: {
            req: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 1104
            },
            res: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 1105
            }
        },
        wc_sessionExtend: {
            req: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 1106
            },
            res: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 1107
            }
        },
        wc_sessionRequest: {
            req: {
                ttl: ne.FIVE_MINUTES,
                prompt: !0,
                tag: 1108
            },
            res: {
                ttl: ne.FIVE_MINUTES,
                prompt: !1,
                tag: 1109
            }
        },
        wc_sessionEvent: {
            req: {
                ttl: ne.FIVE_MINUTES,
                prompt: !0,
                tag: 1110
            },
            res: {
                ttl: ne.FIVE_MINUTES,
                prompt: !1,
                tag: 1111
            }
        },
        wc_sessionDelete: {
            req: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 1112
            },
            res: {
                ttl: ne.ONE_DAY,
                prompt: !1,
                tag: 1113
            }
        },
        wc_sessionPing: {
            req: {
                ttl: ne.THIRTY_SECONDS,
                prompt: !1,
                tag: 1114
            },
            res: {
                ttl: ne.THIRTY_SECONDS,
                prompt: !1,
                tag: 1115
            }
        }
    },
    hc = {
        min: ne.FIVE_MINUTES,
        max: ne.SEVEN_DAYS
    },
    oi = {
        idle: "IDLE",
        active: "ACTIVE"
    },
    RI = "request",
    AI = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var TI = Object.defineProperty,
    CI = Object.defineProperties,
    $I = Object.getOwnPropertyDescriptors,
    jl = Object.getOwnPropertySymbols,
    NI = Object.prototype.hasOwnProperty,
    DI = Object.prototype.propertyIsEnumerable,
    ql = (a, t, r) => t in a ? TI(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    cr = (a, t) => {
        for (var r in t || (t = {})) NI.call(t, r) && ql(a, r, t[r]);
        if (jl)
            for (var r of jl(t)) DI.call(t, r) && ql(a, r, t[r]);
        return a
    },
    Bn = (a, t) => CI(a, $I(t));
class FI extends J_ {
    constructor(t) {
        super(t), this.name = OI, this.events = new Dc, this.initialized = !1, this.ignoredPayloadTypes = [tf], this.requestQueue = {
            state: oi.idle,
            queue: []
        }, this.sessionRequestQueue = {
            state: oi.idle,
            queue: []
        }, this.requestQueueDelay = ne.ONE_SECOND, this.init = async () => {
            this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                methods: Object.keys(Hn)
            }), this.initialized = !0, setTimeout(() => {
                this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
            }, ne.toMiliseconds(this.requestQueueDelay)))
        }, this.connect = async r => {
            await this.isInitialized();
            const n = Bn(cr({}, r), {
                requiredNamespaces: r.requiredNamespaces || {},
                optionalNamespaces: r.optionalNamespaces || {}
            });
            await this.isValidConnect(n);
            const {
                pairingTopic: s,
                requiredNamespaces: c,
                optionalNamespaces: f,
                sessionProperties: g,
                relays: m
            } = n;
            let p = s,
                w, R = !1;
            if (p && (R = this.client.core.pairing.pairings.get(p).active), !p || !R) {
                const {
                    topic: ue,
                    uri: fe
                } = await this.client.core.pairing.create();
                p = ue, w = fe
            }
            const x = await this.client.core.crypto.generateKeyPair(),
                C = cr({
                    requiredNamespaces: c,
                    optionalNamespaces: f,
                    relays: m ? ? [{
                        protocol: Mf
                    }],
                    proposer: {
                        publicKey: x,
                        metadata: this.client.metadata
                    }
                }, g && {
                    sessionProperties: g
                }),
                {
                    reject: D,
                    resolve: V,
                    done: ie
                } = pn(ne.FIVE_MINUTES, kf);
            if (this.events.once(Nt("session_connect"), async ({
                    error: ue,
                    session: fe
                }) => {
                    if (ue) D(ue);
                    else if (fe) {
                        fe.self.publicKey = x;
                        const de = Bn(cr({}, fe), {
                            requiredNamespaces: fe.requiredNamespaces,
                            optionalNamespaces: fe.optionalNamespaces
                        });
                        await this.client.session.set(fe.topic, de), await this.setExpiry(fe.topic, fe.expiry), p && await this.client.core.pairing.updateMetadata({
                            topic: p,
                            metadata: fe.peer.metadata
                        }), V(de)
                    }
                }), !p) {
                const {
                    message: ue
                } = ee("NO_MATCHING_KEY", `connect() pairing topic: ${p}`);
                throw new Error(ue)
            }
            const he = await this.sendRequest({
                    topic: p,
                    method: "wc_sessionPropose",
                    params: C
                }),
                le = Fr(ne.FIVE_MINUTES);
            return await this.setProposal(he, cr({
                id: he,
                expiry: le
            }, C)), {
                uri: w,
                approval: ie
            }
        }, this.pair = async r => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async r => {
            await this.isInitialized(), await this.isValidApprove(r);
            const {
                id: n,
                relayProtocol: s,
                namespaces: c,
                sessionProperties: f
            } = r, g = this.client.proposal.get(n);
            let {
                pairingTopic: m,
                proposer: p,
                requiredNamespaces: w,
                optionalNamespaces: R
            } = g;
            m = m || "", po(w) || (w = Wm(c, "approve()"));
            const x = await this.client.core.crypto.generateKeyPair(),
                C = p.publicKey,
                D = await this.client.core.crypto.generateSharedKey(x, C);
            m && n && (await this.client.core.pairing.updateMetadata({
                topic: m,
                metadata: p.metadata
            }), await this.sendResult({
                id: n,
                topic: m,
                result: {
                    relay: {
                        protocol: s ? ? "irn"
                    },
                    responderPublicKey: x
                }
            }), await this.client.proposal.delete(n, tr("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                topic: m
            }));
            const V = cr({
                relay: {
                    protocol: s ? ? "irn"
                },
                namespaces: c,
                requiredNamespaces: w,
                optionalNamespaces: R,
                pairingTopic: m,
                controller: {
                    publicKey: x,
                    metadata: this.client.metadata
                },
                expiry: Fr(uo)
            }, f && {
                sessionProperties: f
            });
            await this.client.core.relayer.subscribe(D), await this.sendRequest({
                topic: D,
                method: "wc_sessionSettle",
                params: V,
                throwOnFailedPublish: !0
            });
            const ie = Bn(cr({}, V), {
                topic: D,
                pairingTopic: m,
                acknowledged: !1,
                self: V.controller,
                peer: {
                    publicKey: p.publicKey,
                    metadata: p.metadata
                },
                controller: x
            });
            return await this.client.session.set(D, ie), await this.setExpiry(D, Fr(uo)), {
                topic: D,
                acknowledged: () => new Promise(he => setTimeout(() => he(this.client.session.get(D)), 500))
            }
        }, this.reject = async r => {
            await this.isInitialized(), await this.isValidReject(r);
            const {
                id: n,
                reason: s
            } = r, {
                pairingTopic: c
            } = this.client.proposal.get(n);
            c && (await this.sendError(n, c, s), await this.client.proposal.delete(n, tr("USER_DISCONNECTED")))
        }, this.update = async r => {
            await this.isInitialized(), await this.isValidUpdate(r);
            const {
                topic: n,
                namespaces: s
            } = r, c = await this.sendRequest({
                topic: n,
                method: "wc_sessionUpdate",
                params: {
                    namespaces: s
                }
            }), {
                done: f,
                resolve: g,
                reject: m
            } = pn();
            return this.events.once(Nt("session_update", c), ({
                error: p
            }) => {
                p ? m(p) : g()
            }), await this.client.session.update(n, {
                namespaces: s
            }), {
                acknowledged: f
            }
        }, this.extend = async r => {
            await this.isInitialized(), await this.isValidExtend(r);
            const {
                topic: n
            } = r, s = await this.sendRequest({
                topic: n,
                method: "wc_sessionExtend",
                params: {}
            }), {
                done: c,
                resolve: f,
                reject: g
            } = pn();
            return this.events.once(Nt("session_extend", s), ({
                error: m
            }) => {
                m ? g(m) : f()
            }), await this.setExpiry(n, Fr(uo)), {
                acknowledged: c
            }
        }, this.request = async r => {
            await this.isInitialized(), await this.isValidRequest(r);
            const {
                chainId: n,
                request: s,
                topic: c,
                expiry: f
            } = r, g = jc(), {
                done: m,
                resolve: p,
                reject: w
            } = pn(f, "Request expired. Please try again.");
            return this.events.once(Nt("session_request", g), ({
                error: R,
                result: x
            }) => {
                R ? w(R) : p(x)
            }), await Promise.all([new Promise(async R => {
                await this.sendRequest({
                    clientRpcId: g,
                    topic: c,
                    method: "wc_sessionRequest",
                    params: {
                        request: s,
                        chainId: n
                    },
                    expiry: f,
                    throwOnFailedPublish: !0
                }).catch(x => w(x)), this.client.events.emit("session_request_sent", {
                    topic: c,
                    request: s,
                    chainId: n,
                    id: g
                }), R()
            }), new Promise(async R => {
                const x = await this.client.core.storage.getItem(Ll);
                Jm({
                    id: g,
                    topic: c,
                    wcDeepLink: x
                }), R()
            }), m()]).then(R => R[2])
        }, this.respond = async r => {
            await this.isInitialized(), await this.isValidRespond(r);
            const {
                topic: n,
                response: s
            } = r, {
                id: c
            } = s;
            ai(s) ? await this.sendResult({
                id: c,
                topic: n,
                result: s.result,
                throwOnFailedPublish: !0
            }) : Lr(s) && await this.sendError(c, n, s.error), this.cleanupAfterResponse(r)
        }, this.ping = async r => {
            await this.isInitialized(), await this.isValidPing(r);
            const {
                topic: n
            } = r;
            if (this.client.session.keys.includes(n)) {
                const s = await this.sendRequest({
                        topic: n,
                        method: "wc_sessionPing",
                        params: {}
                    }),
                    {
                        done: c,
                        resolve: f,
                        reject: g
                    } = pn();
                this.events.once(Nt("session_ping", s), ({
                    error: m
                }) => {
                    m ? g(m) : f()
                }), await c()
            } else this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({
                topic: n
            })
        }, this.emit = async r => {
            await this.isInitialized(), await this.isValidEmit(r);
            const {
                topic: n,
                event: s,
                chainId: c
            } = r;
            await this.sendRequest({
                topic: n,
                method: "wc_sessionEvent",
                params: {
                    event: s,
                    chainId: c
                }
            })
        }, this.disconnect = async r => {
            await this.isInitialized(), await this.isValidDisconnect(r);
            const {
                topic: n
            } = r;
            this.client.session.keys.includes(n) ? (await this.sendRequest({
                topic: n,
                method: "wc_sessionDelete",
                params: tr("USER_DISCONNECTED"),
                throwOnFailedPublish: !0
            }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({
                topic: n
            })
        }, this.find = r => (this.isInitialized(), this.client.session.getAll().filter(n => Qm(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async r => {
            if (r.pairingTopic) try {
                const n = this.client.core.pairing.pairings.get(r.pairingTopic),
                    s = this.client.core.pairing.pairings.getAll().filter(c => {
                        var f, g;
                        return ((f = c.peerMetadata) == null ? void 0 : f.url) && ((g = c.peerMetadata) == null ? void 0 : g.url) === r.peer.metadata.url && c.topic && c.topic !== n.topic
                    });
                if (s.length === 0) return;
                this.client.logger.info(`Cleaning up ${s.length} duplicate pairing(s)`), await Promise.all(s.map(c => this.client.core.pairing.disconnect({
                    topic: c.topic
                }))), this.client.logger.info("Duplicate pairings clean up finished")
            } catch (n) {
                this.client.logger.error(n)
            }
        }, this.deleteSession = async (r, n) => {
            const {
                self: s
            } = this.client.session.get(r);
            await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, tr("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(Ll).catch(c => this.client.logger.warn(c))
        }, this.deleteProposal = async (r, n) => {
            await Promise.all([this.client.proposal.delete(r, tr("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)])
        }, this.deletePendingSessionRequest = async (r, n, s = !1) => {
            await Promise.all([this.client.pendingRequest.delete(r, n), s ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(c => c.id !== r), s && (this.sessionRequestQueue.state = oi.idle)
        }, this.setExpiry = async (r, n) => {
            this.client.session.keys.includes(r) && await this.client.session.update(r, {
                expiry: n
            }), this.client.core.expirer.set(r, n)
        }, this.setProposal = async (r, n) => {
            await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry)
        }, this.setPendingSessionRequest = async r => {
            const n = Hn.wc_sessionRequest.req.ttl,
                {
                    id: s,
                    topic: c,
                    params: f,
                    verifyContext: g
                } = r;
            await this.client.pendingRequest.set(s, {
                id: s,
                topic: c,
                params: f,
                verifyContext: g
            }), n && this.client.core.expirer.set(s, Fr(n))
        }, this.sendRequest = async r => {
            const {
                topic: n,
                method: s,
                params: c,
                expiry: f,
                relayRpcId: g,
                clientRpcId: m,
                throwOnFailedPublish: p
            } = r, w = yn(s, c, m);
            if (nf() && AI.includes(s)) {
                const C = gn(JSON.stringify(w));
                this.client.core.verify.register({
                    attestationId: C
                })
            }
            const R = await this.client.core.crypto.encode(n, w),
                x = Hn[s].req;
            return f && (x.ttl = f), g && (x.id = g), this.client.core.history.set(n, w), p ? (x.internal = Bn(cr({}, x.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(n, R, x)) : this.client.core.relayer.publish(n, R, x).catch(C => this.client.logger.error(C)), w.id
        }, this.sendResult = async r => {
            const {
                id: n,
                topic: s,
                result: c,
                throwOnFailedPublish: f
            } = r, g = qc(n, c), m = await this.client.core.crypto.encode(s, g), p = await this.client.core.history.get(s, n), w = Hn[p.request.method].res;
            f ? (w.internal = Bn(cr({}, w.internal), {
                throwOnFailedPublish: !0
            }), await this.client.core.relayer.publish(s, m, w)) : this.client.core.relayer.publish(s, m, w).catch(R => this.client.logger.error(R)), await this.client.core.history.resolve(g)
        }, this.sendError = async (r, n, s) => {
            const c = xo(r, s),
                f = await this.client.core.crypto.encode(n, c),
                g = await this.client.core.history.get(n, r),
                m = Hn[g.request.method].res;
            this.client.core.relayer.publish(n, f, m), await this.client.core.history.resolve(c)
        }, this.cleanup = async () => {
            const r = [],
                n = [];
            this.client.session.getAll().forEach(s => {
                bi(s.expiry) && r.push(s.topic)
            }), this.client.proposal.getAll().forEach(s => {
                bi(s.expiry) && n.push(s.id)
            }), await Promise.all([...r.map(s => this.deleteSession(s)), ...n.map(s => this.deleteProposal(s))])
        }, this.onRelayEventRequest = async r => {
            this.requestQueue.queue.push(r), await this.processRequestsQueue()
        }, this.processRequestsQueue = async () => {
            if (this.requestQueue.state === oi.active) {
                this.client.logger.info("Request queue already active, skipping...");
                return
            }
            for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                this.requestQueue.state = oi.active;
                const r = this.requestQueue.queue.shift();
                if (r) try {
                    this.processRequest(r), await new Promise(n => setTimeout(n, 300))
                } catch (n) {
                    this.client.logger.warn(n)
                }
            }
            this.requestQueue.state = oi.idle
        }, this.processRequest = r => {
            const {
                topic: n,
                payload: s
            } = r, c = s.method;
            switch (c) {
                case "wc_sessionPropose":
                    return this.onSessionProposeRequest(n, s);
                case "wc_sessionSettle":
                    return this.onSessionSettleRequest(n, s);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateRequest(n, s);
                case "wc_sessionExtend":
                    return this.onSessionExtendRequest(n, s);
                case "wc_sessionPing":
                    return this.onSessionPingRequest(n, s);
                case "wc_sessionDelete":
                    return this.onSessionDeleteRequest(n, s);
                case "wc_sessionRequest":
                    return this.onSessionRequest(n, s);
                case "wc_sessionEvent":
                    return this.onSessionEventRequest(n, s);
                default:
                    return this.client.logger.info(`Unsupported request method ${c}`)
            }
        }, this.onRelayEventResponse = async r => {
            const {
                topic: n,
                payload: s
            } = r, c = (await this.client.core.history.get(n, s.id)).request.method;
            switch (c) {
                case "wc_sessionPropose":
                    return this.onSessionProposeResponse(n, s);
                case "wc_sessionSettle":
                    return this.onSessionSettleResponse(n, s);
                case "wc_sessionUpdate":
                    return this.onSessionUpdateResponse(n, s);
                case "wc_sessionExtend":
                    return this.onSessionExtendResponse(n, s);
                case "wc_sessionPing":
                    return this.onSessionPingResponse(n, s);
                case "wc_sessionRequest":
                    return this.onSessionRequestResponse(n, s);
                default:
                    return this.client.logger.info(`Unsupported response method ${c}`)
            }
        }, this.onRelayEventUnknownPayload = r => {
            const {
                topic: n
            } = r, {
                message: s
            } = ee("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
            throw new Error(s)
        }, this.onSessionProposeRequest = async (r, n) => {
            const {
                params: s,
                id: c
            } = n;
            try {
                this.isValidConnect(cr({}, n.params));
                const f = Fr(ne.FIVE_MINUTES),
                    g = cr({
                        id: c,
                        pairingTopic: r,
                        expiry: f
                    }, s);
                await this.setProposal(c, g);
                const m = gn(JSON.stringify(n)),
                    p = await this.getVerifyContext(m, g.proposer.metadata);
                this.client.events.emit("session_proposal", {
                    id: c,
                    params: g,
                    verifyContext: p
                })
            } catch (f) {
                await this.sendError(c, r, f), this.client.logger.error(f)
            }
        }, this.onSessionProposeResponse = async (r, n) => {
            const {
                id: s
            } = n;
            if (ai(n)) {
                const {
                    result: c
                } = n;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    result: c
                });
                const f = this.client.proposal.get(s);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    proposal: f
                });
                const g = f.proposer.publicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    selfPublicKey: g
                });
                const m = c.responderPublicKey;
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    peerPublicKey: m
                });
                const p = await this.client.core.crypto.generateSharedKey(g, m);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    sessionTopic: p
                });
                const w = await this.client.core.relayer.subscribe(p);
                this.client.logger.trace({
                    type: "method",
                    method: "onSessionProposeResponse",
                    subscriptionId: w
                }), await this.client.core.pairing.activate({
                    topic: r
                })
            } else Lr(n) && (await this.client.proposal.delete(s, tr("USER_DISCONNECTED")), this.events.emit(Nt("session_connect"), {
                error: n.error
            }))
        }, this.onSessionSettleRequest = async (r, n) => {
            const {
                id: s,
                params: c
            } = n;
            try {
                this.isValidSessionSettleRequest(c);
                const {
                    relay: f,
                    controller: g,
                    expiry: m,
                    namespaces: p,
                    requiredNamespaces: w,
                    optionalNamespaces: R,
                    sessionProperties: x,
                    pairingTopic: C
                } = n.params, D = cr({
                    topic: r,
                    relay: f,
                    expiry: m,
                    namespaces: p,
                    acknowledged: !0,
                    pairingTopic: C,
                    requiredNamespaces: w,
                    optionalNamespaces: R,
                    controller: g.publicKey,
                    self: {
                        publicKey: "",
                        metadata: this.client.metadata
                    },
                    peer: {
                        publicKey: g.publicKey,
                        metadata: g.metadata
                    }
                }, x && {
                    sessionProperties: x
                });
                await this.sendResult({
                    id: n.id,
                    topic: r,
                    result: !0
                }), this.events.emit(Nt("session_connect"), {
                    session: D
                }), this.cleanupDuplicatePairings(D)
            } catch (f) {
                await this.sendError(s, r, f), this.client.logger.error(f)
            }
        }, this.onSessionSettleResponse = async (r, n) => {
            const {
                id: s
            } = n;
            ai(n) ? (await this.client.session.update(r, {
                acknowledged: !0
            }), this.events.emit(Nt("session_approve", s), {})) : Lr(n) && (await this.client.session.delete(r, tr("USER_DISCONNECTED")), this.events.emit(Nt("session_approve", s), {
                error: n.error
            }))
        }, this.onSessionUpdateRequest = async (r, n) => {
            const {
                params: s,
                id: c
            } = n;
            try {
                const f = `${r}_session_update`,
                    g = oo.get(f);
                if (g && this.isRequestOutOfSync(g, c)) {
                    this.client.logger.info(`Discarding out of sync request - ${c}`);
                    return
                }
                this.isValidUpdate(cr({
                    topic: r
                }, s)), await this.client.session.update(r, {
                    namespaces: s.namespaces
                }), await this.sendResult({
                    id: c,
                    topic: r,
                    result: !0
                }), this.client.events.emit("session_update", {
                    id: c,
                    topic: r,
                    params: s
                }), oo.set(f, c)
            } catch (f) {
                await this.sendError(c, r, f), this.client.logger.error(f)
            }
        }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
            const {
                id: s
            } = n;
            ai(n) ? this.events.emit(Nt("session_update", s), {}) : Lr(n) && this.events.emit(Nt("session_update", s), {
                error: n.error
            })
        }, this.onSessionExtendRequest = async (r, n) => {
            const {
                id: s
            } = n;
            try {
                this.isValidExtend({
                    topic: r
                }), await this.setExpiry(r, Fr(uo)), await this.sendResult({
                    id: s,
                    topic: r,
                    result: !0
                }), this.client.events.emit("session_extend", {
                    id: s,
                    topic: r
                })
            } catch (c) {
                await this.sendError(s, r, c), this.client.logger.error(c)
            }
        }, this.onSessionExtendResponse = (r, n) => {
            const {
                id: s
            } = n;
            ai(n) ? this.events.emit(Nt("session_extend", s), {}) : Lr(n) && this.events.emit(Nt("session_extend", s), {
                error: n.error
            })
        }, this.onSessionPingRequest = async (r, n) => {
            const {
                id: s
            } = n;
            try {
                this.isValidPing({
                    topic: r
                }), await this.sendResult({
                    id: s,
                    topic: r,
                    result: !0
                }), this.client.events.emit("session_ping", {
                    id: s,
                    topic: r
                })
            } catch (c) {
                await this.sendError(s, r, c), this.client.logger.error(c)
            }
        }, this.onSessionPingResponse = (r, n) => {
            const {
                id: s
            } = n;
            setTimeout(() => {
                ai(n) ? this.events.emit(Nt("session_ping", s), {}) : Lr(n) && this.events.emit(Nt("session_ping", s), {
                    error: n.error
                })
            }, 500)
        }, this.onSessionDeleteRequest = async (r, n) => {
            const {
                id: s
            } = n;
            try {
                this.isValidDisconnect({
                    topic: r,
                    reason: n.params
                }), await Promise.all([new Promise(c => {
                    this.client.core.relayer.once(Gt.publish, async () => {
                        c(await this.deleteSession(r))
                    })
                }), this.sendResult({
                    id: s,
                    topic: r,
                    result: !0
                })]), this.client.events.emit("session_delete", {
                    id: s,
                    topic: r
                })
            } catch (c) {
                this.client.logger.error(c)
            }
        }, this.onSessionRequest = async (r, n) => {
            const {
                id: s,
                params: c
            } = n;
            try {
                this.isValidRequest(cr({
                    topic: r
                }, c));
                const f = gn(JSON.stringify(yn("wc_sessionRequest", c, s))),
                    g = this.client.session.get(r),
                    m = await this.getVerifyContext(f, g.peer.metadata),
                    p = {
                        id: s,
                        topic: r,
                        params: c,
                        verifyContext: m
                    };
                await this.setPendingSessionRequest(p), this.addSessionRequestToSessionRequestQueue(p), this.processSessionRequestQueue()
            } catch (f) {
                await this.sendError(s, r, f), this.client.logger.error(f)
            }
        }, this.onSessionRequestResponse = (r, n) => {
            const {
                id: s
            } = n;
            ai(n) ? this.events.emit(Nt("session_request", s), {
                result: n.result
            }) : Lr(n) && this.events.emit(Nt("session_request", s), {
                error: n.error
            })
        }, this.onSessionEventRequest = async (r, n) => {
            const {
                id: s,
                params: c
            } = n;
            try {
                const f = `${r}_session_event_${c.event.name}`,
                    g = oo.get(f);
                if (g && this.isRequestOutOfSync(g, s)) {
                    this.client.logger.info(`Discarding out of sync request - ${s}`);
                    return
                }
                this.isValidEmit(cr({
                    topic: r
                }, c)), this.client.events.emit("session_event", {
                    id: s,
                    topic: r,
                    params: c
                }), oo.set(f, s)
            } catch (f) {
                await this.sendError(s, r, f), this.client.logger.error(f)
            }
        }, this.addSessionRequestToSessionRequestQueue = r => {
            this.sessionRequestQueue.queue.push(r)
        }, this.cleanupAfterResponse = r => {
            this.deletePendingSessionRequest(r.response.id, {
                message: "fulfilled",
                code: 0
            }), setTimeout(() => {
                this.sessionRequestQueue.state = oi.idle, this.processSessionRequestQueue()
            }, ne.toMiliseconds(this.requestQueueDelay))
        }, this.processSessionRequestQueue = () => {
            if (this.sessionRequestQueue.state === oi.active) {
                this.client.logger.info("session request queue is already active.");
                return
            }
            const r = this.sessionRequestQueue.queue[0];
            if (!r) {
                this.client.logger.info("session request queue is empty.");
                return
            }
            try {
                this.sessionRequestQueue.state = oi.active, this.client.events.emit("session_request", r)
            } catch (n) {
                this.client.logger.error(n)
            }
        }, this.onPairingCreated = r => {
            if (r.active) return;
            const n = this.client.proposal.getAll().find(s => s.pairingTopic === r.topic);
            n && this.onSessionProposeRequest(r.topic, yn("wc_sessionPropose", {
                requiredNamespaces: n.requiredNamespaces,
                optionalNamespaces: n.optionalNamespaces,
                relays: n.relays,
                proposer: n.proposer
            }, n.id))
        }, this.isValidConnect = async r => {
            if (!hr(r)) {
                const {
                    message: m
                } = ee("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
                throw new Error(m)
            }
            const {
                pairingTopic: n,
                requiredNamespaces: s,
                optionalNamespaces: c,
                sessionProperties: f,
                relays: g
            } = r;
            if (Ei(n) || await this.isValidPairingTopic(n), !Ym(g, !0)) {
                const {
                    message: m
                } = ee("MISSING_OR_INVALID", `connect() relays: ${g}`);
                throw new Error(m)
            }!Ei(s) && po(s) !== 0 && this.validateNamespaces(s, "requiredNamespaces"), !Ei(c) && po(c) !== 0 && this.validateNamespaces(c, "optionalNamespaces"), Ei(f) || this.validateSessionProps(f, "sessionProperties")
        }, this.validateNamespaces = (r, n) => {
            const s = Xm(r, "connect()", n);
            if (s) throw new Error(s.message)
        }, this.isValidApprove = async r => {
            if (!hr(r)) throw new Error(ee("MISSING_OR_INVALID", `approve() params: ${r}`).message);
            const {
                id: n,
                namespaces: s,
                relayProtocol: c,
                sessionProperties: f
            } = r;
            await this.isValidProposalId(n);
            const g = this.client.proposal.get(n),
                m = Xa(s, "approve()");
            if (m) throw new Error(m.message);
            const p = Gh(g.requiredNamespaces, s, "approve()");
            if (p) throw new Error(p.message);
            if (!dn(c, !0)) {
                const {
                    message: w
                } = ee("MISSING_OR_INVALID", `approve() relayProtocol: ${c}`);
                throw new Error(w)
            }
            Ei(f) || this.validateSessionProps(f, "sessionProperties")
        }, this.isValidReject = async r => {
            if (!hr(r)) {
                const {
                    message: c
                } = ee("MISSING_OR_INVALID", `reject() params: ${r}`);
                throw new Error(c)
            }
            const {
                id: n,
                reason: s
            } = r;
            if (await this.isValidProposalId(n), !Zm(s)) {
                const {
                    message: c
                } = ee("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s)}`);
                throw new Error(c)
            }
        }, this.isValidSessionSettleRequest = r => {
            if (!hr(r)) {
                const {
                    message: p
                } = ee("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
                throw new Error(p)
            }
            const {
                relay: n,
                controller: s,
                namespaces: c,
                expiry: f
            } = r;
            if (!e1(n)) {
                const {
                    message: p
                } = ee("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                throw new Error(p)
            }
            const g = t1(s, "onSessionSettleRequest()");
            if (g) throw new Error(g.message);
            const m = Xa(c, "onSessionSettleRequest()");
            if (m) throw new Error(m.message);
            if (bi(f)) {
                const {
                    message: p
                } = ee("EXPIRED", "onSessionSettleRequest()");
                throw new Error(p)
            }
        }, this.isValidUpdate = async r => {
            if (!hr(r)) {
                const {
                    message: m
                } = ee("MISSING_OR_INVALID", `update() params: ${r}`);
                throw new Error(m)
            }
            const {
                topic: n,
                namespaces: s
            } = r;
            await this.isValidSessionTopic(n);
            const c = this.client.session.get(n),
                f = Xa(s, "update()");
            if (f) throw new Error(f.message);
            const g = Gh(c.requiredNamespaces, s, "update()");
            if (g) throw new Error(g.message)
        }, this.isValidExtend = async r => {
            if (!hr(r)) {
                const {
                    message: s
                } = ee("MISSING_OR_INVALID", `extend() params: ${r}`);
                throw new Error(s)
            }
            const {
                topic: n
            } = r;
            await this.isValidSessionTopic(n)
        }, this.isValidRequest = async r => {
            if (!hr(r)) {
                const {
                    message: m
                } = ee("MISSING_OR_INVALID", `request() params: ${r}`);
                throw new Error(m)
            }
            const {
                topic: n,
                request: s,
                chainId: c,
                expiry: f
            } = r;
            await this.isValidSessionTopic(n);
            const {
                namespaces: g
            } = this.client.session.get(n);
            if (!Wh(g, c)) {
                const {
                    message: m
                } = ee("MISSING_OR_INVALID", `request() chainId: ${c}`);
                throw new Error(m)
            }
            if (!r1(s)) {
                const {
                    message: m
                } = ee("MISSING_OR_INVALID", `request() ${JSON.stringify(s)}`);
                throw new Error(m)
            }
            if (!i1(g, c, s.method)) {
                const {
                    message: m
                } = ee("MISSING_OR_INVALID", `request() method: ${s.method}`);
                throw new Error(m)
            }
            if (f && !n1(f, hc)) {
                const {
                    message: m
                } = ee("MISSING_OR_INVALID", `request() expiry: ${f}. Expiry must be a number (in seconds) between ${hc.min} and ${hc.max}`);
                throw new Error(m)
            }
        }, this.isValidRespond = async r => {
            if (!hr(r)) {
                const {
                    message: c
                } = ee("MISSING_OR_INVALID", `respond() params: ${r}`);
                throw new Error(c)
            }
            const {
                topic: n,
                response: s
            } = r;
            if (await this.isValidSessionTopic(n), !s1(s)) {
                const {
                    message: c
                } = ee("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(s)}`);
                throw new Error(c)
            }
        }, this.isValidPing = async r => {
            if (!hr(r)) {
                const {
                    message: s
                } = ee("MISSING_OR_INVALID", `ping() params: ${r}`);
                throw new Error(s)
            }
            const {
                topic: n
            } = r;
            await this.isValidSessionOrPairingTopic(n)
        }, this.isValidEmit = async r => {
            if (!hr(r)) {
                const {
                    message: g
                } = ee("MISSING_OR_INVALID", `emit() params: ${r}`);
                throw new Error(g)
            }
            const {
                topic: n,
                event: s,
                chainId: c
            } = r;
            await this.isValidSessionTopic(n);
            const {
                namespaces: f
            } = this.client.session.get(n);
            if (!Wh(f, c)) {
                const {
                    message: g
                } = ee("MISSING_OR_INVALID", `emit() chainId: ${c}`);
                throw new Error(g)
            }
            if (!o1(s)) {
                const {
                    message: g
                } = ee("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
                throw new Error(g)
            }
            if (!a1(f, c, s.name)) {
                const {
                    message: g
                } = ee("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s)}`);
                throw new Error(g)
            }
        }, this.isValidDisconnect = async r => {
            if (!hr(r)) {
                const {
                    message: s
                } = ee("MISSING_OR_INVALID", `disconnect() params: ${r}`);
                throw new Error(s)
            }
            const {
                topic: n
            } = r;
            await this.isValidSessionOrPairingTopic(n)
        }, this.getVerifyContext = async (r, n) => {
            const s = {
                verified: {
                    verifyUrl: n.verifyUrl || vo,
                    validation: "UNKNOWN",
                    origin: n.url || ""
                }
            };
            try {
                const c = await this.client.core.verify.resolve({
                    attestationId: r,
                    verifyUrl: n.verifyUrl
                });
                c && (s.verified.origin = c.origin, s.verified.isScam = c.isScam, s.verified.validation = c.origin === new URL(n.url).origin ? "VALID" : "INVALID")
            } catch (c) {
                this.client.logger.info(c)
            }
            return this.client.logger.info(`Verify context: ${JSON.stringify(s)}`), s
        }, this.validateSessionProps = (r, n) => {
            Object.values(r).forEach(s => {
                if (!dn(s, !1)) {
                    const {
                        message: c
                    } = ee("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(s)}`);
                    throw new Error(c)
                }
            })
        }
    }
    async isInitialized() {
        if (!this.initialized) {
            const {
                message: t
            } = ee("NOT_INITIALIZED", this.name);
            throw new Error(t)
        }
        await this.client.core.relayer.confirmOnlineStateOrThrow()
    }
    registerRelayerEvents() {
        this.client.core.relayer.on(Gt.message, async t => {
            const {
                topic: r,
                message: n
            } = t;
            if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n))) return;
            const s = await this.client.core.crypto.decode(r, n);
            try {
                Mc(s) ? (this.client.core.history.set(r, s), this.onRelayEventRequest({
                    topic: r,
                    payload: s
                })) : Po(s) ? (await this.client.core.history.resolve(s), await this.onRelayEventResponse({
                    topic: r,
                    payload: s
                }), this.client.core.history.delete(r, s.id)) : this.onRelayEventUnknownPayload({
                    topic: r,
                    payload: s
                })
            } catch (c) {
                this.client.logger.error(c)
            }
        })
    }
    registerExpirerEvents() {
        this.client.core.expirer.on(Sr.expired, async t => {
            const {
                topic: r,
                id: n
            } = rf(t.target);
            if (n && this.client.pendingRequest.keys.includes(n)) return await this.deletePendingSessionRequest(n, ee("EXPIRED"), !0);
            r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", {
                topic: r
            })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", {
                id: n
            }))
        })
    }
    registerPairingEvents() {
        this.client.core.pairing.events.on(Vn.create, t => this.onPairingCreated(t))
    }
    isValidPairingTopic(t) {
        if (!dn(t, !1)) {
            const {
                message: r
            } = ee("MISSING_OR_INVALID", `pairing topic should be a string: ${t}`);
            throw new Error(r)
        }
        if (!this.client.core.pairing.pairings.keys.includes(t)) {
            const {
                message: r
            } = ee("NO_MATCHING_KEY", `pairing topic doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (bi(this.client.core.pairing.pairings.get(t).expiry)) {
            const {
                message: r
            } = ee("EXPIRED", `pairing topic: ${t}`);
            throw new Error(r)
        }
    }
    async isValidSessionTopic(t) {
        if (!dn(t, !1)) {
            const {
                message: r
            } = ee("MISSING_OR_INVALID", `session topic should be a string: ${t}`);
            throw new Error(r)
        }
        if (!this.client.session.keys.includes(t)) {
            const {
                message: r
            } = ee("NO_MATCHING_KEY", `session topic doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (bi(this.client.session.get(t).expiry)) {
            await this.deleteSession(t);
            const {
                message: r
            } = ee("EXPIRED", `session topic: ${t}`);
            throw new Error(r)
        }
    }
    async isValidSessionOrPairingTopic(t) {
        if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
        else if (this.client.core.pairing.pairings.keys.includes(t)) this.isValidPairingTopic(t);
        else if (dn(t, !1)) {
            const {
                message: r
            } = ee("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${t}`);
            throw new Error(r)
        } else {
            const {
                message: r
            } = ee("MISSING_OR_INVALID", `session or pairing topic should be a string: ${t}`);
            throw new Error(r)
        }
    }
    async isValidProposalId(t) {
        if (!c1(t)) {
            const {
                message: r
            } = ee("MISSING_OR_INVALID", `proposal id should be a number: ${t}`);
            throw new Error(r)
        }
        if (!this.client.proposal.keys.includes(t)) {
            const {
                message: r
            } = ee("NO_MATCHING_KEY", `proposal id doesn't exist: ${t}`);
            throw new Error(r)
        }
        if (bi(this.client.proposal.get(t).expiry)) {
            await this.deleteProposal(t);
            const {
                message: r
            } = ee("EXPIRED", `proposal id: ${t}`);
            throw new Error(r)
        }
    }
}
class LI extends Oo {
    constructor(t, r) {
        super(t, r, PI, Hc), this.core = t, this.logger = r
    }
}
class jI extends Oo {
    constructor(t, r) {
        super(t, r, SI, Hc), this.core = t, this.logger = r
    }
}
class qI extends Oo {
    constructor(t, r) {
        super(t, r, RI, Hc, n => n.id), this.core = t, this.logger = r
    }
}
let MI = class Kf extends W_ {
    constructor(t) {
        super(t), this.protocol = Uf, this.version = Hf, this.name = uc.name, this.events = new Or.EventEmitter, this.on = (n, s) => this.events.on(n, s), this.once = (n, s) => this.events.once(n, s), this.off = (n, s) => this.events.off(n, s), this.removeListener = (n, s) => this.events.removeListener(n, s), this.removeAllListeners = n => this.events.removeAllListeners(n), this.connect = async n => {
            try {
                return await this.engine.connect(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.pair = async n => {
            try {
                return await this.engine.pair(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.approve = async n => {
            try {
                return await this.engine.approve(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.reject = async n => {
            try {
                return await this.engine.reject(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.update = async n => {
            try {
                return await this.engine.update(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.extend = async n => {
            try {
                return await this.engine.extend(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.request = async n => {
            try {
                return await this.engine.request(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.respond = async n => {
            try {
                return await this.engine.respond(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.ping = async n => {
            try {
                return await this.engine.ping(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.emit = async n => {
            try {
                return await this.engine.emit(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.disconnect = async n => {
            try {
                return await this.engine.disconnect(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.find = n => {
            try {
                return this.engine.find(n)
            } catch (s) {
                throw this.logger.error(s.message), s
            }
        }, this.getPendingSessionRequests = () => {
            try {
                return this.engine.getPendingSessionRequests()
            } catch (n) {
                throw this.logger.error(n.message), n
            }
        }, this.name = (t == null ? void 0 : t.name) || uc.name, this.metadata = (t == null ? void 0 : t.metadata) || Gm();
        const r = typeof(t == null ? void 0 : t.logger) < "u" && typeof(t == null ? void 0 : t.logger) != "string" ? t.logger : $e.pino($e.getDefaultLoggerOptions({
            level: (t == null ? void 0 : t.logger) || uc.logger
        }));
        this.core = (t == null ? void 0 : t.core) || new xI(t), this.logger = $e.generateChildLogger(r, this.name), this.session = new jI(this.core, this.logger), this.proposal = new LI(this.core, this.logger), this.pendingRequest = new qI(this.core, this.logger), this.engine = new FI(this)
    }
    static async init(t) {
        const r = new Kf(t);
        return await r.initialize(), r
    }
    get context() {
        return $e.getLoggerContext(this.logger)
    }
    get pairing() {
        return this.core.pairing.pairings
    }
    async initialize() {
        this.logger.trace("Initialized");
        try {
            await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                verifyUrl: this.metadata.verifyUrl
            }), this.logger.info("SignClient Initialization Success")
        } catch (t) {
            throw this.logger.info("SignClient Initialization Failure"), this.logger.error(t.message), t
        }
    }
};
var Ac = {
    exports: {}
};
(function(a, t) {
    var r = function() {
        function s() {
            this.fetch = !1, this.DOMException = globalThis.DOMException
        }
        return s.prototype = globalThis, new s
    }();
    (function(s) {
        (function(c) {
            var f = {
                searchParams: "URLSearchParams" in s,
                iterable: "Symbol" in s && "iterator" in Symbol,
                blob: "FileReader" in s && "Blob" in s && function() {
                    try {
                        return new Blob, !0
                    } catch {
                        return !1
                    }
                }(),
                formData: "FormData" in s,
                arrayBuffer: "ArrayBuffer" in s
            };

            function g(T) {
                return T && DataView.prototype.isPrototypeOf(T)
            }
            if (f.arrayBuffer) var m = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                p = ArrayBuffer.isView || function(T) {
                    return T && m.indexOf(Object.prototype.toString.call(T)) > -1
                };

            function w(T) {
                if (typeof T != "string" && (T = String(T)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(T)) throw new TypeError("Invalid character in header field name");
                return T.toLowerCase()
            }

            function R(T) {
                return typeof T != "string" && (T = String(T)), T
            }

            function x(T) {
                var b = {
                    next: function() {
                        var $ = T.shift();
                        return {
                            done: $ === void 0,
                            value: $
                        }
                    }
                };
                return f.iterable && (b[Symbol.iterator] = function() {
                    return b
                }), b
            }

            function C(T) {
                this.map = {}, T instanceof C ? T.forEach(function(b, $) {
                    this.append($, b)
                }, this) : Array.isArray(T) ? T.forEach(function(b) {
                    this.append(b[0], b[1])
                }, this) : T && Object.getOwnPropertyNames(T).forEach(function(b) {
                    this.append(b, T[b])
                }, this)
            }
            C.prototype.append = function(T, b) {
                T = w(T), b = R(b);
                var $ = this.map[T];
                this.map[T] = $ ? $ + ", " + b : b
            }, C.prototype.delete = function(T) {
                delete this.map[w(T)]
            }, C.prototype.get = function(T) {
                return T = w(T), this.has(T) ? this.map[T] : null
            }, C.prototype.has = function(T) {
                return this.map.hasOwnProperty(w(T))
            }, C.prototype.set = function(T, b) {
                this.map[w(T)] = R(b)
            }, C.prototype.forEach = function(T, b) {
                for (var $ in this.map) this.map.hasOwnProperty($) && T.call(b, this.map[$], $, this)
            }, C.prototype.keys = function() {
                var T = [];
                return this.forEach(function(b, $) {
                    T.push($)
                }), x(T)
            }, C.prototype.values = function() {
                var T = [];
                return this.forEach(function(b) {
                    T.push(b)
                }), x(T)
            }, C.prototype.entries = function() {
                var T = [];
                return this.forEach(function(b, $) {
                    T.push([$, b])
                }), x(T)
            }, f.iterable && (C.prototype[Symbol.iterator] = C.prototype.entries);

            function D(T) {
                if (T.bodyUsed) return Promise.reject(new TypeError("Already read"));
                T.bodyUsed = !0
            }

            function V(T) {
                return new Promise(function(b, $) {
                    T.onload = function() {
                        b(T.result)
                    }, T.onerror = function() {
                        $(T.error)
                    }
                })
            }

            function ie(T) {
                var b = new FileReader,
                    $ = V(b);
                return b.readAsArrayBuffer(T), $
            }

            function he(T) {
                var b = new FileReader,
                    $ = V(b);
                return b.readAsText(T), $
            }

            function le(T) {
                for (var b = new Uint8Array(T), $ = new Array(b.length), ge = 0; ge < b.length; ge++) $[ge] = String.fromCharCode(b[ge]);
                return $.join("")
            }

            function ue(T) {
                if (T.slice) return T.slice(0);
                var b = new Uint8Array(T.byteLength);
                return b.set(new Uint8Array(T)), b.buffer
            }

            function fe() {
                return this.bodyUsed = !1, this._initBody = function(T) {
                    this._bodyInit = T, T ? typeof T == "string" ? this._bodyText = T : f.blob && Blob.prototype.isPrototypeOf(T) ? this._bodyBlob = T : f.formData && FormData.prototype.isPrototypeOf(T) ? this._bodyFormData = T : f.searchParams && URLSearchParams.prototype.isPrototypeOf(T) ? this._bodyText = T.toString() : f.arrayBuffer && f.blob && g(T) ? (this._bodyArrayBuffer = ue(T.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : f.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(T) || p(T)) ? this._bodyArrayBuffer = ue(T) : this._bodyText = T = Object.prototype.toString.call(T) : this._bodyText = "", this.headers.get("content-type") || (typeof T == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : f.searchParams && URLSearchParams.prototype.isPrototypeOf(T) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }, f.blob && (this.blob = function() {
                    var T = D(this);
                    if (T) return T;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]))
                }, this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? D(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(ie)
                }), this.text = function() {
                    var T = D(this);
                    if (T) return T;
                    if (this._bodyBlob) return he(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(le(this._bodyArrayBuffer));
                    if (this._bodyFormData) throw new Error("could not read FormData body as text");
                    return Promise.resolve(this._bodyText)
                }, f.formData && (this.formData = function() {
                    return this.text().then(Q)
                }), this.json = function() {
                    return this.text().then(JSON.parse)
                }, this
            }
            var de = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

            function j(T) {
                var b = T.toUpperCase();
                return de.indexOf(b) > -1 ? b : T
            }

            function U(T, b) {
                b = b || {};
                var $ = b.body;
                if (T instanceof U) {
                    if (T.bodyUsed) throw new TypeError("Already read");
                    this.url = T.url, this.credentials = T.credentials, b.headers || (this.headers = new C(T.headers)), this.method = T.method, this.mode = T.mode, this.signal = T.signal, !$ && T._bodyInit != null && ($ = T._bodyInit, T.bodyUsed = !0)
                } else this.url = String(T);
                if (this.credentials = b.credentials || this.credentials || "same-origin", (b.headers || !this.headers) && (this.headers = new C(b.headers)), this.method = j(b.method || this.method || "GET"), this.mode = b.mode || this.mode || null, this.signal = b.signal || this.signal, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && $) throw new TypeError("Body not allowed for GET or HEAD requests");
                this._initBody($)
            }
            U.prototype.clone = function() {
                return new U(this, {
                    body: this._bodyInit
                })
            };

            function Q(T) {
                var b = new FormData;
                return T.trim().split("&").forEach(function($) {
                    if ($) {
                        var ge = $.split("="),
                            oe = ge.shift().replace(/\+/g, " "),
                            K = ge.join("=").replace(/\+/g, " ");
                        b.append(decodeURIComponent(oe), decodeURIComponent(K))
                    }
                }), b
            }

            function ve(T) {
                var b = new C,
                    $ = T.replace(/\r?\n[\t ]+/g, " ");
                return $.split(/\r?\n/).forEach(function(ge) {
                    var oe = ge.split(":"),
                        K = oe.shift().trim();
                    if (K) {
                        var G = oe.join(":").trim();
                        b.append(K, G)
                    }
                }), b
            }
            fe.call(U.prototype);

            function Z(T, b) {
                b || (b = {}), this.type = "default", this.status = b.status === void 0 ? 200 : b.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in b ? b.statusText : "OK", this.headers = new C(b.headers), this.url = b.url || "", this._initBody(T)
            }
            fe.call(Z.prototype), Z.prototype.clone = function() {
                return new Z(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new C(this.headers),
                    url: this.url
                })
            }, Z.error = function() {
                var T = new Z(null, {
                    status: 0,
                    statusText: ""
                });
                return T.type = "error", T
            };
            var Ie = [301, 302, 303, 307, 308];
            Z.redirect = function(T, b) {
                if (Ie.indexOf(b) === -1) throw new RangeError("Invalid status code");
                return new Z(null, {
                    status: b,
                    headers: {
                        location: T
                    }
                })
            }, c.DOMException = s.DOMException;
            try {
                new c.DOMException
            } catch {
                c.DOMException = function(b, $) {
                    this.message = b, this.name = $;
                    var ge = Error(b);
                    this.stack = ge.stack
                }, c.DOMException.prototype = Object.create(Error.prototype), c.DOMException.prototype.constructor = c.DOMException
            }

            function Oe(T, b) {
                return new Promise(function($, ge) {
                    var oe = new U(T, b);
                    if (oe.signal && oe.signal.aborted) return ge(new c.DOMException("Aborted", "AbortError"));
                    var K = new XMLHttpRequest;

                    function G() {
                        K.abort()
                    }
                    K.onload = function() {
                        var k = {
                            status: K.status,
                            statusText: K.statusText,
                            headers: ve(K.getAllResponseHeaders() || "")
                        };
                        k.url = "responseURL" in K ? K.responseURL : k.headers.get("X-Request-URL");
                        var W = "response" in K ? K.response : K.responseText;
                        $(new Z(W, k))
                    }, K.onerror = function() {
                        ge(new TypeError("Network request failed"))
                    }, K.ontimeout = function() {
                        ge(new TypeError("Network request failed"))
                    }, K.onabort = function() {
                        ge(new c.DOMException("Aborted", "AbortError"))
                    }, K.open(oe.method, oe.url, !0), oe.credentials === "include" ? K.withCredentials = !0 : oe.credentials === "omit" && (K.withCredentials = !1), "responseType" in K && f.blob && (K.responseType = "blob"), oe.headers.forEach(function(k, W) {
                        K.setRequestHeader(W, k)
                    }), oe.signal && (oe.signal.addEventListener("abort", G), K.onreadystatechange = function() {
                        K.readyState === 4 && oe.signal.removeEventListener("abort", G)
                    }), K.send(typeof oe._bodyInit > "u" ? null : oe._bodyInit)
                })
            }
            return Oe.polyfill = !0, s.fetch || (s.fetch = Oe, s.Headers = C, s.Request = U, s.Response = Z), c.Headers = C, c.Request = U, c.Response = Z, c.fetch = Oe, Object.defineProperty(c, "__esModule", {
                value: !0
            }), c
        })({})
    })(r), r.fetch.ponyfill = !0, delete r.fetch.polyfill;
    var n = r;
    t = n.fetch, t.default = n.fetch, t.fetch = n.fetch, t.Headers = n.Headers, t.Request = n.Request, t.Response = n.Response, a.exports = t
})(Ac, Ac.exports);
var zI = Ac.exports;
const Ml = ef(zI),
    UI = {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    HI = "POST",
    zl = {
        headers: UI,
        method: HI
    },
    Ul = 10;
class Pi {
    constructor(t, r = !1) {
        if (this.url = t, this.disableProviderPing = r, this.events = new Or.EventEmitter, this.isAvailable = !1, this.registering = !1, !pl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        this.url = t, this.disableProviderPing = r
    }
    get connected() {
        return this.isAvailable
    }
    get connecting() {
        return this.registering
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    async open(t = this.url) {
        await this.register(t)
    }
    async close() {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose()
    }
    async send(t, r) {
        this.isAvailable || await this.register();
        try {
            const n = Hi(t),
                c = await (await Ml(this.url, Object.assign(Object.assign({}, zl), {
                    body: n
                }))).json();
            this.onPayload({
                data: c
            })
        } catch (n) {
            this.onError(t.id, n)
        }
    }
    async register(t = this.url) {
        if (!pl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
        if (this.registering) {
            const r = this.events.getMaxListeners();
            return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((n, s) => {
                this.events.once("register_error", c => {
                    this.resetMaxListeners(), s(c)
                }), this.events.once("open", () => {
                    if (this.resetMaxListeners(), typeof this.isAvailable > "u") return s(new Error("HTTP connection is missing or invalid"));
                    n()
                })
            })
        }
        this.url = t, this.registering = !0;
        try {
            if (!this.disableProviderPing) {
                const r = Hi({
                    id: 1,
                    jsonrpc: "2.0",
                    method: "test",
                    params: []
                });
                await Ml(t, Object.assign(Object.assign({}, zl), {
                    body: r
                }))
            }
            this.onOpen()
        } catch (r) {
            const n = this.parseError(r);
            throw this.events.emit("register_error", n), this.onClose(), n
        }
    }
    onOpen() {
        this.isAvailable = !0, this.registering = !1, this.events.emit("open")
    }
    onClose() {
        this.isAvailable = !1, this.registering = !1, this.events.emit("close")
    }
    onPayload(t) {
        if (typeof t.data > "u") return;
        const r = typeof t.data == "string" ? es(t.data) : t.data;
        this.events.emit("payload", r)
    }
    onError(t, r) {
        const n = this.parseError(r),
            s = n.message || n.toString(),
            c = xo(t, s);
        this.events.emit("payload", c)
    }
    parseError(t, r = this.url) {
        return bf(t, r, "HTTP")
    }
    resetMaxListeners() {
        this.events.getMaxListeners() > Ul && this.events.setMaxListeners(Ul)
    }
}
const Hl = "error",
    BI = "wss://relay.walletconnect.com",
    kI = "wc",
    KI = "universal_provider",
    Bl = `${kI}@2:${KI}:`,
    VI = "https://rpc.walletconnect.com/v1/",
    ui = {
        DEFAULT_CHAIN_CHANGED: "default_chain_changed"
    };
var kn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
    Tc = {
        exports: {}
    };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(a, t) {
    (function() {
        var r, n = "4.17.21",
            s = 200,
            c = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            f = "Expected a function",
            g = "Invalid `variable` option passed into `_.template`",
            m = "__lodash_hash_undefined__",
            p = 500,
            w = "__lodash_placeholder__",
            R = 1,
            x = 2,
            C = 4,
            D = 1,
            V = 2,
            ie = 1,
            he = 2,
            le = 4,
            ue = 8,
            fe = 16,
            de = 32,
            j = 64,
            U = 128,
            Q = 256,
            ve = 512,
            Z = 30,
            Ie = "...",
            Oe = 800,
            T = 16,
            b = 1,
            $ = 2,
            ge = 3,
            oe = 1 / 0,
            K = 9007199254740991,
            G = 17976931348623157e292,
            k = 0 / 0,
            W = 4294967295,
            ut = W - 1,
            Be = W >>> 1,
            jr = [
                ["ary", U],
                ["bind", ie],
                ["bindKey", he],
                ["curry", ue],
                ["curryRight", fe],
                ["flip", ve],
                ["partial", de],
                ["partialRight", j],
                ["rearg", Q]
            ],
            xe = "[object Arguments]",
            It = "[object Array]",
            L = "[object AsyncFunction]",
            F = "[object Boolean]",
            A = "[object Date]",
            h = "[object DOMException]",
            I = "[object Error]",
            te = "[object Function]",
            pe = "[object GeneratorFunction]",
            be = "[object Map]",
            Ne = "[object Number]",
            Fe = "[object Null]",
            Re = "[object Object]",
            xt = "[object Promise]",
            mt = "[object Proxy]",
            st = "[object RegExp]",
            je = "[object Set]",
            Qe = "[object String]",
            Ye = "[object Symbol]",
            ot = "[object Undefined]",
            Ue = "[object WeakMap]",
            Xe = "[object WeakSet]",
            De = "[object ArrayBuffer]",
            ke = "[object DataView]",
            ht = "[object Float32Array]",
            Me = "[object Float64Array]",
            Pt = "[object Int8Array]",
            Dt = "[object Int16Array]",
            Ut = "[object Int32Array]",
            Ht = "[object Uint8Array]",
            jt = "[object Uint8ClampedArray]",
            Wt = "[object Uint16Array]",
            rr = "[object Uint32Array]",
            qr = /\b__p \+= '';/g,
            Jt = /\b(__p \+=) '' \+/g,
            Kr = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            hi = /&(?:amp|lt|gt|quot|#39);/g,
            Si = /[&<>"']/g,
            lt = RegExp(hi.source),
            tt = RegExp(Si.source),
            ft = /<%-([\s\S]+?)%>/g,
            pt = /<%([\s\S]+?)%>/g,
            at = /<%=([\s\S]+?)%>/g,
            rt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            St = /^\w*$/,
            Ot = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            dt = /[\\^$.*+?()[\]{}|]/g,
            Rt = RegExp(dt.source),
            gt = /^\s+/,
            _t = /\s/,
            yt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            Je = /\{\n\/\* \[wrapped with (.+)\] \*/,
            At = /,? & /,
            Tt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            Ro = /[()=,{}\[\]\/\s]/,
            Ao = /\\(\\)?/g,
            To = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            vr = /\w*$/,
            Co = /^[-+]0x[0-9a-f]+$/i,
            $o = /^0b[01]+$/i,
            No = /^\[object .+?Constructor\]$/,
            Do = /^0o[0-7]+$/i,
            Fo = /^(?:0|[1-9]\d*)$/,
            Vr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Vi = /($^)/,
            Lo = /['\n\r\u2028\u2029\\]/g,
            Gi = "\\ud800-\\udfff",
            jo = "\\u0300-\\u036f",
            qo = "\\ufe20-\\ufe2f",
            Wi = "\\u20d0-\\u20ff",
            rs = jo + qo + Wi,
            is = "\\u2700-\\u27bf",
            Rr = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Mo = "\\xac\\xb1\\xd7\\xf7",
            zo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            Uo = "\\u2000-\\u206f",
            Ho = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            ns = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            ss = "\\ufe0e\\ufe0f",
            Oi = Mo + zo + Uo + Ho,
            _n = "['’]",
            Ri = "[" + Gi + "]",
            wn = "[" + Oi + "]",
            Ai = "[" + rs + "]",
            os = "\\d+",
            Bo = "[" + is + "]",
            as = "[" + Rr + "]",
            cs = "[^" + Gi + Oi + os + is + Rr + ns + "]",
            Ji = "\\ud83c[\\udffb-\\udfff]",
            ko = "(?:" + Ai + "|" + Ji + ")",
            us = "[^" + Gi + "]",
            Qi = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            li = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            lr = "[" + ns + "]",
            hs = "\\u200d",
            ls = "(?:" + as + "|" + cs + ")",
            Mr = "(?:" + lr + "|" + cs + ")",
            fs = "(?:" + _n + "(?:d|ll|m|re|s|t|ve))?",
            ps = "(?:" + _n + "(?:D|LL|M|RE|S|T|VE))?",
            ds = ko + "?",
            gs = "[" + ss + "]?",
            Ko = "(?:" + hs + "(?:" + [us, Qi, li].join("|") + ")" + gs + ds + ")*",
            Gr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            ys = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            vs = gs + ds + Ko,
            Yi = "(?:" + [Bo, Qi, li].join("|") + ")" + vs,
            Vo = "(?:" + [us + Ai + "?", Ai, Qi, li, Ri].join("|") + ")",
            bn = RegExp(_n, "g"),
            Go = RegExp(Ai, "g"),
            Xi = RegExp(Ji + "(?=" + Ji + ")|" + Vo + vs, "g"),
            ms = RegExp([lr + "?" + as + "+" + fs + "(?=" + [wn, lr, "$"].join("|") + ")", Mr + "+" + ps + "(?=" + [wn, lr + ls, "$"].join("|") + ")", lr + "?" + ls + "+" + fs, lr + "+" + ps, ys, Gr, os, Yi].join("|"), "g"),
            _s = RegExp("[" + hs + Gi + rs + ss + "]"),
            Ti = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            ws = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            Wo = -1,
            Ke = {};
        Ke[ht] = Ke[Me] = Ke[Pt] = Ke[Dt] = Ke[Ut] = Ke[Ht] = Ke[jt] = Ke[Wt] = Ke[rr] = !0, Ke[xe] = Ke[It] = Ke[De] = Ke[F] = Ke[ke] = Ke[A] = Ke[I] = Ke[te] = Ke[be] = Ke[Ne] = Ke[Re] = Ke[st] = Ke[je] = Ke[Qe] = Ke[Ue] = !1;
        var He = {};
        He[xe] = He[It] = He[De] = He[ke] = He[F] = He[A] = He[ht] = He[Me] = He[Pt] = He[Dt] = He[Ut] = He[be] = He[Ne] = He[Re] = He[st] = He[je] = He[Qe] = He[Ye] = He[Ht] = He[jt] = He[Wt] = He[rr] = !0, He[I] = He[te] = He[Ue] = !1;
        var v = {
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s"
            },
            P = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            H = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            Y = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Ve = parseFloat,
            me = parseInt,
            Ze = typeof kn == "object" && kn && kn.Object === Object && kn,
            Ct = typeof self == "object" && self && self.Object === Object && self,
            Te = Ze || Ct || Function("return this")(),
            Ge = t && !t.nodeType && t,
            wt = Ge && !0 && a && !a.nodeType && a,
            ir = wt && wt.exports === Ge,
            $t = ir && Ze.process,
            et = function() {
                try {
                    var S = wt && wt.require && wt.require("util").types;
                    return S || $t && $t.binding && $t.binding("util")
                } catch {}
            }(),
            Qt = et && et.isArrayBuffer,
            Ar = et && et.isDate,
            mr = et && et.isMap,
            zr = et && et.isRegExp,
            En = et && et.isSet,
            Ci = et && et.isTypedArray;

        function qt(S, q, N) {
            switch (N.length) {
                case 0:
                    return S.call(q);
                case 1:
                    return S.call(q, N[0]);
                case 2:
                    return S.call(q, N[0], N[1]);
                case 3:
                    return S.call(q, N[0], N[1], N[2])
            }
            return S.apply(q, N)
        }

        function Wf(S, q, N, X) {
            for (var ye = -1, Le = S == null ? 0 : S.length; ++ye < Le;) {
                var Ft = S[ye];
                q(X, Ft, N(Ft), S)
            }
            return X
        }

        function _r(S, q) {
            for (var N = -1, X = S == null ? 0 : S.length; ++N < X && q(S[N], N, S) !== !1;);
            return S
        }

        function Jf(S, q) {
            for (var N = S == null ? 0 : S.length; N-- && q(S[N], N, S) !== !1;);
            return S
        }

        function Kc(S, q) {
            for (var N = -1, X = S == null ? 0 : S.length; ++N < X;)
                if (!q(S[N], N, S)) return !1;
            return !0
        }

        function fi(S, q) {
            for (var N = -1, X = S == null ? 0 : S.length, ye = 0, Le = []; ++N < X;) {
                var Ft = S[N];
                q(Ft, N, S) && (Le[ye++] = Ft)
            }
            return Le
        }

        function bs(S, q) {
            var N = S == null ? 0 : S.length;
            return !!N && Zi(S, q, 0) > -1
        }

        function Jo(S, q, N) {
            for (var X = -1, ye = S == null ? 0 : S.length; ++X < ye;)
                if (N(q, S[X])) return !0;
            return !1
        }

        function it(S, q) {
            for (var N = -1, X = S == null ? 0 : S.length, ye = Array(X); ++N < X;) ye[N] = q(S[N], N, S);
            return ye
        }

        function pi(S, q) {
            for (var N = -1, X = q.length, ye = S.length; ++N < X;) S[ye + N] = q[N];
            return S
        }

        function Qo(S, q, N, X) {
            var ye = -1,
                Le = S == null ? 0 : S.length;
            for (X && Le && (N = S[++ye]); ++ye < Le;) N = q(N, S[ye], ye, S);
            return N
        }

        function Qf(S, q, N, X) {
            var ye = S == null ? 0 : S.length;
            for (X && ye && (N = S[--ye]); ye--;) N = q(N, S[ye], ye, S);
            return N
        }

        function Yo(S, q) {
            for (var N = -1, X = S == null ? 0 : S.length; ++N < X;)
                if (q(S[N], N, S)) return !0;
            return !1
        }
        var Yf = Xo("length");

        function Xf(S) {
            return S.split("")
        }

        function Zf(S) {
            return S.match(Tt) || []
        }

        function Vc(S, q, N) {
            var X;
            return N(S, function(ye, Le, Ft) {
                if (q(ye, Le, Ft)) return X = Le, !1
            }), X
        }

        function Es(S, q, N, X) {
            for (var ye = S.length, Le = N + (X ? 1 : -1); X ? Le-- : ++Le < ye;)
                if (q(S[Le], Le, S)) return Le;
            return -1
        }

        function Zi(S, q, N) {
            return q === q ? lp(S, q, N) : Es(S, Gc, N)
        }

        function ep(S, q, N, X) {
            for (var ye = N - 1, Le = S.length; ++ye < Le;)
                if (X(S[ye], q)) return ye;
            return -1
        }

        function Gc(S) {
            return S !== S
        }

        function Wc(S, q) {
            var N = S == null ? 0 : S.length;
            return N ? ea(S, q) / N : k
        }

        function Xo(S) {
            return function(q) {
                return q == null ? r : q[S]
            }
        }

        function Zo(S) {
            return function(q) {
                return S == null ? r : S[q]
            }
        }

        function Jc(S, q, N, X, ye) {
            return ye(S, function(Le, Ft, We) {
                N = X ? (X = !1, Le) : q(N, Le, Ft, We)
            }), N
        }

        function tp(S, q) {
            var N = S.length;
            for (S.sort(q); N--;) S[N] = S[N].value;
            return S
        }

        function ea(S, q) {
            for (var N, X = -1, ye = S.length; ++X < ye;) {
                var Le = q(S[X]);
                Le !== r && (N = N === r ? Le : N + Le)
            }
            return N
        }

        function ta(S, q) {
            for (var N = -1, X = Array(S); ++N < S;) X[N] = q(N);
            return X
        }

        function rp(S, q) {
            return it(q, function(N) {
                return [N, S[N]]
            })
        }

        function Qc(S) {
            return S && S.slice(0, eu(S) + 1).replace(gt, "")
        }

        function fr(S) {
            return function(q) {
                return S(q)
            }
        }

        function ra(S, q) {
            return it(q, function(N) {
                return S[N]
            })
        }

        function In(S, q) {
            return S.has(q)
        }

        function Yc(S, q) {
            for (var N = -1, X = S.length; ++N < X && Zi(q, S[N], 0) > -1;);
            return N
        }

        function Xc(S, q) {
            for (var N = S.length; N-- && Zi(q, S[N], 0) > -1;);
            return N
        }

        function ip(S, q) {
            for (var N = S.length, X = 0; N--;) S[N] === q && ++X;
            return X
        }
        var np = Zo(v),
            sp = Zo(P);

        function op(S) {
            return "\\" + Y[S]
        }

        function ap(S, q) {
            return S == null ? r : S[q]
        }

        function en(S) {
            return _s.test(S)
        }

        function cp(S) {
            return Ti.test(S)
        }

        function up(S) {
            for (var q, N = []; !(q = S.next()).done;) N.push(q.value);
            return N
        }

        function ia(S) {
            var q = -1,
                N = Array(S.size);
            return S.forEach(function(X, ye) {
                N[++q] = [ye, X]
            }), N
        }

        function Zc(S, q) {
            return function(N) {
                return S(q(N))
            }
        }

        function di(S, q) {
            for (var N = -1, X = S.length, ye = 0, Le = []; ++N < X;) {
                var Ft = S[N];
                (Ft === q || Ft === w) && (S[N] = w, Le[ye++] = N)
            }
            return Le
        }

        function Is(S) {
            var q = -1,
                N = Array(S.size);
            return S.forEach(function(X) {
                N[++q] = X
            }), N
        }

        function hp(S) {
            var q = -1,
                N = Array(S.size);
            return S.forEach(function(X) {
                N[++q] = [X, X]
            }), N
        }

        function lp(S, q, N) {
            for (var X = N - 1, ye = S.length; ++X < ye;)
                if (S[X] === q) return X;
            return -1
        }

        function fp(S, q, N) {
            for (var X = N + 1; X--;)
                if (S[X] === q) return X;
            return X
        }

        function tn(S) {
            return en(S) ? dp(S) : Yf(S)
        }

        function Tr(S) {
            return en(S) ? gp(S) : Xf(S)
        }

        function eu(S) {
            for (var q = S.length; q-- && _t.test(S.charAt(q)););
            return q
        }
        var pp = Zo(H);

        function dp(S) {
            for (var q = Xi.lastIndex = 0; Xi.test(S);) ++q;
            return q
        }

        function gp(S) {
            return S.match(Xi) || []
        }

        function yp(S) {
            return S.match(ms) || []
        }
        var vp = function S(q) {
                q = q == null ? Te : rn.defaults(Te.Object(), q, rn.pick(Te, ws));
                var N = q.Array,
                    X = q.Date,
                    ye = q.Error,
                    Le = q.Function,
                    Ft = q.Math,
                    We = q.Object,
                    na = q.RegExp,
                    mp = q.String,
                    wr = q.TypeError,
                    xs = N.prototype,
                    _p = Le.prototype,
                    nn = We.prototype,
                    Ps = q["__core-js_shared__"],
                    Ss = _p.toString,
                    ze = nn.hasOwnProperty,
                    wp = 0,
                    tu = function() {
                        var e = /[^.]+$/.exec(Ps && Ps.keys && Ps.keys.IE_PROTO || "");
                        return e ? "Symbol(src)_1." + e : ""
                    }(),
                    Os = nn.toString,
                    bp = Ss.call(We),
                    Ep = Te._,
                    Ip = na("^" + Ss.call(ze).replace(dt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    Rs = ir ? q.Buffer : r,
                    gi = q.Symbol,
                    As = q.Uint8Array,
                    ru = Rs ? Rs.allocUnsafe : r,
                    Ts = Zc(We.getPrototypeOf, We),
                    iu = We.create,
                    nu = nn.propertyIsEnumerable,
                    Cs = xs.splice,
                    su = gi ? gi.isConcatSpreadable : r,
                    xn = gi ? gi.iterator : r,
                    $i = gi ? gi.toStringTag : r,
                    $s = function() {
                        try {
                            var e = ji(We, "defineProperty");
                            return e({}, "", {}), e
                        } catch {}
                    }(),
                    xp = q.clearTimeout !== Te.clearTimeout && q.clearTimeout,
                    Pp = X && X.now !== Te.Date.now && X.now,
                    Sp = q.setTimeout !== Te.setTimeout && q.setTimeout,
                    Ns = Ft.ceil,
                    Ds = Ft.floor,
                    sa = We.getOwnPropertySymbols,
                    Op = Rs ? Rs.isBuffer : r,
                    ou = q.isFinite,
                    Rp = xs.join,
                    Ap = Zc(We.keys, We),
                    Lt = Ft.max,
                    Kt = Ft.min,
                    Tp = X.now,
                    Cp = q.parseInt,
                    au = Ft.random,
                    $p = xs.reverse,
                    oa = ji(q, "DataView"),
                    Pn = ji(q, "Map"),
                    aa = ji(q, "Promise"),
                    sn = ji(q, "Set"),
                    Sn = ji(q, "WeakMap"),
                    On = ji(We, "create"),
                    Fs = Sn && new Sn,
                    on = {},
                    Np = qi(oa),
                    Dp = qi(Pn),
                    Fp = qi(aa),
                    Lp = qi(sn),
                    jp = qi(Sn),
                    Ls = gi ? gi.prototype : r,
                    Rn = Ls ? Ls.valueOf : r,
                    cu = Ls ? Ls.toString : r;

                function d(e) {
                    if (vt(e) && !_e(e) && !(e instanceof Ae)) {
                        if (e instanceof br) return e;
                        if (ze.call(e, "__wrapped__")) return uh(e)
                    }
                    return new br(e)
                }
                var an = function() {
                    function e() {}
                    return function(i) {
                        if (!ct(i)) return {};
                        if (iu) return iu(i);
                        e.prototype = i;
                        var o = new e;
                        return e.prototype = r, o
                    }
                }();

                function js() {}

                function br(e, i) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r
                }
                d.templateSettings = {
                    escape: ft,
                    evaluate: pt,
                    interpolate: at,
                    variable: "",
                    imports: {
                        _: d
                    }
                }, d.prototype = js.prototype, d.prototype.constructor = d, br.prototype = an(js.prototype), br.prototype.constructor = br;

                function Ae(e) {
                    this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = W, this.__views__ = []
                }

                function qp() {
                    var e = new Ae(this.__wrapped__);
                    return e.__actions__ = nr(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = nr(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = nr(this.__views__), e
                }

                function Mp() {
                    if (this.__filtered__) {
                        var e = new Ae(this);
                        e.__dir__ = -1, e.__filtered__ = !0
                    } else e = this.clone(), e.__dir__ *= -1;
                    return e
                }

                function zp() {
                    var e = this.__wrapped__.value(),
                        i = this.__dir__,
                        o = _e(e),
                        u = i < 0,
                        l = o ? e.length : 0,
                        y = Xd(0, l, this.__views__),
                        _ = y.start,
                        E = y.end,
                        O = E - _,
                        M = u ? E : _ - 1,
                        z = this.__iteratees__,
                        B = z.length,
                        J = 0,
                        re = Kt(O, this.__takeCount__);
                    if (!o || !u && l == O && re == O) return $u(e, this.__actions__);
                    var ae = [];
                    e: for (; O-- && J < re;) {
                        M += i;
                        for (var Ee = -1, ce = e[M]; ++Ee < B;) {
                            var Se = z[Ee],
                                Ce = Se.iteratee,
                                gr = Se.type,
                                Zt = Ce(ce);
                            if (gr == $) ce = Zt;
                            else if (!Zt) {
                                if (gr == b) continue e;
                                break e
                            }
                        }
                        ae[J++] = ce
                    }
                    return ae
                }
                Ae.prototype = an(js.prototype), Ae.prototype.constructor = Ae;

                function Ni(e) {
                    var i = -1,
                        o = e == null ? 0 : e.length;
                    for (this.clear(); ++i < o;) {
                        var u = e[i];
                        this.set(u[0], u[1])
                    }
                }

                function Up() {
                    this.__data__ = On ? On(null) : {}, this.size = 0
                }

                function Hp(e) {
                    var i = this.has(e) && delete this.__data__[e];
                    return this.size -= i ? 1 : 0, i
                }

                function Bp(e) {
                    var i = this.__data__;
                    if (On) {
                        var o = i[e];
                        return o === m ? r : o
                    }
                    return ze.call(i, e) ? i[e] : r
                }

                function kp(e) {
                    var i = this.__data__;
                    return On ? i[e] !== r : ze.call(i, e)
                }

                function Kp(e, i) {
                    var o = this.__data__;
                    return this.size += this.has(e) ? 0 : 1, o[e] = On && i === r ? m : i, this
                }
                Ni.prototype.clear = Up, Ni.prototype.delete = Hp, Ni.prototype.get = Bp, Ni.prototype.has = kp, Ni.prototype.set = Kp;

                function Wr(e) {
                    var i = -1,
                        o = e == null ? 0 : e.length;
                    for (this.clear(); ++i < o;) {
                        var u = e[i];
                        this.set(u[0], u[1])
                    }
                }

                function Vp() {
                    this.__data__ = [], this.size = 0
                }

                function Gp(e) {
                    var i = this.__data__,
                        o = qs(i, e);
                    if (o < 0) return !1;
                    var u = i.length - 1;
                    return o == u ? i.pop() : Cs.call(i, o, 1), --this.size, !0
                }

                function Wp(e) {
                    var i = this.__data__,
                        o = qs(i, e);
                    return o < 0 ? r : i[o][1]
                }

                function Jp(e) {
                    return qs(this.__data__, e) > -1
                }

                function Qp(e, i) {
                    var o = this.__data__,
                        u = qs(o, e);
                    return u < 0 ? (++this.size, o.push([e, i])) : o[u][1] = i, this
                }
                Wr.prototype.clear = Vp, Wr.prototype.delete = Gp, Wr.prototype.get = Wp, Wr.prototype.has = Jp, Wr.prototype.set = Qp;

                function Jr(e) {
                    var i = -1,
                        o = e == null ? 0 : e.length;
                    for (this.clear(); ++i < o;) {
                        var u = e[i];
                        this.set(u[0], u[1])
                    }
                }

                function Yp() {
                    this.size = 0, this.__data__ = {
                        hash: new Ni,
                        map: new(Pn || Wr),
                        string: new Ni
                    }
                }

                function Xp(e) {
                    var i = Qs(this, e).delete(e);
                    return this.size -= i ? 1 : 0, i
                }

                function Zp(e) {
                    return Qs(this, e).get(e)
                }

                function ed(e) {
                    return Qs(this, e).has(e)
                }

                function td(e, i) {
                    var o = Qs(this, e),
                        u = o.size;
                    return o.set(e, i), this.size += o.size == u ? 0 : 1, this
                }
                Jr.prototype.clear = Yp, Jr.prototype.delete = Xp, Jr.prototype.get = Zp, Jr.prototype.has = ed, Jr.prototype.set = td;

                function Di(e) {
                    var i = -1,
                        o = e == null ? 0 : e.length;
                    for (this.__data__ = new Jr; ++i < o;) this.add(e[i])
                }

                function rd(e) {
                    return this.__data__.set(e, m), this
                }

                function id(e) {
                    return this.__data__.has(e)
                }
                Di.prototype.add = Di.prototype.push = rd, Di.prototype.has = id;

                function Cr(e) {
                    var i = this.__data__ = new Wr(e);
                    this.size = i.size
                }

                function nd() {
                    this.__data__ = new Wr, this.size = 0
                }

                function sd(e) {
                    var i = this.__data__,
                        o = i.delete(e);
                    return this.size = i.size, o
                }

                function od(e) {
                    return this.__data__.get(e)
                }

                function ad(e) {
                    return this.__data__.has(e)
                }

                function cd(e, i) {
                    var o = this.__data__;
                    if (o instanceof Wr) {
                        var u = o.__data__;
                        if (!Pn || u.length < s - 1) return u.push([e, i]), this.size = ++o.size, this;
                        o = this.__data__ = new Jr(u)
                    }
                    return o.set(e, i), this.size = o.size, this
                }
                Cr.prototype.clear = nd, Cr.prototype.delete = sd, Cr.prototype.get = od, Cr.prototype.has = ad, Cr.prototype.set = cd;

                function uu(e, i) {
                    var o = _e(e),
                        u = !o && Mi(e),
                        l = !o && !u && wi(e),
                        y = !o && !u && !l && ln(e),
                        _ = o || u || l || y,
                        E = _ ? ta(e.length, mp) : [],
                        O = E.length;
                    for (var M in e)(i || ze.call(e, M)) && !(_ && (M == "length" || l && (M == "offset" || M == "parent") || y && (M == "buffer" || M == "byteLength" || M == "byteOffset") || Zr(M, O))) && E.push(M);
                    return E
                }

                function hu(e) {
                    var i = e.length;
                    return i ? e[ma(0, i - 1)] : r
                }

                function ud(e, i) {
                    return Ys(nr(e), Fi(i, 0, e.length))
                }

                function hd(e) {
                    return Ys(nr(e))
                }

                function ca(e, i, o) {
                    (o !== r && !$r(e[i], o) || o === r && !(i in e)) && Qr(e, i, o)
                }

                function An(e, i, o) {
                    var u = e[i];
                    (!(ze.call(e, i) && $r(u, o)) || o === r && !(i in e)) && Qr(e, i, o)
                }

                function qs(e, i) {
                    for (var o = e.length; o--;)
                        if ($r(e[o][0], i)) return o;
                    return -1
                }

                function ld(e, i, o, u) {
                    return yi(e, function(l, y, _) {
                        i(u, l, o(l), _)
                    }), u
                }

                function lu(e, i) {
                    return e && Hr(i, Mt(i), e)
                }

                function fd(e, i) {
                    return e && Hr(i, or(i), e)
                }

                function Qr(e, i, o) {
                    i == "__proto__" && $s ? $s(e, i, {
                        configurable: !0,
                        enumerable: !0,
                        value: o,
                        writable: !0
                    }) : e[i] = o
                }

                function ua(e, i) {
                    for (var o = -1, u = i.length, l = N(u), y = e == null; ++o < u;) l[o] = y ? r : Ba(e, i[o]);
                    return l
                }

                function Fi(e, i, o) {
                    return e === e && (o !== r && (e = e <= o ? e : o), i !== r && (e = e >= i ? e : i)), e
                }

                function Er(e, i, o, u, l, y) {
                    var _, E = i & R,
                        O = i & x,
                        M = i & C;
                    if (o && (_ = l ? o(e, u, l, y) : o(e)), _ !== r) return _;
                    if (!ct(e)) return e;
                    var z = _e(e);
                    if (z) {
                        if (_ = eg(e), !E) return nr(e, _)
                    } else {
                        var B = Vt(e),
                            J = B == te || B == pe;
                        if (wi(e)) return Fu(e, E);
                        if (B == Re || B == xe || J && !l) {
                            if (_ = O || J ? {} : eh(e), !E) return O ? Bd(e, fd(_, e)) : Hd(e, lu(_, e))
                        } else {
                            if (!He[B]) return l ? e : {};
                            _ = tg(e, B, E)
                        }
                    }
                    y || (y = new Cr);
                    var re = y.get(e);
                    if (re) return re;
                    y.set(e, _), Ah(e) ? e.forEach(function(ce) {
                        _.add(Er(ce, i, o, ce, e, y))
                    }) : Oh(e) && e.forEach(function(ce, Se) {
                        _.set(Se, Er(ce, i, o, Se, e, y))
                    });
                    var ae = M ? O ? Aa : Ra : O ? or : Mt,
                        Ee = z ? r : ae(e);
                    return _r(Ee || e, function(ce, Se) {
                        Ee && (Se = ce, ce = e[Se]), An(_, Se, Er(ce, i, o, Se, e, y))
                    }), _
                }

                function pd(e) {
                    var i = Mt(e);
                    return function(o) {
                        return fu(o, e, i)
                    }
                }

                function fu(e, i, o) {
                    var u = o.length;
                    if (e == null) return !u;
                    for (e = We(e); u--;) {
                        var l = o[u],
                            y = i[l],
                            _ = e[l];
                        if (_ === r && !(l in e) || !y(_)) return !1
                    }
                    return !0
                }

                function pu(e, i, o) {
                    if (typeof e != "function") throw new wr(f);
                    return Ln(function() {
                        e.apply(r, o)
                    }, i)
                }

                function Tn(e, i, o, u) {
                    var l = -1,
                        y = bs,
                        _ = !0,
                        E = e.length,
                        O = [],
                        M = i.length;
                    if (!E) return O;
                    o && (i = it(i, fr(o))), u ? (y = Jo, _ = !1) : i.length >= s && (y = In, _ = !1, i = new Di(i));
                    e: for (; ++l < E;) {
                        var z = e[l],
                            B = o == null ? z : o(z);
                        if (z = u || z !== 0 ? z : 0, _ && B === B) {
                            for (var J = M; J--;)
                                if (i[J] === B) continue e;
                            O.push(z)
                        } else y(i, B, u) || O.push(z)
                    }
                    return O
                }
                var yi = zu(Ur),
                    du = zu(la, !0);

                function dd(e, i) {
                    var o = !0;
                    return yi(e, function(u, l, y) {
                        return o = !!i(u, l, y), o
                    }), o
                }

                function Ms(e, i, o) {
                    for (var u = -1, l = e.length; ++u < l;) {
                        var y = e[u],
                            _ = i(y);
                        if (_ != null && (E === r ? _ === _ && !dr(_) : o(_, E))) var E = _,
                            O = y
                    }
                    return O
                }

                function gd(e, i, o, u) {
                    var l = e.length;
                    for (o = we(o), o < 0 && (o = -o > l ? 0 : l + o), u = u === r || u > l ? l : we(u), u < 0 && (u += l), u = o > u ? 0 : Ch(u); o < u;) e[o++] = i;
                    return e
                }

                function gu(e, i) {
                    var o = [];
                    return yi(e, function(u, l, y) {
                        i(u, l, y) && o.push(u)
                    }), o
                }

                function Bt(e, i, o, u, l) {
                    var y = -1,
                        _ = e.length;
                    for (o || (o = ig), l || (l = []); ++y < _;) {
                        var E = e[y];
                        i > 0 && o(E) ? i > 1 ? Bt(E, i - 1, o, u, l) : pi(l, E) : u || (l[l.length] = E)
                    }
                    return l
                }
                var ha = Uu(),
                    yu = Uu(!0);

                function Ur(e, i) {
                    return e && ha(e, i, Mt)
                }

                function la(e, i) {
                    return e && yu(e, i, Mt)
                }

                function zs(e, i) {
                    return fi(i, function(o) {
                        return ei(e[o])
                    })
                }

                function Li(e, i) {
                    i = mi(i, e);
                    for (var o = 0, u = i.length; e != null && o < u;) e = e[Br(i[o++])];
                    return o && o == u ? e : r
                }

                function vu(e, i, o) {
                    var u = i(e);
                    return _e(e) ? u : pi(u, o(e))
                }

                function Yt(e) {
                    return e == null ? e === r ? ot : Fe : $i && $i in We(e) ? Yd(e) : hg(e)
                }

                function fa(e, i) {
                    return e > i
                }

                function yd(e, i) {
                    return e != null && ze.call(e, i)
                }

                function vd(e, i) {
                    return e != null && i in We(e)
                }

                function md(e, i, o) {
                    return e >= Kt(i, o) && e < Lt(i, o)
                }

                function pa(e, i, o) {
                    for (var u = o ? Jo : bs, l = e[0].length, y = e.length, _ = y, E = N(y), O = 1 / 0, M = []; _--;) {
                        var z = e[_];
                        _ && i && (z = it(z, fr(i))), O = Kt(z.length, O), E[_] = !o && (i || l >= 120 && z.length >= 120) ? new Di(_ && z) : r
                    }
                    z = e[0];
                    var B = -1,
                        J = E[0];
                    e: for (; ++B < l && M.length < O;) {
                        var re = z[B],
                            ae = i ? i(re) : re;
                        if (re = o || re !== 0 ? re : 0, !(J ? In(J, ae) : u(M, ae, o))) {
                            for (_ = y; --_;) {
                                var Ee = E[_];
                                if (!(Ee ? In(Ee, ae) : u(e[_], ae, o))) continue e
                            }
                            J && J.push(ae), M.push(re)
                        }
                    }
                    return M
                }

                function _d(e, i, o, u) {
                    return Ur(e, function(l, y, _) {
                        i(u, o(l), y, _)
                    }), u
                }

                function Cn(e, i, o) {
                    i = mi(i, e), e = nh(e, i);
                    var u = e == null ? e : e[Br(xr(i))];
                    return u == null ? r : qt(u, e, o)
                }

                function mu(e) {
                    return vt(e) && Yt(e) == xe
                }

                function wd(e) {
                    return vt(e) && Yt(e) == De
                }

                function bd(e) {
                    return vt(e) && Yt(e) == A
                }

                function $n(e, i, o, u, l) {
                    return e === i ? !0 : e == null || i == null || !vt(e) && !vt(i) ? e !== e && i !== i : Ed(e, i, o, u, $n, l)
                }

                function Ed(e, i, o, u, l, y) {
                    var _ = _e(e),
                        E = _e(i),
                        O = _ ? It : Vt(e),
                        M = E ? It : Vt(i);
                    O = O == xe ? Re : O, M = M == xe ? Re : M;
                    var z = O == Re,
                        B = M == Re,
                        J = O == M;
                    if (J && wi(e)) {
                        if (!wi(i)) return !1;
                        _ = !0, z = !1
                    }
                    if (J && !z) return y || (y = new Cr), _ || ln(e) ? Yu(e, i, o, u, l, y) : Jd(e, i, O, o, u, l, y);
                    if (!(o & D)) {
                        var re = z && ze.call(e, "__wrapped__"),
                            ae = B && ze.call(i, "__wrapped__");
                        if (re || ae) {
                            var Ee = re ? e.value() : e,
                                ce = ae ? i.value() : i;
                            return y || (y = new Cr), l(Ee, ce, o, u, y)
                        }
                    }
                    return J ? (y || (y = new Cr), Qd(e, i, o, u, l, y)) : !1
                }

                function Id(e) {
                    return vt(e) && Vt(e) == be
                }

                function da(e, i, o, u) {
                    var l = o.length,
                        y = l,
                        _ = !u;
                    if (e == null) return !y;
                    for (e = We(e); l--;) {
                        var E = o[l];
                        if (_ && E[2] ? E[1] !== e[E[0]] : !(E[0] in e)) return !1
                    }
                    for (; ++l < y;) {
                        E = o[l];
                        var O = E[0],
                            M = e[O],
                            z = E[1];
                        if (_ && E[2]) {
                            if (M === r && !(O in e)) return !1
                        } else {
                            var B = new Cr;
                            if (u) var J = u(M, z, O, e, i, B);
                            if (!(J === r ? $n(z, M, D | V, u, B) : J)) return !1
                        }
                    }
                    return !0
                }

                function _u(e) {
                    if (!ct(e) || sg(e)) return !1;
                    var i = ei(e) ? Ip : No;
                    return i.test(qi(e))
                }

                function xd(e) {
                    return vt(e) && Yt(e) == st
                }

                function Pd(e) {
                    return vt(e) && Vt(e) == je
                }

                function Sd(e) {
                    return vt(e) && io(e.length) && !!Ke[Yt(e)]
                }

                function wu(e) {
                    return typeof e == "function" ? e : e == null ? ar : typeof e == "object" ? _e(e) ? Iu(e[0], e[1]) : Eu(e) : Hh(e)
                }

                function ga(e) {
                    if (!Fn(e)) return Ap(e);
                    var i = [];
                    for (var o in We(e)) ze.call(e, o) && o != "constructor" && i.push(o);
                    return i
                }

                function Od(e) {
                    if (!ct(e)) return ug(e);
                    var i = Fn(e),
                        o = [];
                    for (var u in e) u == "constructor" && (i || !ze.call(e, u)) || o.push(u);
                    return o
                }

                function ya(e, i) {
                    return e < i
                }

                function bu(e, i) {
                    var o = -1,
                        u = sr(e) ? N(e.length) : [];
                    return yi(e, function(l, y, _) {
                        u[++o] = i(l, y, _)
                    }), u
                }

                function Eu(e) {
                    var i = Ca(e);
                    return i.length == 1 && i[0][2] ? rh(i[0][0], i[0][1]) : function(o) {
                        return o === e || da(o, e, i)
                    }
                }

                function Iu(e, i) {
                    return Na(e) && th(i) ? rh(Br(e), i) : function(o) {
                        var u = Ba(o, e);
                        return u === r && u === i ? ka(o, e) : $n(i, u, D | V)
                    }
                }

                function Us(e, i, o, u, l) {
                    e !== i && ha(i, function(y, _) {
                        if (l || (l = new Cr), ct(y)) Rd(e, i, _, o, Us, u, l);
                        else {
                            var E = u ? u(Fa(e, _), y, _ + "", e, i, l) : r;
                            E === r && (E = y), ca(e, _, E)
                        }
                    }, or)
                }

                function Rd(e, i, o, u, l, y, _) {
                    var E = Fa(e, o),
                        O = Fa(i, o),
                        M = _.get(O);
                    if (M) {
                        ca(e, o, M);
                        return
                    }
                    var z = y ? y(E, O, o + "", e, i, _) : r,
                        B = z === r;
                    if (B) {
                        var J = _e(O),
                            re = !J && wi(O),
                            ae = !J && !re && ln(O);
                        z = O, J || re || ae ? _e(E) ? z = E : bt(E) ? z = nr(E) : re ? (B = !1, z = Fu(O, !0)) : ae ? (B = !1, z = Lu(O, !0)) : z = [] : jn(O) || Mi(O) ? (z = E, Mi(E) ? z = $h(E) : (!ct(E) || ei(E)) && (z = eh(O))) : B = !1
                    }
                    B && (_.set(O, z), l(z, O, u, y, _), _.delete(O)), ca(e, o, z)
                }

                function xu(e, i) {
                    var o = e.length;
                    if (o) return i += i < 0 ? o : 0, Zr(i, o) ? e[i] : r
                }

                function Pu(e, i, o) {
                    i.length ? i = it(i, function(y) {
                        return _e(y) ? function(_) {
                            return Li(_, y.length === 1 ? y[0] : y)
                        } : y
                    }) : i = [ar];
                    var u = -1;
                    i = it(i, fr(se()));
                    var l = bu(e, function(y, _, E) {
                        var O = it(i, function(M) {
                            return M(y)
                        });
                        return {
                            criteria: O,
                            index: ++u,
                            value: y
                        }
                    });
                    return tp(l, function(y, _) {
                        return Ud(y, _, o)
                    })
                }

                function Ad(e, i) {
                    return Su(e, i, function(o, u) {
                        return ka(e, u)
                    })
                }

                function Su(e, i, o) {
                    for (var u = -1, l = i.length, y = {}; ++u < l;) {
                        var _ = i[u],
                            E = Li(e, _);
                        o(E, _) && Nn(y, mi(_, e), E)
                    }
                    return y
                }

                function Td(e) {
                    return function(i) {
                        return Li(i, e)
                    }
                }

                function va(e, i, o, u) {
                    var l = u ? ep : Zi,
                        y = -1,
                        _ = i.length,
                        E = e;
                    for (e === i && (i = nr(i)), o && (E = it(e, fr(o))); ++y < _;)
                        for (var O = 0, M = i[y], z = o ? o(M) : M;
                            (O = l(E, z, O, u)) > -1;) E !== e && Cs.call(E, O, 1), Cs.call(e, O, 1);
                    return e
                }

                function Ou(e, i) {
                    for (var o = e ? i.length : 0, u = o - 1; o--;) {
                        var l = i[o];
                        if (o == u || l !== y) {
                            var y = l;
                            Zr(l) ? Cs.call(e, l, 1) : ba(e, l)
                        }
                    }
                    return e
                }

                function ma(e, i) {
                    return e + Ds(au() * (i - e + 1))
                }

                function Cd(e, i, o, u) {
                    for (var l = -1, y = Lt(Ns((i - e) / (o || 1)), 0), _ = N(y); y--;) _[u ? y : ++l] = e, e += o;
                    return _
                }

                function _a(e, i) {
                    var o = "";
                    if (!e || i < 1 || i > K) return o;
                    do i % 2 && (o += e), i = Ds(i / 2), i && (e += e); while (i);
                    return o
                }

                function Pe(e, i) {
                    return La(ih(e, i, ar), e + "")
                }

                function $d(e) {
                    return hu(fn(e))
                }

                function Nd(e, i) {
                    var o = fn(e);
                    return Ys(o, Fi(i, 0, o.length))
                }

                function Nn(e, i, o, u) {
                    if (!ct(e)) return e;
                    i = mi(i, e);
                    for (var l = -1, y = i.length, _ = y - 1, E = e; E != null && ++l < y;) {
                        var O = Br(i[l]),
                            M = o;
                        if (O === "__proto__" || O === "constructor" || O === "prototype") return e;
                        if (l != _) {
                            var z = E[O];
                            M = u ? u(z, O, E) : r, M === r && (M = ct(z) ? z : Zr(i[l + 1]) ? [] : {})
                        }
                        An(E, O, M), E = E[O]
                    }
                    return e
                }
                var Ru = Fs ? function(e, i) {
                        return Fs.set(e, i), e
                    } : ar,
                    Dd = $s ? function(e, i) {
                        return $s(e, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Va(i),
                            writable: !0
                        })
                    } : ar;

                function Fd(e) {
                    return Ys(fn(e))
                }

                function Ir(e, i, o) {
                    var u = -1,
                        l = e.length;
                    i < 0 && (i = -i > l ? 0 : l + i), o = o > l ? l : o, o < 0 && (o += l), l = i > o ? 0 : o - i >>> 0, i >>>= 0;
                    for (var y = N(l); ++u < l;) y[u] = e[u + i];
                    return y
                }

                function Ld(e, i) {
                    var o;
                    return yi(e, function(u, l, y) {
                        return o = i(u, l, y), !o
                    }), !!o
                }

                function Hs(e, i, o) {
                    var u = 0,
                        l = e == null ? u : e.length;
                    if (typeof i == "number" && i === i && l <= Be) {
                        for (; u < l;) {
                            var y = u + l >>> 1,
                                _ = e[y];
                            _ !== null && !dr(_) && (o ? _ <= i : _ < i) ? u = y + 1 : l = y
                        }
                        return l
                    }
                    return wa(e, i, ar, o)
                }

                function wa(e, i, o, u) {
                    var l = 0,
                        y = e == null ? 0 : e.length;
                    if (y === 0) return 0;
                    i = o(i);
                    for (var _ = i !== i, E = i === null, O = dr(i), M = i === r; l < y;) {
                        var z = Ds((l + y) / 2),
                            B = o(e[z]),
                            J = B !== r,
                            re = B === null,
                            ae = B === B,
                            Ee = dr(B);
                        if (_) var ce = u || ae;
                        else M ? ce = ae && (u || J) : E ? ce = ae && J && (u || !re) : O ? ce = ae && J && !re && (u || !Ee) : re || Ee ? ce = !1 : ce = u ? B <= i : B < i;
                        ce ? l = z + 1 : y = z
                    }
                    return Kt(y, ut)
                }

                function Au(e, i) {
                    for (var o = -1, u = e.length, l = 0, y = []; ++o < u;) {
                        var _ = e[o],
                            E = i ? i(_) : _;
                        if (!o || !$r(E, O)) {
                            var O = E;
                            y[l++] = _ === 0 ? 0 : _
                        }
                    }
                    return y
                }

                function Tu(e) {
                    return typeof e == "number" ? e : dr(e) ? k : +e
                }

                function pr(e) {
                    if (typeof e == "string") return e;
                    if (_e(e)) return it(e, pr) + "";
                    if (dr(e)) return cu ? cu.call(e) : "";
                    var i = e + "";
                    return i == "0" && 1 / e == -oe ? "-0" : i
                }

                function vi(e, i, o) {
                    var u = -1,
                        l = bs,
                        y = e.length,
                        _ = !0,
                        E = [],
                        O = E;
                    if (o) _ = !1, l = Jo;
                    else if (y >= s) {
                        var M = i ? null : Gd(e);
                        if (M) return Is(M);
                        _ = !1, l = In, O = new Di
                    } else O = i ? [] : E;
                    e: for (; ++u < y;) {
                        var z = e[u],
                            B = i ? i(z) : z;
                        if (z = o || z !== 0 ? z : 0, _ && B === B) {
                            for (var J = O.length; J--;)
                                if (O[J] === B) continue e;
                            i && O.push(B), E.push(z)
                        } else l(O, B, o) || (O !== E && O.push(B), E.push(z))
                    }
                    return E
                }

                function ba(e, i) {
                    return i = mi(i, e), e = nh(e, i), e == null || delete e[Br(xr(i))]
                }

                function Cu(e, i, o, u) {
                    return Nn(e, i, o(Li(e, i)), u)
                }

                function Bs(e, i, o, u) {
                    for (var l = e.length, y = u ? l : -1;
                        (u ? y-- : ++y < l) && i(e[y], y, e););
                    return o ? Ir(e, u ? 0 : y, u ? y + 1 : l) : Ir(e, u ? y + 1 : 0, u ? l : y)
                }

                function $u(e, i) {
                    var o = e;
                    return o instanceof Ae && (o = o.value()), Qo(i, function(u, l) {
                        return l.func.apply(l.thisArg, pi([u], l.args))
                    }, o)
                }

                function Ea(e, i, o) {
                    var u = e.length;
                    if (u < 2) return u ? vi(e[0]) : [];
                    for (var l = -1, y = N(u); ++l < u;)
                        for (var _ = e[l], E = -1; ++E < u;) E != l && (y[l] = Tn(y[l] || _, e[E], i, o));
                    return vi(Bt(y, 1), i, o)
                }

                function Nu(e, i, o) {
                    for (var u = -1, l = e.length, y = i.length, _ = {}; ++u < l;) {
                        var E = u < y ? i[u] : r;
                        o(_, e[u], E)
                    }
                    return _
                }

                function Ia(e) {
                    return bt(e) ? e : []
                }

                function xa(e) {
                    return typeof e == "function" ? e : ar
                }

                function mi(e, i) {
                    return _e(e) ? e : Na(e, i) ? [e] : ch(qe(e))
                }
                var jd = Pe;

                function _i(e, i, o) {
                    var u = e.length;
                    return o = o === r ? u : o, !i && o >= u ? e : Ir(e, i, o)
                }
                var Du = xp || function(e) {
                    return Te.clearTimeout(e)
                };

                function Fu(e, i) {
                    if (i) return e.slice();
                    var o = e.length,
                        u = ru ? ru(o) : new e.constructor(o);
                    return e.copy(u), u
                }

                function Pa(e) {
                    var i = new e.constructor(e.byteLength);
                    return new As(i).set(new As(e)), i
                }

                function qd(e, i) {
                    var o = i ? Pa(e.buffer) : e.buffer;
                    return new e.constructor(o, e.byteOffset, e.byteLength)
                }

                function Md(e) {
                    var i = new e.constructor(e.source, vr.exec(e));
                    return i.lastIndex = e.lastIndex, i
                }

                function zd(e) {
                    return Rn ? We(Rn.call(e)) : {}
                }

                function Lu(e, i) {
                    var o = i ? Pa(e.buffer) : e.buffer;
                    return new e.constructor(o, e.byteOffset, e.length)
                }

                function ju(e, i) {
                    if (e !== i) {
                        var o = e !== r,
                            u = e === null,
                            l = e === e,
                            y = dr(e),
                            _ = i !== r,
                            E = i === null,
                            O = i === i,
                            M = dr(i);
                        if (!E && !M && !y && e > i || y && _ && O && !E && !M || u && _ && O || !o && O || !l) return 1;
                        if (!u && !y && !M && e < i || M && o && l && !u && !y || E && o && l || !_ && l || !O) return -1
                    }
                    return 0
                }

                function Ud(e, i, o) {
                    for (var u = -1, l = e.criteria, y = i.criteria, _ = l.length, E = o.length; ++u < _;) {
                        var O = ju(l[u], y[u]);
                        if (O) {
                            if (u >= E) return O;
                            var M = o[u];
                            return O * (M == "desc" ? -1 : 1)
                        }
                    }
                    return e.index - i.index
                }

                function qu(e, i, o, u) {
                    for (var l = -1, y = e.length, _ = o.length, E = -1, O = i.length, M = Lt(y - _, 0), z = N(O + M), B = !u; ++E < O;) z[E] = i[E];
                    for (; ++l < _;)(B || l < y) && (z[o[l]] = e[l]);
                    for (; M--;) z[E++] = e[l++];
                    return z
                }

                function Mu(e, i, o, u) {
                    for (var l = -1, y = e.length, _ = -1, E = o.length, O = -1, M = i.length, z = Lt(y - E, 0), B = N(z + M), J = !u; ++l < z;) B[l] = e[l];
                    for (var re = l; ++O < M;) B[re + O] = i[O];
                    for (; ++_ < E;)(J || l < y) && (B[re + o[_]] = e[l++]);
                    return B
                }

                function nr(e, i) {
                    var o = -1,
                        u = e.length;
                    for (i || (i = N(u)); ++o < u;) i[o] = e[o];
                    return i
                }

                function Hr(e, i, o, u) {
                    var l = !o;
                    o || (o = {});
                    for (var y = -1, _ = i.length; ++y < _;) {
                        var E = i[y],
                            O = u ? u(o[E], e[E], E, o, e) : r;
                        O === r && (O = e[E]), l ? Qr(o, E, O) : An(o, E, O)
                    }
                    return o
                }

                function Hd(e, i) {
                    return Hr(e, $a(e), i)
                }

                function Bd(e, i) {
                    return Hr(e, Xu(e), i)
                }

                function ks(e, i) {
                    return function(o, u) {
                        var l = _e(o) ? Wf : ld,
                            y = i ? i() : {};
                        return l(o, e, se(u, 2), y)
                    }
                }

                function cn(e) {
                    return Pe(function(i, o) {
                        var u = -1,
                            l = o.length,
                            y = l > 1 ? o[l - 1] : r,
                            _ = l > 2 ? o[2] : r;
                        for (y = e.length > 3 && typeof y == "function" ? (l--, y) : r, _ && Xt(o[0], o[1], _) && (y = l < 3 ? r : y, l = 1), i = We(i); ++u < l;) {
                            var E = o[u];
                            E && e(i, E, u, y)
                        }
                        return i
                    })
                }

                function zu(e, i) {
                    return function(o, u) {
                        if (o == null) return o;
                        if (!sr(o)) return e(o, u);
                        for (var l = o.length, y = i ? l : -1, _ = We(o);
                            (i ? y-- : ++y < l) && u(_[y], y, _) !== !1;);
                        return o
                    }
                }

                function Uu(e) {
                    return function(i, o, u) {
                        for (var l = -1, y = We(i), _ = u(i), E = _.length; E--;) {
                            var O = _[e ? E : ++l];
                            if (o(y[O], O, y) === !1) break
                        }
                        return i
                    }
                }

                function kd(e, i, o) {
                    var u = i & ie,
                        l = Dn(e);

                    function y() {
                        var _ = this && this !== Te && this instanceof y ? l : e;
                        return _.apply(u ? o : this, arguments)
                    }
                    return y
                }

                function Hu(e) {
                    return function(i) {
                        i = qe(i);
                        var o = en(i) ? Tr(i) : r,
                            u = o ? o[0] : i.charAt(0),
                            l = o ? _i(o, 1).join("") : i.slice(1);
                        return u[e]() + l
                    }
                }

                function un(e) {
                    return function(i) {
                        return Qo(zh(Mh(i).replace(bn, "")), e, "")
                    }
                }

                function Dn(e) {
                    return function() {
                        var i = arguments;
                        switch (i.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(i[0]);
                            case 2:
                                return new e(i[0], i[1]);
                            case 3:
                                return new e(i[0], i[1], i[2]);
                            case 4:
                                return new e(i[0], i[1], i[2], i[3]);
                            case 5:
                                return new e(i[0], i[1], i[2], i[3], i[4]);
                            case 6:
                                return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
                            case 7:
                                return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6])
                        }
                        var o = an(e.prototype),
                            u = e.apply(o, i);
                        return ct(u) ? u : o
                    }
                }

                function Kd(e, i, o) {
                    var u = Dn(e);

                    function l() {
                        for (var y = arguments.length, _ = N(y), E = y, O = hn(l); E--;) _[E] = arguments[E];
                        var M = y < 3 && _[0] !== O && _[y - 1] !== O ? [] : di(_, O);
                        if (y -= M.length, y < o) return Gu(e, i, Ks, l.placeholder, r, _, M, r, r, o - y);
                        var z = this && this !== Te && this instanceof l ? u : e;
                        return qt(z, this, _)
                    }
                    return l
                }

                function Bu(e) {
                    return function(i, o, u) {
                        var l = We(i);
                        if (!sr(i)) {
                            var y = se(o, 3);
                            i = Mt(i), o = function(E) {
                                return y(l[E], E, l)
                            }
                        }
                        var _ = e(i, o, u);
                        return _ > -1 ? l[y ? i[_] : _] : r
                    }
                }

                function ku(e) {
                    return Xr(function(i) {
                        var o = i.length,
                            u = o,
                            l = br.prototype.thru;
                        for (e && i.reverse(); u--;) {
                            var y = i[u];
                            if (typeof y != "function") throw new wr(f);
                            if (l && !_ && Js(y) == "wrapper") var _ = new br([], !0)
                        }
                        for (u = _ ? u : o; ++u < o;) {
                            y = i[u];
                            var E = Js(y),
                                O = E == "wrapper" ? Ta(y) : r;
                            O && Da(O[0]) && O[1] == (U | ue | de | Q) && !O[4].length && O[9] == 1 ? _ = _[Js(O[0])].apply(_, O[3]) : _ = y.length == 1 && Da(y) ? _[E]() : _.thru(y)
                        }
                        return function() {
                            var M = arguments,
                                z = M[0];
                            if (_ && M.length == 1 && _e(z)) return _.plant(z).value();
                            for (var B = 0, J = o ? i[B].apply(this, M) : z; ++B < o;) J = i[B].call(this, J);
                            return J
                        }
                    })
                }

                function Ks(e, i, o, u, l, y, _, E, O, M) {
                    var z = i & U,
                        B = i & ie,
                        J = i & he,
                        re = i & (ue | fe),
                        ae = i & ve,
                        Ee = J ? r : Dn(e);

                    function ce() {
                        for (var Se = arguments.length, Ce = N(Se), gr = Se; gr--;) Ce[gr] = arguments[gr];
                        if (re) var Zt = hn(ce),
                            yr = ip(Ce, Zt);
                        if (u && (Ce = qu(Ce, u, l, re)), y && (Ce = Mu(Ce, y, _, re)), Se -= yr, re && Se < M) {
                            var Et = di(Ce, Zt);
                            return Gu(e, i, Ks, ce.placeholder, o, Ce, Et, E, O, M - Se)
                        }
                        var Nr = B ? o : this,
                            ri = J ? Nr[e] : e;
                        return Se = Ce.length, E ? Ce = lg(Ce, E) : ae && Se > 1 && Ce.reverse(), z && O < Se && (Ce.length = O), this && this !== Te && this instanceof ce && (ri = Ee || Dn(ri)), ri.apply(Nr, Ce)
                    }
                    return ce
                }

                function Ku(e, i) {
                    return function(o, u) {
                        return _d(o, e, i(u), {})
                    }
                }

                function Vs(e, i) {
                    return function(o, u) {
                        var l;
                        if (o === r && u === r) return i;
                        if (o !== r && (l = o), u !== r) {
                            if (l === r) return u;
                            typeof o == "string" || typeof u == "string" ? (o = pr(o), u = pr(u)) : (o = Tu(o), u = Tu(u)), l = e(o, u)
                        }
                        return l
                    }
                }

                function Sa(e) {
                    return Xr(function(i) {
                        return i = it(i, fr(se())), Pe(function(o) {
                            var u = this;
                            return e(i, function(l) {
                                return qt(l, u, o)
                            })
                        })
                    })
                }

                function Gs(e, i) {
                    i = i === r ? " " : pr(i);
                    var o = i.length;
                    if (o < 2) return o ? _a(i, e) : i;
                    var u = _a(i, Ns(e / tn(i)));
                    return en(i) ? _i(Tr(u), 0, e).join("") : u.slice(0, e)
                }

                function Vd(e, i, o, u) {
                    var l = i & ie,
                        y = Dn(e);

                    function _() {
                        for (var E = -1, O = arguments.length, M = -1, z = u.length, B = N(z + O), J = this && this !== Te && this instanceof _ ? y : e; ++M < z;) B[M] = u[M];
                        for (; O--;) B[M++] = arguments[++E];
                        return qt(J, l ? o : this, B)
                    }
                    return _
                }

                function Vu(e) {
                    return function(i, o, u) {
                        return u && typeof u != "number" && Xt(i, o, u) && (o = u = r), i = ti(i), o === r ? (o = i, i = 0) : o = ti(o), u = u === r ? i < o ? 1 : -1 : ti(u), Cd(i, o, u, e)
                    }
                }

                function Ws(e) {
                    return function(i, o) {
                        return typeof i == "string" && typeof o == "string" || (i = Pr(i), o = Pr(o)), e(i, o)
                    }
                }

                function Gu(e, i, o, u, l, y, _, E, O, M) {
                    var z = i & ue,
                        B = z ? _ : r,
                        J = z ? r : _,
                        re = z ? y : r,
                        ae = z ? r : y;
                    i |= z ? de : j, i &= ~(z ? j : de), i & le || (i &= ~(ie | he));
                    var Ee = [e, i, l, re, B, ae, J, E, O, M],
                        ce = o.apply(r, Ee);
                    return Da(e) && sh(ce, Ee), ce.placeholder = u, oh(ce, e, i)
                }

                function Oa(e) {
                    var i = Ft[e];
                    return function(o, u) {
                        if (o = Pr(o), u = u == null ? 0 : Kt(we(u), 292), u && ou(o)) {
                            var l = (qe(o) + "e").split("e"),
                                y = i(l[0] + "e" + (+l[1] + u));
                            return l = (qe(y) + "e").split("e"), +(l[0] + "e" + (+l[1] - u))
                        }
                        return i(o)
                    }
                }
                var Gd = sn && 1 / Is(new sn([, -0]))[1] == oe ? function(e) {
                    return new sn(e)
                } : Ja;

                function Wu(e) {
                    return function(i) {
                        var o = Vt(i);
                        return o == be ? ia(i) : o == je ? hp(i) : rp(i, e(i))
                    }
                }

                function Yr(e, i, o, u, l, y, _, E) {
                    var O = i & he;
                    if (!O && typeof e != "function") throw new wr(f);
                    var M = u ? u.length : 0;
                    if (M || (i &= ~(de | j), u = l = r), _ = _ === r ? _ : Lt(we(_), 0), E = E === r ? E : we(E), M -= l ? l.length : 0, i & j) {
                        var z = u,
                            B = l;
                        u = l = r
                    }
                    var J = O ? r : Ta(e),
                        re = [e, i, o, u, l, z, B, y, _, E];
                    if (J && cg(re, J), e = re[0], i = re[1], o = re[2], u = re[3], l = re[4], E = re[9] = re[9] === r ? O ? 0 : e.length : Lt(re[9] - M, 0), !E && i & (ue | fe) && (i &= ~(ue | fe)), !i || i == ie) var ae = kd(e, i, o);
                    else i == ue || i == fe ? ae = Kd(e, i, E) : (i == de || i == (ie | de)) && !l.length ? ae = Vd(e, i, o, u) : ae = Ks.apply(r, re);
                    var Ee = J ? Ru : sh;
                    return oh(Ee(ae, re), e, i)
                }

                function Ju(e, i, o, u) {
                    return e === r || $r(e, nn[o]) && !ze.call(u, o) ? i : e
                }

                function Qu(e, i, o, u, l, y) {
                    return ct(e) && ct(i) && (y.set(i, e), Us(e, i, r, Qu, y), y.delete(i)), e
                }

                function Wd(e) {
                    return jn(e) ? r : e
                }

                function Yu(e, i, o, u, l, y) {
                    var _ = o & D,
                        E = e.length,
                        O = i.length;
                    if (E != O && !(_ && O > E)) return !1;
                    var M = y.get(e),
                        z = y.get(i);
                    if (M && z) return M == i && z == e;
                    var B = -1,
                        J = !0,
                        re = o & V ? new Di : r;
                    for (y.set(e, i), y.set(i, e); ++B < E;) {
                        var ae = e[B],
                            Ee = i[B];
                        if (u) var ce = _ ? u(Ee, ae, B, i, e, y) : u(ae, Ee, B, e, i, y);
                        if (ce !== r) {
                            if (ce) continue;
                            J = !1;
                            break
                        }
                        if (re) {
                            if (!Yo(i, function(Se, Ce) {
                                    if (!In(re, Ce) && (ae === Se || l(ae, Se, o, u, y))) return re.push(Ce)
                                })) {
                                J = !1;
                                break
                            }
                        } else if (!(ae === Ee || l(ae, Ee, o, u, y))) {
                            J = !1;
                            break
                        }
                    }
                    return y.delete(e), y.delete(i), J
                }

                function Jd(e, i, o, u, l, y, _) {
                    switch (o) {
                        case ke:
                            if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset) return !1;
                            e = e.buffer, i = i.buffer;
                        case De:
                            return !(e.byteLength != i.byteLength || !y(new As(e), new As(i)));
                        case F:
                        case A:
                        case Ne:
                            return $r(+e, +i);
                        case I:
                            return e.name == i.name && e.message == i.message;
                        case st:
                        case Qe:
                            return e == i + "";
                        case be:
                            var E = ia;
                        case je:
                            var O = u & D;
                            if (E || (E = Is), e.size != i.size && !O) return !1;
                            var M = _.get(e);
                            if (M) return M == i;
                            u |= V, _.set(e, i);
                            var z = Yu(E(e), E(i), u, l, y, _);
                            return _.delete(e), z;
                        case Ye:
                            if (Rn) return Rn.call(e) == Rn.call(i)
                    }
                    return !1
                }

                function Qd(e, i, o, u, l, y) {
                    var _ = o & D,
                        E = Ra(e),
                        O = E.length,
                        M = Ra(i),
                        z = M.length;
                    if (O != z && !_) return !1;
                    for (var B = O; B--;) {
                        var J = E[B];
                        if (!(_ ? J in i : ze.call(i, J))) return !1
                    }
                    var re = y.get(e),
                        ae = y.get(i);
                    if (re && ae) return re == i && ae == e;
                    var Ee = !0;
                    y.set(e, i), y.set(i, e);
                    for (var ce = _; ++B < O;) {
                        J = E[B];
                        var Se = e[J],
                            Ce = i[J];
                        if (u) var gr = _ ? u(Ce, Se, J, i, e, y) : u(Se, Ce, J, e, i, y);
                        if (!(gr === r ? Se === Ce || l(Se, Ce, o, u, y) : gr)) {
                            Ee = !1;
                            break
                        }
                        ce || (ce = J == "constructor")
                    }
                    if (Ee && !ce) {
                        var Zt = e.constructor,
                            yr = i.constructor;
                        Zt != yr && "constructor" in e && "constructor" in i && !(typeof Zt == "function" && Zt instanceof Zt && typeof yr == "function" && yr instanceof yr) && (Ee = !1)
                    }
                    return y.delete(e), y.delete(i), Ee
                }

                function Xr(e) {
                    return La(ih(e, r, fh), e + "")
                }

                function Ra(e) {
                    return vu(e, Mt, $a)
                }

                function Aa(e) {
                    return vu(e, or, Xu)
                }
                var Ta = Fs ? function(e) {
                    return Fs.get(e)
                } : Ja;

                function Js(e) {
                    for (var i = e.name + "", o = on[i], u = ze.call(on, i) ? o.length : 0; u--;) {
                        var l = o[u],
                            y = l.func;
                        if (y == null || y == e) return l.name
                    }
                    return i
                }

                function hn(e) {
                    var i = ze.call(d, "placeholder") ? d : e;
                    return i.placeholder
                }

                function se() {
                    var e = d.iteratee || Ga;
                    return e = e === Ga ? wu : e, arguments.length ? e(arguments[0], arguments[1]) : e
                }

                function Qs(e, i) {
                    var o = e.__data__;
                    return ng(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map
                }

                function Ca(e) {
                    for (var i = Mt(e), o = i.length; o--;) {
                        var u = i[o],
                            l = e[u];
                        i[o] = [u, l, th(l)]
                    }
                    return i
                }

                function ji(e, i) {
                    var o = ap(e, i);
                    return _u(o) ? o : r
                }

                function Yd(e) {
                    var i = ze.call(e, $i),
                        o = e[$i];
                    try {
                        e[$i] = r;
                        var u = !0
                    } catch {}
                    var l = Os.call(e);
                    return u && (i ? e[$i] = o : delete e[$i]), l
                }
                var $a = sa ? function(e) {
                        return e == null ? [] : (e = We(e), fi(sa(e), function(i) {
                            return nu.call(e, i)
                        }))
                    } : Qa,
                    Xu = sa ? function(e) {
                        for (var i = []; e;) pi(i, $a(e)), e = Ts(e);
                        return i
                    } : Qa,
                    Vt = Yt;
                (oa && Vt(new oa(new ArrayBuffer(1))) != ke || Pn && Vt(new Pn) != be || aa && Vt(aa.resolve()) != xt || sn && Vt(new sn) != je || Sn && Vt(new Sn) != Ue) && (Vt = function(e) {
                    var i = Yt(e),
                        o = i == Re ? e.constructor : r,
                        u = o ? qi(o) : "";
                    if (u) switch (u) {
                        case Np:
                            return ke;
                        case Dp:
                            return be;
                        case Fp:
                            return xt;
                        case Lp:
                            return je;
                        case jp:
                            return Ue
                    }
                    return i
                });

                function Xd(e, i, o) {
                    for (var u = -1, l = o.length; ++u < l;) {
                        var y = o[u],
                            _ = y.size;
                        switch (y.type) {
                            case "drop":
                                e += _;
                                break;
                            case "dropRight":
                                i -= _;
                                break;
                            case "take":
                                i = Kt(i, e + _);
                                break;
                            case "takeRight":
                                e = Lt(e, i - _);
                                break
                        }
                    }
                    return {
                        start: e,
                        end: i
                    }
                }

                function Zd(e) {
                    var i = e.match(Je);
                    return i ? i[1].split(At) : []
                }

                function Zu(e, i, o) {
                    i = mi(i, e);
                    for (var u = -1, l = i.length, y = !1; ++u < l;) {
                        var _ = Br(i[u]);
                        if (!(y = e != null && o(e, _))) break;
                        e = e[_]
                    }
                    return y || ++u != l ? y : (l = e == null ? 0 : e.length, !!l && io(l) && Zr(_, l) && (_e(e) || Mi(e)))
                }

                function eg(e) {
                    var i = e.length,
                        o = new e.constructor(i);
                    return i && typeof e[0] == "string" && ze.call(e, "index") && (o.index = e.index, o.input = e.input), o
                }

                function eh(e) {
                    return typeof e.constructor == "function" && !Fn(e) ? an(Ts(e)) : {}
                }

                function tg(e, i, o) {
                    var u = e.constructor;
                    switch (i) {
                        case De:
                            return Pa(e);
                        case F:
                        case A:
                            return new u(+e);
                        case ke:
                            return qd(e, o);
                        case ht:
                        case Me:
                        case Pt:
                        case Dt:
                        case Ut:
                        case Ht:
                        case jt:
                        case Wt:
                        case rr:
                            return Lu(e, o);
                        case be:
                            return new u;
                        case Ne:
                        case Qe:
                            return new u(e);
                        case st:
                            return Md(e);
                        case je:
                            return new u;
                        case Ye:
                            return zd(e)
                    }
                }

                function rg(e, i) {
                    var o = i.length;
                    if (!o) return e;
                    var u = o - 1;
                    return i[u] = (o > 1 ? "& " : "") + i[u], i = i.join(o > 2 ? ", " : " "), e.replace(yt, `{
/* [wrapped with ` + i + `] */
`)
                }

                function ig(e) {
                    return _e(e) || Mi(e) || !!(su && e && e[su])
                }

                function Zr(e, i) {
                    var o = typeof e;
                    return i = i ? ? K, !!i && (o == "number" || o != "symbol" && Fo.test(e)) && e > -1 && e % 1 == 0 && e < i
                }

                function Xt(e, i, o) {
                    if (!ct(o)) return !1;
                    var u = typeof i;
                    return (u == "number" ? sr(o) && Zr(i, o.length) : u == "string" && i in o) ? $r(o[i], e) : !1
                }

                function Na(e, i) {
                    if (_e(e)) return !1;
                    var o = typeof e;
                    return o == "number" || o == "symbol" || o == "boolean" || e == null || dr(e) ? !0 : St.test(e) || !rt.test(e) || i != null && e in We(i)
                }

                function ng(e) {
                    var i = typeof e;
                    return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? e !== "__proto__" : e === null
                }

                function Da(e) {
                    var i = Js(e),
                        o = d[i];
                    if (typeof o != "function" || !(i in Ae.prototype)) return !1;
                    if (e === o) return !0;
                    var u = Ta(o);
                    return !!u && e === u[0]
                }

                function sg(e) {
                    return !!tu && tu in e
                }
                var og = Ps ? ei : Ya;

                function Fn(e) {
                    var i = e && e.constructor,
                        o = typeof i == "function" && i.prototype || nn;
                    return e === o
                }

                function th(e) {
                    return e === e && !ct(e)
                }

                function rh(e, i) {
                    return function(o) {
                        return o == null ? !1 : o[e] === i && (i !== r || e in We(o))
                    }
                }

                function ag(e) {
                    var i = to(e, function(u) {
                            return o.size === p && o.clear(), u
                        }),
                        o = i.cache;
                    return i
                }

                function cg(e, i) {
                    var o = e[1],
                        u = i[1],
                        l = o | u,
                        y = l < (ie | he | U),
                        _ = u == U && o == ue || u == U && o == Q && e[7].length <= i[8] || u == (U | Q) && i[7].length <= i[8] && o == ue;
                    if (!(y || _)) return e;
                    u & ie && (e[2] = i[2], l |= o & ie ? 0 : le);
                    var E = i[3];
                    if (E) {
                        var O = e[3];
                        e[3] = O ? qu(O, E, i[4]) : E, e[4] = O ? di(e[3], w) : i[4]
                    }
                    return E = i[5], E && (O = e[5], e[5] = O ? Mu(O, E, i[6]) : E, e[6] = O ? di(e[5], w) : i[6]), E = i[7], E && (e[7] = E), u & U && (e[8] = e[8] == null ? i[8] : Kt(e[8], i[8])), e[9] == null && (e[9] = i[9]), e[0] = i[0], e[1] = l, e
                }

                function ug(e) {
                    var i = [];
                    if (e != null)
                        for (var o in We(e)) i.push(o);
                    return i
                }

                function hg(e) {
                    return Os.call(e)
                }

                function ih(e, i, o) {
                    return i = Lt(i === r ? e.length - 1 : i, 0),
                        function() {
                            for (var u = arguments, l = -1, y = Lt(u.length - i, 0), _ = N(y); ++l < y;) _[l] = u[i + l];
                            l = -1;
                            for (var E = N(i + 1); ++l < i;) E[l] = u[l];
                            return E[i] = o(_), qt(e, this, E)
                        }
                }

                function nh(e, i) {
                    return i.length < 2 ? e : Li(e, Ir(i, 0, -1))
                }

                function lg(e, i) {
                    for (var o = e.length, u = Kt(i.length, o), l = nr(e); u--;) {
                        var y = i[u];
                        e[u] = Zr(y, o) ? l[y] : r
                    }
                    return e
                }

                function Fa(e, i) {
                    if (!(i === "constructor" && typeof e[i] == "function") && i != "__proto__") return e[i]
                }
                var sh = ah(Ru),
                    Ln = Sp || function(e, i) {
                        return Te.setTimeout(e, i)
                    },
                    La = ah(Dd);

                function oh(e, i, o) {
                    var u = i + "";
                    return La(e, rg(u, fg(Zd(u), o)))
                }

                function ah(e) {
                    var i = 0,
                        o = 0;
                    return function() {
                        var u = Tp(),
                            l = T - (u - o);
                        if (o = u, l > 0) {
                            if (++i >= Oe) return arguments[0]
                        } else i = 0;
                        return e.apply(r, arguments)
                    }
                }

                function Ys(e, i) {
                    var o = -1,
                        u = e.length,
                        l = u - 1;
                    for (i = i === r ? u : i; ++o < i;) {
                        var y = ma(o, l),
                            _ = e[y];
                        e[y] = e[o], e[o] = _
                    }
                    return e.length = i, e
                }
                var ch = ag(function(e) {
                    var i = [];
                    return e.charCodeAt(0) === 46 && i.push(""), e.replace(Ot, function(o, u, l, y) {
                        i.push(l ? y.replace(Ao, "$1") : u || o)
                    }), i
                });

                function Br(e) {
                    if (typeof e == "string" || dr(e)) return e;
                    var i = e + "";
                    return i == "0" && 1 / e == -oe ? "-0" : i
                }

                function qi(e) {
                    if (e != null) {
                        try {
                            return Ss.call(e)
                        } catch {}
                        try {
                            return e + ""
                        } catch {}
                    }
                    return ""
                }

                function fg(e, i) {
                    return _r(jr, function(o) {
                        var u = "_." + o[0];
                        i & o[1] && !bs(e, u) && e.push(u)
                    }), e.sort()
                }

                function uh(e) {
                    if (e instanceof Ae) return e.clone();
                    var i = new br(e.__wrapped__, e.__chain__);
                    return i.__actions__ = nr(e.__actions__), i.__index__ = e.__index__, i.__values__ = e.__values__, i
                }

                function pg(e, i, o) {
                    (o ? Xt(e, i, o) : i === r) ? i = 1: i = Lt(we(i), 0);
                    var u = e == null ? 0 : e.length;
                    if (!u || i < 1) return [];
                    for (var l = 0, y = 0, _ = N(Ns(u / i)); l < u;) _[y++] = Ir(e, l, l += i);
                    return _
                }

                function dg(e) {
                    for (var i = -1, o = e == null ? 0 : e.length, u = 0, l = []; ++i < o;) {
                        var y = e[i];
                        y && (l[u++] = y)
                    }
                    return l
                }

                function gg() {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var i = N(e - 1), o = arguments[0], u = e; u--;) i[u - 1] = arguments[u];
                    return pi(_e(o) ? nr(o) : [o], Bt(i, 1))
                }
                var yg = Pe(function(e, i) {
                        return bt(e) ? Tn(e, Bt(i, 1, bt, !0)) : []
                    }),
                    vg = Pe(function(e, i) {
                        var o = xr(i);
                        return bt(o) && (o = r), bt(e) ? Tn(e, Bt(i, 1, bt, !0), se(o, 2)) : []
                    }),
                    mg = Pe(function(e, i) {
                        var o = xr(i);
                        return bt(o) && (o = r), bt(e) ? Tn(e, Bt(i, 1, bt, !0), r, o) : []
                    });

                function _g(e, i, o) {
                    var u = e == null ? 0 : e.length;
                    return u ? (i = o || i === r ? 1 : we(i), Ir(e, i < 0 ? 0 : i, u)) : []
                }

                function wg(e, i, o) {
                    var u = e == null ? 0 : e.length;
                    return u ? (i = o || i === r ? 1 : we(i), i = u - i, Ir(e, 0, i < 0 ? 0 : i)) : []
                }

                function bg(e, i) {
                    return e && e.length ? Bs(e, se(i, 3), !0, !0) : []
                }

                function Eg(e, i) {
                    return e && e.length ? Bs(e, se(i, 3), !0) : []
                }

                function Ig(e, i, o, u) {
                    var l = e == null ? 0 : e.length;
                    return l ? (o && typeof o != "number" && Xt(e, i, o) && (o = 0, u = l), gd(e, i, o, u)) : []
                }

                function hh(e, i, o) {
                    var u = e == null ? 0 : e.length;
                    if (!u) return -1;
                    var l = o == null ? 0 : we(o);
                    return l < 0 && (l = Lt(u + l, 0)), Es(e, se(i, 3), l)
                }

                function lh(e, i, o) {
                    var u = e == null ? 0 : e.length;
                    if (!u) return -1;
                    var l = u - 1;
                    return o !== r && (l = we(o), l = o < 0 ? Lt(u + l, 0) : Kt(l, u - 1)), Es(e, se(i, 3), l, !0)
                }

                function fh(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? Bt(e, 1) : []
                }

                function xg(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? Bt(e, oe) : []
                }

                function Pg(e, i) {
                    var o = e == null ? 0 : e.length;
                    return o ? (i = i === r ? 1 : we(i), Bt(e, i)) : []
                }

                function Sg(e) {
                    for (var i = -1, o = e == null ? 0 : e.length, u = {}; ++i < o;) {
                        var l = e[i];
                        u[l[0]] = l[1]
                    }
                    return u
                }

                function ph(e) {
                    return e && e.length ? e[0] : r
                }

                function Og(e, i, o) {
                    var u = e == null ? 0 : e.length;
                    if (!u) return -1;
                    var l = o == null ? 0 : we(o);
                    return l < 0 && (l = Lt(u + l, 0)), Zi(e, i, l)
                }

                function Rg(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? Ir(e, 0, -1) : []
                }
                var Ag = Pe(function(e) {
                        var i = it(e, Ia);
                        return i.length && i[0] === e[0] ? pa(i) : []
                    }),
                    Tg = Pe(function(e) {
                        var i = xr(e),
                            o = it(e, Ia);
                        return i === xr(o) ? i = r : o.pop(), o.length && o[0] === e[0] ? pa(o, se(i, 2)) : []
                    }),
                    Cg = Pe(function(e) {
                        var i = xr(e),
                            o = it(e, Ia);
                        return i = typeof i == "function" ? i : r, i && o.pop(), o.length && o[0] === e[0] ? pa(o, r, i) : []
                    });

                function $g(e, i) {
                    return e == null ? "" : Rp.call(e, i)
                }

                function xr(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? e[i - 1] : r
                }

                function Ng(e, i, o) {
                    var u = e == null ? 0 : e.length;
                    if (!u) return -1;
                    var l = u;
                    return o !== r && (l = we(o), l = l < 0 ? Lt(u + l, 0) : Kt(l, u - 1)), i === i ? fp(e, i, l) : Es(e, Gc, l, !0)
                }

                function Dg(e, i) {
                    return e && e.length ? xu(e, we(i)) : r
                }
                var Fg = Pe(dh);

                function dh(e, i) {
                    return e && e.length && i && i.length ? va(e, i) : e
                }

                function Lg(e, i, o) {
                    return e && e.length && i && i.length ? va(e, i, se(o, 2)) : e
                }

                function jg(e, i, o) {
                    return e && e.length && i && i.length ? va(e, i, r, o) : e
                }
                var qg = Xr(function(e, i) {
                    var o = e == null ? 0 : e.length,
                        u = ua(e, i);
                    return Ou(e, it(i, function(l) {
                        return Zr(l, o) ? +l : l
                    }).sort(ju)), u
                });

                function Mg(e, i) {
                    var o = [];
                    if (!(e && e.length)) return o;
                    var u = -1,
                        l = [],
                        y = e.length;
                    for (i = se(i, 3); ++u < y;) {
                        var _ = e[u];
                        i(_, u, e) && (o.push(_), l.push(u))
                    }
                    return Ou(e, l), o
                }

                function ja(e) {
                    return e == null ? e : $p.call(e)
                }

                function zg(e, i, o) {
                    var u = e == null ? 0 : e.length;
                    return u ? (o && typeof o != "number" && Xt(e, i, o) ? (i = 0, o = u) : (i = i == null ? 0 : we(i), o = o === r ? u : we(o)), Ir(e, i, o)) : []
                }

                function Ug(e, i) {
                    return Hs(e, i)
                }

                function Hg(e, i, o) {
                    return wa(e, i, se(o, 2))
                }

                function Bg(e, i) {
                    var o = e == null ? 0 : e.length;
                    if (o) {
                        var u = Hs(e, i);
                        if (u < o && $r(e[u], i)) return u
                    }
                    return -1
                }

                function kg(e, i) {
                    return Hs(e, i, !0)
                }

                function Kg(e, i, o) {
                    return wa(e, i, se(o, 2), !0)
                }

                function Vg(e, i) {
                    var o = e == null ? 0 : e.length;
                    if (o) {
                        var u = Hs(e, i, !0) - 1;
                        if ($r(e[u], i)) return u
                    }
                    return -1
                }

                function Gg(e) {
                    return e && e.length ? Au(e) : []
                }

                function Wg(e, i) {
                    return e && e.length ? Au(e, se(i, 2)) : []
                }

                function Jg(e) {
                    var i = e == null ? 0 : e.length;
                    return i ? Ir(e, 1, i) : []
                }

                function Qg(e, i, o) {
                    return e && e.length ? (i = o || i === r ? 1 : we(i), Ir(e, 0, i < 0 ? 0 : i)) : []
                }

                function Yg(e, i, o) {
                    var u = e == null ? 0 : e.length;
                    return u ? (i = o || i === r ? 1 : we(i), i = u - i, Ir(e, i < 0 ? 0 : i, u)) : []
                }

                function Xg(e, i) {
                    return e && e.length ? Bs(e, se(i, 3), !1, !0) : []
                }

                function Zg(e, i) {
                    return e && e.length ? Bs(e, se(i, 3)) : []
                }
                var ey = Pe(function(e) {
                        return vi(Bt(e, 1, bt, !0))
                    }),
                    ty = Pe(function(e) {
                        var i = xr(e);
                        return bt(i) && (i = r), vi(Bt(e, 1, bt, !0), se(i, 2))
                    }),
                    ry = Pe(function(e) {
                        var i = xr(e);
                        return i = typeof i == "function" ? i : r, vi(Bt(e, 1, bt, !0), r, i)
                    });

                function iy(e) {
                    return e && e.length ? vi(e) : []
                }

                function ny(e, i) {
                    return e && e.length ? vi(e, se(i, 2)) : []
                }

                function sy(e, i) {
                    return i = typeof i == "function" ? i : r, e && e.length ? vi(e, r, i) : []
                }

                function qa(e) {
                    if (!(e && e.length)) return [];
                    var i = 0;
                    return e = fi(e, function(o) {
                        if (bt(o)) return i = Lt(o.length, i), !0
                    }), ta(i, function(o) {
                        return it(e, Xo(o))
                    })
                }

                function gh(e, i) {
                    if (!(e && e.length)) return [];
                    var o = qa(e);
                    return i == null ? o : it(o, function(u) {
                        return qt(i, r, u)
                    })
                }
                var oy = Pe(function(e, i) {
                        return bt(e) ? Tn(e, i) : []
                    }),
                    ay = Pe(function(e) {
                        return Ea(fi(e, bt))
                    }),
                    cy = Pe(function(e) {
                        var i = xr(e);
                        return bt(i) && (i = r), Ea(fi(e, bt), se(i, 2))
                    }),
                    uy = Pe(function(e) {
                        var i = xr(e);
                        return i = typeof i == "function" ? i : r, Ea(fi(e, bt), r, i)
                    }),
                    hy = Pe(qa);

                function ly(e, i) {
                    return Nu(e || [], i || [], An)
                }

                function fy(e, i) {
                    return Nu(e || [], i || [], Nn)
                }
                var py = Pe(function(e) {
                    var i = e.length,
                        o = i > 1 ? e[i - 1] : r;
                    return o = typeof o == "function" ? (e.pop(), o) : r, gh(e, o)
                });

                function yh(e) {
                    var i = d(e);
                    return i.__chain__ = !0, i
                }

                function dy(e, i) {
                    return i(e), e
                }

                function Xs(e, i) {
                    return i(e)
                }
                var gy = Xr(function(e) {
                    var i = e.length,
                        o = i ? e[0] : 0,
                        u = this.__wrapped__,
                        l = function(y) {
                            return ua(y, e)
                        };
                    return i > 1 || this.__actions__.length || !(u instanceof Ae) || !Zr(o) ? this.thru(l) : (u = u.slice(o, +o + (i ? 1 : 0)), u.__actions__.push({
                        func: Xs,
                        args: [l],
                        thisArg: r
                    }), new br(u, this.__chain__).thru(function(y) {
                        return i && !y.length && y.push(r), y
                    }))
                });

                function yy() {
                    return yh(this)
                }

                function vy() {
                    return new br(this.value(), this.__chain__)
                }

                function my() {
                    this.__values__ === r && (this.__values__ = Th(this.value()));
                    var e = this.__index__ >= this.__values__.length,
                        i = e ? r : this.__values__[this.__index__++];
                    return {
                        done: e,
                        value: i
                    }
                }

                function _y() {
                    return this
                }

                function wy(e) {
                    for (var i, o = this; o instanceof js;) {
                        var u = uh(o);
                        u.__index__ = 0, u.__values__ = r, i ? l.__wrapped__ = u : i = u;
                        var l = u;
                        o = o.__wrapped__
                    }
                    return l.__wrapped__ = e, i
                }

                function by() {
                    var e = this.__wrapped__;
                    if (e instanceof Ae) {
                        var i = e;
                        return this.__actions__.length && (i = new Ae(this)), i = i.reverse(), i.__actions__.push({
                            func: Xs,
                            args: [ja],
                            thisArg: r
                        }), new br(i, this.__chain__)
                    }
                    return this.thru(ja)
                }

                function Ey() {
                    return $u(this.__wrapped__, this.__actions__)
                }
                var Iy = ks(function(e, i, o) {
                    ze.call(e, o) ? ++e[o] : Qr(e, o, 1)
                });

                function xy(e, i, o) {
                    var u = _e(e) ? Kc : dd;
                    return o && Xt(e, i, o) && (i = r), u(e, se(i, 3))
                }

                function Py(e, i) {
                    var o = _e(e) ? fi : gu;
                    return o(e, se(i, 3))
                }
                var Sy = Bu(hh),
                    Oy = Bu(lh);

                function Ry(e, i) {
                    return Bt(Zs(e, i), 1)
                }

                function Ay(e, i) {
                    return Bt(Zs(e, i), oe)
                }

                function Ty(e, i, o) {
                    return o = o === r ? 1 : we(o), Bt(Zs(e, i), o)
                }

                function vh(e, i) {
                    var o = _e(e) ? _r : yi;
                    return o(e, se(i, 3))
                }

                function mh(e, i) {
                    var o = _e(e) ? Jf : du;
                    return o(e, se(i, 3))
                }
                var Cy = ks(function(e, i, o) {
                    ze.call(e, o) ? e[o].push(i) : Qr(e, o, [i])
                });

                function $y(e, i, o, u) {
                    e = sr(e) ? e : fn(e), o = o && !u ? we(o) : 0;
                    var l = e.length;
                    return o < 0 && (o = Lt(l + o, 0)), no(e) ? o <= l && e.indexOf(i, o) > -1 : !!l && Zi(e, i, o) > -1
                }
                var Ny = Pe(function(e, i, o) {
                        var u = -1,
                            l = typeof i == "function",
                            y = sr(e) ? N(e.length) : [];
                        return yi(e, function(_) {
                            y[++u] = l ? qt(i, _, o) : Cn(_, i, o)
                        }), y
                    }),
                    Dy = ks(function(e, i, o) {
                        Qr(e, o, i)
                    });

                function Zs(e, i) {
                    var o = _e(e) ? it : bu;
                    return o(e, se(i, 3))
                }

                function Fy(e, i, o, u) {
                    return e == null ? [] : (_e(i) || (i = i == null ? [] : [i]), o = u ? r : o, _e(o) || (o = o == null ? [] : [o]), Pu(e, i, o))
                }
                var Ly = ks(function(e, i, o) {
                    e[o ? 0 : 1].push(i)
                }, function() {
                    return [
                        [],
                        []
                    ]
                });

                function jy(e, i, o) {
                    var u = _e(e) ? Qo : Jc,
                        l = arguments.length < 3;
                    return u(e, se(i, 4), o, l, yi)
                }

                function qy(e, i, o) {
                    var u = _e(e) ? Qf : Jc,
                        l = arguments.length < 3;
                    return u(e, se(i, 4), o, l, du)
                }

                function My(e, i) {
                    var o = _e(e) ? fi : gu;
                    return o(e, ro(se(i, 3)))
                }

                function zy(e) {
                    var i = _e(e) ? hu : $d;
                    return i(e)
                }

                function Uy(e, i, o) {
                    (o ? Xt(e, i, o) : i === r) ? i = 1: i = we(i);
                    var u = _e(e) ? ud : Nd;
                    return u(e, i)
                }

                function Hy(e) {
                    var i = _e(e) ? hd : Fd;
                    return i(e)
                }

                function By(e) {
                    if (e == null) return 0;
                    if (sr(e)) return no(e) ? tn(e) : e.length;
                    var i = Vt(e);
                    return i == be || i == je ? e.size : ga(e).length
                }

                function ky(e, i, o) {
                    var u = _e(e) ? Yo : Ld;
                    return o && Xt(e, i, o) && (i = r), u(e, se(i, 3))
                }
                var Ky = Pe(function(e, i) {
                        if (e == null) return [];
                        var o = i.length;
                        return o > 1 && Xt(e, i[0], i[1]) ? i = [] : o > 2 && Xt(i[0], i[1], i[2]) && (i = [i[0]]), Pu(e, Bt(i, 1), [])
                    }),
                    eo = Pp || function() {
                        return Te.Date.now()
                    };

                function Vy(e, i) {
                    if (typeof i != "function") throw new wr(f);
                    return e = we(e),
                        function() {
                            if (--e < 1) return i.apply(this, arguments)
                        }
                }

                function _h(e, i, o) {
                    return i = o ? r : i, i = e && i == null ? e.length : i, Yr(e, U, r, r, r, r, i)
                }

                function wh(e, i) {
                    var o;
                    if (typeof i != "function") throw new wr(f);
                    return e = we(e),
                        function() {
                            return --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o
                        }
                }
                var Ma = Pe(function(e, i, o) {
                        var u = ie;
                        if (o.length) {
                            var l = di(o, hn(Ma));
                            u |= de
                        }
                        return Yr(e, u, i, o, l)
                    }),
                    bh = Pe(function(e, i, o) {
                        var u = ie | he;
                        if (o.length) {
                            var l = di(o, hn(bh));
                            u |= de
                        }
                        return Yr(i, u, e, o, l)
                    });

                function Eh(e, i, o) {
                    i = o ? r : i;
                    var u = Yr(e, ue, r, r, r, r, r, i);
                    return u.placeholder = Eh.placeholder, u
                }

                function Ih(e, i, o) {
                    i = o ? r : i;
                    var u = Yr(e, fe, r, r, r, r, r, i);
                    return u.placeholder = Ih.placeholder, u
                }

                function xh(e, i, o) {
                    var u, l, y, _, E, O, M = 0,
                        z = !1,
                        B = !1,
                        J = !0;
                    if (typeof e != "function") throw new wr(f);
                    i = Pr(i) || 0, ct(o) && (z = !!o.leading, B = "maxWait" in o, y = B ? Lt(Pr(o.maxWait) || 0, i) : y, J = "trailing" in o ? !!o.trailing : J);

                    function re(Et) {
                        var Nr = u,
                            ri = l;
                        return u = l = r, M = Et, _ = e.apply(ri, Nr), _
                    }

                    function ae(Et) {
                        return M = Et, E = Ln(Se, i), z ? re(Et) : _
                    }

                    function Ee(Et) {
                        var Nr = Et - O,
                            ri = Et - M,
                            Bh = i - Nr;
                        return B ? Kt(Bh, y - ri) : Bh
                    }

                    function ce(Et) {
                        var Nr = Et - O,
                            ri = Et - M;
                        return O === r || Nr >= i || Nr < 0 || B && ri >= y
                    }

                    function Se() {
                        var Et = eo();
                        if (ce(Et)) return Ce(Et);
                        E = Ln(Se, Ee(Et))
                    }

                    function Ce(Et) {
                        return E = r, J && u ? re(Et) : (u = l = r, _)
                    }

                    function gr() {
                        E !== r && Du(E), M = 0, u = O = l = E = r
                    }

                    function Zt() {
                        return E === r ? _ : Ce(eo())
                    }

                    function yr() {
                        var Et = eo(),
                            Nr = ce(Et);
                        if (u = arguments, l = this, O = Et, Nr) {
                            if (E === r) return ae(O);
                            if (B) return Du(E), E = Ln(Se, i), re(O)
                        }
                        return E === r && (E = Ln(Se, i)), _
                    }
                    return yr.cancel = gr, yr.flush = Zt, yr
                }
                var Gy = Pe(function(e, i) {
                        return pu(e, 1, i)
                    }),
                    Wy = Pe(function(e, i, o) {
                        return pu(e, Pr(i) || 0, o)
                    });

                function Jy(e) {
                    return Yr(e, ve)
                }

                function to(e, i) {
                    if (typeof e != "function" || i != null && typeof i != "function") throw new wr(f);
                    var o = function() {
                        var u = arguments,
                            l = i ? i.apply(this, u) : u[0],
                            y = o.cache;
                        if (y.has(l)) return y.get(l);
                        var _ = e.apply(this, u);
                        return o.cache = y.set(l, _) || y, _
                    };
                    return o.cache = new(to.Cache || Jr), o
                }
                to.Cache = Jr;

                function ro(e) {
                    if (typeof e != "function") throw new wr(f);
                    return function() {
                        var i = arguments;
                        switch (i.length) {
                            case 0:
                                return !e.call(this);
                            case 1:
                                return !e.call(this, i[0]);
                            case 2:
                                return !e.call(this, i[0], i[1]);
                            case 3:
                                return !e.call(this, i[0], i[1], i[2])
                        }
                        return !e.apply(this, i)
                    }
                }

                function Qy(e) {
                    return wh(2, e)
                }
                var Yy = jd(function(e, i) {
                        i = i.length == 1 && _e(i[0]) ? it(i[0], fr(se())) : it(Bt(i, 1), fr(se()));
                        var o = i.length;
                        return Pe(function(u) {
                            for (var l = -1, y = Kt(u.length, o); ++l < y;) u[l] = i[l].call(this, u[l]);
                            return qt(e, this, u)
                        })
                    }),
                    za = Pe(function(e, i) {
                        var o = di(i, hn(za));
                        return Yr(e, de, r, i, o)
                    }),
                    Ph = Pe(function(e, i) {
                        var o = di(i, hn(Ph));
                        return Yr(e, j, r, i, o)
                    }),
                    Xy = Xr(function(e, i) {
                        return Yr(e, Q, r, r, r, i)
                    });

                function Zy(e, i) {
                    if (typeof e != "function") throw new wr(f);
                    return i = i === r ? i : we(i), Pe(e, i)
                }

                function ev(e, i) {
                    if (typeof e != "function") throw new wr(f);
                    return i = i == null ? 0 : Lt(we(i), 0), Pe(function(o) {
                        var u = o[i],
                            l = _i(o, 0, i);
                        return u && pi(l, u), qt(e, this, l)
                    })
                }

                function tv(e, i, o) {
                    var u = !0,
                        l = !0;
                    if (typeof e != "function") throw new wr(f);
                    return ct(o) && (u = "leading" in o ? !!o.leading : u, l = "trailing" in o ? !!o.trailing : l), xh(e, i, {
                        leading: u,
                        maxWait: i,
                        trailing: l
                    })
                }

                function rv(e) {
                    return _h(e, 1)
                }

                function iv(e, i) {
                    return za(xa(i), e)
                }

                function nv() {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return _e(e) ? e : [e]
                }

                function sv(e) {
                    return Er(e, C)
                }

                function ov(e, i) {
                    return i = typeof i == "function" ? i : r, Er(e, C, i)
                }

                function av(e) {
                    return Er(e, R | C)
                }

                function cv(e, i) {
                    return i = typeof i == "function" ? i : r, Er(e, R | C, i)
                }

                function uv(e, i) {
                    return i == null || fu(e, i, Mt(i))
                }

                function $r(e, i) {
                    return e === i || e !== e && i !== i
                }
                var hv = Ws(fa),
                    lv = Ws(function(e, i) {
                        return e >= i
                    }),
                    Mi = mu(function() {
                        return arguments
                    }()) ? mu : function(e) {
                        return vt(e) && ze.call(e, "callee") && !nu.call(e, "callee")
                    },
                    _e = N.isArray,
                    fv = Qt ? fr(Qt) : wd;

                function sr(e) {
                    return e != null && io(e.length) && !ei(e)
                }

                function bt(e) {
                    return vt(e) && sr(e)
                }

                function pv(e) {
                    return e === !0 || e === !1 || vt(e) && Yt(e) == F
                }
                var wi = Op || Ya,
                    dv = Ar ? fr(Ar) : bd;

                function gv(e) {
                    return vt(e) && e.nodeType === 1 && !jn(e)
                }

                function yv(e) {
                    if (e == null) return !0;
                    if (sr(e) && (_e(e) || typeof e == "string" || typeof e.splice == "function" || wi(e) || ln(e) || Mi(e))) return !e.length;
                    var i = Vt(e);
                    if (i == be || i == je) return !e.size;
                    if (Fn(e)) return !ga(e).length;
                    for (var o in e)
                        if (ze.call(e, o)) return !1;
                    return !0
                }

                function vv(e, i) {
                    return $n(e, i)
                }

                function mv(e, i, o) {
                    o = typeof o == "function" ? o : r;
                    var u = o ? o(e, i) : r;
                    return u === r ? $n(e, i, r, o) : !!u
                }

                function Ua(e) {
                    if (!vt(e)) return !1;
                    var i = Yt(e);
                    return i == I || i == h || typeof e.message == "string" && typeof e.name == "string" && !jn(e)
                }

                function _v(e) {
                    return typeof e == "number" && ou(e)
                }

                function ei(e) {
                    if (!ct(e)) return !1;
                    var i = Yt(e);
                    return i == te || i == pe || i == L || i == mt
                }

                function Sh(e) {
                    return typeof e == "number" && e == we(e)
                }

                function io(e) {
                    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= K
                }

                function ct(e) {
                    var i = typeof e;
                    return e != null && (i == "object" || i == "function")
                }

                function vt(e) {
                    return e != null && typeof e == "object"
                }
                var Oh = mr ? fr(mr) : Id;

                function wv(e, i) {
                    return e === i || da(e, i, Ca(i))
                }

                function bv(e, i, o) {
                    return o = typeof o == "function" ? o : r, da(e, i, Ca(i), o)
                }

                function Ev(e) {
                    return Rh(e) && e != +e
                }

                function Iv(e) {
                    if (og(e)) throw new ye(c);
                    return _u(e)
                }

                function xv(e) {
                    return e === null
                }

                function Pv(e) {
                    return e == null
                }

                function Rh(e) {
                    return typeof e == "number" || vt(e) && Yt(e) == Ne
                }

                function jn(e) {
                    if (!vt(e) || Yt(e) != Re) return !1;
                    var i = Ts(e);
                    if (i === null) return !0;
                    var o = ze.call(i, "constructor") && i.constructor;
                    return typeof o == "function" && o instanceof o && Ss.call(o) == bp
                }
                var Ha = zr ? fr(zr) : xd;

                function Sv(e) {
                    return Sh(e) && e >= -K && e <= K
                }
                var Ah = En ? fr(En) : Pd;

                function no(e) {
                    return typeof e == "string" || !_e(e) && vt(e) && Yt(e) == Qe
                }

                function dr(e) {
                    return typeof e == "symbol" || vt(e) && Yt(e) == Ye
                }
                var ln = Ci ? fr(Ci) : Sd;

                function Ov(e) {
                    return e === r
                }

                function Rv(e) {
                    return vt(e) && Vt(e) == Ue
                }

                function Av(e) {
                    return vt(e) && Yt(e) == Xe
                }
                var Tv = Ws(ya),
                    Cv = Ws(function(e, i) {
                        return e <= i
                    });

                function Th(e) {
                    if (!e) return [];
                    if (sr(e)) return no(e) ? Tr(e) : nr(e);
                    if (xn && e[xn]) return up(e[xn]());
                    var i = Vt(e),
                        o = i == be ? ia : i == je ? Is : fn;
                    return o(e)
                }

                function ti(e) {
                    if (!e) return e === 0 ? e : 0;
                    if (e = Pr(e), e === oe || e === -oe) {
                        var i = e < 0 ? -1 : 1;
                        return i * G
                    }
                    return e === e ? e : 0
                }

                function we(e) {
                    var i = ti(e),
                        o = i % 1;
                    return i === i ? o ? i - o : i : 0
                }

                function Ch(e) {
                    return e ? Fi(we(e), 0, W) : 0
                }

                function Pr(e) {
                    if (typeof e == "number") return e;
                    if (dr(e)) return k;
                    if (ct(e)) {
                        var i = typeof e.valueOf == "function" ? e.valueOf() : e;
                        e = ct(i) ? i + "" : i
                    }
                    if (typeof e != "string") return e === 0 ? e : +e;
                    e = Qc(e);
                    var o = $o.test(e);
                    return o || Do.test(e) ? me(e.slice(2), o ? 2 : 8) : Co.test(e) ? k : +e
                }

                function $h(e) {
                    return Hr(e, or(e))
                }

                function $v(e) {
                    return e ? Fi(we(e), -K, K) : e === 0 ? e : 0
                }

                function qe(e) {
                    return e == null ? "" : pr(e)
                }
                var Nv = cn(function(e, i) {
                        if (Fn(i) || sr(i)) {
                            Hr(i, Mt(i), e);
                            return
                        }
                        for (var o in i) ze.call(i, o) && An(e, o, i[o])
                    }),
                    Nh = cn(function(e, i) {
                        Hr(i, or(i), e)
                    }),
                    so = cn(function(e, i, o, u) {
                        Hr(i, or(i), e, u)
                    }),
                    Dv = cn(function(e, i, o, u) {
                        Hr(i, Mt(i), e, u)
                    }),
                    Fv = Xr(ua);

                function Lv(e, i) {
                    var o = an(e);
                    return i == null ? o : lu(o, i)
                }
                var jv = Pe(function(e, i) {
                        e = We(e);
                        var o = -1,
                            u = i.length,
                            l = u > 2 ? i[2] : r;
                        for (l && Xt(i[0], i[1], l) && (u = 1); ++o < u;)
                            for (var y = i[o], _ = or(y), E = -1, O = _.length; ++E < O;) {
                                var M = _[E],
                                    z = e[M];
                                (z === r || $r(z, nn[M]) && !ze.call(e, M)) && (e[M] = y[M])
                            }
                        return e
                    }),
                    qv = Pe(function(e) {
                        return e.push(r, Qu), qt(Dh, r, e)
                    });

                function Mv(e, i) {
                    return Vc(e, se(i, 3), Ur)
                }

                function zv(e, i) {
                    return Vc(e, se(i, 3), la)
                }

                function Uv(e, i) {
                    return e == null ? e : ha(e, se(i, 3), or)
                }

                function Hv(e, i) {
                    return e == null ? e : yu(e, se(i, 3), or)
                }

                function Bv(e, i) {
                    return e && Ur(e, se(i, 3))
                }

                function kv(e, i) {
                    return e && la(e, se(i, 3))
                }

                function Kv(e) {
                    return e == null ? [] : zs(e, Mt(e))
                }

                function Vv(e) {
                    return e == null ? [] : zs(e, or(e))
                }

                function Ba(e, i, o) {
                    var u = e == null ? r : Li(e, i);
                    return u === r ? o : u
                }

                function Gv(e, i) {
                    return e != null && Zu(e, i, yd)
                }

                function ka(e, i) {
                    return e != null && Zu(e, i, vd)
                }
                var Wv = Ku(function(e, i, o) {
                        i != null && typeof i.toString != "function" && (i = Os.call(i)), e[i] = o
                    }, Va(ar)),
                    Jv = Ku(function(e, i, o) {
                        i != null && typeof i.toString != "function" && (i = Os.call(i)), ze.call(e, i) ? e[i].push(o) : e[i] = [o]
                    }, se),
                    Qv = Pe(Cn);

                function Mt(e) {
                    return sr(e) ? uu(e) : ga(e)
                }

                function or(e) {
                    return sr(e) ? uu(e, !0) : Od(e)
                }

                function Yv(e, i) {
                    var o = {};
                    return i = se(i, 3), Ur(e, function(u, l, y) {
                        Qr(o, i(u, l, y), u)
                    }), o
                }

                function Xv(e, i) {
                    var o = {};
                    return i = se(i, 3), Ur(e, function(u, l, y) {
                        Qr(o, l, i(u, l, y))
                    }), o
                }
                var Zv = cn(function(e, i, o) {
                        Us(e, i, o)
                    }),
                    Dh = cn(function(e, i, o, u) {
                        Us(e, i, o, u)
                    }),
                    e0 = Xr(function(e, i) {
                        var o = {};
                        if (e == null) return o;
                        var u = !1;
                        i = it(i, function(y) {
                            return y = mi(y, e), u || (u = y.length > 1), y
                        }), Hr(e, Aa(e), o), u && (o = Er(o, R | x | C, Wd));
                        for (var l = i.length; l--;) ba(o, i[l]);
                        return o
                    });

                function t0(e, i) {
                    return Fh(e, ro(se(i)))
                }
                var r0 = Xr(function(e, i) {
                    return e == null ? {} : Ad(e, i)
                });

                function Fh(e, i) {
                    if (e == null) return {};
                    var o = it(Aa(e), function(u) {
                        return [u]
                    });
                    return i = se(i), Su(e, o, function(u, l) {
                        return i(u, l[0])
                    })
                }

                function i0(e, i, o) {
                    i = mi(i, e);
                    var u = -1,
                        l = i.length;
                    for (l || (l = 1, e = r); ++u < l;) {
                        var y = e == null ? r : e[Br(i[u])];
                        y === r && (u = l, y = o), e = ei(y) ? y.call(e) : y
                    }
                    return e
                }

                function n0(e, i, o) {
                    return e == null ? e : Nn(e, i, o)
                }

                function s0(e, i, o, u) {
                    return u = typeof u == "function" ? u : r, e == null ? e : Nn(e, i, o, u)
                }
                var Lh = Wu(Mt),
                    jh = Wu(or);

                function o0(e, i, o) {
                    var u = _e(e),
                        l = u || wi(e) || ln(e);
                    if (i = se(i, 4), o == null) {
                        var y = e && e.constructor;
                        l ? o = u ? new y : [] : ct(e) ? o = ei(y) ? an(Ts(e)) : {} : o = {}
                    }
                    return (l ? _r : Ur)(e, function(_, E, O) {
                        return i(o, _, E, O)
                    }), o
                }

                function a0(e, i) {
                    return e == null ? !0 : ba(e, i)
                }

                function c0(e, i, o) {
                    return e == null ? e : Cu(e, i, xa(o))
                }

                function u0(e, i, o, u) {
                    return u = typeof u == "function" ? u : r, e == null ? e : Cu(e, i, xa(o), u)
                }

                function fn(e) {
                    return e == null ? [] : ra(e, Mt(e))
                }

                function h0(e) {
                    return e == null ? [] : ra(e, or(e))
                }

                function l0(e, i, o) {
                    return o === r && (o = i, i = r), o !== r && (o = Pr(o), o = o === o ? o : 0), i !== r && (i = Pr(i), i = i === i ? i : 0), Fi(Pr(e), i, o)
                }

                function f0(e, i, o) {
                    return i = ti(i), o === r ? (o = i, i = 0) : o = ti(o), e = Pr(e), md(e, i, o)
                }

                function p0(e, i, o) {
                    if (o && typeof o != "boolean" && Xt(e, i, o) && (i = o = r), o === r && (typeof i == "boolean" ? (o = i, i = r) : typeof e == "boolean" && (o = e, e = r)), e === r && i === r ? (e = 0, i = 1) : (e = ti(e), i === r ? (i = e, e = 0) : i = ti(i)), e > i) {
                        var u = e;
                        e = i, i = u
                    }
                    if (o || e % 1 || i % 1) {
                        var l = au();
                        return Kt(e + l * (i - e + Ve("1e-" + ((l + "").length - 1))), i)
                    }
                    return ma(e, i)
                }
                var d0 = un(function(e, i, o) {
                    return i = i.toLowerCase(), e + (o ? qh(i) : i)
                });

                function qh(e) {
                    return Ka(qe(e).toLowerCase())
                }

                function Mh(e) {
                    return e = qe(e), e && e.replace(Vr, np).replace(Go, "")
                }

                function g0(e, i, o) {
                    e = qe(e), i = pr(i);
                    var u = e.length;
                    o = o === r ? u : Fi(we(o), 0, u);
                    var l = o;
                    return o -= i.length, o >= 0 && e.slice(o, l) == i
                }

                function y0(e) {
                    return e = qe(e), e && tt.test(e) ? e.replace(Si, sp) : e
                }

                function v0(e) {
                    return e = qe(e), e && Rt.test(e) ? e.replace(dt, "\\$&") : e
                }
                var m0 = un(function(e, i, o) {
                        return e + (o ? "-" : "") + i.toLowerCase()
                    }),
                    _0 = un(function(e, i, o) {
                        return e + (o ? " " : "") + i.toLowerCase()
                    }),
                    w0 = Hu("toLowerCase");

                function b0(e, i, o) {
                    e = qe(e), i = we(i);
                    var u = i ? tn(e) : 0;
                    if (!i || u >= i) return e;
                    var l = (i - u) / 2;
                    return Gs(Ds(l), o) + e + Gs(Ns(l), o)
                }

                function E0(e, i, o) {
                    e = qe(e), i = we(i);
                    var u = i ? tn(e) : 0;
                    return i && u < i ? e + Gs(i - u, o) : e
                }

                function I0(e, i, o) {
                    e = qe(e), i = we(i);
                    var u = i ? tn(e) : 0;
                    return i && u < i ? Gs(i - u, o) + e : e
                }

                function x0(e, i, o) {
                    return o || i == null ? i = 0 : i && (i = +i), Cp(qe(e).replace(gt, ""), i || 0)
                }

                function P0(e, i, o) {
                    return (o ? Xt(e, i, o) : i === r) ? i = 1 : i = we(i), _a(qe(e), i)
                }

                function S0() {
                    var e = arguments,
                        i = qe(e[0]);
                    return e.length < 3 ? i : i.replace(e[1], e[2])
                }
                var O0 = un(function(e, i, o) {
                    return e + (o ? "_" : "") + i.toLowerCase()
                });

                function R0(e, i, o) {
                    return o && typeof o != "number" && Xt(e, i, o) && (i = o = r), o = o === r ? W : o >>> 0, o ? (e = qe(e), e && (typeof i == "string" || i != null && !Ha(i)) && (i = pr(i), !i && en(e)) ? _i(Tr(e), 0, o) : e.split(i, o)) : []
                }
                var A0 = un(function(e, i, o) {
                    return e + (o ? " " : "") + Ka(i)
                });

                function T0(e, i, o) {
                    return e = qe(e), o = o == null ? 0 : Fi(we(o), 0, e.length), i = pr(i), e.slice(o, o + i.length) == i
                }

                function C0(e, i, o) {
                    var u = d.templateSettings;
                    o && Xt(e, i, o) && (i = r), e = qe(e), i = so({}, i, u, Ju);
                    var l = so({}, i.imports, u.imports, Ju),
                        y = Mt(l),
                        _ = ra(l, y),
                        E, O, M = 0,
                        z = i.interpolate || Vi,
                        B = "__p += '",
                        J = na((i.escape || Vi).source + "|" + z.source + "|" + (z === at ? To : Vi).source + "|" + (i.evaluate || Vi).source + "|$", "g"),
                        re = "//# sourceURL=" + (ze.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Wo + "]") + `
`;
                    e.replace(J, function(ce, Se, Ce, gr, Zt, yr) {
                        return Ce || (Ce = gr), B += e.slice(M, yr).replace(Lo, op), Se && (E = !0, B += `' +
__e(` + Se + `) +
'`), Zt && (O = !0, B += `';
` + Zt + `;
__p += '`), Ce && (B += `' +
((__t = (` + Ce + `)) == null ? '' : __t) +
'`), M = yr + ce.length, ce
                    }), B += `';
`;
                    var ae = ze.call(i, "variable") && i.variable;
                    if (!ae) B = `with (obj) {
` + B + `
}
`;
                    else if (Ro.test(ae)) throw new ye(g);
                    B = (O ? B.replace(qr, "") : B).replace(Jt, "$1").replace(Kr, "$1;"), B = "function(" + (ae || "obj") + `) {
` + (ae ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (E ? ", __e = _.escape" : "") + (O ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + B + `return __p
}`;
                    var Ee = Uh(function() {
                        return Le(y, re + "return " + B).apply(r, _)
                    });
                    if (Ee.source = B, Ua(Ee)) throw Ee;
                    return Ee
                }

                function $0(e) {
                    return qe(e).toLowerCase()
                }

                function N0(e) {
                    return qe(e).toUpperCase()
                }

                function D0(e, i, o) {
                    if (e = qe(e), e && (o || i === r)) return Qc(e);
                    if (!e || !(i = pr(i))) return e;
                    var u = Tr(e),
                        l = Tr(i),
                        y = Yc(u, l),
                        _ = Xc(u, l) + 1;
                    return _i(u, y, _).join("")
                }

                function F0(e, i, o) {
                    if (e = qe(e), e && (o || i === r)) return e.slice(0, eu(e) + 1);
                    if (!e || !(i = pr(i))) return e;
                    var u = Tr(e),
                        l = Xc(u, Tr(i)) + 1;
                    return _i(u, 0, l).join("")
                }

                function L0(e, i, o) {
                    if (e = qe(e), e && (o || i === r)) return e.replace(gt, "");
                    if (!e || !(i = pr(i))) return e;
                    var u = Tr(e),
                        l = Yc(u, Tr(i));
                    return _i(u, l).join("")
                }

                function j0(e, i) {
                    var o = Z,
                        u = Ie;
                    if (ct(i)) {
                        var l = "separator" in i ? i.separator : l;
                        o = "length" in i ? we(i.length) : o, u = "omission" in i ? pr(i.omission) : u
                    }
                    e = qe(e);
                    var y = e.length;
                    if (en(e)) {
                        var _ = Tr(e);
                        y = _.length
                    }
                    if (o >= y) return e;
                    var E = o - tn(u);
                    if (E < 1) return u;
                    var O = _ ? _i(_, 0, E).join("") : e.slice(0, E);
                    if (l === r) return O + u;
                    if (_ && (E += O.length - E), Ha(l)) {
                        if (e.slice(E).search(l)) {
                            var M, z = O;
                            for (l.global || (l = na(l.source, qe(vr.exec(l)) + "g")), l.lastIndex = 0; M = l.exec(z);) var B = M.index;
                            O = O.slice(0, B === r ? E : B)
                        }
                    } else if (e.indexOf(pr(l), E) != E) {
                        var J = O.lastIndexOf(l);
                        J > -1 && (O = O.slice(0, J))
                    }
                    return O + u
                }

                function q0(e) {
                    return e = qe(e), e && lt.test(e) ? e.replace(hi, pp) : e
                }
                var M0 = un(function(e, i, o) {
                        return e + (o ? " " : "") + i.toUpperCase()
                    }),
                    Ka = Hu("toUpperCase");

                function zh(e, i, o) {
                    return e = qe(e), i = o ? r : i, i === r ? cp(e) ? yp(e) : Zf(e) : e.match(i) || []
                }
                var Uh = Pe(function(e, i) {
                        try {
                            return qt(e, r, i)
                        } catch (o) {
                            return Ua(o) ? o : new ye(o)
                        }
                    }),
                    z0 = Xr(function(e, i) {
                        return _r(i, function(o) {
                            o = Br(o), Qr(e, o, Ma(e[o], e))
                        }), e
                    });

                function U0(e) {
                    var i = e == null ? 0 : e.length,
                        o = se();
                    return e = i ? it(e, function(u) {
                        if (typeof u[1] != "function") throw new wr(f);
                        return [o(u[0]), u[1]]
                    }) : [], Pe(function(u) {
                        for (var l = -1; ++l < i;) {
                            var y = e[l];
                            if (qt(y[0], this, u)) return qt(y[1], this, u)
                        }
                    })
                }

                function H0(e) {
                    return pd(Er(e, R))
                }

                function Va(e) {
                    return function() {
                        return e
                    }
                }

                function B0(e, i) {
                    return e == null || e !== e ? i : e
                }
                var k0 = ku(),
                    K0 = ku(!0);

                function ar(e) {
                    return e
                }

                function Ga(e) {
                    return wu(typeof e == "function" ? e : Er(e, R))
                }

                function V0(e) {
                    return Eu(Er(e, R))
                }

                function G0(e, i) {
                    return Iu(e, Er(i, R))
                }
                var W0 = Pe(function(e, i) {
                        return function(o) {
                            return Cn(o, e, i)
                        }
                    }),
                    J0 = Pe(function(e, i) {
                        return function(o) {
                            return Cn(e, o, i)
                        }
                    });

                function Wa(e, i, o) {
                    var u = Mt(i),
                        l = zs(i, u);
                    o == null && !(ct(i) && (l.length || !u.length)) && (o = i, i = e, e = this, l = zs(i, Mt(i)));
                    var y = !(ct(o) && "chain" in o) || !!o.chain,
                        _ = ei(e);
                    return _r(l, function(E) {
                        var O = i[E];
                        e[E] = O, _ && (e.prototype[E] = function() {
                            var M = this.__chain__;
                            if (y || M) {
                                var z = e(this.__wrapped__),
                                    B = z.__actions__ = nr(this.__actions__);
                                return B.push({
                                    func: O,
                                    args: arguments,
                                    thisArg: e
                                }), z.__chain__ = M, z
                            }
                            return O.apply(e, pi([this.value()], arguments))
                        })
                    }), e
                }

                function Q0() {
                    return Te._ === this && (Te._ = Ep), this
                }

                function Ja() {}

                function Y0(e) {
                    return e = we(e), Pe(function(i) {
                        return xu(i, e)
                    })
                }
                var X0 = Sa(it),
                    Z0 = Sa(Kc),
                    em = Sa(Yo);

                function Hh(e) {
                    return Na(e) ? Xo(Br(e)) : Td(e)
                }

                function tm(e) {
                    return function(i) {
                        return e == null ? r : Li(e, i)
                    }
                }
                var rm = Vu(),
                    im = Vu(!0);

                function Qa() {
                    return []
                }

                function Ya() {
                    return !1
                }

                function nm() {
                    return {}
                }

                function sm() {
                    return ""
                }

                function om() {
                    return !0
                }

                function am(e, i) {
                    if (e = we(e), e < 1 || e > K) return [];
                    var o = W,
                        u = Kt(e, W);
                    i = se(i), e -= W;
                    for (var l = ta(u, i); ++o < e;) i(o);
                    return l
                }

                function cm(e) {
                    return _e(e) ? it(e, Br) : dr(e) ? [e] : nr(ch(qe(e)))
                }

                function um(e) {
                    var i = ++wp;
                    return qe(e) + i
                }
                var hm = Vs(function(e, i) {
                        return e + i
                    }, 0),
                    lm = Oa("ceil"),
                    fm = Vs(function(e, i) {
                        return e / i
                    }, 1),
                    pm = Oa("floor");

                function dm(e) {
                    return e && e.length ? Ms(e, ar, fa) : r
                }

                function gm(e, i) {
                    return e && e.length ? Ms(e, se(i, 2), fa) : r
                }

                function ym(e) {
                    return Wc(e, ar)
                }

                function vm(e, i) {
                    return Wc(e, se(i, 2))
                }

                function mm(e) {
                    return e && e.length ? Ms(e, ar, ya) : r
                }

                function _m(e, i) {
                    return e && e.length ? Ms(e, se(i, 2), ya) : r
                }
                var wm = Vs(function(e, i) {
                        return e * i
                    }, 1),
                    bm = Oa("round"),
                    Em = Vs(function(e, i) {
                        return e - i
                    }, 0);

                function Im(e) {
                    return e && e.length ? ea(e, ar) : 0
                }

                function xm(e, i) {
                    return e && e.length ? ea(e, se(i, 2)) : 0
                }
                return d.after = Vy, d.ary = _h, d.assign = Nv, d.assignIn = Nh, d.assignInWith = so, d.assignWith = Dv, d.at = Fv, d.before = wh, d.bind = Ma, d.bindAll = z0, d.bindKey = bh, d.castArray = nv, d.chain = yh, d.chunk = pg, d.compact = dg, d.concat = gg, d.cond = U0, d.conforms = H0, d.constant = Va, d.countBy = Iy, d.create = Lv, d.curry = Eh, d.curryRight = Ih, d.debounce = xh, d.defaults = jv, d.defaultsDeep = qv, d.defer = Gy, d.delay = Wy, d.difference = yg, d.differenceBy = vg, d.differenceWith = mg, d.drop = _g, d.dropRight = wg, d.dropRightWhile = bg, d.dropWhile = Eg, d.fill = Ig, d.filter = Py, d.flatMap = Ry, d.flatMapDeep = Ay, d.flatMapDepth = Ty, d.flatten = fh, d.flattenDeep = xg, d.flattenDepth = Pg, d.flip = Jy, d.flow = k0, d.flowRight = K0, d.fromPairs = Sg, d.functions = Kv, d.functionsIn = Vv, d.groupBy = Cy, d.initial = Rg, d.intersection = Ag, d.intersectionBy = Tg, d.intersectionWith = Cg, d.invert = Wv, d.invertBy = Jv, d.invokeMap = Ny, d.iteratee = Ga, d.keyBy = Dy, d.keys = Mt, d.keysIn = or, d.map = Zs, d.mapKeys = Yv, d.mapValues = Xv, d.matches = V0, d.matchesProperty = G0, d.memoize = to, d.merge = Zv, d.mergeWith = Dh, d.method = W0, d.methodOf = J0, d.mixin = Wa, d.negate = ro, d.nthArg = Y0, d.omit = e0, d.omitBy = t0, d.once = Qy, d.orderBy = Fy, d.over = X0, d.overArgs = Yy, d.overEvery = Z0, d.overSome = em, d.partial = za, d.partialRight = Ph, d.partition = Ly, d.pick = r0, d.pickBy = Fh, d.property = Hh, d.propertyOf = tm, d.pull = Fg, d.pullAll = dh, d.pullAllBy = Lg, d.pullAllWith = jg, d.pullAt = qg, d.range = rm, d.rangeRight = im, d.rearg = Xy, d.reject = My, d.remove = Mg, d.rest = Zy, d.reverse = ja, d.sampleSize = Uy, d.set = n0, d.setWith = s0, d.shuffle = Hy, d.slice = zg, d.sortBy = Ky, d.sortedUniq = Gg, d.sortedUniqBy = Wg, d.split = R0, d.spread = ev, d.tail = Jg, d.take = Qg, d.takeRight = Yg, d.takeRightWhile = Xg, d.takeWhile = Zg, d.tap = dy, d.throttle = tv, d.thru = Xs, d.toArray = Th, d.toPairs = Lh, d.toPairsIn = jh, d.toPath = cm, d.toPlainObject = $h, d.transform = o0, d.unary = rv, d.union = ey, d.unionBy = ty, d.unionWith = ry, d.uniq = iy, d.uniqBy = ny, d.uniqWith = sy, d.unset = a0, d.unzip = qa, d.unzipWith = gh, d.update = c0, d.updateWith = u0, d.values = fn, d.valuesIn = h0, d.without = oy, d.words = zh, d.wrap = iv, d.xor = ay, d.xorBy = cy, d.xorWith = uy, d.zip = hy, d.zipObject = ly, d.zipObjectDeep = fy, d.zipWith = py, d.entries = Lh, d.entriesIn = jh, d.extend = Nh, d.extendWith = so, Wa(d, d), d.add = hm, d.attempt = Uh, d.camelCase = d0, d.capitalize = qh, d.ceil = lm, d.clamp = l0, d.clone = sv, d.cloneDeep = av, d.cloneDeepWith = cv, d.cloneWith = ov, d.conformsTo = uv, d.deburr = Mh, d.defaultTo = B0, d.divide = fm, d.endsWith = g0, d.eq = $r, d.escape = y0, d.escapeRegExp = v0, d.every = xy, d.find = Sy, d.findIndex = hh, d.findKey = Mv, d.findLast = Oy, d.findLastIndex = lh, d.findLastKey = zv, d.floor = pm, d.forEach = vh, d.forEachRight = mh, d.forIn = Uv, d.forInRight = Hv, d.forOwn = Bv, d.forOwnRight = kv, d.get = Ba, d.gt = hv, d.gte = lv, d.has = Gv, d.hasIn = ka, d.head = ph, d.identity = ar, d.includes = $y, d.indexOf = Og, d.inRange = f0, d.invoke = Qv, d.isArguments = Mi, d.isArray = _e, d.isArrayBuffer = fv, d.isArrayLike = sr, d.isArrayLikeObject = bt, d.isBoolean = pv, d.isBuffer = wi, d.isDate = dv, d.isElement = gv, d.isEmpty = yv, d.isEqual = vv, d.isEqualWith = mv, d.isError = Ua, d.isFinite = _v, d.isFunction = ei, d.isInteger = Sh, d.isLength = io, d.isMap = Oh, d.isMatch = wv, d.isMatchWith = bv, d.isNaN = Ev, d.isNative = Iv, d.isNil = Pv, d.isNull = xv, d.isNumber = Rh, d.isObject = ct, d.isObjectLike = vt, d.isPlainObject = jn, d.isRegExp = Ha, d.isSafeInteger = Sv, d.isSet = Ah, d.isString = no, d.isSymbol = dr, d.isTypedArray = ln, d.isUndefined = Ov, d.isWeakMap = Rv, d.isWeakSet = Av, d.join = $g, d.kebabCase = m0, d.last = xr, d.lastIndexOf = Ng, d.lowerCase = _0, d.lowerFirst = w0, d.lt = Tv, d.lte = Cv, d.max = dm, d.maxBy = gm, d.mean = ym, d.meanBy = vm, d.min = mm, d.minBy = _m, d.stubArray = Qa, d.stubFalse = Ya, d.stubObject = nm, d.stubString = sm, d.stubTrue = om, d.multiply = wm, d.nth = Dg, d.noConflict = Q0, d.noop = Ja, d.now = eo, d.pad = b0, d.padEnd = E0, d.padStart = I0, d.parseInt = x0, d.random = p0, d.reduce = jy, d.reduceRight = qy, d.repeat = P0, d.replace = S0, d.result = i0, d.round = bm, d.runInContext = S, d.sample = zy, d.size = By, d.snakeCase = O0, d.some = ky, d.sortedIndex = Ug, d.sortedIndexBy = Hg, d.sortedIndexOf = Bg, d.sortedLastIndex = kg, d.sortedLastIndexBy = Kg, d.sortedLastIndexOf = Vg, d.startCase = A0, d.startsWith = T0, d.subtract = Em, d.sum = Im, d.sumBy = xm, d.template = C0, d.times = am, d.toFinite = ti, d.toInteger = we, d.toLength = Ch, d.toLower = $0, d.toNumber = Pr, d.toSafeInteger = $v, d.toString = qe, d.toUpper = N0, d.trim = D0, d.trimEnd = F0, d.trimStart = L0, d.truncate = j0, d.unescape = q0, d.uniqueId = um, d.upperCase = M0, d.upperFirst = Ka, d.each = vh, d.eachRight = mh, d.first = ph, Wa(d, function() {
                    var e = {};
                    return Ur(d, function(i, o) {
                        ze.call(d.prototype, o) || (e[o] = i)
                    }), e
                }(), {
                    chain: !1
                }), d.VERSION = n, _r(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                    d[e].placeholder = d
                }), _r(["drop", "take"], function(e, i) {
                    Ae.prototype[e] = function(o) {
                        o = o === r ? 1 : Lt(we(o), 0);
                        var u = this.__filtered__ && !i ? new Ae(this) : this.clone();
                        return u.__filtered__ ? u.__takeCount__ = Kt(o, u.__takeCount__) : u.__views__.push({
                            size: Kt(o, W),
                            type: e + (u.__dir__ < 0 ? "Right" : "")
                        }), u
                    }, Ae.prototype[e + "Right"] = function(o) {
                        return this.reverse()[e](o).reverse()
                    }
                }), _r(["filter", "map", "takeWhile"], function(e, i) {
                    var o = i + 1,
                        u = o == b || o == ge;
                    Ae.prototype[e] = function(l) {
                        var y = this.clone();
                        return y.__iteratees__.push({
                            iteratee: se(l, 3),
                            type: o
                        }), y.__filtered__ = y.__filtered__ || u, y
                    }
                }), _r(["head", "last"], function(e, i) {
                    var o = "take" + (i ? "Right" : "");
                    Ae.prototype[e] = function() {
                        return this[o](1).value()[0]
                    }
                }), _r(["initial", "tail"], function(e, i) {
                    var o = "drop" + (i ? "" : "Right");
                    Ae.prototype[e] = function() {
                        return this.__filtered__ ? new Ae(this) : this[o](1)
                    }
                }), Ae.prototype.compact = function() {
                    return this.filter(ar)
                }, Ae.prototype.find = function(e) {
                    return this.filter(e).head()
                }, Ae.prototype.findLast = function(e) {
                    return this.reverse().find(e)
                }, Ae.prototype.invokeMap = Pe(function(e, i) {
                    return typeof e == "function" ? new Ae(this) : this.map(function(o) {
                        return Cn(o, e, i)
                    })
                }), Ae.prototype.reject = function(e) {
                    return this.filter(ro(se(e)))
                }, Ae.prototype.slice = function(e, i) {
                    e = we(e);
                    var o = this;
                    return o.__filtered__ && (e > 0 || i < 0) ? new Ae(o) : (e < 0 ? o = o.takeRight(-e) : e && (o = o.drop(e)), i !== r && (i = we(i), o = i < 0 ? o.dropRight(-i) : o.take(i - e)), o)
                }, Ae.prototype.takeRightWhile = function(e) {
                    return this.reverse().takeWhile(e).reverse()
                }, Ae.prototype.toArray = function() {
                    return this.take(W)
                }, Ur(Ae.prototype, function(e, i) {
                    var o = /^(?:filter|find|map|reject)|While$/.test(i),
                        u = /^(?:head|last)$/.test(i),
                        l = d[u ? "take" + (i == "last" ? "Right" : "") : i],
                        y = u || /^find/.test(i);
                    l && (d.prototype[i] = function() {
                        var _ = this.__wrapped__,
                            E = u ? [1] : arguments,
                            O = _ instanceof Ae,
                            M = E[0],
                            z = O || _e(_),
                            B = function(Se) {
                                var Ce = l.apply(d, pi([Se], E));
                                return u && J ? Ce[0] : Ce
                            };
                        z && o && typeof M == "function" && M.length != 1 && (O = z = !1);
                        var J = this.__chain__,
                            re = !!this.__actions__.length,
                            ae = y && !J,
                            Ee = O && !re;
                        if (!y && z) {
                            _ = Ee ? _ : new Ae(this);
                            var ce = e.apply(_, E);
                            return ce.__actions__.push({
                                func: Xs,
                                args: [B],
                                thisArg: r
                            }), new br(ce, J)
                        }
                        return ae && Ee ? e.apply(this, E) : (ce = this.thru(B), ae ? u ? ce.value()[0] : ce.value() : ce)
                    })
                }), _r(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                    var i = xs[e],
                        o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        u = /^(?:pop|shift)$/.test(e);
                    d.prototype[e] = function() {
                        var l = arguments;
                        if (u && !this.__chain__) {
                            var y = this.value();
                            return i.apply(_e(y) ? y : [], l)
                        }
                        return this[o](function(_) {
                            return i.apply(_e(_) ? _ : [], l)
                        })
                    }
                }), Ur(Ae.prototype, function(e, i) {
                    var o = d[i];
                    if (o) {
                        var u = o.name + "";
                        ze.call(on, u) || (on[u] = []), on[u].push({
                            name: i,
                            func: o
                        })
                    }
                }), on[Ks(r, he).name] = [{
                    name: "wrapper",
                    func: r
                }], Ae.prototype.clone = qp, Ae.prototype.reverse = Mp, Ae.prototype.value = zp, d.prototype.at = gy, d.prototype.chain = yy, d.prototype.commit = vy, d.prototype.next = my, d.prototype.plant = wy, d.prototype.reverse = by, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = Ey, d.prototype.first = d.prototype.head, xn && (d.prototype[xn] = _y), d
            },
            rn = vp();
        wt ? ((wt.exports = rn)._ = rn, Ge._ = rn) : Te._ = rn
    }).call(kn)
})(Tc, Tc.exports);
var GI = Object.defineProperty,
    WI = Object.defineProperties,
    JI = Object.getOwnPropertyDescriptors,
    kl = Object.getOwnPropertySymbols,
    QI = Object.prototype.hasOwnProperty,
    YI = Object.prototype.propertyIsEnumerable,
    Kl = (a, t, r) => t in a ? GI(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    ho = (a, t) => {
        for (var r in t || (t = {})) QI.call(t, r) && Kl(a, r, t[r]);
        if (kl)
            for (var r of kl(t)) YI.call(t, r) && Kl(a, r, t[r]);
        return a
    },
    XI = (a, t) => WI(a, JI(t));

function xi(a, t, r) {
    var n;
    const s = u1(a);
    return ((n = t.rpcMap) == null ? void 0 : n[s.reference]) || `${VI}?chainId=${s.namespace}:${s.reference}&projectId=${r}`
}

function Ki(a) {
    return a.includes(":") ? a.split(":")[1] : a
}

function Vf(a) {
    return a.map(t => `${t.split(":")[0]}:${t.split(":")[1]}`)
}

function ZI(a, t) {
    const r = Object.keys(t.namespaces).filter(s => s.includes(a));
    if (!r.length) return [];
    const n = [];
    return r.forEach(s => {
        const c = t.namespaces[s].accounts;
        n.push(...c)
    }), n
}

function ex(a = {}, t = {}) {
    const r = Vl(a),
        n = Vl(t);
    return Tc.exports.merge(r, n)
}

function Vl(a) {
    var t, r, n, s;
    const c = {};
    if (!po(a)) return c;
    for (const [f, g] of Object.entries(a)) {
        const m = af(f) ? [f] : g.chains,
            p = g.methods || [],
            w = g.events || [],
            R = g.rpcMap || {},
            x = Kn(f);
        c[x] = XI(ho(ho({}, c[x]), g), {
            chains: Za(m, (t = c[x]) == null ? void 0 : t.chains),
            methods: Za(p, (r = c[x]) == null ? void 0 : r.methods),
            events: Za(w, (n = c[x]) == null ? void 0 : n.events),
            rpcMap: ho(ho({}, R), (s = c[x]) == null ? void 0 : s.rpcMap)
        })
    }
    return c
}

function tx(a) {
    return a.includes(":") ? a.split(":")[2] : a
}

function rx(a) {
    const t = {};
    for (const [r, n] of Object.entries(a)) {
        const s = n.methods || [],
            c = n.events || [],
            f = n.accounts || [],
            g = af(r) ? [r] : n.chains ? n.chains : Vf(n.accounts);
        t[r] = {
            chains: g,
            methods: s,
            events: c,
            accounts: f
        }
    }
    return t
}

function lc(a) {
    return typeof a == "number" ? a : a.includes("0x") ? parseInt(a, 16) : a.includes(":") ? Number(a.split(":")[1]) : Number(a)
}
const Gf = {},
    nt = a => Gf[a],
    fc = (a, t) => {
        Gf[a] = t
    };
class ix {
    constructor(t) {
        this.name = "polkadot", this.namespace = t.namespace, this.events = nt("events"), this.client = nt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(ui.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var n;
            const s = Ki(r);
            t[s] = this.createHttpProvider(s, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || xi(t, this.namespace, this.client.core.projectId);
        if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ci(new Pi(n, nt("disableProviderPing")))
    }
}
class nx {
    constructor(t) {
        this.name = "eip155", this.namespace = t.namespace, this.events = nt("events"), this.client = nt("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
    }
    async request(t) {
        switch (t.request.method) {
            case "eth_requestAccounts":
                return this.getAccounts();
            case "eth_accounts":
                return this.getAccounts();
            case "wallet_switchEthereumChain":
                return await this.handleSwitchChain(t);
            case "eth_chainId":
                return parseInt(this.getDefaultChain())
        }
        return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(parseInt(t), r), this.chainId = parseInt(t), this.events.emit(ui.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId.toString();
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    createHttpProvider(t, r) {
        const n = r || xi(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
        if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ci(new Pi(n, nt("disableProviderPing")))
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var n;
            const s = parseInt(Ki(r));
            t[s] = this.createHttpProvider(s, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }), t
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    getHttpProvider() {
        const t = this.chainId,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    async handleSwitchChain(t) {
        var r, n;
        let s = t.request.params ? (r = t.request.params[0]) == null ? void 0 : r.chainId : "0x0";
        s = s.startsWith("0x") ? s : `0x${s}`;
        const c = parseInt(s, 16);
        if (this.isChainApproved(c)) this.setDefaultChain(`${c}`);
        else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
            topic: t.topic,
            request: {
                method: t.request.method,
                params: [{
                    chainId: s
                }]
            },
            chainId: (n = this.namespace.chains) == null ? void 0 : n[0]
        }), this.setDefaultChain(`${c}`);
        else throw new Error(`Failed to switch to chain 'eip155:${c}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
        return null
    }
    isChainApproved(t) {
        return this.namespace.chains.includes(`${this.name}:${t}`)
    }
}
class sx {
    constructor(t) {
        this.name = "solana", this.namespace = t.namespace, this.events = nt("events"), this.client = nt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(ui.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var n;
            const s = Ki(r);
            t[s] = this.createHttpProvider(s, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || xi(t, this.namespace, this.client.core.projectId);
        if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ci(new Pi(n, nt("disableProviderPing")))
    }
}
class ox {
    constructor(t) {
        this.name = "cosmos", this.namespace = t.namespace, this.events = nt("events"), this.client = nt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(ui.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var n;
            const s = Ki(r);
            t[s] = this.createHttpProvider(s, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || xi(t, this.namespace, this.client.core.projectId);
        if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ci(new Pi(n, nt("disableProviderPing")))
    }
}
class ax {
    constructor(t) {
        this.name = "cip34", this.namespace = t.namespace, this.events = nt("events"), this.client = nt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(ui.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            const n = this.getCardanoRPCUrl(r),
                s = Ki(r);
            t[s] = this.createHttpProvider(s, n)
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    getCardanoRPCUrl(t) {
        const r = this.namespace.rpcMap;
        if (r) return r[t]
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || this.getCardanoRPCUrl(t);
        if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ci(new Pi(n, nt("disableProviderPing")))
    }
}
class cx {
    constructor(t) {
        this.name = "elrond", this.namespace = t.namespace, this.events = nt("events"), this.client = nt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(ui.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var n;
            const s = Ki(r);
            t[s] = this.createHttpProvider(s, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || xi(t, this.namespace, this.client.core.projectId);
        if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ci(new Pi(n, nt("disableProviderPing")))
    }
}
class ux {
    constructor(t) {
        this.name = "multiversx", this.namespace = t.namespace, this.events = nt("events"), this.client = nt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        this.httpProviders[t] || this.setHttpProvider(t, r), this.chainId = t, this.events.emit(ui.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`)
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? [...new Set(t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]))] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var n;
            const s = Ki(r);
            t[s] = this.createHttpProvider(s, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || xi(t, this.namespace, this.client.core.projectId);
        if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
        return new ci(new Pi(n, nt("disableProviderPing")))
    }
}
class hx {
    constructor(t) {
        this.name = "near", this.namespace = t.namespace, this.events = nt("events"), this.client = nt("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
    }
    updateNamespace(t) {
        this.namespace = Object.assign(this.namespace, t)
    }
    requestAccounts() {
        return this.getAccounts()
    }
    getDefaultChain() {
        if (this.chainId) return this.chainId;
        if (this.namespace.defaultChain) return this.namespace.defaultChain;
        const t = this.namespace.chains[0];
        if (!t) throw new Error("ChainId not found");
        return t.split(":")[1]
    }
    request(t) {
        return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request)
    }
    setDefaultChain(t, r) {
        if (this.chainId = t, !this.httpProviders[t]) {
            const n = r || xi(`${this.name}:${t}`, this.namespace);
            if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
            this.setHttpProvider(t, n)
        }
        this.events.emit(ui.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
    }
    getAccounts() {
        const t = this.namespace.accounts;
        return t ? t.filter(r => r.split(":")[1] === this.chainId.toString()).map(r => r.split(":")[2]) || [] : []
    }
    createHttpProviders() {
        const t = {};
        return this.namespace.chains.forEach(r => {
            var n;
            t[r] = this.createHttpProvider(r, (n = this.namespace.rpcMap) == null ? void 0 : n[r])
        }), t
    }
    getHttpProvider() {
        const t = `${this.name}:${this.chainId}`,
            r = this.httpProviders[t];
        if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
        return r
    }
    setHttpProvider(t, r) {
        const n = this.createHttpProvider(t, r);
        n && (this.httpProviders[t] = n)
    }
    createHttpProvider(t, r) {
        const n = r || xi(t, this.namespace);
        return typeof n > "u" ? void 0 : new ci(new Pi(n, nt("disableProviderPing")))
    }
}
var lx = Object.defineProperty,
    fx = Object.defineProperties,
    px = Object.getOwnPropertyDescriptors,
    Gl = Object.getOwnPropertySymbols,
    dx = Object.prototype.hasOwnProperty,
    gx = Object.prototype.propertyIsEnumerable,
    Wl = (a, t, r) => t in a ? lx(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    lo = (a, t) => {
        for (var r in t || (t = {})) dx.call(t, r) && Wl(a, r, t[r]);
        if (Gl)
            for (var r of Gl(t)) gx.call(t, r) && Wl(a, r, t[r]);
        return a
    },
    pc = (a, t) => fx(a, px(t));
class Bc {
    constructor(t) {
        this.events = new Dc, this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = t, this.logger = typeof(t == null ? void 0 : t.logger) < "u" && typeof(t == null ? void 0 : t.logger) != "string" ? t.logger : $e.pino($e.getDefaultLoggerOptions({
            level: (t == null ? void 0 : t.logger) || Hl
        })), this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1
    }
    static async init(t) {
        const r = new Bc(t);
        return await r.initialize(), r
    }
    async request(t, r) {
        const [n, s] = this.validateChain(r);
        if (!this.session) throw new Error("Please call connect() before request()");
        return await this.getProvider(n).request({
            request: lo({}, t),
            chainId: `${n}:${s}`,
            topic: this.session.topic
        })
    }
    sendAsync(t, r, n) {
        this.request(t, n).then(s => r(null, s)).catch(s => r(s, void 0))
    }
    async enable() {
        if (!this.client) throw new Error("Sign Client not initialized");
        return this.session || await this.connect({
            namespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties
        }), await this.requestAccounts()
    }
    async disconnect() {
        var t;
        if (!this.session) throw new Error("Please call connect() before enable()");
        await this.client.disconnect({
            topic: (t = this.session) == null ? void 0 : t.topic,
            reason: tr("USER_DISCONNECTED")
        }), await this.cleanup()
    }
    async connect(t) {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic)
    }
    on(t, r) {
        this.events.on(t, r)
    }
    once(t, r) {
        this.events.once(t, r)
    }
    removeListener(t, r) {
        this.events.removeListener(t, r)
    }
    off(t, r) {
        this.events.off(t, r)
    }
    get isWalletConnect() {
        return !0
    }
    async pair(t) {
        this.shouldAbortPairingAttempt = !1;
        let r = 0;
        do {
            if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
            if (r >= this.maxPairingAttempts) throw new Error("Max auto pairing attempts reached");
            const {
                uri: n,
                approval: s
            } = await this.client.connect({
                pairingTopic: t,
                requiredNamespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties
            });
            n && (this.uri = n, this.events.emit("display_uri", n)), await s().then(c => {
                this.session = c, this.namespaces || (this.namespaces = rx(c.namespaces), this.persist("namespaces", this.namespaces))
            }).catch(c => {
                if (c.message !== kf) throw c;
                r++
            })
        } while (!this.session);
        return this.onConnect(), this.session
    }
    setDefaultChain(t, r) {
        try {
            if (!this.session) return;
            const [n, s] = this.validateChain(t);
            this.getProvider(n).setDefaultChain(s, r)
        } catch (n) {
            if (!/Please call connect/.test(n.message)) throw n
        }
    }
    async cleanupPendingPairings(t = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        const r = this.client.pairing.getAll();
        if (vn(r)) {
            for (const n of r) t.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
            this.logger.info(`Inactive pairings cleared: ${r.length}`)
        }
    }
    abortPairingAttempt() {
        this.shouldAbortPairingAttempt = !0
    }
    async checkStorage() {
        if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
            const t = this.client.session.keys.length - 1;
            this.session = this.client.session.get(this.client.session.keys[t]), this.createProviders()
        }
    }
    async initialize() {
        this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
    }
    async createClient() {
        this.client = this.providerOpts.client || await MI.init({
            logger: this.providerOpts.logger || Hl,
            relayUrl: this.providerOpts.relayUrl || BI,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name
        }), this.logger.trace("SignClient Initialized")
    }
    createProviders() {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
        const t = [...new Set(Object.keys(this.session.namespaces).map(r => Kn(r)))];
        fc("client", this.client), fc("events", this.events), fc("disableProviderPing", this.disableProviderPing), t.forEach(r => {
            if (!this.session) return;
            const n = ZI(r, this.session),
                s = Vf(n),
                c = ex(this.namespaces, this.optionalNamespaces),
                f = pc(lo({}, c[r]), {
                    accounts: n,
                    chains: s
                });
            switch (r) {
                case "eip155":
                    this.rpcProviders[r] = new nx({
                        namespace: f
                    });
                    break;
                case "solana":
                    this.rpcProviders[r] = new sx({
                        namespace: f
                    });
                    break;
                case "cosmos":
                    this.rpcProviders[r] = new ox({
                        namespace: f
                    });
                    break;
                case "polkadot":
                    this.rpcProviders[r] = new ix({
                        namespace: f
                    });
                    break;
                case "cip34":
                    this.rpcProviders[r] = new ax({
                        namespace: f
                    });
                    break;
                case "elrond":
                    this.rpcProviders[r] = new cx({
                        namespace: f
                    });
                    break;
                case "multiversx":
                    this.rpcProviders[r] = new ux({
                        namespace: f
                    });
                    break;
                case "near":
                    this.rpcProviders[r] = new hx({
                        namespace: f
                    });
                    break
            }
        })
    }
    registerEventListeners() {
        if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
        this.client.on("session_ping", t => {
            this.events.emit("session_ping", t)
        }), this.client.on("session_event", t => {
            const {
                params: r
            } = t, {
                event: n
            } = r;
            if (n.name === "accountsChanged") {
                const s = n.data;
                s && vn(s) && this.events.emit("accountsChanged", s.map(tx))
            } else if (n.name === "chainChanged") {
                const s = r.chainId,
                    c = r.event.data,
                    f = Kn(s),
                    g = lc(s) !== lc(c) ? `${f}:${lc(c)}` : s;
                this.onChainChanged(g)
            } else this.events.emit(n.name, n.data);
            this.events.emit("session_event", t)
        }), this.client.on("session_update", ({
            topic: t,
            params: r
        }) => {
            var n;
            const {
                namespaces: s
            } = r, c = (n = this.client) == null ? void 0 : n.session.get(t);
            this.session = pc(lo({}, c), {
                namespaces: s
            }), this.onSessionUpdate(), this.events.emit("session_update", {
                topic: t,
                params: r
            })
        }), this.client.on("session_delete", async t => {
            await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", pc(lo({}, tr("USER_DISCONNECTED")), {
                data: t.topic
            }))
        }), this.on(ui.DEFAULT_CHAIN_CHANGED, t => {
            this.onChainChanged(t, !0)
        })
    }
    getProvider(t) {
        if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
        return this.rpcProviders[t]
    }
    onSessionUpdate() {
        Object.keys(this.rpcProviders).forEach(t => {
            var r;
            this.getProvider(t).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[t])
        })
    }
    setNamespaces(t) {
        const {
            namespaces: r,
            optionalNamespaces: n,
            sessionProperties: s
        } = t;
        r && Object.keys(r).length && (this.namespaces = r), n && Object.keys(n).length && (this.optionalNamespaces = n), this.sessionProperties = s, this.persist("namespaces", r), this.persist("optionalNamespaces", n)
    }
    validateChain(t) {
        const [r, n] = (t == null ? void 0 : t.split(":")) || ["", ""];
        if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, n];
        if (r && !Object.keys(this.namespaces || {}).map(f => Kn(f)).includes(r)) throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
        if (r && n) return [r, n];
        const s = Kn(Object.keys(this.namespaces)[0]),
            c = this.rpcProviders[s].getDefaultChain();
        return [s, c]
    }
    async requestAccounts() {
        const [t] = this.validateChain();
        return await this.getProvider(t).requestAccounts()
    }
    onChainChanged(t, r = !1) {
        var n;
        if (!this.namespaces) return;
        const [s, c] = this.validateChain(t);
        r || this.getProvider(s).setDefaultChain(c), ((n = this.namespaces[s]) != null ? n : this.namespaces[`${s}:${c}`]).defaultChain = c, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", c)
    }
    onConnect() {
        this.createProviders(), this.events.emit("connect", {
            session: this.session
        })
    }
    async cleanup() {
        this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
            deletePairings: !0
        })
    }
    persist(t, r) {
        this.client.core.storage.setItem(`${Bl}/${t}`, r)
    }
    async getFromStore(t) {
        return await this.client.core.storage.getItem(`${Bl}/${t}`)
    }
}
const yx = Bc,
    vx = "wc",
    mx = "ethereum_provider",
    _x = `${vx}@2:${mx}:`,
    wx = "https://rpc.walletconnect.com/v1/",
    Cc = ["eth_sendTransaction", "personal_sign"],
    bx = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
    $c = ["chainChanged", "accountsChanged"],
    Ex = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var Ix = Object.defineProperty,
    xx = Object.defineProperties,
    Px = Object.getOwnPropertyDescriptors,
    Jl = Object.getOwnPropertySymbols,
    Sx = Object.prototype.hasOwnProperty,
    Ox = Object.prototype.propertyIsEnumerable,
    Ql = (a, t, r) => t in a ? Ix(a, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : a[t] = r,
    Gn = (a, t) => {
        for (var r in t || (t = {})) Sx.call(t, r) && Ql(a, r, t[r]);
        if (Jl)
            for (var r of Jl(t)) Ox.call(t, r) && Ql(a, r, t[r]);
        return a
    },
    Yl = (a, t) => xx(a, Px(t));

function wo(a) {
    return Number(a[0].split(":")[1])
}

function dc(a) {
    return `0x${a.toString(16)}`
}

function Rx(a) {
    const {
        chains: t,
        optionalChains: r,
        methods: n,
        optionalMethods: s,
        events: c,
        optionalEvents: f,
        rpcMap: g
    } = a;
    if (!vn(t)) throw new Error("Invalid chains");
    const m = {
            chains: t,
            methods: n || Cc,
            events: c || $c,
            rpcMap: Gn({}, t.length ? {
                [wo(t)]: g[wo(t)]
            } : {})
        },
        p = c == null ? void 0 : c.filter(C => !$c.includes(C)),
        w = n == null ? void 0 : n.filter(C => !Cc.includes(C));
    if (!r && !f && !s && !(p != null && p.length) && !(w != null && w.length)) return {
        required: t.length ? m : void 0
    };
    const R = (p == null ? void 0 : p.length) && (w == null ? void 0 : w.length) || !r,
        x = {
            chains: [...new Set(R ? m.chains.concat(r || []) : r)],
            methods: [...new Set(m.methods.concat(s != null && s.length ? s : bx))],
            events: [...new Set(m.events.concat(f != null && f.length ? f : Ex))],
            rpcMap: g
        };
    return {
        required: t.length ? m : void 0,
        optional: r.length ? x : void 0
    }
}
class kc {
    constructor() {
        this.events = new Or.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = _x, this.on = (t, r) => (this.events.on(t, r), this), this.once = (t, r) => (this.events.once(t, r), this), this.removeListener = (t, r) => (this.events.removeListener(t, r), this), this.off = (t, r) => (this.events.off(t, r), this), this.parseAccount = t => this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t, this.signer = {}, this.rpc = {}
    }
    static async init(t) {
        const r = new kc;
        return await r.initialize(t), r
    }
    async request(t) {
        return await this.signer.request(t, this.formatChainId(this.chainId))
    }
    sendAsync(t, r) {
        this.signer.sendAsync(t, r, this.formatChainId(this.chainId))
    }
    get connected() {
        return this.signer.client ? this.signer.client.core.relayer.connected : !1
    }
    get connecting() {
        return this.signer.client ? this.signer.client.core.relayer.connecting : !1
    }
    async enable() {
        return this.session || await this.connect(), await this.request({
            method: "eth_requestAccounts"
        })
    }
    async connect(t) {
        if (!this.signer.client) throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(t);
        const {
            required: r,
            optional: n
        } = Rx(this.rpc);
        try {
            const s = await new Promise(async (f, g) => {
                var m;
                this.rpc.showQrModal && ((m = this.modal) == null || m.subscribeModal(p => {
                    !p.open && !this.signer.session && (this.signer.abortPairingAttempt(), g(new Error("Connection request reset. Please try again.")))
                })), await this.signer.connect(Yl(Gn({
                    namespaces: Gn({}, r && {
                        [this.namespace]: r
                    })
                }, n && {
                    optionalNamespaces: {
                        [this.namespace]: n
                    }
                }), {
                    pairingTopic: t == null ? void 0 : t.pairingTopic
                })).then(p => {
                    f(p)
                }).catch(p => {
                    g(new Error(p.message))
                })
            });
            if (!s) return;
            const c = h1(s.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : c), this.setAccounts(c), this.events.emit("connect", {
                chainId: dc(this.chainId)
            })
        } catch (s) {
            throw this.signer.logger.error(s), s
        } finally {
            this.modal && this.modal.closeModal()
        }
    }
    async disconnect() {
        this.session && await this.signer.disconnect(), this.reset()
    }
    get isWalletConnect() {
        return !0
    }
    get session() {
        return this.signer.session
    }
    registerEventListeners() {
        this.signer.on("session_event", t => {
            const {
                params: r
            } = t, {
                event: n
            } = r;
            n.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n.data), this.events.emit("accountsChanged", this.accounts)) : n.name === "chainChanged" ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data), this.events.emit("session_event", t)
        }), this.signer.on("chainChanged", t => {
            const r = parseInt(t);
            this.chainId = r, this.events.emit("chainChanged", dc(this.chainId)), this.persist()
        }), this.signer.on("session_update", t => {
            this.events.emit("session_update", t)
        }), this.signer.on("session_delete", t => {
            this.reset(), this.events.emit("session_delete", t), this.events.emit("disconnect", Yl(Gn({}, tr("USER_DISCONNECTED")), {
                data: t.topic,
                name: "USER_DISCONNECTED"
            }))
        }), this.signer.on("display_uri", t => {
            var r, n;
            this.rpc.showQrModal && ((r = this.modal) == null || r.closeModal(), (n = this.modal) == null || n.openModal({
                uri: t
            })), this.events.emit("display_uri", t)
        })
    }
    switchEthereumChain(t) {
        this.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: t.toString(16)
            }]
        })
    }
    isCompatibleChainId(t) {
        return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1
    }
    formatChainId(t) {
        return `${this.namespace}:${t}`
    }
    parseChainId(t) {
        return Number(t.split(":")[1])
    }
    setChainIds(t) {
        const r = t.filter(n => this.isCompatibleChainId(n)).map(n => this.parseChainId(n));
        r.length && (this.chainId = r[0], this.events.emit("chainChanged", dc(this.chainId)), this.persist())
    }
    setChainId(t) {
        if (this.isCompatibleChainId(t)) {
            const r = this.parseChainId(t);
            this.chainId = r, this.switchEthereumChain(r)
        }
    }
    parseAccountId(t) {
        const [r, n, s] = t.split(":");
        return {
            chainId: `${r}:${n}`,
            address: s
        }
    }
    setAccounts(t) {
        this.accounts = t.filter(r => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map(r => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts)
    }
    getRpcConfig(t) {
        var r, n;
        const s = (r = t == null ? void 0 : t.chains) != null ? r : [],
            c = (n = t == null ? void 0 : t.optionalChains) != null ? n : [],
            f = s.concat(c);
        if (!f.length) throw new Error("No chains specified in either `chains` or `optionalChains`");
        const g = s.length ? (t == null ? void 0 : t.methods) || Cc : [],
            m = s.length ? (t == null ? void 0 : t.events) || $c : [],
            p = (t == null ? void 0 : t.optionalMethods) || [],
            w = (t == null ? void 0 : t.optionalEvents) || [],
            R = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(f, t.projectId),
            x = (t == null ? void 0 : t.qrModalOptions) || void 0;
        return {
            chains: s == null ? void 0 : s.map(C => this.formatChainId(C)),
            optionalChains: c.map(C => this.formatChainId(C)),
            methods: g,
            events: m,
            optionalMethods: p,
            optionalEvents: w,
            rpcMap: R,
            showQrModal: !!(t != null && t.showQrModal),
            qrModalOptions: x,
            projectId: t.projectId,
            metadata: t.metadata
        }
    }
    buildRpcMap(t, r) {
        const n = {};
        return t.forEach(s => {
            n[s] = this.getRpcUrl(s, r)
        }), n
    }
    async initialize(t) {
        if (this.rpc = this.getRpcConfig(t), this.chainId = this.rpc.chains.length ? wo(this.rpc.chains) : wo(this.rpc.optionalChains), this.signer = await yx.init({
                projectId: this.rpc.projectId,
                metadata: this.rpc.metadata,
                disableProviderPing: t.disableProviderPing,
                relayUrl: t.relayUrl,
                storageOptions: t.storageOptions
            }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
            let r;
            try {
                const {
                    WalletConnectModal: n
                } = await l1(() =>
                    import ("./index-4f11bc3c.js").then(s => s.i), ["assets/index-4f11bc3c.js", "assets/index-567080d8.js", "assets/index-00ea8131.css"]);
                r = n
            } catch {
                throw new Error("To use QR modal, please install @walletconnect/modal package")
            }
            if (r) try {
                this.modal = new r(Gn({
                    walletConnectVersion: 2,
                    projectId: this.rpc.projectId,
                    standaloneChains: this.rpc.chains
                }, this.rpc.qrModalOptions))
            } catch (n) {
                throw this.signer.logger.error(n), new Error("Could not generate WalletConnectModal Instance")
            }
        }
    }
    loadConnectOpts(t) {
        if (!t) return;
        const {
            chains: r,
            optionalChains: n,
            rpcMap: s
        } = t;
        r && vn(r) && (this.rpc.chains = r.map(c => this.formatChainId(c)), r.forEach(c => {
            this.rpc.rpcMap[c] = (s == null ? void 0 : s[c]) || this.getRpcUrl(c)
        })), n && vn(n) && (this.rpc.optionalChains = [], this.rpc.optionalChains = n == null ? void 0 : n.map(c => this.formatChainId(c)), n.forEach(c => {
            this.rpc.rpcMap[c] = (s == null ? void 0 : s[c]) || this.getRpcUrl(c)
        }))
    }
    getRpcUrl(t, r) {
        var n;
        return ((n = this.rpc.rpcMap) == null ? void 0 : n[t]) || `${wx}?chainId=eip155:${t}&projectId=${r||this.rpc.projectId}`
    }
    async loadPersistedSession() {
        if (!this.session) return;
        const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
            r = this.session.namespaces[`${this.namespace}:${t}`] ? this.session.namespaces[`${this.namespace}:${t}`] : this.session.namespaces[this.namespace];
        this.setChainIds(t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts), this.setAccounts(r == null ? void 0 : r.accounts)
    }
    reset() {
        this.chainId = 1, this.accounts = []
    }
    persist() {
        this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
    }
    parseAccounts(t) {
        return typeof t == "string" || t instanceof String ? [this.parseAccount(t)] : t.map(r => this.parseAccount(r))
    }
}
const Hx = kc;
export {
    Hx as EthereumProvider, Ex as OPTIONAL_EVENTS, bx as OPTIONAL_METHODS, $c as REQUIRED_EVENTS, Cc as REQUIRED_METHODS, kc as
    default
};