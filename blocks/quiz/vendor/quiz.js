function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire3cb0"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire3cb0"] = parcelRequire;
}
parcelRequire.register("2JpsI", function(module, exports) {

$parcel$export(module.exports, "register", () => $1fd388fe1a0c2157$export$6503ec6e8aabbaf, (v) => $1fd388fe1a0c2157$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $1fd388fe1a0c2157$export$f7ad0328861e2f03, (v) => $1fd388fe1a0c2157$export$f7ad0328861e2f03 = v);
var $1fd388fe1a0c2157$export$6503ec6e8aabbaf;
var $1fd388fe1a0c2157$export$f7ad0328861e2f03;
"use strict";
var $1fd388fe1a0c2157$var$mapping = {
};
function $1fd388fe1a0c2157$var$register(pairs) {
    var keys = Object.keys(pairs);
    for(var i = 0; i < keys.length; i++)$1fd388fe1a0c2157$var$mapping[keys[i]] = pairs[keys[i]];
}
function $1fd388fe1a0c2157$var$resolve(id) {
    var resolved = $1fd388fe1a0c2157$var$mapping[id];
    if (resolved == null) throw new Error('Could not resolve bundle with id ' + id);
    return resolved;
}
$1fd388fe1a0c2157$export$6503ec6e8aabbaf = $1fd388fe1a0c2157$var$register;
$1fd388fe1a0c2157$export$f7ad0328861e2f03 = $1fd388fe1a0c2157$var$resolve;

});

parcelRequire.register("gahzI", function(module, exports) {

module.exports = import("./" + (parcelRequire("2JpsI")).resolve("jvic1")).then(()=>parcelRequire('V0WlB')
);

});

parcelRequire.register("coXMN", function(module, exports) {

module.exports = import("./" + (parcelRequire("2JpsI")).resolve("9aUn9")).then(()=>parcelRequire('bdDLm')
);

});

parcelRequire.register("irzyE", function(module, exports) {

module.exports = import("./" + (parcelRequire("2JpsI")).resolve("80OrZ")).then(()=>parcelRequire('eexx7')
);

});

var $cc716bbcae2594b8$exports = {};

(parcelRequire("2JpsI")).register(JSON.parse("{\"bTZPt\":\"quiz.270fa59b.js\",\"jvic1\":\"html2canvas.a7ece306.js\",\"9aUn9\":\"purify.4a5841c0.js\",\"80OrZ\":\"index.es.74bc8e37.js\"}"));

var $9319f22e05447137$exports = {};
function $9319f22e05447137$var$_typeof(obj1) {
    return $9319f22e05447137$exports = $9319f22e05447137$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $9319f22e05447137$exports.__esModule = true, $9319f22e05447137$exports["default"] = $9319f22e05447137$exports, $9319f22e05447137$var$_typeof(obj1);
}
$9319f22e05447137$exports = $9319f22e05447137$var$_typeof, $9319f22e05447137$exports.__esModule = true, $9319f22e05447137$exports["default"] = $9319f22e05447137$exports;


// DEFLATE is a complex format; to read this code, you should probably check the RFC first:
// https://tools.ietf.org/html/rfc1951
// You may also wish to take a look at the guide I made about this program:
// https://gist.github.com/101arrowz/253f31eb5abc3d9275ab943003ffecad
// Much of the following code is similar to that of UZIP.js:
// https://github.com/photopea/UZIP.js
// Many optimizations have been made, so the bundle size is ultimately smaller but performance is similar.
// Sometimes 0 will appear where -1 would be more appropriate. This is because using a uint
// is better for memory in most engines (I *think*).
var $3202ecda957ada6e$var$ch2 = {
};
var $3202ecda957ada6e$var$wk = function(c, id, msg, transfer, cb) {
    var u = $3202ecda957ada6e$var$ch2[id] || ($3202ecda957ada6e$var$ch2[id] = URL.createObjectURL(new Blob([
        c
    ], {
        type: 'text/javascript'
    })));
    var w = new Worker(u);
    w.onerror = function(e) {
        return cb(e.error, null);
    };
    w.onmessage = function(e) {
        return cb(null, e.data);
    };
    w.postMessage(msg, transfer);
    return w;
};
// aliases for shorter compressed code (most minifers don't do this)
var $3202ecda957ada6e$var$u8 = Uint8Array, $3202ecda957ada6e$var$u16 = Uint16Array, $3202ecda957ada6e$var$u32 = Uint32Array;
// fixed length extra bits
var $3202ecda957ada6e$var$fleb = new $3202ecda957ada6e$var$u8([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    /* unused */ 0,
    0,
    /* impossible */ 0
]);
// fixed distance extra bits
// see fleb note
var $3202ecda957ada6e$var$fdeb = new $3202ecda957ada6e$var$u8([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13,
    /* unused */ 0,
    0
]);
// code length index map
var $3202ecda957ada6e$var$clim = new $3202ecda957ada6e$var$u8([
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
]);
// get base, reverse index map from extra bits
var $3202ecda957ada6e$var$freb = function(eb, start) {
    var b = new $3202ecda957ada6e$var$u16(31);
    for(var i = 0; i < 31; ++i)b[i] = start += 1 << eb[i - 1];
    // numbers here are at max 18 bits
    var r = new $3202ecda957ada6e$var$u32(b[30]);
    for(var i = 1; i < 30; ++i)for(var j = b[i]; j < b[i + 1]; ++j)r[j] = j - b[i] << 5 | i;
    return [
        b,
        r
    ];
};
var $3202ecda957ada6e$var$_a = $3202ecda957ada6e$var$freb($3202ecda957ada6e$var$fleb, 2), $3202ecda957ada6e$var$fl = $3202ecda957ada6e$var$_a[0], $3202ecda957ada6e$var$revfl = $3202ecda957ada6e$var$_a[1];
// we can ignore the fact that the other numbers are wrong; they never happen anyway
$3202ecda957ada6e$var$fl[28] = 258, $3202ecda957ada6e$var$revfl[258] = 28;
var $3202ecda957ada6e$var$_b = $3202ecda957ada6e$var$freb($3202ecda957ada6e$var$fdeb, 0), $3202ecda957ada6e$var$fd = $3202ecda957ada6e$var$_b[0], $3202ecda957ada6e$var$revfd = $3202ecda957ada6e$var$_b[1];
// map of value to reverse (assuming 16 bits)
var $3202ecda957ada6e$var$rev = new $3202ecda957ada6e$var$u16(32768);
for(var $3202ecda957ada6e$var$i = 0; $3202ecda957ada6e$var$i < 32768; ++$3202ecda957ada6e$var$i){
    // reverse table algorithm from SO
    var $3202ecda957ada6e$var$x = ($3202ecda957ada6e$var$i & 43690) >>> 1 | ($3202ecda957ada6e$var$i & 21845) << 1;
    $3202ecda957ada6e$var$x = ($3202ecda957ada6e$var$x & 52428) >>> 2 | ($3202ecda957ada6e$var$x & 13107) << 2;
    $3202ecda957ada6e$var$x = ($3202ecda957ada6e$var$x & 61680) >>> 4 | ($3202ecda957ada6e$var$x & 3855) << 4;
    $3202ecda957ada6e$var$rev[$3202ecda957ada6e$var$i] = (($3202ecda957ada6e$var$x & 65280) >>> 8 | ($3202ecda957ada6e$var$x & 255) << 8) >>> 1;
}
// create huffman tree from u8 "map": index -> code length for code index
// mb (max bits) must be at most 15
// TODO: optimize/split up?
var $3202ecda957ada6e$var$hMap = function(cd, mb, r) {
    var s = cd.length;
    // index
    var i = 0;
    // u16 "map": index -> # of codes with bit length = index
    var l = new $3202ecda957ada6e$var$u16(mb);
    // length of cd must be 288 (total # of codes)
    for(; i < s; ++i)++l[cd[i] - 1];
    // u16 "map": index -> minimum code for bit length = index
    var le = new $3202ecda957ada6e$var$u16(mb);
    for(i = 0; i < mb; ++i)le[i] = le[i - 1] + l[i - 1] << 1;
    var co;
    if (r) {
        // u16 "map": index -> number of actual bits, symbol for code
        co = new $3202ecda957ada6e$var$u16(1 << mb);
        // bits to remove for reverser
        var rvb = 15 - mb;
        for(i = 0; i < s; ++i)// ignore 0 lengths
        if (cd[i]) {
            // num encoding both symbol and bits read
            var sv = i << 4 | cd[i];
            // free bits
            var r_1 = mb - cd[i];
            // start value
            var v = (le[cd[i] - 1]++) << r_1;
            // m is end value
            for(var m = v | (1 << r_1) - 1; v <= m; ++v)// every 16 bit value starting with the code yields the same result
            co[$3202ecda957ada6e$var$rev[v] >>> rvb] = sv;
        }
    } else {
        co = new $3202ecda957ada6e$var$u16(s);
        for(i = 0; i < s; ++i)co[i] = $3202ecda957ada6e$var$rev[le[cd[i] - 1]++] >>> 15 - cd[i];
    }
    return co;
};
// fixed length tree
var $3202ecda957ada6e$var$flt = new $3202ecda957ada6e$var$u8(288);
for(var $3202ecda957ada6e$var$i = 0; $3202ecda957ada6e$var$i < 144; ++$3202ecda957ada6e$var$i)$3202ecda957ada6e$var$flt[$3202ecda957ada6e$var$i] = 8;
for(var $3202ecda957ada6e$var$i = 144; $3202ecda957ada6e$var$i < 256; ++$3202ecda957ada6e$var$i)$3202ecda957ada6e$var$flt[$3202ecda957ada6e$var$i] = 9;
for(var $3202ecda957ada6e$var$i = 256; $3202ecda957ada6e$var$i < 280; ++$3202ecda957ada6e$var$i)$3202ecda957ada6e$var$flt[$3202ecda957ada6e$var$i] = 7;
for(var $3202ecda957ada6e$var$i = 280; $3202ecda957ada6e$var$i < 288; ++$3202ecda957ada6e$var$i)$3202ecda957ada6e$var$flt[$3202ecda957ada6e$var$i] = 8;
// fixed distance tree
var $3202ecda957ada6e$var$fdt = new $3202ecda957ada6e$var$u8(32);
for(var $3202ecda957ada6e$var$i = 0; $3202ecda957ada6e$var$i < 32; ++$3202ecda957ada6e$var$i)$3202ecda957ada6e$var$fdt[$3202ecda957ada6e$var$i] = 5;
// fixed length map
var $3202ecda957ada6e$var$flm = /*#__PURE__*/ $3202ecda957ada6e$var$hMap($3202ecda957ada6e$var$flt, 9, 0), $3202ecda957ada6e$var$flrm = /*#__PURE__*/ $3202ecda957ada6e$var$hMap($3202ecda957ada6e$var$flt, 9, 1);
// fixed distance map
var $3202ecda957ada6e$var$fdm = /*#__PURE__*/ $3202ecda957ada6e$var$hMap($3202ecda957ada6e$var$fdt, 5, 0), $3202ecda957ada6e$var$fdrm = /*#__PURE__*/ $3202ecda957ada6e$var$hMap($3202ecda957ada6e$var$fdt, 5, 1);
// find max of array
var $3202ecda957ada6e$var$max = function(a) {
    var m = a[0];
    for(var i = 1; i < a.length; ++i)if (a[i] > m) m = a[i];
    return m;
};
// read d, starting at bit p and mask with m
var $3202ecda957ada6e$var$bits = function(d, p, m) {
    var o = p / 8 >> 0;
    return (d[o] | d[o + 1] << 8) >>> (p & 7) & m;
};
// read d, starting at bit p continuing for at least 16 bits
var $3202ecda957ada6e$var$bits16 = function(d, p) {
    var o = p / 8 >> 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >>> (p & 7);
};
// get end of byte
var $3202ecda957ada6e$var$shft = function(p) {
    return (p / 8 >> 0) + (p & 7 && 1);
};
// typed array slice - allows garbage collector to free original reference,
// while being more compatible than .slice
var $3202ecda957ada6e$var$slc = function(v, s, e) {
    if (s == null || s < 0) s = 0;
    if (e == null || e > v.length) e = v.length;
    // can't use .constructor in case user-supplied
    var n = new (v instanceof $3202ecda957ada6e$var$u16 ? $3202ecda957ada6e$var$u16 : (v instanceof $3202ecda957ada6e$var$u32 ? $3202ecda957ada6e$var$u32 : $3202ecda957ada6e$var$u8))(e - s);
    n.set(v.subarray(s, e));
    return n;
};
// expands raw DEFLATE data
var $3202ecda957ada6e$var$inflt = function(dat, buf, st) {
    // source length
    var sl = dat.length;
    // have to estimate size
    var noBuf = !buf || st;
    // no state
    var noSt = !st || st.i;
    if (!st) st = {
    };
    // Assumes roughly 33% compression ratio average
    if (!buf) buf = new $3202ecda957ada6e$var$u8(sl * 3);
    // ensure buffer can fit at least l elements
    var cbuf = function(l) {
        var bl = buf.length;
        // need to increase size to fit
        if (l > bl) {
            // Double or set to necessary, whichever is greater
            var nbuf = new $3202ecda957ada6e$var$u8(Math.max(bl * 2, l));
            nbuf.set(buf);
            buf = nbuf;
        }
    };
    //  last chunk         bitpos           bytes
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    // total bits
    var tbts = sl * 8;
    do {
        if (!lm) {
            // BFINAL - this is only 1 when last chunk is next
            st.f = final = $3202ecda957ada6e$var$bits(dat, pos, 1);
            // type: 0 = no compression, 1 = fixed huffman, 2 = dynamic huffman
            var type = $3202ecda957ada6e$var$bits(dat, pos + 1, 3);
            pos += 3;
            if (!type) {
                // go to end of byte boundary
                var s = $3202ecda957ada6e$var$shft(pos) + 4, l1 = dat[s - 4] | dat[s - 3] << 8, t = s + l1;
                if (t > sl) {
                    if (noSt) throw 'unexpected EOF';
                    break;
                }
                // ensure size
                if (noBuf) cbuf(bt + l1);
                // Copy over uncompressed data
                buf.set(dat.subarray(s, t), bt);
                // Get new bitpos, update byte count
                st.b = bt += l1, st.p = pos = t * 8;
                continue;
            } else if (type == 1) lm = $3202ecda957ada6e$var$flrm, dm = $3202ecda957ada6e$var$fdrm, lbt = 9, dbt = 5;
            else if (type == 2) {
                //  literal                            lengths
                var hLit = $3202ecda957ada6e$var$bits(dat, pos, 31) + 257, hcLen = $3202ecda957ada6e$var$bits(dat, pos + 10, 15) + 4;
                var tl = hLit + $3202ecda957ada6e$var$bits(dat, pos + 5, 31) + 1;
                pos += 14;
                // length+distance tree
                var ldt = new $3202ecda957ada6e$var$u8(tl);
                // code length tree
                var clt = new $3202ecda957ada6e$var$u8(19);
                for(var i = 0; i < hcLen; ++i)// use index map to get real code
                clt[$3202ecda957ada6e$var$clim[i]] = $3202ecda957ada6e$var$bits(dat, pos + i * 3, 7);
                pos += hcLen * 3;
                // code lengths bits
                var clb = $3202ecda957ada6e$var$max(clt), clbmsk = (1 << clb) - 1;
                if (!noSt && pos + tl * (clb + 7) > tbts) break;
                // code lengths map
                var clm = $3202ecda957ada6e$var$hMap(clt, clb, 1);
                for(var i = 0; i < tl;){
                    var r = clm[$3202ecda957ada6e$var$bits(dat, pos, clbmsk)];
                    // bits read
                    pos += r & 15;
                    // symbol
                    var s = r >>> 4;
                    // code length to copy
                    if (s < 16) ldt[i++] = s;
                    else {
                        //  copy   count
                        var c = 0, n = 0;
                        if (s == 16) n = 3 + $3202ecda957ada6e$var$bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
                        else if (s == 17) n = 3 + $3202ecda957ada6e$var$bits(dat, pos, 7), pos += 3;
                        else if (s == 18) n = 11 + $3202ecda957ada6e$var$bits(dat, pos, 127), pos += 7;
                        while(n--)ldt[i++] = c;
                    }
                }
                //    length tree                 distance tree
                var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
                // max length bits
                lbt = $3202ecda957ada6e$var$max(lt);
                // max dist bits
                dbt = $3202ecda957ada6e$var$max(dt);
                lm = $3202ecda957ada6e$var$hMap(lt, lbt, 1);
                dm = $3202ecda957ada6e$var$hMap(dt, dbt, 1);
            } else throw 'invalid block type';
            if (pos > tbts) throw 'unexpected EOF';
        }
        // Make sure the buffer can hold this + the largest possible addition
        // Maximum chunk size (practically, theoretically infinite) is 2^17;
        if (noBuf) cbuf(bt + 131072);
        var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
        var mxa = lbt + dbt + 18;
        while(noSt || pos + mxa < tbts){
            // bits read, code
            var c = lm[$3202ecda957ada6e$var$bits16(dat, pos) & lms], sym = c >>> 4;
            pos += c & 15;
            if (pos > tbts) throw 'unexpected EOF';
            if (!c) throw 'invalid length/literal';
            if (sym < 256) buf[bt++] = sym;
            else if (sym == 256) {
                lm = null;
                break;
            } else {
                var add = sym - 254;
                // no extra bits needed if less
                if (sym > 264) {
                    // index
                    var i = sym - 257, b = $3202ecda957ada6e$var$fleb[i];
                    add = $3202ecda957ada6e$var$bits(dat, pos, (1 << b) - 1) + $3202ecda957ada6e$var$fl[i];
                    pos += b;
                }
                // dist
                var d = dm[$3202ecda957ada6e$var$bits16(dat, pos) & dms], dsym = d >>> 4;
                if (!d) throw 'invalid distance';
                pos += d & 15;
                var dt = $3202ecda957ada6e$var$fd[dsym];
                if (dsym > 3) {
                    var b = $3202ecda957ada6e$var$fdeb[dsym];
                    dt += $3202ecda957ada6e$var$bits16(dat, pos) & (1 << b) - 1, pos += b;
                }
                if (pos > tbts) throw 'unexpected EOF';
                if (noBuf) cbuf(bt + 131072);
                var end = bt + add;
                for(; bt < end; bt += 4){
                    buf[bt] = buf[bt - dt];
                    buf[bt + 1] = buf[bt + 1 - dt];
                    buf[bt + 2] = buf[bt + 2 - dt];
                    buf[bt + 3] = buf[bt + 3 - dt];
                }
                bt = end;
            }
        }
        st.l = lm, st.p = pos, st.b = bt;
        if (lm) final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    }while (!final)
    return bt == buf.length ? buf : $3202ecda957ada6e$var$slc(buf, 0, bt);
};
// starting at p, write the minimum number of bits that can hold v to d
var $3202ecda957ada6e$var$wbits = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
};
// starting at p, write the minimum number of bits (>8) that can hold v to d
var $3202ecda957ada6e$var$wbits16 = function(d, p, v) {
    v <<= p & 7;
    var o = p / 8 >> 0;
    d[o] |= v;
    d[o + 1] |= v >>> 8;
    d[o + 2] |= v >>> 16;
};
// creates code lengths from a frequency table
var $3202ecda957ada6e$var$hTree = function(d, mb) {
    // Need extra info to make a tree
    var t = [];
    for(var i = 0; i < d.length; ++i)if (d[i]) t.push({
        s: i,
        f: d[i]
    });
    var s = t.length;
    var t2 = t.slice();
    if (!s) return [
        new $3202ecda957ada6e$var$u8(0),
        0
    ];
    if (s == 1) {
        var v = new $3202ecda957ada6e$var$u8(t[0].s + 1);
        v[t[0].s] = 1;
        return [
            v,
            1
        ];
    }
    t.sort(function(a, b) {
        return a.f - b.f;
    });
    // after i2 reaches last ind, will be stopped
    // freq must be greater than largest possible number of symbols
    t.push({
        s: -1,
        f: 25001
    });
    var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
    t[0] = {
        s: -1,
        f: l.f + r.f,
        l: l,
        r: r
    };
    // efficient algorithm from UZIP.js
    // i0 is lookbehind, i2 is lookahead - after processing two low-freq
    // symbols that combined have high freq, will start processing i2 (high-freq,
    // non-composite) symbols instead
    // see https://reddit.com/r/photopea/comments/ikekht/uzipjs_questions/
    while(i1 != s - 1){
        l = t[t[i0].f < t[i2].f ? i0++ : i2++];
        r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
        t[i1++] = {
            s: -1,
            f: l.f + r.f,
            l: l,
            r: r
        };
    }
    var maxSym = t2[0].s;
    for(var i = 1; i < s; ++i)if (t2[i].s > maxSym) maxSym = t2[i].s;
    // code lengths
    var tr = new $3202ecda957ada6e$var$u16(maxSym + 1);
    // max bits in tree
    var mbt = $3202ecda957ada6e$var$ln(t[i1 - 1], tr, 0);
    if (mbt > mb) {
        // more algorithms from UZIP.js
        // TODO: find out how this code works (debt)
        //  ind    debt
        var i = 0, dt = 0;
        //    left            cost
        var lft = mbt - mb, cst = 1 << lft;
        t2.sort(function(a, b) {
            return tr[b.s] - tr[a.s] || a.f - b.f;
        });
        for(; i < s; ++i){
            var i2_1 = t2[i].s;
            if (tr[i2_1] > mb) {
                dt += cst - (1 << mbt - tr[i2_1]);
                tr[i2_1] = mb;
            } else break;
        }
        dt >>>= lft;
        while(dt > 0){
            var i2_2 = t2[i].s;
            if (tr[i2_2] < mb) dt -= 1 << mb - tr[i2_2]++ - 1;
            else ++i;
        }
        for(; i >= 0 && dt; --i){
            var i2_3 = t2[i].s;
            if (tr[i2_3] == mb) {
                --tr[i2_3];
                ++dt;
            }
        }
        mbt = mb;
    }
    return [
        new $3202ecda957ada6e$var$u8(tr),
        mbt
    ];
};
// get the max length and assign length codes
var $3202ecda957ada6e$var$ln = function(n, l, d) {
    return n.s == -1 ? Math.max($3202ecda957ada6e$var$ln(n.l, l, d + 1), $3202ecda957ada6e$var$ln(n.r, l, d + 1)) : l[n.s] = d;
};
// length codes generation
var $3202ecda957ada6e$var$lc = function(c) {
    var s = c.length;
    // Note that the semicolon was intentional
    while(s && !c[--s]);
    var cl = new $3202ecda957ada6e$var$u16(++s);
    //  ind      num         streak
    var cli = 0, cln = c[0], cls = 1;
    var w = function(v) {
        cl[cli++] = v;
    };
    for(var i = 1; i <= s; ++i)if (c[i] == cln && i != s) ++cls;
    else {
        if (!cln && cls > 2) {
            for(; cls > 138; cls -= 138)w(32754);
            if (cls > 2) {
                w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
                cls = 0;
            }
        } else if (cls > 3) {
            w(cln), --cls;
            for(; cls > 6; cls -= 6)w(8304);
            if (cls > 2) w(cls - 3 << 5 | 8208), cls = 0;
        }
        while(cls--)w(cln);
        cls = 1;
        cln = c[i];
    }
    return [
        cl.subarray(0, cli),
        s
    ];
};
// calculate the length of output from tree, code lengths
var $3202ecda957ada6e$var$clen = function(cf, cl) {
    var l = 0;
    for(var i = 0; i < cl.length; ++i)l += cf[i] * cl[i];
    return l;
};
// writes a fixed block
// returns the new bit pos
var $3202ecda957ada6e$var$wfblk = function(out, pos, dat) {
    // no need to write 00 as type: TypedArray defaults to 0
    var s = dat.length;
    var o = $3202ecda957ada6e$var$shft(pos + 2);
    out[o] = s & 255;
    out[o + 1] = s >>> 8;
    out[o + 2] = out[o] ^ 255;
    out[o + 3] = out[o + 1] ^ 255;
    for(var i = 0; i < s; ++i)out[o + i + 4] = dat[i];
    return (o + 4 + s) * 8;
};
// writes a block
var $3202ecda957ada6e$var$wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
    $3202ecda957ada6e$var$wbits(out, p++, final);
    ++lf[256];
    var _a = $3202ecda957ada6e$var$hTree(lf, 15), dlt = _a[0], mlb = _a[1];
    var _b = $3202ecda957ada6e$var$hTree(df, 15), ddt = _b[0], mdb = _b[1];
    var _c = $3202ecda957ada6e$var$lc(dlt), lclt = _c[0], nlc = _c[1];
    var _d = $3202ecda957ada6e$var$lc(ddt), lcdt = _d[0], ndc = _d[1];
    var lcfreq = new $3202ecda957ada6e$var$u16(19);
    for(var i = 0; i < lclt.length; ++i)lcfreq[lclt[i] & 31]++;
    for(var i = 0; i < lcdt.length; ++i)lcfreq[lcdt[i] & 31]++;
    var _e = $3202ecda957ada6e$var$hTree(lcfreq, 7), lct = _e[0], mlcb = _e[1];
    var nlcc = 19;
    for(; nlcc > 4 && !lct[$3202ecda957ada6e$var$clim[nlcc - 1]]; --nlcc);
    var flen = bl + 5 << 3;
    var ftlen = $3202ecda957ada6e$var$clen(lf, $3202ecda957ada6e$var$flt) + $3202ecda957ada6e$var$clen(df, $3202ecda957ada6e$var$fdt) + eb;
    var dtlen = $3202ecda957ada6e$var$clen(lf, dlt) + $3202ecda957ada6e$var$clen(df, ddt) + eb + 14 + 3 * nlcc + $3202ecda957ada6e$var$clen(lcfreq, lct) + (2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18]);
    if (flen <= ftlen && flen <= dtlen) return $3202ecda957ada6e$var$wfblk(out, p, dat.subarray(bs, bs + bl));
    var lm, ll, dm, dl;
    $3202ecda957ada6e$var$wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
    if (dtlen < ftlen) {
        lm = $3202ecda957ada6e$var$hMap(dlt, mlb, 0), ll = dlt, dm = $3202ecda957ada6e$var$hMap(ddt, mdb, 0), dl = ddt;
        var llm = $3202ecda957ada6e$var$hMap(lct, mlcb, 0);
        $3202ecda957ada6e$var$wbits(out, p, nlc - 257);
        $3202ecda957ada6e$var$wbits(out, p + 5, ndc - 1);
        $3202ecda957ada6e$var$wbits(out, p + 10, nlcc - 4);
        p += 14;
        for(var i = 0; i < nlcc; ++i)$3202ecda957ada6e$var$wbits(out, p + 3 * i, lct[$3202ecda957ada6e$var$clim[i]]);
        p += 3 * nlcc;
        var lcts = [
            lclt,
            lcdt
        ];
        for(var it = 0; it < 2; ++it){
            var clct = lcts[it];
            for(var i = 0; i < clct.length; ++i){
                var len = clct[i] & 31;
                $3202ecda957ada6e$var$wbits(out, p, llm[len]), p += lct[len];
                if (len > 15) $3202ecda957ada6e$var$wbits(out, p, clct[i] >>> 5 & 127), p += clct[i] >>> 12;
            }
        }
    } else lm = $3202ecda957ada6e$var$flm, ll = $3202ecda957ada6e$var$flt, dm = $3202ecda957ada6e$var$fdm, dl = $3202ecda957ada6e$var$fdt;
    for(var i = 0; i < li; ++i)if (syms[i] > 255) {
        var len = syms[i] >>> 18 & 31;
        $3202ecda957ada6e$var$wbits16(out, p, lm[len + 257]), p += ll[len + 257];
        if (len > 7) $3202ecda957ada6e$var$wbits(out, p, syms[i] >>> 23 & 31), p += $3202ecda957ada6e$var$fleb[len];
        var dst = syms[i] & 31;
        $3202ecda957ada6e$var$wbits16(out, p, dm[dst]), p += dl[dst];
        if (dst > 3) $3202ecda957ada6e$var$wbits16(out, p, syms[i] >>> 5 & 8191), p += $3202ecda957ada6e$var$fdeb[dst];
    } else $3202ecda957ada6e$var$wbits16(out, p, lm[syms[i]]), p += ll[syms[i]];
    $3202ecda957ada6e$var$wbits16(out, p, lm[256]);
    return p + ll[256];
};
// deflate options (nice << 13) | chain
var $3202ecda957ada6e$var$deo = /*#__PURE__*/ new $3202ecda957ada6e$var$u32([
    65540,
    131080,
    131088,
    131104,
    262176,
    1048704,
    1048832,
    2114560,
    2117632
]);
// empty
var $3202ecda957ada6e$var$et = /*#__PURE__*/ new $3202ecda957ada6e$var$u8(0);
// compresses data into a raw DEFLATE buffer
var $3202ecda957ada6e$var$dflt = function(dat, lvl, plvl, pre, post, lst) {
    var s = dat.length;
    var o = new $3202ecda957ada6e$var$u8(pre + s + 5 * (1 + Math.floor(s / 7000)) + post);
    // writing to this writes to the output buffer
    var w = o.subarray(pre, o.length - post);
    var pos = 0;
    if (!lvl || s < 8) for(var i = 0; i <= s; i += 65535){
        // end
        var e = i + 65535;
        if (e < s) // write full block
        pos = $3202ecda957ada6e$var$wfblk(w, pos, dat.subarray(i, e));
        else {
            // write final block
            w[i] = lst;
            pos = $3202ecda957ada6e$var$wfblk(w, pos, dat.subarray(i, s));
        }
    }
    else {
        var opt = $3202ecda957ada6e$var$deo[lvl - 1];
        var n = opt >>> 13, c = opt & 8191;
        var msk_1 = (1 << plvl) - 1;
        //    prev 2-byte val map    curr 2-byte val map
        var prev = new $3202ecda957ada6e$var$u16(32768), head = new $3202ecda957ada6e$var$u16(msk_1 + 1);
        var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
        var hsh = function(i) {
            return (dat[i] ^ dat[i + 1] << bs1_1 ^ dat[i + 2] << bs2_1) & msk_1;
        };
        // 24576 is an arbitrary number of maximum symbols per block
        // 424 buffer for last block
        var syms = new $3202ecda957ada6e$var$u32(25000);
        // length/literal freq   distance freq
        var lf = new $3202ecda957ada6e$var$u16(288), df = new $3202ecda957ada6e$var$u16(32);
        //  l/lcnt  exbits  index  l/lind  waitdx  bitpos
        var lc_1 = 0, eb = 0, i = 0, li = 0, wi = 0, bs = 0;
        for(; i < s; ++i){
            // hash value
            var hv = hsh(i);
            // index mod 32768
            var imod = i & 32767;
            // previous index with this value
            var pimod = head[hv];
            prev[imod] = pimod;
            head[hv] = imod;
            // We always should modify head and prev, but only add symbols if
            // this data is not yet processed ("wait" for wait index)
            if (wi <= i) {
                // bytes remaining
                var rem = s - i;
                if ((lc_1 > 7000 || li > 24576) && rem > 423) {
                    pos = $3202ecda957ada6e$var$wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
                    li = lc_1 = eb = 0, bs = i;
                    for(var j = 0; j < 286; ++j)lf[j] = 0;
                    for(var j = 0; j < 30; ++j)df[j] = 0;
                }
                //  len    dist   chain
                var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
                if (rem > 2 && hv == hsh(i - dif)) {
                    var maxn = Math.min(n, rem) - 1;
                    var maxd = Math.min(32767, i);
                    // max possible length
                    // not capped at dif because decompressors implement "rolling" index population
                    var ml = Math.min(258, rem);
                    while(dif <= maxd && --ch_1 && imod != pimod){
                        if (dat[i + l] == dat[i + l - dif]) {
                            var nl = 0;
                            for(; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl);
                            if (nl > l) {
                                l = nl, d = dif;
                                // break out early when we reach "nice" (we are satisfied enough)
                                if (nl > maxn) break;
                                // now, find the rarest 2-byte sequence within this
                                // length of literals and search for that instead.
                                // Much faster than just using the start
                                var mmd = Math.min(dif, nl - 2);
                                var md = 0;
                                for(var j = 0; j < mmd; ++j){
                                    var ti = i - dif + j + 32768 & 32767;
                                    var pti = prev[ti];
                                    var cd = ti - pti + 32768 & 32767;
                                    if (cd > md) md = cd, pimod = ti;
                                }
                            }
                        }
                        // check the previous match
                        imod = pimod, pimod = prev[imod];
                        dif += imod - pimod + 32768 & 32767;
                    }
                }
                // d will be nonzero only when a match was found
                if (d) {
                    // store both dist and len data in one Uint32
                    // Make sure this is recognized as a len/dist with 28th bit (2^28)
                    syms[li++] = 268435456 | $3202ecda957ada6e$var$revfl[l] << 18 | $3202ecda957ada6e$var$revfd[d];
                    var lin = $3202ecda957ada6e$var$revfl[l] & 31, din = $3202ecda957ada6e$var$revfd[d] & 31;
                    eb += $3202ecda957ada6e$var$fleb[lin] + $3202ecda957ada6e$var$fdeb[din];
                    ++lf[257 + lin];
                    ++df[din];
                    wi = i + l;
                    ++lc_1;
                } else {
                    syms[li++] = dat[i];
                    ++lf[dat[i]];
                }
            }
        }
        pos = $3202ecda957ada6e$var$wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
        // this is the easiest way to avoid needing to maintain state
        if (!lst) pos = $3202ecda957ada6e$var$wfblk(w, pos, $3202ecda957ada6e$var$et);
    }
    return $3202ecda957ada6e$var$slc(o, 0, pre + $3202ecda957ada6e$var$shft(pos) + post);
};
// CRC32 table
var $3202ecda957ada6e$var$crct = /*#__PURE__*/ function() {
    var t = new $3202ecda957ada6e$var$u32(256);
    for(var i = 0; i < 256; ++i){
        var c = i, k = 9;
        while(--k)c = (c & 1 && 3988292384) ^ c >>> 1;
        t[i] = c;
    }
    return t;
}();
// CRC32
var $3202ecda957ada6e$var$crc = function() {
    var c = 4294967295;
    return {
        p: function(d) {
            // closures have awful performance
            var cr = c;
            for(var i = 0; i < d.length; ++i)cr = $3202ecda957ada6e$var$crct[cr & 255 ^ d[i]] ^ cr >>> 8;
            c = cr;
        },
        d: function() {
            return c ^ 4294967295;
        }
    };
};
// Alder32
var $3202ecda957ada6e$var$adler = function() {
    var a = 1, b = 0;
    return {
        p: function(d) {
            // closures have awful performance
            var n = a, m = b;
            var l = d.length;
            for(var i = 0; i != l;){
                var e = Math.min(i + 5552, l);
                for(; i < e; ++i)n += d[i], m += n;
                n %= 65521, m %= 65521;
            }
            a = n, b = m;
        },
        d: function() {
            return (a >>> 8 << 16 | (b & 255) << 8 | b >>> 8) + ((a & 255) << 23) * 2;
        }
    };
};
// deflate with opts
var $3202ecda957ada6e$var$dopt = function(dat, opt, pre, post, st) {
    return $3202ecda957ada6e$var$dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 12 + opt.mem, pre, post, !st);
};
// Walmart object spread
var $3202ecda957ada6e$var$mrg = function(a, b) {
    var o = {
    };
    for(var k in a)o[k] = a[k];
    for(var k in b)o[k] = b[k];
    return o;
};
// worker clone
// This is possibly the craziest part of the entire codebase, despite how simple it may seem.
// The only parameter to this function is a closure that returns an array of variables outside of the function scope.
// We're going to try to figure out the variable names used in the closure as strings because that is crucial for workerization.
// We will return an object mapping of true variable name to value (basically, the current scope as a JS object).
// The reason we can't just use the original variable names is minifiers mangling the toplevel scope.
// This took me three weeks to figure out how to do.
var $3202ecda957ada6e$var$wcln = function(fn, fnStr, td) {
    var dt = fn();
    var st = fn.toString();
    var ks = st.slice(st.indexOf('[') + 1, st.lastIndexOf(']')).replace(/ /g, '').split(',');
    for(var i = 0; i < dt.length; ++i){
        var v = dt[i], k = ks[i];
        if (typeof v == 'function') {
            fnStr += ';' + k + '=';
            var st_1 = v.toString();
            if (v.prototype) {
                // for global objects
                if (st_1.indexOf('[native code]') != -1) {
                    var spInd = st_1.indexOf(' ', 8) + 1;
                    fnStr += st_1.slice(spInd, st_1.indexOf('(', spInd));
                } else {
                    fnStr += st_1;
                    for(var t in v.prototype)fnStr += ';' + k + '.prototype.' + t + '=' + v.prototype[t].toString();
                }
            } else fnStr += st_1;
        } else td[k] = v;
    }
    return [
        fnStr,
        td
    ];
};
var $3202ecda957ada6e$var$ch = [];
// clone bufs
var $3202ecda957ada6e$var$cbfs = function(v) {
    var tl = [];
    for(var k in v)if (v[k] instanceof $3202ecda957ada6e$var$u8 || v[k] instanceof $3202ecda957ada6e$var$u16 || v[k] instanceof $3202ecda957ada6e$var$u32) tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    return tl;
};
// use a worker to execute code
var $3202ecda957ada6e$var$wrkr = function(fns, init, id, cb) {
    var _a;
    if (!$3202ecda957ada6e$var$ch[id]) {
        var fnStr = '', td_1 = {
        }, m = fns.length - 1;
        for(var i = 0; i < m; ++i)_a = $3202ecda957ada6e$var$wcln(fns[i], fnStr, td_1), fnStr = _a[0], td_1 = _a[1];
        $3202ecda957ada6e$var$ch[id] = $3202ecda957ada6e$var$wcln(fns[m], fnStr, td_1);
    }
    var td = $3202ecda957ada6e$var$mrg({
    }, $3202ecda957ada6e$var$ch[id][1]);
    return $3202ecda957ada6e$var$wk($3202ecda957ada6e$var$ch[id][0] + ';onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=' + init.toString() + '}', id, td, $3202ecda957ada6e$var$cbfs(td), cb);
};
// base async inflate fn
var $3202ecda957ada6e$var$bInflt = function() {
    return [
        $3202ecda957ada6e$var$u8,
        $3202ecda957ada6e$var$u16,
        $3202ecda957ada6e$var$u32,
        $3202ecda957ada6e$var$fleb,
        $3202ecda957ada6e$var$fdeb,
        $3202ecda957ada6e$var$clim,
        $3202ecda957ada6e$var$fl,
        $3202ecda957ada6e$var$fd,
        $3202ecda957ada6e$var$flrm,
        $3202ecda957ada6e$var$fdrm,
        $3202ecda957ada6e$var$rev,
        $3202ecda957ada6e$var$hMap,
        $3202ecda957ada6e$var$max,
        $3202ecda957ada6e$var$bits,
        $3202ecda957ada6e$var$bits16,
        $3202ecda957ada6e$var$shft,
        $3202ecda957ada6e$var$slc,
        $3202ecda957ada6e$var$inflt,
        $3202ecda957ada6e$export$90366d8b308ba94a,
        $3202ecda957ada6e$var$pbf,
        $3202ecda957ada6e$var$gu8
    ];
};
var $3202ecda957ada6e$var$bDflt = function() {
    return [
        $3202ecda957ada6e$var$u8,
        $3202ecda957ada6e$var$u16,
        $3202ecda957ada6e$var$u32,
        $3202ecda957ada6e$var$fleb,
        $3202ecda957ada6e$var$fdeb,
        $3202ecda957ada6e$var$clim,
        $3202ecda957ada6e$var$revfl,
        $3202ecda957ada6e$var$revfd,
        $3202ecda957ada6e$var$flm,
        $3202ecda957ada6e$var$flt,
        $3202ecda957ada6e$var$fdm,
        $3202ecda957ada6e$var$fdt,
        $3202ecda957ada6e$var$rev,
        $3202ecda957ada6e$var$deo,
        $3202ecda957ada6e$var$et,
        $3202ecda957ada6e$var$hMap,
        $3202ecda957ada6e$var$wbits,
        $3202ecda957ada6e$var$wbits16,
        $3202ecda957ada6e$var$hTree,
        $3202ecda957ada6e$var$ln,
        $3202ecda957ada6e$var$lc,
        $3202ecda957ada6e$var$clen,
        $3202ecda957ada6e$var$wfblk,
        $3202ecda957ada6e$var$wblk,
        $3202ecda957ada6e$var$shft,
        $3202ecda957ada6e$var$slc,
        $3202ecda957ada6e$var$dflt,
        $3202ecda957ada6e$var$dopt,
        $3202ecda957ada6e$export$21533ff51b8a0b4a,
        $3202ecda957ada6e$var$pbf
    ];
};
// gzip extra
var $3202ecda957ada6e$var$gze = function() {
    return [
        $3202ecda957ada6e$var$gzh,
        $3202ecda957ada6e$var$gzhl,
        $3202ecda957ada6e$var$wbytes,
        $3202ecda957ada6e$var$crc,
        $3202ecda957ada6e$var$crct
    ];
};
// gunzip extra
var $3202ecda957ada6e$var$guze = function() {
    return [
        $3202ecda957ada6e$var$gzs,
        $3202ecda957ada6e$var$gzl
    ];
};
// zlib extra
var $3202ecda957ada6e$var$zle = function() {
    return [
        $3202ecda957ada6e$var$zlh,
        $3202ecda957ada6e$var$wbytes,
        $3202ecda957ada6e$var$adler
    ];
};
// unzlib extra
var $3202ecda957ada6e$var$zule = function() {
    return [
        $3202ecda957ada6e$var$zlv
    ];
};
// post buf
var $3202ecda957ada6e$var$pbf = function(msg) {
    return postMessage(msg, [
        msg.buffer
    ]);
};
// get u8
var $3202ecda957ada6e$var$gu8 = function(o) {
    return o && o.size && new $3202ecda957ada6e$var$u8(o.size);
};
// async helper
var $3202ecda957ada6e$var$cbify = function(dat1, opts, fns, init, id, cb) {
    var w = $3202ecda957ada6e$var$wrkr(fns, init, id, function(err, dat) {
        w.terminate();
        cb(err, dat);
    });
    if (!opts.consume) dat1 = new $3202ecda957ada6e$var$u8(dat1);
    w.postMessage([
        dat1,
        opts
    ], [
        dat1.buffer
    ]);
    return function() {
        w.terminate();
    };
};
// auto stream
var $3202ecda957ada6e$var$astrm = function(strm) {
    strm.ondata = function(dat, final) {
        return postMessage([
            dat,
            final
        ], [
            dat.buffer
        ]);
    };
    return function(ev) {
        return strm.push(ev.data[0], ev.data[1]);
    };
};
// async stream attach
var $3202ecda957ada6e$var$astrmify = function(fns, strm, opts, init, id) {
    var t;
    var w = $3202ecda957ada6e$var$wrkr(fns, init, id, function(err, dat) {
        if (err) w.terminate(), strm.ondata.call(strm, err);
        else {
            if (dat[1]) w.terminate();
            strm.ondata.call(strm, err, dat[0], dat[1]);
        }
    });
    w.postMessage(opts);
    strm.push = function(d, f) {
        if (t) throw 'stream finished';
        if (!strm.ondata) throw 'no stream handler';
        w.postMessage([
            d,
            t = f
        ], [
            d.buffer
        ]);
    };
    strm.terminate = function() {
        w.terminate();
    };
};
// read 2 bytes
var $3202ecda957ada6e$var$b2 = function(d, b) {
    return d[b] | d[b + 1] << 8;
};
// read 4 bytes
var $3202ecda957ada6e$var$b4 = function(d, b) {
    return (d[b] | d[b + 1] << 8 | d[b + 2] << 16) + (d[b + 3] << 23) * 2;
};
// write bytes
var $3202ecda957ada6e$var$wbytes = function(d, b, v) {
    for(; v; ++b)d[b] = v, v >>>= 8;
};
// gzip header
var $3202ecda957ada6e$var$gzh = function(c, o) {
    var fn = o.filename;
    c[0] = 31, c[1] = 139, c[2] = 8, c[8] = o.level < 2 ? 4 : o.level == 9 ? 2 : 0, c[9] = 3; // assume Unix
    if (o.mtime != 0) $3202ecda957ada6e$var$wbytes(c, 4, Math.floor(new Date(o.mtime || Date.now()) / 1000));
    if (fn) {
        c[3] = 8;
        for(var i = 0; i <= fn.length; ++i)c[i + 10] = fn.charCodeAt(i);
    }
};
// gzip footer: -8 to -4 = CRC, -4 to -0 is length
// gzip start
var $3202ecda957ada6e$var$gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8) throw 'invalid gzip data';
    var flg = d[3];
    var st = 10;
    if (flg & 4) st += d[10] | (d[11] << 8) + 2;
    for(var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++]);
    return st + (flg & 2);
};
// gzip length
var $3202ecda957ada6e$var$gzl = function(d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16) + 2 * (d[l - 1] << 23);
};
// gzip header length
var $3202ecda957ada6e$var$gzhl = function(o) {
    return 10 + (o.filename && o.filename.length + 1 || 0);
};
// zlib header
var $3202ecda957ada6e$var$zlh = function(c, o) {
    var lv = o.level, fl = lv == 0 ? 0 : lv < 6 ? 1 : lv == 9 ? 3 : 2;
    c[0] = 120, c[1] = fl << 6 | (fl ? 32 - 2 * fl : 1);
};
// zlib valid
var $3202ecda957ada6e$var$zlv = function(d) {
    if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31) throw 'invalid zlib data';
    if (d[1] & 32) throw 'invalid zlib data: preset dictionaries not supported';
};
function $3202ecda957ada6e$var$AsyncCmpStrm(opts, cb) {
    if (!cb && typeof opts == 'function') cb = opts, opts = {
    };
    this.ondata = cb;
    return opts;
}
// zlib footer: -4 to -0 is Adler32
/**
 * Streaming DEFLATE compression
 */ var $3202ecda957ada6e$export$ae157b6234afe138 = function() {
    function $3202ecda957ada6e$export$ae157b6234afe138(opts, cb) {
        if (!cb && typeof opts == 'function') cb = opts, opts = {
        };
        this.ondata = cb;
        this.o = opts || {
        };
    }
    $3202ecda957ada6e$export$ae157b6234afe138.prototype.p = function(c, f) {
        this.ondata($3202ecda957ada6e$var$dopt(c, this.o, 0, 0, !f), f);
    };
    /**
     * Pushes a chunk to be deflated
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ $3202ecda957ada6e$export$ae157b6234afe138.prototype.push = function(chunk, final) {
        if (this.d) throw 'stream finished';
        if (!this.ondata) throw 'no stream handler';
        this.d = final;
        this.p(chunk, final || false);
    };
    return $3202ecda957ada6e$export$ae157b6234afe138;
}();
/**
 * Asynchronous streaming DEFLATE compression
 */ var $3202ecda957ada6e$export$84e526fabcba03e3 = function() {
    function $3202ecda957ada6e$export$84e526fabcba03e3(opts, cb) {
        $3202ecda957ada6e$var$astrmify([
            $3202ecda957ada6e$var$bDflt,
            function() {
                return [
                    $3202ecda957ada6e$var$astrm,
                    $3202ecda957ada6e$export$ae157b6234afe138
                ];
            }
        ], this, $3202ecda957ada6e$var$AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new $3202ecda957ada6e$export$ae157b6234afe138(ev.data);
            onmessage = $3202ecda957ada6e$var$astrm(strm);
        }, 6);
    }
    return $3202ecda957ada6e$export$84e526fabcba03e3;
}();
function $3202ecda957ada6e$export$2316623ecd1285ab(data, opts, cb) {
    if (!cb) cb = opts, opts = {
    };
    if (typeof cb != 'function') throw 'no callback';
    return $3202ecda957ada6e$var$cbify(data, opts, [
        $3202ecda957ada6e$var$bDflt, 
    ], function(ev) {
        return $3202ecda957ada6e$var$pbf($3202ecda957ada6e$export$21533ff51b8a0b4a(ev.data[0], ev.data[1]));
    }, 0, cb);
}
function $3202ecda957ada6e$export$21533ff51b8a0b4a(data, opts) {
    if (opts === void 0) opts = {
    };
    return $3202ecda957ada6e$var$dopt(data, opts, 0, 0);
}
/**
 * Streaming DEFLATE decompression
 */ var $3202ecda957ada6e$export$d1de70a877d6e43c = function() {
    /**
     * Creates an inflation stream
     * @param cb The callback to call whenever data is inflated
     */ function $3202ecda957ada6e$export$d1de70a877d6e43c(cb) {
        this.s = {
        };
        this.p = new $3202ecda957ada6e$var$u8(0);
        this.ondata = cb;
    }
    $3202ecda957ada6e$export$d1de70a877d6e43c.prototype.e = function(c) {
        if (this.d) throw 'stream finished';
        if (!this.ondata) throw 'no stream handler';
        var l = this.p.length;
        var n = new $3202ecda957ada6e$var$u8(l + c.length);
        n.set(this.p), n.set(c, l), this.p = n;
    };
    $3202ecda957ada6e$export$d1de70a877d6e43c.prototype.c = function(final) {
        this.d = this.s.i = final || false;
        var bts = this.s.b;
        var dt = $3202ecda957ada6e$var$inflt(this.p, this.o, this.s);
        this.ondata($3202ecda957ada6e$var$slc(dt, bts, this.s.b), this.d);
        this.o = $3202ecda957ada6e$var$slc(dt, this.s.b - 32768), this.s.b = this.o.length;
        this.p = $3202ecda957ada6e$var$slc(this.p, this.s.p / 8 >> 0), this.s.p &= 7;
    };
    /**
     * Pushes a chunk to be inflated
     * @param chunk The chunk to push
     * @param final Whether this is the final chunk
     */ $3202ecda957ada6e$export$d1de70a877d6e43c.prototype.push = function(chunk, final) {
        this.e(chunk), this.c(final);
    };
    return $3202ecda957ada6e$export$d1de70a877d6e43c;
}();
/**
 * Asynchronous streaming DEFLATE decompression
 */ var $3202ecda957ada6e$export$fff8358d6dbaa9cc = function() {
    /**
     * Creates an asynchronous inflation stream
     * @param cb The callback to call whenever data is deflated
     */ function $3202ecda957ada6e$export$fff8358d6dbaa9cc(cb) {
        this.ondata = cb;
        $3202ecda957ada6e$var$astrmify([
            $3202ecda957ada6e$var$bInflt,
            function() {
                return [
                    $3202ecda957ada6e$var$astrm,
                    $3202ecda957ada6e$export$d1de70a877d6e43c
                ];
            }
        ], this, 0, function() {
            var strm = new $3202ecda957ada6e$export$d1de70a877d6e43c();
            onmessage = $3202ecda957ada6e$var$astrm(strm);
        }, 7);
    }
    return $3202ecda957ada6e$export$fff8358d6dbaa9cc;
}();
function $3202ecda957ada6e$export$cae1ce83fe4a1782(data, opts, cb) {
    if (!cb) cb = opts, opts = {
    };
    if (typeof cb != 'function') throw 'no callback';
    return $3202ecda957ada6e$var$cbify(data, opts, [
        $3202ecda957ada6e$var$bInflt
    ], function(ev) {
        return $3202ecda957ada6e$var$pbf($3202ecda957ada6e$export$90366d8b308ba94a(ev.data[0], $3202ecda957ada6e$var$gu8(ev.data[1])));
    }, 1, cb);
}
function $3202ecda957ada6e$export$90366d8b308ba94a(data, out) {
    return $3202ecda957ada6e$var$inflt(data, out);
}
// before you yell at me for not just using extends, my reason is that TS inheritance is hard to workerize.
/**
 * Streaming GZIP compression
 */ var $3202ecda957ada6e$export$8e4b66d280bf8342 = function() {
    function $3202ecda957ada6e$export$8e4b66d280bf8342(opts, cb) {
        this.c = $3202ecda957ada6e$var$crc();
        this.l = 0;
        this.v = 1;
        $3202ecda957ada6e$export$ae157b6234afe138.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be GZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ $3202ecda957ada6e$export$8e4b66d280bf8342.prototype.push = function(chunk, final) {
        $3202ecda957ada6e$export$ae157b6234afe138.prototype.push.call(this, chunk, final);
    };
    $3202ecda957ada6e$export$8e4b66d280bf8342.prototype.p = function(c, f) {
        this.c.p(c);
        this.l += c.length;
        var raw = $3202ecda957ada6e$var$dopt(c, this.o, this.v && $3202ecda957ada6e$var$gzhl(this.o), f && 8, !f);
        if (this.v) $3202ecda957ada6e$var$gzh(raw, this.o), this.v = 0;
        if (f) $3202ecda957ada6e$var$wbytes(raw, raw.length - 8, this.c.d()), $3202ecda957ada6e$var$wbytes(raw, raw.length - 4, this.l);
        this.ondata(raw, f);
    };
    return $3202ecda957ada6e$export$8e4b66d280bf8342;
}();
/**
 * Asynchronous streaming GZIP compression
 */ var $3202ecda957ada6e$export$b4c75ae96cdf708b = function() {
    function $3202ecda957ada6e$export$b4c75ae96cdf708b(opts, cb) {
        $3202ecda957ada6e$var$astrmify([
            $3202ecda957ada6e$var$bDflt,
            $3202ecda957ada6e$var$gze,
            function() {
                return [
                    $3202ecda957ada6e$var$astrm,
                    $3202ecda957ada6e$export$ae157b6234afe138,
                    $3202ecda957ada6e$export$8e4b66d280bf8342
                ];
            }
        ], this, $3202ecda957ada6e$var$AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new $3202ecda957ada6e$export$8e4b66d280bf8342(ev.data);
            onmessage = $3202ecda957ada6e$var$astrm(strm);
        }, 8);
    }
    return $3202ecda957ada6e$export$b4c75ae96cdf708b;
}();
function $3202ecda957ada6e$export$69f0ea7cf3a331a8(data, opts, cb) {
    if (!cb) cb = opts, opts = {
    };
    if (typeof cb != 'function') throw 'no callback';
    return $3202ecda957ada6e$var$cbify(data, opts, [
        $3202ecda957ada6e$var$bDflt,
        $3202ecda957ada6e$var$gze,
        function() {
            return [
                $3202ecda957ada6e$export$3d616c3fb3e15483
            ];
        }
    ], function(ev) {
        return $3202ecda957ada6e$var$pbf($3202ecda957ada6e$export$3d616c3fb3e15483(ev.data[0], ev.data[1]));
    }, 2, cb);
}
function $3202ecda957ada6e$export$3d616c3fb3e15483(data, opts) {
    if (opts === void 0) opts = {
    };
    var c = $3202ecda957ada6e$var$crc(), l = data.length;
    c.p(data);
    var d = $3202ecda957ada6e$var$dopt(data, opts, $3202ecda957ada6e$var$gzhl(opts), 8), s = d.length;
    return $3202ecda957ada6e$var$gzh(d, opts), $3202ecda957ada6e$var$wbytes(d, s - 8, c.d()), $3202ecda957ada6e$var$wbytes(d, s - 4, l), d;
}
/**
 * Streaming GZIP decompression
 */ var $3202ecda957ada6e$export$4cb607de6db70415 = function() {
    /**
     * Creates a GUNZIP stream
     * @param cb The callback to call whenever data is inflated
     */ function $3202ecda957ada6e$export$4cb607de6db70415(cb) {
        this.v = 1;
        $3202ecda957ada6e$export$d1de70a877d6e43c.call(this, cb);
    }
    /**
     * Pushes a chunk to be GUNZIPped
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ $3202ecda957ada6e$export$4cb607de6db70415.prototype.push = function(chunk, final) {
        $3202ecda957ada6e$export$d1de70a877d6e43c.prototype.e.call(this, chunk);
        if (this.v) {
            var s = $3202ecda957ada6e$var$gzs(this.p);
            if (s >= this.p.length && !final) return;
            this.p = this.p.subarray(s), this.v = 0;
        }
        if (final) {
            if (this.p.length < 8) throw 'invalid gzip stream';
            this.p = this.p.subarray(0, -8);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        $3202ecda957ada6e$export$d1de70a877d6e43c.prototype.c.call(this, final);
    };
    return $3202ecda957ada6e$export$4cb607de6db70415;
}();
/**
 * Asynchronous streaming GZIP decompression
 */ var $3202ecda957ada6e$export$d5adcdd968132151 = function() {
    /**
     * Creates an asynchronous GUNZIP stream
     * @param cb The callback to call whenever data is deflated
     */ function $3202ecda957ada6e$export$d5adcdd968132151(cb) {
        this.ondata = cb;
        $3202ecda957ada6e$var$astrmify([
            $3202ecda957ada6e$var$bInflt,
            $3202ecda957ada6e$var$guze,
            function() {
                return [
                    $3202ecda957ada6e$var$astrm,
                    $3202ecda957ada6e$export$d1de70a877d6e43c,
                    $3202ecda957ada6e$export$4cb607de6db70415
                ];
            }
        ], this, 0, function() {
            var strm = new $3202ecda957ada6e$export$4cb607de6db70415();
            onmessage = $3202ecda957ada6e$var$astrm(strm);
        }, 9);
    }
    return $3202ecda957ada6e$export$d5adcdd968132151;
}();
function $3202ecda957ada6e$export$b6df3e950734d697(data, opts, cb) {
    if (!cb) cb = opts, opts = {
    };
    if (typeof cb != 'function') throw 'no callback';
    return $3202ecda957ada6e$var$cbify(data, opts, [
        $3202ecda957ada6e$var$bInflt,
        $3202ecda957ada6e$var$guze,
        function() {
            return [
                $3202ecda957ada6e$export$c80456f7aaba691c
            ];
        }
    ], function(ev) {
        return $3202ecda957ada6e$var$pbf($3202ecda957ada6e$export$c80456f7aaba691c(ev.data[0]));
    }, 3, cb);
}
function $3202ecda957ada6e$export$c80456f7aaba691c(data, out) {
    return $3202ecda957ada6e$var$inflt(data.subarray($3202ecda957ada6e$var$gzs(data), -8), out || new $3202ecda957ada6e$var$u8($3202ecda957ada6e$var$gzl(data)));
}
/**
 * Streaming Zlib compression
 */ var $3202ecda957ada6e$export$4187ccf2467013b9 = function() {
    function $3202ecda957ada6e$export$4187ccf2467013b9(opts, cb) {
        this.c = $3202ecda957ada6e$var$adler();
        this.v = 1;
        $3202ecda957ada6e$export$ae157b6234afe138.call(this, opts, cb);
    }
    /**
     * Pushes a chunk to be zlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ $3202ecda957ada6e$export$4187ccf2467013b9.prototype.push = function(chunk, final) {
        $3202ecda957ada6e$export$ae157b6234afe138.prototype.push.call(this, chunk, final);
    };
    $3202ecda957ada6e$export$4187ccf2467013b9.prototype.p = function(c, f) {
        this.c.p(c);
        var raw = $3202ecda957ada6e$var$dopt(c, this.o, this.v && 2, f && 4, !f);
        if (this.v) $3202ecda957ada6e$var$zlh(raw, this.o), this.v = 0;
        if (f) $3202ecda957ada6e$var$wbytes(raw, raw.length - 4, this.c.d());
        this.ondata(raw, f);
    };
    return $3202ecda957ada6e$export$4187ccf2467013b9;
}();
/**
 * Asynchronous streaming Zlib compression
 */ var $3202ecda957ada6e$export$bedbe3a2c2136490 = function() {
    function $3202ecda957ada6e$export$bedbe3a2c2136490(opts, cb) {
        $3202ecda957ada6e$var$astrmify([
            $3202ecda957ada6e$var$bDflt,
            $3202ecda957ada6e$var$zle,
            function() {
                return [
                    $3202ecda957ada6e$var$astrm,
                    $3202ecda957ada6e$export$ae157b6234afe138,
                    $3202ecda957ada6e$export$4187ccf2467013b9
                ];
            }
        ], this, $3202ecda957ada6e$var$AsyncCmpStrm.call(this, opts, cb), function(ev) {
            var strm = new $3202ecda957ada6e$export$4187ccf2467013b9(ev.data);
            onmessage = $3202ecda957ada6e$var$astrm(strm);
        }, 10);
    }
    return $3202ecda957ada6e$export$bedbe3a2c2136490;
}();
function $3202ecda957ada6e$export$925212de7058410b(data, opts, cb) {
    if (!cb) cb = opts, opts = {
    };
    if (typeof cb != 'function') throw 'no callback';
    return $3202ecda957ada6e$var$cbify(data, opts, [
        $3202ecda957ada6e$var$bDflt,
        $3202ecda957ada6e$var$zle,
        function() {
            return [
                $3202ecda957ada6e$export$f87121a6d50aff25
            ];
        }
    ], function(ev) {
        return $3202ecda957ada6e$var$pbf($3202ecda957ada6e$export$f87121a6d50aff25(ev.data[0], ev.data[1]));
    }, 4, cb);
}
function $3202ecda957ada6e$export$f87121a6d50aff25(data, opts) {
    if (opts === void 0) opts = {
    };
    var a = $3202ecda957ada6e$var$adler();
    a.p(data);
    var d = $3202ecda957ada6e$var$dopt(data, opts, 2, 4);
    return $3202ecda957ada6e$var$zlh(d, opts), $3202ecda957ada6e$var$wbytes(d, d.length - 4, a.d()), d;
}
/**
 * Streaming Zlib decompression
 */ var $3202ecda957ada6e$export$af2424f875ff1b17 = function() {
    /**
     * Creates a Zlib decompression stream
     * @param cb The callback to call whenever data is inflated
     */ function $3202ecda957ada6e$export$af2424f875ff1b17(cb) {
        this.v = 1;
        $3202ecda957ada6e$export$d1de70a877d6e43c.call(this, cb);
    }
    /**
     * Pushes a chunk to be unzlibbed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ $3202ecda957ada6e$export$af2424f875ff1b17.prototype.push = function(chunk, final) {
        $3202ecda957ada6e$export$d1de70a877d6e43c.prototype.e.call(this, chunk);
        if (this.v) {
            if (this.p.length < 2 && !final) return;
            this.p = this.p.subarray(2), this.v = 0;
        }
        if (final) {
            if (this.p.length < 4) throw 'invalid zlib stream';
            this.p = this.p.subarray(0, -4);
        }
        // necessary to prevent TS from using the closure value
        // This allows for workerization to function correctly
        $3202ecda957ada6e$export$d1de70a877d6e43c.prototype.c.call(this, final);
    };
    return $3202ecda957ada6e$export$af2424f875ff1b17;
}();
/**
 * Asynchronous streaming Zlib decompression
 */ var $3202ecda957ada6e$export$cf6668790220dcad = function() {
    /**
     * Creates an asynchronous Zlib decompression stream
     * @param cb The callback to call whenever data is deflated
     */ function $3202ecda957ada6e$export$cf6668790220dcad(cb) {
        this.ondata = cb;
        $3202ecda957ada6e$var$astrmify([
            $3202ecda957ada6e$var$bInflt,
            $3202ecda957ada6e$var$zule,
            function() {
                return [
                    $3202ecda957ada6e$var$astrm,
                    $3202ecda957ada6e$export$d1de70a877d6e43c,
                    $3202ecda957ada6e$export$af2424f875ff1b17
                ];
            }
        ], this, 0, function() {
            var strm = new $3202ecda957ada6e$export$af2424f875ff1b17();
            onmessage = $3202ecda957ada6e$var$astrm(strm);
        }, 11);
    }
    return $3202ecda957ada6e$export$cf6668790220dcad;
}();
function $3202ecda957ada6e$export$ca7cbb494e731274(data, opts, cb) {
    if (!cb) cb = opts, opts = {
    };
    if (typeof cb != 'function') throw 'no callback';
    return $3202ecda957ada6e$var$cbify(data, opts, [
        $3202ecda957ada6e$var$bInflt,
        $3202ecda957ada6e$var$zule,
        function() {
            return [
                $3202ecda957ada6e$export$9ec8134f0f1b9fc6
            ];
        }
    ], function(ev) {
        return $3202ecda957ada6e$var$pbf($3202ecda957ada6e$export$9ec8134f0f1b9fc6(ev.data[0], $3202ecda957ada6e$var$gu8(ev.data[1])));
    }, 5, cb);
}
function $3202ecda957ada6e$export$9ec8134f0f1b9fc6(data, out) {
    return $3202ecda957ada6e$var$inflt(($3202ecda957ada6e$var$zlv(data), data.subarray(2, -4)), out);
}
/**
 * Streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var $3202ecda957ada6e$export$578fe199ef655b76 = function() {
    /**
     * Creates a decompression stream
     * @param cb The callback to call whenever data is decompressed
     */ function $3202ecda957ada6e$export$578fe199ef655b76(cb) {
        this.G = $3202ecda957ada6e$export$4cb607de6db70415;
        this.I = $3202ecda957ada6e$export$d1de70a877d6e43c;
        this.Z = $3202ecda957ada6e$export$af2424f875ff1b17;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ $3202ecda957ada6e$export$578fe199ef655b76.prototype.push = function(chunk, final) {
        if (!this.ondata) throw 'no stream handler';
        if (!this.s) {
            if (this.p && this.p.length) {
                var n = new $3202ecda957ada6e$var$u8(this.p.length + chunk.length);
                n.set(this.p), n.set(chunk, this.p.length);
            } else this.p = chunk;
            if (this.p.length > 2) {
                var _this_1 = this;
                var cb = function() {
                    _this_1.ondata.apply(_this_1, arguments);
                };
                this.s = this.p[0] == 31 && this.p[1] == 139 && this.p[2] == 8 ? new this.G(cb) : (this.p[0] & 15) != 8 || this.p[0] >> 4 > 7 || (this.p[0] << 8 | this.p[1]) % 31 ? new this.I(cb) : new this.Z(cb);
                this.s.push(this.p, final);
                this.p = null;
            }
        } else this.s.push(chunk, final);
    };
    return $3202ecda957ada6e$export$578fe199ef655b76;
}();
/**
 * Asynchronous streaming GZIP, Zlib, or raw DEFLATE decompression
 */ var $3202ecda957ada6e$export$ae2c1d81988d4b43 = function() {
    /**
   * Creates an asynchronous decompression stream
   * @param cb The callback to call whenever data is decompressed
   */ function $3202ecda957ada6e$export$ae2c1d81988d4b43(cb) {
        this.G = $3202ecda957ada6e$export$d5adcdd968132151;
        this.I = $3202ecda957ada6e$export$fff8358d6dbaa9cc;
        this.Z = $3202ecda957ada6e$export$cf6668790220dcad;
        this.ondata = cb;
    }
    /**
     * Pushes a chunk to be decompressed
     * @param chunk The chunk to push
     * @param final Whether this is the last chunk
     */ $3202ecda957ada6e$export$ae2c1d81988d4b43.prototype.push = function(chunk, final) {
        $3202ecda957ada6e$export$578fe199ef655b76.prototype.push.call(this, chunk, final);
    };
    return $3202ecda957ada6e$export$ae2c1d81988d4b43;
}();
function $3202ecda957ada6e$export$678d868aab8fb3c7(data, opts, cb) {
    if (!cb) cb = opts, opts = {
    };
    if (typeof cb != 'function') throw 'no callback';
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? $3202ecda957ada6e$export$b6df3e950734d697(data, opts, cb) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? $3202ecda957ada6e$export$cae1ce83fe4a1782(data, opts, cb) : $3202ecda957ada6e$export$ca7cbb494e731274(data, opts, cb);
}
function $3202ecda957ada6e$export$c4bdbbbc9a4faabe(data, out) {
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? $3202ecda957ada6e$export$c80456f7aaba691c(data, out) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? $3202ecda957ada6e$export$90366d8b308ba94a(data, out) : $3202ecda957ada6e$export$9ec8134f0f1b9fc6(data, out);
}
// flatten a directory structure
var $3202ecda957ada6e$var$fltn = function(d, p, t, o) {
    for(var k in d){
        var val = d[k], n = p + k;
        if (val instanceof $3202ecda957ada6e$var$u8) t[n] = [
            val,
            o
        ];
        else if (Array.isArray(val)) t[n] = [
            val[0],
            $3202ecda957ada6e$var$mrg(o, val[1])
        ];
        else $3202ecda957ada6e$var$fltn(val, n + '/', t, o);
    }
};
function $3202ecda957ada6e$export$366b39a6daa8ed7a(str, latin1) {
    var l = str.length;
    if (!latin1 && typeof TextEncoder != 'undefined') return new TextEncoder().encode(str);
    var ar = new $3202ecda957ada6e$var$u8(str.length + (str.length >>> 1));
    var ai = 0;
    var w = function(v) {
        ar[ai++] = v;
    };
    for(var i = 0; i < l; ++i){
        if (ai + 5 > ar.length) {
            var n = new $3202ecda957ada6e$var$u8(ai + 8 + (l - i << 1));
            n.set(ar);
            ar = n;
        }
        var c = str.charCodeAt(i);
        if (c < 128 || latin1) w(c);
        else if (c < 2048) w(192 | c >>> 6), w(128 | c & 63);
        else if (c > 55295 && c < 57344) c = 65536 + (c & 1047552) | str.charCodeAt(++i) & 1023, w(240 | c >>> 18), w(128 | c >>> 12 & 63), w(128 | c >>> 6 & 63), w(128 | c & 63);
        else w(224 | c >>> 12), w(128 | c >>> 6 & 63), w(128 | c & 63);
    }
    return $3202ecda957ada6e$var$slc(ar, 0, ai);
}
function $3202ecda957ada6e$export$adb211f8cb999894(dat, latin1) {
    var r = '';
    if (!latin1 && typeof TextDecoder != 'undefined') return new TextDecoder().decode(dat);
    for(var i = 0; i < dat.length;){
        var c = dat[i++];
        if (c < 128 || latin1) r += String.fromCharCode(c);
        else if (c < 224) r += String.fromCharCode((c & 31) << 6 | dat[i++] & 63);
        else if (c < 240) r += String.fromCharCode((c & 15) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63);
        else c = ((c & 15) << 18 | (dat[i++] & 63) << 12 | (dat[i++] & 63) << 6 | dat[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    }
    return r;
}
// skip local zip header
var $3202ecda957ada6e$var$slzh = function(d, b) {
    return b + 30 + $3202ecda957ada6e$var$b2(d, b + 26) + $3202ecda957ada6e$var$b2(d, b + 28);
};
// read zip header
var $3202ecda957ada6e$var$zh = function(d, b, z) {
    var fnl = $3202ecda957ada6e$var$b2(d, b + 28), fn = $3202ecda957ada6e$export$adb211f8cb999894(d.subarray(b + 46, b + 46 + fnl), !($3202ecda957ada6e$var$b2(d, b + 8) & 2048)), es = b + 46 + fnl;
    var _a = z ? $3202ecda957ada6e$var$z64e(d, es) : [
        $3202ecda957ada6e$var$b4(d, b + 20),
        $3202ecda957ada6e$var$b4(d, b + 24),
        $3202ecda957ada6e$var$b4(d, b + 42)
    ], sc = _a[0], su = _a[1], off = _a[2];
    return [
        $3202ecda957ada6e$var$b2(d, b + 10),
        sc,
        su,
        fn,
        es + $3202ecda957ada6e$var$b2(d, b + 30) + $3202ecda957ada6e$var$b2(d, b + 32),
        off
    ];
};
// read zip64 extra field
var $3202ecda957ada6e$var$z64e = function(d, b) {
    for(; $3202ecda957ada6e$var$b2(d, b) != 1; b += 4 + $3202ecda957ada6e$var$b2(d, b + 2));
    return [
        $3202ecda957ada6e$var$b4(d, b + 12),
        $3202ecda957ada6e$var$b4(d, b + 4),
        $3202ecda957ada6e$var$b4(d, b + 20)
    ];
};
// write zip header
var $3202ecda957ada6e$var$wzh = function(d, b, c, cmp, su, fn, u, o, ce, t) {
    var fl = fn.length, l = cmp.length;
    $3202ecda957ada6e$var$wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
    if (ce != null) d[b] = 20, b += 2;
    d[b] = 20, b += 2; // spec compliance? what's that?
    d[b++] = t == 8 && (o.level == 1 ? 6 : o.level < 6 ? 4 : o.level == 9 ? 2 : 0), d[b++] = u && 8;
    d[b] = t, b += 2;
    var dt = new Date(o.mtime || Date.now()), y = dt.getFullYear() - 1980;
    if (y < 0 || y > 119) throw 'date not in range 1980-2099';
    $3202ecda957ada6e$var$wbytes(d, b, (y << 24) * 2 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >>> 1);
    b += 4;
    $3202ecda957ada6e$var$wbytes(d, b, c);
    $3202ecda957ada6e$var$wbytes(d, b + 4, l);
    $3202ecda957ada6e$var$wbytes(d, b + 8, su);
    $3202ecda957ada6e$var$wbytes(d, b + 12, fl), b += 16; // skip extra field, comment
    if (ce != null) $3202ecda957ada6e$var$wbytes(d, b += 10, ce), b += 4;
    d.set(fn, b);
    b += fl;
    if (ce == null) d.set(cmp, b);
};
// write zip footer (end of central directory)
var $3202ecda957ada6e$var$wzf = function(o, b, c, d, e) {
    $3202ecda957ada6e$var$wbytes(o, b, 101010256); // skip disk
    $3202ecda957ada6e$var$wbytes(o, b + 8, c);
    $3202ecda957ada6e$var$wbytes(o, b + 10, c);
    $3202ecda957ada6e$var$wbytes(o, b + 12, d);
    $3202ecda957ada6e$var$wbytes(o, b + 16, e);
};
function $3202ecda957ada6e$export$8901015135f2fb22(data, opts, cb) {
    if (!cb) cb = opts, opts = {
    };
    if (typeof cb != 'function') throw 'no callback';
    var r = {
    };
    $3202ecda957ada6e$var$fltn(data, '', r, opts);
    var k = Object.keys(r);
    var lft = k.length, o = 0, tot = 0;
    var slft = lft, files = new Array(lft);
    var term = [];
    var tAll = function() {
        for(var i = 0; i < term.length; ++i)term[i]();
    };
    var cbf = function() {
        var out = new $3202ecda957ada6e$var$u8(tot + 22), oe = o, cdl = tot - o;
        tot = 0;
        for(var i = 0; i < slft; ++i){
            var f = files[i];
            try {
                $3202ecda957ada6e$var$wzh(out, tot, f.c, f.d, f.m, f.n, f.u, f.p, null, f.t);
                $3202ecda957ada6e$var$wzh(out, o, f.c, f.d, f.m, f.n, f.u, f.p, tot, f.t), o += 46 + f.n.length, tot += 30 + f.n.length + f.d.length;
            } catch (e) {
                return cb(e, null);
            }
        }
        $3202ecda957ada6e$var$wzf(out, o, files.length, cdl, oe);
        cb(null, out);
    };
    if (!lft) cbf();
    var _loop_1 = function(i) {
        var fn = k[i];
        var _a = r[fn], file = _a[0], p = _a[1];
        var c = $3202ecda957ada6e$var$crc(), m = file.length;
        c.p(file);
        var n = $3202ecda957ada6e$export$366b39a6daa8ed7a(fn), s = n.length;
        var t = p.level == 0 ? 0 : 8;
        var cbl = function(e, d) {
            if (e) {
                tAll();
                cb(e, null);
            } else {
                var l = d.length;
                files[i] = {
                    t: t,
                    d: d,
                    m: m,
                    c: c.d(),
                    u: fn.length != l,
                    n: n,
                    p: p
                };
                o += 30 + s + l;
                tot += 76 + 2 * s + l;
                if (!--lft) cbf();
            }
        };
        if (n.length > 65535) cbl('filename too long', null);
        if (!t) cbl(null, file);
        else if (m < 160000) try {
            cbl(null, $3202ecda957ada6e$export$21533ff51b8a0b4a(file, p));
        } catch (e) {
            cbl(e, null);
        }
        else term.push($3202ecda957ada6e$export$2316623ecd1285ab(file, p, cbl));
    };
    // Cannot use lft because it can decrease
    for(var i1 = 0; i1 < slft; ++i1)_loop_1(i1);
    return tAll;
}
function $3202ecda957ada6e$export$eb1654f146d54eb3(data, opts) {
    if (opts === void 0) opts = {
    };
    var r = {
    };
    var files = [];
    $3202ecda957ada6e$var$fltn(data, '', r, opts);
    var o = 0;
    var tot = 0;
    for(var fn in r){
        var _a = r[fn], file = _a[0], p = _a[1];
        var t = p.level == 0 ? 0 : 8;
        var n = $3202ecda957ada6e$export$366b39a6daa8ed7a(fn), s = n.length;
        if (n.length > 65535) throw 'filename too long';
        var d = t ? $3202ecda957ada6e$export$21533ff51b8a0b4a(file, p) : file, l = d.length;
        var c = $3202ecda957ada6e$var$crc();
        c.p(file);
        files.push({
            t: t,
            d: d,
            m: file.length,
            c: c.d(),
            u: fn.length != s,
            n: n,
            o: o,
            p: p
        });
        o += 30 + s + l;
        tot += 76 + 2 * s + l;
    }
    var out = new $3202ecda957ada6e$var$u8(tot + 22), oe = o, cdl = tot - o;
    for(var i = 0; i < files.length; ++i){
        var f = files[i];
        $3202ecda957ada6e$var$wzh(out, f.o, f.c, f.d, f.m, f.n, f.u, f.p, null, f.t);
        $3202ecda957ada6e$var$wzh(out, o, f.c, f.d, f.m, f.n, f.u, f.p, f.o, f.t), o += 46 + f.n.length;
    }
    $3202ecda957ada6e$var$wzf(out, o, files.length, cdl, oe);
    return out;
}
function $3202ecda957ada6e$export$23c8d3f8757cab88(data, cb) {
    if (typeof cb != 'function') throw 'no callback';
    var term = [];
    var tAll = function() {
        for(var i = 0; i < term.length; ++i)term[i]();
    };
    var files = {
    };
    var e1 = data.length - 22;
    for(; $3202ecda957ada6e$var$b4(data, e1) != 101010256; --e1)if (!e1 || data.length - e1 > 65558) {
        cb('invalid zip file', null);
        return;
    }
    var lft = $3202ecda957ada6e$var$b2(data, e1 + 8);
    if (!lft) cb(null, {
    });
    var c = lft;
    var o = $3202ecda957ada6e$var$b4(data, e1 + 16);
    var z = o == 4294967295;
    if (z) {
        e1 = $3202ecda957ada6e$var$b4(data, e1 - 12);
        if ($3202ecda957ada6e$var$b4(data, e1) != 101075792) throw 'invalid zip file';
        c = lft = $3202ecda957ada6e$var$b4(data, e1 + 32);
        o = $3202ecda957ada6e$var$b4(data, e1 + 48);
    }
    var _loop_2 = function(i) {
        var _a = $3202ecda957ada6e$var$zh(data, o, z), c_1 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = $3202ecda957ada6e$var$slzh(data, off);
        o = no;
        var cbl = function(e, d) {
            if (e) {
                tAll();
                cb(e, null);
            } else {
                files[fn] = d;
                if (!--lft) cb(null, files);
            }
        };
        if (!c_1) cbl(null, $3202ecda957ada6e$var$slc(data, b, b + sc));
        else if (c_1 == 8) {
            var infl = data.subarray(b, b + sc);
            if (sc < 320000) try {
                cbl(null, $3202ecda957ada6e$export$90366d8b308ba94a(infl, new $3202ecda957ada6e$var$u8(su)));
            } catch (e) {
                cbl(e, null);
            }
            else term.push($3202ecda957ada6e$export$cae1ce83fe4a1782(infl, {
                size: su
            }, cbl));
        } else cbl('unknown compression type ' + c_1, null);
    };
    for(var i2 = 0; i2 < c; ++i2)_loop_2(i2);
    return tAll;
}
function $3202ecda957ada6e$export$c757709326bb5901(data) {
    var files = {
    };
    var e = data.length - 22;
    for(; $3202ecda957ada6e$var$b4(data, e) != 101010256; --e){
        if (!e || data.length - e > 65558) throw 'invalid zip file';
    }
    var c = $3202ecda957ada6e$var$b2(data, e + 8);
    if (!c) return {
    };
    var o = $3202ecda957ada6e$var$b4(data, e + 16);
    var z = o == 4294967295;
    if (z) {
        e = $3202ecda957ada6e$var$b4(data, e - 12);
        if ($3202ecda957ada6e$var$b4(data, e) != 101075792) throw 'invalid zip file';
        c = $3202ecda957ada6e$var$b4(data, e + 32);
        o = $3202ecda957ada6e$var$b4(data, e + 48);
    }
    for(var i = 0; i < c; ++i){
        var _a = $3202ecda957ada6e$var$zh(data, o, z), c_2 = _a[0], sc = _a[1], su = _a[2], fn = _a[3], no = _a[4], off = _a[5], b = $3202ecda957ada6e$var$slzh(data, off);
        o = no;
        if (!c_2) files[fn] = $3202ecda957ada6e$var$slc(data, b, b + sc);
        else if (c_2 == 8) files[fn] = $3202ecda957ada6e$export$90366d8b308ba94a(data.subarray(b, b + sc), new $3202ecda957ada6e$var$u8(su));
        else throw 'unknown compression type ' + c_2;
    }
    return files;
}


var $ffb17689dbc03ee8$var$n = function() {
    return "undefined" != typeof window ? window : "undefined" != typeof $parcel$global ? $parcel$global : "undefined" != typeof self ? self : this;
}();
function $ffb17689dbc03ee8$var$i() {
    $ffb17689dbc03ee8$var$n.console && "function" == typeof $ffb17689dbc03ee8$var$n.console.log && $ffb17689dbc03ee8$var$n.console.log.apply($ffb17689dbc03ee8$var$n.console, arguments);
}
var $ffb17689dbc03ee8$var$a = {
    log: $ffb17689dbc03ee8$var$i,
    warn: function(t) {
        $ffb17689dbc03ee8$var$n.console && ("function" == typeof $ffb17689dbc03ee8$var$n.console.warn ? $ffb17689dbc03ee8$var$n.console.warn.apply($ffb17689dbc03ee8$var$n.console, arguments) : $ffb17689dbc03ee8$var$i.call(null, arguments));
    },
    error: function(t) {
        $ffb17689dbc03ee8$var$n.console && ("function" == typeof $ffb17689dbc03ee8$var$n.console.error ? $ffb17689dbc03ee8$var$n.console.error.apply($ffb17689dbc03ee8$var$n.console, arguments) : $ffb17689dbc03ee8$var$i(t));
    }
};
function $ffb17689dbc03ee8$var$o(t, e, r) {
    var n = new XMLHttpRequest;
    n.open("GET", t), n.responseType = "blob", n.onload = function() {
        $ffb17689dbc03ee8$var$l(n.response, e, r);
    }, n.onerror = function() {
        $ffb17689dbc03ee8$var$a.error("could not download file");
    }, n.send();
}
function $ffb17689dbc03ee8$var$s(t) {
    var e = new XMLHttpRequest;
    e.open("HEAD", t, !1);
    try {
        e.send();
    } catch (t1) {
    }
    return e.status >= 200 && e.status <= 299;
}
function $ffb17689dbc03ee8$var$c(t) {
    try {
        t.dispatchEvent(new MouseEvent("click"));
    } catch (r) {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e);
    }
}
var $ffb17689dbc03ee8$var$u, $ffb17689dbc03ee8$var$h, $ffb17689dbc03ee8$var$l = $ffb17689dbc03ee8$var$n.saveAs || ("object" !== ("undefined" == typeof window ? "undefined" : (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(window)) || window !== $ffb17689dbc03ee8$var$n ? function() {
} : "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype ? function(t, e, r) {
    var i = $ffb17689dbc03ee8$var$n.URL || $ffb17689dbc03ee8$var$n.webkitURL, a = document.createElement("a");
    e = e || t.name || "download", a.download = e, a.rel = "noopener", "string" == typeof t ? (a.href = t, a.origin !== location.origin ? $ffb17689dbc03ee8$var$s(a.href) ? $ffb17689dbc03ee8$var$o(t, e, r) : $ffb17689dbc03ee8$var$c(a, a.target = "_blank") : $ffb17689dbc03ee8$var$c(a)) : (a.href = i.createObjectURL(t), setTimeout(function() {
        i.revokeObjectURL(a.href);
    }, 40000), setTimeout(function() {
        $ffb17689dbc03ee8$var$c(a);
    }, 0));
} : "msSaveOrOpenBlob" in navigator ? function(e1, r1, n) {
    if (r1 = r1 || e1.name || "download", "string" == typeof e1) {
        if ($ffb17689dbc03ee8$var$s(e1)) $ffb17689dbc03ee8$var$o(e1, r1, n);
        else {
            var i = document.createElement("a");
            i.href = e1, i.target = "_blank", setTimeout(function() {
                $ffb17689dbc03ee8$var$c(i);
            });
        }
    } else navigator.msSaveOrOpenBlob(function(e, r) {
        return void 0 === r ? r = {
            autoBom: !1
        } : "object" !== (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(r) && ($ffb17689dbc03ee8$var$a.warn("Deprecated: Expected third argument to be a object"), r = {
            autoBom: !r
        }), r.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([
            String.fromCharCode(65279),
            e
        ], {
            type: e.type
        }) : e;
    }(e1, n), r1);
} : function(e, r, i, a) {
    if ((a = a || open("", "_blank")) && (a.document.title = a.document.body.innerText = "downloading..."), "string" == typeof e) return $ffb17689dbc03ee8$var$o(e, r, i);
    var s = "application/octet-stream" === e.type, c = /constructor/i.test($ffb17689dbc03ee8$var$n.HTMLElement) || $ffb17689dbc03ee8$var$n.safari, u = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((u || s && c) && "object" === ("undefined" == typeof FileReader ? "undefined" : (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(FileReader))) {
        var h = new FileReader;
        h.onloadend = function() {
            var t = h.result;
            t = u ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"), a ? a.location.href = t : location = t, a = null;
        }, h.readAsDataURL(e);
    } else {
        var l = $ffb17689dbc03ee8$var$n.URL || $ffb17689dbc03ee8$var$n.webkitURL, f = l.createObjectURL(e);
        a ? a.location = f : location.href = f, a = null, setTimeout(function() {
            l.revokeObjectURL(f);
        }, 40000);
    }
});
/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */ function $ffb17689dbc03ee8$var$f(t2) {
    var e2;
    t2 = t2 || "", this.ok = !1, "#" == t2.charAt(0) && (t2 = t2.substr(1, 6));
    t2 = ({
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "00ffff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000000",
        blanchedalmond: "ffebcd",
        blue: "0000ff",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "00ffff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dodgerblue: "1e90ff",
        feldspar: "d19275",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "ff00ff",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslateblue: "8470ff",
        lightslategray: "778899",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "00ff00",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "ff00ff",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        red: "ff0000",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        violetred: "d02090",
        wheat: "f5deb3",
        white: "ffffff",
        whitesmoke: "f5f5f5",
        yellow: "ffff00",
        yellowgreen: "9acd32"
    })[t2 = (t2 = t2.replace(/ /g, "")).toLowerCase()] || t2;
    for(var r2 = [
        {
            re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
            example: [
                "rgb(123, 234, 45)",
                "rgb(255,234,245)"
            ],
            process: function(t) {
                return [
                    parseInt(t[1]),
                    parseInt(t[2]),
                    parseInt(t[3])
                ];
            }
        },
        {
            re: /^(\w{2})(\w{2})(\w{2})$/,
            example: [
                "#00ff00",
                "336699"
            ],
            process: function(t) {
                return [
                    parseInt(t[1], 16),
                    parseInt(t[2], 16),
                    parseInt(t[3], 16)
                ];
            }
        },
        {
            re: /^(\w{1})(\w{1})(\w{1})$/,
            example: [
                "#fb0",
                "f0f"
            ],
            process: function(t) {
                return [
                    parseInt(t[1] + t[1], 16),
                    parseInt(t[2] + t[2], 16),
                    parseInt(t[3] + t[3], 16)
                ];
            }
        }
    ], n = 0; n < r2.length; n++){
        var i = r2[n].re, a = r2[n].process, o = i.exec(t2);
        o && (e2 = a(o), this.r = e2[0], this.g = e2[1], this.b = e2[2], this.ok = !0);
    }
    this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
        return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
    }, this.toHex = function() {
        var t = this.r.toString(16), e = this.g.toString(16), r = this.b.toString(16);
        return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == r.length && (r = "0" + r), "#" + t + e + r;
    };
}
/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */ function $ffb17689dbc03ee8$var$d(t, e) {
    var r = t[0], n = t[1], i = t[2], a = t[3];
    r = $ffb17689dbc03ee8$var$g(r, n, i, a, e[0], 7, -680876936), a = $ffb17689dbc03ee8$var$g(a, r, n, i, e[1], 12, -389564586), i = $ffb17689dbc03ee8$var$g(i, a, r, n, e[2], 17, 606105819), n = $ffb17689dbc03ee8$var$g(n, i, a, r, e[3], 22, -1044525330), r = $ffb17689dbc03ee8$var$g(r, n, i, a, e[4], 7, -176418897), a = $ffb17689dbc03ee8$var$g(a, r, n, i, e[5], 12, 1200080426), i = $ffb17689dbc03ee8$var$g(i, a, r, n, e[6], 17, -1473231341), n = $ffb17689dbc03ee8$var$g(n, i, a, r, e[7], 22, -45705983), r = $ffb17689dbc03ee8$var$g(r, n, i, a, e[8], 7, 1770035416), a = $ffb17689dbc03ee8$var$g(a, r, n, i, e[9], 12, -1958414417), i = $ffb17689dbc03ee8$var$g(i, a, r, n, e[10], 17, -42063), n = $ffb17689dbc03ee8$var$g(n, i, a, r, e[11], 22, -1990404162), r = $ffb17689dbc03ee8$var$g(r, n, i, a, e[12], 7, 1804603682), a = $ffb17689dbc03ee8$var$g(a, r, n, i, e[13], 12, -40341101), i = $ffb17689dbc03ee8$var$g(i, a, r, n, e[14], 17, -1502002290), r = $ffb17689dbc03ee8$var$m(r, n = $ffb17689dbc03ee8$var$g(n, i, a, r, e[15], 22, 1236535329), i, a, e[1], 5, -165796510), a = $ffb17689dbc03ee8$var$m(a, r, n, i, e[6], 9, -1069501632), i = $ffb17689dbc03ee8$var$m(i, a, r, n, e[11], 14, 643717713), n = $ffb17689dbc03ee8$var$m(n, i, a, r, e[0], 20, -373897302), r = $ffb17689dbc03ee8$var$m(r, n, i, a, e[5], 5, -701558691), a = $ffb17689dbc03ee8$var$m(a, r, n, i, e[10], 9, 38016083), i = $ffb17689dbc03ee8$var$m(i, a, r, n, e[15], 14, -660478335), n = $ffb17689dbc03ee8$var$m(n, i, a, r, e[4], 20, -405537848), r = $ffb17689dbc03ee8$var$m(r, n, i, a, e[9], 5, 568446438), a = $ffb17689dbc03ee8$var$m(a, r, n, i, e[14], 9, -1019803690), i = $ffb17689dbc03ee8$var$m(i, a, r, n, e[3], 14, -187363961), n = $ffb17689dbc03ee8$var$m(n, i, a, r, e[8], 20, 1163531501), r = $ffb17689dbc03ee8$var$m(r, n, i, a, e[13], 5, -1444681467), a = $ffb17689dbc03ee8$var$m(a, r, n, i, e[2], 9, -51403784), i = $ffb17689dbc03ee8$var$m(i, a, r, n, e[7], 14, 1735328473), r = $ffb17689dbc03ee8$var$v(r, n = $ffb17689dbc03ee8$var$m(n, i, a, r, e[12], 20, -1926607734), i, a, e[5], 4, -378558), a = $ffb17689dbc03ee8$var$v(a, r, n, i, e[8], 11, -2022574463), i = $ffb17689dbc03ee8$var$v(i, a, r, n, e[11], 16, 1839030562), n = $ffb17689dbc03ee8$var$v(n, i, a, r, e[14], 23, -35309556), r = $ffb17689dbc03ee8$var$v(r, n, i, a, e[1], 4, -1530992060), a = $ffb17689dbc03ee8$var$v(a, r, n, i, e[4], 11, 1272893353), i = $ffb17689dbc03ee8$var$v(i, a, r, n, e[7], 16, -155497632), n = $ffb17689dbc03ee8$var$v(n, i, a, r, e[10], 23, -1094730640), r = $ffb17689dbc03ee8$var$v(r, n, i, a, e[13], 4, 681279174), a = $ffb17689dbc03ee8$var$v(a, r, n, i, e[0], 11, -358537222), i = $ffb17689dbc03ee8$var$v(i, a, r, n, e[3], 16, -722521979), n = $ffb17689dbc03ee8$var$v(n, i, a, r, e[6], 23, 76029189), r = $ffb17689dbc03ee8$var$v(r, n, i, a, e[9], 4, -640364487), a = $ffb17689dbc03ee8$var$v(a, r, n, i, e[12], 11, -421815835), i = $ffb17689dbc03ee8$var$v(i, a, r, n, e[15], 16, 530742520), r = $ffb17689dbc03ee8$var$b(r, n = $ffb17689dbc03ee8$var$v(n, i, a, r, e[2], 23, -995338651), i, a, e[0], 6, -198630844), a = $ffb17689dbc03ee8$var$b(a, r, n, i, e[7], 10, 1126891415), i = $ffb17689dbc03ee8$var$b(i, a, r, n, e[14], 15, -1416354905), n = $ffb17689dbc03ee8$var$b(n, i, a, r, e[5], 21, -57434055), r = $ffb17689dbc03ee8$var$b(r, n, i, a, e[12], 6, 1700485571), a = $ffb17689dbc03ee8$var$b(a, r, n, i, e[3], 10, -1894986606), i = $ffb17689dbc03ee8$var$b(i, a, r, n, e[10], 15, -1051523), n = $ffb17689dbc03ee8$var$b(n, i, a, r, e[1], 21, -2054922799), r = $ffb17689dbc03ee8$var$b(r, n, i, a, e[8], 6, 1873313359), a = $ffb17689dbc03ee8$var$b(a, r, n, i, e[15], 10, -30611744), i = $ffb17689dbc03ee8$var$b(i, a, r, n, e[6], 15, -1560198380), n = $ffb17689dbc03ee8$var$b(n, i, a, r, e[13], 21, 1309151649), r = $ffb17689dbc03ee8$var$b(r, n, i, a, e[4], 6, -145523070), a = $ffb17689dbc03ee8$var$b(a, r, n, i, e[11], 10, -1120210379), i = $ffb17689dbc03ee8$var$b(i, a, r, n, e[2], 15, 718787259), n = $ffb17689dbc03ee8$var$b(n, i, a, r, e[9], 21, -343485551), t[0] = $ffb17689dbc03ee8$var$_(r, t[0]), t[1] = $ffb17689dbc03ee8$var$_(n, t[1]), t[2] = $ffb17689dbc03ee8$var$_(i, t[2]), t[3] = $ffb17689dbc03ee8$var$_(a, t[3]);
}
function $ffb17689dbc03ee8$var$p(t, e, r, n, i, a) {
    return e = $ffb17689dbc03ee8$var$_($ffb17689dbc03ee8$var$_(e, t), $ffb17689dbc03ee8$var$_(n, a)), $ffb17689dbc03ee8$var$_(e << i | e >>> 32 - i, r);
}
function $ffb17689dbc03ee8$var$g(t, e, r, n, i, a, o) {
    return $ffb17689dbc03ee8$var$p(e & r | ~e & n, t, e, i, a, o);
}
function $ffb17689dbc03ee8$var$m(t, e, r, n, i, a, o) {
    return $ffb17689dbc03ee8$var$p(e & n | r & ~n, t, e, i, a, o);
}
function $ffb17689dbc03ee8$var$v(t, e, r, n, i, a, o) {
    return $ffb17689dbc03ee8$var$p(e ^ r ^ n, t, e, i, a, o);
}
function $ffb17689dbc03ee8$var$b(t, e, r, n, i, a, o) {
    return $ffb17689dbc03ee8$var$p(r ^ (e | ~n), t, e, i, a, o);
}
function $ffb17689dbc03ee8$var$y(t) {
    var e, r = t.length, n = [
        1732584193,
        -271733879,
        -1732584194,
        271733878
    ];
    for(e = 64; e <= t.length; e += 64)$ffb17689dbc03ee8$var$d(n, $ffb17689dbc03ee8$var$w(t.substring(e - 64, e)));
    t = t.substring(e - 64);
    var i = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ];
    for(e = 0; e < t.length; e++)i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
    if (i[e >> 2] |= 128 << (e % 4 << 3), e > 55) for($ffb17689dbc03ee8$var$d(n, i), e = 0; e < 16; e++)i[e] = 0;
    return i[14] = 8 * r, $ffb17689dbc03ee8$var$d(n, i), n;
}
function $ffb17689dbc03ee8$var$w(t) {
    var e, r = [];
    for(e = 0; e < 64; e += 4)r[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
    return r;
}
$ffb17689dbc03ee8$var$u = $ffb17689dbc03ee8$var$n.atob.bind($ffb17689dbc03ee8$var$n), $ffb17689dbc03ee8$var$h = $ffb17689dbc03ee8$var$n.btoa.bind($ffb17689dbc03ee8$var$n);
var $ffb17689dbc03ee8$var$N = "0123456789abcdef".split("");
function $ffb17689dbc03ee8$var$L(t) {
    for(var e = "", r = 0; r < 4; r++)e += $ffb17689dbc03ee8$var$N[t >> 8 * r + 4 & 15] + $ffb17689dbc03ee8$var$N[t >> 8 * r & 15];
    return e;
}
function $ffb17689dbc03ee8$var$A(t) {
    return String.fromCharCode((255 & t) >> 0, (65280 & t) >> 8, (16711680 & t) >> 16, (4278190080 & t) >> 24);
}
function $ffb17689dbc03ee8$var$x(t) {
    return $ffb17689dbc03ee8$var$y(t).map($ffb17689dbc03ee8$var$A).join("");
}
var $ffb17689dbc03ee8$var$S = "5d41402abc4b2a76b9719d911017c592" != function(t) {
    for(var e = 0; e < t.length; e++)t[e] = $ffb17689dbc03ee8$var$L(t[e]);
    return t.join("");
}($ffb17689dbc03ee8$var$y("hello"));
function $ffb17689dbc03ee8$var$_(t, e) {
    if ($ffb17689dbc03ee8$var$S) {
        var r = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r;
    }
    return t + e & 4294967295;
}
/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */ function $ffb17689dbc03ee8$var$P(t, e) {
    var r, n, i, a;
    if (t !== r) {
        for(var o = (i = t, a = 1 + (256 / t.length >> 0), new Array(a + 1).join(i)), s = [], c = 0; c < 256; c++)s[c] = c;
        var u = 0;
        for(c = 0; c < 256; c++){
            var h = s[c];
            u = (u + h + o.charCodeAt(c)) % 256, s[c] = s[u], s[u] = h;
        }
        r = t, n = s;
    } else s = n;
    var l = e.length, f = 0, d = 0, p = "";
    for(c = 0; c < l; c++)d = (d + (h = s[f = (f + 1) % 256])) % 256, s[f] = s[d], s[d] = h, o = s[(s[f] + s[d]) % 256], p += String.fromCharCode(e.charCodeAt(c) ^ o);
    return p;
}
/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */ var $ffb17689dbc03ee8$var$k = {
    print: 4,
    modify: 8,
    copy: 16,
    "annot-forms": 32
};
function $ffb17689dbc03ee8$var$I(t3, e, r, n) {
    this.v = 1, this.r = 2;
    var i = 192;
    t3.forEach(function(t) {
        if (void 0 !== $ffb17689dbc03ee8$var$k.perm) throw new Error("Invalid permission: " + t);
        i += $ffb17689dbc03ee8$var$k[t];
    }), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
    var a = (e + this.padding).substr(0, 32), o = (r + this.padding).substr(0, 32);
    this.O = this.processOwnerPassword(a, o), this.P = -(1 + (255 ^ i)), this.encryptionKey = $ffb17689dbc03ee8$var$x(a + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(n)).substr(0, 5), this.U = $ffb17689dbc03ee8$var$P(this.encryptionKey, this.padding);
}
function $ffb17689dbc03ee8$var$F(t) {
    if (/[^\u0000-\u00ff]/.test(t)) throw new Error("Invalid PDF Name Object: " + t + ", Only accept ASCII characters.");
    for(var e = "", r = t.length, n = 0; n < r; n++){
        var i = t.charCodeAt(n);
        if (i < 33 || 35 === i || 37 === i || 40 === i || 41 === i || 47 === i || 60 === i || 62 === i || 91 === i || 93 === i || 123 === i || 125 === i || i > 126) e += "#" + ("0" + i.toString(16)).slice(-2);
        else e += t[n];
    }
    return e;
}
function $ffb17689dbc03ee8$var$C(e3) {
    if ("object" !== (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e3)) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
    var r = {
    };
    this.subscribe = function(t, e, n) {
        if (n = n || !1, "string" != typeof t || "function" != typeof e || "boolean" != typeof n) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
        r.hasOwnProperty(t) || (r[t] = {
        });
        var i = Math.random().toString(35);
        return r[t][i] = [
            e,
            !!n
        ], i;
    }, this.unsubscribe = function(t) {
        for(var e in r)if (r[e][t]) return delete r[e][t], 0 === Object.keys(r[e]).length && delete r[e], !0;
        return !1;
    }, this.publish = function(t) {
        if (r.hasOwnProperty(t)) {
            var i = Array.prototype.slice.call(arguments, 1), o = [];
            for(var s in r[t]){
                var c = r[t][s];
                try {
                    c[0].apply(e3, i);
                } catch (t) {
                    $ffb17689dbc03ee8$var$n.console && $ffb17689dbc03ee8$var$a.error("jsPDF PubSub Error", t.message, t);
                }
                c[1] && o.push(s);
            }
            o.length && o.forEach(this.unsubscribe);
        }
    }, this.getTopics = function() {
        return r;
    };
}
function $ffb17689dbc03ee8$export$1bc649ab427a02ba(t) {
    if (!(this instanceof $ffb17689dbc03ee8$export$1bc649ab427a02ba)) return new $ffb17689dbc03ee8$export$1bc649ab427a02ba(t);
    var e = "opacity,stroke-opacity".split(",");
    for(var r in t)t.hasOwnProperty(r) && e.indexOf(r) >= 0 && (this[r] = t[r]);
    this.id = "", this.objectNumber = -1;
}
function $ffb17689dbc03ee8$var$O(t, e) {
    this.gState = t, this.matrix = e, this.id = "", this.objectNumber = -1;
}
function $ffb17689dbc03ee8$export$7235f0ad083cb4c6(t, e, r, n, i) {
    if (!(this instanceof $ffb17689dbc03ee8$export$7235f0ad083cb4c6)) return new $ffb17689dbc03ee8$export$7235f0ad083cb4c6(t, e, r, n, i);
    this.type = "axial" === t ? 2 : 3, this.coords = e, this.colors = r, $ffb17689dbc03ee8$var$O.call(this, n, i);
}
function $ffb17689dbc03ee8$export$549f717800d2b57f(t, e, r, n, i) {
    if (!(this instanceof $ffb17689dbc03ee8$export$549f717800d2b57f)) return new $ffb17689dbc03ee8$export$549f717800d2b57f(t, e, r, n, i);
    this.boundingBox = t, this.xStep = e, this.yStep = r, this.stream = "", this.cloneIndex = 0, $ffb17689dbc03ee8$var$O.call(this, n, i);
}
function $ffb17689dbc03ee8$export$ba1e2ffc633a60f5(e4) {
    var r3, i1 = "string" == typeof arguments[0] ? arguments[0] : "p", o1 = arguments[1], s1 = arguments[2], c1 = arguments[3], u1 = [], d1 = 1, p1 = 16, g1 = "S", m1 = null;
    "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e4 = e4 || {
    }) && (i1 = e4.orientation, o1 = e4.unit || o1, s1 = e4.format || s1, c1 = e4.compress || e4.compressPdf || c1, null !== (m1 = e4.encryption || null) && (m1.userPassword = m1.userPassword || "", m1.ownerPassword = m1.ownerPassword || "", m1.userPermissions = m1.userPermissions || []), d1 = "number" == typeof e4.userUnit ? Math.abs(e4.userUnit) : 1, void 0 !== e4.precision && (r3 = e4.precision), void 0 !== e4.floatPrecision && (p1 = e4.floatPrecision), g1 = e4.defaultPathOperation || "S"), u1 = e4.filters || (!0 === c1 ? [
        "FlateEncode"
    ] : u1), o1 = o1 || "mm", i1 = ("" + (i1 || "P")).toLowerCase();
    var v1 = e4.putOnlyUsedFonts || !1, b = {
    }, y1 = {
        internal: {
        },
        __private__: {
        }
    };
    y1.__private__.PubSub = $ffb17689dbc03ee8$var$C;
    var w1 = "1.3", N1 = y1.__private__.getPdfVersion = function() {
        return w1;
    };
    y1.__private__.setPdfVersion = function(t) {
        w1 = t;
    };
    var L1 = {
        a0: [
            2383.94,
            3370.39
        ],
        a1: [
            1683.78,
            2383.94
        ],
        a2: [
            1190.55,
            1683.78
        ],
        a3: [
            841.89,
            1190.55
        ],
        a4: [
            595.28,
            841.89
        ],
        a5: [
            419.53,
            595.28
        ],
        a6: [
            297.64,
            419.53
        ],
        a7: [
            209.76,
            297.64
        ],
        a8: [
            147.4,
            209.76
        ],
        a9: [
            104.88,
            147.4
        ],
        a10: [
            73.7,
            104.88
        ],
        b0: [
            2834.65,
            4008.19
        ],
        b1: [
            2004.09,
            2834.65
        ],
        b2: [
            1417.32,
            2004.09
        ],
        b3: [
            1000.63,
            1417.32
        ],
        b4: [
            708.66,
            1000.63
        ],
        b5: [
            498.9,
            708.66
        ],
        b6: [
            354.33,
            498.9
        ],
        b7: [
            249.45,
            354.33
        ],
        b8: [
            175.75,
            249.45
        ],
        b9: [
            124.72,
            175.75
        ],
        b10: [
            87.87,
            124.72
        ],
        c0: [
            2599.37,
            3676.54
        ],
        c1: [
            1836.85,
            2599.37
        ],
        c2: [
            1298.27,
            1836.85
        ],
        c3: [
            918.43,
            1298.27
        ],
        c4: [
            649.13,
            918.43
        ],
        c5: [
            459.21,
            649.13
        ],
        c6: [
            323.15,
            459.21
        ],
        c7: [
            229.61,
            323.15
        ],
        c8: [
            161.57,
            229.61
        ],
        c9: [
            113.39,
            161.57
        ],
        c10: [
            79.37,
            113.39
        ],
        dl: [
            311.81,
            623.62
        ],
        letter: [
            612,
            792
        ],
        "government-letter": [
            576,
            756
        ],
        legal: [
            612,
            1008
        ],
        "junior-legal": [
            576,
            360
        ],
        ledger: [
            1224,
            792
        ],
        tabloid: [
            792,
            1224
        ],
        "credit-card": [
            153,
            243
        ]
    };
    y1.__private__.getPageFormats = function() {
        return L1;
    };
    var A1 = y1.__private__.getPageFormat = function(t) {
        return L1[t];
    };
    s1 = s1 || "a4";
    var x = {
        COMPAT: "compat",
        ADVANCED: "advanced"
    }, S = x.COMPAT;
    function _1() {
        this.saveGraphicsState(), lt(new Vt(_t, 0, 0, -_t, 0, Rr() * _t).toString() + " cm"), this.setFontSize(this.getFontSize() / _t), g1 = "n", S = x.ADVANCED;
    }
    function P1() {
        this.restoreGraphicsState(), g1 = "S", S = x.COMPAT;
    }
    var k1 = y1.__private__.combineFontStyleAndFontWeight = function(t, e) {
        if ("bold" == t && "normal" == e || "bold" == t && 400 == e || "normal" == t && "italic" == e || "bold" == t && "italic" == e) throw new Error("Invalid Combination of fontweight and fontstyle");
        return e && (t = 400 == e || "normal" === e ? "italic" === t ? "italic" : "normal" : 700 != e && "bold" !== e || "normal" !== t ? (700 == e ? "bold" : e) + "" + t : "bold"), t;
    };
    y1.advancedAPI = function(t) {
        var e = S === x.COMPAT;
        return e && _1.call(this), "function" != typeof t || (t(this), e && P1.call(this)), this;
    }, y1.compatAPI = function(t) {
        var e = S === x.ADVANCED;
        return e && P1.call(this), "function" != typeof t || (t(this), e && _1.call(this)), this;
    }, y1.isAdvancedAPI = function() {
        return S === x.ADVANCED;
    };
    var O, q = function(t) {
        if (S !== x.ADVANCED) throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.");
    }, D1 = y1.roundToPrecision = y1.__private__.roundToPrecision = function(t, e) {
        var n = r3 || e;
        if (isNaN(t) || isNaN(n)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
        return t.toFixed(n).replace(/0+$/, "");
    };
    O = y1.hpf = y1.__private__.hpf = "number" == typeof p1 ? function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return D1(t, p1);
    } : "smart" === p1 ? function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return D1(t, t > -1 && t < 1 ? 16 : 5);
    } : function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
        return D1(t, 16);
    };
    var R1 = y1.f2 = y1.__private__.f2 = function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
        return D1(t, 2);
    }, T1 = y1.__private__.f3 = function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3");
        return D1(t, 3);
    }, U = y1.scale = y1.__private__.scale = function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.scale");
        return S === x.COMPAT ? t * _t : S === x.ADVANCED ? t : void 0;
    }, z1 = function(t) {
        return S === x.COMPAT ? Rr() - t : S === x.ADVANCED ? t : void 0;
    }, H1 = function(t) {
        return U(z1(t));
    };
    y1.__private__.setPrecision = y1.setPrecision = function(t) {
        "number" == typeof parseInt(t, 10) && (r3 = parseInt(t, 10));
    };
    var W1, V1 = "00000000000000000000000000000000", G1 = y1.__private__.getFileId = function() {
        return V1;
    }, Y1 = y1.__private__.setFileId = function(t) {
        return V1 = void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t) ? t.toUpperCase() : V1.split("").map(function() {
            return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()));
        }).join(""), null !== m1 && (Ye = new $ffb17689dbc03ee8$var$I(m1.userPermissions, m1.userPassword, m1.ownerPassword, V1)), V1;
    };
    y1.setFileId = function(t) {
        return Y1(t), this;
    }, y1.getFileId = function() {
        return G1();
    };
    var J1 = y1.__private__.convertDateToPDFDate = function(t) {
        var e = t.getTimezoneOffset(), r = e < 0 ? "+" : "-", n = Math.floor(Math.abs(e / 60)), i = Math.abs(e % 60), a = [
            r,
            Q1(n),
            "'",
            Q1(i),
            "'"
        ].join("");
        return [
            "D:",
            t.getFullYear(),
            Q1(t.getMonth() + 1),
            Q1(t.getDate()),
            Q1(t.getHours()),
            Q1(t.getMinutes()),
            Q1(t.getSeconds()),
            a
        ].join("");
    }, X1 = y1.__private__.convertPDFDateToDate = function(t) {
        var e = parseInt(t.substr(2, 4), 10), r = parseInt(t.substr(6, 2), 10) - 1, n = parseInt(t.substr(8, 2), 10), i = parseInt(t.substr(10, 2), 10), a = parseInt(t.substr(12, 2), 10), o = parseInt(t.substr(14, 2), 10);
        return new Date(e, r, n, i, a, o, 0);
    }, K1 = y1.__private__.setCreationDate = function(t) {
        var e;
        if (void 0 === t && (t = new Date), t instanceof Date) e = J1(t);
        else {
            if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
            e = t;
        }
        return W1 = e;
    }, Z1 = y1.__private__.getCreationDate = function(t) {
        var e = W1;
        return "jsDate" === t && (e = X1(W1)), e;
    };
    y1.setCreationDate = function(t) {
        return K1(t), this;
    }, y1.getCreationDate = function(t) {
        return Z1(t);
    };
    var $1, Q1 = y1.__private__.padd2 = function(t) {
        return ("0" + parseInt(t)).slice(-2);
    }, tt1 = y1.__private__.padd2Hex = function(t) {
        return ("00" + (t = t.toString())).substr(t.length);
    }, et1 = 0, rt1 = [], nt1 = [], it1 = 0, at1 = [], ot1 = [], st1 = !1, ct1 = nt1, ut1 = function() {
        et1 = 0, it1 = 0, nt1 = [], rt1 = [], at1 = [], Qt = Kt(), te = Kt();
    };
    y1.__private__.setCustomOutputDestination = function(t) {
        st1 = !0, ct1 = t;
    };
    var ht1 = function(t) {
        st1 || (ct1 = t);
    };
    y1.__private__.resetCustomOutputDestination = function() {
        st1 = !1, ct1 = nt1;
    };
    var lt = y1.__private__.out = function(t) {
        return t = t.toString(), it1 += t.length + 1, ct1.push(t), ct1;
    }, $ffb17689dbc03ee8$export$a47202eb3f827bb2 = y1.__private__.write = function(t) {
        return lt(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "));
    }, $ffb17689dbc03ee8$export$9e021dd9568dc486 = y1.__private__.getArrayBuffer = function(t) {
        for(var e = t.length, r = new ArrayBuffer(e), n = new Uint8Array(r); e--;)n[e] = t.charCodeAt(e);
        return r;
    }, $ffb17689dbc03ee8$export$f2239d28df5f43bd = [
        [
            "Helvetica",
            "helvetica",
            "normal",
            "WinAnsiEncoding"
        ],
        [
            "Helvetica-Bold",
            "helvetica",
            "bold",
            "WinAnsiEncoding"
        ],
        [
            "Helvetica-Oblique",
            "helvetica",
            "italic",
            "WinAnsiEncoding"
        ],
        [
            "Helvetica-BoldOblique",
            "helvetica",
            "bolditalic",
            "WinAnsiEncoding"
        ],
        [
            "Courier",
            "courier",
            "normal",
            "WinAnsiEncoding"
        ],
        [
            "Courier-Bold",
            "courier",
            "bold",
            "WinAnsiEncoding"
        ],
        [
            "Courier-Oblique",
            "courier",
            "italic",
            "WinAnsiEncoding"
        ],
        [
            "Courier-BoldOblique",
            "courier",
            "bolditalic",
            "WinAnsiEncoding"
        ],
        [
            "Times-Roman",
            "times",
            "normal",
            "WinAnsiEncoding"
        ],
        [
            "Times-Bold",
            "times",
            "bold",
            "WinAnsiEncoding"
        ],
        [
            "Times-Italic",
            "times",
            "italic",
            "WinAnsiEncoding"
        ],
        [
            "Times-BoldItalic",
            "times",
            "bolditalic",
            "WinAnsiEncoding"
        ],
        [
            "ZapfDingbats",
            "zapfdingbats",
            "normal",
            null
        ],
        [
            "Symbol",
            "symbol",
            "normal",
            null
        ]
    ];
    y1.__private__.getStandardFonts = function() {
        return $ffb17689dbc03ee8$export$f2239d28df5f43bd;
    };
    var $ffb17689dbc03ee8$export$4af052e7e598ad1a = e4.fontSize || 16;
    y1.__private__.setFontSize = y1.setFontSize = function(t) {
        return $ffb17689dbc03ee8$export$4af052e7e598ad1a = S === x.ADVANCED ? t / _t : t, this;
    };
    var $ffb17689dbc03ee8$export$6aae594af76bbb7b, $ffb17689dbc03ee8$export$98b7c3ef37465410 = y1.__private__.getFontSize = y1.getFontSize = function() {
        return S === x.COMPAT ? $ffb17689dbc03ee8$export$4af052e7e598ad1a : $ffb17689dbc03ee8$export$4af052e7e598ad1a * _t;
    }, $ffb17689dbc03ee8$export$bc1318bc7e5f1315 = e4.R2L || !1;
    y1.__private__.setR2L = y1.setR2L = function(t) {
        return $ffb17689dbc03ee8$export$bc1318bc7e5f1315 = t, this;
    }, y1.__private__.getR2L = y1.getR2L = function() {
        return $ffb17689dbc03ee8$export$bc1318bc7e5f1315;
    };
    var yt, $ffb17689dbc03ee8$export$5fd5db01c4615478 = y1.__private__.setZoomMode = function(t) {
        var e = [
            void 0,
            null,
            "fullwidth",
            "fullheight",
            "fullpage",
            "original"
        ];
        if (/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(t)) $ffb17689dbc03ee8$export$6aae594af76bbb7b = t;
        else if (isNaN(t)) {
            if (-1 === e.indexOf(t)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
            $ffb17689dbc03ee8$export$6aae594af76bbb7b = t;
        } else $ffb17689dbc03ee8$export$6aae594af76bbb7b = parseInt(t, 10);
    };
    y1.__private__.getZoomMode = function() {
        return $ffb17689dbc03ee8$export$6aae594af76bbb7b;
    };
    var $ffb17689dbc03ee8$export$9d1b52e7fab50c84, $ffb17689dbc03ee8$export$c48d8668f8cea64d = y1.__private__.setPageMode = function(t) {
        if (-1 == [
            void 0,
            null,
            "UseNone",
            "UseOutlines",
            "UseThumbs",
            "FullScreen"
        ].indexOf(t)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
        yt = t;
    };
    y1.__private__.getPageMode = function() {
        return yt;
    };
    var $ffb17689dbc03ee8$export$7d753ad993606f45 = y1.__private__.setLayoutMode = function(t) {
        if (-1 == [
            void 0,
            null,
            "continuous",
            "single",
            "twoleft",
            "tworight",
            "two"
        ].indexOf(t)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
        $ffb17689dbc03ee8$export$9d1b52e7fab50c84 = t;
    };
    y1.__private__.getLayoutMode = function() {
        return $ffb17689dbc03ee8$export$9d1b52e7fab50c84;
    }, y1.__private__.setDisplayMode = y1.setDisplayMode = function(t, e, r) {
        return $ffb17689dbc03ee8$export$5fd5db01c4615478(t), $ffb17689dbc03ee8$export$7d753ad993606f45(e), $ffb17689dbc03ee8$export$c48d8668f8cea64d(r), this;
    };
    var xt = {
        title: "",
        subject: "",
        author: "",
        keywords: "",
        creator: ""
    };
    y1.__private__.getDocumentProperty = function(t) {
        if (-1 === Object.keys(xt).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
        return xt[t];
    }, y1.__private__.getDocumentProperties = function() {
        return xt;
    }, y1.__private__.setDocumentProperties = y1.setProperties = y1.setDocumentProperties = function(t) {
        for(var e in xt)xt.hasOwnProperty(e) && t[e] && (xt[e] = t[e]);
        return this;
    }, y1.__private__.setDocumentProperty = function(t, e) {
        if (-1 === Object.keys(xt).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
        return xt[t] = e;
    };
    var $ffb17689dbc03ee8$export$9cf40f67b77f45f4, _t, Pt, kt, It, Ft = {
    }, Ct = {
    }, jt = [], Ot = {
    }, Bt = {
    }, Mt = {
    }, Et = {
    }, qt = null, Dt = 0, Rt = [], Tt = new $ffb17689dbc03ee8$var$C(y1), Ut = e4.hotfixes || [], zt = {
    }, Ht = {
    }, Wt = [], Vt = function t(e, r, n, i, a, o) {
        if (!(this instanceof t)) return new t(e, r, n, i, a, o);
        isNaN(e) && (e = 1), isNaN(r) && (r = 0), isNaN(n) && (n = 0), isNaN(i) && (i = 1), isNaN(a) && (a = 0), isNaN(o) && (o = 0), this._matrix = [
            e,
            r,
            n,
            i,
            a,
            o
        ];
    };
    Object.defineProperty(Vt.prototype, "sx", {
        get: function() {
            return this._matrix[0];
        },
        set: function(t) {
            this._matrix[0] = t;
        }
    }), Object.defineProperty(Vt.prototype, "shy", {
        get: function() {
            return this._matrix[1];
        },
        set: function(t) {
            this._matrix[1] = t;
        }
    }), Object.defineProperty(Vt.prototype, "shx", {
        get: function() {
            return this._matrix[2];
        },
        set: function(t) {
            this._matrix[2] = t;
        }
    }), Object.defineProperty(Vt.prototype, "sy", {
        get: function() {
            return this._matrix[3];
        },
        set: function(t) {
            this._matrix[3] = t;
        }
    }), Object.defineProperty(Vt.prototype, "tx", {
        get: function() {
            return this._matrix[4];
        },
        set: function(t) {
            this._matrix[4] = t;
        }
    }), Object.defineProperty(Vt.prototype, "ty", {
        get: function() {
            return this._matrix[5];
        },
        set: function(t) {
            this._matrix[5] = t;
        }
    }), Object.defineProperty(Vt.prototype, "a", {
        get: function() {
            return this._matrix[0];
        },
        set: function(t) {
            this._matrix[0] = t;
        }
    }), Object.defineProperty(Vt.prototype, "b", {
        get: function() {
            return this._matrix[1];
        },
        set: function(t) {
            this._matrix[1] = t;
        }
    }), Object.defineProperty(Vt.prototype, "c", {
        get: function() {
            return this._matrix[2];
        },
        set: function(t) {
            this._matrix[2] = t;
        }
    }), Object.defineProperty(Vt.prototype, "d", {
        get: function() {
            return this._matrix[3];
        },
        set: function(t) {
            this._matrix[3] = t;
        }
    }), Object.defineProperty(Vt.prototype, "e", {
        get: function() {
            return this._matrix[4];
        },
        set: function(t) {
            this._matrix[4] = t;
        }
    }), Object.defineProperty(Vt.prototype, "f", {
        get: function() {
            return this._matrix[5];
        },
        set: function(t) {
            this._matrix[5] = t;
        }
    }), Object.defineProperty(Vt.prototype, "rotation", {
        get: function() {
            return Math.atan2(this.shx, this.sx);
        }
    }), Object.defineProperty(Vt.prototype, "scaleX", {
        get: function() {
            return this.decompose().scale.sx;
        }
    }), Object.defineProperty(Vt.prototype, "scaleY", {
        get: function() {
            return this.decompose().scale.sy;
        }
    }), Object.defineProperty(Vt.prototype, "isIdentity", {
        get: function() {
            return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty;
        }
    }), Vt.prototype.join = function(t) {
        return [
            this.sx,
            this.shy,
            this.shx,
            this.sy,
            this.tx,
            this.ty
        ].map(O).join(t);
    }, Vt.prototype.multiply = function(t) {
        var e = t.sx * this.sx + t.shy * this.shx, r = t.sx * this.shy + t.shy * this.sy, n = t.shx * this.sx + t.sy * this.shx, i = t.shx * this.shy + t.sy * this.sy, a = t.tx * this.sx + t.ty * this.shx + this.tx, o = t.tx * this.shy + t.ty * this.sy + this.ty;
        return new Vt(e, r, n, i, a, o);
    }, Vt.prototype.decompose = function() {
        var t = this.sx, e = this.shy, r = this.shx, n = this.sy, i = this.tx, a = this.ty, o = Math.sqrt(t * t + e * e), s = (t /= o) * r + (e /= o) * n;
        r -= t * s, n -= e * s;
        var c = Math.sqrt(r * r + n * n);
        return s /= c, t * (n /= c) < e * (r /= c) && (t = -t, e = -e, s = -s, o = -o), {
            scale: new Vt(o, 0, 0, c, 0, 0),
            translate: new Vt(1, 0, 0, 1, i, a),
            rotate: new Vt(t, e, -e, t, 0, 0),
            skew: new Vt(1, 0, s, 1, 0, 0)
        };
    }, Vt.prototype.toString = function(t) {
        return this.join(" ");
    }, Vt.prototype.inversed = function() {
        var t = this.sx, e = this.shy, r = this.shx, n = this.sy, i = this.tx, a = this.ty, o = 1 / (t * n - e * r), s = n * o, c = -e * o, u = -r * o, h = t * o;
        return new Vt(s, c, u, h, -s * i - u * a, -c * i - h * a);
    }, Vt.prototype.applyToPoint = function(t) {
        var e = t.x * this.sx + t.y * this.shx + this.tx, r = t.x * this.shy + t.y * this.sy + this.ty;
        return new Cr(e, r);
    }, Vt.prototype.applyToRectangle = function(t) {
        var e = this.applyToPoint(t), r = this.applyToPoint(new Cr(t.x + t.w, t.y + t.h));
        return new jr(e.x, e.y, r.x - e.x, r.y - e.y);
    }, Vt.prototype.clone = function() {
        var t = this.sx, e = this.shy, r = this.shx, n = this.sy, i = this.tx, a = this.ty;
        return new Vt(t, e, r, n, i, a);
    }, y1.Matrix = Vt;
    var Gt = y1.matrixMult = function(t, e) {
        return e.multiply(t);
    }, Yt = new Vt(1, 0, 0, 1, 0, 0);
    y1.unitMatrix = y1.identityMatrix = Yt;
    var Jt = function(t, e) {
        if (!Bt[t]) {
            var r = (e instanceof $ffb17689dbc03ee8$export$7235f0ad083cb4c6 ? "Sh" : "P") + (Object.keys(Ot).length + 1).toString(10);
            e.id = r, Bt[t] = r, Ot[r] = e, Tt.publish("addPattern", e);
        }
    };
    y1.ShadingPattern = $ffb17689dbc03ee8$export$7235f0ad083cb4c6, y1.TilingPattern = $ffb17689dbc03ee8$export$549f717800d2b57f, y1.addShadingPattern = function(t, e) {
        return q("addShadingPattern()"), Jt(t, e), this;
    }, y1.beginTilingPattern = function(t) {
        q("beginTilingPattern()"), Br(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix);
    }, y1.endTilingPattern = function(t, e) {
        q("endTilingPattern()"), e.stream = ot1[$1].join("\n"), Jt(t, e), Tt.publish("endTilingPattern", e), Wt.pop().restore();
    };
    var Xt = y1.__private__.newObject = function() {
        var t = Kt();
        return Zt(t, !0), t;
    }, Kt = y1.__private__.newObjectDeferred = function() {
        return et1++, rt1[et1] = function() {
            return it1;
        }, et1;
    }, Zt = function(t, e) {
        return e = "boolean" == typeof e && e, rt1[t] = it1, e && lt(t + " 0 obj"), t;
    }, $t = y1.__private__.newAdditionalObject = function() {
        var t = {
            objId: Kt(),
            content: ""
        };
        return at1.push(t), t;
    }, Qt = Kt(), te = Kt(), ee = y1.__private__.decodeColorString = function(t) {
        var e = t.split(" ");
        if (2 !== e.length || "g" !== e[1] && "G" !== e[1]) {
            if (5 === e.length && ("k" === e[4] || "K" === e[4])) e = [
                (1 - e[0]) * (1 - e[3]),
                (1 - e[1]) * (1 - e[3]),
                (1 - e[2]) * (1 - e[3]),
                "r"
            ];
        } else {
            var r = parseFloat(e[0]);
            e = [
                r,
                r,
                r,
                "r"
            ];
        }
        for(var n = "#", i = 0; i < 3; i++)n += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(-2);
        return n;
    }, re = y1.__private__.encodeColorString = function(e) {
        var r;
        "string" == typeof e && (e = {
            ch1: e
        });
        var n = e.ch1, i = e.ch2, a = e.ch3, o = e.ch4, s = "draw" === e.pdfColorType ? [
            "G",
            "RG",
            "K"
        ] : [
            "g",
            "rg",
            "k"
        ];
        if ("string" == typeof n && "#" !== n.charAt(0)) {
            var c = new $ffb17689dbc03ee8$var$f(n);
            if (c.ok) n = c.toHex();
            else if (!/^\d*\.?\d*$/.test(n)) throw new Error('Invalid color "' + n + '" passed to jsPDF.encodeColorString.');
        }
        if ("string" == typeof n && /^#[0-9A-Fa-f]{3}$/.test(n) && (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n)) {
            var u = parseInt(n.substr(1), 16);
            n = u >> 16 & 255, i = u >> 8 & 255, a = 255 & u;
        }
        if (void 0 === i || void 0 === o && n === i && i === a) {
            if ("string" == typeof n) r = n + " " + s[0];
            else switch(e.precision){
                case 2:
                    r = R1(n / 255) + " " + s[0];
                    break;
                case 3:
                default:
                    r = T1(n / 255) + " " + s[0];
            }
        } else if (void 0 === o || "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(o)) {
            if (o && !isNaN(o.a) && 0 === o.a) return r = [
                "1.",
                "1.",
                "1.",
                s[1]
            ].join(" ");
            if ("string" == typeof n) r = [
                n,
                i,
                a,
                s[1]
            ].join(" ");
            else switch(e.precision){
                case 2:
                    r = [
                        R1(n / 255),
                        R1(i / 255),
                        R1(a / 255),
                        s[1]
                    ].join(" ");
                    break;
                default:
                case 3:
                    r = [
                        T1(n / 255),
                        T1(i / 255),
                        T1(a / 255),
                        s[1]
                    ].join(" ");
            }
        } else if ("string" == typeof n) r = [
            n,
            i,
            a,
            o,
            s[2]
        ].join(" ");
        else switch(e.precision){
            case 2:
                r = [
                    R1(n),
                    R1(i),
                    R1(a),
                    R1(o),
                    s[2]
                ].join(" ");
                break;
            case 3:
            default:
                r = [
                    T1(n),
                    T1(i),
                    T1(a),
                    T1(o),
                    s[2]
                ].join(" ");
        }
        return r;
    }, ne = y1.__private__.getFilters = function() {
        return u1;
    }, ie = y1.__private__.putStream = function(t4) {
        var e = (t4 = t4 || {
        }).data || "", r = t4.filters || ne(), n = t4.alreadyAppliedFilters || [], i = t4.addLength1 || !1, a = e.length, o = t4.objectId, s = function(t) {
            return t;
        };
        if (null !== m1 && void 0 === o) throw new Error("ObjectId must be passed to putStream for file encryption");
        null !== m1 && (s = Ye.encryptor(o, 0));
        var c = {
        };
        !0 === r && (r = [
            "FlateEncode"
        ]);
        var u = t4.additionalKeyValues || [], h = (c = void 0 !== $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.processDataByFilters ? $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.processDataByFilters(e, r) : {
            data: e,
            reverseChain: []
        }).reverseChain + (Array.isArray(n) ? n.join(" ") : n.toString());
        if (0 !== c.data.length && (u.push({
            key: "Length",
            value: c.data.length
        }), !0 === i && u.push({
            key: "Length1",
            value: a
        })), 0 != h.length) {
            if (h.split("/").length - 1 == 1) u.push({
                key: "Filter",
                value: h
            });
            else {
                u.push({
                    key: "Filter",
                    value: "[" + h + "]"
                });
                for(var l = 0; l < u.length; l += 1)if ("DecodeParms" === u[l].key) {
                    for(var f = [], d = 0; d < c.reverseChain.split("/").length - 1; d += 1)f.push("null");
                    f.push(u[l].value), u[l].value = "[" + f.join(" ") + "]";
                }
            }
        }
        lt("<<");
        for(var p = 0; p < u.length; p++)lt("/" + u[p].key + " " + u[p].value);
        lt(">>"), 0 !== c.data.length && (lt("stream"), lt(s(c.data)), lt("endstream"));
    }, ae = y1.__private__.putPage = function(t) {
        var e = t.number, r = t.data, n = t.objId, i = t.contentsObjId;
        Zt(n, !0), lt("<</Type /Page"), lt("/Parent " + t.rootDictionaryObjId + " 0 R"), lt("/Resources " + t.resourceDictionaryObjId + " 0 R"), lt("/MediaBox [" + parseFloat(O(t.mediaBox.bottomLeftX)) + " " + parseFloat(O(t.mediaBox.bottomLeftY)) + " " + O(t.mediaBox.topRightX) + " " + O(t.mediaBox.topRightY) + "]"), null !== t.cropBox && lt("/CropBox [" + O(t.cropBox.bottomLeftX) + " " + O(t.cropBox.bottomLeftY) + " " + O(t.cropBox.topRightX) + " " + O(t.cropBox.topRightY) + "]"), null !== t.bleedBox && lt("/BleedBox [" + O(t.bleedBox.bottomLeftX) + " " + O(t.bleedBox.bottomLeftY) + " " + O(t.bleedBox.topRightX) + " " + O(t.bleedBox.topRightY) + "]"), null !== t.trimBox && lt("/TrimBox [" + O(t.trimBox.bottomLeftX) + " " + O(t.trimBox.bottomLeftY) + " " + O(t.trimBox.topRightX) + " " + O(t.trimBox.topRightY) + "]"), null !== t.artBox && lt("/ArtBox [" + O(t.artBox.bottomLeftX) + " " + O(t.artBox.bottomLeftY) + " " + O(t.artBox.topRightX) + " " + O(t.artBox.topRightY) + "]"), "number" == typeof t.userUnit && 1 !== t.userUnit && lt("/UserUnit " + t.userUnit), Tt.publish("putPage", {
            objId: n,
            pageContext: Rt[e],
            pageNumber: e,
            page: r
        }), lt("/Contents " + i + " 0 R"), lt(">>"), lt("endobj");
        var a = r.join("\n");
        return S === x.ADVANCED && (a += "\nQ"), Zt(i, !0), ie({
            data: a,
            filters: ne(),
            objectId: i
        }), lt("endobj"), n;
    }, oe = y1.__private__.putPages = function() {
        var t, e, r = [];
        for(t = 1; t <= Dt; t++)Rt[t].objId = Kt(), Rt[t].contentsObjId = Kt();
        for(t = 1; t <= Dt; t++)r.push(ae({
            number: t,
            data: ot1[t],
            objId: Rt[t].objId,
            contentsObjId: Rt[t].contentsObjId,
            mediaBox: Rt[t].mediaBox,
            cropBox: Rt[t].cropBox,
            bleedBox: Rt[t].bleedBox,
            trimBox: Rt[t].trimBox,
            artBox: Rt[t].artBox,
            userUnit: Rt[t].userUnit,
            rootDictionaryObjId: Qt,
            resourceDictionaryObjId: te
        }));
        Zt(Qt, !0), lt("<</Type /Pages");
        var n = "/Kids [";
        for(e = 0; e < Dt; e++)n += r[e] + " 0 R ";
        lt(n + "]"), lt("/Count " + Dt), lt(">>"), lt("endobj"), Tt.publish("postPutPages");
    }, se = function(t) {
        Tt.publish("putFont", {
            font: t,
            out: lt,
            newObject: Xt,
            putStream: ie
        }), !0 !== t.isAlreadyPutted && (t.objectNumber = Xt(), lt("<<"), lt("/Type /Font"), lt("/BaseFont /" + $ffb17689dbc03ee8$var$F(t.postScriptName)), lt("/Subtype /Type1"), "string" == typeof t.encoding && lt("/Encoding /" + t.encoding), lt("/FirstChar 32"), lt("/LastChar 255"), lt(">>"), lt("endobj"));
    }, ce = function() {
        for(var t in Ft)Ft.hasOwnProperty(t) && (!1 === v1 || !0 === v1 && b.hasOwnProperty(t)) && se(Ft[t]);
    }, ue = function(t) {
        t.objectNumber = Xt();
        var e = [];
        e.push({
            key: "Type",
            value: "/XObject"
        }), e.push({
            key: "Subtype",
            value: "/Form"
        }), e.push({
            key: "BBox",
            value: "[" + [
                O(t.x),
                O(t.y),
                O(t.x + t.width),
                O(t.y + t.height)
            ].join(" ") + "]"
        }), e.push({
            key: "Matrix",
            value: "[" + t.matrix.toString() + "]"
        });
        var r = t.pages[1].join("\n");
        ie({
            data: r,
            additionalKeyValues: e,
            objectId: t.objectNumber
        }), lt("endobj");
    }, he = function() {
        for(var t in zt)zt.hasOwnProperty(t) && ue(zt[t]);
    }, le = function(t, e) {
        var r, n = [], i = 1 / (e - 1);
        for(r = 0; r < 1; r += i)n.push(r);
        if (n.push(1), 0 != t[0].offset) {
            var a = {
                offset: 0,
                color: t[0].color
            };
            t.unshift(a);
        }
        if (1 != t[t.length - 1].offset) {
            var o = {
                offset: 1,
                color: t[t.length - 1].color
            };
            t.push(o);
        }
        for(var s = "", c = 0, u = 0; u < n.length; u++){
            for(r = n[u]; r > t[c + 1].offset;)c++;
            var h = t[c].offset, l = (r - h) / (t[c + 1].offset - h), f = t[c].color, d = t[c + 1].color;
            s += tt1(Math.round((1 - l) * f[0] + l * d[0]).toString(16)) + tt1(Math.round((1 - l) * f[1] + l * d[1]).toString(16)) + tt1(Math.round((1 - l) * f[2] + l * d[2]).toString(16));
        }
        return s.trim();
    }, fe = function(t, e) {
        e || (e = 21);
        var r = Xt(), n = le(t.colors, e), i = [];
        i.push({
            key: "FunctionType",
            value: "0"
        }), i.push({
            key: "Domain",
            value: "[0.0 1.0]"
        }), i.push({
            key: "Size",
            value: "[" + e + "]"
        }), i.push({
            key: "BitsPerSample",
            value: "8"
        }), i.push({
            key: "Range",
            value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
        }), i.push({
            key: "Decode",
            value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
        }), ie({
            data: n,
            additionalKeyValues: i,
            alreadyAppliedFilters: [
                "/ASCIIHexDecode"
            ],
            objectId: r
        }), lt("endobj"), t.objectNumber = Xt(), lt("<< /ShadingType " + t.type), lt("/ColorSpace /DeviceRGB");
        var a = "/Coords [" + O(parseFloat(t.coords[0])) + " " + O(parseFloat(t.coords[1])) + " ";
        2 === t.type ? a += O(parseFloat(t.coords[2])) + " " + O(parseFloat(t.coords[3])) : a += O(parseFloat(t.coords[2])) + " " + O(parseFloat(t.coords[3])) + " " + O(parseFloat(t.coords[4])) + " " + O(parseFloat(t.coords[5])), lt(a += "]"), t.matrix && lt("/Matrix [" + t.matrix.toString() + "]"), lt("/Function " + r + " 0 R"), lt("/Extend [true true]"), lt(">>"), lt("endobj");
    }, de = function(t, e) {
        var r = Kt(), n = Xt();
        e.push({
            resourcesOid: r,
            objectOid: n
        }), t.objectNumber = n;
        var i = [];
        i.push({
            key: "Type",
            value: "/Pattern"
        }), i.push({
            key: "PatternType",
            value: "1"
        }), i.push({
            key: "PaintType",
            value: "1"
        }), i.push({
            key: "TilingType",
            value: "1"
        }), i.push({
            key: "BBox",
            value: "[" + t.boundingBox.map(O).join(" ") + "]"
        }), i.push({
            key: "XStep",
            value: O(t.xStep)
        }), i.push({
            key: "YStep",
            value: O(t.yStep)
        }), i.push({
            key: "Resources",
            value: r + " 0 R"
        }), t.matrix && i.push({
            key: "Matrix",
            value: "[" + t.matrix.toString() + "]"
        }), ie({
            data: t.stream,
            additionalKeyValues: i,
            objectId: t.objectNumber
        }), lt("endobj");
    }, pe = function(t) {
        var e;
        for(e in Ot)Ot.hasOwnProperty(e) && (Ot[e] instanceof $ffb17689dbc03ee8$export$7235f0ad083cb4c6 ? fe(Ot[e]) : Ot[e] instanceof $ffb17689dbc03ee8$export$549f717800d2b57f && de(Ot[e], t));
    }, ge = function(t) {
        for(var e in t.objectNumber = Xt(), lt("<<"), t)switch(e){
            case "opacity":
                lt("/ca " + R1(t[e]));
                break;
            case "stroke-opacity":
                lt("/CA " + R1(t[e]));
        }
        lt(">>"), lt("endobj");
    }, me = function() {
        var t;
        for(t in Mt)Mt.hasOwnProperty(t) && ge(Mt[t]);
    }, ve = function() {
        for(var t in lt("/XObject <<"), zt)zt.hasOwnProperty(t) && zt[t].objectNumber >= 0 && lt("/" + t + " " + zt[t].objectNumber + " 0 R");
        Tt.publish("putXobjectDict"), lt(">>");
    }, be = function() {
        Ye.oid = Xt(), lt("<<"), lt("/Filter /Standard"), lt("/V " + Ye.v), lt("/R " + Ye.r), lt("/U <" + Ye.toHexString(Ye.U) + ">"), lt("/O <" + Ye.toHexString(Ye.O) + ">"), lt("/P " + Ye.P), lt(">>"), lt("endobj");
    }, ye = function() {
        for(var t in lt("/Font <<"), Ft)Ft.hasOwnProperty(t) && (!1 === v1 || !0 === v1 && b.hasOwnProperty(t)) && lt("/" + t + " " + Ft[t].objectNumber + " 0 R");
        lt(">>");
    }, we = function() {
        if (Object.keys(Ot).length > 0) {
            for(var t in lt("/Shading <<"), Ot)Ot.hasOwnProperty(t) && Ot[t] instanceof $ffb17689dbc03ee8$export$7235f0ad083cb4c6 && Ot[t].objectNumber >= 0 && lt("/" + t + " " + Ot[t].objectNumber + " 0 R");
            Tt.publish("putShadingPatternDict"), lt(">>");
        }
    }, Ne = function(t) {
        if (Object.keys(Ot).length > 0) {
            for(var e in lt("/Pattern <<"), Ot)Ot.hasOwnProperty(e) && Ot[e] instanceof y1.TilingPattern && Ot[e].objectNumber >= 0 && Ot[e].objectNumber < t && lt("/" + e + " " + Ot[e].objectNumber + " 0 R");
            Tt.publish("putTilingPatternDict"), lt(">>");
        }
    }, Le = function() {
        if (Object.keys(Mt).length > 0) {
            var t;
            for(t in lt("/ExtGState <<"), Mt)Mt.hasOwnProperty(t) && Mt[t].objectNumber >= 0 && lt("/" + t + " " + Mt[t].objectNumber + " 0 R");
            Tt.publish("putGStateDict"), lt(">>");
        }
    }, Ae = function(t) {
        Zt(t.resourcesOid, !0), lt("<<"), lt("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), ye(), we(), Ne(t.objectOid), Le(), ve(), lt(">>"), lt("endobj");
    }, xe = function() {
        var t = [];
        ce(), me(), he(), pe(t), Tt.publish("putResources"), t.forEach(Ae), Ae({
            resourcesOid: te,
            objectOid: Number.MAX_SAFE_INTEGER
        }), Tt.publish("postPutResources");
    }, Se = function() {
        Tt.publish("putAdditionalObjects");
        for(var t = 0; t < at1.length; t++){
            var e = at1[t];
            Zt(e.objId, !0), lt(e.content), lt("endobj");
        }
        Tt.publish("postPutAdditionalObjects");
    }, _e = function(t) {
        Ct[t.fontName] = Ct[t.fontName] || {
        }, Ct[t.fontName][t.fontStyle] = t.id;
    }, Pe = function(t, e, r, n, i) {
        var a = {
            id: "F" + (Object.keys(Ft).length + 1).toString(10),
            postScriptName: t,
            fontName: e,
            fontStyle: r,
            encoding: n,
            isStandardFont: i || !1,
            metadata: {
            }
        };
        return Tt.publish("addFont", {
            font: a,
            instance: this
        }), Ft[a.id] = a, _e(a), a.id;
    }, ke = function(t) {
        for(var e = 0, r = $ffb17689dbc03ee8$export$f2239d28df5f43bd.length; e < r; e++){
            var n = Pe.call(this, t[e][0], t[e][1], t[e][2], $ffb17689dbc03ee8$export$f2239d28df5f43bd[e][3], !0);
            !1 === v1 && (b[n] = !0);
            var i = t[e][0].split("-");
            _e({
                id: n,
                fontName: i[0],
                fontStyle: i[1] || ""
            });
        }
        Tt.publish("addFonts", {
            fonts: Ft,
            dictionary: Ct
        });
    }, Ie = function(t5) {
        return t5.foo = function() {
            try {
                return t5.apply(this, arguments);
            } catch (t) {
                var e = t.stack || "";
                ~e.indexOf(" at ") && (e = e.split(" at ")[1]);
                var r = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + t.message;
                if (!$ffb17689dbc03ee8$var$n.console) throw new Error(r);
                $ffb17689dbc03ee8$var$n.console.error(r, t), $ffb17689dbc03ee8$var$n.alert && alert(r);
            }
        }, t5.foo.bar = t5, t5.foo;
    }, Fe = function(t, e) {
        var r, n, i, a, o, s, c, u, h;
        if (i = (e = e || {
        }).sourceEncoding || "Unicode", o = e.outputEncoding, (e.autoencode || o) && Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].metadata && Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].metadata[i] && Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].metadata[i].encoding && (a = Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].metadata[i].encoding, !o && Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].encoding && (o = Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].encoding), !o && a.codePages && (o = a.codePages[0]), "string" == typeof o && (o = a[o]), o)) {
            for(c = !1, s = [], r = 0, n = t.length; r < n; r++)(u = o[t.charCodeAt(r)]) ? s.push(String.fromCharCode(u)) : s.push(t[r]), s[r].charCodeAt(0) >> 8 && (c = !0);
            t = s.join("");
        }
        for(r = t.length; void 0 === c && 0 !== r;)t.charCodeAt(r - 1) >> 8 && (c = !0), r--;
        if (!c) return t;
        for(s = e.noBOM ? [] : [
            254,
            255
        ], r = 0, n = t.length; r < n; r++){
            if ((h = (u = t.charCodeAt(r)) >> 8) >> 8) throw new Error("Character at position " + r + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
            s.push(h), s.push(u - (h << 8));
        }
        return String.fromCharCode.apply(void 0, s);
    }, Ce = y1.__private__.pdfEscape = y1.pdfEscape = function(t, e) {
        return Fe(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    }, je = y1.__private__.beginPage = function(t) {
        ot1[++Dt] = [], Rt[Dt] = {
            objId: 0,
            contentsObjId: 0,
            userUnit: Number(d1),
            artBox: null,
            bleedBox: null,
            cropBox: null,
            trimBox: null,
            mediaBox: {
                bottomLeftX: 0,
                bottomLeftY: 0,
                topRightX: Number(t[0]),
                topRightY: Number(t[1])
            }
        }, Me(Dt), ht1(ot1[$1]);
    }, Oe = function(t, e) {
        var r, n, o;
        switch(i1 = e || i1, "string" == typeof t && (r = A1(t.toLowerCase()), Array.isArray(r) && (n = r[0], o = r[1])), Array.isArray(t) && (n = t[0] * _t, o = t[1] * _t), isNaN(n) && (n = s1[0], o = s1[1]), (n > 14400 || o > 14400) && ($ffb17689dbc03ee8$var$a.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), n = Math.min(14400, n), o = Math.min(14400, o)), s1 = [
            n,
            o
        ], i1.substr(0, 1)){
            case "l":
                o > n && (s1 = [
                    o,
                    n
                ]);
                break;
            case "p":
                n > o && (s1 = [
                    o,
                    n
                ]);
        }
        je(s1), pr(fr), lt(Lr), 0 !== kr && lt(kr + " J"), 0 !== Ir && lt(Ir + " j"), Tt.publish("addPage", {
            pageNumber: Dt
        });
    }, Be = function(t) {
        t > 0 && t <= Dt && (ot1.splice(t, 1), Rt.splice(t, 1), Dt--, $1 > Dt && ($1 = Dt), this.setPage($1));
    }, Me = function(t) {
        t > 0 && t <= Dt && ($1 = t);
    }, Ee = y1.__private__.getNumberOfPages = y1.getNumberOfPages = function() {
        return ot1.length - 1;
    }, qe = function(t, e, r) {
        var n, i = void 0;
        return r = r || {
        }, t = void 0 !== t ? t : Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].fontName, e = void 0 !== e ? e : Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].fontStyle, n = t.toLowerCase(), void 0 !== Ct[n] && void 0 !== Ct[n][e] ? i = Ct[n][e] : void 0 !== Ct[t] && void 0 !== Ct[t][e] ? i = Ct[t][e] : !1 === r.disableWarning && $ffb17689dbc03ee8$var$a.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."), i || r.noFallback || null == (i = Ct.times[e]) && (i = Ct.times.normal), i;
    }, De = y1.__private__.putInfo = function() {
        var t6 = Xt(), e = function(t) {
            return t;
        };
        for(var r in null !== m1 && (e = Ye.encryptor(t6, 0)), lt("<<"), lt("/Producer (" + Ce(e("jsPDF " + $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.version)) + ")"), xt)xt.hasOwnProperty(r) && xt[r] && lt("/" + r.substr(0, 1).toUpperCase() + r.substr(1) + " (" + Ce(e(xt[r])) + ")");
        lt("/CreationDate (" + Ce(e(W1)) + ")"), lt(">>"), lt("endobj");
    }, Re = y1.__private__.putCatalog = function(t) {
        var e = (t = t || {
        }).rootDictionaryObjId || Qt;
        switch(Xt(), lt("<<"), lt("/Type /Catalog"), lt("/Pages " + e + " 0 R"), $ffb17689dbc03ee8$export$6aae594af76bbb7b || ($ffb17689dbc03ee8$export$6aae594af76bbb7b = "fullwidth"), $ffb17689dbc03ee8$export$6aae594af76bbb7b){
            case "fullwidth":
                lt("/OpenAction [3 0 R /FitH null]");
                break;
            case "fullheight":
                lt("/OpenAction [3 0 R /FitV null]");
                break;
            case "fullpage":
                lt("/OpenAction [3 0 R /Fit]");
                break;
            case "original":
                lt("/OpenAction [3 0 R /XYZ null null 1]");
                break;
            default:
                var r = "" + $ffb17689dbc03ee8$export$6aae594af76bbb7b;
                "%" === r.substr(r.length - 1) && ($ffb17689dbc03ee8$export$6aae594af76bbb7b = parseInt($ffb17689dbc03ee8$export$6aae594af76bbb7b) / 100), "number" == typeof $ffb17689dbc03ee8$export$6aae594af76bbb7b && lt("/OpenAction [3 0 R /XYZ null null " + R1($ffb17689dbc03ee8$export$6aae594af76bbb7b) + "]");
        }
        switch($ffb17689dbc03ee8$export$9d1b52e7fab50c84 || ($ffb17689dbc03ee8$export$9d1b52e7fab50c84 = "continuous"), $ffb17689dbc03ee8$export$9d1b52e7fab50c84){
            case "continuous":
                lt("/PageLayout /OneColumn");
                break;
            case "single":
                lt("/PageLayout /SinglePage");
                break;
            case "two":
            case "twoleft":
                lt("/PageLayout /TwoColumnLeft");
                break;
            case "tworight":
                lt("/PageLayout /TwoColumnRight");
        }
        yt && lt("/PageMode /" + yt), Tt.publish("putCatalog"), lt(">>"), lt("endobj");
    }, Te = y1.__private__.putTrailer = function() {
        lt("trailer"), lt("<<"), lt("/Size " + (et1 + 1)), lt("/Root " + et1 + " 0 R"), lt("/Info " + (et1 - 1) + " 0 R"), null !== m1 && lt("/Encrypt " + Ye.oid + " 0 R"), lt("/ID [ <" + V1 + "> <" + V1 + "> ]"), lt(">>");
    }, Ue = y1.__private__.putHeader = function() {
        lt("%PDF-" + w1), lt("%ºß¬à");
    }, ze = y1.__private__.putXRef = function() {
        var t = "0000000000";
        lt("xref"), lt("0 " + (et1 + 1)), lt("0000000000 65535 f ");
        for(var e = 1; e <= et1; e++)"function" == typeof rt1[e] ? lt((t + rt1[e]()).slice(-10) + " 00000 n ") : void 0 !== rt1[e] ? lt((t + rt1[e]).slice(-10) + " 00000 n ") : lt("0000000000 00000 n ");
    }, He = y1.__private__.buildDocument = function() {
        ut1(), ht1(nt1), Tt.publish("buildDocument"), Ue(), oe(), Se(), xe(), null !== m1 && be(), De(), Re();
        var t = it1;
        return ze(), Te(), lt("startxref"), lt("" + t), lt("%%EOF"), ht1(ot1[$1]), nt1.join("\n");
    }, We = y1.__private__.getBlob = function(t) {
        return new Blob([
            $ffb17689dbc03ee8$export$9e021dd9568dc486(t)
        ], {
            type: "application/pdf"
        });
    }, Ve = y1.output = y1.__private__.output = Ie(function(t, e) {
        switch("string" == typeof (e = e || {
        }) ? e = {
            filename: e
        } : e.filename = e.filename || "generated.pdf", t){
            case void 0:
                return He();
            case "save":
                y1.save(e.filename);
                break;
            case "arraybuffer":
                return $ffb17689dbc03ee8$export$9e021dd9568dc486(He());
            case "blob":
                return We(He());
            case "bloburi":
            case "bloburl":
                if (void 0 !== $ffb17689dbc03ee8$var$n.URL && "function" == typeof $ffb17689dbc03ee8$var$n.URL.createObjectURL) return $ffb17689dbc03ee8$var$n.URL && $ffb17689dbc03ee8$var$n.URL.createObjectURL(We(He())) || void 0;
                $ffb17689dbc03ee8$var$a.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
                break;
            case "datauristring":
            case "dataurlstring":
                var r = "", i = He();
                try {
                    r = $ffb17689dbc03ee8$var$h(i);
                } catch (t7) {
                    r = $ffb17689dbc03ee8$var$h(unescape(encodeURIComponent(i)));
                }
                return "data:application/pdf;filename=" + e.filename + ";base64," + r;
            case "pdfobjectnewwindow":
                if ("[object Window]" === Object.prototype.toString.call($ffb17689dbc03ee8$var$n)) {
                    var o = "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js", s = ' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';
                    e.pdfObjectUrl && (o = e.pdfObjectUrl, s = "");
                    var c = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + o + '"' + s + '><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(e) + ");<\/script></body></html>", u = $ffb17689dbc03ee8$var$n.open();
                    return null !== u && u.document.write(c), u;
                }
                throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
            case "pdfjsnewwindow":
                if ("[object Window]" === Object.prototype.toString.call($ffb17689dbc03ee8$var$n)) {
                    var l = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + e.filename + '" width="500px" height="400px" /></body></html>', f = $ffb17689dbc03ee8$var$n.open();
                    if (null !== f) {
                        f.document.write(l);
                        var d = this;
                        f.document.documentElement.querySelector("#pdfViewer").onload = function() {
                            f.document.title = e.filename, f.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(d.output("bloburl"));
                        };
                    }
                    return f;
                }
                throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
            case "dataurlnewwindow":
                if ("[object Window]" !== Object.prototype.toString.call($ffb17689dbc03ee8$var$n)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
                var p = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", e) + '"></iframe></body></html>', g = $ffb17689dbc03ee8$var$n.open();
                if (null !== g && (g.document.write(p), g.document.title = e.filename), g || "undefined" == typeof safari) return g;
                break;
            case "datauri":
            case "dataurl":
                return $ffb17689dbc03ee8$var$n.document.location.href = this.output("datauristring", e);
            default:
                return null;
        }
    }), Ge = function(t) {
        return !0 === Array.isArray(Ut) && Ut.indexOf(t) > -1;
    };
    switch(o1){
        case "pt":
            _t = 1;
            break;
        case "mm":
            _t = 72 / 25.4;
            break;
        case "cm":
            _t = 72 / 2.54;
            break;
        case "in":
            _t = 72;
            break;
        case "px":
            _t = 1 == Ge("px_scaling") ? 0.75 : 96 / 72;
            break;
        case "pc":
        case "em":
            _t = 12;
            break;
        case "ex":
            _t = 6;
            break;
        default:
            if ("number" != typeof o1) throw new Error("Invalid unit: " + o1);
            _t = o1;
    }
    var Ye = null;
    K1(), Y1();
    var Je = function(t8) {
        return null !== m1 ? Ye.encryptor(t8, 0) : function(t) {
            return t;
        };
    }, Xe = y1.__private__.getPageInfo = y1.getPageInfo = function(t) {
        if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
        return {
            objId: Rt[t].objId,
            pageNumber: t,
            pageContext: Rt[t]
        };
    }, Ke = y1.__private__.getPageInfoByObjId = function(t) {
        if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
        for(var e in Rt)if (Rt[e].objId === t) break;
        return Xe(e);
    }, Ze = y1.__private__.getCurrentPageInfo = y1.getCurrentPageInfo = function() {
        return {
            objId: Rt[$1].objId,
            pageNumber: $1,
            pageContext: Rt[$1]
        };
    };
    y1.addPage = function() {
        return Oe.apply(this, arguments), this;
    }, y1.setPage = function() {
        return Me.apply(this, arguments), ht1.call(this, ot1[$1]), this;
    }, y1.insertPage = function(t) {
        return this.addPage(), this.movePage($1, t), this;
    }, y1.movePage = function(t, e) {
        var r, n;
        if (t > e) {
            r = ot1[t], n = Rt[t];
            for(var i = t; i > e; i--)ot1[i] = ot1[i - 1], Rt[i] = Rt[i - 1];
            ot1[e] = r, Rt[e] = n, this.setPage(e);
        } else if (t < e) {
            r = ot1[t], n = Rt[t];
            for(var a = t; a < e; a++)ot1[a] = ot1[a + 1], Rt[a] = Rt[a + 1];
            ot1[e] = r, Rt[e] = n, this.setPage(e);
        }
        return this;
    }, y1.deletePage = function() {
        return Be.apply(this, arguments), this;
    }, y1.__private__.text = y1.text = function(e5, r4, n1, i2, a1) {
        var o2, s2, c, u, h, l, f, d, p, g = (i2 = i2 || {
        }).scope || this;
        if ("number" == typeof e5 && "number" == typeof r4 && ("string" == typeof n1 || Array.isArray(n1))) {
            var m = n1;
            n1 = r4, r4 = e5, e5 = m;
        }
        if (arguments[3] instanceof Vt == !1 ? (c = arguments[4], u = arguments[5], "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(f = arguments[3]) && null !== f || ("string" == typeof c && (u = c, c = null), "string" == typeof f && (u = f, f = null), "number" == typeof f && (c = f, f = null), i2 = {
            flags: f,
            angle: c,
            align: u
        })) : (q("The transform parameter of text() with a Matrix value"), p = a1), isNaN(r4) || isNaN(n1) || null == e5) throw new Error("Invalid arguments passed to jsPDF.text");
        if (0 === e5.length) return g;
        var v = "", y = !1, w = "number" == typeof i2.lineHeightFactor ? i2.lineHeightFactor : lr, N = g.internal.scaleFactor;
        function L(t) {
            return t = t.split("\t").join(Array(i2.TabLen || 9).join(" ")), Ce(t, f);
        }
        function A(t) {
            for(var e, r = t.concat(), n = [], i = r.length; i--;)"string" == typeof (e = r.shift()) ? n.push(e) : Array.isArray(t) && (1 === e.length || void 0 === e[1] && void 0 === e[2]) ? n.push(e[0]) : n.push([
                e[0],
                e[1],
                e[2]
            ]);
            return n;
        }
        function _(t, e) {
            var r;
            if ("string" == typeof t) r = e(t)[0];
            else if (Array.isArray(t)) {
                for(var n, i, a = t.concat(), o = [], s = a.length; s--;)"string" == typeof (n = a.shift()) ? o.push(e(n)[0]) : Array.isArray(n) && "string" == typeof n[0] && (i = e(n[0], n[1], n[2]), o.push([
                    i[0],
                    i[1],
                    i[2]
                ]));
                r = o;
            }
            return r;
        }
        var P = !1, k = !0;
        if ("string" == typeof e5) P = !0;
        else if (Array.isArray(e5)) {
            var I = e5.concat();
            s2 = [];
            for(var F, C = I.length; C--;)("string" != typeof (F = I.shift()) || Array.isArray(F) && "string" != typeof F[0]) && (k = !1);
            P = k;
        }
        if (!1 === P) throw new Error('Type of text must be string or Array. "' + e5 + '" is not recognized.');
        "string" == typeof e5 && (e5 = e5.match(/[\r?\n]/) ? e5.split(/\r\n|\r|\n/g) : [
            e5
        ]);
        var $ffb17689dbc03ee8$export$1bc649ab427a02ba = $ffb17689dbc03ee8$export$4af052e7e598ad1a / g.internal.scaleFactor, $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = $ffb17689dbc03ee8$export$1bc649ab427a02ba * (w - 1);
        switch(i2.baseline){
            case "bottom":
                n1 -= $ffb17689dbc03ee8$export$7235f0ad083cb4c6;
                break;
            case "top":
                n1 += $ffb17689dbc03ee8$export$1bc649ab427a02ba - $ffb17689dbc03ee8$export$7235f0ad083cb4c6;
                break;
            case "hanging":
                n1 += $ffb17689dbc03ee8$export$1bc649ab427a02ba - 2 * $ffb17689dbc03ee8$export$7235f0ad083cb4c6;
                break;
            case "middle":
                n1 += $ffb17689dbc03ee8$export$1bc649ab427a02ba / 2 - $ffb17689dbc03ee8$export$7235f0ad083cb4c6;
        }
        if ((l = i2.maxWidth || 0) > 0 && ("string" == typeof e5 ? e5 = g.splitTextToSize(e5, l) : "[object Array]" === Object.prototype.toString.call(e5) && (e5 = e5.reduce(function(t, e) {
            return t.concat(g.splitTextToSize(e, l));
        }, []))), o2 = {
            text: e5,
            x: r4,
            y: n1,
            options: i2,
            mutex: {
                pdfEscape: Ce,
                activeFontKey: $ffb17689dbc03ee8$export$9cf40f67b77f45f4,
                fonts: Ft,
                activeFontSize: $ffb17689dbc03ee8$export$4af052e7e598ad1a
            }
        }, Tt.publish("preProcessText", o2), e5 = o2.text, c = (i2 = o2.options).angle, p instanceof Vt == !1 && c && "number" == typeof c) {
            c *= Math.PI / 180, 0 === i2.rotationDirection && (c = -c), S === x.ADVANCED && (c = -c);
            var $ffb17689dbc03ee8$export$549f717800d2b57f = Math.cos(c), $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 = Math.sin(c);
            p = new Vt($ffb17689dbc03ee8$export$549f717800d2b57f, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5, -$ffb17689dbc03ee8$export$ba1e2ffc633a60f5, $ffb17689dbc03ee8$export$549f717800d2b57f, 0, 0);
        } else c && c instanceof Vt && (p = c);
        S !== x.ADVANCED || p || (p = Yt), void 0 !== (h = i2.charSpace || _r) && (v += O(U(h)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), void 0 !== (d = i2.horizontalScale) && (v += O(100 * d) + " Tz\n");
        i2.lang;
        var D = -1, R = void 0 !== i2.renderingMode ? i2.renderingMode : i2.stroke, T = g.internal.getCurrentPageInfo().pageContext;
        switch(R){
            case 0:
            case !1:
            case "fill":
                D = 0;
                break;
            case 1:
            case !0:
            case "stroke":
                D = 1;
                break;
            case 2:
            case "fillThenStroke":
                D = 2;
                break;
            case 3:
            case "invisible":
                D = 3;
                break;
            case 4:
            case "fillAndAddForClipping":
                D = 4;
                break;
            case 5:
            case "strokeAndAddPathForClipping":
                D = 5;
                break;
            case 6:
            case "fillThenStrokeAndAddToPathForClipping":
                D = 6;
                break;
            case 7:
            case "addToPathForClipping":
                D = 7;
        }
        var z = void 0 !== T.usedRenderingMode ? T.usedRenderingMode : -1;
        -1 !== D ? v += D + " Tr\n" : -1 !== z && (v += "0 Tr\n"), -1 !== D && (T.usedRenderingMode = D), u = i2.align || "left";
        var H, W = $ffb17689dbc03ee8$export$4af052e7e598ad1a * w, V = g.internal.pageSize.getWidth(), G = Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4];
        h = i2.charSpace || _r, l = i2.maxWidth || 0, f = Object.assign({
            autoencode: !0,
            noBOM: !0
        }, i2.flags);
        var Y = [];
        if ("[object Array]" === Object.prototype.toString.call(e5)) {
            var J;
            s2 = A(e5), "left" !== u && (H = s2.map(function(t) {
                return g.getStringUnitWidth(t, {
                    font: G,
                    charSpace: h,
                    fontSize: $ffb17689dbc03ee8$export$4af052e7e598ad1a,
                    doKerning: !1
                }) * $ffb17689dbc03ee8$export$4af052e7e598ad1a / N;
            }));
            var X, K = 0;
            if ("right" === u) {
                r4 -= H[0], e5 = [], C = s2.length;
                for(var Z = 0; Z < C; Z++)0 === Z ? (X = br(r4), J = yr(n1)) : (X = U(K - H[Z]), J = -W), e5.push([
                    s2[Z],
                    X,
                    J
                ]), K = H[Z];
            } else if ("center" === u) {
                r4 -= H[0] / 2, e5 = [], C = s2.length;
                for(var $ = 0; $ < C; $++)0 === $ ? (X = br(r4), J = yr(n1)) : (X = U((K - H[$]) / 2), J = -W), e5.push([
                    s2[$],
                    X,
                    J
                ]), K = H[$];
            } else if ("left" === u) {
                e5 = [], C = s2.length;
                for(var Q = 0; Q < C; Q++)e5.push(s2[Q]);
            } else {
                if ("justify" !== u) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
                e5 = [], C = s2.length, l = 0 !== l ? l : V;
                for(var tt = 0; tt < C; tt++)J = 0 === tt ? yr(n1) : -W, X = 0 === tt ? br(r4) : 0, tt < C - 1 ? Y.push(O(U((l - H[tt]) / (s2[tt].split(" ").length - 1)))) : Y.push(0), e5.push([
                    s2[tt],
                    X,
                    J
                ]);
            }
        }
        var et = "boolean" == typeof i2.R2L ? i2.R2L : $ffb17689dbc03ee8$export$bc1318bc7e5f1315;
        !0 === et && (e5 = _(e5, function(t, e, r) {
            return [
                t.split("").reverse().join(""),
                e,
                r
            ];
        })), o2 = {
            text: e5,
            x: r4,
            y: n1,
            options: i2,
            mutex: {
                pdfEscape: Ce,
                activeFontKey: $ffb17689dbc03ee8$export$9cf40f67b77f45f4,
                fonts: Ft,
                activeFontSize: $ffb17689dbc03ee8$export$4af052e7e598ad1a
            }
        }, Tt.publish("postProcessText", o2), e5 = o2.text, y = o2.mutex.isHex || !1;
        var rt = Ft[$ffb17689dbc03ee8$export$9cf40f67b77f45f4].encoding;
        "WinAnsiEncoding" !== rt && "StandardEncoding" !== rt || (e5 = _(e5, function(t, e, r) {
            return [
                L(t),
                e,
                r
            ];
        })), s2 = A(e5), e5 = [];
        for(var nt, it, at, ot = 0, st = 1, ct = Array.isArray(s2[0]) ? st : ot, ut = "", ht = function(t, e, r) {
            var n = "";
            return r instanceof Vt ? (r = "number" == typeof i2.angle ? Gt(r, new Vt(1, 0, 0, 1, t, e)) : Gt(new Vt(1, 0, 0, 1, t, e), r), S === x.ADVANCED && (r = Gt(new Vt(1, 0, 0, -1, 0, 0), r)), n = r.join(" ") + " Tm\n") : n = O(t) + " " + O(e) + " Td\n", n;
        }, $ffb17689dbc03ee8$export$a47202eb3f827bb2 = 0; $ffb17689dbc03ee8$export$a47202eb3f827bb2 < s2.length; $ffb17689dbc03ee8$export$a47202eb3f827bb2++){
            switch(ut = "", ct){
                case st:
                    at = (y ? "<" : "(") + s2[$ffb17689dbc03ee8$export$a47202eb3f827bb2][0] + (y ? ">" : ")"), nt = parseFloat(s2[$ffb17689dbc03ee8$export$a47202eb3f827bb2][1]), it = parseFloat(s2[$ffb17689dbc03ee8$export$a47202eb3f827bb2][2]);
                    break;
                case ot:
                    at = (y ? "<" : "(") + s2[$ffb17689dbc03ee8$export$a47202eb3f827bb2] + (y ? ">" : ")"), nt = br(r4), it = yr(n1);
            }
            void 0 !== Y && void 0 !== Y[$ffb17689dbc03ee8$export$a47202eb3f827bb2] && (ut = Y[$ffb17689dbc03ee8$export$a47202eb3f827bb2] + " Tw\n"), 0 === $ffb17689dbc03ee8$export$a47202eb3f827bb2 ? e5.push(ut + ht(nt, it, p) + at) : ct === ot ? e5.push(ut + at) : ct === st && e5.push(ut + ht(nt, it, p) + at);
        }
        e5 = ct === ot ? e5.join(" Tj\nT* ") : e5.join(" Tj\n"), e5 += " Tj\n";
        var $ffb17689dbc03ee8$export$9e021dd9568dc486 = "BT\n/";
        return $ffb17689dbc03ee8$export$9e021dd9568dc486 += $ffb17689dbc03ee8$export$9cf40f67b77f45f4 + " " + $ffb17689dbc03ee8$export$4af052e7e598ad1a + " Tf\n", $ffb17689dbc03ee8$export$9e021dd9568dc486 += O($ffb17689dbc03ee8$export$4af052e7e598ad1a * w) + " TL\n", $ffb17689dbc03ee8$export$9e021dd9568dc486 += xr + "\n", $ffb17689dbc03ee8$export$9e021dd9568dc486 += v, $ffb17689dbc03ee8$export$9e021dd9568dc486 += e5, lt($ffb17689dbc03ee8$export$9e021dd9568dc486 += "ET"), b[$ffb17689dbc03ee8$export$9cf40f67b77f45f4] = !0, g;
    };
    var $e = y1.__private__.clip = y1.clip = function(t) {
        return lt("evenodd" === t ? "W*" : "W"), this;
    };
    y1.clipEvenOdd = function() {
        return $e("evenodd");
    }, y1.__private__.discardPath = y1.discardPath = function() {
        return lt("n"), this;
    };
    var Qe = y1.__private__.isValidStyle = function(t) {
        var e = !1;
        return -1 !== [
            void 0,
            null,
            "S",
            "D",
            "F",
            "DF",
            "FD",
            "f",
            "f*",
            "B",
            "B*",
            "n"
        ].indexOf(t) && (e = !0), e;
    };
    y1.__private__.setDefaultPathOperation = y1.setDefaultPathOperation = function(t) {
        return Qe(t) && (g1 = t), this;
    };
    var tr = y1.__private__.getStyle = y1.getStyle = function(t) {
        var e = g1;
        switch(t){
            case "D":
            case "S":
                e = "S";
                break;
            case "F":
                e = "f";
                break;
            case "FD":
            case "DF":
                e = "B";
                break;
            case "f":
            case "f*":
            case "B":
            case "B*":
                e = t;
        }
        return e;
    }, er = y1.close = function() {
        return lt("h"), this;
    };
    y1.stroke = function() {
        return lt("S"), this;
    }, y1.fill = function(t) {
        return rr("f", t), this;
    }, y1.fillEvenOdd = function(t) {
        return rr("f*", t), this;
    }, y1.fillStroke = function(t) {
        return rr("B", t), this;
    }, y1.fillStrokeEvenOdd = function(t) {
        return rr("B*", t), this;
    };
    var rr = function(e, r) {
        "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(r) ? ar(r, e) : lt(e);
    }, nr = function(t) {
        null === t || S === x.ADVANCED && void 0 === t || (t = tr(t), lt(t));
    };
    function ir(t, e, r, n, i) {
        var a = new $ffb17689dbc03ee8$export$549f717800d2b57f(e || this.boundingBox, r || this.xStep, n || this.yStep, this.gState, i || this.matrix);
        a.stream = this.stream;
        var o = t + "$$" + this.cloneIndex++ + "$$";
        return Jt(o, a), a;
    }
    var ar = function(t, e) {
        var r = Bt[t.key], n = Ot[r];
        if (n instanceof $ffb17689dbc03ee8$export$7235f0ad083cb4c6) lt("q"), lt(or(e)), n.gState && y1.setGState(n.gState), lt(t.matrix.toString() + " cm"), lt("/" + r + " sh"), lt("Q");
        else if (n instanceof $ffb17689dbc03ee8$export$549f717800d2b57f) {
            var i = new Vt(1, 0, 0, -1, 0, Rr());
            t.matrix && (i = i.multiply(t.matrix || Yt), r = ir.call(n, t.key, t.boundingBox, t.xStep, t.yStep, i).id), lt("q"), lt("/Pattern cs"), lt("/" + r + " scn"), n.gState && y1.setGState(n.gState), lt(e), lt("Q");
        }
    }, or = function(t) {
        switch(t){
            case "f":
            case "F":
                return "W n";
            case "f*":
                return "W* n";
            case "B":
                return "W S";
            case "B*":
                return "W* S";
            case "S":
                return "W S";
            case "n":
                return "W n";
        }
    }, sr = y1.moveTo = function(t, e) {
        return lt(O(U(t)) + " " + O(H1(e)) + " m"), this;
    }, cr = y1.lineTo = function(t, e) {
        return lt(O(U(t)) + " " + O(H1(e)) + " l"), this;
    }, ur = y1.curveTo = function(t, e, r, n, i, a) {
        return lt([
            O(U(t)),
            O(H1(e)),
            O(U(r)),
            O(H1(n)),
            O(U(i)),
            O(H1(a)),
            "c"
        ].join(" ")), this;
    };
    y1.__private__.line = y1.line = function(t, e, r, n, i) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i)) throw new Error("Invalid arguments passed to jsPDF.line");
        return S === x.COMPAT ? this.lines([
            [
                r - t,
                n - e
            ]
        ], t, e, [
            1,
            1
        ], i || "S") : this.lines([
            [
                r - t,
                n - e
            ]
        ], t, e, [
            1,
            1
        ]).stroke();
    }, y1.__private__.lines = y1.lines = function(t, e, r, n, i, a) {
        var o, s, c, u, h, l, f, d, p, g, m, v;
        if ("number" == typeof t && (v = r, r = e, e = t, t = v), n = n || [
            1,
            1
        ], a = a || !1, isNaN(e) || isNaN(r) || !Array.isArray(t) || !Array.isArray(n) || !Qe(i) || "boolean" != typeof a) throw new Error("Invalid arguments passed to jsPDF.lines");
        for(sr(e, r), o = n[0], s = n[1], u = t.length, g = e, m = r, c = 0; c < u; c++)2 === (h = t[c]).length ? (g = h[0] * o + g, m = h[1] * s + m, cr(g, m)) : (l = h[0] * o + g, f = h[1] * s + m, d = h[2] * o + g, p = h[3] * s + m, g = h[4] * o + g, m = h[5] * s + m, ur(l, f, d, p, g, m));
        return a && er(), nr(i), this;
    }, y1.path = function(t) {
        for(var e = 0; e < t.length; e++){
            var r = t[e], n = r.c;
            switch(r.op){
                case "m":
                    sr(n[0], n[1]);
                    break;
                case "l":
                    cr(n[0], n[1]);
                    break;
                case "c":
                    ur.apply(this, n);
                    break;
                case "h":
                    er();
            }
        }
        return this;
    }, y1.__private__.rect = y1.rect = function(t, e, r, n, i) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i)) throw new Error("Invalid arguments passed to jsPDF.rect");
        return S === x.COMPAT && (n = -n), lt([
            O(U(t)),
            O(H1(e)),
            O(U(r)),
            O(U(n)),
            "re"
        ].join(" ")), nr(i), this;
    }, y1.__private__.triangle = y1.triangle = function(t, e, r, n, i, a, o) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || !Qe(o)) throw new Error("Invalid arguments passed to jsPDF.triangle");
        return this.lines([
            [
                r - t,
                n - e
            ],
            [
                i - r,
                a - n
            ],
            [
                t - i,
                e - a
            ]
        ], t, e, [
            1,
            1
        ], o, !0), this;
    }, y1.__private__.roundedRect = y1.roundedRect = function(t, e, r, n, i, a, o) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(a) || !Qe(o)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
        var s = 4 / 3 * (Math.SQRT2 - 1);
        return i = Math.min(i, 0.5 * r), a = Math.min(a, 0.5 * n), this.lines([
            [
                r - 2 * i,
                0
            ],
            [
                i * s,
                0,
                i,
                a - a * s,
                i,
                a
            ],
            [
                0,
                n - 2 * a
            ],
            [
                0,
                a * s,
                -i * s,
                a,
                -i,
                a
            ],
            [
                2 * i - r,
                0
            ],
            [
                -i * s,
                0,
                -i,
                -a * s,
                -i,
                -a
            ],
            [
                0,
                2 * a - n
            ],
            [
                0,
                -a * s,
                i * s,
                -a,
                i,
                -a
            ]
        ], t + i, e, [
            1,
            1
        ], o, !0), this;
    }, y1.__private__.ellipse = y1.ellipse = function(t, e, r, n, i) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || !Qe(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
        var a = 4 / 3 * (Math.SQRT2 - 1) * r, o = 4 / 3 * (Math.SQRT2 - 1) * n;
        return sr(t + r, e), ur(t + r, e - o, t + a, e - n, t, e - n), ur(t - a, e - n, t - r, e - o, t - r, e), ur(t - r, e + o, t - a, e + n, t, e + n), ur(t + a, e + n, t + r, e + o, t + r, e), nr(i), this;
    }, y1.__private__.circle = y1.circle = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || !Qe(n)) throw new Error("Invalid arguments passed to jsPDF.circle");
        return this.ellipse(t, e, r, r, n);
    }, y1.setFont = function(t, e, r) {
        return r && (e = k1(e, r)), $ffb17689dbc03ee8$export$9cf40f67b77f45f4 = qe(t, e, {
            disableWarning: !1
        }), this;
    };
    var hr = y1.__private__.getFont = y1.getFont = function() {
        return Ft[qe.apply(y1, arguments)];
    };
    y1.__private__.getFontList = y1.getFontList = function() {
        var t, e, r = {
        };
        for(t in Ct)if (Ct.hasOwnProperty(t)) for(e in r[t] = [], Ct[t])Ct[t].hasOwnProperty(e) && r[t].push(e);
        return r;
    }, y1.addFont = function(t, e, r, n, i) {
        var a = [
            "StandardEncoding",
            "MacRomanEncoding",
            "Identity-H",
            "WinAnsiEncoding"
        ];
        return arguments[3] && -1 !== a.indexOf(arguments[3]) ? i = arguments[3] : arguments[3] && -1 == a.indexOf(arguments[3]) && (r = k1(r, n)), i = i || "Identity-H", Pe.call(this, t, e, r, i);
    };
    var lr, fr = e4.lineWidth || 0.200025, dr = y1.__private__.getLineWidth = y1.getLineWidth = function() {
        return fr;
    }, pr = y1.__private__.setLineWidth = y1.setLineWidth = function(t) {
        return fr = t, lt(O(U(t)) + " w"), this;
    };
    y1.__private__.setLineDash = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.setLineDash = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.setLineDashPattern = function(t9, e) {
        if (t9 = t9 || [], e = e || 0, isNaN(e) || !Array.isArray(t9)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
        return t9 = t9.map(function(t) {
            return O(U(t));
        }).join(" "), e = O(U(e)), lt("[" + t9 + "] " + e + " d"), this;
    };
    var gr = y1.__private__.getLineHeight = y1.getLineHeight = function() {
        return $ffb17689dbc03ee8$export$4af052e7e598ad1a * lr;
    };
    y1.__private__.getLineHeight = y1.getLineHeight = function() {
        return $ffb17689dbc03ee8$export$4af052e7e598ad1a * lr;
    };
    var mr = y1.__private__.setLineHeightFactor = y1.setLineHeightFactor = function(t) {
        return "number" == typeof (t = t || 1.15) && (lr = t), this;
    }, vr = y1.__private__.getLineHeightFactor = y1.getLineHeightFactor = function() {
        return lr;
    };
    mr(e4.lineHeight);
    var br = y1.__private__.getHorizontalCoordinate = function(t) {
        return U(t);
    }, yr = y1.__private__.getVerticalCoordinate = function(t) {
        return S === x.ADVANCED ? t : Rt[$1].mediaBox.topRightY - Rt[$1].mediaBox.bottomLeftY - U(t);
    }, wr = y1.__private__.getHorizontalCoordinateString = y1.getHorizontalCoordinateString = function(t) {
        return O(br(t));
    }, Nr = y1.__private__.getVerticalCoordinateString = y1.getVerticalCoordinateString = function(t) {
        return O(yr(t));
    }, Lr = e4.strokeColor || "0 G";
    y1.__private__.getStrokeColor = y1.getDrawColor = function() {
        return ee(Lr);
    }, y1.__private__.setStrokeColor = y1.setDrawColor = function(t, e, r, n) {
        return Lr = re({
            ch1: t,
            ch2: e,
            ch3: r,
            ch4: n,
            pdfColorType: "draw",
            precision: 2
        }), lt(Lr), this;
    };
    var Ar = e4.fillColor || "0 g";
    y1.__private__.getFillColor = y1.getFillColor = function() {
        return ee(Ar);
    }, y1.__private__.setFillColor = y1.setFillColor = function(t, e, r, n) {
        return Ar = re({
            ch1: t,
            ch2: e,
            ch3: r,
            ch4: n,
            pdfColorType: "fill",
            precision: 2
        }), lt(Ar), this;
    };
    var xr = e4.textColor || "0 g", Sr = y1.__private__.getTextColor = y1.getTextColor = function() {
        return ee(xr);
    };
    y1.__private__.setTextColor = y1.setTextColor = function(t, e, r, n) {
        return xr = re({
            ch1: t,
            ch2: e,
            ch3: r,
            ch4: n,
            pdfColorType: "text",
            precision: 3
        }), this;
    };
    var _r = e4.charSpace, Pr = y1.__private__.getCharSpace = y1.getCharSpace = function() {
        return parseFloat(_r || 0);
    };
    y1.__private__.setCharSpace = y1.setCharSpace = function(t) {
        if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
        return _r = t, this;
    };
    var kr = 0;
    y1.CapJoinStyles = {
        0: 0,
        butt: 0,
        but: 0,
        miter: 0,
        1: 1,
        round: 1,
        rounded: 1,
        circle: 1,
        2: 2,
        projecting: 2,
        project: 2,
        square: 2,
        bevel: 2
    }, y1.__private__.setLineCap = y1.setLineCap = function(t) {
        var e = y1.CapJoinStyles[t];
        if (void 0 === e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return kr = e, lt(e + " J"), this;
    };
    var Ir = 0;
    y1.__private__.setLineJoin = y1.setLineJoin = function(t) {
        var e = y1.CapJoinStyles[t];
        if (void 0 === e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
        return Ir = e, lt(e + " j"), this;
    }, y1.__private__.setLineMiterLimit = y1.__private__.setMiterLimit = y1.setLineMiterLimit = y1.setMiterLimit = function(t) {
        if (t = t || 0, isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
        return lt(O(U(t)) + " M"), this;
    }, y1.GState = $ffb17689dbc03ee8$export$1bc649ab427a02ba, y1.setGState = function(t) {
        (t = "string" == typeof t ? Mt[Et[t]] : Fr(null, t)).equals(qt) || (lt("/" + t.id + " gs"), qt = t);
    };
    var Fr = function(t, e) {
        if (!t || !Et[t]) {
            var r = !1;
            for(var n in Mt)if (Mt.hasOwnProperty(n) && Mt[n].equals(e)) {
                r = !0;
                break;
            }
            if (r) e = Mt[n];
            else {
                var i = "GS" + (Object.keys(Mt).length + 1).toString(10);
                Mt[i] = e, e.id = i;
            }
            return t && (Et[t] = e.id), Tt.publish("addGState", e), e;
        }
    };
    y1.addGState = function(t, e) {
        return Fr(t, e), this;
    }, y1.saveGraphicsState = function() {
        return lt("q"), jt.push({
            key: $ffb17689dbc03ee8$export$9cf40f67b77f45f4,
            size: $ffb17689dbc03ee8$export$4af052e7e598ad1a,
            color: xr
        }), this;
    }, y1.restoreGraphicsState = function() {
        lt("Q");
        var t = jt.pop();
        return $ffb17689dbc03ee8$export$9cf40f67b77f45f4 = t.key, $ffb17689dbc03ee8$export$4af052e7e598ad1a = t.size, xr = t.color, qt = null, this;
    }, y1.setCurrentTransformationMatrix = function(t) {
        return lt(t.toString() + " cm"), this;
    }, y1.comment = function(t) {
        return lt("#" + t), this;
    };
    var Cr = function(t10, e) {
        var r = t10 || 0;
        Object.defineProperty(this, "x", {
            enumerable: !0,
            get: function() {
                return r;
            },
            set: function(t) {
                isNaN(t) || (r = parseFloat(t));
            }
        });
        var n = e || 0;
        Object.defineProperty(this, "y", {
            enumerable: !0,
            get: function() {
                return n;
            },
            set: function(t) {
                isNaN(t) || (n = parseFloat(t));
            }
        });
        var i = "pt";
        return Object.defineProperty(this, "type", {
            enumerable: !0,
            get: function() {
                return i;
            },
            set: function(t) {
                i = t.toString();
            }
        }), this;
    }, jr = function(t11, e, r, n) {
        Cr.call(this, t11, e), this.type = "rect";
        var i = r || 0;
        Object.defineProperty(this, "w", {
            enumerable: !0,
            get: function() {
                return i;
            },
            set: function(t) {
                isNaN(t) || (i = parseFloat(t));
            }
        });
        var a = n || 0;
        return Object.defineProperty(this, "h", {
            enumerable: !0,
            get: function() {
                return a;
            },
            set: function(t) {
                isNaN(t) || (a = parseFloat(t));
            }
        }), this;
    }, Or = function() {
        this.page = Dt, this.currentPage = $1, this.pages = ot1.slice(0), this.pagesContext = Rt.slice(0), this.x = Pt, this.y = kt, this.matrix = It, this.width = qr($1), this.height = Rr($1), this.outputDestination = ct1, this.id = "", this.objectNumber = -1;
    };
    Or.prototype.restore = function() {
        Dt = this.page, $1 = this.currentPage, Rt = this.pagesContext, ot1 = this.pages, Pt = this.x, kt = this.y, It = this.matrix, Dr($1, this.width), Tr($1, this.height), ct1 = this.outputDestination;
    };
    var Br = function(t, e, r, n, i) {
        Wt.push(new Or), Dt = $1 = 0, ot1 = [], Pt = t, kt = e, It = i, je([
            r,
            n
        ]);
    }, Mr = function(t) {
        if (Ht[t]) Wt.pop().restore();
        else {
            var e = new Or, r = "Xo" + (Object.keys(zt).length + 1).toString(10);
            e.id = r, Ht[t] = r, zt[r] = e, Tt.publish("addFormObject", e), Wt.pop().restore();
        }
    };
    for(var Er in y1.beginFormObject = function(t, e, r, n, i) {
        return Br(t, e, r, n, i), this;
    }, y1.endFormObject = function(t) {
        return Mr(t), this;
    }, y1.doFormObject = function(t, e) {
        var r = zt[Ht[t]];
        return lt("q"), lt(e.toString() + " cm"), lt("/" + r.id + " Do"), lt("Q"), this;
    }, y1.getFormObject = function(t) {
        var e = zt[Ht[t]];
        return {
            x: e.x,
            y: e.y,
            width: e.width,
            height: e.height,
            matrix: e.matrix
        };
    }, y1.save = function(t12, e6) {
        return t12 = t12 || "generated.pdf", (e6 = e6 || {
        }).returnPromise = e6.returnPromise || !1, !1 === e6.returnPromise ? ($ffb17689dbc03ee8$var$l(We(He()), t12), "function" == typeof $ffb17689dbc03ee8$var$l.unload && $ffb17689dbc03ee8$var$n.setTimeout && setTimeout($ffb17689dbc03ee8$var$l.unload, 911), this) : new Promise(function(e, r) {
            try {
                var i = $ffb17689dbc03ee8$var$l(We(He()), t12);
                "function" == typeof $ffb17689dbc03ee8$var$l.unload && $ffb17689dbc03ee8$var$n.setTimeout && setTimeout($ffb17689dbc03ee8$var$l.unload, 911), e(i);
            } catch (t) {
                r(t.message);
            }
        });
    }, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API)$ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.hasOwnProperty(Er) && ("events" === Er && $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.events.length ? (function(t, e) {
        var r, n, i;
        for(i = e.length - 1; -1 !== i; i--)r = e[i][0], n = e[i][1], t.subscribe.apply(t, [
            r
        ].concat("function" == typeof n ? [
            n
        ] : n));
    })(Tt, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.events) : y1[Er] = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API[Er]);
    var qr = y1.getPageWidth = function(t) {
        return (Rt[t = t || $1].mediaBox.topRightX - Rt[t].mediaBox.bottomLeftX) / _t;
    }, Dr = y1.setPageWidth = function(t, e) {
        Rt[t].mediaBox.topRightX = e * _t + Rt[t].mediaBox.bottomLeftX;
    }, Rr = y1.getPageHeight = function(t) {
        return (Rt[t = t || $1].mediaBox.topRightY - Rt[t].mediaBox.bottomLeftY) / _t;
    }, Tr = y1.setPageHeight = function(t, e) {
        Rt[t].mediaBox.topRightY = e * _t + Rt[t].mediaBox.bottomLeftY;
    };
    return y1.internal = {
        pdfEscape: Ce,
        getStyle: tr,
        getFont: hr,
        getFontSize: $ffb17689dbc03ee8$export$98b7c3ef37465410,
        getCharSpace: Pr,
        getTextColor: Sr,
        getLineHeight: gr,
        getLineHeightFactor: vr,
        getLineWidth: dr,
        write: $ffb17689dbc03ee8$export$a47202eb3f827bb2,
        getHorizontalCoordinate: br,
        getVerticalCoordinate: yr,
        getCoordinateString: wr,
        getVerticalCoordinateString: Nr,
        collections: {
        },
        newObject: Xt,
        newAdditionalObject: $t,
        newObjectDeferred: Kt,
        newObjectDeferredBegin: Zt,
        getFilters: ne,
        putStream: ie,
        events: Tt,
        scaleFactor: _t,
        pageSize: {
            getWidth: function() {
                return qr($1);
            },
            setWidth: function(t) {
                Dr($1, t);
            },
            getHeight: function() {
                return Rr($1);
            },
            setHeight: function(t) {
                Tr($1, t);
            }
        },
        encryptionOptions: m1,
        encryption: Ye,
        getEncryptor: Je,
        output: Ve,
        getNumberOfPages: Ee,
        pages: ot1,
        out: lt,
        f2: R1,
        f3: T1,
        getPageInfo: Xe,
        getPageInfoByObjId: Ke,
        getCurrentPageInfo: Ze,
        getPDFVersion: N1,
        Point: Cr,
        Rectangle: jr,
        Matrix: Vt,
        hasHotfix: Ge
    }, Object.defineProperty(y1.internal.pageSize, "width", {
        get: function() {
            return qr($1);
        },
        set: function(t) {
            Dr($1, t);
        },
        enumerable: !0,
        configurable: !0
    }), Object.defineProperty(y1.internal.pageSize, "height", {
        get: function() {
            return Rr($1);
        },
        set: function(t) {
            Tr($1, t);
        },
        enumerable: !0,
        configurable: !0
    }), ke.call(y1, $ffb17689dbc03ee8$export$f2239d28df5f43bd), $ffb17689dbc03ee8$export$9cf40f67b77f45f4 = "F1", Oe(s1, i1), Tt.publish("initialized"), y1;
}
$ffb17689dbc03ee8$var$I.prototype.lsbFirstWord = function(t) {
    return String.fromCharCode(t >> 0 & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255);
}, $ffb17689dbc03ee8$var$I.prototype.toHexString = function(t13) {
    return t13.split("").map(function(t) {
        return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2);
    }).join("");
}, $ffb17689dbc03ee8$var$I.prototype.hexToBytes = function(t) {
    for(var e = [], r = 0; r < t.length; r += 2)e.push(String.fromCharCode(parseInt(t.substr(r, 2), 16)));
    return e.join("");
}, $ffb17689dbc03ee8$var$I.prototype.processOwnerPassword = function(t, e) {
    return $ffb17689dbc03ee8$var$P($ffb17689dbc03ee8$var$x(e).substr(0, 5), t);
}, $ffb17689dbc03ee8$var$I.prototype.encryptor = function(t14, e) {
    var r = $ffb17689dbc03ee8$var$x(this.encryptionKey + String.fromCharCode(255 & t14, t14 >> 8 & 255, t14 >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
    return function(t) {
        return $ffb17689dbc03ee8$var$P(r, t);
    };
}, $ffb17689dbc03ee8$export$1bc649ab427a02ba.prototype.equals = function(e) {
    var r, n = "id,objectNumber,equals";
    if (!e || (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e) !== (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(this)) return !1;
    var i = 0;
    for(r in this)if (!(n.indexOf(r) >= 0)) {
        if (this.hasOwnProperty(r) && !e.hasOwnProperty(r)) return !1;
        if (this[r] !== e[r]) return !1;
        i++;
    }
    for(r in e)e.hasOwnProperty(r) && n.indexOf(r) < 0 && i--;
    return 0 === i;
}, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API = {
    events: []
}, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.version = "2.5.1";
var $ffb17689dbc03ee8$var$q = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API, $ffb17689dbc03ee8$var$D = 1, $ffb17689dbc03ee8$var$R = function(t) {
    return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}, $ffb17689dbc03ee8$var$T = function(t) {
    return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}, $ffb17689dbc03ee8$var$U = function(t) {
    return t.toFixed(2);
}, $ffb17689dbc03ee8$var$z = function(t) {
    return t.toFixed(5);
};
$ffb17689dbc03ee8$var$q.__acroform__ = {
};
var $ffb17689dbc03ee8$var$H = function(t, e) {
    t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
}, $ffb17689dbc03ee8$var$W = function(t) {
    return t * $ffb17689dbc03ee8$var$D;
}, $ffb17689dbc03ee8$var$V = function(t) {
    var e = new $ffb17689dbc03ee8$var$ut, r = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) || 0, n = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) || 0;
    return e.BBox = [
        0,
        0,
        Number($ffb17689dbc03ee8$var$U(n)),
        Number($ffb17689dbc03ee8$var$U(r))
    ], e;
}, $ffb17689dbc03ee8$var$G = $ffb17689dbc03ee8$var$q.__acroform__.setBit = function(t, e) {
    if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
    return t |= 1 << e;
}, $ffb17689dbc03ee8$var$Y = $ffb17689dbc03ee8$var$q.__acroform__.clearBit = function(t, e) {
    if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
    return t &= ~(1 << e);
}, $ffb17689dbc03ee8$var$J = $ffb17689dbc03ee8$var$q.__acroform__.getBit = function(t, e) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
    return 0 == (t & 1 << e) ? 0 : 1;
}, $ffb17689dbc03ee8$var$X = $ffb17689dbc03ee8$var$q.__acroform__.getBitForPdf = function(t, e) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
    return $ffb17689dbc03ee8$var$J(t, e - 1);
}, $ffb17689dbc03ee8$var$K = $ffb17689dbc03ee8$var$q.__acroform__.setBitForPdf = function(t, e) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
    return $ffb17689dbc03ee8$var$G(t, e - 1);
}, $ffb17689dbc03ee8$var$Z = $ffb17689dbc03ee8$var$q.__acroform__.clearBitForPdf = function(t, e) {
    if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
    return $ffb17689dbc03ee8$var$Y(t, e - 1);
}, $ffb17689dbc03ee8$var$$ = $ffb17689dbc03ee8$var$q.__acroform__.calculateCoordinates = function(t, e) {
    var r = e.internal.getHorizontalCoordinate, n = e.internal.getVerticalCoordinate, i = t[0], a = t[1], o = t[2], s = t[3], c = {
    };
    return c.lowerLeft_X = r(i) || 0, c.lowerLeft_Y = n(a + s) || 0, c.upperRight_X = r(i + o) || 0, c.upperRight_Y = n(a) || 0, [
        Number($ffb17689dbc03ee8$var$U(c.lowerLeft_X)),
        Number($ffb17689dbc03ee8$var$U(c.lowerLeft_Y)),
        Number($ffb17689dbc03ee8$var$U(c.upperRight_X)),
        Number($ffb17689dbc03ee8$var$U(c.upperRight_Y))
    ];
}, $ffb17689dbc03ee8$var$Q = function(t) {
    if (t.appearanceStreamContent) return t.appearanceStreamContent;
    if (t.V || t.DV) {
        var e = [], r = t._V || t.DV, n = $ffb17689dbc03ee8$var$tt(t, r), i = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
        e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(t.scope.__private__.encodeColorString(t.color)), e.push("/" + i + " " + $ffb17689dbc03ee8$var$U(n.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(n.text), e.push("ET"), e.push("Q"), e.push("EMC");
        var a = $ffb17689dbc03ee8$var$V(t);
        return a.scope = t.scope, a.stream = e.join("\n"), a;
    }
}, $ffb17689dbc03ee8$var$tt = function(t15, e7) {
    var r5 = 0 === t15.fontSize ? t15.maxFontSize : t15.fontSize, n2 = {
        text: "",
        fontSize: ""
    }, i = (e7 = ")" == (e7 = "(" == e7.substr(0, 1) ? e7.substr(1) : e7).substr(e7.length - 1) ? e7.substr(0, e7.length - 1) : e7).split(" ");
    i = t15.multiline ? i.map(function(t) {
        return t.split("\n");
    }) : i.map(function(t) {
        return [
            t
        ];
    });
    var a2 = r5, o = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t15) || 0;
    o = o < 0 ? -o : o;
    var s = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t15) || 0;
    s = s < 0 ? -s : s;
    var c = function(e, r, n) {
        if (e + 1 < i.length) {
            var a = r + " " + i[e + 1][0];
            return $ffb17689dbc03ee8$var$et(a, t15, n).width <= s - 4;
        }
        return !1;
    };
    a2++;
    t: for(; a2 > 0;){
        e7 = "", a2--;
        var u, h, l = $ffb17689dbc03ee8$var$et("3", t15, a2).height, f = t15.multiline ? o - a2 : (o - l) / 2, d = f += 2, p = 0, g = 0, m = 0;
        if (a2 <= 0) {
            e7 = "(...) Tj\n", e7 += "% Width of Text: " + $ffb17689dbc03ee8$var$et(e7, t15, a2 = 12).width + ", FieldWidth:" + s + "\n";
            break;
        }
        for(var v = "", b = 0, y = 0; y < i.length; y++)if (i.hasOwnProperty(y)) {
            var w = !1;
            if (1 !== i[y].length && m !== i[y].length - 1) {
                if ((l + 2) * (b + 2) + 2 > o) continue t;
                v += i[y][m], w = !0, g = y, y--;
            } else {
                v = " " == (v += i[y][m] + " ").substr(v.length - 1) ? v.substr(0, v.length - 1) : v;
                var N = parseInt(y), L = c(N, v, a2), A = y >= i.length - 1;
                if (L && !A) {
                    v += " ", m = 0;
                    continue;
                }
                if (L || A) {
                    if (A) g = N;
                    else if (t15.multiline && (l + 2) * (b + 2) + 2 > o) continue t;
                } else {
                    if (!t15.multiline) continue t;
                    if ((l + 2) * (b + 2) + 2 > o) continue t;
                    g = N;
                }
            }
            for(var x = "", S = p; S <= g; S++){
                var _ = i[S];
                if (t15.multiline) {
                    if (S === g) {
                        x += _[m] + " ", m = (m + 1) % _.length;
                        continue;
                    }
                    if (S === p) {
                        x += _[_.length - 1] + " ";
                        continue;
                    }
                }
                x += _[0] + " ";
            }
            switch(x = " " == x.substr(x.length - 1) ? x.substr(0, x.length - 1) : x, h = $ffb17689dbc03ee8$var$et(x, t15, a2).width, t15.textAlign){
                case "right":
                    u = s - h - 2;
                    break;
                case "center":
                    u = (s - h) / 2;
                    break;
                case "left":
                default:
                    u = 2;
            }
            e7 += $ffb17689dbc03ee8$var$U(u) + " " + $ffb17689dbc03ee8$var$U(d) + " Td\n", e7 += "(" + $ffb17689dbc03ee8$var$R(x) + ") Tj\n", e7 += -$ffb17689dbc03ee8$var$U(u) + " 0 Td\n", d = -(a2 + 2), h = 0, p = w ? g : g + 1, b++, v = "";
        }
        break;
    }
    return n2.text = e7, n2.fontSize = a2, n2;
}, $ffb17689dbc03ee8$var$et = function(t, e, r) {
    var n = e.scope.internal.getFont(e.fontName, e.fontStyle), i = e.scope.getStringUnitWidth(t, {
        font: n,
        fontSize: parseFloat(r),
        charSpace: 0
    }) * parseFloat(r);
    return {
        height: e.scope.getStringUnitWidth("3", {
            font: n,
            fontSize: parseFloat(r),
            charSpace: 0
        }) * parseFloat(r) * 1.5,
        width: i
    };
}, $ffb17689dbc03ee8$var$rt = {
    fields: [],
    xForms: [],
    acroFormDictionaryRoot: null,
    printedOut: !1,
    internal: null,
    isInitialized: !1
}, $ffb17689dbc03ee8$var$nt = function(t16, e) {
    var r = {
        type: "reference",
        object: t16
    };
    void 0 === e.internal.getPageInfo(t16.page).pageContext.annotations.find(function(t) {
        return t.type === r.type && t.object === r.object;
    }) && e.internal.getPageInfo(t16.page).pageContext.annotations.push(r);
}, $ffb17689dbc03ee8$var$it = function(e, r) {
    for(var n in e)if (e.hasOwnProperty(n)) {
        var i = n, a = e[n];
        r.internal.newObjectDeferredBegin(a.objId, !0), "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(a) && "function" == typeof a.putStream && a.putStream(), delete e[i];
    }
}, $ffb17689dbc03ee8$var$at = function(e8, r6) {
    if (r6.scope = e8, void 0 !== e8.internal && (void 0 === e8.internal.acroformPlugin || !1 === e8.internal.acroformPlugin.isInitialized)) {
        if ($ffb17689dbc03ee8$var$lt.FieldNum = 0, e8.internal.acroformPlugin = JSON.parse(JSON.stringify($ffb17689dbc03ee8$var$rt)), e8.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
        $ffb17689dbc03ee8$var$D = e8.internal.scaleFactor, e8.internal.acroformPlugin.acroFormDictionaryRoot = new $ffb17689dbc03ee8$var$ht, e8.internal.acroformPlugin.acroFormDictionaryRoot.scope = e8, e8.internal.acroformPlugin.acroFormDictionaryRoot._eventID = e8.internal.events.subscribe("postPutResources", function() {
            !function(t) {
                t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = !0;
            }(e8);
        }), e8.internal.events.subscribe("buildDocument", function() {
            !function(t) {
                t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
                var e = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
                for(var r in e)if (e.hasOwnProperty(r)) {
                    var n = e[r];
                    n.objId = void 0, n.hasAnnotation && $ffb17689dbc03ee8$var$nt(n, t);
                }
            }(e8);
        }), e8.internal.events.subscribe("putCatalog", function() {
            !function(t) {
                if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
                t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R");
            }(e8);
        }), e8.internal.events.subscribe("postPutPages", function(r7) {
            !function(e, r) {
                var n = !e;
                for(var i in e || (r.internal.newObjectDeferredBegin(r.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), r.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), e = e || r.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if (e.hasOwnProperty(i)) {
                    var a = e[i], o = [], s = a.Rect;
                    if (a.Rect && (a.Rect = $ffb17689dbc03ee8$var$$(a.Rect, r)), r.internal.newObjectDeferredBegin(a.objId, !0), a.DA = $ffb17689dbc03ee8$export$7d753ad993606f45.createDefaultAppearanceStream(a), "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(a) && "function" == typeof a.getKeyValueListForStream && (o = a.getKeyValueListForStream()), a.Rect = s, a.hasAppearanceStream && !a.appearanceStreamContent) {
                        var c = $ffb17689dbc03ee8$var$Q(a);
                        o.push({
                            key: "AP",
                            value: "<</N " + c + ">>"
                        }), r.internal.acroformPlugin.xForms.push(c);
                    }
                    if (a.appearanceStreamContent) {
                        var u = "";
                        for(var h in a.appearanceStreamContent)if (a.appearanceStreamContent.hasOwnProperty(h)) {
                            var l = a.appearanceStreamContent[h];
                            if (u += "/" + h + " ", u += "<<", Object.keys(l).length >= 1 || Array.isArray(l)) {
                                for(var i in l)if (l.hasOwnProperty(i)) {
                                    var f = l[i];
                                    "function" == typeof f && (f = f.call(r, a)), u += "/" + i + " " + f + " ", r.internal.acroformPlugin.xForms.indexOf(f) >= 0 || r.internal.acroformPlugin.xForms.push(f);
                                }
                            } else "function" == typeof (f = l) && (f = f.call(r, a)), u += "/" + i + " " + f, r.internal.acroformPlugin.xForms.indexOf(f) >= 0 || r.internal.acroformPlugin.xForms.push(f);
                            u += ">>";
                        }
                        o.push({
                            key: "AP",
                            value: "<<\n" + u + ">>"
                        });
                    }
                    r.internal.putStream({
                        additionalKeyValues: o,
                        objectId: a.objId
                    }), r.internal.out("endobj");
                }
                n && $ffb17689dbc03ee8$var$it(r.internal.acroformPlugin.xForms, r);
            }(r7, e8);
        }), e8.internal.acroformPlugin.isInitialized = !0;
    }
}, $ffb17689dbc03ee8$var$ot = $ffb17689dbc03ee8$var$q.__acroform__.arrayToPdfArray = function(e, r, n) {
    var i = function(t) {
        return t;
    };
    if (Array.isArray(e)) {
        for(var a = "[", o = 0; o < e.length; o++)switch(0 !== o && (a += " "), (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e[o])){
            case "boolean":
            case "number":
            case "object":
                a += e[o].toString();
                break;
            case "string":
                "/" !== e[o].substr(0, 1) ? (void 0 !== r && n && (i = n.internal.getEncryptor(r)), a += "(" + $ffb17689dbc03ee8$var$R(i(e[o].toString())) + ")") : a += e[o].toString();
        }
        return a += "]";
    }
    throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray");
};
var $ffb17689dbc03ee8$var$st = function(t17, e, r) {
    var n = function(t) {
        return t;
    };
    return void 0 !== e && r && (n = r.internal.getEncryptor(e)), (t17 = t17 || "").toString(), t17 = "(" + $ffb17689dbc03ee8$var$R(n(t17)) + ")";
}, $ffb17689dbc03ee8$var$ct = function() {
    this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
        get: function() {
            if (void 0 === this._objId) {
                if (void 0 === this.scope) return;
                this._objId = this.scope.internal.newObjectDeferred();
            }
            return this._objId;
        },
        set: function(t) {
            this._objId = t;
        }
    }), Object.defineProperty(this, "scope", {
        value: this._scope,
        writable: !0
    });
};
$ffb17689dbc03ee8$var$ct.prototype.toString = function() {
    return this.objId + " 0 R";
}, $ffb17689dbc03ee8$var$ct.prototype.putStream = function() {
    var t = this.getKeyValueListForStream();
    this.scope.internal.putStream({
        data: this.stream,
        additionalKeyValues: t,
        objectId: this.objId
    }), this.scope.internal.out("endobj");
}, $ffb17689dbc03ee8$var$ct.prototype.getKeyValueListForStream = function() {
    var t18 = [], e = Object.getOwnPropertyNames(this).filter(function(t) {
        return "content" != t && "appearanceStreamContent" != t && "scope" != t && "objId" != t && "_" != t.substring(0, 1);
    });
    for(var r in e)if (!1 === Object.getOwnPropertyDescriptor(this, e[r]).configurable) {
        var n = e[r], i = this[n];
        i && (Array.isArray(i) ? t18.push({
            key: n,
            value: $ffb17689dbc03ee8$var$ot(i, this.objId, this.scope)
        }) : i instanceof $ffb17689dbc03ee8$var$ct ? (i.scope = this.scope, t18.push({
            key: n,
            value: i.objId + " 0 R"
        })) : "function" != typeof i && t18.push({
            key: n,
            value: i
        }));
    }
    return t18;
};
var $ffb17689dbc03ee8$var$ut = function() {
    $ffb17689dbc03ee8$var$ct.call(this), Object.defineProperty(this, "Type", {
        value: "/XObject",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "Subtype", {
        value: "/Form",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "FormType", {
        value: 1,
        configurable: !1,
        writable: !0
    });
    var t19, e9 = [];
    Object.defineProperty(this, "BBox", {
        configurable: !1,
        get: function() {
            return e9;
        },
        set: function(t) {
            e9 = t;
        }
    }), Object.defineProperty(this, "Resources", {
        value: "2 0 R",
        configurable: !1,
        writable: !0
    }), Object.defineProperty(this, "stream", {
        enumerable: !1,
        configurable: !0,
        set: function(e) {
            t19 = e.trim();
        },
        get: function() {
            return t19 || null;
        }
    });
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$var$ut, $ffb17689dbc03ee8$var$ct);
var $ffb17689dbc03ee8$var$ht = function() {
    $ffb17689dbc03ee8$var$ct.call(this);
    var t20, e10 = [];
    Object.defineProperty(this, "Kids", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return e10.length > 0 ? e10 : void 0;
        }
    }), Object.defineProperty(this, "Fields", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return e10;
        }
    }), Object.defineProperty(this, "DA", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (t20) {
                var e = function(t) {
                    return t;
                };
                return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + $ffb17689dbc03ee8$var$R(e(t20)) + ")";
            }
        },
        set: function(e) {
            t20 = e;
        }
    });
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$var$ht, $ffb17689dbc03ee8$var$ct);
var $ffb17689dbc03ee8$var$lt = function t21() {
    $ffb17689dbc03ee8$var$ct.call(this);
    var e11 = 4;
    Object.defineProperty(this, "F", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return e11;
        },
        set: function(t) {
            if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute F supplied.');
            e11 = t;
        }
    }), Object.defineProperty(this, "showWhenPrinted", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(e11, 3));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.F = $ffb17689dbc03ee8$var$K(e11, 3) : this.F = $ffb17689dbc03ee8$var$Z(e11, 3);
        }
    });
    var r = 0;
    Object.defineProperty(this, "Ff", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return r;
        },
        set: function(t) {
            if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
            r = t;
        }
    });
    var n = [];
    Object.defineProperty(this, "Rect", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (0 !== n.length) return n;
        },
        set: function(t) {
            n = void 0 !== t ? t : [];
        }
    }), Object.defineProperty(this, "x", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !n || isNaN(n[0]) ? 0 : n[0];
        },
        set: function(t) {
            n[0] = t;
        }
    }), Object.defineProperty(this, "y", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !n || isNaN(n[1]) ? 0 : n[1];
        },
        set: function(t) {
            n[1] = t;
        }
    }), Object.defineProperty(this, "width", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !n || isNaN(n[2]) ? 0 : n[2];
        },
        set: function(t) {
            n[2] = t;
        }
    }), Object.defineProperty(this, "height", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return !n || isNaN(n[3]) ? 0 : n[3];
        },
        set: function(t) {
            n[3] = t;
        }
    });
    var i = "";
    Object.defineProperty(this, "FT", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return i;
        },
        set: function(t) {
            switch(t){
                case "/Btn":
                case "/Tx":
                case "/Ch":
                case "/Sig":
                    i = t;
                    break;
                default:
                    throw new Error('Invalid value "' + t + '" for attribute FT supplied.');
            }
        }
    });
    var a = null;
    Object.defineProperty(this, "T", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            if (!a || a.length < 1) {
                if (this instanceof $ffb17689dbc03ee8$var$yt) return;
                a = "FieldObject" + t21.FieldNum++;
            }
            var e = function(t) {
                return t;
            };
            return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + $ffb17689dbc03ee8$var$R(e(a)) + ")";
        },
        set: function(t) {
            a = t.toString();
        }
    }), Object.defineProperty(this, "fieldName", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return a;
        },
        set: function(t) {
            a = t;
        }
    });
    var o = "helvetica";
    Object.defineProperty(this, "fontName", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return o;
        },
        set: function(t) {
            o = t;
        }
    });
    var s = "normal";
    Object.defineProperty(this, "fontStyle", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return s;
        },
        set: function(t) {
            s = t;
        }
    });
    var c = 0;
    Object.defineProperty(this, "fontSize", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return c;
        },
        set: function(t) {
            c = t;
        }
    });
    var u = void 0;
    Object.defineProperty(this, "maxFontSize", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return void 0 === u ? 50 / $ffb17689dbc03ee8$var$D : u;
        },
        set: function(t) {
            u = t;
        }
    });
    var h = "black";
    Object.defineProperty(this, "color", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return h;
        },
        set: function(t) {
            h = t;
        }
    });
    var l = "/F1 0 Tf 0 g";
    Object.defineProperty(this, "DA", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            if (!(!l || this instanceof $ffb17689dbc03ee8$var$yt || this instanceof $ffb17689dbc03ee8$export$9d1b52e7fab50c84)) return $ffb17689dbc03ee8$var$st(l, this.objId, this.scope);
        },
        set: function(t) {
            t = t.toString(), l = t;
        }
    });
    var f = null;
    Object.defineProperty(this, "DV", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (f) return this instanceof $ffb17689dbc03ee8$export$6aae594af76bbb7b == !1 ? $ffb17689dbc03ee8$var$st(f, this.objId, this.scope) : f;
        },
        set: function(t) {
            t = t.toString(), f = this instanceof $ffb17689dbc03ee8$export$6aae594af76bbb7b == !1 ? "(" === t.substr(0, 1) ? $ffb17689dbc03ee8$var$T(t.substr(1, t.length - 2)) : $ffb17689dbc03ee8$var$T(t) : t;
        }
    }), Object.defineProperty(this, "defaultValue", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return this instanceof $ffb17689dbc03ee8$export$6aae594af76bbb7b == !0 ? $ffb17689dbc03ee8$var$T(f.substr(1, f.length - 1)) : f;
        },
        set: function(t) {
            t = t.toString(), f = this instanceof $ffb17689dbc03ee8$export$6aae594af76bbb7b == !0 ? "/" + t : t;
        }
    });
    var d = null;
    Object.defineProperty(this, "_V", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (d) return d;
        },
        set: function(t) {
            this.V = t;
        }
    }), Object.defineProperty(this, "V", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            if (d) return this instanceof $ffb17689dbc03ee8$export$6aae594af76bbb7b == !1 ? $ffb17689dbc03ee8$var$st(d, this.objId, this.scope) : d;
        },
        set: function(t) {
            t = t.toString(), d = this instanceof $ffb17689dbc03ee8$export$6aae594af76bbb7b == !1 ? "(" === t.substr(0, 1) ? $ffb17689dbc03ee8$var$T(t.substr(1, t.length - 2)) : $ffb17689dbc03ee8$var$T(t) : t;
        }
    }), Object.defineProperty(this, "value", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return this instanceof $ffb17689dbc03ee8$export$6aae594af76bbb7b == !0 ? $ffb17689dbc03ee8$var$T(d.substr(1, d.length - 1)) : d;
        },
        set: function(t) {
            t = t.toString(), d = this instanceof $ffb17689dbc03ee8$export$6aae594af76bbb7b == !0 ? "/" + t : t;
        }
    }), Object.defineProperty(this, "hasAnnotation", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return this.Rect;
        }
    }), Object.defineProperty(this, "Type", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return this.hasAnnotation ? "/Annot" : null;
        }
    }), Object.defineProperty(this, "Subtype", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return this.hasAnnotation ? "/Widget" : null;
        }
    });
    var p, g = !1;
    Object.defineProperty(this, "hasAppearanceStream", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return g;
        },
        set: function(t) {
            t = Boolean(t), g = t;
        }
    }), Object.defineProperty(this, "page", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            if (p) return p;
        },
        set: function(t) {
            p = t;
        }
    }), Object.defineProperty(this, "readOnly", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 1));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 1) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 1);
        }
    }), Object.defineProperty(this, "required", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 2));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 2) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 2);
        }
    }), Object.defineProperty(this, "noExport", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 3));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 3) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 3);
        }
    });
    var m = null;
    Object.defineProperty(this, "Q", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            if (null !== m) return m;
        },
        set: function(t) {
            if (-1 === [
                0,
                1,
                2
            ].indexOf(t)) throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
            m = t;
        }
    }), Object.defineProperty(this, "textAlign", {
        get: function() {
            var t;
            switch(m){
                case 0:
                default:
                    t = "left";
                    break;
                case 1:
                    t = "center";
                    break;
                case 2:
                    t = "right";
            }
            return t;
        },
        configurable: !0,
        enumerable: !0,
        set: function(t) {
            switch(t){
                case "right":
                case 2:
                    m = 2;
                    break;
                case "center":
                case 1:
                    m = 1;
                    break;
                case "left":
                case 0:
                default:
                    m = 0;
            }
        }
    });
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$var$lt, $ffb17689dbc03ee8$var$ct);
var $ffb17689dbc03ee8$export$a47202eb3f827bb2 = function() {
    $ffb17689dbc03ee8$var$lt.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
    var t22 = 0;
    Object.defineProperty(this, "TI", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return t22;
        },
        set: function(e) {
            t22 = e;
        }
    }), Object.defineProperty(this, "topIndex", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return t22;
        },
        set: function(e) {
            t22 = e;
        }
    });
    var e12 = [];
    Object.defineProperty(this, "Opt", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return $ffb17689dbc03ee8$var$ot(e12, this.objId, this.scope);
        },
        set: function(t23) {
            var r8, n3;
            n3 = [], "string" == typeof (r8 = t23) && (n3 = (function(t, e, r) {
                r || (r = 1);
                for(var n, i = []; n = e.exec(t);)i.push(n[r]);
                return i;
            })(r8, /\((.*?)\)/g)), e12 = n3;
        }
    }), this.getOptions = function() {
        return e12;
    }, this.setOptions = function(t) {
        e12 = t, this.sort && e12.sort();
    }, this.addOption = function(t) {
        t = (t = t || "").toString(), e12.push(t), this.sort && e12.sort();
    }, this.removeOption = function(t, r) {
        for(r = r || !1, t = (t = t || "").toString(); -1 !== e12.indexOf(t) && (e12.splice(e12.indexOf(t), 1), !1 !== r););
    }, Object.defineProperty(this, "combo", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 18));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 18) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 18);
        }
    }), Object.defineProperty(this, "edit", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 19));
        },
        set: function(t) {
            !0 === this.combo && (!0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 19) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 19));
        }
    }), Object.defineProperty(this, "sort", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 20));
        },
        set: function(t) {
            !0 === Boolean(t) ? (this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 20), e12.sort()) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 20);
        }
    }), Object.defineProperty(this, "multiSelect", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 22));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 22) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 22);
        }
    }), Object.defineProperty(this, "doNotSpellCheck", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 23));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 23) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 23);
        }
    }), Object.defineProperty(this, "commitOnSelChange", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 27));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 27) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 27);
        }
    }), this.hasAppearanceStream = !1;
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$a47202eb3f827bb2, $ffb17689dbc03ee8$var$lt);
var $ffb17689dbc03ee8$export$9e021dd9568dc486 = function() {
    $ffb17689dbc03ee8$export$a47202eb3f827bb2.call(this), this.fontName = "helvetica", this.combo = !1;
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$9e021dd9568dc486, $ffb17689dbc03ee8$export$a47202eb3f827bb2);
var $ffb17689dbc03ee8$export$f2239d28df5f43bd = function() {
    $ffb17689dbc03ee8$export$9e021dd9568dc486.call(this), this.combo = !0;
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$f2239d28df5f43bd, $ffb17689dbc03ee8$export$9e021dd9568dc486);
var $ffb17689dbc03ee8$export$4af052e7e598ad1a = function() {
    $ffb17689dbc03ee8$export$f2239d28df5f43bd.call(this), this.edit = !0;
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$4af052e7e598ad1a, $ffb17689dbc03ee8$export$f2239d28df5f43bd);
var $ffb17689dbc03ee8$export$6aae594af76bbb7b = function() {
    $ffb17689dbc03ee8$var$lt.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 15));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 15) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 15);
        }
    }), Object.defineProperty(this, "radio", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 16));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 16) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 16);
        }
    }), Object.defineProperty(this, "pushButton", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 17));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 17) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 17);
        }
    }), Object.defineProperty(this, "radioIsUnison", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 26));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 26) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 26);
        }
    });
    var e13, r = {
    };
    Object.defineProperty(this, "MK", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            var t24 = function(t) {
                return t;
            };
            if (this.scope && (t24 = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(r).length) {
                var e, n = [];
                for(e in n.push("<<"), r)n.push("/" + e + " (" + $ffb17689dbc03ee8$var$R(t24(r[e])) + ")");
                return n.push(">>"), n.join("\n");
            }
        },
        set: function(e) {
            "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e) && (r = e);
        }
    }), Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return r.CA || "";
        },
        set: function(t) {
            "string" == typeof t && (r.CA = t);
        }
    }), Object.defineProperty(this, "AS", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return e13;
        },
        set: function(t) {
            e13 = t;
        }
    }), Object.defineProperty(this, "appearanceState", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return e13.substr(1, e13.length - 1);
        },
        set: function(t) {
            e13 = "/" + t;
        }
    });
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$6aae594af76bbb7b, $ffb17689dbc03ee8$var$lt);
var $ffb17689dbc03ee8$export$98b7c3ef37465410 = function() {
    $ffb17689dbc03ee8$export$6aae594af76bbb7b.call(this), this.pushButton = !0;
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$98b7c3ef37465410, $ffb17689dbc03ee8$export$6aae594af76bbb7b);
var $ffb17689dbc03ee8$export$bc1318bc7e5f1315 = function() {
    $ffb17689dbc03ee8$export$6aae594af76bbb7b.call(this), this.radio = !0, this.pushButton = !1;
    var t = [];
    Object.defineProperty(this, "Kids", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return t;
        },
        set: function(e) {
            t = void 0 !== e ? e : [];
        }
    });
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$bc1318bc7e5f1315, $ffb17689dbc03ee8$export$6aae594af76bbb7b);
var $ffb17689dbc03ee8$var$yt = function() {
    var e14, r9;
    $ffb17689dbc03ee8$var$lt.call(this), Object.defineProperty(this, "Parent", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return e14;
        },
        set: function(t) {
            e14 = t;
        }
    }), Object.defineProperty(this, "optionName", {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return r9;
        },
        set: function(t) {
            r9 = t;
        }
    });
    var n, i = {
    };
    Object.defineProperty(this, "MK", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            var t25 = function(t) {
                return t;
            };
            this.scope && (t25 = this.scope.internal.getEncryptor(this.objId));
            var e, r = [];
            for(e in r.push("<<"), i)r.push("/" + e + " (" + $ffb17689dbc03ee8$var$R(t25(i[e])) + ")");
            return r.push(">>"), r.join("\n");
        },
        set: function(e) {
            "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e) && (i = e);
        }
    }), Object.defineProperty(this, "caption", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return i.CA || "";
        },
        set: function(t) {
            "string" == typeof t && (i.CA = t);
        }
    }), Object.defineProperty(this, "AS", {
        enumerable: !1,
        configurable: !1,
        get: function() {
            return n;
        },
        set: function(t) {
            n = t;
        }
    }), Object.defineProperty(this, "appearanceState", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return n.substr(1, n.length - 1);
        },
        set: function(t) {
            n = "/" + t;
        }
    }), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = $ffb17689dbc03ee8$export$7d753ad993606f45.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName);
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$var$yt, $ffb17689dbc03ee8$var$lt), $ffb17689dbc03ee8$export$bc1318bc7e5f1315.prototype.setAppearance = function(t) {
    if (!("createAppearanceStream" in t) || !("getCA" in t)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
    for(var e in this.Kids)if (this.Kids.hasOwnProperty(e)) {
        var r = this.Kids[e];
        r.appearanceStreamContent = t.createAppearanceStream(r.optionName), r.caption = t.getCA();
    }
}, $ffb17689dbc03ee8$export$bc1318bc7e5f1315.prototype.createOption = function(t) {
    var e = new $ffb17689dbc03ee8$var$yt;
    return e.Parent = this, e.optionName = t, this.Kids.push(e), $ffb17689dbc03ee8$var$xt.call(this.scope, e), e;
};
var $ffb17689dbc03ee8$export$5fd5db01c4615478 = function() {
    $ffb17689dbc03ee8$export$6aae594af76bbb7b.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = $ffb17689dbc03ee8$export$7d753ad993606f45.CheckBox.createAppearanceStream();
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$5fd5db01c4615478, $ffb17689dbc03ee8$export$6aae594af76bbb7b);
var $ffb17689dbc03ee8$export$9d1b52e7fab50c84 = function() {
    $ffb17689dbc03ee8$var$lt.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 13));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 13) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 13);
        }
    }), Object.defineProperty(this, "fileSelect", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 21));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 21) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 21);
        }
    }), Object.defineProperty(this, "doNotSpellCheck", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 23));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 23) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 23);
        }
    }), Object.defineProperty(this, "doNotScroll", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 24));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 24) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 24);
        }
    }), Object.defineProperty(this, "comb", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 25));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 25) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 25);
        }
    }), Object.defineProperty(this, "richText", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 26));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 26) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 26);
        }
    });
    var t26 = null;
    Object.defineProperty(this, "MaxLen", {
        enumerable: !0,
        configurable: !1,
        get: function() {
            return t26;
        },
        set: function(e) {
            t26 = e;
        }
    }), Object.defineProperty(this, "maxLength", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return t26;
        },
        set: function(e) {
            Number.isInteger(e) && (t26 = e);
        }
    }), Object.defineProperty(this, "hasAppearanceStream", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return this.V || this.DV;
        }
    });
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$9d1b52e7fab50c84, $ffb17689dbc03ee8$var$lt);
var $ffb17689dbc03ee8$export$c48d8668f8cea64d = function() {
    $ffb17689dbc03ee8$export$9d1b52e7fab50c84.call(this), Object.defineProperty(this, "password", {
        enumerable: !0,
        configurable: !0,
        get: function() {
            return Boolean($ffb17689dbc03ee8$var$X(this.Ff, 14));
        },
        set: function(t) {
            !0 === Boolean(t) ? this.Ff = $ffb17689dbc03ee8$var$K(this.Ff, 14) : this.Ff = $ffb17689dbc03ee8$var$Z(this.Ff, 14);
        }
    }), this.password = !0;
};
$ffb17689dbc03ee8$var$H($ffb17689dbc03ee8$export$c48d8668f8cea64d, $ffb17689dbc03ee8$export$9d1b52e7fab50c84);
var $ffb17689dbc03ee8$export$7d753ad993606f45 = {
    CheckBox: {
        createAppearanceStream: function() {
            return {
                N: {
                    On: $ffb17689dbc03ee8$export$7d753ad993606f45.CheckBox.YesNormal
                },
                D: {
                    On: $ffb17689dbc03ee8$export$7d753ad993606f45.CheckBox.YesPushDown,
                    Off: $ffb17689dbc03ee8$export$7d753ad993606f45.CheckBox.OffPushDown
                }
            };
        },
        YesPushDown: function(t) {
            var e = $ffb17689dbc03ee8$var$V(t);
            e.scope = t.scope;
            var r = [], n = t.scope.internal.getFont(t.fontName, t.fontStyle).id, i = t.scope.__private__.encodeColorString(t.color), a = $ffb17689dbc03ee8$var$tt(t, t.caption);
            return r.push("0.749023 g"), r.push("0 0 " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t)) + " " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t)) + " re"), r.push("f"), r.push("BMC"), r.push("q"), r.push("0 0 1 rg"), r.push("/" + n + " " + $ffb17689dbc03ee8$var$U(a.fontSize) + " Tf " + i), r.push("BT"), r.push(a.text), r.push("ET"), r.push("Q"), r.push("EMC"), e.stream = r.join("\n"), e;
        },
        YesNormal: function(t) {
            var e = $ffb17689dbc03ee8$var$V(t);
            e.scope = t.scope;
            var r = t.scope.internal.getFont(t.fontName, t.fontStyle).id, n = t.scope.__private__.encodeColorString(t.color), i = [], a = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t), o = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t), s = $ffb17689dbc03ee8$var$tt(t, t.caption);
            return i.push("1 g"), i.push("0 0 " + $ffb17689dbc03ee8$var$U(o) + " " + $ffb17689dbc03ee8$var$U(a) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + $ffb17689dbc03ee8$var$U(o - 1) + " " + $ffb17689dbc03ee8$var$U(a - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + r + " " + $ffb17689dbc03ee8$var$U(s.fontSize) + " Tf " + n), i.push(s.text), i.push("ET"), i.push("Q"), e.stream = i.join("\n"), e;
        },
        OffPushDown: function(t) {
            var e = $ffb17689dbc03ee8$var$V(t);
            e.scope = t.scope;
            var r = [];
            return r.push("0.749023 g"), r.push("0 0 " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t)) + " " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t)) + " re"), r.push("f"), e.stream = r.join("\n"), e;
        }
    },
    RadioButton: {
        Circle: {
            createAppearanceStream: function(t) {
                var e = {
                    D: {
                        Off: $ffb17689dbc03ee8$export$7d753ad993606f45.RadioButton.Circle.OffPushDown
                    },
                    N: {
                    }
                };
                return e.N[t] = $ffb17689dbc03ee8$export$7d753ad993606f45.RadioButton.Circle.YesNormal, e.D[t] = $ffb17689dbc03ee8$export$7d753ad993606f45.RadioButton.Circle.YesPushDown, e;
            },
            getCA: function() {
                return "l";
            },
            YesNormal: function(t) {
                var e = $ffb17689dbc03ee8$var$V(t);
                e.scope = t.scope;
                var r = [], n = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) <= $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) ? $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) / 4 : $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) / 4;
                n = Number((0.9 * n).toFixed(5));
                var i = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.Bezier_C, a = Number((n * i).toFixed(5));
                return r.push("q"), r.push("1 0 0 1 " + $ffb17689dbc03ee8$var$z($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) / 2) + " " + $ffb17689dbc03ee8$var$z($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) / 2) + " cm"), r.push(n + " 0 m"), r.push(n + " " + a + " " + a + " " + n + " 0 " + n + " c"), r.push("-" + a + " " + n + " -" + n + " " + a + " -" + n + " 0 c"), r.push("-" + n + " -" + a + " -" + a + " -" + n + " 0 -" + n + " c"), r.push(a + " -" + n + " " + n + " -" + a + " " + n + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e;
            },
            YesPushDown: function(t) {
                var e = $ffb17689dbc03ee8$var$V(t);
                e.scope = t.scope;
                var r = [], n = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) <= $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) ? $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) / 4 : $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) / 4;
                n = Number((0.9 * n).toFixed(5));
                var i = Number((2 * n).toFixed(5)), a = Number((i * $ffb17689dbc03ee8$export$7d753ad993606f45.internal.Bezier_C).toFixed(5)), o = Number((n * $ffb17689dbc03ee8$export$7d753ad993606f45.internal.Bezier_C).toFixed(5));
                return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + $ffb17689dbc03ee8$var$z($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) / 2) + " " + $ffb17689dbc03ee8$var$z($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) / 2) + " cm"), r.push(i + " 0 m"), r.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), r.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), r.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), r.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), r.push("f"), r.push("Q"), r.push("0 g"), r.push("q"), r.push("1 0 0 1 " + $ffb17689dbc03ee8$var$z($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) / 2) + " " + $ffb17689dbc03ee8$var$z($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) / 2) + " cm"), r.push(n + " 0 m"), r.push(n + " " + o + " " + o + " " + n + " 0 " + n + " c"), r.push("-" + o + " " + n + " -" + n + " " + o + " -" + n + " 0 c"), r.push("-" + n + " -" + o + " -" + o + " -" + n + " 0 -" + n + " c"), r.push(o + " -" + n + " " + n + " -" + o + " " + n + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e;
            },
            OffPushDown: function(t) {
                var e = $ffb17689dbc03ee8$var$V(t);
                e.scope = t.scope;
                var r = [], n = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) <= $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) ? $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) / 4 : $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) / 4;
                n = Number((0.9 * n).toFixed(5));
                var i = Number((2 * n).toFixed(5)), a = Number((i * $ffb17689dbc03ee8$export$7d753ad993606f45.internal.Bezier_C).toFixed(5));
                return r.push("0.749023 g"), r.push("q"), r.push("1 0 0 1 " + $ffb17689dbc03ee8$var$z($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) / 2) + " " + $ffb17689dbc03ee8$var$z($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) / 2) + " cm"), r.push(i + " 0 m"), r.push(i + " " + a + " " + a + " " + i + " 0 " + i + " c"), r.push("-" + a + " " + i + " -" + i + " " + a + " -" + i + " 0 c"), r.push("-" + i + " -" + a + " -" + a + " -" + i + " 0 -" + i + " c"), r.push(a + " -" + i + " " + i + " -" + a + " " + i + " 0 c"), r.push("f"), r.push("Q"), e.stream = r.join("\n"), e;
            }
        },
        Cross: {
            createAppearanceStream: function(t) {
                var e = {
                    D: {
                        Off: $ffb17689dbc03ee8$export$7d753ad993606f45.RadioButton.Cross.OffPushDown
                    },
                    N: {
                    }
                };
                return e.N[t] = $ffb17689dbc03ee8$export$7d753ad993606f45.RadioButton.Cross.YesNormal, e.D[t] = $ffb17689dbc03ee8$export$7d753ad993606f45.RadioButton.Cross.YesPushDown, e;
            },
            getCA: function() {
                return "8";
            },
            YesNormal: function(t) {
                var e = $ffb17689dbc03ee8$var$V(t);
                e.scope = t.scope;
                var r = [], n = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.calculateCross(t);
                return r.push("q"), r.push("1 1 " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) - 2) + " " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) - 2) + " re"), r.push("W"), r.push("n"), r.push($ffb17689dbc03ee8$var$U(n.x1.x) + " " + $ffb17689dbc03ee8$var$U(n.x1.y) + " m"), r.push($ffb17689dbc03ee8$var$U(n.x2.x) + " " + $ffb17689dbc03ee8$var$U(n.x2.y) + " l"), r.push($ffb17689dbc03ee8$var$U(n.x4.x) + " " + $ffb17689dbc03ee8$var$U(n.x4.y) + " m"), r.push($ffb17689dbc03ee8$var$U(n.x3.x) + " " + $ffb17689dbc03ee8$var$U(n.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e;
            },
            YesPushDown: function(t) {
                var e = $ffb17689dbc03ee8$var$V(t);
                e.scope = t.scope;
                var r = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.calculateCross(t), n = [];
                return n.push("0.749023 g"), n.push("0 0 " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t)) + " " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t)) + " re"), n.push("f"), n.push("q"), n.push("1 1 " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t) - 2) + " " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t) - 2) + " re"), n.push("W"), n.push("n"), n.push($ffb17689dbc03ee8$var$U(r.x1.x) + " " + $ffb17689dbc03ee8$var$U(r.x1.y) + " m"), n.push($ffb17689dbc03ee8$var$U(r.x2.x) + " " + $ffb17689dbc03ee8$var$U(r.x2.y) + " l"), n.push($ffb17689dbc03ee8$var$U(r.x4.x) + " " + $ffb17689dbc03ee8$var$U(r.x4.y) + " m"), n.push($ffb17689dbc03ee8$var$U(r.x3.x) + " " + $ffb17689dbc03ee8$var$U(r.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join("\n"), e;
            },
            OffPushDown: function(t) {
                var e = $ffb17689dbc03ee8$var$V(t);
                e.scope = t.scope;
                var r = [];
                return r.push("0.749023 g"), r.push("0 0 " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t)) + " " + $ffb17689dbc03ee8$var$U($ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t)) + " re"), r.push("f"), e.stream = r.join("\n"), e;
            }
        }
    },
    createDefaultAppearanceStream: function(t) {
        var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id, r = t.scope.__private__.encodeColorString(t.color);
        return "/" + e + " " + t.fontSize + " Tf " + r;
    }
};
$ffb17689dbc03ee8$export$7d753ad993606f45.internal = {
    Bezier_C: 0.551915024494,
    calculateCross: function(t) {
        var e = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth(t), r = $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight(t), n = Math.min(e, r);
        return {
            x1: {
                x: (e - n) / 2,
                y: (r - n) / 2 + n
            },
            x2: {
                x: (e - n) / 2 + n,
                y: (r - n) / 2
            },
            x3: {
                x: (e - n) / 2,
                y: (r - n) / 2
            },
            x4: {
                x: (e - n) / 2 + n,
                y: (r - n) / 2 + n
            }
        };
    }
}, $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getWidth = function(e) {
    var r = 0;
    return "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e) && (r = $ffb17689dbc03ee8$var$W(e.Rect[2])), r;
}, $ffb17689dbc03ee8$export$7d753ad993606f45.internal.getHeight = function(e) {
    var r = 0;
    return "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e) && (r = $ffb17689dbc03ee8$var$W(e.Rect[3])), r;
};
var $ffb17689dbc03ee8$var$xt = $ffb17689dbc03ee8$var$q.addField = function(t) {
    if ($ffb17689dbc03ee8$var$at(this, t), !(t instanceof $ffb17689dbc03ee8$var$lt)) throw new Error("Invalid argument passed to jsPDF.addField.");
    var e;
    return (e = t).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), t.page = t.scope.internal.getCurrentPageInfo().pageNumber, this;
};
$ffb17689dbc03ee8$var$q.AcroFormChoiceField = $ffb17689dbc03ee8$export$a47202eb3f827bb2, $ffb17689dbc03ee8$var$q.AcroFormListBox = $ffb17689dbc03ee8$export$9e021dd9568dc486, $ffb17689dbc03ee8$var$q.AcroFormComboBox = $ffb17689dbc03ee8$export$f2239d28df5f43bd, $ffb17689dbc03ee8$var$q.AcroFormEditBox = $ffb17689dbc03ee8$export$4af052e7e598ad1a, $ffb17689dbc03ee8$var$q.AcroFormButton = $ffb17689dbc03ee8$export$6aae594af76bbb7b, $ffb17689dbc03ee8$var$q.AcroFormPushButton = $ffb17689dbc03ee8$export$98b7c3ef37465410, $ffb17689dbc03ee8$var$q.AcroFormRadioButton = $ffb17689dbc03ee8$export$bc1318bc7e5f1315, $ffb17689dbc03ee8$var$q.AcroFormCheckBox = $ffb17689dbc03ee8$export$5fd5db01c4615478, $ffb17689dbc03ee8$var$q.AcroFormTextField = $ffb17689dbc03ee8$export$9d1b52e7fab50c84, $ffb17689dbc03ee8$var$q.AcroFormPasswordField = $ffb17689dbc03ee8$export$c48d8668f8cea64d, $ffb17689dbc03ee8$var$q.AcroFormAppearance = $ffb17689dbc03ee8$export$7d753ad993606f45, $ffb17689dbc03ee8$var$q.AcroForm = {
    ChoiceField: $ffb17689dbc03ee8$export$a47202eb3f827bb2,
    ListBox: $ffb17689dbc03ee8$export$9e021dd9568dc486,
    ComboBox: $ffb17689dbc03ee8$export$f2239d28df5f43bd,
    EditBox: $ffb17689dbc03ee8$export$4af052e7e598ad1a,
    Button: $ffb17689dbc03ee8$export$6aae594af76bbb7b,
    PushButton: $ffb17689dbc03ee8$export$98b7c3ef37465410,
    RadioButton: $ffb17689dbc03ee8$export$bc1318bc7e5f1315,
    CheckBox: $ffb17689dbc03ee8$export$5fd5db01c4615478,
    TextField: $ffb17689dbc03ee8$export$9d1b52e7fab50c84,
    PasswordField: $ffb17689dbc03ee8$export$c48d8668f8cea64d,
    Appearance: $ffb17689dbc03ee8$export$7d753ad993606f45
}, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.AcroForm = {
    ChoiceField: $ffb17689dbc03ee8$export$a47202eb3f827bb2,
    ListBox: $ffb17689dbc03ee8$export$9e021dd9568dc486,
    ComboBox: $ffb17689dbc03ee8$export$f2239d28df5f43bd,
    EditBox: $ffb17689dbc03ee8$export$4af052e7e598ad1a,
    Button: $ffb17689dbc03ee8$export$6aae594af76bbb7b,
    PushButton: $ffb17689dbc03ee8$export$98b7c3ef37465410,
    RadioButton: $ffb17689dbc03ee8$export$bc1318bc7e5f1315,
    CheckBox: $ffb17689dbc03ee8$export$5fd5db01c4615478,
    TextField: $ffb17689dbc03ee8$export$9d1b52e7fab50c84,
    PasswordField: $ffb17689dbc03ee8$export$c48d8668f8cea64d,
    Appearance: $ffb17689dbc03ee8$export$7d753ad993606f45
};
var $ffb17689dbc03ee8$export$9cf40f67b77f45f4 = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.AcroForm;
function $ffb17689dbc03ee8$var$_t(t27) {
    return t27.reduce(function(t, e, r) {
        return t[e] = r, t;
    }, {
    });
}
!function(e15) {
    e15.__addimage__ = {
    };
    var r10 = "UNKNOWN", n4 = {
        PNG: [
            [
                137,
                80,
                78,
                71
            ]
        ],
        TIFF: [
            [
                77,
                77,
                0,
                42
            ],
            [
                73,
                73,
                42,
                0
            ]
        ],
        JPEG: [
            [
                255,
                216,
                255,
                224,
                void 0,
                void 0,
                74,
                70,
                73,
                70,
                0
            ],
            [
                255,
                216,
                255,
                225,
                void 0,
                void 0,
                69,
                120,
                105,
                102,
                0,
                0
            ],
            [
                255,
                216,
                255,
                219
            ],
            [
                255,
                216,
                255,
                238
            ]
        ],
        JPEG2000: [
            [
                0,
                0,
                0,
                12,
                106,
                80,
                32,
                32
            ]
        ],
        GIF87a: [
            [
                71,
                73,
                70,
                56,
                55,
                97
            ]
        ],
        GIF89a: [
            [
                71,
                73,
                70,
                56,
                57,
                97
            ]
        ],
        WEBP: [
            [
                82,
                73,
                70,
                70,
                void 0,
                void 0,
                void 0,
                void 0,
                87,
                69,
                66,
                80
            ]
        ],
        BMP: [
            [
                66,
                77
            ],
            [
                66,
                65
            ],
            [
                67,
                73
            ],
            [
                67,
                80
            ],
            [
                73,
                67
            ],
            [
                80,
                84
            ]
        ]
    }, i3 = e15.__addimage__.getImageFileTypeByImageData = function(t, e) {
        var i, a, o, s, c, u = r10;
        if ("RGBA" === (e = e || r10) || void 0 !== t.data && t.data instanceof Uint8ClampedArray && "height" in t && "width" in t) return "RGBA";
        if (x(t)) for(c in n4)for(o = n4[c], i = 0; i < o.length; i += 1){
            for(s = !0, a = 0; a < o[i].length; a += 1)if (void 0 !== o[i][a] && o[i][a] !== t[a]) {
                s = !1;
                break;
            }
            if (!0 === s) {
                u = c;
                break;
            }
        }
        else for(c in n4)for(o = n4[c], i = 0; i < o.length; i += 1){
            for(s = !0, a = 0; a < o[i].length; a += 1)if (void 0 !== o[i][a] && o[i][a] !== t.charCodeAt(a)) {
                s = !1;
                break;
            }
            if (!0 === s) {
                u = c;
                break;
            }
        }
        return u === r10 && e !== r10 && (u = e), u;
    }, a3 = function t(e) {
        for(var r = this.internal.write, n = this.internal.putStream, i = (0, this.internal.getFilters)(); -1 !== i.indexOf("FlateEncode");)i.splice(i.indexOf("FlateEncode"), 1);
        e.objectId = this.internal.newObject();
        var a = [];
        if (a.push({
            key: "Type",
            value: "/XObject"
        }), a.push({
            key: "Subtype",
            value: "/Image"
        }), a.push({
            key: "Width",
            value: e.width
        }), a.push({
            key: "Height",
            value: e.height
        }), e.colorSpace === b.INDEXED ? a.push({
            key: "ColorSpace",
            value: "[/Indexed /DeviceRGB " + (e.palette.length / 3 - 1) + " " + ("sMask" in e && void 0 !== e.sMask ? e.objectId + 2 : e.objectId + 1) + " 0 R]"
        }) : (a.push({
            key: "ColorSpace",
            value: "/" + e.colorSpace
        }), e.colorSpace === b.DEVICE_CMYK && a.push({
            key: "Decode",
            value: "[1 0 1 0 1 0 1 0]"
        })), a.push({
            key: "BitsPerComponent",
            value: e.bitsPerComponent
        }), "decodeParameters" in e && void 0 !== e.decodeParameters && a.push({
            key: "DecodeParms",
            value: "<<" + e.decodeParameters + ">>"
        }), "transparency" in e && Array.isArray(e.transparency)) {
            for(var o = "", s = 0, c = e.transparency.length; s < c; s++)o += e.transparency[s] + " " + e.transparency[s] + " ";
            a.push({
                key: "Mask",
                value: "[" + o + "]"
            });
        }
        void 0 !== e.sMask && a.push({
            key: "SMask",
            value: e.objectId + 1 + " 0 R"
        });
        var u = void 0 !== e.filter ? [
            "/" + e.filter
        ] : void 0;
        if (n({
            data: e.data,
            additionalKeyValues: a,
            alreadyAppliedFilters: u,
            objectId: e.objectId
        }), r("endobj"), "sMask" in e && void 0 !== e.sMask) {
            var h = "/Predictor " + e.predictor + " /Colors 1 /BitsPerComponent " + e.bitsPerComponent + " /Columns " + e.width, l = {
                width: e.width,
                height: e.height,
                colorSpace: "DeviceGray",
                bitsPerComponent: e.bitsPerComponent,
                decodeParameters: h,
                data: e.sMask
            };
            "filter" in e && (l.filter = e.filter), t.call(this, l);
        }
        if (e.colorSpace === b.INDEXED) {
            var f = this.internal.newObject();
            n({
                data: _(new Uint8Array(e.palette)),
                objectId: f
            }), r("endobj");
        }
    }, o3 = function() {
        var t = this.internal.collections.addImage_images;
        for(var e in t)a3.call(this, t[e]);
    }, s3 = function() {
        var t, e = this.internal.collections.addImage_images, r = this.internal.write;
        for(var n in e)r("/I" + (t = e[n]).index, t.objectId, "0", "R");
    }, c2 = function() {
        this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {
        }, this.internal.events.subscribe("putResources", o3), this.internal.events.subscribe("putXobjectDict", s3));
    }, h1 = function() {
        var t = this.internal.collections.addImage_images;
        return c2.call(this), t;
    }, l1 = function() {
        return Object.keys(this.internal.collections.addImage_images).length;
    }, f1 = function(t) {
        return "function" == typeof e15["process" + t.toUpperCase()];
    }, d2 = function(e) {
        return "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e) && 1 === e.nodeType;
    }, p2 = function(t, r) {
        if ("IMG" === t.nodeName && t.hasAttribute("src")) {
            var n = "" + t.getAttribute("src");
            if (0 === n.indexOf("data:image/")) return $ffb17689dbc03ee8$var$u(unescape(n).split("base64,").pop());
            var i = e15.loadFile(n, !0);
            if (void 0 !== i) return i;
        }
        if ("CANVAS" === t.nodeName) {
            if (0 === t.width || 0 === t.height) throw new Error("Given canvas must have data. Canvas width: " + t.width + ", height: " + t.height);
            var a;
            switch(r){
                case "PNG":
                    a = "image/png";
                    break;
                case "WEBP":
                    a = "image/webp";
                    break;
                case "JPEG":
                case "JPG":
                default:
                    a = "image/jpeg";
            }
            return $ffb17689dbc03ee8$var$u(t.toDataURL(a, 1).split("base64,").pop());
        }
    }, g2 = function(t) {
        var e = this.internal.collections.addImage_images;
        if (e) {
            for(var r in e)if (t === e[r].alias) return e[r];
        }
    }, m = function(t, e, r) {
        return t || e || (t = -96, e = -96), t < 0 && (t = -1 * r.width * 72 / t / this.internal.scaleFactor), e < 0 && (e = -1 * r.height * 72 / e / this.internal.scaleFactor), 0 === t && (t = e * r.width / r.height), 0 === e && (e = t * r.height / r.width), [
            t,
            e
        ];
    }, v = function(t28, e, r, n, i, a) {
        var o = m.call(this, r, n, i), s = this.internal.getCoordinateString, c = this.internal.getVerticalCoordinateString, u = h1.call(this);
        if (r = o[0], n = o[1], u[i.index] = i, a) {
            a *= Math.PI / 180;
            var l = Math.cos(a), f = Math.sin(a), d = function(t) {
                return t.toFixed(4);
            }, p = [
                d(l),
                d(f),
                d(-1 * f),
                d(l),
                0,
                0,
                "cm"
            ];
        }
        this.internal.write("q"), a ? (this.internal.write([
            1,
            "0",
            "0",
            1,
            s(t28),
            c(e + n),
            "cm"
        ].join(" ")), this.internal.write(p.join(" ")), this.internal.write([
            s(r),
            "0",
            "0",
            s(n),
            "0",
            "0",
            "cm"
        ].join(" "))) : this.internal.write([
            s(r),
            "0",
            "0",
            s(n),
            s(t28),
            c(e + n),
            "cm"
        ].join(" ")), this.isAdvancedAPI() && this.internal.write([
            1,
            0,
            0,
            -1,
            0,
            0,
            "cm"
        ].join(" ")), this.internal.write("/I" + i.index + " Do"), this.internal.write("Q");
    }, b = e15.color_spaces = {
        DEVICE_RGB: "DeviceRGB",
        DEVICE_GRAY: "DeviceGray",
        DEVICE_CMYK: "DeviceCMYK",
        CAL_GREY: "CalGray",
        CAL_RGB: "CalRGB",
        LAB: "Lab",
        ICC_BASED: "ICCBased",
        INDEXED: "Indexed",
        PATTERN: "Pattern",
        SEPARATION: "Separation",
        DEVICE_N: "DeviceN"
    };
    e15.decode = {
        DCT_DECODE: "DCTDecode",
        FLATE_DECODE: "FlateDecode",
        LZW_DECODE: "LZWDecode",
        JPX_DECODE: "JPXDecode",
        JBIG2_DECODE: "JBIG2Decode",
        ASCII85_DECODE: "ASCII85Decode",
        ASCII_HEX_DECODE: "ASCIIHexDecode",
        RUN_LENGTH_DECODE: "RunLengthDecode",
        CCITT_FAX_DECODE: "CCITTFaxDecode"
    };
    var y = e15.image_compression = {
        NONE: "NONE",
        FAST: "FAST",
        MEDIUM: "MEDIUM",
        SLOW: "SLOW"
    }, w = e15.__addimage__.sHashCode = function(t) {
        var e, r, n = 0;
        if ("string" == typeof t) for(r = t.length, e = 0; e < r; e++)n = (n << 5) - n + t.charCodeAt(e), n |= 0;
        else if (x(t)) for(r = t.byteLength / 2, e = 0; e < r; e++)n = (n << 5) - n + t[e], n |= 0;
        return n;
    }, N = e15.__addimage__.validateStringAsBase64 = function(t) {
        (t = t || "").toString().trim();
        var e = !0;
        return 0 === t.length && (e = !1), t.length % 4 != 0 && (e = !1), !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (e = !1), e;
    }, L = e15.__addimage__.extractImageFromDataUrl = function(t) {
        var e = (t = t || "").split("base64,"), r = null;
        if (2 === e.length) {
            var n = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(e[0]);
            Array.isArray(n) && (r = {
                mimeType: n[1],
                charset: n[2],
                data: e[1]
            });
        }
        return r;
    }, A = e15.__addimage__.supportsArrayBuffer = function() {
        return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array;
    };
    e15.__addimage__.isArrayBuffer = function(t) {
        return A() && t instanceof ArrayBuffer;
    };
    var x = e15.__addimage__.isArrayBufferView = function(t) {
        return A() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array);
    }, S = e15.__addimage__.binaryStringToUint8Array = function(t) {
        for(var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)r[n] = t.charCodeAt(n);
        return r;
    }, _ = e15.__addimage__.arrayBufferToBinaryString = function(t) {
        for(var e = "", r = x(t) ? t : new Uint8Array(t), n = 0; n < r.length; n += 8192)e += String.fromCharCode.apply(null, r.subarray(n, n + 8192));
        return e;
    };
    e15.addImage = function() {
        var e, n, i, a, o, s, u, h, l;
        if ("number" == typeof arguments[1] ? (n = r10, i = arguments[1], a = arguments[2], o = arguments[3], s = arguments[4], u = arguments[5], h = arguments[6], l = arguments[7]) : (n = arguments[1], i = arguments[2], a = arguments[3], o = arguments[4], s = arguments[5], u = arguments[6], h = arguments[7], l = arguments[8]), "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e = arguments[0]) && !d2(e) && "imageData" in e) {
            var f = e;
            e = f.imageData, n = f.format || n || r10, i = f.x || i || 0, a = f.y || a || 0, o = f.w || f.width || o, s = f.h || f.height || s, u = f.alias || u, h = f.compression || h, l = f.rotation || f.angle || l;
        }
        var p = this.internal.getFilters();
        if (void 0 === h && -1 !== p.indexOf("FlateEncode") && (h = "SLOW"), isNaN(i) || isNaN(a)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
        c2.call(this);
        var g = P.call(this, e, n, u, h);
        return v.call(this, i, a, o, s, g, l), this;
    };
    var P = function(t29, n, a, o) {
        var s, c, u;
        if ("string" == typeof t29 && i3(t29) === r10) {
            t29 = unescape(t29);
            var h = k(t29, !1);
            ("" !== h || void 0 !== (h = e15.loadFile(t29, !0))) && (t29 = h);
        }
        if (d2(t29) && (t29 = p2(t29, n)), n = i3(t29, n), !f1(n)) throw new Error("addImage does not support files of type '" + n + "', please ensure that a plugin for '" + n + "' support is added.");
        if ((null == (u = a) || 0 === u.length) && (a = (function(t) {
            return "string" == typeof t || x(t) ? w(t) : x(t.data) ? w(t.data) : null;
        })(t29)), (s = g2.call(this, a)) || (A() && (t29 instanceof Uint8Array || "RGBA" === n || (c = t29, t29 = S(t29))), s = this["process" + n.toUpperCase()](t29, l1.call(this), a, function(t) {
            return t && "string" == typeof t && (t = t.toUpperCase()), t in e15.image_compression ? t : y.NONE;
        }(o), c)), !s) throw new Error("An unknown error occurred whilst processing the image.");
        return s;
    }, k = e15.__addimage__.convertBase64ToBinaryString = function(t, e) {
        var r;
        e = "boolean" != typeof e || e;
        var n, i = "";
        if ("string" == typeof t) {
            n = null !== (r = L(t)) ? r.data : t;
            try {
                i = $ffb17689dbc03ee8$var$u(n);
            } catch (t) {
                if (e) throw N(n) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + t.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ");
            }
        }
        return i;
    };
    e15.getImageProperties = function(t) {
        var n, a, o = "";
        if (d2(t) && (t = p2(t)), "string" == typeof t && i3(t) === r10 && ("" === (o = k(t, !1)) && (o = e15.loadFile(t) || ""), t = o), a = i3(t), !f1(a)) throw new Error("addImage does not support files of type '" + a + "', please ensure that a plugin for '" + a + "' support is added.");
        if (!A() || t instanceof Uint8Array || (t = S(t)), !(n = this["process" + a.toUpperCase()](t))) throw new Error("An unknown error occurred whilst processing the image");
        return n.fileType = a, n;
    };
}($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t30) {
    var e16 = function(t) {
        if (void 0 !== t && "" != t) return !0;
    };
    $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.events.push([
        "addPage",
        function(t) {
            this.internal.getPageInfo(t.pageNumber).pageContext.annotations = [];
        }
    ]), t30.events.push([
        "putPage",
        function(t) {
            for(var r, n, i, a = this.internal.getCoordinateString, o = this.internal.getVerticalCoordinateString, s = this.internal.getPageInfoByObjId(t.objId), c = t.pageContext.annotations, u = !1, h = 0; h < c.length && !u; h++)switch((r = c[h]).type){
                case "link":
                    (e16(r.options.url) || e16(r.options.pageNumber)) && (u = !0);
                    break;
                case "reference":
                case "text":
                case "freetext":
                    u = !0;
            }
            if (0 != u) {
                this.internal.write("/Annots [");
                for(var l = 0; l < c.length; l++){
                    r = c[l];
                    var f = this.internal.pdfEscape, d = this.internal.getEncryptor(t.objId);
                    switch(r.type){
                        case "reference":
                            this.internal.write(" " + r.object.objId + " 0 R ");
                            break;
                        case "text":
                            var p = this.internal.newAdditionalObject(), g = this.internal.newAdditionalObject(), m = this.internal.getEncryptor(p.objId), v = r.title || "Note";
                            i = "<</Type /Annot /Subtype /Text " + (n = "/Rect [" + a(r.bounds.x) + " " + o(r.bounds.y + r.bounds.h) + " " + a(r.bounds.x + r.bounds.w) + " " + o(r.bounds.y) + "] ") + "/Contents (" + f(m(r.contents)) + ")", i += " /Popup " + g.objId + " 0 R", i += " /P " + s.objId + " 0 R", i += " /T (" + f(m(v)) + ") >>", p.content = i;
                            var b = p.objId + " 0 R";
                            i = "<</Type /Annot /Subtype /Popup " + (n = "/Rect [" + a(r.bounds.x + 30) + " " + o(r.bounds.y + r.bounds.h) + " " + a(r.bounds.x + r.bounds.w + 30) + " " + o(r.bounds.y) + "] ") + " /Parent " + b, r.open && (i += " /Open true"), i += " >>", g.content = i, this.internal.write(p.objId, "0 R", g.objId, "0 R");
                            break;
                        case "freetext":
                            n = "/Rect [" + a(r.bounds.x) + " " + o(r.bounds.y) + " " + a(r.bounds.x + r.bounds.w) + " " + o(r.bounds.y + r.bounds.h) + "] ";
                            var y = r.color || "#000000";
                            i = "<</Type /Annot /Subtype /FreeText " + n + "/Contents (" + f(d(r.contents)) + ")", i += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + y + ")", i += " /Border [0 0 0]", i += " >>", this.internal.write(i);
                            break;
                        case "link":
                            if (r.options.name) {
                                var w = this.annotations._nameMap[r.options.name];
                                r.options.pageNumber = w.page, r.options.top = w.y;
                            } else r.options.top || (r.options.top = 0);
                            if (n = "/Rect [" + r.finalBounds.x + " " + r.finalBounds.y + " " + r.finalBounds.w + " " + r.finalBounds.h + "] ", i = "", r.options.url) i = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /A <</S /URI /URI (" + f(d(r.options.url)) + ") >>";
                            else if (r.options.pageNumber) switch(i = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(r.options.pageNumber).objId + " 0 R", r.options.magFactor = r.options.magFactor || "XYZ", r.options.magFactor){
                                case "Fit":
                                    i += " /Fit]";
                                    break;
                                case "FitH":
                                    i += " /FitH " + r.options.top + "]";
                                    break;
                                case "FitV":
                                    r.options.left = r.options.left || 0, i += " /FitV " + r.options.left + "]";
                                    break;
                                case "XYZ":
                                default:
                                    var N = o(r.options.top);
                                    r.options.left = r.options.left || 0, void 0 === r.options.zoom && (r.options.zoom = 0), i += " /XYZ " + r.options.left + " " + N + " " + r.options.zoom + "]";
                            }
                            "" != i && (i += " >>", this.internal.write(i));
                    }
                }
                this.internal.write("]");
            }
        }
    ]), t30.createAnnotation = function(t) {
        var e = this.internal.getCurrentPageInfo();
        switch(t.type){
            case "link":
                this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
                break;
            case "text":
            case "freetext":
                e.pageContext.annotations.push(t);
        }
    }, t30.link = function(t, e, r, n, i) {
        var a = this.internal.getCurrentPageInfo(), o = this.internal.getCoordinateString, s = this.internal.getVerticalCoordinateString;
        a.pageContext.annotations.push({
            finalBounds: {
                x: o(t),
                y: s(e),
                w: o(t + r),
                h: s(e + n)
            },
            options: i,
            type: "link"
        });
    }, t30.textWithLink = function(t, e, r, n) {
        var i, a, o = this.getTextWidth(t), s = this.internal.getLineHeight() / this.internal.scaleFactor;
        if (void 0 !== n.maxWidth) {
            a = n.maxWidth;
            var c = this.splitTextToSize(t, a).length;
            i = Math.ceil(s * c);
        } else a = o, i = s;
        return this.text(t, e, r, n), r += 0.2 * s, "center" === n.align && (e -= o / 2), "right" === n.align && (e -= o), this.link(e, r - s, a, i, n), o;
    }, t30.getTextWidth = function(t) {
        var e = this.internal.getFontSize();
        return this.getStringUnitWidth(t) * e / this.internal.scaleFactor;
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), /**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t31) {
    var e17 = {
        1569: [
            65152
        ],
        1570: [
            65153,
            65154
        ],
        1571: [
            65155,
            65156
        ],
        1572: [
            65157,
            65158
        ],
        1573: [
            65159,
            65160
        ],
        1574: [
            65161,
            65162,
            65163,
            65164
        ],
        1575: [
            65165,
            65166
        ],
        1576: [
            65167,
            65168,
            65169,
            65170
        ],
        1577: [
            65171,
            65172
        ],
        1578: [
            65173,
            65174,
            65175,
            65176
        ],
        1579: [
            65177,
            65178,
            65179,
            65180
        ],
        1580: [
            65181,
            65182,
            65183,
            65184
        ],
        1581: [
            65185,
            65186,
            65187,
            65188
        ],
        1582: [
            65189,
            65190,
            65191,
            65192
        ],
        1583: [
            65193,
            65194
        ],
        1584: [
            65195,
            65196
        ],
        1585: [
            65197,
            65198
        ],
        1586: [
            65199,
            65200
        ],
        1587: [
            65201,
            65202,
            65203,
            65204
        ],
        1588: [
            65205,
            65206,
            65207,
            65208
        ],
        1589: [
            65209,
            65210,
            65211,
            65212
        ],
        1590: [
            65213,
            65214,
            65215,
            65216
        ],
        1591: [
            65217,
            65218,
            65219,
            65220
        ],
        1592: [
            65221,
            65222,
            65223,
            65224
        ],
        1593: [
            65225,
            65226,
            65227,
            65228
        ],
        1594: [
            65229,
            65230,
            65231,
            65232
        ],
        1601: [
            65233,
            65234,
            65235,
            65236
        ],
        1602: [
            65237,
            65238,
            65239,
            65240
        ],
        1603: [
            65241,
            65242,
            65243,
            65244
        ],
        1604: [
            65245,
            65246,
            65247,
            65248
        ],
        1605: [
            65249,
            65250,
            65251,
            65252
        ],
        1606: [
            65253,
            65254,
            65255,
            65256
        ],
        1607: [
            65257,
            65258,
            65259,
            65260
        ],
        1608: [
            65261,
            65262
        ],
        1609: [
            65263,
            65264,
            64488,
            64489
        ],
        1610: [
            65265,
            65266,
            65267,
            65268
        ],
        1649: [
            64336,
            64337
        ],
        1655: [
            64477
        ],
        1657: [
            64358,
            64359,
            64360,
            64361
        ],
        1658: [
            64350,
            64351,
            64352,
            64353
        ],
        1659: [
            64338,
            64339,
            64340,
            64341
        ],
        1662: [
            64342,
            64343,
            64344,
            64345
        ],
        1663: [
            64354,
            64355,
            64356,
            64357
        ],
        1664: [
            64346,
            64347,
            64348,
            64349
        ],
        1667: [
            64374,
            64375,
            64376,
            64377
        ],
        1668: [
            64370,
            64371,
            64372,
            64373
        ],
        1670: [
            64378,
            64379,
            64380,
            64381
        ],
        1671: [
            64382,
            64383,
            64384,
            64385
        ],
        1672: [
            64392,
            64393
        ],
        1676: [
            64388,
            64389
        ],
        1677: [
            64386,
            64387
        ],
        1678: [
            64390,
            64391
        ],
        1681: [
            64396,
            64397
        ],
        1688: [
            64394,
            64395
        ],
        1700: [
            64362,
            64363,
            64364,
            64365
        ],
        1702: [
            64366,
            64367,
            64368,
            64369
        ],
        1705: [
            64398,
            64399,
            64400,
            64401
        ],
        1709: [
            64467,
            64468,
            64469,
            64470
        ],
        1711: [
            64402,
            64403,
            64404,
            64405
        ],
        1713: [
            64410,
            64411,
            64412,
            64413
        ],
        1715: [
            64406,
            64407,
            64408,
            64409
        ],
        1722: [
            64414,
            64415
        ],
        1723: [
            64416,
            64417,
            64418,
            64419
        ],
        1726: [
            64426,
            64427,
            64428,
            64429
        ],
        1728: [
            64420,
            64421
        ],
        1729: [
            64422,
            64423,
            64424,
            64425
        ],
        1733: [
            64480,
            64481
        ],
        1734: [
            64473,
            64474
        ],
        1735: [
            64471,
            64472
        ],
        1736: [
            64475,
            64476
        ],
        1737: [
            64482,
            64483
        ],
        1739: [
            64478,
            64479
        ],
        1740: [
            64508,
            64509,
            64510,
            64511
        ],
        1744: [
            64484,
            64485,
            64486,
            64487
        ],
        1746: [
            64430,
            64431
        ],
        1747: [
            64432,
            64433
        ]
    }, r11 = {
        65247: {
            65154: 65269,
            65156: 65271,
            65160: 65273,
            65166: 65275
        },
        65248: {
            65154: 65270,
            65156: 65272,
            65160: 65274,
            65166: 65276
        },
        65165: {
            65247: {
                65248: {
                    65258: 65010
                }
            }
        },
        1617: {
            1612: 64606,
            1613: 64607,
            1614: 64608,
            1615: 64609,
            1616: 64610
        }
    }, n5 = {
        1612: 64606,
        1613: 64607,
        1614: 64608,
        1615: 64609,
        1616: 64610
    }, i4 = [
        1570,
        1571,
        1573,
        1575
    ];
    t31.__arabicParser__ = {
    };
    var a4 = t31.__arabicParser__.isInArabicSubstitutionA = function(t) {
        return void 0 !== e17[t.charCodeAt(0)];
    }, o = t31.__arabicParser__.isArabicLetter = function(t) {
        return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t);
    }, s4 = t31.__arabicParser__.isArabicEndLetter = function(t) {
        return o(t) && a4(t) && e17[t.charCodeAt(0)].length <= 2;
    }, c3 = t31.__arabicParser__.isArabicAlfLetter = function(t) {
        return o(t) && i4.indexOf(t.charCodeAt(0)) >= 0;
    };
    t31.__arabicParser__.arabicLetterHasIsolatedForm = function(t) {
        return o(t) && a4(t) && e17[t.charCodeAt(0)].length >= 1;
    };
    var u2 = t31.__arabicParser__.arabicLetterHasFinalForm = function(t) {
        return o(t) && a4(t) && e17[t.charCodeAt(0)].length >= 2;
    };
    t31.__arabicParser__.arabicLetterHasInitialForm = function(t) {
        return o(t) && a4(t) && e17[t.charCodeAt(0)].length >= 3;
    };
    var h2 = t31.__arabicParser__.arabicLetterHasMedialForm = function(t) {
        return o(t) && a4(t) && 4 == e17[t.charCodeAt(0)].length;
    }, l = t31.__arabicParser__.resolveLigatures = function(t) {
        var e = 0, n = r11, i = "", a = 0;
        for(e = 0; e < t.length; e += 1)void 0 !== n[t.charCodeAt(e)] ? (a++, "number" == typeof (n = n[t.charCodeAt(e)]) && (i += String.fromCharCode(n), n = r11, a = 0), e === t.length - 1 && (n = r11, i += t.charAt(e - (a - 1)), e -= a - 1, a = 0)) : (n = r11, i += t.charAt(e - a), e -= a, a = 0);
        return i;
    };
    t31.__arabicParser__.isArabicDiacritic = function(t) {
        return void 0 !== t && void 0 !== n5[t.charCodeAt(0)];
    };
    var f = t31.__arabicParser__.getCorrectForm = function(t, e, r) {
        return o(t) ? !1 === a4(t) ? -1 : !u2(t) || !o(e) && !o(r) || !o(r) && s4(e) || s4(t) && !o(e) || s4(t) && c3(e) || s4(t) && s4(e) ? 0 : h2(t) && o(e) && !s4(e) && o(r) && u2(r) ? 3 : s4(t) || !o(r) ? 1 : 2 : -1;
    }, d = function(t) {
        var r = 0, n = 0, i = 0, a = "", s = "", c = "", u = (t = t || "").split("\\s+"), h = [];
        for(r = 0; r < u.length; r += 1){
            for(h.push(""), n = 0; n < u[r].length; n += 1)a = u[r][n], s = u[r][n - 1], c = u[r][n + 1], o(a) ? (i = f(a, s, c), h[r] += -1 !== i ? String.fromCharCode(e17[a.charCodeAt(0)][i]) : a) : h[r] += a;
            h[r] = l(h[r]);
        }
        return h.join(" ");
    }, p = t31.__arabicParser__.processArabic = t31.processArabic = function() {
        var t, e = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text, r = [];
        if (Array.isArray(e)) {
            var n = 0;
            for(r = [], n = 0; n < e.length; n += 1)Array.isArray(e[n]) ? r.push([
                d(e[n][0]),
                e[n][1],
                e[n][2]
            ]) : r.push([
                d(e[n])
            ]);
            t = r;
        } else t = d(e);
        return "string" == typeof arguments[0] ? t : (arguments[0].text = t, arguments[0]);
    };
    t31.events.push([
        "preProcessText",
        p
    ]);
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.autoPrint = function(t) {
    var e;
    switch((t = t || {
    }).variant = t.variant || "non-conform", t.variant){
        case "javascript":
            this.addJS("print({});");
            break;
        case "non-conform":
        default:
            this.internal.events.subscribe("postPutResources", function() {
                e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj");
            }), this.internal.events.subscribe("putCatalog", function() {
                this.internal.out("/OpenAction " + e + " 0 R");
            });
    }
    return this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t32) {
    var e18 = function() {
        var t33 = void 0;
        Object.defineProperty(this, "pdf", {
            get: function() {
                return t33;
            },
            set: function(e) {
                t33 = e;
            }
        });
        var e19 = 150;
        Object.defineProperty(this, "width", {
            get: function() {
                return e19;
            },
            set: function(t) {
                e19 = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e19 + 1);
            }
        });
        var r = 300;
        Object.defineProperty(this, "height", {
            get: function() {
                return r;
            },
            set: function(t) {
                r = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = r + 1);
            }
        });
        var n = [];
        Object.defineProperty(this, "childNodes", {
            get: function() {
                return n;
            },
            set: function(t) {
                n = t;
            }
        });
        var i = {
        };
        Object.defineProperty(this, "style", {
            get: function() {
                return i;
            },
            set: function(t) {
                i = t;
            }
        }), Object.defineProperty(this, "parentNode", {
        });
    };
    e18.prototype.getContext = function(t, e) {
        var r;
        if ("2d" !== (t = t || "2d")) return null;
        for(r in e)this.pdf.context2d.hasOwnProperty(r) && (this.pdf.context2d[r] = e[r]);
        return this.pdf.context2d._canvas = this, this.pdf.context2d;
    }, e18.prototype.toDataURL = function() {
        throw new Error("toDataURL is not implemented.");
    }, t32.events.push([
        "initialized",
        function() {
            this.canvas = new e18, this.canvas.pdf = this;
        }
    ]);
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), (function(e20) {
    var r12 = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    }, n6 = !1, i5 = function() {
        void 0 === this.internal.__cell__ && (this.internal.__cell__ = {
        }, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({
        }, r12), this.internal.__cell__.margins.width = this.getPageWidth(), a5.call(this));
    }, a5 = function() {
        this.internal.__cell__.lastCell = new o4, this.internal.__cell__.pages = 1;
    }, o4 = function() {
        var t34 = arguments[0];
        Object.defineProperty(this, "x", {
            enumerable: !0,
            get: function() {
                return t34;
            },
            set: function(e) {
                t34 = e;
            }
        });
        var e21 = arguments[1];
        Object.defineProperty(this, "y", {
            enumerable: !0,
            get: function() {
                return e21;
            },
            set: function(t) {
                e21 = t;
            }
        });
        var r = arguments[2];
        Object.defineProperty(this, "width", {
            enumerable: !0,
            get: function() {
                return r;
            },
            set: function(t) {
                r = t;
            }
        });
        var n = arguments[3];
        Object.defineProperty(this, "height", {
            enumerable: !0,
            get: function() {
                return n;
            },
            set: function(t) {
                n = t;
            }
        });
        var i = arguments[4];
        Object.defineProperty(this, "text", {
            enumerable: !0,
            get: function() {
                return i;
            },
            set: function(t) {
                i = t;
            }
        });
        var a = arguments[5];
        Object.defineProperty(this, "lineNumber", {
            enumerable: !0,
            get: function() {
                return a;
            },
            set: function(t) {
                a = t;
            }
        });
        var o = arguments[6];
        return Object.defineProperty(this, "align", {
            enumerable: !0,
            get: function() {
                return o;
            },
            set: function(t) {
                o = t;
            }
        }), this;
    };
    o4.prototype.clone = function() {
        return new o4(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align);
    }, o4.prototype.toArray = function() {
        return [
            this.x,
            this.y,
            this.width,
            this.height,
            this.text,
            this.lineNumber,
            this.align
        ];
    }, e20.setHeaderFunction = function(t) {
        return i5.call(this), this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0, this;
    }, e20.getTextDimensions = function(t35, e22) {
        i5.call(this);
        var r = (e22 = e22 || {
        }).fontSize || this.getFontSize(), n = e22.font || this.getFont(), a = e22.scaleFactor || this.internal.scaleFactor, o = 0, s = 0, c = 0, u = this;
        if (!Array.isArray(t35) && "string" != typeof t35) {
            if ("number" != typeof t35) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
            t35 = String(t35);
        }
        var h = e22.maxWidth;
        h > 0 ? "string" == typeof t35 ? t35 = this.splitTextToSize(t35, h) : "[object Array]" === Object.prototype.toString.call(t35) && (t35 = t35.reduce(function(t, e) {
            return t.concat(u.splitTextToSize(e, h));
        }, [])) : t35 = Array.isArray(t35) ? t35 : [
            t35
        ];
        for(var l = 0; l < t35.length; l++)o < (c = this.getStringUnitWidth(t35[l], {
            font: n
        }) * r) && (o = c);
        return 0 !== o && (s = t35.length), {
            w: o /= a,
            h: Math.max((s * r * this.getLineHeightFactor() - r * (this.getLineHeightFactor() - 1)) / a, 0)
        };
    }, e20.cellAddPage = function() {
        i5.call(this), this.addPage();
        var t = this.internal.__cell__.margins || r12;
        return this.internal.__cell__.lastCell = new o4(t.left, t.top, void 0, void 0), this.internal.__cell__.pages += 1, this;
    };
    var s5 = e20.cell = function() {
        var t;
        t = arguments[0] instanceof o4 ? arguments[0] : new o4(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), i5.call(this);
        var e = this.internal.__cell__.lastCell, a = this.internal.__cell__.padding, s = this.internal.__cell__.margins || r12, c = this.internal.__cell__.tableHeaderRow, u = this.internal.__cell__.printHeaders;
        return void 0 !== e.lineNumber && (e.lineNumber === t.lineNumber ? (t.x = (e.x || 0) + (e.width || 0), t.y = e.y || 0) : e.y + e.height + t.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(), t.y = s.top, u && c && (this.printHeaderRow(t.lineNumber, !0), t.y += c[0].height)) : t.y = e.y + e.height || t.y), void 0 !== t.text[0] && (this.rect(t.x, t.y, t.width, t.height, !0 === n6 ? "FD" : void 0), "right" === t.align ? this.text(t.text, t.x + t.width - a, t.y + a, {
            align: "right",
            baseline: "top"
        }) : "center" === t.align ? this.text(t.text, t.x + t.width / 2, t.y + a, {
            align: "center",
            baseline: "top",
            maxWidth: t.width - a - a
        }) : this.text(t.text, t.x + a, t.y + a, {
            align: "left",
            baseline: "top",
            maxWidth: t.width - a - a
        })), this.internal.__cell__.lastCell = t, this;
    };
    e20.table = function(e23, n, u, h, l) {
        if (i5.call(this), !u) throw new Error("No data for PDF table.");
        var f, d, p, g, m = [], v = [], b = [], y = {
        }, w = {
        }, N = [], L = [], A = (l = l || {
        }).autoSize || !1, x = !1 !== l.printHeaders, S = l.css && void 0 !== l.css["font-size"] ? 16 * l.css["font-size"] : l.fontSize || 12, _ = l.margins || Object.assign({
            width: this.getPageWidth()
        }, r12), P = "number" == typeof l.padding ? l.padding : 3, k = l.headerBackgroundColor || "#c8c8c8", I = l.headerTextColor || "#000";
        if (a5.call(this), this.internal.__cell__.printHeaders = x, this.internal.__cell__.margins = _, this.internal.__cell__.table_font_size = S, this.internal.__cell__.padding = P, this.internal.__cell__.headerBackgroundColor = k, this.internal.__cell__.headerTextColor = I, this.setFontSize(S), null == h) v = m = Object.keys(u[0]), b = m.map(function() {
            return "left";
        });
        else if (Array.isArray(h) && "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(h[0])) for(m = h.map(function(t) {
            return t.name;
        }), v = h.map(function(t) {
            return t.prompt || t.name || "";
        }), b = h.map(function(t) {
            return t.align || "left";
        }), f = 0; f < h.length; f += 1)w[h[f].name] = h[f].width * (19.049976 / 25.4);
        else Array.isArray(h) && "string" == typeof h[0] && (v = m = h, b = m.map(function() {
            return "left";
        }));
        if (A || Array.isArray(h) && "string" == typeof h[0]) for(f = 0; f < m.length; f += 1){
            for(y[g = m[f]] = u.map(function(t) {
                return t[g];
            }), this.setFont(void 0, "bold"), N.push(this.getTextDimensions(v[f], {
                fontSize: this.internal.__cell__.table_font_size,
                scaleFactor: this.internal.scaleFactor
            }).w), d = y[g], this.setFont(void 0, "normal"), p = 0; p < d.length; p += 1)N.push(this.getTextDimensions(d[p], {
                fontSize: this.internal.__cell__.table_font_size,
                scaleFactor: this.internal.scaleFactor
            }).w);
            w[g] = Math.max.apply(null, N) + P + P, N = [];
        }
        if (x) {
            var F = {
            };
            for(f = 0; f < m.length; f += 1)F[m[f]] = {
            }, F[m[f]].text = v[f], F[m[f]].align = b[f];
            var C = c4.call(this, F, w);
            L = m.map(function(t) {
                return new o4(e23, n, w[t], C, F[t].text, void 0, F[t].align);
            }), this.setTableHeaderRow(L), this.printHeaderRow(1, !1);
        }
        var $ffb17689dbc03ee8$export$1bc649ab427a02ba = h.reduce(function(t, e) {
            return t[e.name] = e.align, t;
        }, {
        });
        for(f = 0; f < u.length; f += 1){
            "rowStart" in l && l.rowStart instanceof Function && l.rowStart({
                row: f,
                data: u[f]
            }, this);
            var O = c4.call(this, u[f], w);
            for(p = 0; p < m.length; p += 1){
                var $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = u[f][m[p]];
                "cellStart" in l && l.cellStart instanceof Function && l.cellStart({
                    row: f,
                    col: p,
                    data: $ffb17689dbc03ee8$export$7235f0ad083cb4c6
                }, this), s5.call(this, new o4(e23, n, w[m[p]], O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, f + 2, $ffb17689dbc03ee8$export$1bc649ab427a02ba[m[p]]));
            }
        }
        return this.internal.__cell__.table_x = e23, this.internal.__cell__.table_y = n, this;
    };
    var c4 = function(t36, e24) {
        var r = this.internal.__cell__.padding, n = this.internal.__cell__.table_font_size, i6 = this.internal.scaleFactor;
        return Object.keys(t36).map(function(n) {
            var i = t36[n];
            return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, e24[n] - r - r);
        }, this).map(function(t) {
            return this.getLineHeightFactor() * t.length * n / i6 + r + r;
        }, this).reduce(function(t, e) {
            return Math.max(t, e);
        }, 0);
    };
    e20.setTableHeaderRow = function(t) {
        i5.call(this), this.internal.__cell__.tableHeaderRow = t;
    }, e20.printHeaderRow = function(t, e) {
        if (i5.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
        var r;
        if (n6 = !0, "function" == typeof this.internal.__cell__.headerFunction) {
            var a = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
            this.internal.__cell__.lastCell = new o4(a[0], a[1], a[2], a[3], void 0, -1);
        }
        this.setFont(void 0, "bold");
        for(var c = [], u = 0; u < this.internal.__cell__.tableHeaderRow.length; u += 1){
            r = this.internal.__cell__.tableHeaderRow[u].clone(), e && (r.y = this.internal.__cell__.margins.top || 0, c.push(r)), r.lineNumber = t;
            var h = this.getTextColor();
            this.setTextColor(this.internal.__cell__.headerTextColor), this.setFillColor(this.internal.__cell__.headerBackgroundColor), s5.call(this, r), this.setTextColor(h);
        }
        c.length > 0 && this.setTableHeaderRow(c), this.setFont(void 0, "normal"), n6 = !1;
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API);
var $ffb17689dbc03ee8$var$Pt = {
    italic: [
        "italic",
        "oblique",
        "normal"
    ],
    oblique: [
        "oblique",
        "italic",
        "normal"
    ],
    normal: [
        "normal",
        "oblique",
        "italic"
    ]
}, $ffb17689dbc03ee8$var$kt = [
    "ultra-condensed",
    "extra-condensed",
    "condensed",
    "semi-condensed",
    "normal",
    "semi-expanded",
    "expanded",
    "extra-expanded",
    "ultra-expanded"
], $ffb17689dbc03ee8$var$It = $ffb17689dbc03ee8$var$_t($ffb17689dbc03ee8$var$kt), $ffb17689dbc03ee8$var$Ft = [
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900
], $ffb17689dbc03ee8$var$Ct = $ffb17689dbc03ee8$var$_t($ffb17689dbc03ee8$var$Ft);
function $ffb17689dbc03ee8$var$jt(t37) {
    var e = t37.family.replace(/"|'/g, "").toLowerCase(), r = function(t) {
        return $ffb17689dbc03ee8$var$Pt[t = t || "normal"] ? t : "normal";
    }(t37.style), n = function(t) {
        if (!t) return 400;
        if ("number" == typeof t) return t >= 100 && t <= 900 && t % 100 == 0 ? t : 400;
        if (/^\d00$/.test(t)) return parseInt(t);
        switch(t){
            case "bold":
                return 700;
            case "normal":
            default:
                return 400;
        }
    }(t37.weight), i = function(t) {
        return "number" == typeof $ffb17689dbc03ee8$var$It[t = t || "normal"] ? t : "normal";
    }(t37.stretch);
    return {
        family: e,
        style: r,
        weight: n,
        stretch: i,
        src: t37.src || [],
        ref: t37.ref || {
            name: e,
            style: [
                i,
                r,
                n
            ].join(" ")
        }
    };
}
function $ffb17689dbc03ee8$var$Ot(t, e, r, n) {
    var i;
    for(i = r; i >= 0 && i < e.length; i += n)if (t[e[i]]) return t[e[i]];
    for(i = r; i >= 0 && i < e.length; i -= n)if (t[e[i]]) return t[e[i]];
}
var $ffb17689dbc03ee8$var$Bt = {
    "sans-serif": "helvetica",
    fixed: "courier",
    monospace: "courier",
    terminal: "courier",
    cursive: "times",
    fantasy: "times",
    serif: "times"
}, $ffb17689dbc03ee8$var$Mt = {
    caption: "times",
    icon: "times",
    menu: "times",
    "message-box": "times",
    "small-caption": "times",
    "status-bar": "times"
};
function $ffb17689dbc03ee8$var$Et(t) {
    return [
        t.stretch,
        t.style,
        t.weight,
        t.family
    ].join(" ");
}
function $ffb17689dbc03ee8$var$qt(t38, e25, r13) {
    for(var n7 = (r13 = r13 || {
    }).defaultFontFamily || "times", i7 = Object.assign({
    }, $ffb17689dbc03ee8$var$Bt, r13.genericFontFamilies || {
    }), a = null, o = null, s = 0; s < e25.length; ++s)if (i7[(a = $ffb17689dbc03ee8$var$jt(e25[s])).family] && (a.family = i7[a.family]), t38.hasOwnProperty(a.family)) {
        o = t38[a.family];
        break;
    }
    if (!(o = o || t38[n7])) throw new Error("Could not find a font-family for the rule '" + $ffb17689dbc03ee8$var$Et(a) + "' and default family '" + n7 + "'.");
    if (o = (function(t, e) {
        if (e[t]) return e[t];
        var r = $ffb17689dbc03ee8$var$It[t], n = r <= $ffb17689dbc03ee8$var$It.normal ? -1 : 1, i = $ffb17689dbc03ee8$var$Ot(e, $ffb17689dbc03ee8$var$kt, r, n);
        if (!i) throw new Error("Could not find a matching font-stretch value for " + t);
        return i;
    })(a.stretch, o), o = (function(t, e) {
        if (e[t]) return e[t];
        for(var r = $ffb17689dbc03ee8$var$Pt[t], n = 0; n < r.length; ++n)if (e[r[n]]) return e[r[n]];
        throw new Error("Could not find a matching font-style for " + t);
    })(a.style, o), !(o = function(t, e) {
        if (e[t]) return e[t];
        if (400 === t && e[500]) return e[500];
        if (500 === t && e[400]) return e[400];
        var r = $ffb17689dbc03ee8$var$Ct[t], n = $ffb17689dbc03ee8$var$Ot(e, $ffb17689dbc03ee8$var$Ft, r, t < 400 ? -1 : 1);
        if (!n) throw new Error("Could not find a matching font-weight for value " + t);
        return n;
    }(a.weight, o))) throw new Error("Failed to resolve a font for the rule '" + $ffb17689dbc03ee8$var$Et(a) + "'.");
    return o;
}
function $ffb17689dbc03ee8$var$Dt(t) {
    return t.trimLeft();
}
function $ffb17689dbc03ee8$var$Rt(t, e) {
    for(var r = 0; r < t.length;){
        if (t.charAt(r) === e) return [
            t.substring(0, r),
            t.substring(r + 1)
        ];
        r += 1;
    }
    return null;
}
function $ffb17689dbc03ee8$var$Tt(t) {
    var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
    return null === e ? null : [
        e[0],
        t.substring(e[0].length)
    ];
}
var $ffb17689dbc03ee8$var$Ut, $ffb17689dbc03ee8$var$zt, $ffb17689dbc03ee8$var$Ht, $ffb17689dbc03ee8$var$Wt = [
    "times"
];


!function(e26) {
    var r14, n8, i8, o5, s6, c5, u3, h3, l2, d3 = function(t) {
        return t = t || {
        }, this.isStrokeTransparent = t.isStrokeTransparent || !1, this.strokeOpacity = t.strokeOpacity || 1, this.strokeStyle = t.strokeStyle || "#000000", this.fillStyle = t.fillStyle || "#000000", this.isFillTransparent = t.isFillTransparent || !1, this.fillOpacity = t.fillOpacity || 1, this.font = t.font || "10px sans-serif", this.textBaseline = t.textBaseline || "alphabetic", this.textAlign = t.textAlign || "left", this.lineWidth = t.lineWidth || 1, this.lineJoin = t.lineJoin || "miter", this.lineCap = t.lineCap || "butt", this.path = t.path || [], this.transform = void 0 !== t.transform ? t.transform.clone() : new h3, this.globalCompositeOperation = t.globalCompositeOperation || "normal", this.globalAlpha = t.globalAlpha || 1, this.clip_path = t.clip_path || [], this.currentPoint = t.currentPoint || new c5, this.miterLimit = t.miterLimit || 10, this.lastPoint = t.lastPoint || new c5, this.lineDashOffset = t.lineDashOffset || 0, this.lineDash = t.lineDash || [], this.margin = t.margin || [
            0,
            0,
            0,
            0
        ], this.prevPageLastElemOffset = t.prevPageLastElemOffset || 0, this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect, this;
    };
    e26.events.push([
        "initialized",
        function() {
            this.context2d = new p3(this), r14 = this.internal.f2, n8 = this.internal.getCoordinateString, i8 = this.internal.getVerticalCoordinateString, o5 = this.internal.getHorizontalCoordinate, s6 = this.internal.getVerticalCoordinate, c5 = this.internal.Point, u3 = this.internal.Rectangle, h3 = this.internal.Matrix, l2 = new d3;
        }
    ]);
    var p3 = function(t39) {
        Object.defineProperty(this, "canvas", {
            get: function() {
                return {
                    parentNode: !1,
                    style: !1
                };
            }
        });
        var e27 = t39;
        Object.defineProperty(this, "pdf", {
            get: function() {
                return e27;
            }
        });
        var r15 = !1;
        Object.defineProperty(this, "pageWrapXEnabled", {
            get: function() {
                return r15;
            },
            set: function(t) {
                r15 = Boolean(t);
            }
        });
        var n9 = !1;
        Object.defineProperty(this, "pageWrapYEnabled", {
            get: function() {
                return n9;
            },
            set: function(t) {
                n9 = Boolean(t);
            }
        });
        var i9 = 0;
        Object.defineProperty(this, "posX", {
            get: function() {
                return i9;
            },
            set: function(t) {
                isNaN(t) || (i9 = t);
            }
        });
        var a6 = 0;
        Object.defineProperty(this, "posY", {
            get: function() {
                return a6;
            },
            set: function(t) {
                isNaN(t) || (a6 = t);
            }
        }), Object.defineProperty(this, "margin", {
            get: function() {
                return l2.margin;
            },
            set: function(t) {
                var e;
                "number" == typeof t ? e = [
                    t,
                    t,
                    t,
                    t
                ] : ((e = new Array(4))[0] = t[0], e[1] = t.length >= 2 ? t[1] : e[0], e[2] = t.length >= 3 ? t[2] : e[0], e[3] = t.length >= 4 ? t[3] : e[1]), l2.margin = e;
            }
        });
        var o6 = !1;
        Object.defineProperty(this, "autoPaging", {
            get: function() {
                return o6;
            },
            set: function(t) {
                o6 = t;
            }
        });
        var s7 = 0;
        Object.defineProperty(this, "lastBreak", {
            get: function() {
                return s7;
            },
            set: function(t) {
                s7 = t;
            }
        });
        var c6 = [];
        Object.defineProperty(this, "pageBreaks", {
            get: function() {
                return c6;
            },
            set: function(t) {
                c6 = t;
            }
        }), Object.defineProperty(this, "ctx", {
            get: function() {
                return l2;
            },
            set: function(t) {
                t instanceof d3 && (l2 = t);
            }
        }), Object.defineProperty(this, "path", {
            get: function() {
                return l2.path;
            },
            set: function(t) {
                l2.path = t;
            }
        });
        var u4 = [];
        Object.defineProperty(this, "ctxStack", {
            get: function() {
                return u4;
            },
            set: function(t) {
                u4 = t;
            }
        }), Object.defineProperty(this, "fillStyle", {
            get: function() {
                return this.ctx.fillStyle;
            },
            set: function(t) {
                var e;
                e = g3(t), this.ctx.fillStyle = e.style, this.ctx.isFillTransparent = 0 === e.a, this.ctx.fillOpacity = e.a, this.pdf.setFillColor(e.r, e.g, e.b, {
                    a: e.a
                }), this.pdf.setTextColor(e.r, e.g, e.b, {
                    a: e.a
                });
            }
        }), Object.defineProperty(this, "strokeStyle", {
            get: function() {
                return this.ctx.strokeStyle;
            },
            set: function(t) {
                var e = g3(t);
                this.ctx.strokeStyle = e.style, this.ctx.isStrokeTransparent = 0 === e.a, this.ctx.strokeOpacity = e.a, 0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b));
            }
        }), Object.defineProperty(this, "lineCap", {
            get: function() {
                return this.ctx.lineCap;
            },
            set: function(t) {
                -1 !== [
                    "butt",
                    "round",
                    "square"
                ].indexOf(t) && (this.ctx.lineCap = t, this.pdf.setLineCap(t));
            }
        }), Object.defineProperty(this, "lineWidth", {
            get: function() {
                return this.ctx.lineWidth;
            },
            set: function(t) {
                isNaN(t) || (this.ctx.lineWidth = t, this.pdf.setLineWidth(t));
            }
        }), Object.defineProperty(this, "lineJoin", {
            get: function() {
                return this.ctx.lineJoin;
            },
            set: function(t) {
                -1 !== [
                    "bevel",
                    "round",
                    "miter"
                ].indexOf(t) && (this.ctx.lineJoin = t, this.pdf.setLineJoin(t));
            }
        }), Object.defineProperty(this, "miterLimit", {
            get: function() {
                return this.ctx.miterLimit;
            },
            set: function(t) {
                isNaN(t) || (this.ctx.miterLimit = t, this.pdf.setMiterLimit(t));
            }
        }), Object.defineProperty(this, "textBaseline", {
            get: function() {
                return this.ctx.textBaseline;
            },
            set: function(t) {
                this.ctx.textBaseline = t;
            }
        }), Object.defineProperty(this, "textAlign", {
            get: function() {
                return this.ctx.textAlign;
            },
            set: function(t) {
                -1 !== [
                    "right",
                    "end",
                    "center",
                    "left",
                    "start"
                ].indexOf(t) && (this.ctx.textAlign = t);
            }
        });
        var h4 = null;
        function f(t40, e28) {
            if (null === h4) {
                var r16 = function(t41) {
                    var e = [];
                    return Object.keys(t41).forEach(function(r) {
                        t41[r].forEach(function(t) {
                            var n = null;
                            switch(t){
                                case "bold":
                                    n = {
                                        family: r,
                                        weight: "bold"
                                    };
                                    break;
                                case "italic":
                                    n = {
                                        family: r,
                                        style: "italic"
                                    };
                                    break;
                                case "bolditalic":
                                    n = {
                                        family: r,
                                        weight: "bold",
                                        style: "italic"
                                    };
                                    break;
                                case "":
                                case "normal":
                                    n = {
                                        family: r
                                    };
                            }
                            null !== n && (n.ref = {
                                name: r,
                                style: t
                            }, e.push(n));
                        });
                    }), e;
                }(t40.getFontList());
                h4 = (function(t) {
                    for(var e = {
                    }, r = 0; r < t.length; ++r){
                        var n = $ffb17689dbc03ee8$var$jt(t[r]), i = n.family, a = n.stretch, o = n.style, s = n.weight;
                        e[i] = e[i] || {
                        }, e[i][a] = e[i][a] || {
                        }, e[i][a][o] = e[i][a][o] || {
                        }, e[i][a][o][s] = n;
                    }
                    return e;
                })(r16.concat(e28));
            }
            return h4;
        }
        var p4 = null;
        Object.defineProperty(this, "fontFaces", {
            get: function() {
                return p4;
            },
            set: function(t) {
                h4 = null, p4 = t;
            }
        }), Object.defineProperty(this, "font", {
            get: function() {
                return this.ctx.font;
            },
            set: function(t42) {
                var e29;
                if (this.ctx.font = t42, null !== (e29 = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t42))) {
                    var r18 = e29[1], n10 = (e29[2], e29[3]), i10 = e29[4], a = (e29[5], e29[6]), o = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i10)[2];
                    i10 = "px" === o ? Math.floor(parseFloat(i10) * this.pdf.internal.scaleFactor) : "em" === o ? Math.floor(parseFloat(i10) * this.pdf.getFontSize()) : Math.floor(parseFloat(i10) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i10);
                    var s = function(t) {
                        var e, r, n = [], i = t.trim();
                        if ("" === i) return $ffb17689dbc03ee8$var$Wt;
                        if (i in $ffb17689dbc03ee8$var$Mt) return [
                            $ffb17689dbc03ee8$var$Mt[i]
                        ];
                        for(; "" !== i;){
                            switch(r = null, e = (i = $ffb17689dbc03ee8$var$Dt(i)).charAt(0)){
                                case '"':
                                case "'":
                                    r = $ffb17689dbc03ee8$var$Rt(i.substring(1), e);
                                    break;
                                default:
                                    r = $ffb17689dbc03ee8$var$Tt(i);
                            }
                            if (null === r) return $ffb17689dbc03ee8$var$Wt;
                            if (n.push(r[0]), "" !== (i = $ffb17689dbc03ee8$var$Dt(r[1])) && "," !== i.charAt(0)) return $ffb17689dbc03ee8$var$Wt;
                            i = i.replace(/^,/, "");
                        }
                        return n;
                    }(a);
                    if (this.fontFaces) {
                        var c = $ffb17689dbc03ee8$var$qt(f(this.pdf, this.fontFaces), s.map(function(t) {
                            return {
                                family: t,
                                stretch: "normal",
                                weight: n10,
                                style: r18
                            };
                        }));
                        this.pdf.setFont(c.ref.name, c.ref.style);
                    } else {
                        var u = "";
                        ("bold" === n10 || parseInt(n10, 10) >= 700 || "bold" === r18) && (u = "bold"), "italic" === r18 && (u += "italic"), 0 === u.length && (u = "normal");
                        for(var h = "", l = {
                            arial: "Helvetica",
                            Arial: "Helvetica",
                            verdana: "Helvetica",
                            Verdana: "Helvetica",
                            helvetica: "Helvetica",
                            Helvetica: "Helvetica",
                            "sans-serif": "Helvetica",
                            fixed: "Courier",
                            monospace: "Courier",
                            terminal: "Courier",
                            cursive: "Times",
                            fantasy: "Times",
                            serif: "Times"
                        }, d = 0; d < s.length; d++){
                            if (void 0 !== this.pdf.internal.getFont(s[d], u, {
                                noFallback: !0,
                                disableWarning: !0
                            })) {
                                h = s[d];
                                break;
                            }
                            if ("bolditalic" === u && void 0 !== this.pdf.internal.getFont(s[d], "bold", {
                                noFallback: !0,
                                disableWarning: !0
                            })) h = s[d], u = "bold";
                            else if (void 0 !== this.pdf.internal.getFont(s[d], "normal", {
                                noFallback: !0,
                                disableWarning: !0
                            })) {
                                h = s[d], u = "normal";
                                break;
                            }
                        }
                        if ("" === h) {
                            for(var p = 0; p < s.length; p++)if (l[s[p]]) {
                                h = l[s[p]];
                                break;
                            }
                        }
                        h = "" === h ? "Times" : h, this.pdf.setFont(h, u);
                    }
                }
            }
        }), Object.defineProperty(this, "globalCompositeOperation", {
            get: function() {
                return this.ctx.globalCompositeOperation;
            },
            set: function(t) {
                this.ctx.globalCompositeOperation = t;
            }
        }), Object.defineProperty(this, "globalAlpha", {
            get: function() {
                return this.ctx.globalAlpha;
            },
            set: function(t) {
                this.ctx.globalAlpha = t;
            }
        }), Object.defineProperty(this, "lineDashOffset", {
            get: function() {
                return this.ctx.lineDashOffset;
            },
            set: function(t) {
                this.ctx.lineDashOffset = t, T2.call(this);
            }
        }), Object.defineProperty(this, "lineDash", {
            get: function() {
                return this.ctx.lineDash;
            },
            set: function(t) {
                this.ctx.lineDash = t, T2.call(this);
            }
        }), Object.defineProperty(this, "ignoreClearRect", {
            get: function() {
                return this.ctx.ignoreClearRect;
            },
            set: function(t) {
                this.ctx.ignoreClearRect = Boolean(t);
            }
        });
    };
    p3.prototype.setLineDash = function(t) {
        this.lineDash = t;
    }, p3.prototype.getLineDash = function() {
        return this.lineDash.length % 2 ? this.lineDash.concat(this.lineDash) : this.lineDash.slice();
    }, p3.prototype.fill = function() {
        A2.call(this, "fill", !1);
    }, p3.prototype.stroke = function() {
        A2.call(this, "stroke", !1);
    }, p3.prototype.beginPath = function() {
        this.path = [
            {
                type: "begin"
            }
        ];
    }, p3.prototype.moveTo = function(t, e) {
        if (isNaN(t) || isNaN(e)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
        var r = this.ctx.transform.applyToPoint(new c5(t, e));
        this.path.push({
            type: "mt",
            x: r.x,
            y: r.y
        }), this.ctx.lastPoint = new c5(t, e);
    }, p3.prototype.closePath = function() {
        var e = new c5(0, 0), r = 0;
        for(r = this.path.length - 1; -1 !== r; r--)if ("begin" === this.path[r].type && "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(this.path[r + 1]) && "number" == typeof this.path[r + 1].x) {
            e = new c5(this.path[r + 1].x, this.path[r + 1].y);
            break;
        }
        this.path.push({
            type: "close"
        }), this.ctx.lastPoint = new c5(e.x, e.y);
    }, p3.prototype.lineTo = function(t, e) {
        if (isNaN(t) || isNaN(e)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
        var r = this.ctx.transform.applyToPoint(new c5(t, e));
        this.path.push({
            type: "lt",
            x: r.x,
            y: r.y
        }), this.ctx.lastPoint = new c5(r.x, r.y);
    }, p3.prototype.clip = function() {
        this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), A2.call(this, null, !0);
    }, p3.prototype.quadraticCurveTo = function(t, e, r, n) {
        if (isNaN(r) || isNaN(n) || isNaN(t) || isNaN(e)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
        var i = this.ctx.transform.applyToPoint(new c5(r, n)), o = this.ctx.transform.applyToPoint(new c5(t, e));
        this.path.push({
            type: "qct",
            x1: o.x,
            y1: o.y,
            x: i.x,
            y: i.y
        }), this.ctx.lastPoint = new c5(i.x, i.y);
    }, p3.prototype.bezierCurveTo = function(t, e, r, n, i, o) {
        if (isNaN(i) || isNaN(o) || isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
        var s = this.ctx.transform.applyToPoint(new c5(i, o)), u = this.ctx.transform.applyToPoint(new c5(t, e)), h = this.ctx.transform.applyToPoint(new c5(r, n));
        this.path.push({
            type: "bct",
            x1: u.x,
            y1: u.y,
            x2: h.x,
            y2: h.y,
            x: s.x,
            y: s.y
        }), this.ctx.lastPoint = new c5(s.x, s.y);
    }, p3.prototype.arc = function(t, e, r, n, i, o) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
        if (o = Boolean(o), !this.ctx.transform.isIdentity) {
            var s = this.ctx.transform.applyToPoint(new c5(t, e));
            t = s.x, e = s.y;
            var u = this.ctx.transform.applyToPoint(new c5(0, r)), h = this.ctx.transform.applyToPoint(new c5(0, 0));
            r = Math.sqrt(Math.pow(u.x - h.x, 2) + Math.pow(u.y - h.y, 2));
        }
        Math.abs(i - n) >= 2 * Math.PI && (n = 0, i = 2 * Math.PI), this.path.push({
            type: "arc",
            x: t,
            y: e,
            radius: r,
            startAngle: n,
            endAngle: i,
            counterclockwise: o
        });
    }, p3.prototype.arcTo = function(t, e, r, n, i) {
        throw new Error("arcTo not implemented.");
    }, p3.prototype.rect = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
        this.moveTo(t, e), this.lineTo(t + r, e), this.lineTo(t + r, e + n), this.lineTo(t, e + n), this.lineTo(t, e), this.lineTo(t + r, e), this.lineTo(t, e);
    }, p3.prototype.fillRect = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
        if (!m2.call(this)) {
            var i = {
            };
            "butt" !== this.lineCap && (i.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t, e, r, n), this.fill(), i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap), i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin);
        }
    }, p3.prototype.strokeRect = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
        v2.call(this) || (this.beginPath(), this.rect(t, e, r, n), this.stroke());
    }, p3.prototype.clearRect = function(t, e, r, n) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
        this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t, e, r, n));
    }, p3.prototype.save = function(t) {
        t = "boolean" != typeof t || t;
        for(var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)this.pdf.setPage(r + 1), this.pdf.internal.out("q");
        if (this.pdf.setPage(e), t) {
            this.ctx.fontSize = this.pdf.internal.getFontSize();
            var n = new d3(this.ctx);
            this.ctxStack.push(this.ctx), this.ctx = n;
        }
    }, p3.prototype.restore = function(t) {
        t = "boolean" != typeof t || t;
        for(var e = this.pdf.internal.getCurrentPageInfo().pageNumber, r = 0; r < this.pdf.internal.getNumberOfPages(); r++)this.pdf.setPage(r + 1), this.pdf.internal.out("Q");
        this.pdf.setPage(e), t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin, this.lineDash = this.ctx.lineDash, this.lineDashOffset = this.ctx.lineDashOffset);
    }, p3.prototype.toDataURL = function() {
        throw new Error("toDataUrl not implemented.");
    };
    var g3 = function(t) {
        var e, r, n, i;
        if (!0 === t.isCanvasGradient && (t = t.getColor()), !t) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            style: t
        };
        if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) e = 0, r = 0, n = 0, i = 0;
        else {
            var a = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
            if (null !== a) e = parseInt(a[1]), r = parseInt(a[2]), n = parseInt(a[3]), i = 1;
            else if (null !== (a = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t))) e = parseInt(a[1]), r = parseInt(a[2]), n = parseInt(a[3]), i = parseFloat(a[4]);
            else {
                if (i = 1, "string" == typeof t && "#" !== t.charAt(0)) {
                    var o = new $ffb17689dbc03ee8$var$f(t);
                    t = o.ok ? o.toHex() : "#000000";
                }
                4 === t.length ? (e = t.substring(1, 2), e += e, r = t.substring(2, 3), r += r, n = t.substring(3, 4), n += n) : (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7)), e = parseInt(e, 16), r = parseInt(r, 16), n = parseInt(n, 16);
            }
        }
        return {
            r: e,
            g: r,
            b: n,
            a: i,
            style: t
        };
    }, m2 = function() {
        return this.ctx.isFillTransparent || 0 == this.globalAlpha;
    }, v2 = function() {
        return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha);
    };
    p3.prototype.fillText = function(t, e, r, n) {
        if (isNaN(e) || isNaN(r) || "string" != typeof t) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
        if (n = isNaN(n) ? void 0 : n, !m2.call(this)) {
            var i = q1(this.ctx.transform.rotation), o = this.ctx.transform.scaleX;
            C1.call(this, {
                text: t,
                x: e,
                y: r,
                scale: o,
                angle: i,
                align: this.textAlign,
                maxWidth: n
            });
        }
    }, p3.prototype.strokeText = function(t, e, r, n) {
        if (isNaN(e) || isNaN(r) || "string" != typeof t) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
        if (!v2.call(this)) {
            n = isNaN(n) ? void 0 : n;
            var i = q1(this.ctx.transform.rotation), o = this.ctx.transform.scaleX;
            C1.call(this, {
                text: t,
                x: e,
                y: r,
                scale: o,
                renderingMode: "stroke",
                angle: i,
                align: this.textAlign,
                maxWidth: n
            });
        }
    }, p3.prototype.measureText = function(t43) {
        if ("string" != typeof t43) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
        var e30 = this.pdf, r = this.pdf.internal.scaleFactor, n = e30.internal.getFontSize(), i = e30.getStringUnitWidth(t43) * n / e30.internal.scaleFactor, o = function(t) {
            var e = (t = t || {
            }).width || 0;
            return Object.defineProperty(this, "width", {
                get: function() {
                    return e;
                }
            }), this;
        };
        return new o({
            width: i *= Math.round(96 * r / 72 * 10000) / 10000
        });
    }, p3.prototype.scale = function(t, e) {
        if (isNaN(t) || isNaN(e)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
        var r = new h3(t, 0, 0, e, 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(r);
    }, p3.prototype.rotate = function(t) {
        if (isNaN(t)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
        var e = new h3(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
        this.ctx.transform = this.ctx.transform.multiply(e);
    }, p3.prototype.translate = function(t, e) {
        if (isNaN(t) || isNaN(e)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
        var r = new h3(1, 0, 0, 1, t, e);
        this.ctx.transform = this.ctx.transform.multiply(r);
    }, p3.prototype.transform = function(t, e, r, n, i, o) {
        if (isNaN(t) || isNaN(e) || isNaN(r) || isNaN(n) || isNaN(i) || isNaN(o)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
        var s = new h3(t, e, r, n, i, o);
        this.ctx.transform = this.ctx.transform.multiply(s);
    }, p3.prototype.setTransform = function(t, e, r, n, i, a) {
        t = isNaN(t) ? 1 : t, e = isNaN(e) ? 0 : e, r = isNaN(r) ? 0 : r, n = isNaN(n) ? 1 : n, i = isNaN(i) ? 0 : i, a = isNaN(a) ? 0 : a, this.ctx.transform = new h3(t, e, r, n, i, a);
    };
    var b1 = function() {
        return this.margin[0] > 0 || this.margin[1] > 0 || this.margin[2] > 0 || this.margin[3] > 0;
    };
    p3.prototype.drawImage = function(t, e, r, n, i, a, o, s, c) {
        var l = this.pdf.getImageProperties(t), f = 1, d = 1, p = 1, g = 1;
        void 0 !== n && void 0 !== s && (p = s / n, g = c / i, f = l.width / n * s / n, d = l.height / i * c / i), void 0 === a && (a = e, o = r, e = 0, r = 0), void 0 !== n && void 0 === s && (s = n, c = i), void 0 === n && void 0 === s && (s = l.width, c = l.height);
        for(var m, v = this.ctx.transform.decompose(), w = q1(v.rotate.shx), A = new h3, S = (A = (A = (A = A.multiply(v.translate)).multiply(v.skew)).multiply(v.scale)).applyToRectangle(new u3(a - e * p, o - r * g, n * f, i * d)), _ = y2.call(this, S), P = [], k = 0; k < _.length; k += 1)-1 === P.indexOf(_[k]) && P.push(_[k]);
        if (L2(P), this.autoPaging) for(var I = P[0], F = P[P.length - 1], C = I; C < F + 1; C++){
            this.pdf.setPage(C);
            var $ffb17689dbc03ee8$export$1bc649ab427a02ba = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], O = 1 === C ? this.posY + this.margin[0] : this.margin[0], $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], $ffb17689dbc03ee8$export$549f717800d2b57f = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 = 1 === C ? 0 : $ffb17689dbc03ee8$export$7235f0ad083cb4c6 + (C - 2) * $ffb17689dbc03ee8$export$549f717800d2b57f;
            if (0 !== this.ctx.clip_path.length) {
                var D = this.path;
                m = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N2(m, this.posX + this.margin[3], -$ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + O + this.ctx.prevPageLastElemOffset), x1.call(this, "fill", !0), this.path = D;
            }
            var R = JSON.parse(JSON.stringify(S));
            R = N2([
                R
            ], this.posX + this.margin[3], -$ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + O + this.ctx.prevPageLastElemOffset)[0];
            var T = (C > I || C < F) && b1.call(this);
            T && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], $ffb17689dbc03ee8$export$1bc649ab427a02ba, $ffb17689dbc03ee8$export$549f717800d2b57f, null).clip().discardPath()), this.pdf.addImage(t, "JPEG", R.x, R.y, R.w, R.h, null, null, w), T && this.pdf.restoreGraphicsState();
        }
        else this.pdf.addImage(t, "JPEG", S.x, S.y, S.w, S.h, null, null, w);
    };
    var y2 = function(t, e, r) {
        var n = [];
        e = e || this.pdf.internal.pageSize.width, r = r || this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2];
        var i = this.posY + this.ctx.prevPageLastElemOffset;
        switch(t.type){
            default:
            case "mt":
            case "lt":
                n.push(Math.floor((t.y + i) / r) + 1);
                break;
            case "arc":
                n.push(Math.floor((t.y + i - t.radius) / r) + 1), n.push(Math.floor((t.y + i + t.radius) / r) + 1);
                break;
            case "qct":
                var a = D2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
                n.push(Math.floor((a.y + i) / r) + 1), n.push(Math.floor((a.y + a.h + i) / r) + 1);
                break;
            case "bct":
                var o = R2(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
                n.push(Math.floor((o.y + i) / r) + 1), n.push(Math.floor((o.y + o.h + i) / r) + 1);
                break;
            case "rect":
                n.push(Math.floor((t.y + i) / r) + 1), n.push(Math.floor((t.y + t.h + i) / r) + 1);
        }
        for(var s = 0; s < n.length; s += 1)for(; this.pdf.internal.getNumberOfPages() < n[s];)w2.call(this);
        return n;
    }, w2 = function() {
        var t = this.fillStyle, e = this.strokeStyle, r = this.font, n = this.lineCap, i = this.lineWidth, a = this.lineJoin;
        this.pdf.addPage(), this.fillStyle = t, this.strokeStyle = e, this.font = r, this.lineCap = n, this.lineWidth = i, this.lineJoin = a;
    }, N2 = function(t, e, r) {
        for(var n = 0; n < t.length; n++)switch(t[n].type){
            case "bct":
                t[n].x2 += e, t[n].y2 += r;
            case "qct":
                t[n].x1 += e, t[n].y1 += r;
            case "mt":
            case "lt":
            case "arc":
            default:
                t[n].x += e, t[n].y += r;
        }
        return t;
    }, L2 = function(t44) {
        return t44.sort(function(t, e) {
            return t - e;
        });
    }, A2 = function(t, e) {
        for(var r, n, i = this.fillStyle, a = this.strokeStyle, o = this.lineCap, s = this.lineWidth, c = Math.abs(s * this.ctx.transform.scaleX), u = this.lineJoin, h = JSON.parse(JSON.stringify(this.path)), l = JSON.parse(JSON.stringify(this.path)), f = [], d = 0; d < l.length; d++)if (void 0 !== l[d].x) for(var p = y2.call(this, l[d]), g = 0; g < p.length; g += 1)-1 === f.indexOf(p[g]) && f.push(p[g]);
        for(var m = 0; m < f.length; m++)for(; this.pdf.internal.getNumberOfPages() < f[m];)w2.call(this);
        if (L2(f), this.autoPaging) for(var v = f[0], A = f[f.length - 1], S = v; S < A + 1; S++){
            this.pdf.setPage(S), this.fillStyle = i, this.strokeStyle = a, this.lineCap = o, this.lineWidth = c, this.lineJoin = u;
            var _ = this.pdf.internal.pageSize.width - this.margin[3] - this.margin[1], P = 1 === S ? this.posY + this.margin[0] : this.margin[0], k = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], I = this.pdf.internal.pageSize.height - this.margin[0] - this.margin[2], F = 1 === S ? 0 : k + (S - 2) * I;
            if (0 !== this.ctx.clip_path.length) {
                var C = this.path;
                r = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N2(r, this.posX + this.margin[3], -F + P + this.ctx.prevPageLastElemOffset), x1.call(this, t, !0), this.path = C;
            }
            if (n = JSON.parse(JSON.stringify(h)), this.path = N2(n, this.posX + this.margin[3], -F + P + this.ctx.prevPageLastElemOffset), !1 === e || 0 === S) {
                var $ffb17689dbc03ee8$export$1bc649ab427a02ba = (S > v || S < A) && b1.call(this);
                $ffb17689dbc03ee8$export$1bc649ab427a02ba && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], _, I, null).clip().discardPath()), x1.call(this, t, e), $ffb17689dbc03ee8$export$1bc649ab427a02ba && this.pdf.restoreGraphicsState();
            }
            this.lineWidth = s;
        }
        else this.lineWidth = c, x1.call(this, t, e), this.lineWidth = s;
        this.path = h;
    }, x1 = function(t, e) {
        if (("stroke" !== t || e || !v2.call(this)) && ("stroke" === t || e || !m2.call(this))) {
            for(var r, n, i = [], a = this.path, o = 0; o < a.length; o++){
                var s = a[o];
                switch(s.type){
                    case "begin":
                        i.push({
                            begin: !0
                        });
                        break;
                    case "close":
                        i.push({
                            close: !0
                        });
                        break;
                    case "mt":
                        i.push({
                            start: s,
                            deltas: [],
                            abs: []
                        });
                        break;
                    case "lt":
                        var c = i.length;
                        if (a[o - 1] && !isNaN(a[o - 1].x) && (r = [
                            s.x - a[o - 1].x,
                            s.y - a[o - 1].y
                        ], c > 0)) {
                            for(; c >= 0; c--)if (!0 !== i[c - 1].close && !0 !== i[c - 1].begin) {
                                i[c - 1].deltas.push(r), i[c - 1].abs.push(s);
                                break;
                            }
                        }
                        break;
                    case "bct":
                        r = [
                            s.x1 - a[o - 1].x,
                            s.y1 - a[o - 1].y,
                            s.x2 - a[o - 1].x,
                            s.y2 - a[o - 1].y,
                            s.x - a[o - 1].x,
                            s.y - a[o - 1].y
                        ], i[i.length - 1].deltas.push(r);
                        break;
                    case "qct":
                        var u = a[o - 1].x + 2 / 3 * (s.x1 - a[o - 1].x), h = a[o - 1].y + 2 / 3 * (s.y1 - a[o - 1].y), l = s.x + 2 / 3 * (s.x1 - s.x), f = s.y + 2 / 3 * (s.y1 - s.y), d = s.x, p = s.y;
                        r = [
                            u - a[o - 1].x,
                            h - a[o - 1].y,
                            l - a[o - 1].x,
                            f - a[o - 1].y,
                            d - a[o - 1].x,
                            p - a[o - 1].y
                        ], i[i.length - 1].deltas.push(r);
                        break;
                    case "arc":
                        i.push({
                            deltas: [],
                            abs: [],
                            arc: !0
                        }), Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s);
                }
            }
            n = e ? null : "stroke" === t ? "stroke" : "fill";
            for(var g = !1, b = 0; b < i.length; b++)if (i[b].arc) for(var y = i[b].abs, w = 0; w < y.length; w++){
                var N = y[w];
                "arc" === N.type ? P2.call(this, N.x, N.y, N.radius, N.startAngle, N.endAngle, N.counterclockwise, void 0, e, !g) : $ffb17689dbc03ee8$export$1bc649ab427a02ba.call(this, N.x, N.y), g = !0;
            }
            else if (!0 === i[b].close) this.pdf.internal.out("h"), g = !1;
            else if (!0 !== i[b].begin) {
                var L = i[b].start.x, A = i[b].start.y;
                O1.call(this, i[b].deltas, L, A), g = !0;
            }
            n && k2.call(this, n), e && I1.call(this);
        }
    }, S1 = function(t) {
        var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor, r = e * (this.pdf.internal.getLineHeightFactor() - 1);
        switch(this.ctx.textBaseline){
            case "bottom":
                return t - r;
            case "top":
                return t + e - r;
            case "hanging":
                return t + e - 2 * r;
            case "middle":
                return t + e / 2 - r;
            case "ideographic":
                return t;
            case "alphabetic":
            default:
                return t;
        }
    }, _2 = function(t) {
        return t + this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor * (this.pdf.internal.getLineHeightFactor() - 1);
    };
    p3.prototype.createLinearGradient = function() {
        var t45 = function() {
        };
        return t45.colorStops = [], t45.addColorStop = function(t, e) {
            this.colorStops.push([
                t,
                e
            ]);
        }, t45.getColor = function() {
            return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1];
        }, t45.isCanvasGradient = !0, t45;
    }, p3.prototype.createPattern = function() {
        return this.createLinearGradient();
    }, p3.prototype.createRadialGradient = function() {
        return this.createLinearGradient();
    };
    var P2 = function(t, e, r, n, i, a, o, s, c) {
        for(var u = $ffb17689dbc03ee8$export$549f717800d2b57f.call(this, r, n, i, a), h = 0; h < u.length; h++){
            var l = u[h];
            0 === h && (c ? F1.call(this, l.x1 + t, l.y1 + e) : $ffb17689dbc03ee8$export$1bc649ab427a02ba.call(this, l.x1 + t, l.y1 + e)), $ffb17689dbc03ee8$export$7235f0ad083cb4c6.call(this, t, e, l.x2, l.y2, l.x3, l.y3, l.x4, l.y4);
        }
        s ? I1.call(this) : k2.call(this, o);
    }, k2 = function(t) {
        switch(t){
            case "stroke":
                this.pdf.internal.out("S");
                break;
            case "fill":
                this.pdf.internal.out("f");
        }
    }, I1 = function() {
        this.pdf.clip(), this.pdf.discardPath();
    }, F1 = function(t, e) {
        this.pdf.internal.out(n8(t) + " " + i8(e) + " m");
    }, C1 = function(t) {
        var e;
        switch(t.align){
            case "right":
            case "end":
                e = "right";
                break;
            case "center":
                e = "center";
                break;
            case "left":
            case "start":
            default:
                e = "left";
        }
        var r = this.pdf.getTextDimensions(t.text), n = S1.call(this, t.y), i = _2.call(this, n) - r.h, a = this.ctx.transform.applyToPoint(new c5(t.x, n)), o = this.ctx.transform.decompose(), s = new h3;
        s = (s = (s = s.multiply(o.translate)).multiply(o.skew)).multiply(o.scale);
        for(var l, f, d, p = this.ctx.transform.applyToRectangle(new u3(t.x, n, r.w, r.h)), g = s.applyToRectangle(new u3(t.x, i, r.w, r.h)), m = y2.call(this, g), v = [], w = 0; w < m.length; w += 1)-1 === v.indexOf(m[w]) && v.push(m[w]);
        if (L2(v), this.autoPaging) for(var A = v[0], P = v[v.length - 1], k = A; k < P + 1; k++){
            this.pdf.setPage(k);
            var I = 1 === k ? this.posY + this.margin[0] : this.margin[0], F = this.pdf.internal.pageSize.height - this.posY - this.margin[0] - this.margin[2], C = this.pdf.internal.pageSize.height - this.margin[2], $ffb17689dbc03ee8$export$1bc649ab427a02ba = C - this.margin[0], O = this.pdf.internal.pageSize.width - this.margin[1], $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = O - this.margin[3], $ffb17689dbc03ee8$export$549f717800d2b57f = 1 === k ? 0 : F + (k - 2) * $ffb17689dbc03ee8$export$1bc649ab427a02ba;
            if (0 !== this.ctx.clip_path.length) {
                var $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 = this.path;
                l = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = N2(l, this.posX + this.margin[3], -1 * $ffb17689dbc03ee8$export$549f717800d2b57f + I), x1.call(this, "fill", !0), this.path = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5;
            }
            var q = N2([
                JSON.parse(JSON.stringify(g))
            ], this.posX + this.margin[3], -$ffb17689dbc03ee8$export$549f717800d2b57f + I + this.ctx.prevPageLastElemOffset)[0];
            t.scale >= 0.01 && (f = this.pdf.internal.getFontSize(), this.pdf.setFontSize(f * t.scale), d = this.lineWidth, this.lineWidth = d * t.scale);
            var D = "text" !== this.autoPaging;
            if (D || q.y + q.h <= C) {
                if (D || q.y >= I && q.x <= O) {
                    var R = D ? t.text : this.pdf.splitTextToSize(t.text, t.maxWidth || O - q.x)[0], T = N2([
                        JSON.parse(JSON.stringify(p))
                    ], this.posX + this.margin[3], -$ffb17689dbc03ee8$export$549f717800d2b57f + I + this.ctx.prevPageLastElemOffset)[0], U = D && (k > A || k < P) && b1.call(this);
                    U && (this.pdf.saveGraphicsState(), this.pdf.rect(this.margin[3], this.margin[0], $ffb17689dbc03ee8$export$7235f0ad083cb4c6, $ffb17689dbc03ee8$export$1bc649ab427a02ba, null).clip().discardPath()), this.pdf.text(R, T.x, T.y, {
                        angle: t.angle,
                        align: e,
                        renderingMode: t.renderingMode
                    }), U && this.pdf.restoreGraphicsState();
                }
            } else q.y < C && (this.ctx.prevPageLastElemOffset += C - q.y);
            t.scale >= 0.01 && (this.pdf.setFontSize(f), this.lineWidth = d);
        }
        else t.scale >= 0.01 && (f = this.pdf.internal.getFontSize(), this.pdf.setFontSize(f * t.scale), d = this.lineWidth, this.lineWidth = d * t.scale), this.pdf.text(t.text, a.x + this.posX, a.y + this.posY, {
            angle: t.angle,
            align: e,
            renderingMode: t.renderingMode,
            maxWidth: t.maxWidth
        }), t.scale >= 0.01 && (this.pdf.setFontSize(f), this.lineWidth = d);
    }, $ffb17689dbc03ee8$export$1bc649ab427a02ba = function(t, e, r, a) {
        r = r || 0, a = a || 0, this.pdf.internal.out(n8(t + r) + " " + i8(e + a) + " l");
    }, O1 = function(t, e, r) {
        return this.pdf.lines(t, e, r, null, null);
    }, $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = function(t, e, n, i, a, c, u, h) {
        this.pdf.internal.out([
            r14(o5(n + t)),
            r14(s6(i + e)),
            r14(o5(a + t)),
            r14(s6(c + e)),
            r14(o5(u + t)),
            r14(s6(h + e)),
            "c"
        ].join(" "));
    }, $ffb17689dbc03ee8$export$549f717800d2b57f = function(t, e, r, n) {
        for(var i = 2 * Math.PI, a = Math.PI / 2; e > r;)e -= i;
        var o = Math.abs(r - e);
        o < i && n && (o = i - o);
        for(var s = [], c = n ? -1 : 1, u = e; o > 0.00001;){
            var h = u + c * Math.min(o, a);
            s.push($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.call(this, t, u, h)), o -= Math.abs(h - u), u = h;
        }
        return s;
    }, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 = function(t, e, r) {
        var n = (r - e) / 2, i = t * Math.cos(n), a = t * Math.sin(n), o = i, s = -a, c = o * o + s * s, u = c + o * i + s * a, h = 4 / 3 * (Math.sqrt(2 * c * u) - u) / (o * a - s * i), l = o - h * s, f = s + h * o, d = l, p = -f, g = n + e, m = Math.cos(g), v = Math.sin(g);
        return {
            x1: t * Math.cos(e),
            y1: t * Math.sin(e),
            x2: l * m - f * v,
            y2: l * v + f * m,
            x3: d * m - p * v,
            y3: d * v + p * m,
            x4: t * Math.cos(r),
            y4: t * Math.sin(r)
        };
    }, q1 = function(t) {
        return 180 * t / Math.PI;
    }, D2 = function(t, e, r, n, i, a) {
        var o = t + 0.5 * (r - t), s = e + 0.5 * (n - e), c = i + 0.5 * (r - i), h = a + 0.5 * (n - a), l = Math.min(t, i, o, c), f = Math.max(t, i, o, c), d = Math.min(e, a, s, h), p = Math.max(e, a, s, h);
        return new u3(l, d, f - l, p - d);
    }, R2 = function(t, e, r, n, i, a, o, s) {
        var c, h, l, f, d, p, g, m, v, b, y, w, N, L, A = r - t, x = n - e, S = i - r, _ = a - n, P = o - i, k = s - a;
        for(h = 0; h < 41; h++)v = (g = (l = t + (c = h / 40) * A) + c * ((d = r + c * S) - l)) + c * (d + c * (i + c * P - d) - g), b = (m = (f = e + c * x) + c * ((p = n + c * _) - f)) + c * (p + c * (a + c * k - p) - m), 0 == h ? (y = v, w = b, N = v, L = b) : (y = Math.min(y, v), w = Math.min(w, b), N = Math.max(N, v), L = Math.max(L, b));
        return new u3(Math.round(y), Math.round(w), Math.round(N - y), Math.round(L - w));
    }, T2 = function() {
        if (this.prevLineDash || this.ctx.lineDash.length || this.ctx.lineDashOffset) {
            var t, e, r = (t = this.ctx.lineDash, e = this.ctx.lineDashOffset, JSON.stringify({
                lineDash: t,
                lineDashOffset: e
            }));
            this.prevLineDash !== r && (this.pdf.setLineDash(this.ctx.lineDash, this.ctx.lineDashOffset), this.prevLineDash = r);
        }
    };
}($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), /**
 * @license
 * jsPDF filters PlugIn
 * Copyright (c) 2014 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t46) {
    var r20 = function(t47) {
        var e31, r21, n, i, a, o, s, c, u, h;
        for(/[^\x00-\xFF]/.test(t47), r21 = [], n = 0, i = (t47 += e31 = "\0\0\0\0".slice(t47.length % 4 || 4)).length; i > n; n += 4)0 !== (a = (t47.charCodeAt(n) << 24) + (t47.charCodeAt(n + 1) << 16) + (t47.charCodeAt(n + 2) << 8) + t47.charCodeAt(n + 3)) ? (o = (a = ((a = ((a = ((a = (a - (h = a % 85)) / 85) - (u = a % 85)) / 85) - (c = a % 85)) / 85) - (s = a % 85)) / 85) % 85, r21.push(o + 33, s + 33, c + 33, u + 33, h + 33)) : r21.push(122);
        return (function(t, e) {
            for(var r = e; r > 0; r--)t.pop();
        })(r21, e31.length), String.fromCharCode.apply(String, r21) + "~>";
    }, n12 = function(t48) {
        var e32, r22, n, i, a, o = String, s = "length", c = 255, u = "charCodeAt", h = "slice", l = "replace";
        for(t48[h](-2), t48 = t48[h](0, -2)[l](/\s/g, "")[l]("z", "!!!!!"), n = [], i = 0, a = (t48 += e32 = "uuuuu"[h](t48[s] % 5 || 5))[s]; a > i; i += 5)r22 = 52200625 * (t48[u](i) - 33) + 614125 * (t48[u](i + 1) - 33) + 7225 * (t48[u](i + 2) - 33) + 85 * (t48[u](i + 3) - 33) + (t48[u](i + 4) - 33), n.push(c & r22 >> 24, c & r22 >> 16, c & r22 >> 8, c & r22);
        return (function(t, e) {
            for(var r = e; r > 0; r--)t.pop();
        })(n, e32[s]), o.fromCharCode.apply(o, n);
    }, i12 = function(t) {
        var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
        if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))), t.length % 2 && (t += "0"), !1 === e.test(t)) return "";
        for(var r = "", n = 0; n < t.length; n += 2)r += String.fromCharCode("0x" + (t[n] + t[n + 1]));
        return r;
    }, a7 = function(t49) {
        for(var r = new Uint8Array(t49.length), n = t49.length; n--;)r[n] = t49.charCodeAt(n);
        return t49 = (r = $3202ecda957ada6e$export$f87121a6d50aff25(r)).reduce(function(t, e) {
            return t + String.fromCharCode(e);
        }, "");
    };
    t46.processDataByFilters = function(t50, e) {
        var o = 0, s = t50 || "", c = [];
        for("string" == typeof (e = e || []) && (e = [
            e
        ]), o = 0; o < e.length; o += 1)switch(e[o]){
            case "ASCII85Decode":
            case "/ASCII85Decode":
                s = n12(s), c.push("/ASCII85Encode");
                break;
            case "ASCII85Encode":
            case "/ASCII85Encode":
                s = r20(s), c.push("/ASCII85Decode");
                break;
            case "ASCIIHexDecode":
            case "/ASCIIHexDecode":
                s = i12(s), c.push("/ASCIIHexEncode");
                break;
            case "ASCIIHexEncode":
            case "/ASCIIHexEncode":
                s = s.split("").map(function(t) {
                    return ("0" + t.charCodeAt().toString(16)).slice(-2);
                }).join("") + ">", c.push("/ASCIIHexDecode");
                break;
            case "FlateEncode":
            case "/FlateEncode":
                s = a7(s), c.push("/FlateDecode");
                break;
            default:
                throw new Error('The filter: "' + e[o] + '" is not implemented');
        }
        return {
            data: s,
            reverseChain: c.reverse().join(" ")
        };
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), /**
 * @license
 * jsPDF fileloading PlugIn
 * Copyright (c) 2018 Aras Abbasi (aras.abbasi@gmail.com)
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t51) {
    t51.loadFile = function(t52, e33, r23) {
        return (function(t53, e34, r24) {
            e34 = !1 !== e34, r24 = "function" == typeof r24 ? r24 : function() {
            };
            var n13 = void 0;
            try {
                n13 = (function(t54, e35, r25) {
                    var n14 = new XMLHttpRequest, i = 0, a = function(t) {
                        var e = t.length, r = [], n = String.fromCharCode;
                        for(i = 0; i < e; i += 1)r.push(n(255 & t.charCodeAt(i)));
                        return r.join("");
                    };
                    if (n14.open("GET", t54, !e35), n14.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e35 && (n14.onload = function() {
                        200 === n14.status ? r25(a(this.responseText)) : r25(void 0);
                    }), n14.send(null), e35 && 200 === n14.status) return a(n14.responseText);
                })(t53, e34, r24);
            } catch (t) {
            }
            return n13;
        })(t52, e33, r23);
    }, t51.loadImageFile = t51.loadFile;
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), (function(e36) {
    function r26() {
        return ($ffb17689dbc03ee8$var$n.html2canvas ? Promise.resolve($ffb17689dbc03ee8$var$n.html2canvas) : (parcelRequire("gahzI"))).catch(function(t) {
            return Promise.reject(new Error("Could not load html2canvas: " + t));
        }).then(function(t) {
            return t.default ? t.default : t;
        });
    }
    function i13() {
        return ($ffb17689dbc03ee8$var$n.DOMPurify ? Promise.resolve($ffb17689dbc03ee8$var$n.DOMPurify) : (parcelRequire("coXMN"))).catch(function(t) {
            return Promise.reject(new Error("Could not load dompurify: " + t));
        }).then(function(t) {
            return t.default ? t.default : t;
        });
    }
    var a8 = function(e) {
        var r = (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e);
        return "undefined" === r ? "undefined" : "string" === r || e instanceof String ? "string" : "number" === r || e instanceof Number ? "number" : "function" === r || e instanceof Function ? "function" : e && e.constructor === Array ? "array" : e && 1 === e.nodeType ? "element" : "object" === r ? "object" : "unknown";
    }, o7 = function(t, e) {
        var r = document.createElement(t);
        for(var n in e.className && (r.className = e.className), e.innerHTML && e.dompurify && (r.innerHTML = e.dompurify.sanitize(e.innerHTML)), e.style)r.style[n] = e.style[n];
        return r;
    }, s8 = function t(e) {
        var r = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))), n = t.convert(Promise.resolve(), r);
        return n = (n = n.setProgress(1, t, 1, [
            t
        ])).set(e);
    };
    (s8.prototype = Object.create(Promise.prototype)).constructor = s8, s8.convert = function(t, e) {
        return t.__proto__ = e || s8.prototype, t;
    }, s8.template = {
        prop: {
            src: null,
            container: null,
            overlay: null,
            canvas: null,
            img: null,
            pdf: null,
            pageSize: null,
            callback: function() {
            }
        },
        progress: {
            val: 0,
            state: null,
            n: 0,
            stack: []
        },
        opt: {
            filename: "file.pdf",
            margin: [
                0,
                0,
                0,
                0
            ],
            enableLinks: !0,
            x: 0,
            y: 0,
            html2canvas: {
            },
            jsPDF: {
            },
            backgroundColor: "transparent"
        }
    }, s8.prototype.from = function(t55, e37) {
        return this.then(function() {
            switch(e37 = e37 || (function(t) {
                switch(a8(t)){
                    case "string":
                        return "string";
                    case "element":
                        return "canvas" === t.nodeName.toLowerCase() ? "canvas" : "element";
                    default:
                        return "unknown";
                }
            })(t55)){
                case "string":
                    return this.then(i13).then(function(e) {
                        return this.set({
                            src: o7("div", {
                                innerHTML: t55,
                                dompurify: e
                            })
                        });
                    });
                case "element":
                    return this.set({
                        src: t55
                    });
                case "canvas":
                    return this.set({
                        canvas: t55
                    });
                case "img":
                    return this.set({
                        img: t55
                    });
                default:
                    return this.error("Unknown source type.");
            }
        });
    }, s8.prototype.to = function(t) {
        switch(t){
            case "container":
                return this.toContainer();
            case "canvas":
                return this.toCanvas();
            case "img":
                return this.toImg();
            case "pdf":
                return this.toPdf();
            default:
                return this.error("Invalid target.");
        }
    }, s8.prototype.toContainer = function() {
        return this.thenList([
            function() {
                return this.prop.src || this.error("Cannot duplicate - no source HTML.");
            },
            function() {
                return this.prop.pageSize || this.setPageSize();
            }
        ]).then(function() {
            var t56 = {
                position: "relative",
                display: "inline-block",
                width: ("number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) : this.opt.windowWidth) + "px",
                left: 0,
                right: 0,
                top: 0,
                margin: "auto",
                backgroundColor: this.opt.backgroundColor
            }, e38 = function t(e, r) {
                for(var n = 3 === e.nodeType ? document.createTextNode(e.nodeValue) : e.cloneNode(!1), i = e.firstChild; i; i = i.nextSibling)!0 !== r && 1 === i.nodeType && "SCRIPT" === i.nodeName || n.appendChild(t(i, r));
                return 1 === e.nodeType && ("CANVAS" === e.nodeName ? (n.width = e.width, n.height = e.height, n.getContext("2d").drawImage(e, 0, 0)) : "TEXTAREA" !== e.nodeName && "SELECT" !== e.nodeName || (n.value = e.value), n.addEventListener("load", function() {
                    n.scrollTop = e.scrollTop, n.scrollLeft = e.scrollLeft;
                }, !0)), n;
            }(this.prop.src, this.opt.html2canvas.javascriptEnabled);
            "BODY" === e38.tagName && (t56.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o7("div", {
                className: "html2pdf__overlay",
                style: {
                    position: "fixed",
                    overflow: "hidden",
                    zIndex: 1000,
                    left: "-100000px",
                    right: 0,
                    bottom: 0,
                    top: 0
                }
            }), this.prop.container = o7("div", {
                className: "html2pdf__container",
                style: t56
            }), this.prop.container.appendChild(e38), this.prop.container.firstChild.appendChild(o7("div", {
                style: {
                    clear: "both",
                    border: "0 none transparent",
                    margin: 0,
                    padding: 0,
                    height: 0
                }
            })), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px";
        });
    }, s8.prototype.toCanvas = function() {
        var t57 = [
            function() {
                return document.body.contains(this.prop.container) || this.toContainer();
            }
        ];
        return this.thenList(t57).then(r26).then(function(t) {
            var e = Object.assign({
            }, this.opt.html2canvas);
            return delete e.onrendered, t(this.prop.container, e);
        }).then(function(t) {
            (this.opt.html2canvas.onrendered || function() {
            })(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
        });
    }, s8.prototype.toContext2d = function() {
        var t58 = [
            function() {
                return document.body.contains(this.prop.container) || this.toContainer();
            }
        ];
        return this.thenList(t58).then(r26).then(function(t59) {
            var e = this.opt.jsPDF, r = this.opt.fontFaces, n = "number" != typeof this.opt.width || isNaN(this.opt.width) || "number" != typeof this.opt.windowWidth || isNaN(this.opt.windowWidth) ? 1 : this.opt.width / this.opt.windowWidth, i = Object.assign({
                async: !0,
                allowTaint: !0,
                scale: n,
                scrollX: this.opt.scrollX || 0,
                scrollY: this.opt.scrollY || 0,
                backgroundColor: "#ffffff",
                imageTimeout: 15000,
                logging: !0,
                proxy: null,
                removeContainer: !0,
                foreignObjectRendering: !1,
                useCORS: !1
            }, this.opt.html2canvas);
            if (delete i.onrendered, e.context2d.autoPaging = void 0 === this.opt.autoPaging || this.opt.autoPaging, e.context2d.posX = this.opt.x, e.context2d.posY = this.opt.y, e.context2d.margin = this.opt.margin, e.context2d.fontFaces = r, r) for(var a = 0; a < r.length; ++a){
                var o = r[a], s = o.src.find(function(t) {
                    return "truetype" === t.format;
                });
                s && e.addFont(s.url, o.ref.name, o.ref.style);
            }
            return i.windowHeight = i.windowHeight || 0, i.windowHeight = 0 == i.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : i.windowHeight, e.context2d.save(!0), t59(this.prop.container, i);
        }).then(function(t) {
            this.opt.jsPDF.context2d.restore(!0), (this.opt.html2canvas.onrendered || function() {
            })(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay);
        });
    }, s8.prototype.toImg = function() {
        return this.thenList([
            function() {
                return this.prop.canvas || this.toCanvas();
            }
        ]).then(function() {
            var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
            this.prop.img = document.createElement("img"), this.prop.img.src = t;
        });
    }, s8.prototype.toPdf = function() {
        return this.thenList([
            function() {
                return this.toContext2d();
            }
        ]).then(function() {
            this.prop.pdf = this.prop.pdf || this.opt.jsPDF;
        });
    }, s8.prototype.output = function(t, e, r) {
        return "img" === (r = r || "pdf").toLowerCase() || "image" === r.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e);
    }, s8.prototype.outputPdf = function(t, e) {
        return this.thenList([
            function() {
                return this.prop.pdf || this.toPdf();
            }
        ]).then(function() {
            return this.prop.pdf.output(t, e);
        });
    }, s8.prototype.outputImg = function(t) {
        return this.thenList([
            function() {
                return this.prop.img || this.toImg();
            }
        ]).then(function() {
            switch(t){
                case void 0:
                case "img":
                    return this.prop.img;
                case "datauristring":
                case "dataurlstring":
                    return this.prop.img.src;
                case "datauri":
                case "dataurl":
                    return document.location.href = this.prop.img.src;
                default:
                    throw 'Image output type "' + t + '" is not supported.';
            }
        });
    }, s8.prototype.save = function(t) {
        return this.thenList([
            function() {
                return this.prop.pdf || this.toPdf();
            }
        ]).set(t ? {
            filename: t
        } : null).then(function() {
            this.prop.pdf.save(this.opt.filename);
        });
    }, s8.prototype.doCallback = function() {
        return this.thenList([
            function() {
                return this.prop.pdf || this.toPdf();
            }
        ]).then(function() {
            this.prop.callback(this.prop.pdf);
        });
    }, s8.prototype.set = function(t) {
        if ("object" !== a8(t)) return this;
        var e39 = Object.keys(t || {
        }).map(function(e) {
            if (e in s8.template.prop) return function() {
                this.prop[e] = t[e];
            };
            switch(e){
                case "margin":
                    return this.setMargin.bind(this, t.margin);
                case "jsPDF":
                    return function() {
                        return this.opt.jsPDF = t.jsPDF, this.setPageSize();
                    };
                case "pageSize":
                    return this.setPageSize.bind(this, t.pageSize);
                default:
                    return function() {
                        this.opt[e] = t[e];
                    };
            }
        }, this);
        return this.then(function() {
            return this.thenList(e39);
        });
    }, s8.prototype.get = function(t, e) {
        return this.then(function() {
            var r = t in s8.template.prop ? this.prop[t] : this.opt[t];
            return e ? e(r) : r;
        });
    }, s8.prototype.setMargin = function(t) {
        return this.then(function() {
            switch(a8(t)){
                case "number":
                    t = [
                        t,
                        t,
                        t,
                        t
                    ];
                case "array":
                    if (2 === t.length && (t = [
                        t[0],
                        t[1],
                        t[0],
                        t[1]
                    ]), 4 === t.length) break;
                default:
                    return this.error("Invalid margin array.");
            }
            this.opt.margin = t;
        }).then(this.setPageSize);
    }, s8.prototype.setPageSize = function(t60) {
        function e40(t, e) {
            return Math.floor(t * e / 72 * 96);
        }
        return this.then(function() {
            (t60 = t60 || $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t60.inner = {
                width: t60.width - this.opt.margin[1] - this.opt.margin[3],
                height: t60.height - this.opt.margin[0] - this.opt.margin[2]
            }, t60.inner.px = {
                width: e40(t60.inner.width, t60.k),
                height: e40(t60.inner.height, t60.k)
            }, t60.inner.ratio = t60.inner.height / t60.inner.width), this.prop.pageSize = t60;
        });
    }, s8.prototype.setProgress = function(t, e, r, n) {
        return null != t && (this.progress.val = t), null != e && (this.progress.state = e), null != r && (this.progress.n = r), null != n && (this.progress.stack = n), this.progress.ratio = this.progress.val / this.progress.state, this;
    }, s8.prototype.updateProgress = function(t, e, r, n) {
        return this.setProgress(t ? this.progress.val + t : null, e || null, r ? this.progress.n + r : null, n ? this.progress.stack.concat(n) : null);
    }, s8.prototype.then = function(t61, e41) {
        var r = this;
        return this.thenCore(t61, e41, function(t62, e42) {
            return r.updateProgress(null, null, 1, [
                t62
            ]), Promise.prototype.then.call(this, function(e) {
                return r.updateProgress(null, t62), e;
            }).then(t62, e42).then(function(t) {
                return r.updateProgress(1), t;
            });
        });
    }, s8.prototype.thenCore = function(t, e, r) {
        r = r || Promise.prototype.then;
        t && (t = t.bind(this)), e && (e = e.bind(this));
        var n = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : s8.convert(Object.assign({
        }, this), Promise.prototype), i = r.call(n, t, e);
        return s8.convert(i, this.__proto__);
    }, s8.prototype.thenExternal = function(t, e) {
        return Promise.prototype.then.call(this, t, e);
    }, s8.prototype.thenList = function(t63) {
        var e = this;
        return t63.forEach(function(t) {
            e = e.thenCore(t);
        }), e;
    }, s8.prototype.catch = function(t) {
        t && (t = t.bind(this));
        var e = Promise.prototype.catch.call(this, t);
        return s8.convert(e, this);
    }, s8.prototype.catchExternal = function(t) {
        return Promise.prototype.catch.call(this, t);
    }, s8.prototype.error = function(t) {
        return this.then(function() {
            throw new Error(t);
        });
    }, s8.prototype.using = s8.prototype.set, s8.prototype.saveAs = s8.prototype.save, s8.prototype.export = s8.prototype.output, s8.prototype.run = s8.prototype.then, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.getPageSize = function(e, r, n) {
        if ("object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e)) {
            var i = e;
            e = i.orientation, r = i.unit || r, n = i.format || n;
        }
        r = r || "mm", n = n || "a4", e = ("" + (e || "P")).toLowerCase();
        var a, o = ("" + n).toLowerCase(), s = {
            a0: [
                2383.94,
                3370.39
            ],
            a1: [
                1683.78,
                2383.94
            ],
            a2: [
                1190.55,
                1683.78
            ],
            a3: [
                841.89,
                1190.55
            ],
            a4: [
                595.28,
                841.89
            ],
            a5: [
                419.53,
                595.28
            ],
            a6: [
                297.64,
                419.53
            ],
            a7: [
                209.76,
                297.64
            ],
            a8: [
                147.4,
                209.76
            ],
            a9: [
                104.88,
                147.4
            ],
            a10: [
                73.7,
                104.88
            ],
            b0: [
                2834.65,
                4008.19
            ],
            b1: [
                2004.09,
                2834.65
            ],
            b2: [
                1417.32,
                2004.09
            ],
            b3: [
                1000.63,
                1417.32
            ],
            b4: [
                708.66,
                1000.63
            ],
            b5: [
                498.9,
                708.66
            ],
            b6: [
                354.33,
                498.9
            ],
            b7: [
                249.45,
                354.33
            ],
            b8: [
                175.75,
                249.45
            ],
            b9: [
                124.72,
                175.75
            ],
            b10: [
                87.87,
                124.72
            ],
            c0: [
                2599.37,
                3676.54
            ],
            c1: [
                1836.85,
                2599.37
            ],
            c2: [
                1298.27,
                1836.85
            ],
            c3: [
                918.43,
                1298.27
            ],
            c4: [
                649.13,
                918.43
            ],
            c5: [
                459.21,
                649.13
            ],
            c6: [
                323.15,
                459.21
            ],
            c7: [
                229.61,
                323.15
            ],
            c8: [
                161.57,
                229.61
            ],
            c9: [
                113.39,
                161.57
            ],
            c10: [
                79.37,
                113.39
            ],
            dl: [
                311.81,
                623.62
            ],
            letter: [
                612,
                792
            ],
            "government-letter": [
                576,
                756
            ],
            legal: [
                612,
                1008
            ],
            "junior-legal": [
                576,
                360
            ],
            ledger: [
                1224,
                792
            ],
            tabloid: [
                792,
                1224
            ],
            "credit-card": [
                153,
                243
            ]
        };
        switch(r){
            case "pt":
                a = 1;
                break;
            case "mm":
                a = 72 / 25.4;
                break;
            case "cm":
                a = 72 / 2.54;
                break;
            case "in":
                a = 72;
                break;
            case "px":
                a = 0.75;
                break;
            case "pc":
            case "em":
                a = 12;
                break;
            case "ex":
                a = 6;
                break;
            default:
                throw "Invalid unit: " + r;
        }
        var c, u = 0, h = 0;
        if (s.hasOwnProperty(o)) u = s[o][1] / a, h = s[o][0] / a;
        else try {
            u = n[1], h = n[0];
        } catch (t) {
            throw new Error("Invalid format: " + n);
        }
        if ("p" === e || "portrait" === e) e = "p", h > u && (c = h, h = u, u = c);
        else {
            if ("l" !== e && "landscape" !== e) throw "Invalid orientation: " + e;
            e = "l", u > h && (c = h, h = u, u = c);
        }
        return {
            width: h,
            height: u,
            unit: r,
            k: a,
            orientation: e
        };
    }, e36.html = function(t, e) {
        (e = e || {
        }).callback = e.callback || function() {
        }, e.html2canvas = e.html2canvas || {
        }, e.html2canvas.canvas = e.html2canvas.canvas || this.canvas, e.jsPDF = e.jsPDF || this, e.fontFaces = e.fontFaces ? e.fontFaces.map($ffb17689dbc03ee8$var$jt) : null;
        var r = new s8(e);
        return e.worker ? r : r.from(t).doCallback();
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.addJS = function(t) {
    return $ffb17689dbc03ee8$var$Ht = t, this.internal.events.subscribe("postPutResources", function() {
        $ffb17689dbc03ee8$var$Ut = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + ($ffb17689dbc03ee8$var$Ut + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), $ffb17689dbc03ee8$var$zt = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + $ffb17689dbc03ee8$var$Ht + ")"), this.internal.out(">>"), this.internal.out("endobj");
    }), this.internal.events.subscribe("putCatalog", function() {
        void 0 !== $ffb17689dbc03ee8$var$Ut && void 0 !== $ffb17689dbc03ee8$var$zt && this.internal.out("/Names <</JavaScript " + $ffb17689dbc03ee8$var$Ut + " 0 R>>");
    }), this;
}, /**
 * @license
 * Copyright (c) 2014 Steven Spungin (TwelveTone LLC)  steven@twelvetone.tv
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t64) {
    var e43;
    t64.events.push([
        "postPutResources",
        function() {
            var t = this, r = /^(\d+) 0 obj$/;
            if (this.outline.root.children.length > 0) for(var n = t.outline.render().split(/\r\n/), i = 0; i < n.length; i++){
                var a = n[i], o = r.exec(a);
                if (null != o) {
                    var s = o[1];
                    t.internal.newObjectDeferredBegin(s, !1);
                }
                t.internal.write(a);
            }
            if (this.outline.createNamedDestinations) {
                var c = this.internal.pages.length, u = [];
                for(i = 0; i < c; i++){
                    var h = t.internal.newObject();
                    u.push(h);
                    var l = t.internal.getPageInfo(i + 1);
                    t.internal.write("<< /D[" + l.objId + " 0 R /XYZ null null null]>> endobj");
                }
                var f = t.internal.newObject();
                t.internal.write("<< /Names [ ");
                for(i = 0; i < u.length; i++)t.internal.write("(page_" + (i + 1) + ")" + u[i] + " 0 R");
                t.internal.write(" ] >>", "endobj"), e43 = t.internal.newObject(), t.internal.write("<< /Dests " + f + " 0 R"), t.internal.write(">>", "endobj");
            }
        }
    ]), t64.events.push([
        "putCatalog",
        function() {
            this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e43 + " 0 R"));
        }
    ]), t64.events.push([
        "initialized",
        function() {
            var t65 = this;
            t65.outline = {
                createNamedDestinations: !1,
                root: {
                    children: []
                }
            }, t65.outline.add = function(t, e, r) {
                var n = {
                    title: e,
                    options: r,
                    children: []
                };
                return null == t && (t = this.root), t.children.push(n), n;
            }, t65.outline.render = function() {
                return this.ctx = {
                }, this.ctx.val = "", this.ctx.pdf = t65, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val;
            }, t65.outline.genIds_r = function(e) {
                e.id = t65.internal.newObjectDeferred();
                for(var r = 0; r < e.children.length; r++)this.genIds_r(e.children[r]);
            }, t65.outline.renderRoot = function(t) {
                this.objStart(t), this.line("/Type /Outlines"), t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))), this.line("/Count " + this.count_r({
                    count: 0
                }, t)), this.objEnd();
            }, t65.outline.renderItems = function(e) {
                for(var r = this.ctx.pdf.internal.getVerticalCoordinateString, n = 0; n < e.children.length; n++){
                    var i = e.children[n];
                    this.objStart(i), this.line("/Title " + this.makeString(i.title)), this.line("/Parent " + this.makeRef(e)), n > 0 && this.line("/Prev " + this.makeRef(e.children[n - 1])), n < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[n + 1])), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
                    var a = this.count = this.count_r({
                        count: 0
                    }, i);
                    if (a > 0 && this.line("/Count " + a), i.options && i.options.pageNumber) {
                        var o = t65.internal.getPageInfo(i.options.pageNumber);
                        this.line("/Dest [" + o.objId + " 0 R /XYZ 0 " + r(0) + " 0]");
                    }
                    this.objEnd();
                }
                for(var s = 0; s < e.children.length; s++)this.renderItems(e.children[s]);
            }, t65.outline.line = function(t) {
                this.ctx.val += t + "\r\n";
            }, t65.outline.makeRef = function(t) {
                return t.id + " 0 R";
            }, t65.outline.makeString = function(e) {
                return "(" + t65.internal.pdfEscape(e) + ")";
            }, t65.outline.objStart = function(t) {
                this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n";
            }, t65.outline.objEnd = function() {
                this.ctx.val += ">> \r\nendobj\r\n";
            }, t65.outline.count_r = function(t, e) {
                for(var r = 0; r < e.children.length; r++)t.count++, this.count_r(t, e.children[r]);
                return t.count;
            };
        }
    ]);
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), /**
 * @license
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t66) {
    var e = [
        192,
        193,
        194,
        195,
        196,
        197,
        198,
        199
    ];
    t66.processJPEG = function(t67, r27, n15, i14, a9, o8) {
        var s, c = this.decode.DCT_DECODE, u = null;
        if ("string" == typeof t67 || this.__addimage__.isArrayBuffer(t67) || this.__addimage__.isArrayBufferView(t67)) {
            switch(t67 = a9 || t67, t67 = this.__addimage__.isArrayBuffer(t67) ? new Uint8Array(t67) : t67, (s = (function(t) {
                for(var r, n = 256 * t.charCodeAt(4) + t.charCodeAt(5), i = t.length, a = {
                    width: 0,
                    height: 0,
                    numcomponents: 1
                }, o = 4; o < i; o += 2){
                    if (o += n, -1 !== e.indexOf(t.charCodeAt(o + 1))) {
                        r = 256 * t.charCodeAt(o + 5) + t.charCodeAt(o + 6), a = {
                            width: 256 * t.charCodeAt(o + 7) + t.charCodeAt(o + 8),
                            height: r,
                            numcomponents: t.charCodeAt(o + 9)
                        };
                        break;
                    }
                    n = 256 * t.charCodeAt(o + 2) + t.charCodeAt(o + 3);
                }
                return a;
            })(t67 = this.__addimage__.isArrayBufferView(t67) ? this.__addimage__.arrayBufferToBinaryString(t67) : t67)).numcomponents){
                case 1:
                    o8 = this.color_spaces.DEVICE_GRAY;
                    break;
                case 4:
                    o8 = this.color_spaces.DEVICE_CMYK;
                    break;
                case 3:
                    o8 = this.color_spaces.DEVICE_RGB;
            }
            u = {
                data: t67,
                width: s.width,
                height: s.height,
                colorSpace: o8,
                bitsPerComponent: 8,
                filter: c,
                index: r27,
                alias: n15
            };
        }
        return u;
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API);
var $ffb17689dbc03ee8$var$Vt, $ffb17689dbc03ee8$var$Gt, $ffb17689dbc03ee8$var$Yt, $ffb17689dbc03ee8$var$Jt, $ffb17689dbc03ee8$var$Xt, $ffb17689dbc03ee8$var$Kt = function() {
    var t68, e44, i15;
    function a10(t69) {
        var e45, r, n, i, a, o, s, c, u, h, l, f, d, p;
        for(this.data = t69, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {
        }, this.animation = null, this.text = {
        }, o = null;;){
            switch(e45 = this.readUInt32(), u = (function() {
                var t, e;
                for(e = [], t = 0; t < 4; ++t)e.push(String.fromCharCode(this.data[this.pos++]));
                return e;
            }).call(this).join("")){
                case "IHDR":
                    this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
                    break;
                case "acTL":
                    this.animation = {
                        numFrames: this.readUInt32(),
                        numPlays: this.readUInt32() || 1 / 0,
                        frames: []
                    };
                    break;
                case "PLTE":
                    this.palette = this.read(e45);
                    break;
                case "fcTL":
                    o && this.animation.frames.push(o), this.pos += 4, o = {
                        width: this.readUInt32(),
                        height: this.readUInt32(),
                        xOffset: this.readUInt32(),
                        yOffset: this.readUInt32()
                    }, a = this.readUInt16(), i = this.readUInt16() || 100, o.delay = 1000 * a / i, o.disposeOp = this.data[this.pos++], o.blendOp = this.data[this.pos++], o.data = [];
                    break;
                case "IDAT":
                case "fdAT":
                    for("fdAT" === u && (this.pos += 4, e45 -= 4), t69 = (null != o ? o.data : void 0) || this.imgData, f = 0; 0 <= e45 ? f < e45 : f > e45; 0 <= e45 ? ++f : --f)t69.push(this.data[this.pos++]);
                    break;
                case "tRNS":
                    switch(this.transparency = {
                    }, this.colorType){
                        case 3:
                            if (n = this.palette.length / 3, this.transparency.indexed = this.read(e45), this.transparency.indexed.length > n) throw new Error("More transparent colors than palette size");
                            if ((h = n - this.transparency.indexed.length) > 0) for(d = 0; 0 <= h ? d < h : d > h; 0 <= h ? ++d : --d)this.transparency.indexed.push(255);
                            break;
                        case 0:
                            this.transparency.grayscale = this.read(e45)[0];
                            break;
                        case 2:
                            this.transparency.rgb = this.read(e45);
                    }
                    break;
                case "tEXt":
                    s = (l = this.read(e45)).indexOf(0), c = String.fromCharCode.apply(String, l.slice(0, s)), this.text[c] = String.fromCharCode.apply(String, l.slice(s + 1));
                    break;
                case "IEND":
                    return o && this.animation.frames.push(o), this.colors = (function() {
                        switch(this.colorType){
                            case 0:
                            case 3:
                            case 4:
                                return 1;
                            case 2:
                            case 6:
                                return 3;
                        }
                    }).call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, r = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * r, this.colorSpace = (function() {
                        switch(this.colors){
                            case 1:
                                return "DeviceGray";
                            case 3:
                                return "DeviceRGB";
                        }
                    }).call(this), void (this.imgData = new Uint8Array(this.imgData));
                default:
                    this.pos += e45;
            }
            if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
        }
    }
    a10.prototype.read = function(t) {
        var e, r;
        for(r = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e)r.push(this.data[this.pos++]);
        return r;
    }, a10.prototype.readUInt32 = function() {
        return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
    }, a10.prototype.readUInt16 = function() {
        return this.data[this.pos++] << 8 | this.data[this.pos++];
    }, a10.prototype.decodePixels = function(t) {
        var e = this.pixelBitlength / 8, n = new Uint8Array(this.width * this.height * e), i = 0, a = this;
        if (null == t && (t = this.imgData), 0 === t.length) return new Uint8Array(0);
        function o10(r, o, s, c) {
            var u, h, l, f, d, p, g, m, v, b, y, w, N, L, A, x, S, _, P, k, I, F = Math.ceil((a.width - r) / s), C = Math.ceil((a.height - o) / c), $ffb17689dbc03ee8$export$1bc649ab427a02ba = a.width == F && a.height == C;
            for(L = e * F, w = $ffb17689dbc03ee8$export$1bc649ab427a02ba ? n : new Uint8Array(L * C), p = t.length, N = 0, h = 0; N < C && i < p;){
                switch(t[i++]){
                    case 0:
                        for(f = S = 0; S < L; f = S += 1)w[h++] = t[i++];
                        break;
                    case 1:
                        for(f = _ = 0; _ < L; f = _ += 1)u = t[i++], d = f < e ? 0 : w[h - e], w[h++] = (u + d) % 256;
                        break;
                    case 2:
                        for(f = P = 0; P < L; f = P += 1)u = t[i++], l = (f - f % e) / e, A = N && w[(N - 1) * L + l * e + f % e], w[h++] = (A + u) % 256;
                        break;
                    case 3:
                        for(f = k = 0; k < L; f = k += 1)u = t[i++], l = (f - f % e) / e, d = f < e ? 0 : w[h - e], A = N && w[(N - 1) * L + l * e + f % e], w[h++] = (u + Math.floor((d + A) / 2)) % 256;
                        break;
                    case 4:
                        for(f = I = 0; I < L; f = I += 1)u = t[i++], l = (f - f % e) / e, d = f < e ? 0 : w[h - e], 0 === N ? A = x = 0 : (A = w[(N - 1) * L + l * e + f % e], x = l && w[(N - 1) * L + (l - 1) * e + f % e]), g = d + A - x, m = Math.abs(g - d), b = Math.abs(g - A), y = Math.abs(g - x), v = m <= b && m <= y ? d : b <= y ? A : x, w[h++] = (u + v) % 256;
                        break;
                    default:
                        throw new Error("Invalid filter algorithm: " + t[i - 1]);
                }
                if (!$ffb17689dbc03ee8$export$1bc649ab427a02ba) {
                    var O = ((o + N * c) * a.width + r) * e, $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = N * L;
                    for(f = 0; f < F; f += 1){
                        for(var $ffb17689dbc03ee8$export$549f717800d2b57f = 0; $ffb17689dbc03ee8$export$549f717800d2b57f < e; $ffb17689dbc03ee8$export$549f717800d2b57f += 1)n[O++] = w[$ffb17689dbc03ee8$export$7235f0ad083cb4c6++];
                        O += (s - 1) * e;
                    }
                }
                N++;
            }
        }
        return t = $3202ecda957ada6e$export$9ec8134f0f1b9fc6(t), 1 == a.interlaceMethod ? (o10(0, 0, 8, 8), o10(4, 0, 8, 8), o10(0, 4, 4, 8), o10(2, 0, 4, 4), o10(0, 2, 2, 4), o10(1, 0, 2, 2), o10(0, 1, 1, 2)) : o10(0, 0, 1, 1), n;
    }, a10.prototype.decodePalette = function() {
        var t, e, r, n, i, a, o, s, c;
        for(r = this.palette, a = this.transparency.indexed || [], i = new Uint8Array((a.length || 0) + r.length), n = 0, t = 0, e = o = 0, s = r.length; o < s; e = o += 3)i[n++] = r[e], i[n++] = r[e + 1], i[n++] = r[e + 2], i[n++] = null != (c = a[t++]) ? c : 255;
        return i;
    }, a10.prototype.copyToImageData = function(t, e) {
        var r, n, i, a, o, s, c, u, h, l, f;
        if (n = this.colors, h = null, r = this.hasAlphaChannel, this.palette.length && (h = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(), n = 4, r = !0), u = (i = t.data || t).length, o = h || e, a = s = 0, 1 === n) for(; a < u;)c = h ? 4 * e[a / 4] : s, l = o[c++], i[a++] = l, i[a++] = l, i[a++] = l, i[a++] = r ? o[c++] : 255, s = c;
        else for(; a < u;)c = h ? 4 * e[a / 4] : s, i[a++] = o[c++], i[a++] = o[c++], i[a++] = o[c++], i[a++] = r ? o[c++] : 255, s = c;
    }, a10.prototype.decode = function() {
        var t;
        return t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t;
    };
    var o9 = function() {
        if ("[object Window]" === Object.prototype.toString.call($ffb17689dbc03ee8$var$n)) {
            try {
                e44 = $ffb17689dbc03ee8$var$n.document.createElement("canvas"), i15 = e44.getContext("2d");
            } catch (t) {
                return !1;
            }
            return !0;
        }
        return !1;
    };
    return o9(), t68 = function(t) {
        var r;
        if (!0 === o9()) return i15.width = t.width, i15.height = t.height, i15.clearRect(0, 0, t.width, t.height), i15.putImageData(t, 0, 0), (r = new Image).src = e44.toDataURL(), r;
        throw new Error("This method requires a Browser with Canvas-capability.");
    }, a10.prototype.decodeFrames = function(e) {
        var r, n, i, a, o, s, c, u;
        if (this.animation) {
            for(u = [], n = o = 0, s = (c = this.animation.frames).length; o < s; n = ++o)r = c[n], i = e.createImageData(r.width, r.height), a = this.decodePixels(new Uint8Array(r.data)), this.copyToImageData(i, a), r.imageData = i, u.push(r.image = t68(i));
            return u;
        }
    }, a10.prototype.renderFrame = function(t, e) {
        var r, n, i;
        return r = (n = this.animation.frames)[e], i = n[e - 1], 0 === e && t.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === r.blendOp && t.clearRect(r.xOffset, r.yOffset, r.width, r.height), t.drawImage(r.image, r.xOffset, r.yOffset);
    }, a10.prototype.animate = function(t) {
        var e, r, n, i, a, o11, s = this;
        return r = 0, o11 = this.animation, i = o11.numFrames, n = o11.frames, a = o11.numPlays, (e = function() {
            var o, c;
            if (o = (r++) % i, c = n[o], s.renderFrame(t, o), i > 1 && r / i < a) return s.animation._timeout = setTimeout(e, c.delay);
        })();
    }, a10.prototype.stopAnimation = function() {
        var t;
        return clearTimeout(null != (t = this.animation) ? t._timeout : void 0);
    }, a10.prototype.render = function(t) {
        var e, r;
        return t._png && t._png.stopAnimation(), t._png = this, t.width = this.width, t.height = this.height, e = t.getContext("2d"), this.animation ? (this.decodeFrames(e), this.animate(e)) : (r = e.createImageData(this.width, this.height), this.copyToImageData(r, this.decodePixels()), e.putImageData(r, 0, 0));
    }, a10;
}();
/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */ /**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */ function $ffb17689dbc03ee8$var$Zt(t70) {
    var e46 = 0;
    if (71 !== t70[e46++] || 73 !== t70[e46++] || 70 !== t70[e46++] || 56 !== t70[e46++] || 56 != (t70[e46++] + 1 & 253) || 97 !== t70[e46++]) throw new Error("Invalid GIF 87a/89a header.");
    var r = t70[e46++] | t70[e46++] << 8, n16 = t70[e46++] | t70[e46++] << 8, i16 = t70[e46++], a11 = i16 >> 7, o12 = 1 << (7 & i16) + 1;
    t70[e46++];
    t70[e46++];
    var s = null, c7 = null;
    a11 && (s = e46, c7 = o12, e46 += 3 * o12);
    var u5 = !0, h5 = [], l3 = 0, f2 = null, d4 = 0, p5 = null;
    for(this.width = r, this.height = n16; u5 && e46 < t70.length;)switch(t70[e46++]){
        case 33:
            switch(t70[e46++]){
                case 255:
                    if (11 !== t70[e46] || 78 == t70[e46 + 1] && 69 == t70[e46 + 2] && 84 == t70[e46 + 3] && 83 == t70[e46 + 4] && 67 == t70[e46 + 5] && 65 == t70[e46 + 6] && 80 == t70[e46 + 7] && 69 == t70[e46 + 8] && 50 == t70[e46 + 9] && 46 == t70[e46 + 10] && 48 == t70[e46 + 11] && 3 == t70[e46 + 12] && 1 == t70[e46 + 13] && 0 == t70[e46 + 16]) e46 += 14, p5 = t70[e46++] | t70[e46++] << 8, e46++;
                    else for(e46 += 12;;){
                        if (!((P = t70[e46++]) >= 0)) throw Error("Invalid block size");
                        if (0 === P) break;
                        e46 += P;
                    }
                    break;
                case 249:
                    if (4 !== t70[e46++] || 0 !== t70[e46 + 4]) throw new Error("Invalid graphics extension block.");
                    var g4 = t70[e46++];
                    l3 = t70[e46++] | t70[e46++] << 8, f2 = t70[e46++], 0 == (1 & g4) && (f2 = null), d4 = g4 >> 2 & 7, e46++;
                    break;
                case 254:
                    for(;;){
                        if (!((P = t70[e46++]) >= 0)) throw Error("Invalid block size");
                        if (0 === P) break;
                        e46 += P;
                    }
                    break;
                default:
                    throw new Error("Unknown graphic control label: 0x" + t70[e46 - 1].toString(16));
            }
            break;
        case 44:
            var m3 = t70[e46++] | t70[e46++] << 8, v3 = t70[e46++] | t70[e46++] << 8, b2 = t70[e46++] | t70[e46++] << 8, y3 = t70[e46++] | t70[e46++] << 8, w3 = t70[e46++], N3 = w3 >> 6 & 1, L3 = 1 << (7 & w3) + 1, A = s, x = c7, S = !1;
            if (w3 >> 7) {
                S = !0;
                A = e46, x = L3, e46 += 3 * L3;
            }
            var _ = e46;
            for(e46++;;){
                var P;
                if (!((P = t70[e46++]) >= 0)) throw Error("Invalid block size");
                if (0 === P) break;
                e46 += P;
            }
            h5.push({
                x: m3,
                y: v3,
                width: b2,
                height: y3,
                has_local_palette: S,
                palette_offset: A,
                palette_size: x,
                data_offset: _,
                data_length: e46 - _,
                transparent_index: f2,
                interlaced: !!N3,
                delay: l3,
                disposal: d4
            });
            break;
        case 59:
            u5 = !1;
            break;
        default:
            throw new Error("Unknown gif block: 0x" + t70[e46 - 1].toString(16));
    }
    this.numFrames = function() {
        return h5.length;
    }, this.loopCount = function() {
        return p5;
    }, this.frameInfo = function(t) {
        if (t < 0 || t >= h5.length) throw new Error("Frame index out of range.");
        return h5[t];
    }, this.decodeAndBlitFrameBGRA = function(e, n) {
        var i = this.frameInfo(e), a = i.width * i.height, o = new Uint8Array(a);
        $ffb17689dbc03ee8$var$$t(t70, i.data_offset, o, a);
        var s = i.palette_offset, c = i.transparent_index;
        null === c && (c = 256);
        var u = i.width, h = r - u, l = u, f = 4 * (i.y * r + i.x), d = 4 * ((i.y + i.height) * r + i.x), p = f, g = 4 * h;
        !0 === i.interlaced && (g += 4 * r * 7);
        for(var m = 8, v = 0, b = o.length; v < b; ++v){
            var y = o[v];
            if (0 === l && (l = u, (p += g) >= d && (g = 4 * h + 4 * r * (m - 1), p = f + (u + h) * (m << 1), m >>= 1)), y === c) p += 4;
            else {
                var w = t70[s + 3 * y], N = t70[s + 3 * y + 1], L = t70[s + 3 * y + 2];
                n[p++] = L, n[p++] = N, n[p++] = w, n[p++] = 255;
            }
            --l;
        }
    }, this.decodeAndBlitFrameRGBA = function(e, n) {
        var i = this.frameInfo(e), a = i.width * i.height, o = new Uint8Array(a);
        $ffb17689dbc03ee8$var$$t(t70, i.data_offset, o, a);
        var s = i.palette_offset, c = i.transparent_index;
        null === c && (c = 256);
        var u = i.width, h = r - u, l = u, f = 4 * (i.y * r + i.x), d = 4 * ((i.y + i.height) * r + i.x), p = f, g = 4 * h;
        !0 === i.interlaced && (g += 4 * r * 7);
        for(var m = 8, v = 0, b = o.length; v < b; ++v){
            var y = o[v];
            if (0 === l && (l = u, (p += g) >= d && (g = 4 * h + 4 * r * (m - 1), p = f + (u + h) * (m << 1), m >>= 1)), y === c) p += 4;
            else {
                var w = t70[s + 3 * y], N = t70[s + 3 * y + 1], L = t70[s + 3 * y + 2];
                n[p++] = w, n[p++] = N, n[p++] = L, n[p++] = 255;
            }
            --l;
        }
    };
}
function $ffb17689dbc03ee8$var$$t(t, e, r, n) {
    for(var i = t[e++], o = 1 << i, s = o + 1, c = s + 1, u = i + 1, h = (1 << u) - 1, l = 0, f = 0, d = 0, p = t[e++], g = new Int32Array(4096), m = null;;){
        for(; l < 16 && 0 !== p;)f |= t[e++] << l, l += 8, 1 === p ? p = t[e++] : --p;
        if (l < u) break;
        var v = f & h;
        if (f >>= u, l -= u, v !== o) {
            if (v === s) break;
            for(var b = v < c ? v : m, y = 0, w = b; w > o;)w = g[w] >> 8, ++y;
            var N = w;
            if (d + y + (b !== v ? 1 : 0) > n) return void $ffb17689dbc03ee8$var$a.log("Warning, gif stream longer than expected.");
            r[d++] = N;
            var L = d += y;
            for(b !== v && (r[d++] = N), w = b; y--;)w = g[w], r[--L] = 255 & w, w >>= 8;
            null !== m && c < 4096 && (g[c++] = m << 8 | N, c >= h + 1 && u < 12 && (++u, h = h << 1 | 1)), m = v;
        } else c = s + 1, h = (1 << (u = i + 1)) - 1, m = null;
    }
    return d !== n && $ffb17689dbc03ee8$var$a.log("Warning, gif stream shorter than expected."), r;
}
/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/ function $ffb17689dbc03ee8$var$Qt(t71) {
    var e47, r28, n17, i17, a12, o13 = Math.floor, s9 = new Array(64), c8 = new Array(64), u6 = new Array(64), h6 = new Array(64), l4 = new Array(65535), f3 = new Array(65535), d5 = new Array(64), p6 = new Array(64), g5 = [], m4 = 0, v4 = 7, b3 = new Array(64), y4 = new Array(64), w4 = new Array(64), N4 = new Array(256), L4 = new Array(2048), A3 = [
        0,
        1,
        5,
        6,
        14,
        15,
        27,
        28,
        2,
        4,
        7,
        13,
        16,
        26,
        29,
        42,
        3,
        8,
        12,
        17,
        25,
        30,
        41,
        43,
        9,
        11,
        18,
        24,
        31,
        40,
        44,
        53,
        10,
        19,
        23,
        32,
        39,
        45,
        52,
        54,
        20,
        22,
        33,
        38,
        46,
        51,
        55,
        60,
        21,
        34,
        37,
        47,
        50,
        56,
        59,
        61,
        35,
        36,
        48,
        49,
        57,
        58,
        62,
        63
    ], x2 = [
        0,
        0,
        1,
        5,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ], S2 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
    ], _3 = [
        0,
        0,
        2,
        1,
        3,
        3,
        2,
        4,
        3,
        5,
        5,
        4,
        4,
        0,
        0,
        1,
        125
    ], P3 = [
        1,
        2,
        3,
        0,
        4,
        17,
        5,
        18,
        33,
        49,
        65,
        6,
        19,
        81,
        97,
        7,
        34,
        113,
        20,
        50,
        129,
        145,
        161,
        8,
        35,
        66,
        177,
        193,
        21,
        82,
        209,
        240,
        36,
        51,
        98,
        114,
        130,
        9,
        10,
        22,
        23,
        24,
        25,
        26,
        37,
        38,
        39,
        40,
        41,
        42,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        225,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        241,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
    ], k3 = [
        0,
        0,
        3,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0
    ], I2 = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11
    ], F2 = [
        0,
        0,
        2,
        1,
        2,
        4,
        4,
        3,
        4,
        7,
        5,
        4,
        4,
        0,
        1,
        2,
        119
    ], C2 = [
        0,
        1,
        2,
        3,
        17,
        4,
        5,
        33,
        49,
        6,
        18,
        65,
        81,
        7,
        97,
        113,
        19,
        34,
        50,
        129,
        8,
        20,
        66,
        145,
        161,
        177,
        193,
        9,
        35,
        51,
        82,
        240,
        21,
        98,
        114,
        209,
        10,
        22,
        36,
        52,
        225,
        37,
        241,
        23,
        24,
        25,
        26,
        38,
        39,
        40,
        41,
        42,
        53,
        54,
        55,
        56,
        57,
        58,
        67,
        68,
        69,
        70,
        71,
        72,
        73,
        74,
        83,
        84,
        85,
        86,
        87,
        88,
        89,
        90,
        99,
        100,
        101,
        102,
        103,
        104,
        105,
        106,
        115,
        116,
        117,
        118,
        119,
        120,
        121,
        122,
        130,
        131,
        132,
        133,
        134,
        135,
        136,
        137,
        138,
        146,
        147,
        148,
        149,
        150,
        151,
        152,
        153,
        154,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        178,
        179,
        180,
        181,
        182,
        183,
        184,
        185,
        186,
        194,
        195,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        210,
        211,
        212,
        213,
        214,
        215,
        216,
        217,
        218,
        226,
        227,
        228,
        229,
        230,
        231,
        232,
        233,
        234,
        242,
        243,
        244,
        245,
        246,
        247,
        248,
        249,
        250
    ];
    function $ffb17689dbc03ee8$export$1bc649ab427a02ba(t, e) {
        for(var r = 0, n = 0, i = new Array, a = 1; a <= 16; a++){
            for(var o = 1; o <= t[a]; o++)i[e[n]] = [], i[e[n]][0] = r, i[e[n]][1] = a, n++, r++;
            r *= 2;
        }
        return i;
    }
    function O2(t) {
        for(var e = t[0], r = t[1] - 1; r >= 0;)e & 1 << r && (m4 |= 1 << v4), r--, --v4 < 0 && (255 == m4 ? ($ffb17689dbc03ee8$export$7235f0ad083cb4c6(255), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0)) : $ffb17689dbc03ee8$export$7235f0ad083cb4c6(m4), v4 = 7, m4 = 0);
    }
    function $ffb17689dbc03ee8$export$7235f0ad083cb4c6(t) {
        g5.push(t);
    }
    function $ffb17689dbc03ee8$export$549f717800d2b57f(t) {
        $ffb17689dbc03ee8$export$7235f0ad083cb4c6(t >> 8 & 255), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(255 & t);
    }
    function $ffb17689dbc03ee8$export$ba1e2ffc633a60f5(t72, e48, r29, n18, i18) {
        for(var a13, o14 = i18[0], s10 = i18[240], c9 = function(t, e) {
            var r, n, i, a, o, s, c, u, h, l, f = 0;
            for(h = 0; h < 8; ++h){
                r = t[f], n = t[f + 1], i = t[f + 2], a = t[f + 3], o = t[f + 4], s = t[f + 5], c = t[f + 6];
                var p = r + (u = t[f + 7]), g = r - u, m = n + c, v = n - c, b = i + s, y = i - s, w = a + o, N = a - o, L = p + w, A = p - w, x = m + b, S = m - b;
                t[f] = L + x, t[f + 4] = L - x;
                var _ = 0.707106781 * (S + A);
                t[f + 2] = A + _, t[f + 6] = A - _;
                var P = 0.382683433 * ((L = N + y) - (S = v + g)), k = 0.5411961 * L + P, I = 1.306562965 * S + P, F = 0.707106781 * (x = y + v), C = g + F, $ffb17689dbc03ee8$export$1bc649ab427a02ba = g - F;
                t[f + 5] = $ffb17689dbc03ee8$export$1bc649ab427a02ba + k, t[f + 3] = $ffb17689dbc03ee8$export$1bc649ab427a02ba - k, t[f + 1] = C + I, t[f + 7] = C - I, f += 8;
            }
            for(f = 0, h = 0; h < 8; ++h){
                r = t[f], n = t[f + 8], i = t[f + 16], a = t[f + 24], o = t[f + 32], s = t[f + 40], c = t[f + 48];
                var O = r + (u = t[f + 56]), $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = r - u, $ffb17689dbc03ee8$export$549f717800d2b57f = n + c, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 = n - c, q = i + s, D = i - s, R = a + o, T = a - o, U = O + R, z = O - R, H = $ffb17689dbc03ee8$export$549f717800d2b57f + q, W = $ffb17689dbc03ee8$export$549f717800d2b57f - q;
                t[f] = U + H, t[f + 32] = U - H;
                var V = 0.707106781 * (W + z);
                t[f + 16] = z + V, t[f + 48] = z - V;
                var G = 0.382683433 * ((U = T + D) - (W = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + $ffb17689dbc03ee8$export$7235f0ad083cb4c6)), Y = 0.5411961 * U + G, J = 1.306562965 * W + G, X = 0.707106781 * (H = D + $ffb17689dbc03ee8$export$ba1e2ffc633a60f5), K = $ffb17689dbc03ee8$export$7235f0ad083cb4c6 + X, Z = $ffb17689dbc03ee8$export$7235f0ad083cb4c6 - X;
                t[f + 40] = Z + Y, t[f + 24] = Z - Y, t[f + 8] = K + J, t[f + 56] = K - J, f++;
            }
            for(h = 0; h < 64; ++h)l = t[h] * e[h], d5[h] = l > 0 ? l + 0.5 | 0 : l - 0.5 | 0;
            return d5;
        }(t72, e48), u7 = 0; u7 < 64; ++u7)p6[A3[u7]] = c9[u7];
        var h7 = p6[0] - r29;
        r29 = p6[0], 0 == h7 ? O2(n18[0]) : (O2(n18[f3[a13 = 32767 + h7]]), O2(l4[a13]));
        for(var g6 = 63; g6 > 0 && 0 == p6[g6];)g6--;
        if (0 == g6) return O2(o14), r29;
        for(var m5, v5 = 1; v5 <= g6;){
            for(var b4 = v5; 0 == p6[v5] && v5 <= g6;)++v5;
            var y5 = v5 - b4;
            if (y5 >= 16) {
                m5 = y5 >> 4;
                for(var w5 = 1; w5 <= m5; ++w5)O2(s10);
                y5 &= 15;
            }
            a13 = 32767 + p6[v5], O2(i18[(y5 << 4) + f3[a13]]), O2(l4[a13]), v5++;
        }
        return 63 != g6 && O2(o14), r29;
    }
    function q2(t73) {
        (t73 = Math.min(Math.max(t73, 1), 100), a12 != t73) && (!function(t) {
            for(var e = [
                16,
                11,
                10,
                16,
                24,
                40,
                51,
                61,
                12,
                12,
                14,
                19,
                26,
                58,
                60,
                55,
                14,
                13,
                16,
                24,
                40,
                57,
                69,
                56,
                14,
                17,
                22,
                29,
                51,
                87,
                80,
                62,
                18,
                22,
                37,
                56,
                68,
                109,
                103,
                77,
                24,
                35,
                55,
                64,
                81,
                104,
                113,
                92,
                49,
                64,
                78,
                87,
                103,
                121,
                120,
                101,
                72,
                92,
                95,
                98,
                112,
                100,
                103,
                99
            ], r = 0; r < 64; r++){
                var n = o13((e[r] * t + 50) / 100);
                n = Math.min(Math.max(n, 1), 255), s9[A3[r]] = n;
            }
            for(var i = [
                17,
                18,
                24,
                47,
                99,
                99,
                99,
                99,
                18,
                21,
                26,
                66,
                99,
                99,
                99,
                99,
                24,
                26,
                56,
                99,
                99,
                99,
                99,
                99,
                47,
                66,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99,
                99
            ], a = 0; a < 64; a++){
                var l = o13((i[a] * t + 50) / 100);
                l = Math.min(Math.max(l, 1), 255), c8[A3[a]] = l;
            }
            for(var f = [
                1,
                1.387039845,
                1.306562965,
                1.175875602,
                1,
                0.785694958,
                0.5411961,
                0.275899379
            ], d = 0, p = 0; p < 8; p++)for(var g = 0; g < 8; g++)u6[d] = 1 / (s9[A3[d]] * f[p] * f[g] * 8), h6[d] = 1 / (c8[A3[d]] * f[p] * f[g] * 8), d++;
        }(t73 < 50 ? Math.floor(5000 / t73) : Math.floor(200 - 2 * t73)), a12 = t73);
    }
    this.encode = function(t74, a14) {
        a14 && q2(a14), g5 = new Array, m4 = 0, v4 = 7, $ffb17689dbc03ee8$export$549f717800d2b57f(65496), $ffb17689dbc03ee8$export$549f717800d2b57f(65504), $ffb17689dbc03ee8$export$549f717800d2b57f(16), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(74), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(70), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(73), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(70), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(1), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(1), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0), $ffb17689dbc03ee8$export$549f717800d2b57f(1), $ffb17689dbc03ee8$export$549f717800d2b57f(1), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0), (function() {
            $ffb17689dbc03ee8$export$549f717800d2b57f(65499), $ffb17689dbc03ee8$export$549f717800d2b57f(132), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0);
            for(var t = 0; t < 64; t++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(s9[t]);
            $ffb17689dbc03ee8$export$7235f0ad083cb4c6(1);
            for(var e = 0; e < 64; e++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(c8[e]);
        })(), (function(t, e) {
            $ffb17689dbc03ee8$export$549f717800d2b57f(65472), $ffb17689dbc03ee8$export$549f717800d2b57f(17), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(8), $ffb17689dbc03ee8$export$549f717800d2b57f(e), $ffb17689dbc03ee8$export$549f717800d2b57f(t), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(3), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(1), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(17), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(2), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(17), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(1), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(3), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(17), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(1);
        })(t74.width, t74.height), (function() {
            $ffb17689dbc03ee8$export$549f717800d2b57f(65476), $ffb17689dbc03ee8$export$549f717800d2b57f(418), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0);
            for(var t = 0; t < 16; t++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(x2[t + 1]);
            for(var e = 0; e <= 11; e++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(S2[e]);
            $ffb17689dbc03ee8$export$7235f0ad083cb4c6(16);
            for(var r = 0; r < 16; r++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(_3[r + 1]);
            for(var n = 0; n <= 161; n++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(P3[n]);
            $ffb17689dbc03ee8$export$7235f0ad083cb4c6(1);
            for(var i = 0; i < 16; i++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(k3[i + 1]);
            for(var a = 0; a <= 11; a++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(I2[a]);
            $ffb17689dbc03ee8$export$7235f0ad083cb4c6(17);
            for(var o = 0; o < 16; o++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(F2[o + 1]);
            for(var s = 0; s <= 161; s++)$ffb17689dbc03ee8$export$7235f0ad083cb4c6(C2[s]);
        })(), $ffb17689dbc03ee8$export$549f717800d2b57f(65498), $ffb17689dbc03ee8$export$549f717800d2b57f(12), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(3), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(1), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(2), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(17), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(3), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(17), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(63), $ffb17689dbc03ee8$export$7235f0ad083cb4c6(0);
        var o15 = 0, l = 0, f = 0;
        m4 = 0, v4 = 7, this.encode.displayName = "_encode_";
        for(var d, p, N, A, $ffb17689dbc03ee8$export$1bc649ab427a02ba, D, R, T, U, z = t74.data, H = t74.width, W = t74.height, V = 4 * H, G = 0; G < W;){
            for(d = 0; d < V;){
                for($ffb17689dbc03ee8$export$1bc649ab427a02ba = V * G + d, R = -1, T = 0, U = 0; U < 64; U++)D = $ffb17689dbc03ee8$export$1bc649ab427a02ba + (T = U >> 3) * V + (R = 4 * (7 & U)), G + T >= W && (D -= V * (G + 1 + T - W)), d + R >= V && (D -= d + R - V + 4), p = z[D++], N = z[D++], A = z[D++], b3[U] = (L4[p] + L4[N + 256 >> 0] + L4[A + 512 >> 0] >> 16) - 128, y4[U] = (L4[p + 768 >> 0] + L4[N + 1024 >> 0] + L4[A + 1280 >> 0] >> 16) - 128, w4[U] = (L4[p + 1280 >> 0] + L4[N + 1536 >> 0] + L4[A + 1792 >> 0] >> 16) - 128;
                o15 = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5(b3, u6, o15, e47, n17), l = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5(y4, h6, l, r28, i17), f = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5(w4, h6, f, r28, i17), d += 32;
            }
            G += 8;
        }
        if (v4 >= 0) {
            var Y = [];
            Y[1] = v4 + 1, Y[0] = (1 << v4 + 1) - 1, O2(Y);
        }
        return $ffb17689dbc03ee8$export$549f717800d2b57f(65497), new Uint8Array(g5);
    }, t71 = t71 || 50, (function() {
        for(var t = String.fromCharCode, e = 0; e < 256; e++)N4[e] = t(e);
    })(), e47 = $ffb17689dbc03ee8$export$1bc649ab427a02ba(x2, S2), r28 = $ffb17689dbc03ee8$export$1bc649ab427a02ba(k3, I2), n17 = $ffb17689dbc03ee8$export$1bc649ab427a02ba(_3, P3), i17 = $ffb17689dbc03ee8$export$1bc649ab427a02ba(F2, C2), (function() {
        for(var t = 1, e = 2, r = 1; r <= 15; r++){
            for(var n = t; n < e; n++)f3[32767 + n] = r, l4[32767 + n] = [], l4[32767 + n][1] = r, l4[32767 + n][0] = n;
            for(var i = -(e - 1); i <= -t; i++)f3[32767 + i] = r, l4[32767 + i] = [], l4[32767 + i][1] = r, l4[32767 + i][0] = e - 1 + i;
            t <<= 1, e <<= 1;
        }
    })(), (function() {
        for(var t = 0; t < 256; t++)L4[t] = 19595 * t, L4[t + 256 >> 0] = 38470 * t, L4[t + 512 >> 0] = 7471 * t + 32768, L4[t + 768 >> 0] = -11059 * t, L4[t + 1024 >> 0] = -21709 * t, L4[t + 1280 >> 0] = 32768 * t + 8421375, L4[t + 1536 >> 0] = -27439 * t, L4[t + 1792 >> 0] = -5329 * t;
    })(), q2(t71);
}
/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ function $ffb17689dbc03ee8$var$te(t, e) {
    if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === [
        "BM",
        "BA",
        "CI",
        "CP",
        "IC",
        "PT"
    ].indexOf(this.flag)) throw new Error("Invalid BMP File");
    this.parseHeader(), this.parseBGR();
}
function $ffb17689dbc03ee8$var$ee(t75) {
    function e49(t) {
        if (!t) throw Error("assert :P");
    }
    function r30(t, e, r) {
        for(var n = 0; 4 > n; n++)if (t[e + n] != r.charCodeAt(n)) return !0;
        return !1;
    }
    function n19(t, e, r, n, i) {
        for(var a = 0; a < i; a++)t[e + a] = r[n + a];
    }
    function i19(t, e, r, n) {
        for(var i = 0; i < n; i++)t[e + i] = r;
    }
    function a15(t) {
        return new Int32Array(t);
    }
    function o16(t, e) {
        for(var r = [], n = 0; n < t; n++)r.push(new e);
        return r;
    }
    function s11(t76, e) {
        var r31 = [];
        return (function t(r, n, i) {
            for(var a = i[n], o = 0; o < a && (r.push(i.length > n + 1 ? [] : new e), !(i.length < n + 1)); o++)t(r[o], n + 1, i);
        })(r31, 0, t76), r31;
    }
    var c10 = function() {
        var t77 = this;
        function c11(t, e) {
            for(var r = 1 << e - 1 >>> 0; t & r;)r >>>= 1;
            return r ? (t & r - 1) + r : t;
        }
        function u9(t, r, n, i, a) {
            e49(!(i % n));
            do t[r + (i -= n)] = a;
            while (0 < i)
        }
        function h9(t78, r32, n20, i20, o17) {
            if (e49(2328 >= o17), 512 >= o17) var s12 = a15(512);
            else if (null == (s12 = a15(o17))) return 0;
            return (function(t, r, n, i, o, s) {
                var h, f, d = r, p = 1 << n, g = a15(16), m = a15(16);
                for(e49(0 != o), e49(null != i), e49(null != t), e49(0 < n), f = 0; f < o; ++f){
                    if (15 < i[f]) return 0;
                    ++g[i[f]];
                }
                if (g[0] == o) return 0;
                for(m[1] = 0, h = 1; 15 > h; ++h){
                    if (g[h] > 1 << h) return 0;
                    m[h + 1] = m[h] + g[h];
                }
                for(f = 0; f < o; ++f)h = i[f], 0 < i[f] && (s[m[h]++] = f);
                if (1 == m[15]) return (i = new l6).g = 0, i.value = s[0], u9(t, d, 1, p, i), p;
                var v, b = -1, y = p - 1, w = 0, N = 1, L = 1, A = 1 << n;
                for(f = 0, h = 1, o = 2; h <= n; ++h, o <<= 1){
                    if (N += L <<= 1, 0 > (L -= g[h])) return 0;
                    for(; 0 < g[h]; --g[h])(i = new l6).g = h, i.value = s[f++], u9(t, d + w, o, A, i), w = c11(w, h);
                }
                for(h = n + 1, o = 2; 15 >= h; ++h, o <<= 1){
                    if (N += L <<= 1, 0 > (L -= g[h])) return 0;
                    for(; 0 < g[h]; --g[h]){
                        if (i = new l6, (w & y) != b) {
                            for(d += A, v = 1 << (b = h) - n; 15 > b && !(0 >= (v -= g[b]));)++b, v <<= 1;
                            p += A = 1 << (v = b - n), t[r + (b = w & y)].g = v + n, t[r + b].value = d - r - b;
                        }
                        i.g = h - n, i.value = s[f++], u9(t, d + (w >> n), o, A, i), w = c11(w, h);
                    }
                }
                return N != 2 * m[15] - 1 ? 0 : p;
            })(t78, r32, n20, i20, o17, s12);
        }
        function l6() {
            this.value = this.g = 0;
        }
        function f5() {
            this.value = this.g = 0;
        }
        function d7() {
            this.G = o16(5, l6), this.H = a15(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = o16(Dr, f5);
        }
        function p8(t, r, n, i) {
            e49(null != t), e49(null != r), e49(2147483648 > i), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = r, t.pa = n, t.Jd = r, t.Yc = n + i, t.Zc = 4 <= i ? n + i - 4 + 1 : n, _4(t);
        }
        function g8(t, e) {
            for(var r = 0; 0 < e--;)r |= k4(t, 128) << e;
            return r;
        }
        function m7(t, e) {
            var r = g8(t, e);
            return P4(t) ? -r : r;
        }
        function v7(t, r, n, i) {
            var a, o = 0;
            for(e49(null != t), e49(null != r), e49(4294967288 > i), t.Sb = i, t.Ra = 0, t.u = 0, t.h = 0, 4 < i && (i = 4), a = 0; a < i; ++a)o += r[n + a] << 8 * a;
            t.Ra = o, t.bb = i, t.oa = r, t.pa = n;
        }
        function b6(t) {
            for(; 8 <= t.u && t.bb < t.Sb;)t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << Ur - 8 >>> 0, ++t.bb, t.u -= 8;
            A5(t) && (t.h = 1, t.u = 0);
        }
        function y7(t, r) {
            if (e49(0 <= r), !t.h && r <= Tr) {
                var n = L6(t) & Rr[r];
                return t.u += r, b6(t), n;
            }
            return t.h = 1, t.u = 0;
        }
        function w7() {
            this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0;
        }
        function N6() {
            this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0;
        }
        function L6(t) {
            return t.Ra >>> (t.u & Ur - 1) >>> 0;
        }
        function A5(t) {
            return e49(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > Ur;
        }
        function x3(t, e) {
            t.u = e, t.h = A5(t);
        }
        function S3(t) {
            t.u >= zr && (e49(t.u >= zr), b6(t));
        }
        function _4(t) {
            e49(null != t && null != t.oa), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e49(null != t && null != t.oa), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1));
        }
        function P4(t) {
            return g8(t, 1);
        }
        function k4(t, e) {
            var r = t.Ca;
            0 > t.b && _4(t);
            var n = t.b, i = r * e >>> 8, a = (t.I >>> n > i) + 0;
            for(a ? (r -= i, t.I -= i + 1 << n >>> 0) : r = i + 1, n = r, i = 0; 256 <= n;)i += 8, n >>= 8;
            return n = 7 ^ i + Hr[n], t.b -= n, t.Ca = (r << n) - 1, a;
        }
        function I3(t, e, r) {
            t[e + 0] = r >> 24 & 255, t[e + 1] = r >> 16 & 255, t[e + 2] = r >> 8 & 255, t[e + 3] = r >> 0 & 255;
        }
        function F3(t, e) {
            return t[e + 0] << 0 | t[e + 1] << 8;
        }
        function C3(t, e) {
            return F3(t, e) | t[e + 2] << 16;
        }
        function $ffb17689dbc03ee8$export$1bc649ab427a02ba(t, e) {
            return F3(t, e) | F3(t, e + 2) << 16;
        }
        function O3(t, r) {
            var n = 1 << r;
            return e49(null != t), e49(0 < r), t.X = a15(n), null == t.X ? 0 : (t.Mb = 32 - r, t.Xa = r, 1);
        }
        function $ffb17689dbc03ee8$export$7235f0ad083cb4c6(t, r) {
            e49(null != t), e49(null != r), e49(t.Xa == r.Xa), n19(r.X, 0, t.X, 0, 1 << r.Xa);
        }
        function $ffb17689dbc03ee8$export$549f717800d2b57f() {
            this.X = [], this.Xa = this.Mb = 0;
        }
        function $ffb17689dbc03ee8$export$ba1e2ffc633a60f5(t, r, n, i) {
            e49(null != n), e49(null != i);
            var a = n[0], o = i[0];
            return 0 == a && (a = (t * o + r / 2) / r), 0 == o && (o = (r * a + t / 2) / t), 0 >= a || 0 >= o ? 0 : (n[0] = a, i[0] = o, 1);
        }
        function q3(t, e) {
            return t + (1 << e) - 1 >>> e;
        }
        function D3(t, e) {
            return ((4278255360 & t) + (4278255360 & e) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & e) >>> 0 & 16711935) >>> 0;
        }
        function R3(e, r33) {
            t77[r33] = function(r, n, i, a, o, s, c) {
                var u;
                for(u = 0; u < o; ++u){
                    var h = t77[e](s[c + u - 1], i, a + u);
                    s[c + u] = D3(r[n + u], h);
                }
            };
        }
        function T3() {
            this.ud = this.hd = this.jd = 0;
        }
        function U1(t, e) {
            return ((4278124286 & (t ^ e)) >>> 1) + (t & e) >>> 0;
        }
        function z(t) {
            return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0;
        }
        function H2(t, e) {
            return z(t + (t - e + 0.5 >> 1));
        }
        function W2(t, e, r) {
            return Math.abs(e - r) - Math.abs(t - r);
        }
        function V2(t, e, r, n, i, a, o) {
            for(n = a[o - 1], r = 0; r < i; ++r)a[o + r] = n = D3(t[e + r], n);
        }
        function G2(t, e, r, n, i) {
            var a;
            for(a = 0; a < r; ++a){
                var o = t[e + a], s = o >> 8 & 255, c = 16711935 & (c = (c = 16711935 & o) + ((s << 16) + s));
                n[i + a] = (4278255360 & o) + c >>> 0;
            }
        }
        function Y2(t, e) {
            e.jd = t >> 0 & 255, e.hd = t >> 8 & 255, e.ud = t >> 16 & 255;
        }
        function J2(t, e, r, n, i, a) {
            var o;
            for(o = 0; o < n; ++o){
                var s = e[r + o], c = s >>> 8, u = s, h = 255 & (h = (h = s >>> 16) + ((t.jd << 24 >> 24) * (c << 24 >> 24) >>> 5));
                u = 255 & (u = (u = u + ((t.hd << 24 >> 24) * (c << 24 >> 24) >>> 5)) + ((t.ud << 24 >> 24) * (h << 24 >> 24) >>> 5));
                i[a + o] = (4278255360 & s) + (h << 16) + u;
            }
        }
        function X2(e50, r34, n21, i, a) {
            t77[r34] = function(t, e, r, n, o, s, c, u, h) {
                for(n = c; n < u; ++n)for(c = 0; c < h; ++c)o[s++] = a(r[i(t[e++])]);
            }, t77[e50] = function(e, r, o, s, c, u, h) {
                var l = 8 >> e.b, f = e.Ea, d = e.K[0], p = e.w;
                if (8 > l) for(e = (1 << e.b) - 1, p = (1 << l) - 1; r < o; ++r){
                    var g, m = 0;
                    for(g = 0; g < f; ++g)g & e || (m = i(s[c++])), u[h++] = a(d[m & p]), m >>= l;
                }
                else t77["VP8LMapColor" + n21](s, c, d, p, u, h, r, o, f);
            };
        }
        function K2(t, e, r, n, i) {
            for(r = e + r; e < r;){
                var a = t[e++];
                n[i++] = a >> 16 & 255, n[i++] = a >> 8 & 255, n[i++] = a >> 0 & 255;
            }
        }
        function Z2(t, e, r, n, i) {
            for(r = e + r; e < r;){
                var a = t[e++];
                n[i++] = a >> 16 & 255, n[i++] = a >> 8 & 255, n[i++] = a >> 0 & 255, n[i++] = a >> 24 & 255;
            }
        }
        function $2(t, e, r, n, i) {
            for(r = e + r; e < r;){
                var a = (o = t[e++]) >> 16 & 240 | o >> 12 & 15, o = o >> 0 & 240 | o >> 28 & 15;
                n[i++] = a, n[i++] = o;
            }
        }
        function Q2(t, e, r, n, i) {
            for(r = e + r; e < r;){
                var a = (o = t[e++]) >> 16 & 248 | o >> 13 & 7, o = o >> 5 & 224 | o >> 3 & 31;
                n[i++] = a, n[i++] = o;
            }
        }
        function tt2(t, e, r, n, i) {
            for(r = e + r; e < r;){
                var a = t[e++];
                n[i++] = a >> 0 & 255, n[i++] = a >> 8 & 255, n[i++] = a >> 16 & 255;
            }
        }
        function et2(t, e, r, i, a, o) {
            if (0 == o) for(r = e + r; e < r;)I3(i, ((o = t[e++])[0] >> 24 | o[1] >> 8 & 65280 | o[2] << 8 & 16711680 | o[3] << 24) >>> 0), a += 32;
            else n19(i, a, t, e, r);
        }
        function rt2(e, r) {
            t77[r][0] = t77[e + "0"], t77[r][1] = t77[e + "1"], t77[r][2] = t77[e + "2"], t77[r][3] = t77[e + "3"], t77[r][4] = t77[e + "4"], t77[r][5] = t77[e + "5"], t77[r][6] = t77[e + "6"], t77[r][7] = t77[e + "7"], t77[r][8] = t77[e + "8"], t77[r][9] = t77[e + "9"], t77[r][10] = t77[e + "10"], t77[r][11] = t77[e + "11"], t77[r][12] = t77[e + "12"], t77[r][13] = t77[e + "13"], t77[r][14] = t77[e + "0"], t77[r][15] = t77[e + "0"];
        }
        function nt2(t) {
            return t == Hn || t == Wn || t == Vn || t == Gn;
        }
        function it2() {
            this.eb = [], this.size = this.A = this.fb = 0;
        }
        function at2() {
            this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0;
        }
        function ot2() {
            this.Rd = this.height = this.width = this.S = 0, this.f = {
            }, this.f.RGBA = new it2, this.f.kb = new at2, this.sd = null;
        }
        function st2() {
            this.width = [
                0
            ], this.height = [
                0
            ], this.Pd = [
                0
            ], this.Qd = [
                0
            ], this.format = [
                0
            ];
        }
        function ct2() {
            this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0;
        }
        function ut2(t) {
            return alert("todo:WebPSamplerProcessPlane"), t.T;
        }
        function ht2(t, e) {
            var r = t.T, i = e.ba.f.RGBA, a = i.eb, o = i.fb + t.ka * i.A, s = vi[e.ba.S], c = t.y, u = t.O, h = t.f, l = t.N, f = t.ea, d = t.W, p = e.cc, g = e.dc, m = e.Mc, v = e.Nc, b = t.ka, y = t.ka + t.T, w = t.U, N = w + 1 >> 1;
            for(0 == b ? s(c, u, null, null, h, l, f, d, h, l, f, d, a, o, null, null, w) : (s(e.ec, e.fc, c, u, p, g, m, v, h, l, f, d, a, o - i.A, a, o, w), ++r); b + 2 < y; b += 2)p = h, g = l, m = f, v = d, l += t.Rc, d += t.Rc, o += 2 * i.A, s(c, (u += 2 * t.fa) - t.fa, c, u, p, g, m, v, h, l, f, d, a, o - i.A, a, o, w);
            return u += t.fa, t.j + y < t.o ? (n19(e.ec, e.fc, c, u, w), n19(e.cc, e.dc, h, l, N), n19(e.Mc, e.Nc, f, d, N), r--) : 1 & y || s(c, u, null, null, h, l, f, d, h, l, f, d, a, o + i.A, null, null, w), r;
        }
        function lt1(t, r, n) {
            var i = t.F, a = [
                t.J
            ];
            if (null != i) {
                var o = t.U, s = r.ba.S, c = s == Tn || s == Vn;
                r = r.ba.f.RGBA;
                var u = [
                    0
                ], h = t.ka;
                u[0] = t.T, t.Kb && (0 == h ? --u[0] : (--h, a[0] -= t.width), t.j + t.ka + t.T == t.o && (u[0] = t.o - t.j - h));
                var l = r.eb;
                h = r.fb + h * r.A;
                t = Sn(i, a[0], t.width, o, u, l, h + (c ? 0 : 3), r.A), e49(n == u), t && nt2(s) && An(l, h, c, o, u, r.A);
            }
            return 0;
        }
        function $ffb17689dbc03ee8$export$a47202eb3f827bb2(t) {
            var e = t.ma, r = e.ba.S, n = 11 > r, i = r == qn || r == Rn || r == Tn || r == Un || 12 == r || nt2(r);
            if (e.memory = null, e.Ib = null, e.Jb = null, e.Nd = null, !Mr(e.Oa, t, i ? 11 : 12)) return 0;
            if (i && nt2(r) && br(), t.da) alert("todo:use_scaling");
            else {
                if (n) {
                    if (e.Ib = ut2, t.Kb) {
                        if (r = t.U + 1 >> 1, e.memory = a15(t.U + 2 * r), null == e.memory) return 0;
                        e.ec = e.memory, e.fc = 0, e.cc = e.ec, e.dc = e.fc + t.U, e.Mc = e.cc, e.Nc = e.dc + r, e.Ib = ht2, br();
                    }
                } else alert("todo:EmitYUV");
                i && (e.Jb = lt1, n && mr());
            }
            if (n && !Ci) {
                for(t = 0; 256 > t; ++t)ji[t] = 89858 * (t - 128) + _i >> Si, Mi[t] = -22014 * (t - 128) + _i, Bi[t] = -45773 * (t - 128), Oi[t] = 113618 * (t - 128) + _i >> Si;
                for(t = Pi; t < ki; ++t)e = 76283 * (t - 16) + _i >> Si, Ei[t - Pi] = Vt1(e, 255), qi[t - Pi] = Vt1(e + 8 >> 4, 15);
                Ci = 1;
            }
            return 1;
        }
        function $ffb17689dbc03ee8$export$9e021dd9568dc486(t) {
            var r = t.ma, n = t.U, i = t.T;
            return e49(!(1 & t.ka)), 0 >= n || 0 >= i ? 0 : (n = r.Ib(t, r), null != r.Jb && r.Jb(t, r, n), r.Dc += n, 1);
        }
        function $ffb17689dbc03ee8$export$f2239d28df5f43bd(t) {
            t.ma.memory = null;
        }
        function $ffb17689dbc03ee8$export$4af052e7e598ad1a(t, e, r, n) {
            return 47 != y7(t, 8) ? 0 : (e[0] = y7(t, 14) + 1, r[0] = y7(t, 14) + 1, n[0] = y7(t, 1), 0 != y7(t, 3) ? 0 : !t.h);
        }
        function $ffb17689dbc03ee8$export$6aae594af76bbb7b(t, e) {
            if (4 > t) return t + 1;
            var r = t - 2 >> 1;
            return (2 + (1 & t) << r) + y7(e, r) + 1;
        }
        function $ffb17689dbc03ee8$export$98b7c3ef37465410(t, e) {
            var r;
            return 120 < e ? e - 120 : 1 <= (r = ((r = $n[e - 1]) >> 4) * t + (8 - (15 & r))) ? r : 1;
        }
        function $ffb17689dbc03ee8$export$bc1318bc7e5f1315(t, e, r) {
            var n = L6(r), i = t[e += 255 & n].g - 8;
            return 0 < i && (x3(r, r.u + 8), n = L6(r), e += t[e].value, e += n & (1 << i) - 1), x3(r, r.u + t[e].g), t[e].value;
        }
        function yt(t, r, n) {
            return n.g += t.g, n.value += t.value << r >>> 0, e49(8 >= n.g), t.g;
        }
        function $ffb17689dbc03ee8$export$5fd5db01c4615478(t, r, n) {
            var i = t.xc;
            return e49((r = 0 == i ? 0 : t.vc[t.md * (n >> i) + (r >> i)]) < t.Wb), t.Ya[r];
        }
        function $ffb17689dbc03ee8$export$9d1b52e7fab50c84(t, r, i, a) {
            var o = t.ab, s = t.c * r, c = t.C;
            r = c + r;
            var u = i, h = a;
            for(a = t.Ta, i = t.Ua; 0 < o--;){
                var l = t.gc[o], f = c, d = r, p = u, g = h, m = (h = a, u = i, l.Ea);
                switch(e49(f < d), e49(d <= l.nc), l.hc){
                    case 2:
                        Gr(p, g, (d - f) * m, h, u);
                        break;
                    case 0:
                        var v = f, b = d, y = h, w = u, N = (_ = l).Ea;
                        0 == v && (Wr(p, g, null, null, 1, y, w), V2(p, g + 1, 0, 0, N - 1, y, w + 1), g += N, w += N, ++v);
                        for(var L = 1 << _.b, A = L - 1, x = q3(N, _.b), S = _.K, _ = _.w + (v >> _.b) * x; v < b;){
                            var P = S, k = _, I = 1;
                            for(Vr(p, g, y, w - N, 1, y, w); I < N;){
                                var F = (I & ~A) + L;
                                F > N && (F = N), (0, Zr[P[k++] >> 8 & 15])(p, g + +I, y, w + I - N, F - I, y, w + I), I = F;
                            }
                            g += N, w += N, ++v & A || (_ += x);
                        }
                        d != l.nc && n19(h, u - m, h, u + (d - f - 1) * m, m);
                        break;
                    case 1:
                        for(m = p, b = g, N = (p = l.Ea) - (w = p & ~(y = (g = 1 << l.b) - 1)), v = q3(p, l.b), L = l.K, l = l.w + (f >> l.b) * v; f < d;){
                            for(A = L, x = l, S = new T3, _ = b + w, P = b + p; b < _;)Y2(A[x++], S), $r(S, m, b, g, h, u), b += g, u += g;
                            b < P && (Y2(A[x++], S), $r(S, m, b, N, h, u), b += N, u += N), ++f & y || (l += v);
                        }
                        break;
                    case 3:
                        if (p == h && g == u && 0 < l.b) {
                            for(b = h, p = m = u + (d - f) * m - (w = (d - f) * q3(l.Ea, l.b)), g = h, y = u, v = [], w = (N = w) - 1; 0 <= w; --w)v[w] = g[y + w];
                            for(w = N - 1; 0 <= w; --w)b[p + w] = v[w];
                            Yr(l, f, d, h, m, h, u);
                        } else Yr(l, f, d, p, g, h, u);
                }
                u = a, h = i;
            }
            h != i && n19(a, i, u, h, s);
        }
        function $ffb17689dbc03ee8$export$c48d8668f8cea64d(t, r) {
            var n = t.V, i = t.Ba + t.c * t.C, a = r - t.C;
            if (e49(r <= t.l.o), e49(16 >= a), 0 < a) {
                var o = t.l, s = t.Ta, c = t.Ua, u = o.width;
                if ($ffb17689dbc03ee8$export$9d1b52e7fab50c84(t, a, n, i), a = c = [
                    c
                ], e49((n = t.C) < (i = r)), e49(o.v < o.va), i > o.o && (i = o.o), n < o.j) {
                    var h = o.j - n;
                    n = o.j;
                    a[0] += h * u;
                }
                if (n >= i ? n = 0 : (a[0] += 4 * o.v, o.ka = n - o.j, o.U = o.va - o.v, o.T = i - n, n = 1), n) {
                    if (c = c[0], 11 > (n = t.ca).S) {
                        var l = n.f.RGBA, f = (i = n.S, a = o.U, o = o.T, h = l.eb, l.A), d = o;
                        for(l = l.fb + t.Ma * l.A; 0 < d--;){
                            var p = s, g = c, m = a, v = h, b = l;
                            switch(i){
                                case En:
                                    Qr(p, g, m, v, b);
                                    break;
                                case qn:
                                    tn(p, g, m, v, b);
                                    break;
                                case Hn:
                                    tn(p, g, m, v, b), An(v, b, 0, m, 1, 0);
                                    break;
                                case Dn:
                                    nn(p, g, m, v, b);
                                    break;
                                case Rn:
                                    et2(p, g, m, v, b, 1);
                                    break;
                                case Wn:
                                    et2(p, g, m, v, b, 1), An(v, b, 0, m, 1, 0);
                                    break;
                                case Tn:
                                    et2(p, g, m, v, b, 0);
                                    break;
                                case Vn:
                                    et2(p, g, m, v, b, 0), An(v, b, 1, m, 1, 0);
                                    break;
                                case Un:
                                    en(p, g, m, v, b);
                                    break;
                                case Gn:
                                    en(p, g, m, v, b), xn(v, b, m, 1, 0);
                                    break;
                                case zn:
                                    rn(p, g, m, v, b);
                                    break;
                                default:
                                    e49(0);
                            }
                            c += u, l += f;
                        }
                        t.Ma += o;
                    } else alert("todo:EmitRescaledRowsYUVA");
                    e49(t.Ma <= n.height);
                }
            }
            t.C = r, e49(t.C <= t.i);
        }
        function $ffb17689dbc03ee8$export$7d753ad993606f45(t) {
            var e;
            if (0 < t.ua) return 0;
            for(e = 0; e < t.Wb; ++e){
                var r = t.Ya[e].G, n = t.Ya[e].H;
                if (0 < r[1][n[1] + 0].g || 0 < r[2][n[2] + 0].g || 0 < r[3][n[3] + 0].g) return 0;
            }
            return 1;
        }
        function xt1(t, r, n, i, a, o) {
            if (0 != t.Z) {
                var s = t.qd, c = t.rd;
                for(e49(null != mi[t.Z]); r < n; ++r)mi[t.Z](s, c, i, a, i, a, o), s = i, c = a, a += o;
                t.qd = s, t.rd = c;
            }
        }
        function $ffb17689dbc03ee8$export$9cf40f67b77f45f4(t, r) {
            var n = t.l.ma, i = 0 == n.Z || 1 == n.Z ? t.l.j : t.C;
            i = t.C < i ? i : t.C;
            if (e49(r <= t.l.o), r > i) {
                var a = t.l.width, o = n.ca, s = n.tb + a * i, c = t.V, u = t.Ba + t.c * i, h = t.gc;
                e49(1 == t.ab), e49(3 == h[0].hc), Xr(h[0], i, r, c, u, o, s), xt1(n, i, r, o, s, a);
            }
            t.C = t.Ma = r;
        }
        function _t(t, r, n, i, a, o, s) {
            var c = t.$ / i, u = t.$ % i, h = t.m, l = t.s, f = n + t.$, d = f;
            a = n + i * a;
            var p = n + i * o, g = 280 + l.ua, m = t.Pb ? c : 16777216, v = 0 < l.ua ? l.Wa : null, b = l.wc, y = f < p ? $ffb17689dbc03ee8$export$5fd5db01c4615478(l, u, c) : null;
            e49(t.C < o), e49(p <= a);
            var w = !1;
            t: for(;;){
                for(; w || f < p;){
                    var N = 0;
                    if (c >= m) {
                        var _ = f - n;
                        e49((m = t).Pb), m.wd = m.m, m.xd = _, 0 < m.s.ua && $ffb17689dbc03ee8$export$7235f0ad083cb4c6(m.s.Wa, m.s.vb), m = c + ti;
                    }
                    if (u & b || (y = $ffb17689dbc03ee8$export$5fd5db01c4615478(l, u, c)), e49(null != y), y.Qb && (r[f] = y.qb, w = !0), !w) {
                        if (S3(h), y.jc) {
                            N = h, _ = r;
                            var P = f, k = y.pd[L6(N) & Dr - 1];
                            e49(y.jc), 256 > k.g ? (x3(N, N.u + k.g), _[P] = k.value, N = 0) : (x3(N, N.u + k.g - 256), e49(256 <= k.value), N = k.value), 0 == N && (w = !0);
                        } else N = $ffb17689dbc03ee8$export$bc1318bc7e5f1315(y.G[0], y.H[0], h);
                    }
                    if (h.h) break;
                    if (w || 256 > N) {
                        if (!w) {
                            if (y.nd) r[f] = (y.qb | N << 8) >>> 0;
                            else {
                                if (S3(h), w = $ffb17689dbc03ee8$export$bc1318bc7e5f1315(y.G[1], y.H[1], h), S3(h), _ = $ffb17689dbc03ee8$export$bc1318bc7e5f1315(y.G[2], y.H[2], h), P = $ffb17689dbc03ee8$export$bc1318bc7e5f1315(y.G[3], y.H[3], h), h.h) break;
                                r[f] = (P << 24 | w << 16 | N << 8 | _) >>> 0;
                            }
                        }
                        if (w = !1, ++f, ++u >= i && (u = 0, ++c, null != s && c <= o && !(c % 16) && s(t, c), null != v)) for(; d < f;)N = r[d++], v.X[(506832829 * N & 4294967295) >>> v.Mb] = N;
                    } else if (280 > N) {
                        if (N = $ffb17689dbc03ee8$export$6aae594af76bbb7b(N - 256, h), _ = $ffb17689dbc03ee8$export$bc1318bc7e5f1315(y.G[4], y.H[4], h), S3(h), _ = $ffb17689dbc03ee8$export$98b7c3ef37465410(i, _ = $ffb17689dbc03ee8$export$6aae594af76bbb7b(_, h)), h.h) break;
                        if (f - n < _ || a - f < N) break t;
                        for(P = 0; P < N; ++P)r[f + P] = r[f + P - _];
                        for(f += N, u += N; u >= i;)u -= i, ++c, null != s && c <= o && !(c % 16) && s(t, c);
                        if (e49(f <= a), u & b && (y = $ffb17689dbc03ee8$export$5fd5db01c4615478(l, u, c)), null != v) for(; d < f;)N = r[d++], v.X[(506832829 * N & 4294967295) >>> v.Mb] = N;
                    } else {
                        if (!(N < g)) break t;
                        for(w = N - 280, e49(null != v); d < f;)N = r[d++], v.X[(506832829 * N & 4294967295) >>> v.Mb] = N;
                        N = f, e49(!(w >>> (_ = v).Xa)), r[N] = _.X[w], w = !0;
                    }
                    w || e49(h.h == A5(h));
                }
                if (t.Pb && h.h && f < a) e49(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && $ffb17689dbc03ee8$export$7235f0ad083cb4c6(t.s.vb, t.s.Wa);
                else {
                    if (h.h) break t;
                    null != s && s(t, c > o ? o : c), t.a = 0, t.$ = f - n;
                }
                return 1;
            }
            return t.a = 3, 0;
        }
        function Pt(t) {
            e49(null != t), t.vc = null, t.yc = null, t.Ya = null;
            var r = t.Wa;
            null != r && (r.X = null), t.vb = null, e49(null != t);
        }
        function kt1() {
            var e = new or;
            return null == e ? null : (e.a = 0, e.xb = gi, rt2("Predictor", "VP8LPredictors"), rt2("Predictor", "VP8LPredictors_C"), rt2("PredictorAdd", "VP8LPredictorsAdd"), rt2("PredictorAdd", "VP8LPredictorsAdd_C"), Gr = G2, $r = J2, Qr = K2, tn = Z2, en = $2, rn = Q2, nn = tt2, t77.VP8LMapColor32b = Jr, t77.VP8LMapColor8b = Kr, e);
        }
        function It(t, r, n, s, c) {
            var u = 1, f = [
                t
            ], p = [
                r
            ], g = s.m, m = s.s, v = null, b = 0;
            t: for(;;){
                if (n) for(; u && y7(g, 1);){
                    var w = f, N = p, A = s, _ = 1, P = A.m, k = A.gc[A.ab], I = y7(P, 2);
                    if (A.Oc & 1 << I) u = 0;
                    else {
                        switch(A.Oc |= 1 << I, k.hc = I, k.Ea = w[0], k.nc = N[0], k.K = [
                            null
                        ], ++A.ab, e49(4 >= A.ab), I){
                            case 0:
                            case 1:
                                k.b = y7(P, 3) + 2, _ = It(q3(k.Ea, k.b), q3(k.nc, k.b), 0, A, k.K), k.K = k.K[0];
                                break;
                            case 3:
                                var F, C = y7(P, 8) + 1, $ffb17689dbc03ee8$export$1bc649ab427a02ba = 16 < C ? 0 : 4 < C ? 1 : 2 < C ? 2 : 3;
                                if (w[0] = q3(k.Ea, $ffb17689dbc03ee8$export$1bc649ab427a02ba), k.b = $ffb17689dbc03ee8$export$1bc649ab427a02ba, F = _ = It(C, 1, 0, A, k.K)) {
                                    var $ffb17689dbc03ee8$export$7235f0ad083cb4c6, $ffb17689dbc03ee8$export$549f717800d2b57f = C, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 = k, R = 1 << (8 >> $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.b), T = a15(R);
                                    if (null == T) F = 0;
                                    else {
                                        var U = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.K[0], z = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.w;
                                        for(T[0] = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.K[0][0], $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = 1; $ffb17689dbc03ee8$export$7235f0ad083cb4c6 < 1 * $ffb17689dbc03ee8$export$549f717800d2b57f; ++$ffb17689dbc03ee8$export$7235f0ad083cb4c6)T[$ffb17689dbc03ee8$export$7235f0ad083cb4c6] = D3(U[z + $ffb17689dbc03ee8$export$7235f0ad083cb4c6], T[$ffb17689dbc03ee8$export$7235f0ad083cb4c6 - 1]);
                                        for(; $ffb17689dbc03ee8$export$7235f0ad083cb4c6 < 4 * R; ++$ffb17689dbc03ee8$export$7235f0ad083cb4c6)T[$ffb17689dbc03ee8$export$7235f0ad083cb4c6] = 0;
                                        $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.K[0] = null, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.K[0] = T, F = 1;
                                    }
                                }
                                _ = F;
                                break;
                            case 2:
                                break;
                            default:
                                e49(0);
                        }
                        u = _;
                    }
                }
                if (f = f[0], p = p[0], u && y7(g, 1) && !(u = 1 <= (b = y7(g, 4)) && 11 >= b)) {
                    s.a = 3;
                    break t;
                }
                var H;
                if (H = u) e: {
                    var W, V, G, Y = s, J = f, X = p, K = b, Z = n, $ = Y.m, Q = Y.s, tt = [
                        null
                    ], et = 1, rt = 0, nt = Qn[K];
                    r: for(;;){
                        if (Z && y7($, 1)) {
                            var it = y7($, 3) + 2, at = q3(J, it), ot = q3(X, it), st = at * ot;
                            if (!It(at, ot, 0, Y, tt)) break r;
                            for(tt = tt[0], Q.xc = it, W = 0; W < st; ++W){
                                var ct = tt[W] >> 8 & 65535;
                                tt[W] = ct, ct >= et && (et = ct + 1);
                            }
                        }
                        if ($.h) break r;
                        for(V = 0; 5 > V; ++V){
                            var ut = Xn[V];
                            !V && 0 < K && (ut += 1 << K), rt < ut && (rt = ut);
                        }
                        var ht = o16(et * nt, l6), lt = et, $ffb17689dbc03ee8$export$a47202eb3f827bb2 = o16(lt, d7);
                        if (null == $ffb17689dbc03ee8$export$a47202eb3f827bb2) var $ffb17689dbc03ee8$export$9e021dd9568dc486 = null;
                        else e49(65536 >= lt), $ffb17689dbc03ee8$export$9e021dd9568dc486 = $ffb17689dbc03ee8$export$a47202eb3f827bb2;
                        var $ffb17689dbc03ee8$export$f2239d28df5f43bd = a15(rt);
                        if (null == $ffb17689dbc03ee8$export$9e021dd9568dc486 || null == $ffb17689dbc03ee8$export$f2239d28df5f43bd || null == ht) {
                            Y.a = 1;
                            break r;
                        }
                        var $ffb17689dbc03ee8$export$4af052e7e598ad1a = ht;
                        for(W = G = 0; W < et; ++W){
                            var $ffb17689dbc03ee8$export$6aae594af76bbb7b = $ffb17689dbc03ee8$export$9e021dd9568dc486[W], $ffb17689dbc03ee8$export$98b7c3ef37465410 = $ffb17689dbc03ee8$export$6aae594af76bbb7b.G, $ffb17689dbc03ee8$export$bc1318bc7e5f1315 = $ffb17689dbc03ee8$export$6aae594af76bbb7b.H, $ffb17689dbc03ee8$export$5fd5db01c4615478 = 0, $ffb17689dbc03ee8$export$9d1b52e7fab50c84 = 1, $ffb17689dbc03ee8$export$c48d8668f8cea64d = 0;
                            for(V = 0; 5 > V; ++V){
                                ut = Xn[V], $ffb17689dbc03ee8$export$98b7c3ef37465410[V] = $ffb17689dbc03ee8$export$4af052e7e598ad1a, $ffb17689dbc03ee8$export$bc1318bc7e5f1315[V] = G, !V && 0 < K && (ut += 1 << K);
                                n: {
                                    var $ffb17689dbc03ee8$export$7d753ad993606f45, xt = ut, $ffb17689dbc03ee8$export$9cf40f67b77f45f4 = Y, kt = $ffb17689dbc03ee8$export$f2239d28df5f43bd, Ft = $ffb17689dbc03ee8$export$4af052e7e598ad1a, Ct = G, jt = 0, Ot = $ffb17689dbc03ee8$export$9cf40f67b77f45f4.m, Bt = y7(Ot, 1);
                                    if (i19(kt, 0, 0, xt), Bt) {
                                        var Mt = y7(Ot, 1) + 1, Et = y7(Ot, 1), qt = y7(Ot, 0 == Et ? 1 : 8);
                                        kt[qt] = 1, 2 == Mt && (kt[qt = y7(Ot, 8)] = 1);
                                        var Dt = 1;
                                    } else {
                                        var Rt = a15(19), Tt = y7(Ot, 4) + 4;
                                        if (19 < Tt) {
                                            $ffb17689dbc03ee8$export$9cf40f67b77f45f4.a = 3;
                                            var Ut = 0;
                                            break n;
                                        }
                                        for($ffb17689dbc03ee8$export$7d753ad993606f45 = 0; $ffb17689dbc03ee8$export$7d753ad993606f45 < Tt; ++$ffb17689dbc03ee8$export$7d753ad993606f45)Rt[Zn[$ffb17689dbc03ee8$export$7d753ad993606f45]] = y7(Ot, 3);
                                        var zt = void 0, Ht = void 0, Wt = $ffb17689dbc03ee8$export$9cf40f67b77f45f4, Vt = Rt, Gt = xt, Yt = kt, Jt = 0, Xt = Wt.m, Kt = 8, Zt = o16(128, l6);
                                        i: for(; h9(Zt, 0, 7, Vt, 19);){
                                            if (y7(Xt, 1)) {
                                                var $t = 2 + 2 * y7(Xt, 3);
                                                if ((zt = 2 + y7(Xt, $t)) > Gt) break i;
                                            } else zt = Gt;
                                            for(Ht = 0; Ht < Gt && zt--;){
                                                S3(Xt);
                                                var Qt = Zt[0 + (127 & L6(Xt))];
                                                x3(Xt, Xt.u + Qt.g);
                                                var te = Qt.value;
                                                if (16 > te) Yt[Ht++] = te, 0 != te && (Kt = te);
                                                else {
                                                    var ee = 16 == te, re = te - 16, ne = Jn[re], ie = y7(Xt, Yn[re]) + ne;
                                                    if (Ht + ie > Gt) break i;
                                                    for(var ae = ee ? Kt : 0; 0 < ie--;)Yt[Ht++] = ae;
                                                }
                                            }
                                            Jt = 1;
                                            break i;
                                        }
                                        Jt || (Wt.a = 3), Dt = Jt;
                                    }
                                    (Dt = Dt && !Ot.h) && (jt = h9(Ft, Ct, 8, kt, xt)), Dt && 0 != jt ? Ut = jt : ($ffb17689dbc03ee8$export$9cf40f67b77f45f4.a = 3, Ut = 0);
                                }
                                if (0 == Ut) break r;
                                if ($ffb17689dbc03ee8$export$9d1b52e7fab50c84 && 1 == Kn[V] && ($ffb17689dbc03ee8$export$9d1b52e7fab50c84 = 0 == $ffb17689dbc03ee8$export$4af052e7e598ad1a[G].g), $ffb17689dbc03ee8$export$5fd5db01c4615478 += $ffb17689dbc03ee8$export$4af052e7e598ad1a[G].g, G += Ut, 3 >= V) {
                                    var oe, se = $ffb17689dbc03ee8$export$f2239d28df5f43bd[0];
                                    for(oe = 1; oe < ut; ++oe)$ffb17689dbc03ee8$export$f2239d28df5f43bd[oe] > se && (se = $ffb17689dbc03ee8$export$f2239d28df5f43bd[oe]);
                                    $ffb17689dbc03ee8$export$c48d8668f8cea64d += se;
                                }
                            }
                            if ($ffb17689dbc03ee8$export$6aae594af76bbb7b.nd = $ffb17689dbc03ee8$export$9d1b52e7fab50c84, $ffb17689dbc03ee8$export$6aae594af76bbb7b.Qb = 0, $ffb17689dbc03ee8$export$9d1b52e7fab50c84 && ($ffb17689dbc03ee8$export$6aae594af76bbb7b.qb = ($ffb17689dbc03ee8$export$98b7c3ef37465410[3][$ffb17689dbc03ee8$export$bc1318bc7e5f1315[3] + 0].value << 24 | $ffb17689dbc03ee8$export$98b7c3ef37465410[1][$ffb17689dbc03ee8$export$bc1318bc7e5f1315[1] + 0].value << 16 | $ffb17689dbc03ee8$export$98b7c3ef37465410[2][$ffb17689dbc03ee8$export$bc1318bc7e5f1315[2] + 0].value) >>> 0, 0 == $ffb17689dbc03ee8$export$5fd5db01c4615478 && 256 > $ffb17689dbc03ee8$export$98b7c3ef37465410[0][$ffb17689dbc03ee8$export$bc1318bc7e5f1315[0] + 0].value && ($ffb17689dbc03ee8$export$6aae594af76bbb7b.Qb = 1, $ffb17689dbc03ee8$export$6aae594af76bbb7b.qb += $ffb17689dbc03ee8$export$98b7c3ef37465410[0][$ffb17689dbc03ee8$export$bc1318bc7e5f1315[0] + 0].value << 8)), $ffb17689dbc03ee8$export$6aae594af76bbb7b.jc = !$ffb17689dbc03ee8$export$6aae594af76bbb7b.Qb && 6 > $ffb17689dbc03ee8$export$c48d8668f8cea64d, $ffb17689dbc03ee8$export$6aae594af76bbb7b.jc) {
                                var ce, ue = $ffb17689dbc03ee8$export$6aae594af76bbb7b;
                                for(ce = 0; ce < Dr; ++ce){
                                    var he = ce, le = ue.pd[he], fe = ue.G[0][ue.H[0] + he];
                                    256 <= fe.value ? (le.g = fe.g + 256, le.value = fe.value) : (le.g = 0, le.value = 0, he >>= yt(fe, 8, le), he >>= yt(ue.G[1][ue.H[1] + he], 16, le), he >>= yt(ue.G[2][ue.H[2] + he], 0, le), yt(ue.G[3][ue.H[3] + he], 24, le));
                                }
                            }
                        }
                        Q.vc = tt, Q.Wb = et, Q.Ya = $ffb17689dbc03ee8$export$9e021dd9568dc486, Q.yc = ht, H = 1;
                        break e;
                    }
                    H = 0;
                }
                if (!(u = H)) {
                    s.a = 3;
                    break t;
                }
                if (0 < b) {
                    if (m.ua = 1 << b, !O3(m.Wa, b)) {
                        s.a = 1, u = 0;
                        break t;
                    }
                } else m.ua = 0;
                var de = s, pe = f, ge = p, me = de.s, ve = me.xc;
                if (de.c = pe, de.i = ge, me.md = q3(pe, ve), me.wc = 0 == ve ? -1 : (1 << ve) - 1, n) {
                    s.xb = pi;
                    break t;
                }
                if (null == (v = a15(f * p))) {
                    s.a = 1, u = 0;
                    break t;
                }
                u = (u = _t(s, v, 0, f, p, p, null)) && !g.h;
                break t;
            }
            return u ? (null != c ? c[0] = v : (e49(null == v), e49(n)), s.$ = 0, n || Pt(m)) : Pt(m), u;
        }
        function Ft1(t, r) {
            var n = t.c * t.i, i = n + r + 16 * r;
            return e49(t.c <= r), t.V = a15(i), null == t.V ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + n + r, 1);
        }
        function Ct1(t, r) {
            var n = t.C, i = r - n, a = t.V, o = t.Ba + t.c * n;
            for(e49(r <= t.l.o); 0 < i;){
                var s = 16 < i ? 16 : i, c = t.l.ma, u = t.l.width, h = u * s, l = c.ca, f = c.tb + u * n, d = t.Ta, p = t.Ua;
                $ffb17689dbc03ee8$export$9d1b52e7fab50c84(t, s, a, o), _n(d, p, l, f, h), xt1(c, n, n + s, l, f, u), i -= s, a += s * t.c, n += s;
            }
            e49(n == r), t.C = t.Ma = r;
        }
        function jt1() {
            this.ub = this.yd = this.td = this.Rb = 0;
        }
        function Ot1() {
            this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0;
        }
        function Bt1() {
            this.Fb = this.Bb = this.Cb = 0, this.Zb = a15(4), this.Lb = a15(4);
        }
        function Mt1() {
            this.Yb = (function() {
                var t79 = [];
                return (function t(e, r, n) {
                    for(var i = n[r], a = 0; a < i && (e.push(n.length > r + 1 ? [] : 0), !(n.length < r + 1)); a++)t(e[a], r + 1, n);
                })(t79, 0, [
                    3,
                    11
                ]), t79;
            })();
        }
        function Et1() {
            this.jb = a15(3), this.Wc = s11([
                4,
                8
            ], Mt1), this.Xc = s11([
                4,
                17
            ], Mt1);
        }
        function qt() {
            this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new a15(4), this.od = new a15(4);
        }
        function Dt1() {
            this.ld = this.La = this.dd = this.tc = 0;
        }
        function Rt1() {
            this.Na = this.la = 0;
        }
        function Tt1() {
            this.Sc = [
                0,
                0
            ], this.Eb = [
                0,
                0
            ], this.Qc = [
                0,
                0
            ], this.ia = this.lc = 0;
        }
        function Ut1() {
            this.ad = a15(384), this.Za = 0, this.Ob = a15(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0;
        }
        function zt1() {
            this.uc = this.M = this.Nb = 0, this.wa = Array(new Dt1), this.Y = 0, this.ya = Array(new Ut1), this.aa = 0, this.l = new Gt1;
        }
        function Ht1() {
            this.y = a15(16), this.f = a15(8), this.ea = a15(8);
        }
        function Wt1() {
            this.cb = this.a = 0, this.sc = "", this.m = new w7, this.Od = new jt1, this.Kc = new Ot1, this.ed = new qt, this.Qa = new Bt1, this.Ic = this.$c = this.Aa = 0, this.D = new zt1, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = o16(8, w7), this.ia = 0, this.pb = o16(4, Tt1), this.Pa = new Et1, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [
                0,
                0,
                0,
                0
            ], this.Gd = Array(new Ht1), this.Hd = 0, this.rb = Array(new Rt1), this.sb = 0, this.wa = Array(new Dt1), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new Ut1), this.L = this.aa = 0, this.gd = s11([
                4,
                2
            ], Dt1), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0;
        }
        function Vt1(t, e) {
            return 0 > t ? 0 : t > e ? e : t;
        }
        function Gt1() {
            this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0;
        }
        function Yt1() {
            var t = new Wt1;
            return null != t && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, ni || (ni = Zt1)), t;
        }
        function Jt1(t, e, r) {
            return 0 == t.a && (t.a = e, t.sc = r, t.cb = 0), 0;
        }
        function Xt1(t, e, r) {
            return 3 <= r && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2];
        }
        function Kt1(t, r) {
            if (null == t) return 0;
            if (t.a = 0, t.sc = "OK", null == r) return Jt1(t, 2, "null VP8Io passed to VP8GetHeaders()");
            var n = r.data, a = r.w, o = r.ha;
            if (4 > o) return Jt1(t, 7, "Truncated header.");
            var s = n[a + 0] | n[a + 1] << 8 | n[a + 2] << 16, c = t.Od;
            if (c.Rb = !(1 & s), c.td = s >> 1 & 7, c.yd = s >> 4 & 1, c.ub = s >> 5, 3 < c.td) return Jt1(t, 3, "Incorrect keyframe parameters.");
            if (!c.yd) return Jt1(t, 4, "Frame not displayable.");
            a += 3, o -= 3;
            var u = t.Kc;
            if (c.Rb) {
                if (7 > o) return Jt1(t, 7, "cannot parse picture header");
                if (!Xt1(n, a, o)) return Jt1(t, 3, "Bad code word");
                u.c = 16383 & (n[a + 4] << 8 | n[a + 3]), u.Td = n[a + 4] >> 6, u.i = 16383 & (n[a + 6] << 8 | n[a + 5]), u.Ud = n[a + 6] >> 6, a += 7, o -= 7, t.za = u.c + 15 >> 4, t.Ub = u.i + 15 >> 4, r.width = u.c, r.height = u.i, r.Da = 0, r.j = 0, r.v = 0, r.va = r.width, r.o = r.height, r.da = 0, r.ib = r.width, r.hb = r.height, r.U = r.width, r.T = r.height, i19((s = t.Pa).jb, 0, 255, s.jb.length), e49(null != (s = t.Qa)), s.Cb = 0, s.Bb = 0, s.Fb = 1, i19(s.Zb, 0, 0, s.Zb.length), i19(s.Lb, 0, 0, s.Lb);
            }
            if (c.ub > o) return Jt1(t, 7, "bad partition length");
            p8(s = t.m, n, a, c.ub), a += c.ub, o -= c.ub, c.Rb && (u.Ld = P4(s), u.Kd = P4(s)), u = t.Qa;
            var h, l = t.Pa;
            if (e49(null != s), e49(null != u), u.Cb = P4(s), u.Cb) {
                if (u.Bb = P4(s), P4(s)) {
                    for(u.Fb = P4(s), h = 0; 4 > h; ++h)u.Zb[h] = P4(s) ? m7(s, 7) : 0;
                    for(h = 0; 4 > h; ++h)u.Lb[h] = P4(s) ? m7(s, 6) : 0;
                }
                if (u.Bb) for(h = 0; 3 > h; ++h)l.jb[h] = P4(s) ? g8(s, 8) : 255;
            } else u.Bb = 0;
            if (s.Ka) return Jt1(t, 3, "cannot parse segment header");
            if ((u = t.ed).zd = P4(s), u.Tb = g8(s, 6), u.wb = g8(s, 3), u.Pc = P4(s), u.Pc && P4(s)) {
                for(l = 0; 4 > l; ++l)P4(s) && (u.vd[l] = m7(s, 6));
                for(l = 0; 4 > l; ++l)P4(s) && (u.od[l] = m7(s, 6));
            }
            if (t.L = 0 == u.Tb ? 0 : u.zd ? 1 : 2, s.Ka) return Jt1(t, 3, "cannot parse filter header");
            var f = o;
            if (o = h = a, a = h + f, u = f, t.Xb = (1 << g8(t.m, 2)) - 1, f < 3 * (l = t.Xb)) n = 7;
            else {
                for(h += 3 * l, u -= 3 * l, f = 0; f < l; ++f){
                    var d = n[o + 0] | n[o + 1] << 8 | n[o + 2] << 16;
                    d > u && (d = u), p8(t.Jc[+f], n, h, d), h += d, u -= d, o += 3;
                }
                p8(t.Jc[+l], n, h, u), n = h < a ? 0 : 5;
            }
            if (0 != n) return Jt1(t, n, "cannot parse partitions");
            for(n = g8(h = t.m, 7), o = P4(h) ? m7(h, 4) : 0, a = P4(h) ? m7(h, 4) : 0, u = P4(h) ? m7(h, 4) : 0, l = P4(h) ? m7(h, 4) : 0, h = P4(h) ? m7(h, 4) : 0, f = t.Qa, d = 0; 4 > d; ++d){
                if (f.Cb) {
                    var v = f.Zb[d];
                    f.Fb || (v += n);
                } else {
                    if (0 < d) {
                        t.pb[d] = t.pb[0];
                        continue;
                    }
                    v = n;
                }
                var b = t.pb[d];
                b.Sc[0] = ei[Vt1(v + o, 127)], b.Sc[1] = ri[Vt1(v + 0, 127)], b.Eb[0] = 2 * ei[Vt1(v + a, 127)], b.Eb[1] = 101581 * ri[Vt1(v + u, 127)] >> 16, 8 > b.Eb[1] && (b.Eb[1] = 8), b.Qc[0] = ei[Vt1(v + l, 117)], b.Qc[1] = ri[Vt1(v + h, 127)], b.lc = v + h;
            }
            if (!c.Rb) return Jt1(t, 4, "Not a key frame.");
            for(P4(s), c = t.Pa, n = 0; 4 > n; ++n){
                for(o = 0; 8 > o; ++o)for(a = 0; 3 > a; ++a)for(u = 0; 11 > u; ++u)l = k4(s, ui[n][o][a][u]) ? g8(s, 8) : si[n][o][a][u], c.Wc[n][o].Yb[a][u] = l;
                for(o = 0; 17 > o; ++o)c.Xc[n][o] = c.Wc[n][hi[o]];
            }
            return t.kc = P4(s), t.kc && (t.Bd = g8(s, 8)), t.cb = 1;
        }
        function Zt1(t, e, r, n, i, a, o) {
            var s = e[i].Yb[r];
            for(r = 0; 16 > i; ++i){
                if (!k4(t, s[r + 0])) return i;
                for(; !k4(t, s[r + 1]);)if (s = e[++i].Yb[0], r = 0, 16 == i) return 16;
                var c = e[i + 1].Yb;
                if (k4(t, s[r + 2])) {
                    var u = t, h = 0;
                    if (k4(u, (f = s)[(l = r) + 3])) {
                        if (k4(u, f[l + 6])) {
                            for(s = 0, l = 2 * (h = k4(u, f[l + 8])) + (f = k4(u, f[l + 9 + h])), h = 0, f = ii[l]; f[s]; ++s)h += h + k4(u, f[s]);
                            h += 3 + (8 << l);
                        } else k4(u, f[l + 7]) ? (h = 7 + 2 * k4(u, 165), h += k4(u, 145)) : h = 5 + k4(u, 159);
                    } else h = k4(u, f[l + 4]) ? 3 + k4(u, f[l + 5]) : 2;
                    s = c[2];
                } else h = 1, s = c[1];
                c = o + ai[i], 0 > (u = t).b && _4(u);
                var l, f = u.b, d = (l = u.Ca >> 1) - (u.I >> f) >> 31;
                --u.b, u.Ca += d, u.Ca |= 1, u.I -= (l + 1 & d) << f, a[c] = ((h ^ d) - d) * n[(0 < i) + 0];
            }
            return 16;
        }
        function $t1(t) {
            var e = t.rb[t.sb - 1];
            e.la = 0, e.Na = 0, i19(t.zc, 0, 0, t.zc.length), t.ja = 0;
        }
        function Qt1(t80, r35) {
            if (null == t80) return 0;
            if (null == r35) return Jt1(t80, 2, "NULL VP8Io parameter in VP8Decode().");
            if (!t80.cb && !Kt1(t80, r35)) return 0;
            if (e49(t80.cb), null == r35.ac || r35.ac(r35)) {
                r35.ob && (t80.L = 0);
                var s = Ri[t80.L];
                if (2 == t80.L ? (t80.yb = 0, t80.zb = 0) : (t80.yb = r35.v - s >> 4, t80.zb = r35.j - s >> 4, 0 > t80.yb && (t80.yb = 0), 0 > t80.zb && (t80.zb = 0)), t80.Va = r35.o + 15 + s >> 4, t80.Hb = r35.va + 15 + s >> 4, t80.Hb > t80.za && (t80.Hb = t80.za), t80.Va > t80.Ub && (t80.Va = t80.Ub), 0 < t80.L) {
                    var c = t80.ed;
                    for(s = 0; 4 > s; ++s){
                        var u;
                        if (t80.Qa.Cb) {
                            var h = t80.Qa.Lb[s];
                            t80.Qa.Fb || (h += c.Tb);
                        } else h = c.Tb;
                        for(u = 0; 1 >= u; ++u){
                            var l = t80.gd[s][u], f = h;
                            if (c.Pc && (f += c.vd[0], u && (f += c.od[0])), 0 < (f = 0 > f ? 0 : 63 < f ? 63 : f)) {
                                var d = f;
                                0 < c.wb && (d = 4 < c.wb ? d >> 2 : d >> 1) > 9 - c.wb && (d = 9 - c.wb), 1 > d && (d = 1), l.dd = d, l.tc = 2 * f + d, l.ld = 40 <= f ? 2 : 15 <= f ? 1 : 0;
                            } else l.tc = 0;
                            l.La = u;
                        }
                    }
                }
                s = 0;
            } else Jt1(t80, 6, "Frame setup failed"), s = t80.a;
            if (s = 0 == s) {
                if (s) {
                    t80.$c = 0, 0 < t80.Aa || (t80.Ic = Ui);
                    t: {
                        s = t80.Ic;
                        c = 4 * (d = t80.za);
                        var p = 32 * d, g = d + 1, m = 0 < t80.L ? d * (0 < t80.Aa ? 2 : 1) : 0, v = (2 == t80.Aa ? 2 : 1) * d;
                        if ((l = c + 832 + (u = 3 * (16 * s + Ri[t80.L]) / 2 * p) + (h = null != t80.Fa && 0 < t80.Fa.length ? t80.Kc.c * t80.Kc.i : 0)) != l) s = 0;
                        else {
                            if (l > t80.Vb) {
                                if (t80.Vb = 0, t80.Ec = a15(l), t80.Fc = 0, null == t80.Ec) {
                                    s = Jt1(t80, 1, "no memory during frame initialization.");
                                    break t;
                                }
                                t80.Vb = l;
                            }
                            l = t80.Ec, f = t80.Fc, t80.Ac = l, t80.Bc = f, f += c, t80.Gd = o16(p, Ht1), t80.Hd = 0, t80.rb = o16(g + 1, Rt1), t80.sb = 1, t80.wa = m ? o16(m, Dt1) : null, t80.Y = 0, t80.D.Nb = 0, t80.D.wa = t80.wa, t80.D.Y = t80.Y, 0 < t80.Aa && (t80.D.Y += d), e49(!0), t80.oc = l, t80.pc = f, f += 832, t80.ya = o16(v, Ut1), t80.aa = 0, t80.D.ya = t80.ya, t80.D.aa = t80.aa, 2 == t80.Aa && (t80.D.aa += d), t80.R = 16 * d, t80.B = 8 * d, d = (p = Ri[t80.L]) * t80.R, p = p / 2 * t80.B, t80.sa = l, t80.ta = f + d, t80.qa = t80.sa, t80.ra = t80.ta + 16 * s * t80.R + p, t80.Ha = t80.qa, t80.Ia = t80.ra + 8 * s * t80.B + p, t80.$c = 0, f += u, t80.mb = h ? l : null, t80.nb = h ? f : null, e49(f + h <= t80.Fc + t80.Vb), $t1(t80), i19(t80.Ac, t80.Bc, 0, c), s = 1;
                        }
                    }
                    if (s) {
                        if (r35.ka = 0, r35.y = t80.sa, r35.O = t80.ta, r35.f = t80.qa, r35.N = t80.ra, r35.ea = t80.Ha, r35.Vd = t80.Ia, r35.fa = t80.R, r35.Rc = t80.B, r35.F = null, r35.J = 0, !Cn) {
                            for(s = -255; 255 >= s; ++s)Pn[255 + s] = 0 > s ? -s : s;
                            for(s = -1020; 1020 >= s; ++s)kn[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
                            for(s = -112; 112 >= s; ++s)In[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
                            for(s = -255; 510 >= s; ++s)Fn[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
                            Cn = 1;
                        }
                        an = ue1, on = ae1, cn = oe1, un = se1, hn = ce1, sn = ie1, ln = Je, fn = Xe, dn = $e, pn = Qe, gn = Ke, mn = Ze, vn = tr, bn = er, yn = ze, wn = He, Nn = We, Ln = Ve, fi[0] = xe, fi[1] = le1, fi[2] = Le, fi[3] = Ae, fi[4] = Se, fi[5] = Pe, fi[6] = _e, fi[7] = ke, fi[8] = Fe, fi[9] = Ie, li[0] = ve1, li[1] = de1, li[2] = pe1, li[3] = ge1, li[4] = be, li[5] = ye, li[6] = we, di[0] = Be, di[1] = fe1, di[2] = Ce, di[3] = je, di[4] = Ee, di[5] = Me, di[6] = qe, s = 1;
                    } else s = 0;
                }
                s && (s = (function(t, r) {
                    for(t.M = 0; t.M < t.Va; ++t.M){
                        var o, s = t.Jc[t.M & t.Xb], c = t.m, u = t;
                        for(o = 0; o < u.za; ++o){
                            var h = c, l = u, f = l.Ac, d = l.Bc + 4 * o, p = l.zc, g = l.ya[l.aa + o];
                            if (l.Qa.Bb ? g.$b = k4(h, l.Pa.jb[0]) ? 2 + k4(h, l.Pa.jb[2]) : k4(h, l.Pa.jb[1]) : g.$b = 0, l.kc && (g.Ad = k4(h, l.Bd)), g.Za = !k4(h, 145) + 0, g.Za) {
                                var m = g.Ob, v = 0;
                                for(l = 0; 4 > l; ++l){
                                    var b, y = p[0 + l];
                                    for(b = 0; 4 > b; ++b){
                                        y = ci[f[d + b]][y];
                                        for(var w = oi[k4(h, y[0])]; 0 < w;)w = oi[2 * w + k4(h, y[w])];
                                        y = -w, f[d + b] = y;
                                    }
                                    n19(m, v, f, d, 4), v += 4, p[0 + l] = y;
                                }
                            } else y = k4(h, 156) ? k4(h, 128) ? 1 : 3 : k4(h, 163) ? 2 : 0, g.Ob[0] = y, i19(f, d, y, 4), i19(p, 0, y, 4);
                            g.Dd = k4(h, 142) ? k4(h, 114) ? k4(h, 183) ? 1 : 3 : 2 : 0;
                        }
                        if (u.m.Ka) return Jt1(t, 7, "Premature end-of-partition0 encountered.");
                        for(; t.ja < t.za; ++t.ja){
                            if (u = s, h = (c = t).rb[c.sb - 1], f = c.rb[c.sb + c.ja], o = c.ya[c.aa + c.ja], d = c.kc ? o.Ad : 0) h.la = f.la = 0, o.Za || (h.Na = f.Na = 0), o.Hc = 0, o.Gc = 0, o.ia = 0;
                            else {
                                var N, L;
                                h = f, f = u, d = c.Pa.Xc, p = c.ya[c.aa + c.ja], g = c.pb[p.$b];
                                if (l = p.ad, m = 0, v = c.rb[c.sb - 1], y = b = 0, i19(l, m, 0, 384), p.Za) var A = 0, x = d[3];
                                else {
                                    w = a15(16);
                                    var S = h.Na + v.Na;
                                    if (S = ni(f, d[1], S, g.Eb, 0, w, 0), h.Na = v.Na = (0 < S) + 0, 1 < S) an(w, 0, l, m);
                                    else {
                                        var _ = w[0] + 3 >> 3;
                                        for(w = 0; 256 > w; w += 16)l[m + w] = _;
                                    }
                                    A = 1, x = d[0];
                                }
                                var P = 15 & h.la, I = 15 & v.la;
                                for(w = 0; 4 > w; ++w){
                                    var F = 1 & I;
                                    for(_ = L = 0; 4 > _; ++_)P = P >> 1 | (F = (S = ni(f, x, S = F + (1 & P), g.Sc, A, l, m)) > A) << 7, L = L << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != l[m + 0]), m += 16;
                                    P >>= 4, I = I >> 1 | F << 7, b = (b << 8 | L) >>> 0;
                                }
                                for(x = P, A = I >> 4, N = 0; 4 > N; N += 2){
                                    for(L = 0, P = h.la >> 4 + N, I = v.la >> 4 + N, w = 0; 2 > w; ++w){
                                        for(F = 1 & I, _ = 0; 2 > _; ++_)S = F + (1 & P), P = P >> 1 | (F = 0 < (S = ni(f, d[2], S, g.Qc, 0, l, m))) << 3, L = L << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != l[m + 0]), m += 16;
                                        P >>= 2, I = I >> 1 | F << 5;
                                    }
                                    y |= L << 4 * N, x |= P << 4 << N, A |= (240 & I) << N;
                                }
                                h.la = x, v.la = A, p.Hc = b, p.Gc = y, p.ia = 43690 & y ? 0 : g.ia, d = !(b | y);
                            }
                            if (0 < c.L && (c.wa[c.Y + c.ja] = c.gd[o.$b][o.Za], c.wa[c.Y + c.ja].La |= !d), u.Ka) return Jt1(t, 7, "Premature end-of-file encountered.");
                        }
                        if ($t1(t), c = r, u = 1, o = (s = t).D, h = 0 < s.L && s.M >= s.zb && s.M <= s.Va, 0 == s.Aa) t: {
                            if (o.M = s.M, o.uc = h, Or(s, o), u = 1, o = (L = s.D).Nb, h = (y = Ri[s.L]) * s.R, f = y / 2 * s.B, w = 16 * o * s.R, _ = 8 * o * s.B, d = s.sa, p = s.ta - h + w, g = s.qa, l = s.ra - f + _, m = s.Ha, v = s.Ia - f + _, I = 0 == (P = L.M), b = P >= s.Va - 1, 2 == s.Aa && Or(s, L), L.uc) for(F = (S = s).D.M, e49(S.D.uc), L = S.yb; L < S.Hb; ++L){
                                A = L, x = F;
                                var C = ($ffb17689dbc03ee8$export$1bc649ab427a02ba = (U = S).D).Nb;
                                N = U.R;
                                var $ffb17689dbc03ee8$export$1bc649ab427a02ba = $ffb17689dbc03ee8$export$1bc649ab427a02ba.wa[$ffb17689dbc03ee8$export$1bc649ab427a02ba.Y + A], O = U.sa, $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = U.ta + 16 * C * N + 16 * A, $ffb17689dbc03ee8$export$549f717800d2b57f = $ffb17689dbc03ee8$export$1bc649ab427a02ba.dd, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 = $ffb17689dbc03ee8$export$1bc649ab427a02ba.tc;
                                if (0 != $ffb17689dbc03ee8$export$ba1e2ffc633a60f5) {
                                    if (e49(3 <= $ffb17689dbc03ee8$export$ba1e2ffc633a60f5), 1 == U.L) 0 < A && wn(O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, N, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + 4), $ffb17689dbc03ee8$export$1bc649ab427a02ba.La && Ln(O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, N, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5), 0 < x && yn(O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, N, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + 4), $ffb17689dbc03ee8$export$1bc649ab427a02ba.La && Nn(O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, N, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5);
                                    else {
                                        var q = U.B, D = U.qa, R = U.ra + 8 * C * q + 8 * A, T = U.Ha, U = U.Ia + 8 * C * q + 8 * A;
                                        C = $ffb17689dbc03ee8$export$1bc649ab427a02ba.ld;
                                        0 < A && (fn(O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, N, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + 4, $ffb17689dbc03ee8$export$549f717800d2b57f, C), pn(D, R, T, U, q, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + 4, $ffb17689dbc03ee8$export$549f717800d2b57f, C)), $ffb17689dbc03ee8$export$1bc649ab427a02ba.La && (mn(O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, N, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5, $ffb17689dbc03ee8$export$549f717800d2b57f, C), bn(D, R, T, U, q, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5, $ffb17689dbc03ee8$export$549f717800d2b57f, C)), 0 < x && (ln(O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, N, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + 4, $ffb17689dbc03ee8$export$549f717800d2b57f, C), dn(D, R, T, U, q, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 + 4, $ffb17689dbc03ee8$export$549f717800d2b57f, C)), $ffb17689dbc03ee8$export$1bc649ab427a02ba.La && (gn(O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, N, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5, $ffb17689dbc03ee8$export$549f717800d2b57f, C), vn(D, R, T, U, q, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5, $ffb17689dbc03ee8$export$549f717800d2b57f, C));
                                    }
                                }
                            }
                            if (s.ia && alert("todo:DitherRow"), null != c.put) {
                                if (L = 16 * P, P = 16 * (P + 1), I ? (c.y = s.sa, c.O = s.ta + w, c.f = s.qa, c.N = s.ra + _, c.ea = s.Ha, c.W = s.Ia + _) : (L -= y, c.y = d, c.O = p, c.f = g, c.N = l, c.ea = m, c.W = v), b || (P -= y), P > c.o && (P = c.o), c.F = null, c.J = null, null != s.Fa && 0 < s.Fa.length && L < P && (c.J = lr(s, c, L, P - L), c.F = s.mb, null == c.F && 0 == c.F.length)) {
                                    u = Jt1(s, 3, "Could not decode alpha data.");
                                    break t;
                                }
                                L < c.j && (y = c.j - L, L = c.j, e49(!(1 & y)), c.O += s.R * y, c.N += s.B * (y >> 1), c.W += s.B * (y >> 1), null != c.F && (c.J += c.width * y)), L < P && (c.O += c.v, c.N += c.v >> 1, c.W += c.v >> 1, null != c.F && (c.J += c.v), c.ka = L - c.j, c.U = c.va - c.v, c.T = P - L, u = c.put(c));
                            }
                            o + 1 != s.Ic || b || (n19(s.sa, s.ta - h, d, p + 16 * s.R, h), n19(s.qa, s.ra - f, g, l + 8 * s.B, f), n19(s.Ha, s.Ia - f, m, v + 8 * s.B, f));
                        }
                        if (!u) return Jt1(t, 6, "Output aborted.");
                    }
                    return 1;
                })(t80, r35)), null != r35.bc && r35.bc(r35), s &= 1;
            }
            return s ? (t80.cb = 0, s) : 0;
        }
        function te1(t, e, r, n, i) {
            i = t[e + r + 32 * n] + (i >> 3), t[e + r + 32 * n] = -256 & i ? 0 > i ? 0 : 255 : i;
        }
        function ee1(t, e, r, n, i, a) {
            te1(t, e, 0, r, n + i), te1(t, e, 1, r, n + a), te1(t, e, 2, r, n - a), te1(t, e, 3, r, n - i);
        }
        function re(t) {
            return (20091 * t >> 16) + t;
        }
        function ne1(t, e, r, n) {
            var i, o = 0, s = a15(16);
            for(i = 0; 4 > i; ++i){
                var c = t[e + 0] + t[e + 8], u = t[e + 0] - t[e + 8], h = (35468 * t[e + 4] >> 16) - re(t[e + 12]), l = re(t[e + 4]) + (35468 * t[e + 12] >> 16);
                s[o + 0] = c + l, s[o + 1] = u + h, s[o + 2] = u - h, s[o + 3] = c - l, o += 4, e++;
            }
            for(i = o = 0; 4 > i; ++i)c = (t = s[o + 0] + 4) + s[o + 8], u = t - s[o + 8], h = (35468 * s[o + 4] >> 16) - re(s[o + 12]), te1(r, n, 0, 0, c + (l = re(s[o + 4]) + (35468 * s[o + 12] >> 16))), te1(r, n, 1, 0, u + h), te1(r, n, 2, 0, u - h), te1(r, n, 3, 0, c - l), o++, n += 32;
        }
        function ie1(t, e, r, n) {
            var i = t[e + 0] + 4, a = 35468 * t[e + 4] >> 16, o = re(t[e + 4]), s = 35468 * t[e + 1] >> 16;
            ee1(r, n, 0, i + o, t = re(t[e + 1]), s), ee1(r, n, 1, i + a, t, s), ee1(r, n, 2, i - a, t, s), ee1(r, n, 3, i - o, t, s);
        }
        function ae1(t, e, r, n, i) {
            ne1(t, e, r, n), i && ne1(t, e + 16, r, n + 4);
        }
        function oe1(t, e, r, n) {
            on(t, e + 0, r, n, 1), on(t, e + 32, r, n + 128, 1);
        }
        function se1(t, e, r, n) {
            var i;
            for(t = t[e + 0] + 4, i = 0; 4 > i; ++i)for(e = 0; 4 > e; ++e)te1(r, n, e, i, t);
        }
        function ce1(t, e, r, n) {
            t[e + 0] && un(t, e + 0, r, n), t[e + 16] && un(t, e + 16, r, n + 4), t[e + 32] && un(t, e + 32, r, n + 128), t[e + 48] && un(t, e + 48, r, n + 128 + 4);
        }
        function ue1(t, e, r, n) {
            var i, o = a15(16);
            for(i = 0; 4 > i; ++i){
                var s = t[e + 0 + i] + t[e + 12 + i], c = t[e + 4 + i] + t[e + 8 + i], u = t[e + 4 + i] - t[e + 8 + i], h = t[e + 0 + i] - t[e + 12 + i];
                o[0 + i] = s + c, o[8 + i] = s - c, o[4 + i] = h + u, o[12 + i] = h - u;
            }
            for(i = 0; 4 > i; ++i)s = (t = o[0 + 4 * i] + 3) + o[3 + 4 * i], c = o[1 + 4 * i] + o[2 + 4 * i], u = o[1 + 4 * i] - o[2 + 4 * i], h = t - o[3 + 4 * i], r[n + 0] = s + c >> 3, r[n + 16] = h + u >> 3, r[n + 32] = s - c >> 3, r[n + 48] = h - u >> 3, n += 64;
        }
        function he1(t, e, r) {
            var n, i = e - 32, a = Bn, o = 255 - t[i - 1];
            for(n = 0; n < r; ++n){
                var s, c = a, u = o + t[e - 1];
                for(s = 0; s < r; ++s)t[e + s] = c[u + t[i + s]];
                e += 32;
            }
        }
        function le1(t, e) {
            he1(t, e, 4);
        }
        function fe1(t, e) {
            he1(t, e, 8);
        }
        function de1(t, e) {
            he1(t, e, 16);
        }
        function pe1(t, e) {
            var r;
            for(r = 0; 16 > r; ++r)n19(t, e + 32 * r, t, e - 32, 16);
        }
        function ge1(t, e) {
            var r;
            for(r = 16; 0 < r; --r)i19(t, e, t[e - 1], 16), e += 32;
        }
        function me1(t, e, r) {
            var n;
            for(n = 0; 16 > n; ++n)i19(e, r + 32 * n, t, 16);
        }
        function ve1(t, e) {
            var r, n = 16;
            for(r = 0; 16 > r; ++r)n += t[e - 1 + 32 * r] + t[e + r - 32];
            me1(n >> 5, t, e);
        }
        function be(t, e) {
            var r, n = 8;
            for(r = 0; 16 > r; ++r)n += t[e - 1 + 32 * r];
            me1(n >> 4, t, e);
        }
        function ye(t, e) {
            var r, n = 8;
            for(r = 0; 16 > r; ++r)n += t[e + r - 32];
            me1(n >> 4, t, e);
        }
        function we(t, e) {
            me1(128, t, e);
        }
        function Ne(t, e, r) {
            return t + 2 * e + r + 2 >> 2;
        }
        function Le(t, e) {
            var r, i = e - 32;
            i = new Uint8Array([
                Ne(t[i - 1], t[i + 0], t[i + 1]),
                Ne(t[i + 0], t[i + 1], t[i + 2]),
                Ne(t[i + 1], t[i + 2], t[i + 3]),
                Ne(t[i + 2], t[i + 3], t[i + 4])
            ]);
            for(r = 0; 4 > r; ++r)n19(t, e + 32 * r, i, 0, i.length);
        }
        function Ae(t, e) {
            var r = t[e - 1], n = t[e - 1 + 32], i = t[e - 1 + 64], a = t[e - 1 + 96];
            I3(t, e + 0, 16843009 * Ne(t[e - 1 - 32], r, n)), I3(t, e + 32, 16843009 * Ne(r, n, i)), I3(t, e + 64, 16843009 * Ne(n, i, a)), I3(t, e + 96, 16843009 * Ne(i, a, a));
        }
        function xe(t, e) {
            var r, n = 4;
            for(r = 0; 4 > r; ++r)n += t[e + r - 32] + t[e - 1 + 32 * r];
            for(n >>= 3, r = 0; 4 > r; ++r)i19(t, e + 32 * r, n, 4);
        }
        function Se(t, e) {
            var r = t[e - 1 + 0], n = t[e - 1 + 32], i = t[e - 1 + 64], a = t[e - 1 - 32], o = t[e + 0 - 32], s = t[e + 1 - 32], c = t[e + 2 - 32], u = t[e + 3 - 32];
            t[e + 0 + 96] = Ne(n, i, t[e - 1 + 96]), t[e + 1 + 96] = t[e + 0 + 64] = Ne(r, n, i), t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = Ne(a, r, n), t[e + 3 + 96] = t[e + 2 + 64] = t[e + 1 + 32] = t[e + 0 + 0] = Ne(o, a, r), t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = Ne(s, o, a), t[e + 3 + 32] = t[e + 2 + 0] = Ne(c, s, o), t[e + 3 + 0] = Ne(u, c, s);
        }
        function _e(t, e) {
            var r = t[e + 1 - 32], n = t[e + 2 - 32], i = t[e + 3 - 32], a = t[e + 4 - 32], o = t[e + 5 - 32], s = t[e + 6 - 32], c = t[e + 7 - 32];
            t[e + 0 + 0] = Ne(t[e + 0 - 32], r, n), t[e + 1 + 0] = t[e + 0 + 32] = Ne(r, n, i), t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = Ne(n, i, a), t[e + 3 + 0] = t[e + 2 + 32] = t[e + 1 + 64] = t[e + 0 + 96] = Ne(i, a, o), t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = Ne(a, o, s), t[e + 3 + 64] = t[e + 2 + 96] = Ne(o, s, c), t[e + 3 + 96] = Ne(s, c, c);
        }
        function Pe(t, e) {
            var r = t[e - 1 + 0], n = t[e - 1 + 32], i = t[e - 1 + 64], a = t[e - 1 - 32], o = t[e + 0 - 32], s = t[e + 1 - 32], c = t[e + 2 - 32], u = t[e + 3 - 32];
            t[e + 0 + 0] = t[e + 1 + 64] = a + o + 1 >> 1, t[e + 1 + 0] = t[e + 2 + 64] = o + s + 1 >> 1, t[e + 2 + 0] = t[e + 3 + 64] = s + c + 1 >> 1, t[e + 3 + 0] = c + u + 1 >> 1, t[e + 0 + 96] = Ne(i, n, r), t[e + 0 + 64] = Ne(n, r, a), t[e + 0 + 32] = t[e + 1 + 96] = Ne(r, a, o), t[e + 1 + 32] = t[e + 2 + 96] = Ne(a, o, s), t[e + 2 + 32] = t[e + 3 + 96] = Ne(o, s, c), t[e + 3 + 32] = Ne(s, c, u);
        }
        function ke(t, e) {
            var r = t[e + 0 - 32], n = t[e + 1 - 32], i = t[e + 2 - 32], a = t[e + 3 - 32], o = t[e + 4 - 32], s = t[e + 5 - 32], c = t[e + 6 - 32], u = t[e + 7 - 32];
            t[e + 0 + 0] = r + n + 1 >> 1, t[e + 1 + 0] = t[e + 0 + 64] = n + i + 1 >> 1, t[e + 2 + 0] = t[e + 1 + 64] = i + a + 1 >> 1, t[e + 3 + 0] = t[e + 2 + 64] = a + o + 1 >> 1, t[e + 0 + 32] = Ne(r, n, i), t[e + 1 + 32] = t[e + 0 + 96] = Ne(n, i, a), t[e + 2 + 32] = t[e + 1 + 96] = Ne(i, a, o), t[e + 3 + 32] = t[e + 2 + 96] = Ne(a, o, s), t[e + 3 + 64] = Ne(o, s, c), t[e + 3 + 96] = Ne(s, c, u);
        }
        function Ie(t, e) {
            var r = t[e - 1 + 0], n = t[e - 1 + 32], i = t[e - 1 + 64], a = t[e - 1 + 96];
            t[e + 0 + 0] = r + n + 1 >> 1, t[e + 2 + 0] = t[e + 0 + 32] = n + i + 1 >> 1, t[e + 2 + 32] = t[e + 0 + 64] = i + a + 1 >> 1, t[e + 1 + 0] = Ne(r, n, i), t[e + 3 + 0] = t[e + 1 + 32] = Ne(n, i, a), t[e + 3 + 32] = t[e + 1 + 64] = Ne(i, a, a), t[e + 3 + 64] = t[e + 2 + 64] = t[e + 0 + 96] = t[e + 1 + 96] = t[e + 2 + 96] = t[e + 3 + 96] = a;
        }
        function Fe(t, e) {
            var r = t[e - 1 + 0], n = t[e - 1 + 32], i = t[e - 1 + 64], a = t[e - 1 + 96], o = t[e - 1 - 32], s = t[e + 0 - 32], c = t[e + 1 - 32], u = t[e + 2 - 32];
            t[e + 0 + 0] = t[e + 2 + 32] = r + o + 1 >> 1, t[e + 0 + 32] = t[e + 2 + 64] = n + r + 1 >> 1, t[e + 0 + 64] = t[e + 2 + 96] = i + n + 1 >> 1, t[e + 0 + 96] = a + i + 1 >> 1, t[e + 3 + 0] = Ne(s, c, u), t[e + 2 + 0] = Ne(o, s, c), t[e + 1 + 0] = t[e + 3 + 32] = Ne(r, o, s), t[e + 1 + 32] = t[e + 3 + 64] = Ne(n, r, o), t[e + 1 + 64] = t[e + 3 + 96] = Ne(i, n, r), t[e + 1 + 96] = Ne(a, i, n);
        }
        function Ce(t, e) {
            var r;
            for(r = 0; 8 > r; ++r)n19(t, e + 32 * r, t, e - 32, 8);
        }
        function je(t, e) {
            var r;
            for(r = 0; 8 > r; ++r)i19(t, e, t[e - 1], 8), e += 32;
        }
        function Oe(t, e, r) {
            var n;
            for(n = 0; 8 > n; ++n)i19(e, r + 32 * n, t, 8);
        }
        function Be(t, e) {
            var r, n = 8;
            for(r = 0; 8 > r; ++r)n += t[e + r - 32] + t[e - 1 + 32 * r];
            Oe(n >> 4, t, e);
        }
        function Me(t, e) {
            var r, n = 4;
            for(r = 0; 8 > r; ++r)n += t[e + r - 32];
            Oe(n >> 3, t, e);
        }
        function Ee(t, e) {
            var r, n = 4;
            for(r = 0; 8 > r; ++r)n += t[e - 1 + 32 * r];
            Oe(n >> 3, t, e);
        }
        function qe(t, e) {
            Oe(128, t, e);
        }
        function De(t, e, r) {
            var n = t[e - r], i = t[e + 0], a = 3 * (i - n) + jn[1020 + t[e - 2 * r] - t[e + r]], o = On[112 + (a + 4 >> 3)];
            t[e - r] = Bn[255 + n + On[112 + (a + 3 >> 3)]], t[e + 0] = Bn[255 + i - o];
        }
        function Re(t, e, r, n) {
            var i = t[e + 0], a = t[e + r];
            return Mn[255 + t[e - 2 * r] - t[e - r]] > n || Mn[255 + a - i] > n;
        }
        function Te(t, e, r, n) {
            return 4 * Mn[255 + t[e - r] - t[e + 0]] + Mn[255 + t[e - 2 * r] - t[e + r]] <= n;
        }
        function Ue(t, e, r, n, i) {
            var a = t[e - 3 * r], o = t[e - 2 * r], s = t[e - r], c = t[e + 0], u = t[e + r], h = t[e + 2 * r], l = t[e + 3 * r];
            return 4 * Mn[255 + s - c] + Mn[255 + o - u] > n ? 0 : Mn[255 + t[e - 4 * r] - a] <= i && Mn[255 + a - o] <= i && Mn[255 + o - s] <= i && Mn[255 + l - h] <= i && Mn[255 + h - u] <= i && Mn[255 + u - c] <= i;
        }
        function ze(t, e, r, n) {
            var i = 2 * n + 1;
            for(n = 0; 16 > n; ++n)Te(t, e + n, r, i) && De(t, e + n, r);
        }
        function He(t, e, r, n) {
            var i = 2 * n + 1;
            for(n = 0; 16 > n; ++n)Te(t, e + n * r, 1, i) && De(t, e + n * r, 1);
        }
        function We(t, e, r, n) {
            var i;
            for(i = 3; 0 < i; --i)ze(t, e += 4 * r, r, n);
        }
        function Ve(t, e, r, n) {
            var i;
            for(i = 3; 0 < i; --i)He(t, e += 4, r, n);
        }
        function Ge(t, e, r, n, i, a, o, s) {
            for(a = 2 * a + 1; 0 < i--;){
                if (Ue(t, e, r, a, o)) {
                    if (Re(t, e, r, s)) De(t, e, r);
                    else {
                        var c = t, u = e, h = r, l = c[u - 2 * h], f = c[u - h], d = c[u + 0], p = c[u + h], g = c[u + 2 * h], m = 27 * (b = jn[1020 + 3 * (d - f) + jn[1020 + l - p]]) + 63 >> 7, v = 18 * b + 63 >> 7, b = 9 * b + 63 >> 7;
                        c[u - 3 * h] = Bn[255 + c[u - 3 * h] + b], c[u - 2 * h] = Bn[255 + l + v], c[u - h] = Bn[255 + f + m], c[u + 0] = Bn[255 + d - m], c[u + h] = Bn[255 + p - v], c[u + 2 * h] = Bn[255 + g - b];
                    }
                }
                e += n;
            }
        }
        function Ye(t, e, r, n, i, a, o, s) {
            for(a = 2 * a + 1; 0 < i--;){
                if (Ue(t, e, r, a, o)) {
                    if (Re(t, e, r, s)) De(t, e, r);
                    else {
                        var c = t, u = e, h = r, l = c[u - h], f = c[u + 0], d = c[u + h], p = On[112 + ((g = 3 * (f - l)) + 4 >> 3)], g = On[112 + (g + 3 >> 3)], m = p + 1 >> 1;
                        c[u - 2 * h] = Bn[255 + c[u - 2 * h] + m], c[u - h] = Bn[255 + l + g], c[u + 0] = Bn[255 + f - p], c[u + h] = Bn[255 + d - m];
                    }
                }
                e += n;
            }
        }
        function Je(t, e, r, n, i, a) {
            Ge(t, e, r, 1, 16, n, i, a);
        }
        function Xe(t, e, r, n, i, a) {
            Ge(t, e, 1, r, 16, n, i, a);
        }
        function Ke(t, e, r, n, i, a) {
            var o;
            for(o = 3; 0 < o; --o)Ye(t, e += 4 * r, r, 1, 16, n, i, a);
        }
        function Ze(t, e, r, n, i, a) {
            var o;
            for(o = 3; 0 < o; --o)Ye(t, e += 4, 1, r, 16, n, i, a);
        }
        function $e(t, e, r, n, i, a, o, s) {
            Ge(t, e, i, 1, 8, a, o, s), Ge(r, n, i, 1, 8, a, o, s);
        }
        function Qe(t, e, r, n, i, a, o, s) {
            Ge(t, e, 1, i, 8, a, o, s), Ge(r, n, 1, i, 8, a, o, s);
        }
        function tr(t, e, r, n, i, a, o, s) {
            Ye(t, e + 4 * i, i, 1, 8, a, o, s), Ye(r, n + 4 * i, i, 1, 8, a, o, s);
        }
        function er(t, e, r, n, i, a, o, s) {
            Ye(t, e + 4, 1, i, 8, a, o, s), Ye(r, n + 4, 1, i, 8, a, o, s);
        }
        function rr() {
            this.ba = new ot2, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ct2, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc";
        }
        function nr() {
            this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0;
        }
        function ir() {
            this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0;
        }
        function ar() {
            this.ua = 0, this.Wa = new $ffb17689dbc03ee8$export$549f717800d2b57f, this.vb = new $ffb17689dbc03ee8$export$549f717800d2b57f, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new d7, this.yc = new l6;
        }
        function or() {
            this.xb = this.a = 0, this.l = new Gt1, this.ca = new ot2, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new N6, this.Pb = 0, this.wd = new N6, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new ar, this.ab = 0, this.gc = o16(4, ir), this.Oc = 0;
        }
        function sr() {
            this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Gt1, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0;
        }
        function cr(t, e, r, n, i, a, o) {
            for(t = null == t ? 0 : t[e + 0], e = 0; e < o; ++e)i[a + e] = t + r[n + e] & 255, t = i[a + e];
        }
        function ur(t, e, r, n, i, a, o) {
            var s;
            if (null == t) cr(null, null, r, n, i, a, o);
            else for(s = 0; s < o; ++s)i[a + s] = t[e + s] + r[n + s] & 255;
        }
        function hr(t, e, r, n, i, a, o) {
            if (null == t) cr(null, null, r, n, i, a, o);
            else {
                var s, c = t[e + 0], u = c, h = c;
                for(s = 0; s < o; ++s)u = h + (c = t[e + s]) - u, h = r[n + s] + (-256 & u ? 0 > u ? 0 : 255 : u) & 255, u = c, i[a + s] = h;
            }
        }
        function lr(t, r, i, o) {
            var s = r.width, c = r.o;
            if (e49(null != t && null != r), 0 > i || 0 >= o || i + o > c) return null;
            if (!t.Cc) {
                if (null == t.ga) {
                    var u;
                    if (t.ga = new sr, (u = null == t.ga) || (u = r.width * r.o, e49(0 == t.Gb.length), t.Gb = a15(u), t.Uc = 0, null == t.Gb ? u = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, u = 1), u = !u), !u) {
                        u = t.ga;
                        var h = t.Fa, l = t.P, f = t.qc, d = t.mb, p = t.nb, g = l + 1, m = f - 1, b = u.l;
                        if (e49(null != h && null != d && null != r), mi[0] = null, mi[1] = cr, mi[2] = ur, mi[3] = hr, u.ca = d, u.tb = p, u.c = r.width, u.i = r.height, e49(0 < u.c && 0 < u.i), 1 >= f) r = 0;
                        else if (u.$a = h[l + 0] >> 0 & 3, u.Z = h[l + 0] >> 2 & 3, u.Lc = h[l + 0] >> 4 & 3, l = h[l + 0] >> 6 & 3, 0 > u.$a || 1 < u.$a || 4 <= u.Z || 1 < u.Lc || l) r = 0;
                        else if (b.put = $ffb17689dbc03ee8$export$9e021dd9568dc486, b.ac = $ffb17689dbc03ee8$export$a47202eb3f827bb2, b.bc = $ffb17689dbc03ee8$export$f2239d28df5f43bd, b.ma = u, b.width = r.width, b.height = r.height, b.Da = r.Da, b.v = r.v, b.va = r.va, b.j = r.j, b.o = r.o, u.$a) t: {
                            e49(1 == u.$a), r = kt1();
                            e: for(;;){
                                if (null == r) {
                                    r = 0;
                                    break t;
                                }
                                if (e49(null != u), u.mc = r, r.c = u.c, r.i = u.i, r.l = u.l, r.l.ma = u, r.l.width = u.c, r.l.height = u.i, r.a = 0, v7(r.m, h, g, m), !It(u.c, u.i, 1, r, null)) break e;
                                if (1 == r.ab && 3 == r.gc[0].hc && $ffb17689dbc03ee8$export$7d753ad993606f45(r.s) ? (u.ic = 1, h = r.c * r.i, r.Ta = null, r.Ua = 0, r.V = a15(h), r.Ba = 0, null == r.V ? (r.a = 1, r = 0) : r = 1) : (u.ic = 0, r = Ft1(r, u.c)), !r) break e;
                                r = 1;
                                break t;
                            }
                            u.mc = null, r = 0;
                        }
                        else r = m >= u.c * u.i;
                        u = !r;
                    }
                    if (u) return null;
                    1 != t.ga.Lc ? t.Ga = 0 : o = c - i;
                }
                e49(null != t.ga), e49(i + o <= c);
                t: {
                    if (r = (h = t.ga).c, c = h.l.o, 0 == h.$a) {
                        if (g = t.rc, m = t.Vc, b = t.Fa, l = t.P + 1 + i * r, f = t.mb, d = t.nb + i * r, e49(l <= t.P + t.qc), 0 != h.Z) for(e49(null != mi[h.Z]), u = 0; u < o; ++u)mi[h.Z](g, m, b, l, f, d, r), g = f, m = d, d += r, l += r;
                        else for(u = 0; u < o; ++u)n19(f, d, b, l, r), g = f, m = d, d += r, l += r;
                        t.rc = g, t.Vc = m;
                    } else {
                        if (e49(null != h.mc), r = i + o, e49(null != (u = h.mc)), e49(r <= u.i), u.C >= r) r = 1;
                        else if (h.ic || mr(), h.ic) {
                            h = u.V, g = u.Ba, m = u.c;
                            var y = u.i, w = (b = 1, l = u.$ / m, f = u.$ % m, d = u.m, p = u.s, u.$), N = m * y, L = m * r, x = p.wc, _ = w < L ? $ffb17689dbc03ee8$export$5fd5db01c4615478(p, f, l) : null;
                            e49(w <= N), e49(r <= y), e49($ffb17689dbc03ee8$export$7d753ad993606f45(p));
                            e: for(;;){
                                for(; !d.h && w < L;){
                                    if (f & x || (_ = $ffb17689dbc03ee8$export$5fd5db01c4615478(p, f, l)), e49(null != _), S3(d), 256 > (y = $ffb17689dbc03ee8$export$bc1318bc7e5f1315(_.G[0], _.H[0], d))) h[g + w] = y, ++w, ++f >= m && (f = 0, ++l <= r && !(l % 16) && $ffb17689dbc03ee8$export$9cf40f67b77f45f4(u, l));
                                    else {
                                        if (!(280 > y)) {
                                            b = 0;
                                            break e;
                                        }
                                        y = $ffb17689dbc03ee8$export$6aae594af76bbb7b(y - 256, d);
                                        var P, k = $ffb17689dbc03ee8$export$bc1318bc7e5f1315(_.G[4], _.H[4], d);
                                        if (S3(d), !(w >= (k = $ffb17689dbc03ee8$export$98b7c3ef37465410(m, k = $ffb17689dbc03ee8$export$6aae594af76bbb7b(k, d))) && N - w >= y)) {
                                            b = 0;
                                            break e;
                                        }
                                        for(P = 0; P < y; ++P)h[g + w + P] = h[g + w + P - k];
                                        for(w += y, f += y; f >= m;)f -= m, ++l <= r && !(l % 16) && $ffb17689dbc03ee8$export$9cf40f67b77f45f4(u, l);
                                        w < L && f & x && (_ = $ffb17689dbc03ee8$export$5fd5db01c4615478(p, f, l));
                                    }
                                    e49(d.h == A5(d));
                                }
                                $ffb17689dbc03ee8$export$9cf40f67b77f45f4(u, l > r ? r : l);
                                break e;
                            }
                            !b || d.h && w < N ? (b = 0, u.a = d.h ? 5 : 3) : u.$ = w, r = b;
                        } else r = _t(u, u.V, u.Ba, u.c, u.i, r, Ct1);
                        if (!r) {
                            o = 0;
                            break t;
                        }
                    }
                    i + o >= c && (t.Cc = 1), o = 1;
                }
                if (!o) return null;
                if (t.Cc && (null != (o = t.ga) && (o.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null;
            }
            return t.nb + i * s;
        }
        function fr(t, e, r, n, i, a) {
            for(; 0 < i--;){
                var o, s = t, c = e + (r ? 1 : 0), u = t, h = e + (r ? 0 : 3);
                for(o = 0; o < n; ++o){
                    var l = u[h + 4 * o];
                    255 != l && (l *= 32897, s[c + 4 * o + 0] = s[c + 4 * o + 0] * l >> 23, s[c + 4 * o + 1] = s[c + 4 * o + 1] * l >> 23, s[c + 4 * o + 2] = s[c + 4 * o + 2] * l >> 23);
                }
                e += a;
            }
        }
        function dr(t, e, r, n, i) {
            for(; 0 < n--;){
                var a;
                for(a = 0; a < r; ++a){
                    var o = t[e + 2 * a + 0], s = 15 & (u = t[e + 2 * a + 1]), c = 4369 * s, u = (240 & u | u >> 4) * c >> 16;
                    t[e + 2 * a + 0] = (240 & o | o >> 4) * c >> 16 & 240 | (15 & o | o << 4) * c >> 16 >> 4 & 15, t[e + 2 * a + 1] = 240 & u | s;
                }
                e += i;
            }
        }
        function pr(t, e, r, n, i, a, o, s) {
            var c, u, h = 255;
            for(u = 0; u < i; ++u){
                for(c = 0; c < n; ++c){
                    var l = t[e + c];
                    a[o + 4 * c] = l, h &= l;
                }
                e += r, o += s;
            }
            return 255 != h;
        }
        function gr(t, e, r, n, i) {
            var a;
            for(a = 0; a < i; ++a)r[n + a] = t[e + a] >> 8;
        }
        function mr() {
            An = fr, xn = dr, Sn = pr, _n = gr;
        }
        function vr(r, n, i) {
            t77[r] = function(t, r, a, o, s, c, u, h, l, f, d, p, g, m, v, b, y) {
                var w, N = y - 1 >> 1, L = s[c + 0] | u[h + 0] << 16, A = l[f + 0] | d[p + 0] << 16;
                e49(null != t);
                var x = 3 * L + A + 131074 >> 2;
                for(n(t[r + 0], 255 & x, x >> 16, g, m), null != a && (x = 3 * A + L + 131074 >> 2, n(a[o + 0], 255 & x, x >> 16, v, b)), w = 1; w <= N; ++w){
                    var S = s[c + w] | u[h + w] << 16, _ = l[f + w] | d[p + w] << 16, P = L + S + A + _ + 524296, k = P + 2 * (S + A) >> 3;
                    x = k + L >> 1, L = (P = P + 2 * (L + _) >> 3) + S >> 1, n(t[r + 2 * w - 1], 255 & x, x >> 16, g, m + (2 * w - 1) * i), n(t[r + 2 * w - 0], 255 & L, L >> 16, g, m + (2 * w - 0) * i), null != a && (x = P + A >> 1, L = k + _ >> 1, n(a[o + 2 * w - 1], 255 & x, x >> 16, v, b + (2 * w - 1) * i), n(a[o + 2 * w + 0], 255 & L, L >> 16, v, b + (2 * w + 0) * i)), L = S, A = _;
                }
                1 & y || (x = 3 * L + A + 131074 >> 2, n(t[r + y - 1], 255 & x, x >> 16, g, m + (y - 1) * i), null != a && (x = 3 * A + L + 131074 >> 2, n(a[o + y - 1], 255 & x, x >> 16, v, b + (y - 1) * i)));
            };
        }
        function br() {
            vi[En] = bi, vi[qn] = wi, vi[Dn] = yi, vi[Rn] = Ni, vi[Tn] = Li, vi[Un] = Ai, vi[zn] = xi, vi[Hn] = wi, vi[Wn] = Ni, vi[Vn] = Li, vi[Gn] = Ai;
        }
        function yr(t) {
            return t & ~Fi ? 0 > t ? 0 : 255 : t >> Ii;
        }
        function wr(t, e) {
            return yr((19077 * t >> 8) + (26149 * e >> 8) - 14234);
        }
        function Nr(t, e, r) {
            return yr((19077 * t >> 8) - (6419 * e >> 8) - (13320 * r >> 8) + 8708);
        }
        function Lr(t, e) {
            return yr((19077 * t >> 8) + (33050 * e >> 8) - 17685);
        }
        function Ar(t, e, r, n, i) {
            n[i + 0] = wr(t, r), n[i + 1] = Nr(t, e, r), n[i + 2] = Lr(t, e);
        }
        function xr(t, e, r, n, i) {
            n[i + 0] = Lr(t, e), n[i + 1] = Nr(t, e, r), n[i + 2] = wr(t, r);
        }
        function Sr(t, e, r, n, i) {
            var a = Nr(t, e, r);
            e = a << 3 & 224 | Lr(t, e) >> 3, n[i + 0] = 248 & wr(t, r) | a >> 5, n[i + 1] = e;
        }
        function _r(t, e, r, n, i) {
            var a = 240 & Lr(t, e) | 15;
            n[i + 0] = 240 & wr(t, r) | Nr(t, e, r) >> 4, n[i + 1] = a;
        }
        function Pr(t, e, r, n, i) {
            n[i + 0] = 255, Ar(t, e, r, n, i + 1);
        }
        function kr(t, e, r, n, i) {
            xr(t, e, r, n, i), n[i + 3] = 255;
        }
        function Ir(t, e, r, n, i) {
            Ar(t, e, r, n, i), n[i + 3] = 255;
        }
        function Vt1(t, e) {
            return 0 > t ? 0 : t > e ? e : t;
        }
        function Fr(e51, r, n) {
            t77[e51] = function(t, e, i, a, o, s, c, u, h) {
                for(var l = u + (-2 & h) * n; u != l;)r(t[e + 0], i[a + 0], o[s + 0], c, u), r(t[e + 1], i[a + 0], o[s + 0], c, u + n), e += 2, ++a, ++s, u += 2 * n;
                1 & h && r(t[e + 0], i[a + 0], o[s + 0], c, u);
            };
        }
        function Cr(t, e, r) {
            return 0 == r ? 0 == t ? 0 == e ? 6 : 5 : 0 == e ? 4 : 0 : r;
        }
        function jr(t, e, r, n, i) {
            switch(t >>> 30){
                case 3:
                    on(e, r, n, i, 0);
                    break;
                case 2:
                    sn(e, r, n, i);
                    break;
                case 1:
                    un(e, r, n, i);
            }
        }
        function Or(t, e) {
            var r, a, o = e.M, s = e.Nb, c = t.oc, u = t.pc + 40, h = t.oc, l = t.pc + 584, f = t.oc, d = t.pc + 600;
            for(r = 0; 16 > r; ++r)c[u + 32 * r - 1] = 129;
            for(r = 0; 8 > r; ++r)h[l + 32 * r - 1] = 129, f[d + 32 * r - 1] = 129;
            for(0 < o ? c[u - 1 - 32] = h[l - 1 - 32] = f[d - 1 - 32] = 129 : (i19(c, u - 32 - 1, 127, 21), i19(h, l - 32 - 1, 127, 9), i19(f, d - 32 - 1, 127, 9)), a = 0; a < t.za; ++a){
                var p = e.ya[e.aa + a];
                if (0 < a) {
                    for(r = -1; 16 > r; ++r)n19(c, u + 32 * r - 4, c, u + 32 * r + 12, 4);
                    for(r = -1; 8 > r; ++r)n19(h, l + 32 * r - 4, h, l + 32 * r + 4, 4), n19(f, d + 32 * r - 4, f, d + 32 * r + 4, 4);
                }
                var g = t.Gd, m = t.Hd + a, v = p.ad, b = p.Hc;
                if (0 < o && (n19(c, u - 32, g[m].y, 0, 16), n19(h, l - 32, g[m].f, 0, 8), n19(f, d - 32, g[m].ea, 0, 8)), p.Za) {
                    var y = c, w = u - 32 + 16;
                    for(0 < o && (a >= t.za - 1 ? i19(y, w, g[m].y[15], 4) : n19(y, w, g[m + 1].y, 0, 4)), r = 0; 4 > r; r++)y[w + 128 + r] = y[w + 256 + r] = y[w + 384 + r] = y[w + 0 + r];
                    for(r = 0; 16 > r; ++r, b <<= 2)y = c, w = u + Di[r], fi[p.Ob[r]](y, w), jr(b, v, 16 * +r, y, w);
                } else if (y = Cr(a, o, p.Ob[0]), li[y](c, u), 0 != b) for(r = 0; 16 > r; ++r, b <<= 2)jr(b, v, 16 * +r, c, u + Di[r]);
                for(r = p.Gc, y = Cr(a, o, p.Dd), di[y](h, l), di[y](f, d), b = v, y = h, w = l, 255 & (p = r >> 0) && (170 & p ? cn(b, 256, y, w) : hn(b, 256, y, w)), p = f, b = d, 255 & (r >>= 8) && (170 & r ? cn(v, 320, p, b) : hn(v, 320, p, b)), o < t.Ub - 1 && (n19(g[m].y, 0, c, u + 480, 16), n19(g[m].f, 0, h, l + 224, 8), n19(g[m].ea, 0, f, d + 224, 8)), r = 8 * s * t.B, g = t.sa, m = t.ta + 16 * a + 16 * s * t.R, v = t.qa, p = t.ra + 8 * a + r, b = t.Ha, y = t.Ia + 8 * a + r, r = 0; 16 > r; ++r)n19(g, m + r * t.R, c, u + 32 * r, 16);
                for(r = 0; 8 > r; ++r)n19(v, p + r * t.B, h, l + 32 * r, 8), n19(b, y + r * t.B, f, d + 32 * r, 8);
            }
        }
        function Br(t, n, i, a, o, s, c, u, h) {
            var l = [
                0
            ], f = [
                0
            ], d = 0, p = null != h ? h.kd : 0, g = null != h ? h : new nr;
            if (null == t || 12 > i) return 7;
            g.data = t, g.w = n, g.ha = i, n = [
                n
            ], i = [
                i
            ], g.gb = [
                g.gb
            ];
            t: {
                var m = n, b = i, y = g.gb;
                if (e49(null != t), e49(null != b), e49(null != y), y[0] = 0, 12 <= b[0] && !r30(t, m[0], "RIFF")) {
                    if (r30(t, m[0] + 8, "WEBP")) {
                        y = 3;
                        break t;
                    }
                    var w = $ffb17689dbc03ee8$export$1bc649ab427a02ba(t, m[0] + 4);
                    if (12 > w || 4294967286 < w) {
                        y = 3;
                        break t;
                    }
                    if (p && w > b[0] - 8) {
                        y = 7;
                        break t;
                    }
                    y[0] = w, m[0] += 12, b[0] -= 12;
                }
                y = 0;
            }
            if (0 != y) return y;
            for(w = 0 < g.gb[0], i = i[0];;){
                t: {
                    var L = t;
                    b = n, y = i;
                    var A = l, x = f, S = m = [
                        0
                    ];
                    if ((k = d = [
                        d
                    ])[0] = 0, 8 > y[0]) y = 7;
                    else {
                        if (!r30(L, b[0], "VP8X")) {
                            if (10 != $ffb17689dbc03ee8$export$1bc649ab427a02ba(L, b[0] + 4)) {
                                y = 3;
                                break t;
                            }
                            if (18 > y[0]) {
                                y = 7;
                                break t;
                            }
                            var _ = $ffb17689dbc03ee8$export$1bc649ab427a02ba(L, b[0] + 8), P = 1 + C3(L, b[0] + 12);
                            if (2147483648 <= P * (L = 1 + C3(L, b[0] + 15))) {
                                y = 3;
                                break t;
                            }
                            null != S && (S[0] = _), null != A && (A[0] = P), null != x && (x[0] = L), b[0] += 18, y[0] -= 18, k[0] = 1;
                        }
                        y = 0;
                    }
                }
                if (d = d[0], m = m[0], 0 != y) return y;
                if (b = !!(2 & m), !w && d) return 3;
                if (null != s && (s[0] = !!(16 & m)), null != c && (c[0] = b), null != u && (u[0] = 0), c = l[0], m = f[0], d && b && null == h) {
                    y = 0;
                    break;
                }
                if (4 > i) {
                    y = 7;
                    break;
                }
                if (w && d || !w && !d && !r30(t, n[0], "ALPH")) {
                    i = [
                        i
                    ], g.na = [
                        g.na
                    ], g.P = [
                        g.P
                    ], g.Sa = [
                        g.Sa
                    ];
                    t: {
                        _ = t, y = n, w = i;
                        var k = g.gb;
                        A = g.na, x = g.P, S = g.Sa;
                        P = 22, e49(null != _), e49(null != w), L = y[0];
                        var I = w[0];
                        for(e49(null != A), e49(null != S), A[0] = null, x[0] = null, S[0] = 0;;){
                            if (y[0] = L, w[0] = I, 8 > I) {
                                y = 7;
                                break t;
                            }
                            var F = $ffb17689dbc03ee8$export$1bc649ab427a02ba(_, L + 4);
                            if (4294967286 < F) {
                                y = 3;
                                break t;
                            }
                            var O = 8 + F + 1 & -2;
                            if (P += O, 0 < k && P > k) {
                                y = 3;
                                break t;
                            }
                            if (!r30(_, L, "VP8 ") || !r30(_, L, "VP8L")) {
                                y = 0;
                                break t;
                            }
                            if (I[0] < O) {
                                y = 7;
                                break t;
                            }
                            r30(_, L, "ALPH") || (A[0] = _, x[0] = L + 8, S[0] = F), L += O, I -= O;
                        }
                    }
                    if (i = i[0], g.na = g.na[0], g.P = g.P[0], g.Sa = g.Sa[0], 0 != y) break;
                }
                i = [
                    i
                ], g.Ja = [
                    g.Ja
                ], g.xa = [
                    g.xa
                ];
                t: if (k = t, y = n, w = i, A = g.gb[0], x = g.Ja, S = g.xa, _ = y[0], L = !r30(k, _, "VP8 "), P = !r30(k, _, "VP8L"), e49(null != k), e49(null != w), e49(null != x), e49(null != S), 8 > w[0]) y = 7;
                else {
                    if (L || P) {
                        if (k = $ffb17689dbc03ee8$export$1bc649ab427a02ba(k, _ + 4), 12 <= A && k > A - 12) {
                            y = 3;
                            break t;
                        }
                        if (p && k > w[0] - 8) {
                            y = 7;
                            break t;
                        }
                        x[0] = k, y[0] += 8, w[0] -= 8, S[0] = P;
                    } else S[0] = 5 <= w[0] && 47 == k[_ + 0] && !(k[_ + 4] >> 5), x[0] = w[0];
                    y = 0;
                }
                if (i = i[0], g.Ja = g.Ja[0], g.xa = g.xa[0], n = n[0], 0 != y) break;
                if (4294967286 < g.Ja) return 3;
                if (null == u || b || (u[0] = g.xa ? 2 : 1), c = [
                    c
                ], m = [
                    m
                ], g.xa) {
                    if (5 > i) {
                        y = 7;
                        break;
                    }
                    u = c, p = m, b = s, null == t || 5 > i ? t = 0 : 5 <= i && 47 == t[n + 0] && !(t[n + 4] >> 5) ? (w = [
                        0
                    ], k = [
                        0
                    ], A = [
                        0
                    ], v7(x = new N6, t, n, i), $ffb17689dbc03ee8$export$4af052e7e598ad1a(x, w, k, A) ? (null != u && (u[0] = w[0]), null != p && (p[0] = k[0]), null != b && (b[0] = A[0]), t = 1) : t = 0) : t = 0;
                } else {
                    if (10 > i) {
                        y = 7;
                        break;
                    }
                    u = m, null == t || 10 > i || !Xt1(t, n + 3, i - 3) ? t = 0 : (p = t[n + 0] | t[n + 1] << 8 | t[n + 2] << 16, b = 16383 & (t[n + 7] << 8 | t[n + 6]), t = 16383 & (t[n + 9] << 8 | t[n + 8]), 1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= g.Ja || !b || !t ? t = 0 : (c && (c[0] = b), u && (u[0] = t), t = 1));
                }
                if (!t) return 3;
                if (c = c[0], m = m[0], d && (l[0] != c || f[0] != m)) return 3;
                null != h && (h[0] = g, h.offset = n - h.w, e49(4294967286 > n - h.w), e49(h.offset == h.ha - i));
                break;
            }
            return 0 == y || 7 == y && d && null == h ? (null != s && (s[0] |= null != g.na && 0 < g.na.length), null != a && (a[0] = c), null != o && (o[0] = m), 0) : y;
        }
        function Mr(t, e, r) {
            var n = e.width, i = e.height, a = 0, o = 0, s = n, c = i;
            if (e.Da = null != t && 0 < t.Da, e.Da && (s = t.cd, c = t.bd, a = t.v, o = t.j, 11 > r || (a &= -2, o &= -2), 0 > a || 0 > o || 0 >= s || 0 >= c || a + s > n || o + c > i)) return 0;
            if (e.v = a, e.j = o, e.va = a + s, e.o = o + c, e.U = s, e.T = c, e.da = null != t && 0 < t.da, e.da) {
                if (!$ffb17689dbc03ee8$export$ba1e2ffc633a60f5(s, c, r = [
                    t.ib
                ], a = [
                    t.hb
                ])) return 0;
                e.ib = r[0], e.hb = a[0];
            }
            return e.ob = null != t && t.ob, e.Kb = null == t || !t.Sd, e.da && (e.ob = e.ib < 3 * n / 4 && e.hb < 3 * i / 4, e.Kb = 0), 1;
        }
        function Er(t) {
            if (null == t) return 2;
            if (11 > t.S) {
                var e = t.f.RGBA;
                e.fb += (t.height - 1) * e.A, e.A = -e.A;
            } else e = t.f.kb, t = t.height, e.O += (t - 1) * e.fa, e.fa = -e.fa, e.N += (t - 1 >> 1) * e.Ab, e.Ab = -e.Ab, e.W += (t - 1 >> 1) * e.Db, e.Db = -e.Db, null != e.F && (e.J += (t - 1) * e.lb, e.lb = -e.lb);
            return 0;
        }
        function qr(t, e, r, n) {
            if (null == n || 0 >= t || 0 >= e) return 2;
            if (null != r) {
                if (r.Da) {
                    var i = r.cd, o = r.bd, s = -2 & r.v, c = -2 & r.j;
                    if (0 > s || 0 > c || 0 >= i || 0 >= o || s + i > t || c + o > e) return 2;
                    t = i, e = o;
                }
                if (r.da) {
                    if (!$ffb17689dbc03ee8$export$ba1e2ffc633a60f5(t, e, i = [
                        r.ib
                    ], o = [
                        r.hb
                    ])) return 2;
                    t = i[0], e = o[0];
                }
            }
            n.width = t, n.height = e;
            t: {
                var u = n.width, h = n.height;
                if (t = n.S, 0 >= u || 0 >= h || !(t >= En && 13 > t)) t = 2;
                else {
                    if (0 >= n.Rd && null == n.sd) {
                        s = o = i = e = 0;
                        var l = (c = u * zi[t]) * h;
                        if (11 > t || (o = (h + 1) / 2 * (e = (u + 1) / 2), 12 == t && (s = (i = u) * h)), null == (h = a15(l + 2 * o + s))) {
                            t = 1;
                            break t;
                        }
                        n.sd = h, 11 > t ? ((u = n.f.RGBA).eb = h, u.fb = 0, u.A = c, u.size = l) : ((u = n.f.kb).y = h, u.O = 0, u.fa = c, u.Fd = l, u.f = h, u.N = 0 + l, u.Ab = e, u.Cd = o, u.ea = h, u.W = 0 + l + o, u.Db = e, u.Ed = o, 12 == t && (u.F = h, u.J = 0 + l + 2 * o), u.Tc = s, u.lb = i);
                    }
                    if (e = 1, i = n.S, o = n.width, s = n.height, i >= En && 13 > i) {
                        if (11 > i) t = n.f.RGBA, e &= (c = Math.abs(t.A)) * (s - 1) + o <= t.size, e &= c >= o * zi[i], e &= null != t.eb;
                        else {
                            t = n.f.kb, c = (o + 1) / 2, l = (s + 1) / 2, u = Math.abs(t.fa);
                            h = Math.abs(t.Ab);
                            var f = Math.abs(t.Db), d = Math.abs(t.lb), p = d * (s - 1) + o;
                            e &= u * (s - 1) + o <= t.Fd, e &= h * (l - 1) + c <= t.Cd, e = (e &= f * (l - 1) + c <= t.Ed) & u >= o & h >= c & f >= c, e &= null != t.y, e &= null != t.f, e &= null != t.ea, 12 == i && (e &= d >= o, e &= p <= t.Tc, e &= null != t.F);
                        }
                    } else e = 0;
                    t = e ? 0 : 2;
                }
            }
            return 0 != t || null != r && r.fd && (t = Er(n)), t;
        }
        var Dr = 64, Rr = [
            0,
            1,
            3,
            7,
            15,
            31,
            63,
            127,
            255,
            511,
            1023,
            2047,
            4095,
            8191,
            16383,
            32767,
            65535,
            131071,
            262143,
            524287,
            1048575,
            2097151,
            4194303,
            8388607,
            16777215
        ], Tr = 24, Ur = 32, zr = 8, Hr = [
            0,
            0,
            1,
            1,
            2,
            2,
            2,
            2,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            3,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7
        ];
        R3("Predictor0", "PredictorAdd0"), t77.Predictor0 = function() {
            return 4278190080;
        }, t77.Predictor1 = function(t) {
            return t;
        }, t77.Predictor2 = function(t, e, r) {
            return e[r + 0];
        }, t77.Predictor3 = function(t, e, r) {
            return e[r + 1];
        }, t77.Predictor4 = function(t, e, r) {
            return e[r - 1];
        }, t77.Predictor5 = function(t, e, r) {
            return U1(U1(t, e[r + 1]), e[r + 0]);
        }, t77.Predictor6 = function(t, e, r) {
            return U1(t, e[r - 1]);
        }, t77.Predictor7 = function(t, e, r) {
            return U1(t, e[r + 0]);
        }, t77.Predictor8 = function(t, e, r) {
            return U1(e[r - 1], e[r + 0]);
        }, t77.Predictor9 = function(t, e, r) {
            return U1(e[r + 0], e[r + 1]);
        }, t77.Predictor10 = function(t, e, r) {
            return U1(U1(t, e[r - 1]), U1(e[r + 0], e[r + 1]));
        }, t77.Predictor11 = function(t, e, r) {
            var n = e[r + 0];
            return 0 >= W2(n >> 24 & 255, t >> 24 & 255, (e = e[r - 1]) >> 24 & 255) + W2(n >> 16 & 255, t >> 16 & 255, e >> 16 & 255) + W2(n >> 8 & 255, t >> 8 & 255, e >> 8 & 255) + W2(255 & n, 255 & t, 255 & e) ? n : t;
        }, t77.Predictor12 = function(t, e, r) {
            var n = e[r + 0];
            return (z((t >> 24 & 255) + (n >> 24 & 255) - ((e = e[r - 1]) >> 24 & 255)) << 24 | z((t >> 16 & 255) + (n >> 16 & 255) - (e >> 16 & 255)) << 16 | z((t >> 8 & 255) + (n >> 8 & 255) - (e >> 8 & 255)) << 8 | z((255 & t) + (255 & n) - (255 & e))) >>> 0;
        }, t77.Predictor13 = function(t, e, r) {
            var n = e[r - 1];
            return (H2((t = U1(t, e[r + 0])) >> 24 & 255, n >> 24 & 255) << 24 | H2(t >> 16 & 255, n >> 16 & 255) << 16 | H2(t >> 8 & 255, n >> 8 & 255) << 8 | H2(t >> 0 & 255, n >> 0 & 255)) >>> 0;
        };
        var Wr = t77.PredictorAdd0;
        t77.PredictorAdd1 = V2, R3("Predictor2", "PredictorAdd2"), R3("Predictor3", "PredictorAdd3"), R3("Predictor4", "PredictorAdd4"), R3("Predictor5", "PredictorAdd5"), R3("Predictor6", "PredictorAdd6"), R3("Predictor7", "PredictorAdd7"), R3("Predictor8", "PredictorAdd8"), R3("Predictor9", "PredictorAdd9"), R3("Predictor10", "PredictorAdd10"), R3("Predictor11", "PredictorAdd11"), R3("Predictor12", "PredictorAdd12"), R3("Predictor13", "PredictorAdd13");
        var Vr = t77.PredictorAdd2;
        X2("ColorIndexInverseTransform", "MapARGB", "32b", function(t) {
            return t >> 8 & 255;
        }, function(t) {
            return t;
        }), X2("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", function(t) {
            return t;
        }, function(t) {
            return t >> 8 & 255;
        });
        var Gr, Yr = t77.ColorIndexInverseTransform, Jr = t77.MapARGB, Xr = t77.VP8LColorIndexInverseTransformAlpha, Kr = t77.MapAlpha, Zr = t77.VP8LPredictorsAdd = [];
        Zr.length = 16, (t77.VP8LPredictors = []).length = 16, (t77.VP8LPredictorsAdd_C = []).length = 16, (t77.VP8LPredictors_C = []).length = 16;
        var $r, Qr, tn, en, rn, nn, an, on, sn, cn, un, hn, ln, fn, dn, pn, gn, mn, vn, bn, yn, wn, Nn, Ln, An, xn, Sn, _n, Pn = a15(511), kn = a15(2041), In = a15(225), Fn = a15(767), Cn = 0, jn = kn, On = In, Bn = Fn, Mn = Pn, En = 0, qn = 1, Dn = 2, Rn = 3, Tn = 4, Un = 5, zn = 6, Hn = 7, Wn = 8, Vn = 9, Gn = 10, Yn = [
            2,
            3,
            7
        ], Jn = [
            3,
            3,
            11
        ], Xn = [
            280,
            256,
            256,
            256,
            40
        ], Kn = [
            0,
            1,
            1,
            1,
            0
        ], Zn = [
            17,
            18,
            0,
            1,
            2,
            3,
            4,
            5,
            16,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
        ], $n = [
            24,
            7,
            23,
            25,
            40,
            6,
            39,
            41,
            22,
            26,
            38,
            42,
            56,
            5,
            55,
            57,
            21,
            27,
            54,
            58,
            37,
            43,
            72,
            4,
            71,
            73,
            20,
            28,
            53,
            59,
            70,
            74,
            36,
            44,
            88,
            69,
            75,
            52,
            60,
            3,
            87,
            89,
            19,
            29,
            86,
            90,
            35,
            45,
            68,
            76,
            85,
            91,
            51,
            61,
            104,
            2,
            103,
            105,
            18,
            30,
            102,
            106,
            34,
            46,
            84,
            92,
            67,
            77,
            101,
            107,
            50,
            62,
            120,
            1,
            119,
            121,
            83,
            93,
            17,
            31,
            100,
            108,
            66,
            78,
            118,
            122,
            33,
            47,
            117,
            123,
            49,
            63,
            99,
            109,
            82,
            94,
            0,
            116,
            124,
            65,
            79,
            16,
            32,
            98,
            110,
            48,
            115,
            125,
            81,
            95,
            64,
            114,
            126,
            97,
            111,
            80,
            113,
            127,
            96,
            112
        ], Qn = [
            2954,
            2956,
            2958,
            2962,
            2970,
            2986,
            3018,
            3082,
            3212,
            3468,
            3980,
            5004
        ], ti = 8, ei = [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            17,
            18,
            19,
            20,
            20,
            21,
            21,
            22,
            22,
            23,
            23,
            24,
            25,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            65,
            66,
            67,
            68,
            69,
            70,
            71,
            72,
            73,
            74,
            75,
            76,
            76,
            77,
            78,
            79,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            88,
            89,
            91,
            93,
            95,
            96,
            98,
            100,
            101,
            102,
            104,
            106,
            108,
            110,
            112,
            114,
            116,
            118,
            122,
            124,
            126,
            128,
            130,
            132,
            134,
            136,
            138,
            140,
            143,
            145,
            148,
            151,
            154,
            157
        ], ri = [
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            60,
            62,
            64,
            66,
            68,
            70,
            72,
            74,
            76,
            78,
            80,
            82,
            84,
            86,
            88,
            90,
            92,
            94,
            96,
            98,
            100,
            102,
            104,
            106,
            108,
            110,
            112,
            114,
            116,
            119,
            122,
            125,
            128,
            131,
            134,
            137,
            140,
            143,
            146,
            149,
            152,
            155,
            158,
            161,
            164,
            167,
            170,
            173,
            177,
            181,
            185,
            189,
            193,
            197,
            201,
            205,
            209,
            213,
            217,
            221,
            225,
            229,
            234,
            239,
            245,
            249,
            254,
            259,
            264,
            269,
            274,
            279,
            284
        ], ni = null, ii = [
            [
                173,
                148,
                140,
                0
            ],
            [
                176,
                155,
                140,
                135,
                0
            ],
            [
                180,
                157,
                141,
                134,
                130,
                0
            ],
            [
                254,
                254,
                243,
                230,
                196,
                177,
                153,
                140,
                133,
                130,
                129,
                0
            ]
        ], ai = [
            0,
            1,
            4,
            8,
            5,
            2,
            3,
            6,
            9,
            12,
            13,
            10,
            7,
            11,
            14,
            15
        ], oi = [
            -0,
            1,
            -1,
            2,
            -2,
            3,
            4,
            6,
            -3,
            5,
            -4,
            -5,
            -6,
            7,
            -7,
            8,
            -8,
            -9
        ], si = [
            [
                [
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        253,
                        136,
                        254,
                        255,
                        228,
                        219,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        189,
                        129,
                        242,
                        255,
                        227,
                        213,
                        255,
                        219,
                        128,
                        128,
                        128
                    ],
                    [
                        106,
                        126,
                        227,
                        252,
                        214,
                        209,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        98,
                        248,
                        255,
                        236,
                        226,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        181,
                        133,
                        238,
                        254,
                        221,
                        234,
                        255,
                        154,
                        128,
                        128,
                        128
                    ],
                    [
                        78,
                        134,
                        202,
                        247,
                        198,
                        180,
                        255,
                        219,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        185,
                        249,
                        255,
                        243,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        184,
                        150,
                        247,
                        255,
                        236,
                        224,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        77,
                        110,
                        216,
                        255,
                        236,
                        230,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        101,
                        251,
                        255,
                        241,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        170,
                        139,
                        241,
                        252,
                        236,
                        209,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        37,
                        116,
                        196,
                        243,
                        228,
                        255,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        204,
                        254,
                        255,
                        245,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        207,
                        160,
                        250,
                        255,
                        238,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        102,
                        103,
                        231,
                        255,
                        211,
                        171,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        152,
                        252,
                        255,
                        240,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        177,
                        135,
                        243,
                        255,
                        234,
                        225,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        80,
                        129,
                        211,
                        255,
                        194,
                        224,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        246,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ]
            ],
            [
                [
                    [
                        198,
                        35,
                        237,
                        223,
                        193,
                        187,
                        162,
                        160,
                        145,
                        155,
                        62
                    ],
                    [
                        131,
                        45,
                        198,
                        221,
                        172,
                        176,
                        220,
                        157,
                        252,
                        221,
                        1
                    ],
                    [
                        68,
                        47,
                        146,
                        208,
                        149,
                        167,
                        221,
                        162,
                        255,
                        223,
                        128
                    ]
                ],
                [
                    [
                        1,
                        149,
                        241,
                        255,
                        221,
                        224,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        184,
                        141,
                        234,
                        253,
                        222,
                        220,
                        255,
                        199,
                        128,
                        128,
                        128
                    ],
                    [
                        81,
                        99,
                        181,
                        242,
                        176,
                        190,
                        249,
                        202,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        129,
                        232,
                        253,
                        214,
                        197,
                        242,
                        196,
                        255,
                        255,
                        128
                    ],
                    [
                        99,
                        121,
                        210,
                        250,
                        201,
                        198,
                        255,
                        202,
                        128,
                        128,
                        128
                    ],
                    [
                        23,
                        91,
                        163,
                        242,
                        170,
                        187,
                        247,
                        210,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        200,
                        246,
                        255,
                        234,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        109,
                        178,
                        241,
                        255,
                        231,
                        245,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        44,
                        130,
                        201,
                        253,
                        205,
                        192,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        132,
                        239,
                        251,
                        219,
                        209,
                        255,
                        165,
                        128,
                        128,
                        128
                    ],
                    [
                        94,
                        136,
                        225,
                        251,
                        218,
                        190,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        22,
                        100,
                        174,
                        245,
                        186,
                        161,
                        255,
                        199,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        182,
                        249,
                        255,
                        232,
                        235,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        124,
                        143,
                        241,
                        255,
                        227,
                        234,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        35,
                        77,
                        181,
                        251,
                        193,
                        211,
                        255,
                        205,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        157,
                        247,
                        255,
                        236,
                        231,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        121,
                        141,
                        235,
                        255,
                        225,
                        227,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        45,
                        99,
                        188,
                        251,
                        195,
                        217,
                        255,
                        224,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        1,
                        251,
                        255,
                        213,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        203,
                        1,
                        248,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        137,
                        1,
                        177,
                        255,
                        224,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ]
            ],
            [
                [
                    [
                        253,
                        9,
                        248,
                        251,
                        207,
                        208,
                        255,
                        192,
                        128,
                        128,
                        128
                    ],
                    [
                        175,
                        13,
                        224,
                        243,
                        193,
                        185,
                        249,
                        198,
                        255,
                        255,
                        128
                    ],
                    [
                        73,
                        17,
                        171,
                        221,
                        161,
                        179,
                        236,
                        167,
                        255,
                        234,
                        128
                    ]
                ],
                [
                    [
                        1,
                        95,
                        247,
                        253,
                        212,
                        183,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        239,
                        90,
                        244,
                        250,
                        211,
                        209,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        155,
                        77,
                        195,
                        248,
                        188,
                        195,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        24,
                        239,
                        251,
                        218,
                        219,
                        255,
                        205,
                        128,
                        128,
                        128
                    ],
                    [
                        201,
                        51,
                        219,
                        255,
                        196,
                        186,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        69,
                        46,
                        190,
                        239,
                        201,
                        218,
                        255,
                        228,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        191,
                        251,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        223,
                        165,
                        249,
                        255,
                        213,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        141,
                        124,
                        248,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        16,
                        248,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        190,
                        36,
                        230,
                        255,
                        236,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        149,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        226,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        247,
                        192,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        240,
                        128,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        134,
                        252,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        213,
                        62,
                        250,
                        255,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        55,
                        93,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ]
            ],
            [
                [
                    [
                        202,
                        24,
                        213,
                        235,
                        186,
                        191,
                        220,
                        160,
                        240,
                        175,
                        255
                    ],
                    [
                        126,
                        38,
                        182,
                        232,
                        169,
                        184,
                        228,
                        174,
                        255,
                        187,
                        128
                    ],
                    [
                        61,
                        46,
                        138,
                        219,
                        151,
                        178,
                        240,
                        170,
                        255,
                        216,
                        128
                    ]
                ],
                [
                    [
                        1,
                        112,
                        230,
                        250,
                        199,
                        191,
                        247,
                        159,
                        255,
                        255,
                        128
                    ],
                    [
                        166,
                        109,
                        228,
                        252,
                        211,
                        215,
                        255,
                        174,
                        128,
                        128,
                        128
                    ],
                    [
                        39,
                        77,
                        162,
                        232,
                        172,
                        180,
                        245,
                        178,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        52,
                        220,
                        246,
                        198,
                        199,
                        249,
                        220,
                        255,
                        255,
                        128
                    ],
                    [
                        124,
                        74,
                        191,
                        243,
                        183,
                        193,
                        250,
                        221,
                        255,
                        255,
                        128
                    ],
                    [
                        24,
                        71,
                        130,
                        219,
                        154,
                        170,
                        243,
                        182,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        182,
                        225,
                        249,
                        219,
                        240,
                        255,
                        224,
                        128,
                        128,
                        128
                    ],
                    [
                        149,
                        150,
                        226,
                        252,
                        216,
                        205,
                        255,
                        171,
                        128,
                        128,
                        128
                    ],
                    [
                        28,
                        108,
                        170,
                        242,
                        183,
                        194,
                        254,
                        223,
                        255,
                        255,
                        128
                    ]
                ],
                [
                    [
                        1,
                        81,
                        230,
                        252,
                        204,
                        203,
                        255,
                        192,
                        128,
                        128,
                        128
                    ],
                    [
                        123,
                        102,
                        209,
                        247,
                        188,
                        196,
                        255,
                        233,
                        128,
                        128,
                        128
                    ],
                    [
                        20,
                        95,
                        153,
                        243,
                        164,
                        173,
                        255,
                        203,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        222,
                        248,
                        255,
                        216,
                        213,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        168,
                        175,
                        246,
                        252,
                        235,
                        205,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        47,
                        116,
                        215,
                        255,
                        211,
                        212,
                        255,
                        255,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        121,
                        236,
                        253,
                        212,
                        214,
                        255,
                        255,
                        128,
                        128,
                        128
                    ],
                    [
                        141,
                        84,
                        213,
                        252,
                        201,
                        202,
                        255,
                        219,
                        128,
                        128,
                        128
                    ],
                    [
                        42,
                        80,
                        160,
                        240,
                        162,
                        185,
                        255,
                        205,
                        128,
                        128,
                        128
                    ]
                ],
                [
                    [
                        1,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        244,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ],
                    [
                        238,
                        1,
                        255,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128,
                        128
                    ]
                ]
            ]
        ], ci = [
            [
                [
                    231,
                    120,
                    48,
                    89,
                    115,
                    113,
                    120,
                    152,
                    112
                ],
                [
                    152,
                    179,
                    64,
                    126,
                    170,
                    118,
                    46,
                    70,
                    95
                ],
                [
                    175,
                    69,
                    143,
                    80,
                    85,
                    82,
                    72,
                    155,
                    103
                ],
                [
                    56,
                    58,
                    10,
                    171,
                    218,
                    189,
                    17,
                    13,
                    152
                ],
                [
                    114,
                    26,
                    17,
                    163,
                    44,
                    195,
                    21,
                    10,
                    173
                ],
                [
                    121,
                    24,
                    80,
                    195,
                    26,
                    62,
                    44,
                    64,
                    85
                ],
                [
                    144,
                    71,
                    10,
                    38,
                    171,
                    213,
                    144,
                    34,
                    26
                ],
                [
                    170,
                    46,
                    55,
                    19,
                    136,
                    160,
                    33,
                    206,
                    71
                ],
                [
                    63,
                    20,
                    8,
                    114,
                    114,
                    208,
                    12,
                    9,
                    226
                ],
                [
                    81,
                    40,
                    11,
                    96,
                    182,
                    84,
                    29,
                    16,
                    36
                ]
            ],
            [
                [
                    134,
                    183,
                    89,
                    137,
                    98,
                    101,
                    106,
                    165,
                    148
                ],
                [
                    72,
                    187,
                    100,
                    130,
                    157,
                    111,
                    32,
                    75,
                    80
                ],
                [
                    66,
                    102,
                    167,
                    99,
                    74,
                    62,
                    40,
                    234,
                    128
                ],
                [
                    41,
                    53,
                    9,
                    178,
                    241,
                    141,
                    26,
                    8,
                    107
                ],
                [
                    74,
                    43,
                    26,
                    146,
                    73,
                    166,
                    49,
                    23,
                    157
                ],
                [
                    65,
                    38,
                    105,
                    160,
                    51,
                    52,
                    31,
                    115,
                    128
                ],
                [
                    104,
                    79,
                    12,
                    27,
                    217,
                    255,
                    87,
                    17,
                    7
                ],
                [
                    87,
                    68,
                    71,
                    44,
                    114,
                    51,
                    15,
                    186,
                    23
                ],
                [
                    47,
                    41,
                    14,
                    110,
                    182,
                    183,
                    21,
                    17,
                    194
                ],
                [
                    66,
                    45,
                    25,
                    102,
                    197,
                    189,
                    23,
                    18,
                    22
                ]
            ],
            [
                [
                    88,
                    88,
                    147,
                    150,
                    42,
                    46,
                    45,
                    196,
                    205
                ],
                [
                    43,
                    97,
                    183,
                    117,
                    85,
                    38,
                    35,
                    179,
                    61
                ],
                [
                    39,
                    53,
                    200,
                    87,
                    26,
                    21,
                    43,
                    232,
                    171
                ],
                [
                    56,
                    34,
                    51,
                    104,
                    114,
                    102,
                    29,
                    93,
                    77
                ],
                [
                    39,
                    28,
                    85,
                    171,
                    58,
                    165,
                    90,
                    98,
                    64
                ],
                [
                    34,
                    22,
                    116,
                    206,
                    23,
                    34,
                    43,
                    166,
                    73
                ],
                [
                    107,
                    54,
                    32,
                    26,
                    51,
                    1,
                    81,
                    43,
                    31
                ],
                [
                    68,
                    25,
                    106,
                    22,
                    64,
                    171,
                    36,
                    225,
                    114
                ],
                [
                    34,
                    19,
                    21,
                    102,
                    132,
                    188,
                    16,
                    76,
                    124
                ],
                [
                    62,
                    18,
                    78,
                    95,
                    85,
                    57,
                    50,
                    48,
                    51
                ]
            ],
            [
                [
                    193,
                    101,
                    35,
                    159,
                    215,
                    111,
                    89,
                    46,
                    111
                ],
                [
                    60,
                    148,
                    31,
                    172,
                    219,
                    228,
                    21,
                    18,
                    111
                ],
                [
                    112,
                    113,
                    77,
                    85,
                    179,
                    255,
                    38,
                    120,
                    114
                ],
                [
                    40,
                    42,
                    1,
                    196,
                    245,
                    209,
                    10,
                    25,
                    109
                ],
                [
                    88,
                    43,
                    29,
                    140,
                    166,
                    213,
                    37,
                    43,
                    154
                ],
                [
                    61,
                    63,
                    30,
                    155,
                    67,
                    45,
                    68,
                    1,
                    209
                ],
                [
                    100,
                    80,
                    8,
                    43,
                    154,
                    1,
                    51,
                    26,
                    71
                ],
                [
                    142,
                    78,
                    78,
                    16,
                    255,
                    128,
                    34,
                    197,
                    171
                ],
                [
                    41,
                    40,
                    5,
                    102,
                    211,
                    183,
                    4,
                    1,
                    221
                ],
                [
                    51,
                    50,
                    17,
                    168,
                    209,
                    192,
                    23,
                    25,
                    82
                ]
            ],
            [
                [
                    138,
                    31,
                    36,
                    171,
                    27,
                    166,
                    38,
                    44,
                    229
                ],
                [
                    67,
                    87,
                    58,
                    169,
                    82,
                    115,
                    26,
                    59,
                    179
                ],
                [
                    63,
                    59,
                    90,
                    180,
                    59,
                    166,
                    93,
                    73,
                    154
                ],
                [
                    40,
                    40,
                    21,
                    116,
                    143,
                    209,
                    34,
                    39,
                    175
                ],
                [
                    47,
                    15,
                    16,
                    183,
                    34,
                    223,
                    49,
                    45,
                    183
                ],
                [
                    46,
                    17,
                    33,
                    183,
                    6,
                    98,
                    15,
                    32,
                    183
                ],
                [
                    57,
                    46,
                    22,
                    24,
                    128,
                    1,
                    54,
                    17,
                    37
                ],
                [
                    65,
                    32,
                    73,
                    115,
                    28,
                    128,
                    23,
                    128,
                    205
                ],
                [
                    40,
                    3,
                    9,
                    115,
                    51,
                    192,
                    18,
                    6,
                    223
                ],
                [
                    87,
                    37,
                    9,
                    115,
                    59,
                    77,
                    64,
                    21,
                    47
                ]
            ],
            [
                [
                    104,
                    55,
                    44,
                    218,
                    9,
                    54,
                    53,
                    130,
                    226
                ],
                [
                    64,
                    90,
                    70,
                    205,
                    40,
                    41,
                    23,
                    26,
                    57
                ],
                [
                    54,
                    57,
                    112,
                    184,
                    5,
                    41,
                    38,
                    166,
                    213
                ],
                [
                    30,
                    34,
                    26,
                    133,
                    152,
                    116,
                    10,
                    32,
                    134
                ],
                [
                    39,
                    19,
                    53,
                    221,
                    26,
                    114,
                    32,
                    73,
                    255
                ],
                [
                    31,
                    9,
                    65,
                    234,
                    2,
                    15,
                    1,
                    118,
                    73
                ],
                [
                    75,
                    32,
                    12,
                    51,
                    192,
                    255,
                    160,
                    43,
                    51
                ],
                [
                    88,
                    31,
                    35,
                    67,
                    102,
                    85,
                    55,
                    186,
                    85
                ],
                [
                    56,
                    21,
                    23,
                    111,
                    59,
                    205,
                    45,
                    37,
                    192
                ],
                [
                    55,
                    38,
                    70,
                    124,
                    73,
                    102,
                    1,
                    34,
                    98
                ]
            ],
            [
                [
                    125,
                    98,
                    42,
                    88,
                    104,
                    85,
                    117,
                    175,
                    82
                ],
                [
                    95,
                    84,
                    53,
                    89,
                    128,
                    100,
                    113,
                    101,
                    45
                ],
                [
                    75,
                    79,
                    123,
                    47,
                    51,
                    128,
                    81,
                    171,
                    1
                ],
                [
                    57,
                    17,
                    5,
                    71,
                    102,
                    57,
                    53,
                    41,
                    49
                ],
                [
                    38,
                    33,
                    13,
                    121,
                    57,
                    73,
                    26,
                    1,
                    85
                ],
                [
                    41,
                    10,
                    67,
                    138,
                    77,
                    110,
                    90,
                    47,
                    114
                ],
                [
                    115,
                    21,
                    2,
                    10,
                    102,
                    255,
                    166,
                    23,
                    6
                ],
                [
                    101,
                    29,
                    16,
                    10,
                    85,
                    128,
                    101,
                    196,
                    26
                ],
                [
                    57,
                    18,
                    10,
                    102,
                    102,
                    213,
                    34,
                    20,
                    43
                ],
                [
                    117,
                    20,
                    15,
                    36,
                    163,
                    128,
                    68,
                    1,
                    26
                ]
            ],
            [
                [
                    102,
                    61,
                    71,
                    37,
                    34,
                    53,
                    31,
                    243,
                    192
                ],
                [
                    69,
                    60,
                    71,
                    38,
                    73,
                    119,
                    28,
                    222,
                    37
                ],
                [
                    68,
                    45,
                    128,
                    34,
                    1,
                    47,
                    11,
                    245,
                    171
                ],
                [
                    62,
                    17,
                    19,
                    70,
                    146,
                    85,
                    55,
                    62,
                    70
                ],
                [
                    37,
                    43,
                    37,
                    154,
                    100,
                    163,
                    85,
                    160,
                    1
                ],
                [
                    63,
                    9,
                    92,
                    136,
                    28,
                    64,
                    32,
                    201,
                    85
                ],
                [
                    75,
                    15,
                    9,
                    9,
                    64,
                    255,
                    184,
                    119,
                    16
                ],
                [
                    86,
                    6,
                    28,
                    5,
                    64,
                    255,
                    25,
                    248,
                    1
                ],
                [
                    56,
                    8,
                    17,
                    132,
                    137,
                    255,
                    55,
                    116,
                    128
                ],
                [
                    58,
                    15,
                    20,
                    82,
                    135,
                    57,
                    26,
                    121,
                    40
                ]
            ],
            [
                [
                    164,
                    50,
                    31,
                    137,
                    154,
                    133,
                    25,
                    35,
                    218
                ],
                [
                    51,
                    103,
                    44,
                    131,
                    131,
                    123,
                    31,
                    6,
                    158
                ],
                [
                    86,
                    40,
                    64,
                    135,
                    148,
                    224,
                    45,
                    183,
                    128
                ],
                [
                    22,
                    26,
                    17,
                    131,
                    240,
                    154,
                    14,
                    1,
                    209
                ],
                [
                    45,
                    16,
                    21,
                    91,
                    64,
                    222,
                    7,
                    1,
                    197
                ],
                [
                    56,
                    21,
                    39,
                    155,
                    60,
                    138,
                    23,
                    102,
                    213
                ],
                [
                    83,
                    12,
                    13,
                    54,
                    192,
                    255,
                    68,
                    47,
                    28
                ],
                [
                    85,
                    26,
                    85,
                    85,
                    128,
                    128,
                    32,
                    146,
                    171
                ],
                [
                    18,
                    11,
                    7,
                    63,
                    144,
                    171,
                    4,
                    4,
                    246
                ],
                [
                    35,
                    27,
                    10,
                    146,
                    174,
                    171,
                    12,
                    26,
                    128
                ]
            ],
            [
                [
                    190,
                    80,
                    35,
                    99,
                    180,
                    80,
                    126,
                    54,
                    45
                ],
                [
                    85,
                    126,
                    47,
                    87,
                    176,
                    51,
                    41,
                    20,
                    32
                ],
                [
                    101,
                    75,
                    128,
                    139,
                    118,
                    146,
                    116,
                    128,
                    85
                ],
                [
                    56,
                    41,
                    15,
                    176,
                    236,
                    85,
                    37,
                    9,
                    62
                ],
                [
                    71,
                    30,
                    17,
                    119,
                    118,
                    255,
                    17,
                    18,
                    138
                ],
                [
                    101,
                    38,
                    60,
                    138,
                    55,
                    70,
                    43,
                    26,
                    142
                ],
                [
                    146,
                    36,
                    19,
                    30,
                    171,
                    255,
                    97,
                    27,
                    20
                ],
                [
                    138,
                    45,
                    61,
                    62,
                    219,
                    1,
                    81,
                    188,
                    64
                ],
                [
                    32,
                    41,
                    20,
                    117,
                    151,
                    142,
                    20,
                    21,
                    163
                ],
                [
                    112,
                    19,
                    12,
                    61,
                    195,
                    128,
                    48,
                    4,
                    24
                ]
            ]
        ], ui = [
            [
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        176,
                        246,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        223,
                        241,
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        249,
                        253,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        244,
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        234,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        246,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        239,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        248,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        251,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        251,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        253,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        250,
                        255,
                        254,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ]
            ],
            [
                [
                    [
                        217,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        225,
                        252,
                        241,
                        253,
                        255,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        234,
                        250,
                        241,
                        250,
                        253,
                        255,
                        253,
                        254,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        223,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        238,
                        253,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        248,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        249,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        247,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        250,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ]
            ],
            [
                [
                    [
                        186,
                        251,
                        250,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        234,
                        251,
                        244,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        251,
                        251,
                        243,
                        253,
                        254,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        236,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        251,
                        253,
                        253,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ]
            ],
            [
                [
                    [
                        248,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        250,
                        254,
                        252,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        248,
                        254,
                        249,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        253,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        246,
                        253,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        252,
                        254,
                        251,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        254,
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        248,
                        254,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        253,
                        255,
                        254,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        251,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        245,
                        251,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        253,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        251,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        252,
                        253,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        252,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        249,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        253,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        250,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ],
                [
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        254,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ],
                    [
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255,
                        255
                    ]
                ]
            ]
        ], hi = [
            0,
            1,
            2,
            3,
            6,
            4,
            5,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            7,
            0
        ], li = [], fi = [], di = [], pi = 1, gi = 2, mi = [], vi = [];
        vr("UpsampleRgbLinePair", Ar, 3), vr("UpsampleBgrLinePair", xr, 3), vr("UpsampleRgbaLinePair", Ir, 4), vr("UpsampleBgraLinePair", kr, 4), vr("UpsampleArgbLinePair", Pr, 4), vr("UpsampleRgba4444LinePair", _r, 2), vr("UpsampleRgb565LinePair", Sr, 2);
        var bi = t77.UpsampleRgbLinePair, yi = t77.UpsampleBgrLinePair, wi = t77.UpsampleRgbaLinePair, Ni = t77.UpsampleBgraLinePair, Li = t77.UpsampleArgbLinePair, Ai = t77.UpsampleRgba4444LinePair, xi = t77.UpsampleRgb565LinePair, Si = 16, _i = 1 << Si - 1, Pi = -227, ki = 482, Ii = 6, Fi = (256 << Ii) - 1, Ci = 0, ji = a15(256), Oi = a15(256), Bi = a15(256), Mi = a15(256), Ei = a15(ki - Pi), qi = a15(ki - Pi);
        Fr("YuvToRgbRow", Ar, 3), Fr("YuvToBgrRow", xr, 3), Fr("YuvToRgbaRow", Ir, 4), Fr("YuvToBgraRow", kr, 4), Fr("YuvToArgbRow", Pr, 4), Fr("YuvToRgba4444Row", _r, 2), Fr("YuvToRgb565Row", Sr, 2);
        var Di = [
            0,
            4,
            8,
            12,
            128,
            132,
            136,
            140,
            256,
            260,
            264,
            268,
            384,
            388,
            392,
            396
        ], Ri = [
            0,
            2,
            8
        ], Ti = [
            8,
            7,
            6,
            4,
            4,
            2,
            2,
            2,
            1,
            1,
            1,
            1
        ], Ui = 1;
        this.WebPDecodeRGBA = function(t81, r36, n22, i21, a16) {
            var o = qn, s = new rr, c = new ot2;
            s.ba = c, c.S = o, c.width = [
                c.width
            ], c.height = [
                c.height
            ];
            var u = c.width, h = c.height, l = new st2;
            if (null == l || null == t81) var f = 2;
            else e49(null != l), f = Br(t81, r36, n22, l.width, l.height, l.Pd, l.Qd, l.format, null);
            if (0 != f ? u = 0 : (null != u && (u[0] = l.width[0]), null != h && (h[0] = l.height[0]), u = 1), u) {
                c.width = c.width[0], c.height = c.height[0], null != i21 && (i21[0] = c.width), null != a16 && (a16[0] = c.height);
                t: {
                    if (i21 = new Gt1, (a16 = new nr).data = t81, a16.w = r36, a16.ha = n22, a16.kd = 1, r36 = [
                        0
                    ], e49(null != a16), (0 == (t81 = Br(a16.data, a16.w, a16.ha, null, null, null, r36, null, a16)) || 7 == t81) && r36[0] && (t81 = 4), 0 == (r36 = t81)) {
                        if (e49(null != s), i21.data = a16.data, i21.w = a16.w + a16.offset, i21.ha = a16.ha - a16.offset, i21.put = $ffb17689dbc03ee8$export$9e021dd9568dc486, i21.ac = $ffb17689dbc03ee8$export$a47202eb3f827bb2, i21.bc = $ffb17689dbc03ee8$export$f2239d28df5f43bd, i21.ma = s, a16.xa) {
                            if (null == (t81 = kt1())) {
                                s = 1;
                                break t;
                            }
                            if ((function(t, r) {
                                var n = [
                                    0
                                ], i = [
                                    0
                                ], a = [
                                    0
                                ];
                                e: for(;;){
                                    if (null == t) return 0;
                                    if (null == r) return t.a = 2, 0;
                                    if (t.l = r, t.a = 0, v7(t.m, r.data, r.w, r.ha), !$ffb17689dbc03ee8$export$4af052e7e598ad1a(t.m, n, i, a)) {
                                        t.a = 3;
                                        break e;
                                    }
                                    if (t.xb = gi, r.width = n[0], r.height = i[0], !It(n[0], i[0], 1, t, null)) break e;
                                    return 1;
                                }
                                return e49(0 != t.a), 0;
                            })(t81, i21)) {
                                if (i21 = 0 == (r36 = qr(i21.width, i21.height, s.Oa, s.ba))) {
                                    e: {
                                        i21 = t81;
                                        r: for(;;){
                                            if (null == i21) {
                                                i21 = 0;
                                                break e;
                                            }
                                            if (e49(null != i21.s.yc), e49(null != i21.s.Ya), e49(0 < i21.s.Wb), e49(null != (n22 = i21.l)), e49(null != (a16 = n22.ma)), 0 != i21.xb) {
                                                if (i21.ca = a16.ba, i21.tb = a16.tb, e49(null != i21.ca), !Mr(a16.Oa, n22, Rn)) {
                                                    i21.a = 2;
                                                    break r;
                                                }
                                                if (!Ft1(i21, n22.width)) break r;
                                                if (n22.da) break r;
                                                if ((n22.da || nt2(i21.ca.S)) && mr(), 11 > i21.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != i21.ca.f.kb.F && mr()), i21.Pb && 0 < i21.s.ua && null == i21.s.vb.X && !O3(i21.s.vb, i21.s.Wa.Xa)) {
                                                    i21.a = 1;
                                                    break r;
                                                }
                                                i21.xb = 0;
                                            }
                                            if (!_t(i21, i21.V, i21.Ba, i21.c, i21.i, n22.o, $ffb17689dbc03ee8$export$c48d8668f8cea64d)) break r;
                                            a16.Dc = i21.Ma, i21 = 1;
                                            break e;
                                        }
                                        e49(0 != i21.a), i21 = 0;
                                    }
                                    i21 = !i21;
                                }
                                i21 && (r36 = t81.a);
                            } else r36 = t81.a;
                        } else {
                            t81 = new Yt1;
                            if (t81.Fa = a16.na, t81.P = a16.P, t81.qc = a16.Sa, Kt1(t81, i21)) {
                                if (0 == (r36 = qr(i21.width, i21.height, s.Oa, s.ba))) {
                                    if (t81.Aa = 0, n22 = s.Oa, e49(null != (a16 = t81)), null != n22) {
                                        if (0 < (u = 0 > (u = n22.Md) ? 0 : 100 < u ? 255 : 255 * u / 100)) {
                                            for(h = l = 0; 4 > h; ++h)12 > (f = a16.pb[h]).lc && (f.ia = u * Ti[0 > f.lc ? 0 : f.lc] >> 3), l |= f.ia;
                                            l && (alert("todo:VP8InitRandom"), a16.ia = 1);
                                        }
                                        a16.Ga = n22.Id, 100 < a16.Ga ? a16.Ga = 100 : 0 > a16.Ga && (a16.Ga = 0);
                                    }
                                    Qt1(t81, i21) || (r36 = t81.a);
                                }
                            } else r36 = t81.a;
                        }
                        0 == r36 && null != s.Oa && s.Oa.fd && (r36 = Er(s.ba));
                    }
                    s = r36;
                }
                o = 0 != s ? null : 11 > o ? c.f.RGBA.eb : c.f.kb.y;
            } else o = null;
            return o;
        };
        var zi = [
            3,
            4,
            3,
            4,
            4,
            2,
            2,
            4,
            4,
            4,
            2,
            1,
            1
        ];
    };
    function u8(t, e) {
        for(var r = "", n = 0; n < 4; n++)r += String.fromCharCode(t[e++]);
        return r;
    }
    function h8(t, e) {
        return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16) >>> 0;
    }
    function l5(t, e) {
        return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0;
    }
    new c10;
    var f4 = [
        0
    ], d6 = [
        0
    ], p7 = [], g7 = new c10, m6 = t75, v6 = function(t82, e) {
        var r37 = {
        }, n23 = 0, i22 = !1, a = 0, o = 0;
        if (r37.frames = [], !/** @license
   * Copyright (c) 2017 Dominik Homberger
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  https://webpjs.appspot.com
  WebPRiffParser dominikhlbg@gmail.com
  */ function(t, e, r, n) {
            for(var i = 0; i < n; i++)if (t[e + i] != r.charCodeAt(i)) return !0;
            return !1;
        }(t82, e, "RIFF", 4)) {
            var s, c;
            l5(t82, e += 4);
            for(e += 8; e < t82.length;){
                var f = u8(t82, e), d = l5(t82, e += 4);
                e += 4;
                var p = d + (1 & d);
                switch(f){
                    case "VP8 ":
                    case "VP8L":
                        void 0 === r37.frames[n23] && (r37.frames[n23] = {
                        });
                        (v = r37.frames[n23]).src_off = i22 ? o : e - 8, v.src_size = a + d + 8, n23++, i22 && (i22 = !1, a = 0, o = 0);
                        break;
                    case "VP8X":
                        (v = r37.header = {
                        }).feature_flags = t82[e];
                        var g = e + 4;
                        v.canvas_width = 1 + h8(t82, g);
                        g += 3;
                        v.canvas_height = 1 + h8(t82, g);
                        g += 3;
                        break;
                    case "ALPH":
                        i22 = !0, a = p + 8, o = e - 8;
                        break;
                    case "ANIM":
                        (v = r37.header).bgcolor = l5(t82, e);
                        g = e + 4;
                        v.loop_count = (s = t82)[(c = g) + 0] << 0 | s[c + 1] << 8;
                        g += 2;
                        break;
                    case "ANMF":
                        var m, v;
                        (v = r37.frames[n23] = {
                        }).offset_x = 2 * h8(t82, e), e += 3, v.offset_y = 2 * h8(t82, e), e += 3, v.width = 1 + h8(t82, e), e += 3, v.height = 1 + h8(t82, e), e += 3, v.duration = h8(t82, e), e += 3, m = t82[e++], v.dispose = 1 & m, v.blend = m >> 1 & 1;
                }
                "ANMF" != f && (e += p);
            }
            return r37;
        }
    }(m6, 0);
    v6.response = m6, v6.rgbaoutput = !0, v6.dataurl = !1;
    var b5 = v6.header ? v6.header : null, y6 = v6.frames ? v6.frames : null;
    if (b5) {
        b5.loop_counter = b5.loop_count, f4 = [
            b5.canvas_height
        ], d6 = [
            b5.canvas_width
        ];
        for(var w6 = 0; w6 < y6.length && 0 != y6[w6].blend; w6++);
    }
    var N5 = y6[0], L5 = g7.WebPDecodeRGBA(m6, N5.src_off, N5.src_size, d6, f4);
    N5.rgba = L5, N5.imgwidth = d6[0], N5.imgheight = f4[0];
    for(var A4 = 0; A4 < d6[0] * f4[0] * 4; A4++)p7[A4] = L5[A4];
    return this.width = d6, this.height = f4, this.data = p7, this;
}

!function(t83) {
    var r38 = function() {
        return "function" == typeof $3202ecda957ada6e$export$f87121a6d50aff25;
    }, n24 = function(r, n, a, h) {
        var l = 4, f = s13;
        switch(h){
            case t83.image_compression.FAST:
                l = 1, f = o18;
                break;
            case t83.image_compression.MEDIUM:
                l = 6, f = c12;
                break;
            case t83.image_compression.SLOW:
                l = 9, f = u10;
        }
        r = i23(r, n, a, f);
        var d = $3202ecda957ada6e$export$f87121a6d50aff25(r, {
            level: l
        });
        return t83.__addimage__.arrayBufferToBinaryString(d);
    }, i23 = function(t, e, r, n) {
        for(var i, a, o, s = t.length / e, c = new Uint8Array(t.length + s), u = l7(), h = 0; h < s; h += 1){
            if (o = h * e, i = t.subarray(o, o + e), n) c.set(n(i, r, a), o + h);
            else {
                for(var d, p = u.length, g = []; d < p; d += 1)g[d] = u[d](i, r, a);
                var m = f6(g.concat());
                c.set(g[m], o + h);
            }
            a = i;
        }
        return c;
    }, a17 = function(t) {
        var e = Array.apply([], t);
        return e.unshift(0), e;
    }, o18 = function(t, e) {
        var r, n = [], i = t.length;
        n[0] = 1;
        for(var a = 0; a < i; a += 1)r = t[a - e] || 0, n[a + 1] = t[a] - r + 256 & 255;
        return n;
    }, s13 = function(t, e, r) {
        var n, i = [], a = t.length;
        i[0] = 2;
        for(var o = 0; o < a; o += 1)n = r && r[o] || 0, i[o + 1] = t[o] - n + 256 & 255;
        return i;
    }, c12 = function(t, e, r) {
        var n, i, a = [], o = t.length;
        a[0] = 3;
        for(var s = 0; s < o; s += 1)n = t[s - e] || 0, i = r && r[s] || 0, a[s + 1] = t[s] + 256 - (n + i >>> 1) & 255;
        return a;
    }, u10 = function(t, e, r) {
        var n, i, a, o, s = [], c = t.length;
        s[0] = 4;
        for(var u = 0; u < c; u += 1)n = t[u - e] || 0, i = r && r[u] || 0, a = r && r[u - e] || 0, o = h10(n, i, a), s[u + 1] = t[u] - o + 256 & 255;
        return s;
    }, h10 = function(t, e, r) {
        if (t === e && e === r) return t;
        var n = Math.abs(e - r), i = Math.abs(t - r), a = Math.abs(t + e - r - r);
        return n <= i && n <= a ? t : i <= a ? e : r;
    }, l7 = function() {
        return [
            a17,
            o18,
            s13,
            c12,
            u10
        ];
    }, f6 = function(t84) {
        var e52 = t84.map(function(t85) {
            return t85.reduce(function(t, e) {
                return t + Math.abs(e);
            }, 0);
        });
        return e52.indexOf(Math.min.apply(null, e52));
    };
    t83.processPNG = function(e53, i, a, o) {
        var s, c, u, h, l, f, d, p, g, m, v, b, y, w, N, L = this.decode.FLATE_DECODE, A = "";
        if (this.__addimage__.isArrayBuffer(e53) && (e53 = new Uint8Array(e53)), this.__addimage__.isArrayBufferView(e53)) {
            if (e53 = (u = new $ffb17689dbc03ee8$var$Kt(e53)).imgData, c = u.bits, s = u.colorSpace, l = u.colors, -1 !== [
                4,
                6
            ].indexOf(u.colorType)) {
                if (8 === u.bits) {
                    g = (p = 32 == u.pixelBitlength ? new Uint32Array(u.decodePixels().buffer) : 16 == u.pixelBitlength ? new Uint16Array(u.decodePixels().buffer) : new Uint8Array(u.decodePixels().buffer)).length, v = new Uint8Array(g * u.colors), m = new Uint8Array(g);
                    var x, S = u.pixelBitlength - u.bits;
                    for(w = 0, N = 0; w < g; w++){
                        for(y = p[w], x = 0; x < S;)v[N++] = y >>> x & 255, x += u.bits;
                        m[w] = y >>> x & 255;
                    }
                }
                if (16 === u.bits) {
                    g = (p = new Uint32Array(u.decodePixels().buffer)).length, v = new Uint8Array(g * (32 / u.pixelBitlength) * u.colors), m = new Uint8Array(g * (32 / u.pixelBitlength)), b = u.colors > 1, w = 0, N = 0;
                    for(var _ = 0; w < g;)y = p[w++], v[N++] = y >>> 0 & 255, b && (v[N++] = y >>> 16 & 255, y = p[w++], v[N++] = y >>> 0 & 255), m[_++] = y >>> 16 & 255;
                    c = 8;
                }
                o !== t83.image_compression.NONE && r38() ? (e53 = n24(v, u.width * u.colors, u.colors, o), d = n24(m, u.width, 1, o)) : (e53 = v, d = m, L = void 0);
            }
            if (3 === u.colorType && (s = this.color_spaces.INDEXED, f = u.palette, u.transparency.indexed)) {
                var P = u.transparency.indexed, k = 0;
                for(w = 0, g = P.length; w < g; ++w)k += P[w];
                if ((k /= 255) === g - 1 && -1 !== P.indexOf(0)) h = [
                    P.indexOf(0)
                ];
                else if (k !== g) {
                    for(p = u.decodePixels(), m = new Uint8Array(p.length), w = 0, g = p.length; w < g; w++)m[w] = P[p[w]];
                    d = n24(m, u.width, 1);
                }
            }
            var I = function(e) {
                var r;
                switch(e){
                    case t83.image_compression.FAST:
                        r = 11;
                        break;
                    case t83.image_compression.MEDIUM:
                        r = 13;
                        break;
                    case t83.image_compression.SLOW:
                        r = 14;
                        break;
                    default:
                        r = 12;
                }
                return r;
            }(o);
            return L === this.decode.FLATE_DECODE && (A = "/Predictor " + I + " "), A += "/Colors " + l + " /BitsPerComponent " + c + " /Columns " + u.width, (this.__addimage__.isArrayBuffer(e53) || this.__addimage__.isArrayBufferView(e53)) && (e53 = this.__addimage__.arrayBufferToBinaryString(e53)), (d && this.__addimage__.isArrayBuffer(d) || this.__addimage__.isArrayBufferView(d)) && (d = this.__addimage__.arrayBufferToBinaryString(d)), {
                alias: a,
                data: e53,
                index: i,
                filter: L,
                decodeParameters: A,
                transparency: h,
                palette: f,
                sMask: d,
                predictor: I,
                width: u.width,
                height: u.height,
                bitsPerComponent: c,
                colorSpace: s
            };
        }
    };
}($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), (function(t) {
    t.processGIF89A = function(e, r, n, i) {
        var a = new $ffb17689dbc03ee8$var$Zt(e), o = a.width, s = a.height, c = [];
        a.decodeAndBlitFrameRGBA(0, c);
        var u = {
            data: c,
            width: o,
            height: s
        }, h = new $ffb17689dbc03ee8$var$Qt(100).encode(u, 100);
        return t.processJPEG.call(this, h, r, n, i);
    }, t.processGIF87A = t.processGIF89A;
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), $ffb17689dbc03ee8$var$te.prototype.parseHeader = function() {
    if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
        var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
        this.palette = new Array(t);
        for(var e = 0; e < t; e++){
            var r = this.datav.getUint8(this.pos++, !0), n = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0);
            this.palette[e] = {
                red: i,
                green: n,
                blue: r,
                quad: a
            };
        }
    }
    this.height < 0 && (this.height *= -1, this.bottom_up = !1);
}, $ffb17689dbc03ee8$var$te.prototype.parseBGR = function() {
    this.pos = this.offset;
    try {
        var t = "bit" + this.bitPP, e = this.width * this.height * 4;
        this.data = new Uint8Array(e), this[t]();
    } catch (t) {
        $ffb17689dbc03ee8$var$a.log("bit decode error:" + t);
    }
}, $ffb17689dbc03ee8$var$te.prototype.bit1 = function() {
    var t, e = Math.ceil(this.width / 8), r = e % 4;
    for(t = this.height - 1; t >= 0; t--){
        for(var n = this.bottom_up ? t : this.height - 1 - t, i = 0; i < e; i++)for(var a = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++){
            var c = this.palette[a >> 7 - s & 1];
            this.data[o + 4 * s] = c.blue, this.data[o + 4 * s + 1] = c.green, this.data[o + 4 * s + 2] = c.red, this.data[o + 4 * s + 3] = 255;
        }
        0 !== r && (this.pos += 4 - r);
    }
}, $ffb17689dbc03ee8$var$te.prototype.bit4 = function() {
    for(var t = Math.ceil(this.width / 2), e = t % 4, r = this.height - 1; r >= 0; r--){
        for(var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < t; i++){
            var a = this.datav.getUint8(this.pos++, !0), o = n * this.width * 4 + 2 * i * 4, s = a >> 4, c = 15 & a, u = this.palette[s];
            if (this.data[o] = u.blue, this.data[o + 1] = u.green, this.data[o + 2] = u.red, this.data[o + 3] = 255, 2 * i + 1 >= this.width) break;
            u = this.palette[c], this.data[o + 4] = u.blue, this.data[o + 4 + 1] = u.green, this.data[o + 4 + 2] = u.red, this.data[o + 4 + 3] = 255;
        }
        0 !== e && (this.pos += 4 - e);
    }
}, $ffb17689dbc03ee8$var$te.prototype.bit8 = function() {
    for(var t = this.width % 4, e = this.height - 1; e >= 0; e--){
        for(var r = this.bottom_up ? e : this.height - 1 - e, n = 0; n < this.width; n++){
            var i = this.datav.getUint8(this.pos++, !0), a = r * this.width * 4 + 4 * n;
            if (i < this.palette.length) {
                var o = this.palette[i];
                this.data[a] = o.red, this.data[a + 1] = o.green, this.data[a + 2] = o.blue, this.data[a + 3] = 255;
            } else this.data[a] = 255, this.data[a + 1] = 255, this.data[a + 2] = 255, this.data[a + 3] = 255;
        }
        0 !== t && (this.pos += 4 - t);
    }
}, $ffb17689dbc03ee8$var$te.prototype.bit15 = function() {
    for(var t = this.width % 3, e = parseInt("11111", 2), r = this.height - 1; r >= 0; r--){
        for(var n = this.bottom_up ? r : this.height - 1 - r, i = 0; i < this.width; i++){
            var a = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var o = (a & e) / e * 255 | 0, s = (a >> 5 & e) / e * 255 | 0, c = (a >> 10 & e) / e * 255 | 0, u = a >> 15 ? 255 : 0, h = n * this.width * 4 + 4 * i;
            this.data[h] = c, this.data[h + 1] = s, this.data[h + 2] = o, this.data[h + 3] = u;
        }
        this.pos += t;
    }
}, $ffb17689dbc03ee8$var$te.prototype.bit16 = function() {
    for(var t = this.width % 3, e = parseInt("11111", 2), r = parseInt("111111", 2), n = this.height - 1; n >= 0; n--){
        for(var i = this.bottom_up ? n : this.height - 1 - n, a = 0; a < this.width; a++){
            var o = this.datav.getUint16(this.pos, !0);
            this.pos += 2;
            var s = (o & e) / e * 255 | 0, c = (o >> 5 & r) / r * 255 | 0, u = (o >> 11) / e * 255 | 0, h = i * this.width * 4 + 4 * a;
            this.data[h] = u, this.data[h + 1] = c, this.data[h + 2] = s, this.data[h + 3] = 255;
        }
        this.pos += t;
    }
}, $ffb17689dbc03ee8$var$te.prototype.bit24 = function() {
    for(var t = this.height - 1; t >= 0; t--){
        for(var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++){
            var n = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), o = e * this.width * 4 + 4 * r;
            this.data[o] = a, this.data[o + 1] = i, this.data[o + 2] = n, this.data[o + 3] = 255;
        }
        this.pos += this.width % 4;
    }
}, $ffb17689dbc03ee8$var$te.prototype.bit32 = function() {
    for(var t = this.height - 1; t >= 0; t--)for(var e = this.bottom_up ? t : this.height - 1 - t, r = 0; r < this.width; r++){
        var n = this.datav.getUint8(this.pos++, !0), i = this.datav.getUint8(this.pos++, !0), a = this.datav.getUint8(this.pos++, !0), o = this.datav.getUint8(this.pos++, !0), s = e * this.width * 4 + 4 * r;
        this.data[s] = a, this.data[s + 1] = i, this.data[s + 2] = n, this.data[s + 3] = o;
    }
}, $ffb17689dbc03ee8$var$te.prototype.getData = function() {
    return this.data;
}, /**
 * @license
 * Copyright (c) 2018 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t) {
    t.processBMP = function(e, r, n, i) {
        var a = new $ffb17689dbc03ee8$var$te(e, !1), o = a.width, s = a.height, c = {
            data: a.getData(),
            width: o,
            height: s
        }, u = new $ffb17689dbc03ee8$var$Qt(100).encode(c, 100);
        return t.processJPEG.call(this, u, r, n, i);
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), $ffb17689dbc03ee8$var$ee.prototype.getData = function() {
    return this.data;
}, /**
 * @license
 * Copyright (c) 2019 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t) {
    t.processWEBP = function(e, r, n, i) {
        var a = new $ffb17689dbc03ee8$var$ee(e, !1), o = a.width, s = a.height, c = {
            data: a.getData(),
            width: o,
            height: s
        }, u = new $ffb17689dbc03ee8$var$Qt(100).encode(c, 100);
        return t.processJPEG.call(this, u, r, n, i);
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.processRGBA = function(t, e, r) {
    for(var n = t.data, i = n.length, a = new Uint8Array(i / 4 * 3), o = new Uint8Array(i / 4), s = 0, c = 0, u = 0; u < i; u += 4){
        var h = n[u], l = n[u + 1], f = n[u + 2], d = n[u + 3];
        a[s++] = h, a[s++] = l, a[s++] = f, o[c++] = d;
    }
    var p = this.__addimage__.arrayBufferToBinaryString(a);
    return {
        alpha: this.__addimage__.arrayBufferToBinaryString(o),
        data: p,
        index: e,
        alias: r,
        colorSpace: "DeviceRGB",
        bitsPerComponent: 8,
        width: t.width,
        height: t.height
    };
}, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.setLanguage = function(t) {
    return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {
    }, this.internal.languageSettings.isSubscribed = !1), void 0 !== ({
        af: "Afrikaans",
        sq: "Albanian",
        ar: "Arabic (Standard)",
        "ar-DZ": "Arabic (Algeria)",
        "ar-BH": "Arabic (Bahrain)",
        "ar-EG": "Arabic (Egypt)",
        "ar-IQ": "Arabic (Iraq)",
        "ar-JO": "Arabic (Jordan)",
        "ar-KW": "Arabic (Kuwait)",
        "ar-LB": "Arabic (Lebanon)",
        "ar-LY": "Arabic (Libya)",
        "ar-MA": "Arabic (Morocco)",
        "ar-OM": "Arabic (Oman)",
        "ar-QA": "Arabic (Qatar)",
        "ar-SA": "Arabic (Saudi Arabia)",
        "ar-SY": "Arabic (Syria)",
        "ar-TN": "Arabic (Tunisia)",
        "ar-AE": "Arabic (U.A.E.)",
        "ar-YE": "Arabic (Yemen)",
        an: "Aragonese",
        hy: "Armenian",
        as: "Assamese",
        ast: "Asturian",
        az: "Azerbaijani",
        eu: "Basque",
        be: "Belarusian",
        bn: "Bengali",
        bs: "Bosnian",
        br: "Breton",
        bg: "Bulgarian",
        my: "Burmese",
        ca: "Catalan",
        ch: "Chamorro",
        ce: "Chechen",
        zh: "Chinese",
        "zh-HK": "Chinese (Hong Kong)",
        "zh-CN": "Chinese (PRC)",
        "zh-SG": "Chinese (Singapore)",
        "zh-TW": "Chinese (Taiwan)",
        cv: "Chuvash",
        co: "Corsican",
        cr: "Cree",
        hr: "Croatian",
        cs: "Czech",
        da: "Danish",
        nl: "Dutch (Standard)",
        "nl-BE": "Dutch (Belgian)",
        en: "English",
        "en-AU": "English (Australia)",
        "en-BZ": "English (Belize)",
        "en-CA": "English (Canada)",
        "en-IE": "English (Ireland)",
        "en-JM": "English (Jamaica)",
        "en-NZ": "English (New Zealand)",
        "en-PH": "English (Philippines)",
        "en-ZA": "English (South Africa)",
        "en-TT": "English (Trinidad & Tobago)",
        "en-GB": "English (United Kingdom)",
        "en-US": "English (United States)",
        "en-ZW": "English (Zimbabwe)",
        eo: "Esperanto",
        et: "Estonian",
        fo: "Faeroese",
        fj: "Fijian",
        fi: "Finnish",
        fr: "French (Standard)",
        "fr-BE": "French (Belgium)",
        "fr-CA": "French (Canada)",
        "fr-FR": "French (France)",
        "fr-LU": "French (Luxembourg)",
        "fr-MC": "French (Monaco)",
        "fr-CH": "French (Switzerland)",
        fy: "Frisian",
        fur: "Friulian",
        gd: "Gaelic (Scots)",
        "gd-IE": "Gaelic (Irish)",
        gl: "Galacian",
        ka: "Georgian",
        de: "German (Standard)",
        "de-AT": "German (Austria)",
        "de-DE": "German (Germany)",
        "de-LI": "German (Liechtenstein)",
        "de-LU": "German (Luxembourg)",
        "de-CH": "German (Switzerland)",
        el: "Greek",
        gu: "Gujurati",
        ht: "Haitian",
        he: "Hebrew",
        hi: "Hindi",
        hu: "Hungarian",
        is: "Icelandic",
        id: "Indonesian",
        iu: "Inuktitut",
        ga: "Irish",
        it: "Italian (Standard)",
        "it-CH": "Italian (Switzerland)",
        ja: "Japanese",
        kn: "Kannada",
        ks: "Kashmiri",
        kk: "Kazakh",
        km: "Khmer",
        ky: "Kirghiz",
        tlh: "Klingon",
        ko: "Korean",
        "ko-KP": "Korean (North Korea)",
        "ko-KR": "Korean (South Korea)",
        la: "Latin",
        lv: "Latvian",
        lt: "Lithuanian",
        lb: "Luxembourgish",
        mk: "North Macedonia",
        ms: "Malay",
        ml: "Malayalam",
        mt: "Maltese",
        mi: "Maori",
        mr: "Marathi",
        mo: "Moldavian",
        nv: "Navajo",
        ng: "Ndonga",
        ne: "Nepali",
        no: "Norwegian",
        nb: "Norwegian (Bokmal)",
        nn: "Norwegian (Nynorsk)",
        oc: "Occitan",
        or: "Oriya",
        om: "Oromo",
        fa: "Persian",
        "fa-IR": "Persian/Iran",
        pl: "Polish",
        pt: "Portuguese",
        "pt-BR": "Portuguese (Brazil)",
        pa: "Punjabi",
        "pa-IN": "Punjabi (India)",
        "pa-PK": "Punjabi (Pakistan)",
        qu: "Quechua",
        rm: "Rhaeto-Romanic",
        ro: "Romanian",
        "ro-MO": "Romanian (Moldavia)",
        ru: "Russian",
        "ru-MO": "Russian (Moldavia)",
        sz: "Sami (Lappish)",
        sg: "Sango",
        sa: "Sanskrit",
        sc: "Sardinian",
        sd: "Sindhi",
        si: "Singhalese",
        sr: "Serbian",
        sk: "Slovak",
        sl: "Slovenian",
        so: "Somani",
        sb: "Sorbian",
        es: "Spanish",
        "es-AR": "Spanish (Argentina)",
        "es-BO": "Spanish (Bolivia)",
        "es-CL": "Spanish (Chile)",
        "es-CO": "Spanish (Colombia)",
        "es-CR": "Spanish (Costa Rica)",
        "es-DO": "Spanish (Dominican Republic)",
        "es-EC": "Spanish (Ecuador)",
        "es-SV": "Spanish (El Salvador)",
        "es-GT": "Spanish (Guatemala)",
        "es-HN": "Spanish (Honduras)",
        "es-MX": "Spanish (Mexico)",
        "es-NI": "Spanish (Nicaragua)",
        "es-PA": "Spanish (Panama)",
        "es-PY": "Spanish (Paraguay)",
        "es-PE": "Spanish (Peru)",
        "es-PR": "Spanish (Puerto Rico)",
        "es-ES": "Spanish (Spain)",
        "es-UY": "Spanish (Uruguay)",
        "es-VE": "Spanish (Venezuela)",
        sx: "Sutu",
        sw: "Swahili",
        sv: "Swedish",
        "sv-FI": "Swedish (Finland)",
        "sv-SV": "Swedish (Sweden)",
        ta: "Tamil",
        tt: "Tatar",
        te: "Teluga",
        th: "Thai",
        tig: "Tigre",
        ts: "Tsonga",
        tn: "Tswana",
        tr: "Turkish",
        tk: "Turkmen",
        uk: "Ukrainian",
        hsb: "Upper Sorbian",
        ur: "Urdu",
        ve: "Venda",
        vi: "Vietnamese",
        vo: "Volapuk",
        wa: "Walloon",
        cy: "Welsh",
        xh: "Xhosa",
        ji: "Yiddish",
        zu: "Zulu"
    })[t] && (this.internal.languageSettings.languageCode = t, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
        this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")");
    }), this.internal.languageSettings.isSubscribed = !0)), this;
}, $ffb17689dbc03ee8$var$Vt = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API, $ffb17689dbc03ee8$var$Gt = $ffb17689dbc03ee8$var$Vt.getCharWidthsArray = function(e, r) {
    var n, i, a = (r = r || {
    }).font || this.internal.getFont(), o = r.fontSize || this.internal.getFontSize(), s = r.charSpace || this.internal.getCharSpace(), c = r.widths ? r.widths : a.metadata.Unicode.widths, u = c.fof ? c.fof : 1, h = r.kerning ? r.kerning : a.metadata.Unicode.kerning, l = h.fof ? h.fof : 1, f = !1 !== r.doKerning, d = 0, p = e.length, g = 0, m = c[0] || u, v = [];
    for(n = 0; n < p; n++)i = e.charCodeAt(n), "function" == typeof a.metadata.widthOfString ? v.push((a.metadata.widthOfGlyph(a.metadata.characterToGlyph(i)) + s * (1000 / o) || 0) / 1000) : (d = f && "object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(h[i]) && !isNaN(parseInt(h[i][g], 10)) ? h[i][g] / l : 0, v.push((c[i] || m) / u + d)), g = i;
    return v;
}, $ffb17689dbc03ee8$var$Yt = $ffb17689dbc03ee8$var$Vt.getStringUnitWidth = function(t86, e54) {
    var r = (e54 = e54 || {
    }).fontSize || this.internal.getFontSize(), n = e54.font || this.internal.getFont(), i = e54.charSpace || this.internal.getCharSpace();
    return $ffb17689dbc03ee8$var$Vt.processArabic && (t86 = $ffb17689dbc03ee8$var$Vt.processArabic(t86)), "function" == typeof n.metadata.widthOfString ? n.metadata.widthOfString(t86, r, i) / r : $ffb17689dbc03ee8$var$Gt.apply(this, arguments).reduce(function(t, e) {
        return t + e;
    }, 0);
}, $ffb17689dbc03ee8$var$Jt = function(t, e, r, n) {
    for(var i = [], a = 0, o = t.length, s = 0; a !== o && s + e[a] < r;)s += e[a], a++;
    i.push(t.slice(0, a));
    var c = a;
    for(s = 0; a !== o;)s + e[a] > n && (i.push(t.slice(c, a)), s = 0, c = a), s += e[a], a++;
    return c !== a && i.push(t.slice(c, a)), i;
}, $ffb17689dbc03ee8$var$Xt = function(t87, e55, r) {
    r || (r = {
    });
    var n, i, a, o, s, c, u, h = [], l = [
        h
    ], f = r.textIndent || 0, d = 0, p = 0, g = t87.split(" "), m = $ffb17689dbc03ee8$var$Gt.apply(this, [
        " ",
        r
    ])[0];
    if (c = -1 === r.lineIndent ? g[0].length + 2 : r.lineIndent || 0) {
        var v = Array(c).join(" "), b = [];
        g.map(function(t88) {
            (t88 = t88.split(/\s*\n/)).length > 1 ? b = b.concat(t88.map(function(t, e) {
                return (e && t.length ? "\n" : "") + t;
            })) : b.push(t88[0]);
        }), g = b, c = $ffb17689dbc03ee8$var$Yt.apply(this, [
            v,
            r
        ]);
    }
    for(a = 0, o = g.length; a < o; a++){
        var y = 0;
        if (n = g[a], c && "\n" == n[0] && (n = n.substr(1), y = 1), f + d + (p = (i = $ffb17689dbc03ee8$var$Gt.apply(this, [
            n,
            r
        ])).reduce(function(t, e) {
            return t + e;
        }, 0)) > e55 || y) {
            if (p > e55) {
                for(s = $ffb17689dbc03ee8$var$Jt.apply(this, [
                    n,
                    i,
                    e55 - (f + d),
                    e55
                ]), h.push(s.shift()), h = [
                    s.pop()
                ]; s.length;)l.push([
                    s.shift()
                ]);
                p = i.slice(n.length - (h[0] ? h[0].length : 0)).reduce(function(t, e) {
                    return t + e;
                }, 0);
            } else h = [
                n
            ];
            l.push(h), f = p + c, d = m;
        } else h.push(n), f += d + p, d = m;
    }
    return u = c ? function(t, e) {
        return (e ? v : "") + t.join(" ");
    } : function(t) {
        return t.join(" ");
    }, l.map(u);
}, $ffb17689dbc03ee8$var$Vt.splitTextToSize = function(t89, e56, r) {
    var n, i = (r = r || {
    }).fontSize || this.internal.getFontSize(), a = (function(t) {
        if (t.widths && t.kerning) return {
            widths: t.widths,
            kerning: t.kerning
        };
        var e = this.internal.getFont(t.fontName, t.fontStyle);
        return e.metadata.Unicode ? {
            widths: e.metadata.Unicode.widths || {
                0: 1
            },
            kerning: e.metadata.Unicode.kerning || {
            }
        } : {
            font: e.metadata,
            fontSize: this.internal.getFontSize(),
            charSpace: this.internal.getCharSpace()
        };
    }).call(this, r);
    n = Array.isArray(t89) ? t89 : String(t89).split(/\r?\n/);
    var o = 1 * this.internal.scaleFactor * e56 / i;
    a.textIndent = r.textIndent ? 1 * r.textIndent * this.internal.scaleFactor / i : 0, a.lineIndent = r.lineIndent;
    var s, c, u = [];
    for(s = 0, c = n.length; s < c; s++)u = u.concat($ffb17689dbc03ee8$var$Xt.apply(this, [
        n[s],
        o,
        a
    ]));
    return u;
}, (function(e57) {
    e57.__fontmetrics__ = e57.__fontmetrics__ || {
    };
    for(var r39 = "klmnopqrstuvwxyz", n25 = {
    }, i24 = {
    }, a18 = 0; a18 < r39.length; a18++)n25[r39[a18]] = "0123456789abcdef"[a18], i24["0123456789abcdef"[a18]] = r39[a18];
    var o19 = function(t) {
        return "0x" + parseInt(t, 10).toString(16);
    }, s14 = e57.__fontmetrics__.compress = function(e) {
        var r, n, a, c, u = [
            "{"
        ];
        for(var h in e){
            if (r = e[h], isNaN(parseInt(h, 10)) ? n = "'" + h + "'" : (h = parseInt(h, 10), n = (n = o19(h).slice(2)).slice(0, -1) + i24[n.slice(-1)]), "number" == typeof r) r < 0 ? (a = o19(r).slice(3), c = "-") : (a = o19(r).slice(2), c = ""), a = c + a.slice(0, -1) + i24[a.slice(-1)];
            else {
                if ("object" !== (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(r)) throw new Error("Don't know what to do with value type " + (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(r) + ".");
                a = s14(r);
            }
            u.push(n + a);
        }
        return u.push("}"), u.join("");
    }, c13 = e57.__fontmetrics__.uncompress = function(t) {
        if ("string" != typeof t) throw new Error("Invalid argument passed to uncompress.");
        for(var e, r, i, a, o = {
        }, s = 1, c = o, u = [], h = "", l = "", f = t.length - 1, d = 1; d < f; d += 1)"'" == (a = t[d]) ? e ? (i = e.join(""), e = void 0) : e = [] : e ? e.push(a) : "{" == a ? (u.push([
            c,
            i
        ]), c = {
        }, i = void 0) : "}" == a ? ((r = u.pop())[0][r[1]] = c, i = void 0, c = r[0]) : "-" == a ? s = -1 : void 0 === i ? n25.hasOwnProperty(a) ? (h += n25[a], i = parseInt(h, 16) * s, s = 1, h = "") : h += a : n25.hasOwnProperty(a) ? (l += n25[a], c[i] = parseInt(l, 16) * s, s = 1, i = void 0, l = "") : l += a;
        return o;
    }, u11 = {
        codePages: [
            "WinAnsiEncoding"
        ],
        WinAnsiEncoding: c13("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
    }, h11 = {
        Unicode: {
            Courier: u11,
            "Courier-Bold": u11,
            "Courier-BoldOblique": u11,
            "Courier-Oblique": u11,
            Helvetica: u11,
            "Helvetica-Bold": u11,
            "Helvetica-BoldOblique": u11,
            "Helvetica-Oblique": u11,
            "Times-Roman": u11,
            "Times-Bold": u11,
            "Times-BoldItalic": u11,
            "Times-Italic": u11
        }
    }, l8 = {
        Unicode: {
            "Courier-Oblique": c13("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-BoldItalic": c13("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
            "Helvetica-Bold": c13("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
            Courier: c13("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-BoldOblique": c13("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Bold": c13("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
            Symbol: c13("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
            Helvetica: c13("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
            "Helvetica-BoldOblique": c13("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
            ZapfDingbats: c13("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
            "Courier-Bold": c13("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
            "Times-Italic": c13("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
            "Times-Roman": c13("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
            "Helvetica-Oblique": c13("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
        }
    };
    e57.events.push([
        "addFont",
        function(t) {
            var e = t.font, r = l8.Unicode[e.postScriptName];
            r && (e.metadata.Unicode = {
            }, e.metadata.Unicode.widths = r.widths, e.metadata.Unicode.kerning = r.kerning);
            var n = h11.Unicode[e.postScriptName];
            n && (e.metadata.Unicode.encoding = n, e.encoding = n.codePages[0]);
        }
    ]);
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), /**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t90) {
    var e58 = function(t) {
        for(var e = t.length, r = new Uint8Array(e), n = 0; n < e; n++)r[n] = t.charCodeAt(n);
        return r;
    };
    t90.API.events.push([
        "addFont",
        function(r40) {
            var n26 = void 0, i = r40.font, a = r40.instance;
            if (!i.isStandardFont) {
                if (void 0 === a) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
                if ("string" != typeof (n26 = !1 === a.existsFileInVFS(i.postScriptName) ? a.loadFile(i.postScriptName) : a.getFileFromVFS(i.postScriptName))) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
                !function(r, n) {
                    n = /^\x00\x01\x00\x00/.test(n) ? e58(n) : e58($ffb17689dbc03ee8$var$u(n)), r.metadata = t90.API.TTFFont.open(n), r.metadata.Unicode = r.metadata.Unicode || {
                        encoding: {
                        },
                        kerning: {
                        },
                        widths: []
                    }, r.metadata.glyIdsUsed = [
                        0
                    ];
                }(i, n26);
            }
        }
    ]);
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5), /** @license
 * Copyright (c) 2012 Willow Systems Corporation, https://github.com/willowsystems
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */ (function(t91) {
    function e59() {
        return ($ffb17689dbc03ee8$var$n.canvg ? Promise.resolve($ffb17689dbc03ee8$var$n.canvg) : (parcelRequire("irzyE"))).catch(function(t) {
            return Promise.reject(new Error("Could not load canvg: " + t));
        }).then(function(t) {
            return t.default ? t.default : t;
        });
    }
    $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.addSvgAsImage = function(t92, r, n, i, o, s, c, u) {
        if (isNaN(r) || isNaN(n)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
        if (isNaN(i) || isNaN(o)) throw $ffb17689dbc03ee8$var$a.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
        var h = document.createElement("canvas");
        h.width = i, h.height = o;
        var l = h.getContext("2d");
        l.fillStyle = "#fff", l.fillRect(0, 0, h.width, h.height);
        var f = {
            ignoreMouse: !0,
            ignoreAnimation: !0,
            ignoreDimensions: !0
        }, d = this;
        return e59().then(function(e) {
            return e.fromString(l, t92, f);
        }, function() {
            return Promise.reject(new Error("Could not load canvg."));
        }).then(function(t) {
            return t.render(f);
        }).then(function() {
            d.addImage(h.toDataURL("image/jpeg", 1), r, n, i, o, c, u);
        });
    };
})(), $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.putTotalPages = function(t) {
    var e, r = 0;
    parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t, "g"), r = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g"), r = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
    for(var n = 1; n <= this.internal.getNumberOfPages(); n++)for(var i = 0; i < this.internal.pages[n].length; i++)this.internal.pages[n][i] = this.internal.pages[n][i].replace(e, r);
    return this;
}, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.viewerPreferences = function(e60, r41) {
    var n27;
    e60 = e60 || {
    }, r41 = r41 || !1;
    var i, a, o, s = {
        HideToolbar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        HideMenubar: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        HideWindowUI: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        FitWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        CenterWindow: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.3
        },
        DisplayDocTitle: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.4
        },
        NonFullScreenPageMode: {
            defaultValue: "UseNone",
            value: "UseNone",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "UseNone",
                "UseOutlines",
                "UseThumbs",
                "UseOC"
            ],
            pdfVersion: 1.3
        },
        Direction: {
            defaultValue: "L2R",
            value: "L2R",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "L2R",
                "R2L"
            ],
            pdfVersion: 1.3
        },
        ViewArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "MediaBox",
                "CropBox",
                "TrimBox",
                "BleedBox",
                "ArtBox"
            ],
            pdfVersion: 1.4
        },
        ViewClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "MediaBox",
                "CropBox",
                "TrimBox",
                "BleedBox",
                "ArtBox"
            ],
            pdfVersion: 1.4
        },
        PrintArea: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "MediaBox",
                "CropBox",
                "TrimBox",
                "BleedBox",
                "ArtBox"
            ],
            pdfVersion: 1.4
        },
        PrintClip: {
            defaultValue: "CropBox",
            value: "CropBox",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "MediaBox",
                "CropBox",
                "TrimBox",
                "BleedBox",
                "ArtBox"
            ],
            pdfVersion: 1.4
        },
        PrintScaling: {
            defaultValue: "AppDefault",
            value: "AppDefault",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "AppDefault",
                "None"
            ],
            pdfVersion: 1.6
        },
        Duplex: {
            defaultValue: "",
            value: "none",
            type: "name",
            explicitSet: !1,
            valueSet: [
                "Simplex",
                "DuplexFlipShortEdge",
                "DuplexFlipLongEdge",
                "none"
            ],
            pdfVersion: 1.7
        },
        PickTrayByPDFSize: {
            defaultValue: !1,
            value: !1,
            type: "boolean",
            explicitSet: !1,
            valueSet: [
                !0,
                !1
            ],
            pdfVersion: 1.7
        },
        PrintPageRange: {
            defaultValue: "",
            value: "",
            type: "array",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7
        },
        NumCopies: {
            defaultValue: 1,
            value: 1,
            type: "integer",
            explicitSet: !1,
            valueSet: null,
            pdfVersion: 1.7
        }
    }, c = Object.keys(s), u = [], h = 0, l = 0, f = 0;
    function d(t, e) {
        var r, n = !1;
        for(r = 0; r < t.length; r += 1)t[r] === e && (n = !0);
        return n;
    }
    if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {
    }, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(s)), this.internal.viewerpreferences.isSubscribed = !1), n27 = this.internal.viewerpreferences.configuration, "reset" === e60 || !0 === r41) {
        var p = c.length;
        for(f = 0; f < p; f += 1)n27[c[f]].value = n27[c[f]].defaultValue, n27[c[f]].explicitSet = !1;
    }
    if ("object" === (/*@__PURE__*/$parcel$interopDefault($9319f22e05447137$exports))(e60)) {
        for(a in e60)if (o = e60[a], d(c, a) && void 0 !== o) {
            if ("boolean" === n27[a].type && "boolean" == typeof o) n27[a].value = o;
            else if ("name" === n27[a].type && d(n27[a].valueSet, o)) n27[a].value = o;
            else if ("integer" === n27[a].type && Number.isInteger(o)) n27[a].value = o;
            else if ("array" === n27[a].type) {
                for(h = 0; h < o.length; h += 1)if (i = !0, 1 === o[h].length && "number" == typeof o[h][0]) u.push(String(o[h] - 1));
                else if (o[h].length > 1) {
                    for(l = 0; l < o[h].length; l += 1)"number" != typeof o[h][l] && (i = !1);
                    !0 === i && u.push([
                        o[h][0] - 1,
                        o[h][1] - 1
                    ].join(" "));
                }
                n27[a].value = "[" + u.join(" ") + "]";
            } else n27[a].value = n27[a].defaultValue;
            n27[a].explicitSet = !0;
        }
    }
    return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", function() {
        var t, e = [];
        for(t in n27)!0 === n27[t].explicitSet && ("name" === n27[t].type ? e.push("/" + t + " /" + n27[t].value) : e.push("/" + t + " " + n27[t].value));
        0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>");
    }), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n27, this;
}, /** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */ (function(t93) {
    var e61 = function() {
        var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>', e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')), r = unescape(encodeURIComponent(t)), n = unescape(encodeURIComponent(this.internal.__metadata__.metadata)), i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")), a = unescape(encodeURIComponent("</x:xmpmeta>")), o = r.length + n.length + i.length + e.length + a.length;
        this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + o + " >>"), this.internal.write("stream"), this.internal.write(e + r + n + i + a), this.internal.write("endstream"), this.internal.write("endobj");
    }, r42 = function() {
        this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R");
    };
    t93.addMetadata = function(t, n) {
        return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = {
            metadata: t,
            namespaceuri: n || "http://jspdf.default.namespaceuri/"
        }, this.internal.events.subscribe("putCatalog", r42), this.internal.events.subscribe("postPutResources", e61)), this;
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), (function(t94) {
    var e62 = t94.API, r43 = e62.pdfEscape16 = function(t, e) {
        for(var r, n = e.metadata.Unicode.widths, i = [
            "",
            "0",
            "00",
            "000",
            "0000"
        ], a = [
            ""
        ], o = 0, s = t.length; o < s; ++o){
            if (r = e.metadata.characterToGlyph(t.charCodeAt(o)), e.metadata.glyIdsUsed.push(r), e.metadata.toUnicode[r] = t.charCodeAt(o), -1 == n.indexOf(r) && (n.push(r), n.push([
                parseInt(e.metadata.widthOfGlyph(r), 10)
            ])), "0" == r) return a.join("");
            r = r.toString(16), a.push(i[4 - r.length], r);
        }
        return a.join("");
    }, n28 = function(t95) {
        var e63, r, n, i, a, o, s;
        for(a = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", n = [], o = 0, s = (r = Object.keys(t95).sort(function(t, e) {
            return t - e;
        })).length; o < s; o++)e63 = r[o], n.length >= 100 && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar", n = []), void 0 !== t95[e63] && null !== t95[e63] && "function" == typeof t95[e63].toString && (i = ("0000" + t95[e63].toString(16)).slice(-4), e63 = ("0000" + (+e63).toString(16)).slice(-4), n.push("<" + e63 + "><" + i + ">"));
        return n.length && (a += "\n" + n.length + " beginbfchar\n" + n.join("\n") + "\nendbfchar\n"), a += "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend";
    };
    e62.events.push([
        "putFont",
        function(e64) {
            !function(e) {
                var r = e.font, i = e.out, a = e.newObject, o = e.putStream;
                if (r.metadata instanceof t94.API.TTFFont && "Identity-H" === r.encoding) {
                    for(var s = r.metadata.Unicode.widths, c = r.metadata.subset.encode(r.metadata.glyIdsUsed, 1), u = "", h = 0; h < c.length; h++)u += String.fromCharCode(c[h]);
                    var l = a();
                    o({
                        data: u,
                        addLength1: !0,
                        objectId: l
                    }), i("endobj");
                    var f = a();
                    o({
                        data: n28(r.metadata.toUnicode),
                        addLength1: !0,
                        objectId: f
                    }), i("endobj");
                    var d = a();
                    i("<<"), i("/Type /FontDescriptor"), i("/FontName /" + $ffb17689dbc03ee8$var$F(r.fontName)), i("/FontFile2 " + l + " 0 R"), i("/FontBBox " + t94.API.PDFObject.convert(r.metadata.bbox)), i("/Flags " + r.metadata.flags), i("/StemV " + r.metadata.stemV), i("/ItalicAngle " + r.metadata.italicAngle), i("/Ascent " + r.metadata.ascender), i("/Descent " + r.metadata.decender), i("/CapHeight " + r.metadata.capHeight), i(">>"), i("endobj");
                    var p = a();
                    i("<<"), i("/Type /Font"), i("/BaseFont /" + $ffb17689dbc03ee8$var$F(r.fontName)), i("/FontDescriptor " + d + " 0 R"), i("/W " + t94.API.PDFObject.convert(s)), i("/CIDToGIDMap /Identity"), i("/DW 1000"), i("/Subtype /CIDFontType2"), i("/CIDSystemInfo"), i("<<"), i("/Supplement 0"), i("/Registry (Adobe)"), i("/Ordering (" + r.encoding + ")"), i(">>"), i(">>"), i("endobj"), r.objectNumber = a(), i("<<"), i("/Type /Font"), i("/Subtype /Type0"), i("/ToUnicode " + f + " 0 R"), i("/BaseFont /" + $ffb17689dbc03ee8$var$F(r.fontName)), i("/Encoding /" + r.encoding), i("/DescendantFonts [" + p + " 0 R]"), i(">>"), i("endobj"), r.isAlreadyPutted = !0;
                }
            }(e64);
        }
    ]);
    e62.events.push([
        "putFont",
        function(e65) {
            !function(e) {
                var r = e.font, i = e.out, a = e.newObject, o = e.putStream;
                if (r.metadata instanceof t94.API.TTFFont && "WinAnsiEncoding" === r.encoding) {
                    for(var s = r.metadata.rawData, c = "", u = 0; u < s.length; u++)c += String.fromCharCode(s[u]);
                    var h = a();
                    o({
                        data: c,
                        addLength1: !0,
                        objectId: h
                    }), i("endobj");
                    var l = a();
                    o({
                        data: n28(r.metadata.toUnicode),
                        addLength1: !0,
                        objectId: l
                    }), i("endobj");
                    var f = a();
                    i("<<"), i("/Descent " + r.metadata.decender), i("/CapHeight " + r.metadata.capHeight), i("/StemV " + r.metadata.stemV), i("/Type /FontDescriptor"), i("/FontFile2 " + h + " 0 R"), i("/Flags 96"), i("/FontBBox " + t94.API.PDFObject.convert(r.metadata.bbox)), i("/FontName /" + $ffb17689dbc03ee8$var$F(r.fontName)), i("/ItalicAngle " + r.metadata.italicAngle), i("/Ascent " + r.metadata.ascender), i(">>"), i("endobj"), r.objectNumber = a();
                    for(var d = 0; d < r.metadata.hmtx.widths.length; d++)r.metadata.hmtx.widths[d] = parseInt(r.metadata.hmtx.widths[d] * (1000 / r.metadata.head.unitsPerEm));
                    i("<</Subtype/TrueType/Type/Font/ToUnicode " + l + " 0 R/BaseFont/" + $ffb17689dbc03ee8$var$F(r.fontName) + "/FontDescriptor " + f + " 0 R/Encoding/" + r.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t94.API.PDFObject.convert(r.metadata.hmtx.widths) + ">>"), i("endobj"), r.isAlreadyPutted = !0;
                }
            }(e65);
        }
    ]);
    var i25 = function(t96) {
        var e, n = t96.text || "", i = t96.x, a = t96.y, o = t96.options || {
        }, s = t96.mutex || {
        }, c = s.pdfEscape, u = s.activeFontKey, h = s.fonts, l = u, f = "", d = 0, p = "", g = h[l].encoding;
        if ("Identity-H" !== h[l].encoding) return {
            text: n,
            x: i,
            y: a,
            options: o,
            mutex: s
        };
        for(p = n, l = u, Array.isArray(n) && (p = n[0]), d = 0; d < p.length; d += 1)h[l].metadata.hasOwnProperty("cmap") && (e = h[l].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]), e || p[d].charCodeAt(0) < 256 && h[l].metadata.hasOwnProperty("Unicode") ? f += p[d] : f += "";
        var m = "";
        return parseInt(l.slice(1)) < 14 || "WinAnsiEncoding" === g ? m = c(f, l).split("").map(function(t) {
            return t.charCodeAt(0).toString(16);
        }).join("") : "Identity-H" === g && (m = r43(f, h[l])), s.isHex = !0, {
            text: m,
            x: i,
            y: a,
            options: o,
            mutex: s
        };
    };
    e62.events.push([
        "postProcessText",
        function(t) {
            var e = t.text || "", r = [], n = {
                text: e,
                x: t.x,
                y: t.y,
                options: t.options,
                mutex: t.mutex
            };
            if (Array.isArray(e)) {
                var a = 0;
                for(a = 0; a < e.length; a += 1)Array.isArray(e[a]) && 3 === e[a].length ? r.push([
                    i25(Object.assign({
                    }, n, {
                        text: e[a][0]
                    })).text,
                    e[a][1],
                    e[a][2]
                ]) : r.push(i25(Object.assign({
                }, n, {
                    text: e[a]
                })).text);
                t.text = r;
            } else t.text = i25(Object.assign({
            }, n, {
                text: e
            })).text;
        }
    ]);
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5), /**
 * @license
 * jsPDF virtual FileSystem functionality
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */ (function(t) {
    var e = function() {
        return void 0 === this.internal.vFS && (this.internal.vFS = {
        }), !0;
    };
    t.existsFileInVFS = function(t) {
        return e.call(this), void 0 !== this.internal.vFS[t];
    }, t.addFileToVFS = function(t, r) {
        return e.call(this), this.internal.vFS[t] = r, this;
    }, t.getFileFromVFS = function(t) {
        return e.call(this), void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null;
    };
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API), /**
 * @license
 * Unicode Bidi Engine based on the work of Alex Shensis (@asthensis)
 * MIT License
 */ (function(t97) {
    t97.__bidiEngine__ = t97.prototype.__bidiEngine__ = function(t98) {
        var r45, n29, i26, a19, o20, s15, c14, u12 = e66, h12 = [
            [
                0,
                3,
                0,
                1,
                0,
                0,
                0
            ],
            [
                0,
                3,
                0,
                1,
                2,
                2,
                0
            ],
            [
                0,
                3,
                0,
                17,
                2,
                0,
                1
            ],
            [
                0,
                3,
                5,
                5,
                4,
                1,
                0
            ],
            [
                0,
                3,
                21,
                21,
                4,
                0,
                1
            ],
            [
                0,
                3,
                5,
                5,
                4,
                2,
                0
            ]
        ], l9 = [
            [
                2,
                0,
                1,
                1,
                0,
                1,
                0
            ],
            [
                2,
                0,
                1,
                1,
                0,
                2,
                0
            ],
            [
                2,
                0,
                2,
                1,
                3,
                2,
                0
            ],
            [
                2,
                0,
                2,
                33,
                3,
                1,
                1
            ]
        ], f7 = {
            L: 0,
            R: 1,
            EN: 2,
            AN: 3,
            N: 4,
            B: 5,
            S: 6
        }, d8 = {
            0: 0,
            5: 1,
            6: 2,
            7: 3,
            32: 4,
            251: 5,
            254: 6,
            255: 7
        }, p9 = [
            "(",
            ")",
            "(",
            "<",
            ">",
            "<",
            "[",
            "]",
            "[",
            "{",
            "}",
            "{",
            "«",
            "»",
            "«",
            "‹",
            "›",
            "‹",
            "⁅",
            "⁆",
            "⁅",
            "⁽",
            "⁾",
            "⁽",
            "₍",
            "₎",
            "₍",
            "≤",
            "≥",
            "≤",
            "〈",
            "〉",
            "〈",
            "﹙",
            "﹚",
            "﹙",
            "﹛",
            "﹜",
            "﹛",
            "﹝",
            "﹞",
            "﹝",
            "﹤",
            "﹥",
            "﹤"
        ], g9 = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/), m = !1, v = 0;
        this.__bidiEngine__ = {
        };
        var b = function(t) {
            var e = t.charCodeAt(), r = e >> 8, n = d8[r];
            return void 0 !== n ? u12[256 * n + (255 & e)] : 252 === r || 253 === r ? "AL" : g9.test(r) ? "L" : 8 === r ? "R" : "N";
        }, y8 = function(t) {
            for(var e, r = 0; r < t.length; r++){
                if ("L" === (e = b(t.charAt(r)))) return !1;
                if ("R" === e) return !0;
            }
            return !1;
        }, w = function(t, e, o, s) {
            var c, u, h, l, f = e[s];
            switch(f){
                case "L":
                case "R":
                    m = !1;
                    break;
                case "N":
                case "AN":
                    break;
                case "EN":
                    m && (f = "AN");
                    break;
                case "AL":
                    m = !0, f = "R";
                    break;
                case "WS":
                    f = "N";
                    break;
                case "CS":
                    s < 1 || s + 1 >= e.length || "EN" !== (c = o[s - 1]) && "AN" !== c || "EN" !== (u = e[s + 1]) && "AN" !== u ? f = "N" : m && (u = "AN"), f = u === c ? u : "N";
                    break;
                case "ES":
                    f = "EN" === (c = s > 0 ? o[s - 1] : "B") && s + 1 < e.length && "EN" === e[s + 1] ? "EN" : "N";
                    break;
                case "ET":
                    if (s > 0 && "EN" === o[s - 1]) {
                        f = "EN";
                        break;
                    }
                    if (m) {
                        f = "N";
                        break;
                    }
                    for(h = s + 1, l = e.length; h < l && "ET" === e[h];)h++;
                    f = h < l && "EN" === e[h] ? "EN" : "N";
                    break;
                case "NSM":
                    if (i26 && !a19) {
                        for(l = e.length, h = s + 1; h < l && "NSM" === e[h];)h++;
                        if (h < l) {
                            var d = t[s], p = d >= 1425 && d <= 2303 || 64286 === d;
                            if (c = e[h], p && ("R" === c || "AL" === c)) {
                                f = "R";
                                break;
                            }
                        }
                    }
                    f = s < 1 || "B" === (c = e[s - 1]) ? "N" : o[s - 1];
                    break;
                case "B":
                    m = !1, r45 = !0, f = v;
                    break;
                case "S":
                    n29 = !0, f = "N";
                    break;
                case "LRE":
                case "RLE":
                case "LRO":
                case "RLO":
                case "PDF":
                    m = !1;
                    break;
                case "BN":
                    f = "N";
            }
            return f;
        }, N7 = function(t, e, r) {
            var n = t.split("");
            return r && L7(n, r, {
                hiLevel: v
            }), n.reverse(), e && e.reverse(), n.join("");
        }, L7 = function(t99, e67, i27) {
            var a, o, s, c, u, d = -1, p = t99.length, g = 0, y = [], N = v ? l9 : h12, L = [];
            for(m = !1, r45 = !1, n29 = !1, o = 0; o < p; o++)L[o] = b(t99[o]);
            for(s = 0; s < p; s++){
                if (u = g, y[s] = w(t99, L, y, s), a = 240 & (g = N[u][f7[y[s]]]), g &= 15, e67[s] = c = N[g][5], a > 0) {
                    if (16 === a) {
                        for(o = d; o < s; o++)e67[o] = 1;
                        d = -1;
                    } else d = -1;
                }
                if (N[g][6]) -1 === d && (d = s);
                else if (d > -1) {
                    for(o = d; o < s; o++)e67[o] = c;
                    d = -1;
                }
                "B" === L[s] && (e67[s] = 0), i27.hiLevel |= c;
            }
            n29 && (function(t, e, r) {
                for(var n = 0; n < r; n++)if ("S" === t[n]) {
                    e[n] = v;
                    for(var i = n - 1; i >= 0 && "WS" === t[i]; i--)e[i] = v;
                }
            })(L, e67, p);
        }, A = function(t, e, n, i, a) {
            if (!(a.hiLevel < t)) {
                if (1 === t && 1 === v && !r45) return e.reverse(), void (n && n.reverse());
                for(var o, s, c, u, h = e.length, l = 0; l < h;){
                    if (i[l] >= t) {
                        for(c = l + 1; c < h && i[c] >= t;)c++;
                        for(u = l, s = c - 1; u < s; u++, s--)o = e[u], e[u] = e[s], e[s] = o, n && (o = n[u], n[u] = n[s], n[s] = o);
                        l = c;
                    }
                    l++;
                }
            }
        }, x = function(t100, e68, r46) {
            var n30 = t100.split(""), i28 = {
                hiLevel: v
            };
            return r46 || (r46 = []), L7(n30, r46, i28), (function(t, e, r) {
                if (0 !== r.hiLevel && c14) for(var n, i = 0; i < t.length; i++)1 === e[i] && (n = p9.indexOf(t[i])) >= 0 && (t[i] = p9[n + 1]);
            })(n30, r46, i28), A(2, n30, e68, r46, i28), A(1, n30, e68, r46, i28), n30.join("");
        };
        return this.__bidiEngine__.doBidiReorder = function(t101, e69, r47) {
            if ((function(t, e) {
                if (e) for(var r = 0; r < t.length; r++)e[r] = r;
                void 0 === a19 && (a19 = y8(t)), void 0 === s15 && (s15 = y8(t));
            })(t101, e69), i26 || !o20 || s15) {
                if (i26 && o20 && a19 ^ s15) v = a19 ? 1 : 0, t101 = N7(t101, e69, r47);
                else if (!i26 && o20 && s15) v = a19 ? 1 : 0, t101 = x(t101, e69, r47), t101 = N7(t101, e69);
                else if (!i26 || a19 || o20 || s15) {
                    if (i26 && !o20 && a19 ^ s15) t101 = N7(t101, e69), a19 ? (v = 0, t101 = x(t101, e69, r47)) : (v = 1, t101 = x(t101, e69, r47), t101 = N7(t101, e69));
                    else if (i26 && a19 && !o20 && s15) v = 1, t101 = x(t101, e69, r47), t101 = N7(t101, e69);
                    else if (!i26 && !o20 && a19 ^ s15) {
                        var n = c14;
                        a19 ? (v = 1, t101 = x(t101, e69, r47), v = 0, c14 = !1, t101 = x(t101, e69, r47), c14 = n) : (v = 0, t101 = x(t101, e69, r47), t101 = N7(t101, e69), v = 1, c14 = !1, t101 = x(t101, e69, r47), c14 = n, t101 = N7(t101, e69));
                    }
                } else v = 0, t101 = x(t101, e69, r47);
            } else v = a19 ? 1 : 0, t101 = x(t101, e69, r47);
            return t101;
        }, this.__bidiEngine__.setOptions = function(t) {
            t && (i26 = t.isInputVisual, o20 = t.isOutputVisual, a19 = t.isInputRtl, s15 = t.isOutputRtl, c14 = t.isSymmetricSwapping);
        }, this.__bidiEngine__.setOptions(t98), this.__bidiEngine__;
    };
    var e66 = [
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "S",
        "B",
        "S",
        "WS",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "B",
        "B",
        "S",
        "WS",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ES",
        "CS",
        "ES",
        "CS",
        "CS",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "B",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "CS",
        "N",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "L",
        "N",
        "N",
        "BN",
        "N",
        "N",
        "ET",
        "ET",
        "EN",
        "EN",
        "N",
        "L",
        "N",
        "N",
        "N",
        "EN",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "R",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "NSM",
        "R",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "N",
        "N",
        "AL",
        "ET",
        "ET",
        "AL",
        "CS",
        "AL",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "AN",
        "ET",
        "AN",
        "AN",
        "AL",
        "AL",
        "AL",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AN",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "AL",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "NSM",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "AL",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "R",
        "R",
        "N",
        "N",
        "N",
        "N",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "WS",
        "BN",
        "BN",
        "BN",
        "L",
        "R",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "B",
        "LRE",
        "RLE",
        "PDF",
        "LRO",
        "RLO",
        "CS",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "WS",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "N",
        "LRI",
        "RLI",
        "FSI",
        "PDI",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "BN",
        "EN",
        "L",
        "N",
        "N",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "L",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "R",
        "NSM",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "ES",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "N",
        "R",
        "N",
        "R",
        "R",
        "N",
        "R",
        "R",
        "N",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "R",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "NSM",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "CS",
        "N",
        "CS",
        "N",
        "N",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "N",
        "N",
        "ES",
        "ES",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "AL",
        "N",
        "N",
        "BN",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "ES",
        "CS",
        "ES",
        "CS",
        "CS",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "EN",
        "CS",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "L",
        "L",
        "L",
        "N",
        "N",
        "L",
        "L",
        "L",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "ET",
        "ET",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N",
        "N"
    ], r44 = new t97.__bidiEngine__({
        isInputVisual: !0
    });
    t97.API.events.push([
        "postProcessText",
        function(t) {
            var e = t.text, n = (t.x, t.y, t.options || {
            }), i = (t.mutex, n.lang, []);
            if (n.isInputVisual = "boolean" != typeof n.isInputVisual || n.isInputVisual, r44.setOptions(n), "[object Array]" === Object.prototype.toString.call(e)) {
                var a = 0;
                for(i = [], a = 0; a < e.length; a += 1)"[object Array]" === Object.prototype.toString.call(e[a]) ? i.push([
                    r44.doBidiReorder(e[a][0]),
                    e[a][1],
                    e[a][2]
                ]) : i.push([
                    r44.doBidiReorder(e[a])
                ]);
                t.text = i;
            } else t.text = r44.doBidiReorder(e);
            r44.setOptions({
                isInputVisual: !0
            });
        }
    ]);
})($ffb17689dbc03ee8$export$ba1e2ffc633a60f5), $ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.TTFFont = (function() {
    function t102(t) {
        var e;
        if (this.rawData = t, e = this.contents = new $ffb17689dbc03ee8$var$ne(t), this.contents.pos = 4, "ttcf" === e.readString(4)) throw new Error("TTCF not supported.");
        e.pos = 0, this.parse(), this.subset = new $ffb17689dbc03ee8$var$Le(this), this.registerTTF();
    }
    return t102.open = function(e) {
        return new t102(e);
    }, t102.prototype.parse = function() {
        return this.directory = new $ffb17689dbc03ee8$var$ie(this.contents), this.head = new $ffb17689dbc03ee8$var$se(this), this.name = new $ffb17689dbc03ee8$var$pe(this), this.cmap = new $ffb17689dbc03ee8$var$ue(this), this.toUnicode = {
        }, this.hhea = new $ffb17689dbc03ee8$var$he(this), this.maxp = new $ffb17689dbc03ee8$var$ge(this), this.hmtx = new $ffb17689dbc03ee8$var$me(this), this.post = new $ffb17689dbc03ee8$var$fe(this), this.os2 = new $ffb17689dbc03ee8$var$le(this), this.loca = new $ffb17689dbc03ee8$var$Ne(this), this.glyf = new $ffb17689dbc03ee8$var$be(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [
            this.head.xMin,
            this.head.yMin,
            this.head.xMax,
            this.head.yMax
        ];
    }, t102.prototype.registerTTF = function() {
        var t, e70, r48, n31, i29;
        if (this.scaleFactor = 1000 / this.head.unitsPerEm, this.bbox = (function() {
            var e, r, n, i;
            for(i = [], e = 0, r = (n = this.bbox).length; e < r; e++)t = n[e], i.push(Math.round(t * this.scaleFactor));
            return i;
        }).call(this), this.stemV = 0, this.post.exists ? (r48 = 255 & (n31 = this.post.italic_angle), 0 != (32768 & (e70 = n31 >> 16)) && (e70 = -(1 + (65535 ^ e70))), this.italicAngle = +(e70 + "." + r48)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (i29 = this.familyClass) || 2 === i29 || 3 === i29 || 4 === i29 || 5 === i29 || 7 === i29, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font");
    }, t102.prototype.characterToGlyph = function(t) {
        var e;
        return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0;
    }, t102.prototype.widthOfGlyph = function(t) {
        var e;
        return e = 1000 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e;
    }, t102.prototype.widthOfString = function(t, e, r) {
        var n, i, a, o;
        for(a = 0, i = 0, o = (t = "" + t).length; 0 <= o ? i < o : i > o; i = 0 <= o ? ++i : --i)n = t.charCodeAt(i), a += this.widthOfGlyph(this.characterToGlyph(n)) + r * (1000 / e) || 0;
        return a * (e / 1000);
    }, t102.prototype.lineHeight = function(t, e) {
        var r;
        return null == e && (e = !1), r = e ? this.lineGap : 0, (this.ascender + r - this.decender) / 1000 * t;
    }, t102;
})();
var $ffb17689dbc03ee8$var$re, $ffb17689dbc03ee8$var$ne = function() {
    function t103(t) {
        this.data = null != t ? t : [], this.pos = 0, this.length = this.data.length;
    }
    return t103.prototype.readByte = function() {
        return this.data[this.pos++];
    }, t103.prototype.writeByte = function(t) {
        return this.data[this.pos++] = t;
    }, t103.prototype.readUInt32 = function() {
        return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte();
    }, t103.prototype.writeUInt32 = function(t) {
        return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
    }, t103.prototype.readInt32 = function() {
        var t;
        return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t;
    }, t103.prototype.writeInt32 = function(t) {
        return t < 0 && (t += 4294967296), this.writeUInt32(t);
    }, t103.prototype.readUInt16 = function() {
        return this.readByte() << 8 | this.readByte();
    }, t103.prototype.writeUInt16 = function(t) {
        return this.writeByte(t >> 8 & 255), this.writeByte(255 & t);
    }, t103.prototype.readInt16 = function() {
        var t;
        return (t = this.readUInt16()) >= 32768 ? t - 65536 : t;
    }, t103.prototype.writeInt16 = function(t) {
        return t < 0 && (t += 65536), this.writeUInt16(t);
    }, t103.prototype.readString = function(t) {
        var e, r;
        for(r = [], e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e)r[e] = String.fromCharCode(this.readByte());
        return r.join("");
    }, t103.prototype.writeString = function(t) {
        var e, r, n;
        for(n = [], e = 0, r = t.length; 0 <= r ? e < r : e > r; e = 0 <= r ? ++e : --e)n.push(this.writeByte(t.charCodeAt(e)));
        return n;
    }, t103.prototype.readShort = function() {
        return this.readInt16();
    }, t103.prototype.writeShort = function(t) {
        return this.writeInt16(t);
    }, t103.prototype.readLongLong = function() {
        var t, e, r, n, i, a, o, s;
        return t = this.readByte(), e = this.readByte(), r = this.readByte(), n = this.readByte(), i = this.readByte(), a = this.readByte(), o = this.readByte(), s = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ r) + 4294967296 * (255 ^ n) + 16777216 * (255 ^ i) + 65536 * (255 ^ a) + 256 * (255 ^ o) + (255 ^ s) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * r + 4294967296 * n + 16777216 * i + 65536 * a + 256 * o + s;
    }, t103.prototype.writeLongLong = function(t) {
        var e, r;
        return e = Math.floor(t / 4294967296), r = 4294967295 & t, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(r >> 24 & 255), this.writeByte(r >> 16 & 255), this.writeByte(r >> 8 & 255), this.writeByte(255 & r);
    }, t103.prototype.readInt = function() {
        return this.readInt32();
    }, t103.prototype.writeInt = function(t) {
        return this.writeInt32(t);
    }, t103.prototype.read = function(t) {
        var e, r;
        for(e = [], r = 0; 0 <= t ? r < t : r > t; r = 0 <= t ? ++r : --r)e.push(this.readByte());
        return e;
    }, t103.prototype.write = function(t) {
        var e, r, n, i;
        for(i = [], r = 0, n = t.length; r < n; r++)e = t[r], i.push(this.writeByte(e));
        return i;
    }, t103;
}(), $ffb17689dbc03ee8$var$ie = function() {
    var t104;
    function e71(t) {
        var e, r, n;
        for(this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {
        }, r = 0, n = this.tableCount; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r)e = {
            tag: t.readString(4),
            checksum: t.readInt(),
            offset: t.readInt(),
            length: t.readInt()
        }, this.tables[e.tag] = e;
    }
    return e71.prototype.encode = function(e) {
        var r, n, i, a, o, s, c, u, h, l, f, d, p;
        for(p in f = Object.keys(e).length, s = Math.log(2), h = 16 * Math.floor(Math.log(f) / s), a = Math.floor(h / s), u = 16 * f - h, (n = new $ffb17689dbc03ee8$var$ne).writeInt(this.scalarType), n.writeShort(f), n.writeShort(h), n.writeShort(a), n.writeShort(u), i = 16 * f, c = n.pos + i, o = null, d = [], e)for(l = e[p], n.writeString(p), n.writeInt(t104(l)), n.writeInt(c), n.writeInt(l.length), d = d.concat(l), "head" === p && (o = c), c += l.length; c % 4;)d.push(0), c++;
        return n.write(d), r = 2981146554 - t104(n.data), n.pos = o + 8, n.writeUInt32(r), n.data;
    }, t104 = function(t) {
        var e, r, n, i;
        for(t = $ffb17689dbc03ee8$var$ve.call(t); t.length % 4;)t.push(0);
        for(n = new $ffb17689dbc03ee8$var$ne(t), r = 0, e = 0, i = t.length; e < i; e = e += 4)r += n.readUInt32();
        return 4294967295 & r;
    }, e71;
}(), $ffb17689dbc03ee8$var$ae = {
}.hasOwnProperty, $ffb17689dbc03ee8$var$oe = function(t, e) {
    for(var r in e)$ffb17689dbc03ee8$var$ae.call(e, r) && (t[r] = e[r]);
    function n() {
        this.constructor = t;
    }
    return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t;
};
$ffb17689dbc03ee8$var$re = (function() {
    function t105(t) {
        var e;
        this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents));
    }
    return t105.prototype.parse = function() {
    }, t105.prototype.encode = function() {
    }, t105.prototype.raw = function() {
        return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null;
    }, t105;
})();
var $ffb17689dbc03ee8$var$se = function(t106) {
    function e72() {
        return e72.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e72, $ffb17689dbc03ee8$var$re), e72.prototype.tag = "head", e72.prototype.parse = function(t) {
        return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort();
    }, e72.prototype.encode = function(t) {
        var e;
        return (e = new $ffb17689dbc03ee8$var$ne).writeInt(this.version), e.writeInt(this.revision), e.writeInt(this.checkSumAdjustment), e.writeInt(this.magicNumber), e.writeShort(this.flags), e.writeShort(this.unitsPerEm), e.writeLongLong(this.created), e.writeLongLong(this.modified), e.writeShort(this.xMin), e.writeShort(this.yMin), e.writeShort(this.xMax), e.writeShort(this.yMax), e.writeShort(this.macStyle), e.writeShort(this.lowestRecPPEM), e.writeShort(this.fontDirectionHint), e.writeShort(t), e.writeShort(this.glyphDataFormat), e.data;
    }, e72;
}(), $ffb17689dbc03ee8$var$ce = function() {
    function t107(t, e73) {
        var r49, n, i, a, o, s, c, u, h, l, f, d, p, g, m, v, b;
        switch(this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = e73 + t.readInt(), h = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {
        }, this.format){
            case 0:
                for(s = 0; s < 256; ++s)this.codeMap[s] = t.readByte();
                break;
            case 4:
                for(f = t.readUInt16(), l = f / 2, t.pos += 6, i = (function() {
                    var e, r;
                    for(r = [], s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e)r.push(t.readUInt16());
                    return r;
                })(), t.pos += 2, p = (function() {
                    var e, r;
                    for(r = [], s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e)r.push(t.readUInt16());
                    return r;
                })(), c = (function() {
                    var e, r;
                    for(r = [], s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e)r.push(t.readUInt16());
                    return r;
                })(), u = (function() {
                    var e, r;
                    for(r = [], s = e = 0; 0 <= l ? e < l : e > l; s = 0 <= l ? ++e : --e)r.push(t.readUInt16());
                    return r;
                })(), n = (this.length - t.pos + this.offset) / 2, o = (function() {
                    var e, r;
                    for(r = [], s = e = 0; 0 <= n ? e < n : e > n; s = 0 <= n ? ++e : --e)r.push(t.readUInt16());
                    return r;
                })(), s = m = 0, b = i.length; m < b; s = ++m)for(g = i[s], r49 = v = d = p[s]; d <= g ? v <= g : v >= g; r49 = d <= g ? ++v : --v)0 === u[s] ? a = r49 + c[s] : 0 !== (a = o[u[s] / 2 + (r49 - d) - (l - s)] || 0) && (a += c[s]), this.codeMap[r49] = 65535 & a;
        }
        t.pos = h;
    }
    return t107.encode = function(t108, e74) {
        var r, n, i, a, o, s, c, u, h, l, f, d, p, g, m, v, b, y, w, N, L, A, x, S, _, P, k, I, F, C, $ffb17689dbc03ee8$export$1bc649ab427a02ba, O, $ffb17689dbc03ee8$export$7235f0ad083cb4c6, $ffb17689dbc03ee8$export$549f717800d2b57f, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5, q, D, R, T, U, z, H, W, V, G, Y;
        switch(I = new $ffb17689dbc03ee8$var$ne, a = Object.keys(t108).sort(function(t, e) {
            return t - e;
        }), e74){
            case "macroman":
                for(p = 0, g = (function() {
                    var t = [];
                    for(d = 0; d < 256; ++d)t.push(0);
                    return t;
                })(), v = {
                    0: 0
                }, i = {
                }, F = 0, $ffb17689dbc03ee8$export$7235f0ad083cb4c6 = a.length; F < $ffb17689dbc03ee8$export$7235f0ad083cb4c6; F++)null == v[W = t108[n = a[F]]] && (v[W] = ++p), i[n] = {
                    old: t108[n],
                    new: v[t108[n]]
                }, g[n] = v[t108[n]];
                return I.writeUInt16(1), I.writeUInt16(0), I.writeUInt32(12), I.writeUInt16(0), I.writeUInt16(262), I.writeUInt16(0), I.write(g), {
                    charMap: i,
                    subtable: I.data,
                    maxGlyphID: p + 1
                };
            case "unicode":
                for(P = [], h = [], b = 0, v = {
                }, r = {
                }, m = c = null, C = 0, $ffb17689dbc03ee8$export$549f717800d2b57f = a.length; C < $ffb17689dbc03ee8$export$549f717800d2b57f; C++)null == v[w = t108[n = a[C]]] && (v[w] = ++b), r[n] = {
                    old: w,
                    new: v[w]
                }, o = v[w] - n, null != m && o === c || (m && h.push(m), P.push(n), c = o), m = n;
                for(m && h.push(m), h.push(65535), P.push(65535), S = 2 * (x = P.length), A = 2 * Math.pow(Math.log(x) / Math.LN2, 2), l = Math.log(A / 2) / Math.LN2, L = 2 * x - A, s = [], N = [], f = [], d = $ffb17689dbc03ee8$export$1bc649ab427a02ba = 0, $ffb17689dbc03ee8$export$ba1e2ffc633a60f5 = P.length; $ffb17689dbc03ee8$export$1bc649ab427a02ba < $ffb17689dbc03ee8$export$ba1e2ffc633a60f5; d = ++$ffb17689dbc03ee8$export$1bc649ab427a02ba){
                    if (_ = P[d], u = h[d], 65535 === _) {
                        s.push(0), N.push(0);
                        break;
                    }
                    if (_ - (k = r[_].new) >= 32768) for(s.push(0), N.push(2 * (f.length + x - d)), n = O = _; _ <= u ? O <= u : O >= u; n = _ <= u ? ++O : --O)f.push(r[n].new);
                    else s.push(k - _), N.push(0);
                }
                for(I.writeUInt16(3), I.writeUInt16(1), I.writeUInt32(12), I.writeUInt16(4), I.writeUInt16(16 + 8 * x + 2 * f.length), I.writeUInt16(0), I.writeUInt16(S), I.writeUInt16(A), I.writeUInt16(l), I.writeUInt16(L), z = 0, q = h.length; z < q; z++)n = h[z], I.writeUInt16(n);
                for(I.writeUInt16(0), H = 0, D = P.length; H < D; H++)n = P[H], I.writeUInt16(n);
                for(V = 0, R = s.length; V < R; V++)o = s[V], I.writeUInt16(o);
                for(G = 0, T = N.length; G < T; G++)y = N[G], I.writeUInt16(y);
                for(Y = 0, U = f.length; Y < U; Y++)p = f[Y], I.writeUInt16(p);
                return {
                    charMap: r,
                    subtable: I.data,
                    maxGlyphID: b + 1
                };
        }
    }, t107;
}(), $ffb17689dbc03ee8$var$ue = function(t109) {
    function e75() {
        return e75.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e75, $ffb17689dbc03ee8$var$re), e75.prototype.tag = "cmap", e75.prototype.parse = function(t) {
        var e, r, n;
        for(t.pos = this.offset, this.version = t.readUInt16(), n = t.readUInt16(), this.tables = [], this.unicode = null, r = 0; 0 <= n ? r < n : r > n; r = 0 <= n ? ++r : --r)e = new $ffb17689dbc03ee8$var$ce(t, this.offset), this.tables.push(e), e.isUnicode && null == this.unicode && (this.unicode = e);
        return !0;
    }, e75.encode = function(t, e) {
        var r, n;
        return null == e && (e = "macroman"), r = $ffb17689dbc03ee8$var$ce.encode(t, e), (n = new $ffb17689dbc03ee8$var$ne).writeUInt16(0), n.writeUInt16(1), r.table = n.data.concat(r.subtable), r;
    }, e75;
}(), $ffb17689dbc03ee8$var$he = function(t110) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e, $ffb17689dbc03ee8$var$re), e.prototype.tag = "hhea", e.prototype.parse = function(t) {
        return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16();
    }, e;
}(), $ffb17689dbc03ee8$var$le = function(t111) {
    function e76() {
        return e76.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e76, $ffb17689dbc03ee8$var$re), e76.prototype.tag = "OS/2", e76.prototype.parse = function(t) {
        if (t.pos = this.offset, this.version = t.readUInt16(), this.averageCharWidth = t.readShort(), this.weightClass = t.readUInt16(), this.widthClass = t.readUInt16(), this.type = t.readShort(), this.ySubscriptXSize = t.readShort(), this.ySubscriptYSize = t.readShort(), this.ySubscriptXOffset = t.readShort(), this.ySubscriptYOffset = t.readShort(), this.ySuperscriptXSize = t.readShort(), this.ySuperscriptYSize = t.readShort(), this.ySuperscriptXOffset = t.readShort(), this.ySuperscriptYOffset = t.readShort(), this.yStrikeoutSize = t.readShort(), this.yStrikeoutPosition = t.readShort(), this.familyClass = t.readShort(), this.panose = (function() {
            var e, r;
            for(r = [], e = 0; e < 10; ++e)r.push(t.readByte());
            return r;
        })(), this.charRange = (function() {
            var e, r;
            for(r = [], e = 0; e < 4; ++e)r.push(t.readInt());
            return r;
        })(), this.vendorID = t.readString(4), this.selection = t.readShort(), this.firstCharIndex = t.readShort(), this.lastCharIndex = t.readShort(), this.version > 0 && (this.ascent = t.readShort(), this.descent = t.readShort(), this.lineGap = t.readShort(), this.winAscent = t.readShort(), this.winDescent = t.readShort(), this.codePageRange = (function() {
            var e, r;
            for(r = [], e = 0; e < 2; e = ++e)r.push(t.readInt());
            return r;
        })(), this.version > 1)) return this.xHeight = t.readShort(), this.capHeight = t.readShort(), this.defaultChar = t.readShort(), this.breakChar = t.readShort(), this.maxContext = t.readShort();
    }, e76;
}(), $ffb17689dbc03ee8$var$fe = function(t112) {
    function e77() {
        return e77.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e77, $ffb17689dbc03ee8$var$re), e77.prototype.tag = "post", e77.prototype.parse = function(t) {
        var e78, r50, n32;
        switch(t.pos = this.offset, this.format = t.readInt(), this.italicAngle = t.readInt(), this.underlinePosition = t.readShort(), this.underlineThickness = t.readShort(), this.isFixedPitch = t.readInt(), this.minMemType42 = t.readInt(), this.maxMemType42 = t.readInt(), this.minMemType1 = t.readInt(), this.maxMemType1 = t.readInt(), this.format){
            case 65536:
                break;
            case 131072:
                var i;
                for(r50 = t.readUInt16(), this.glyphNameIndex = [], i = 0; 0 <= r50 ? i < r50 : i > r50; i = 0 <= r50 ? ++i : --i)this.glyphNameIndex.push(t.readUInt16());
                for(this.names = [], n32 = []; t.pos < this.offset + this.length;)e78 = t.readByte(), n32.push(this.names.push(t.readString(e78)));
                return n32;
            case 151552:
                return r50 = t.readUInt16(), this.offsets = t.read(r50);
            case 196608:
                break;
            case 262144:
                return this.map = (function() {
                    var e, r, n;
                    for(n = [], i = e = 0, r = this.file.maxp.numGlyphs; 0 <= r ? e < r : e > r; i = 0 <= r ? ++e : --e)n.push(t.readUInt32());
                    return n;
                }).call(this);
        }
    }, e77;
}(), $ffb17689dbc03ee8$var$de = function(t, e) {
    this.raw = t, this.length = t.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID;
}, $ffb17689dbc03ee8$var$pe = function(t113) {
    function e79() {
        return e79.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e79, $ffb17689dbc03ee8$var$re), e79.prototype.tag = "name", e79.prototype.parse = function(t) {
        var e, r, n, i, a, o, s, c, u, h, l;
        for(t.pos = this.offset, t.readShort(), e = t.readShort(), o = t.readShort(), r = [], i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i)r.push({
            platformID: t.readShort(),
            encodingID: t.readShort(),
            languageID: t.readShort(),
            nameID: t.readShort(),
            length: t.readShort(),
            offset: this.offset + o + t.readShort()
        });
        for(s = {
        }, i = u = 0, h = r.length; u < h; i = ++u)n = r[i], t.pos = n.offset, c = t.readString(n.length), a = new $ffb17689dbc03ee8$var$de(c, n), null == s[l = n.nameID] && (s[l] = []), s[n.nameID].push(a);
        this.strings = s, this.copyright = s[0], this.fontFamily = s[1], this.fontSubfamily = s[2], this.uniqueSubfamily = s[3], this.fontName = s[4], this.version = s[5];
        try {
            this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
        } catch (t114) {
            this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "");
        }
        return this.trademark = s[7], this.manufacturer = s[8], this.designer = s[9], this.description = s[10], this.vendorUrl = s[11], this.designerUrl = s[12], this.license = s[13], this.licenseUrl = s[14], this.preferredFamily = s[15], this.preferredSubfamily = s[17], this.compatibleFull = s[18], this.sampleText = s[19];
    }, e79;
}(), $ffb17689dbc03ee8$var$ge = function(t115) {
    function e() {
        return e.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e, $ffb17689dbc03ee8$var$re), e.prototype.tag = "maxp", e.prototype.parse = function(t) {
        return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16();
    }, e;
}(), $ffb17689dbc03ee8$var$me = function(t116) {
    function e80() {
        return e80.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e80, $ffb17689dbc03ee8$var$re), e80.prototype.tag = "hmtx", e80.prototype.parse = function(t117) {
        var e81, r51, n33, i30, a, o, s;
        for(t117.pos = this.offset, this.metrics = [], e81 = 0, o = this.file.hhea.numberOfMetrics; 0 <= o ? e81 < o : e81 > o; e81 = 0 <= o ? ++e81 : --e81)this.metrics.push({
            advance: t117.readUInt16(),
            lsb: t117.readInt16()
        });
        for(n33 = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = (function() {
            var r, i;
            for(i = [], e81 = r = 0; 0 <= n33 ? r < n33 : r > n33; e81 = 0 <= n33 ? ++r : --r)i.push(t117.readInt16());
            return i;
        })(), this.widths = (function() {
            var t, e, r, n;
            for(n = [], t = 0, e = (r = this.metrics).length; t < e; t++)i30 = r[t], n.push(i30.advance);
            return n;
        }).call(this), r51 = this.widths[this.widths.length - 1], s = [], e81 = a = 0; 0 <= n33 ? a < n33 : a > n33; e81 = 0 <= n33 ? ++a : --a)s.push(this.widths.push(r51));
        return s;
    }, e80.prototype.forGlyph = function(t) {
        return t in this.metrics ? this.metrics[t] : {
            advance: this.metrics[this.metrics.length - 1].advance,
            lsb: this.leftSideBearings[t - this.metrics.length]
        };
    }, e80;
}(), $ffb17689dbc03ee8$var$ve = [].slice, $ffb17689dbc03ee8$var$be = function(t118) {
    function e82() {
        return e82.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e82, $ffb17689dbc03ee8$var$re), e82.prototype.tag = "glyf", e82.prototype.parse = function() {
        return this.cache = {
        };
    }, e82.prototype.glyphFor = function(t) {
        var e, r, n, i, a, o, s, c, u, h;
        return t in this.cache ? this.cache[t] : (i = this.file.loca, e = this.file.contents, r = i.indexOf(t), 0 === (n = i.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + r, a = (o = new $ffb17689dbc03ee8$var$ne(e.read(n))).readShort(), c = o.readShort(), h = o.readShort(), s = o.readShort(), u = o.readShort(), this.cache[t] = -1 === a ? new $ffb17689dbc03ee8$var$we(o, c, h, s, u) : new $ffb17689dbc03ee8$var$ye(o, a, c, h, s, u), this.cache[t]));
    }, e82.prototype.encode = function(t, e, r) {
        var n, i, a, o, s;
        for(a = [], i = [], o = 0, s = e.length; o < s; o++)n = t[e[o]], i.push(a.length), n && (a = a.concat(n.encode(r)));
        return i.push(a.length), {
            table: a,
            offsets: i
        };
    }, e82;
}(), $ffb17689dbc03ee8$var$ye = function() {
    function t119(t, e, r, n, i, a) {
        this.raw = t, this.numberOfContours = e, this.xMin = r, this.yMin = n, this.xMax = i, this.yMax = a, this.compound = !1;
    }
    return t119.prototype.encode = function() {
        return this.raw.data;
    }, t119;
}(), $ffb17689dbc03ee8$var$we = function() {
    function t120(t, e, r, n, i) {
        var a, o;
        for(this.raw = t, this.xMin = e, this.yMin = r, this.xMax = n, this.yMax = i, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], a = this.raw; o = a.readShort(), this.glyphOffsets.push(a.pos), this.glyphIDs.push(a.readUInt16()), 32 & o;)a.pos += 1 & o ? 4 : 2, 128 & o ? a.pos += 8 : 64 & o ? a.pos += 4 : 8 & o && (a.pos += 2);
    }
    return t120.prototype.encode = function() {
        var t, e, r;
        for(e = new $ffb17689dbc03ee8$var$ne($ffb17689dbc03ee8$var$ve.call(this.raw.data)), t = 0, r = this.glyphIDs.length; t < r; ++t)e.pos = this.glyphOffsets[t];
        return e.data;
    }, t120;
}(), $ffb17689dbc03ee8$var$Ne = function(t121) {
    function e83() {
        return e83.__super__.constructor.apply(this, arguments);
    }
    return $ffb17689dbc03ee8$var$oe(e83, $ffb17689dbc03ee8$var$re), e83.prototype.tag = "loca", e83.prototype.parse = function(t) {
        var e84, r;
        return t.pos = this.offset, e84 = this.file.head.indexToLocFormat, this.offsets = 0 === e84 ? (function() {
            var e, n;
            for(n = [], r = 0, e = this.length; r < e; r += 2)n.push(2 * t.readUInt16());
            return n;
        }).call(this) : (function() {
            var e, n;
            for(n = [], r = 0, e = this.length; r < e; r += 4)n.push(t.readUInt32());
            return n;
        }).call(this);
    }, e83.prototype.indexOf = function(t) {
        return this.offsets[t];
    }, e83.prototype.lengthOf = function(t) {
        return this.offsets[t + 1] - this.offsets[t];
    }, e83.prototype.encode = function(t, e) {
        for(var r = new Uint32Array(this.offsets.length), n = 0, i = 0, a = 0; a < r.length; ++a)if (r[a] = n, i < e.length && e[i] == a) {
            ++i, r[a] = n;
            var o = this.offsets[a], s = this.offsets[a + 1] - o;
            s > 0 && (n += s);
        }
        for(var c = new Array(4 * r.length), u = 0; u < r.length; ++u)c[4 * u + 3] = 255 & r[u], c[4 * u + 2] = (65280 & r[u]) >> 8, c[4 * u + 1] = (16711680 & r[u]) >> 16, c[4 * u] = (4278190080 & r[u]) >> 24;
        return c;
    }, e83;
}(), $ffb17689dbc03ee8$var$Le = function() {
    function t122(t) {
        this.font = t, this.subset = {
        }, this.unicodes = {
        }, this.next = 33;
    }
    return t122.prototype.generateCmap = function() {
        var t, e, r, n, i;
        for(e in n = this.font.cmap.tables[0].codeMap, t = {
        }, i = this.subset)r = i[e], t[e] = n[r];
        return t;
    }, t122.prototype.glyphsFor = function(t) {
        var e, r, n, i, a, o, s;
        for(n = {
        }, a = 0, o = t.length; a < o; a++)n[i = t[a]] = this.font.glyf.glyphFor(i);
        for(i in e = [], n)(null != (r = n[i]) ? r.compound : void 0) && e.push.apply(e, r.glyphIDs);
        if (e.length > 0) for(i in s = this.glyphsFor(e))r = s[i], n[i] = r;
        return n;
    }, t122.prototype.encode = function(t123, e85) {
        var r52, n, i, a, o, s, c, u, h, l, f, d, p, g, m;
        for(n in r52 = $ffb17689dbc03ee8$var$ue.encode(this.generateCmap(), "unicode"), a = this.glyphsFor(t123), f = {
            0: 0
        }, m = r52.charMap)f[(s = m[n]).old] = s.new;
        for(d in l = r52.maxGlyphID, a)d in f || (f[d] = l++);
        return u = (function(t) {
            var e, r;
            for(e in r = {
            }, t)r[t[e]] = e;
            return r;
        })(f), h = Object.keys(u).sort(function(t, e) {
            return t - e;
        }), p = (function() {
            var t, e, r;
            for(r = [], t = 0, e = h.length; t < e; t++)o = h[t], r.push(u[o]);
            return r;
        })(), i = this.font.glyf.encode(a, p, f), c = this.font.loca.encode(i.offsets, p), g = {
            cmap: this.font.cmap.raw(),
            glyf: i.table,
            loca: c,
            hmtx: this.font.hmtx.raw(),
            hhea: this.font.hhea.raw(),
            maxp: this.font.maxp.raw(),
            post: this.font.post.raw(),
            name: this.font.name.raw(),
            head: this.font.head.encode(e85)
        }, this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()), this.font.directory.encode(g);
    }, t122;
}();
$ffb17689dbc03ee8$export$ba1e2ffc633a60f5.API.PDFObject = (function() {
    var t124;
    function e86() {
    }
    return t124 = function(t, e) {
        return (Array(e + 1).join("0") + t).slice(-e);
    }, e86.convert = function(r) {
        var n, i31, a20, o;
        if (Array.isArray(r)) return "[" + (function() {
            var t, i, a;
            for(a = [], t = 0, i = r.length; t < i; t++)n = r[t], a.push(e86.convert(n));
            return a;
        })().join(" ") + "]";
        if ("string" == typeof r) return "/" + r;
        if (null != r ? r.isString : void 0) return "(" + r + ")";
        if (r instanceof Date) return "(D:" + t124(r.getUTCFullYear(), 4) + t124(r.getUTCMonth(), 2) + t124(r.getUTCDate(), 2) + t124(r.getUTCHours(), 2) + t124(r.getUTCMinutes(), 2) + t124(r.getUTCSeconds(), 2) + "Z)";
        if ("[object Object]" === ({
        }).toString.call(r)) {
            for(i31 in a20 = [
                "<<"
            ], r)o = r[i31], a20.push("/" + i31 + " " + e86.convert(o));
            return a20.push(">>"), a20.join("\n");
        }
        return "" + r;
    }, e86;
})();
var $ffb17689dbc03ee8$export$2e2bcd8739ae039 = $ffb17689dbc03ee8$export$ba1e2ffc633a60f5;



function $3ab6ab907d252fb9$var$getTimestamp() {
    const now = new Date();
    return [
        (now.getHours() + 24) % 12 || 12,
        now.getMinutes()
    ].map((n)=>n.toString().padStart(2, '0')
    ).join('');
}
function $3ab6ab907d252fb9$export$6e584cf86eed7fe0() {
    let pageWidth = 8.5;
    let lineHeight = 1.2;
    let margin = 0.5;
    let maxLineWidth = pageWidth - margin * 2;
    let fontSize = 12;
    let ptsPerInch = 72;
    let oneLineHeight = fontSize * lineHeight / ptsPerInch;
    let introText = "Your results indicate you may have leg vein disease, or chronic venous insufficiency (CVI).\n\nYour Results:\n\n";
    let text = `Question 1: ${this.quizData[0].question} \nResponse: ${this.quizResults[0].responses} \n\n` + `Question 2: ${this.quizData[1].question} \nResponse: ${this.quizResults[1].responses} \n\n` + `Question 3: ${this.quizData[2].question} \nResponse: ${this.quizResults[2].responses} \n\n` + `Question 4: ${this.quizData[3].question} \nResponse: ${this.quizResults[3].responses} \n\n` + `Question 5: ${this.quizData[4].question} \nResponse: ${this.quizResults[4].responses} \n\n` + `Question 6: ${this.quizData[5].question} \nResponse: ${this.quizResults[5].responses} \n\n` + `Question 7: ${this.quizData[6].question} \nResponse: ${this.quizResults[6].responses} \n\n` + `Question 8: ${this.quizData[7].question} \nResponse: ${this.quizResults[7].responses} \n\n`;
    let learnMoreText = 'Learn more about CVI at medtronic.com/breakfree';
    let page2Copy = {
        questions: [
            'What is leg vein disease?',
            'Medtronic offers two vein disease treatments',
            'VenaSeal™ procedure',
            'ClosureFast™ procedure'
        ],
        answers: [
            'Healthy leg veins have valves that keep blood flowing upward, back to the heart. Leg vein disease occurs when the blood in an unhealthy vein flows backward (referred to as reflux) and the vein is left untreated. This can cause symptoms such as spider veins, varicose veins, discoloration, swelling, heaviness, raised veins, and leg ulcers. More than 190 million people have CVI or varicose veins globally.¹\n\nThe good news is leg vein disease and varicose veins are common — and treatable.',
            'Talk to your doctor about finding lasting relief for leg vein disease and varicose veins with both of our minimally invasive therapies — performed on a same-day outpatient basis.',
            'The VenaSeal procedure delivers a small amount of a specially formulated medical adhesive to seal — or close — the diseased vein, rerouting blood to nearby healthy veins and providing symptom relief.',
            'The ClosureFast procedure uses radiofrequency ablation energy or heat to close the diseased vein, which redirects blood flow to healthy veins, relieving symptoms.',
            '1. Strategic Market Assessment: Chronic Venous Insufficiency. Dymedex Consulting, LLC. November 2014.'
        ]
    };
    let legalCopy = [
        'VENASEAL™ CLOSURE SYSTEM',
        'Intended Use/Indications:',
        'The VenaSeal closure system (VenaSeal system) is indicated for use in the permanent closure of lower extremity superficial truncal veins, such as the great saphenous vein (GSV), through endovascular embolization with coaptation. The VenaSeal system is intended for use in adults with clinically symptomatic venous reflux as diagnosed by duplex ultrasound (DUS).',
        'Contraindications:',
        'Separate use of the individual components of the VenaSeal closure system is contraindicated. These components must be used as a system. The use of the VenaSeal system is contraindicated when any of the following conditions exist: previous hypersensitivity reactions to the VenaSeal adhesive or cyanoacrylates, acute superficial thrombophlebitis, thrombophlebitis migrans, acute sepsis.',
        'Potential Adverse Effects of the Device on Health:',
        'The potential adverse effects (e.g., complications) associated with the use of the VenaSeal system include, but are not limited to, adverse reactions to a foreign body (including, but not limited to, nonspecific mild inflammation of the cutaneous and subcutaneous tissue), arteriovenous fistula, bleeding from the access site, deep vein thrombosis (DVT), edema in the treated leg, embolization, including pulmonary embolism (PE), hematoma, hyperpigmentation, hypersensitivity or allergic reactions to cyanoacrylates, such as urticaria, shortness of breath, and anaphylactic shock, infection at the access site, pain, paresthesia, phlebitis, superficial thrombophlebitis, urticaria, erythema, or ulceration may occur at the injection site, vascular rupture and perforation, visible scarring.\nInstructions for use can be found in the product labeling at http://manuals.medtronic.com.',
        'Caution:',
        'Federal (USA) law restricts these devices to sale by or on the order of a physician.',
        'CLOSUREFAST™ RFA SYSTEM REFERENCE STATEMENT',
        'Important:',
        'Please reference the Instructions For Use (IFU) for a complete listing of indications, contraindications, warnings and precautions, adverse effects and suggested procedure.',
        'Caution:',
        'Federal (USA) law restricts this device to sale by or on the order of a physician.',
        'UC202213131a EN ©2022 Medtronic. Medtronic and the Medtronic logo are trademarks of Medtronic. All other brands are trademarks of a Medtronic company. 07/2022'
    ];
    let doc = new $ffb17689dbc03ee8$export$ba1e2ffc633a60f5({
        orientation: 'portrait',
        unit: 'in',
        format: [
            8.5,
            11
        ],
        lineHeight: lineHeight
    }).setProperties({
        title: 'Your Medtronic Leg Vein Disease Symptom Checker Results'
    });
    var introCopy = doc.setFont('helvetica', 'bold').setFontSize('16').splitTextToSize(introText, maxLineWidth);
    doc.setTextColor('#001E46');
    doc.addImage('PDF_header.png', 'png', 0, 0, pageWidth, 0.64, '', 'NONE');
    doc.text(introCopy, margin, margin + 4 * oneLineHeight);
    var textLines = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(text, maxLineWidth);
    doc.text(textLines, margin, margin + 11 * oneLineHeight);
    var learnMore = doc.setFont('helvetica', 'bold').setFontSize('16').splitTextToSize(learnMoreText, maxLineWidth);
    doc.text(learnMore, margin, margin + 40 * oneLineHeight);
    // var legalTextBlock3 = doc
    //   .setFont('helvetica', 'normal')
    //   .setFontSize(fontSize)
    //   .splitTextToSize(legalCopy[12], maxLineWidth)
    // doc.text(legalTextBlock3, margin, margin + 46 * oneLineHeight)
    var legalTextBlock4 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[14], maxLineWidth);
    doc.text(legalTextBlock4, margin, margin + 49 * oneLineHeight);
    // NEW PAGE
    doc.addPage();
    doc.addImage('PDF_header.png', 'png', 0, 0, pageWidth, 0.64, '', 'NONE');
    var question1Block = doc.setFont('helvetica', 'bold').setFontSize('16').splitTextToSize(page2Copy.questions[0], maxLineWidth);
    doc.text(question1Block, margin, margin + 4 * oneLineHeight);
    var answer1Block = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(page2Copy.answers[0], maxLineWidth);
    doc.text(answer1Block, margin, margin + 5 * oneLineHeight);
    var question2Block = doc.setFont('helvetica', 'bold').setFontSize('16').splitTextToSize(page2Copy.questions[1], maxLineWidth);
    doc.text(question2Block, margin, margin + 13 * oneLineHeight);
    var answer2Block = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(page2Copy.answers[1], maxLineWidth);
    doc.text(answer2Block, margin, margin + 14 * oneLineHeight);
    var question3Block = doc.setFont('helvetica', 'bold').setFontSize('16').splitTextToSize(page2Copy.questions[2], maxLineWidth);
    doc.text(question3Block, margin, margin + 17 * oneLineHeight);
    var answer3Block = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(page2Copy.answers[2], maxLineWidth);
    doc.text(answer3Block, margin, margin + 18 * oneLineHeight);
    var question4Block = doc.setFont('helvetica', 'bold').setFontSize('16').splitTextToSize(page2Copy.questions[3], maxLineWidth);
    doc.text(question4Block, margin, margin + 21 * oneLineHeight);
    var answer4Block = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(page2Copy.answers[3], maxLineWidth);
    doc.text(answer4Block, margin, margin + 22 * oneLineHeight);
    var answer5Block = doc.setFont('helvetica', 'normal').setFontSize('10').splitTextToSize(page2Copy.answers[4], maxLineWidth);
    doc.text(answer5Block, margin, margin + 38 * oneLineHeight);
    var legalTextBlock4 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[14], maxLineWidth);
    doc.text(legalTextBlock4, margin, margin + 49 * oneLineHeight);
    // NEW PAGE
    doc.addPage();
    doc.addImage('PDF_header.png', 'png', 0, 0, pageWidth, 0.64, '', 'NONE');
    var legalTextBlock1 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[0], maxLineWidth);
    doc.text(legalTextBlock1, margin, margin + 4 * oneLineHeight);
    var legalTextBlock2 = doc.setFont('helvetica', 'bold').setFontSize(fontSize).splitTextToSize(legalCopy[1], maxLineWidth);
    doc.text(legalTextBlock2, margin, margin + 5 * oneLineHeight);
    var legalTextBlock3 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[2], maxLineWidth);
    doc.text(legalTextBlock3, margin, margin + 6 * oneLineHeight);
    var legalTextBlock4 = doc.setFont('helvetica', 'bold').setFontSize(fontSize).splitTextToSize(legalCopy[3], maxLineWidth);
    doc.text(legalTextBlock4, margin, margin + 11 * oneLineHeight);
    var legalTextBlock5 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[4], maxLineWidth);
    doc.text(legalTextBlock5, margin, margin + 12 * oneLineHeight);
    var legalTextBlock6 = doc.setFont('helvetica', 'bold').setFontSize(fontSize).splitTextToSize(legalCopy[5], maxLineWidth);
    doc.text(legalTextBlock6, margin, margin + 17 * oneLineHeight);
    var legalTextBlock7 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[6], maxLineWidth);
    doc.text(legalTextBlock7, margin, margin + 18 * oneLineHeight);
    var legalTextBlock7b = doc.setFont('helvetica', 'bold').setFontSize(fontSize).splitTextToSize(legalCopy[7], maxLineWidth);
    doc.text(legalTextBlock7b, margin, margin + 27 * oneLineHeight);
    var legalTextBlock8b = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[8], maxLineWidth);
    doc.text(legalTextBlock8b, margin, margin + 28 * oneLineHeight);
    var legalTextBlock8 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[9], maxLineWidth);
    doc.text(legalTextBlock8, margin, margin + 32 * oneLineHeight);
    var legalTextBlock9 = doc.setFont('helvetica', 'bold').setFontSize(fontSize).splitTextToSize(legalCopy[10], maxLineWidth);
    doc.text(legalTextBlock9, margin, margin + 33 * oneLineHeight);
    var legalTextBlock10 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[11], maxLineWidth);
    doc.text(legalTextBlock10, margin, margin + 34 * oneLineHeight);
    var legalTextBlock11 = doc.setFont('helvetica', 'bold').setFontSize(fontSize).splitTextToSize(legalCopy[12], maxLineWidth);
    doc.text(legalTextBlock11, margin, margin + 36 * oneLineHeight);
    var legalTextBlock12 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[13], maxLineWidth);
    doc.text(legalTextBlock12, margin, margin + 37 * oneLineHeight);
    var legalTextBlock13 = doc.setFont('helvetica', 'normal').setFontSize(fontSize).splitTextToSize(legalCopy[14], maxLineWidth);
    doc.text(legalTextBlock13, margin, margin + 49 * oneLineHeight);
    let timestamp = $3ab6ab907d252fb9$var$getTimestamp();
    doc.save(`Medtronic-Leg-Vein-Disease-Symptom-Checker-Results-${timestamp}.pdf`);
}


var $9dbb4acb43b30a66$exports = {};
$9dbb4acb43b30a66$exports = JSON.parse("[{\"questionType\":\"selectOne\",\"question\":\"How long have you been experiencing problems with your legs?\",\"answers\":[\"Less than 6 months\",\"6 months to 1 year\",\"1 to 2 years\",\"3 to 5 years\",\"6 to 10 years\",\"More than 10 years\"],\"response\":[]},{\"questionType\":\"selectOne\",\"question\":\"Do you need to sit down, lie down or put your feet up at any point during the day or night because your legs ache and/or swell? \",\"answers\":[\"Yes\",\"No\",\"Not sure\"],\"response\":[]},{\"questionType\":\"selectOne\",\"question\":\"Do you miss out on parts of your daily routine or doing activities you enjoy because your legs feel heavy, achy, stinging, throbbing, itchy or painful?\",\"answers\":[\"Yes\",\"No\",\"Not sure\"],\"response\":[]},{\"questionType\":\"selectOne\",\"question\":\"Has anyone in your blood-related family (such as siblings, parents or grandparents) ever had varicose veins or been diagnosed with chronic venous insufficiency (CVI) or leg vein disease?\",\"answers\":[\"Yes\",\"No\",\"Not sure\"],\"response\":[]},{\"questionType\":\"selectAll\",\"question\":\"Have you experienced any of these symptoms in your legs or ankles?\",\"answers\":[\"Bulging or visible varicose veins\",\"Leg pain\",\"Restless legs\",\"Tired/heavy legs\",\"Skin color or texture changes\",\"Tenderness\",\"Leg cramps\",\"Red/warm areas\",\"Aching\",\"Throbbing\",\"Itching\",\"Ulcers/open sores\",\"Burning/stinging\",\"Swelling\",\"None\"],\"response\":[]},{\"questionType\":\"selectOne\",\"question\":\"Have you previously talked with a doctor about these symptoms?\",\"answers\":[\"Yes\",\"No\",\"Not sure\"]},{\"questionType\":\"selectAll\",\"question\":\"Do you have any of these leg vein disease risk factors?\",\"answers\":[\"Family history\",\"Lack of exercise\",\"Leg injury or trauma\",\"Prolonged sitting or standing\",\"Obesity or excess weight\",\"Current or previous pregnancies\",\"A blood clot (deep vein thrombosis)\",\"Smoking\",\"None\"],\"response\":[]},{\"questionType\":\"selectOne\",\"question\":\"How concerned do you feel about your leg vein health, symptoms or pain at this time? \",\"answers\":[\"Not at all concerned\",\"Slightly concerned\",\"Somewhat concerned\",\"Moderately concerned\",\"Extremely concerned \"],\"response\":[]}]");


Vue.createApp({
    data () {
        return {
            quizStep: 0,
            quizFinished: false,
            results: '',
            quizData: $9dbb4acb43b30a66$exports,
            basicRequired: false,
            quizResults: [
                {
                    question: $9dbb4acb43b30a66$exports[0].question,
                    responses: []
                },
                {
                    question: $9dbb4acb43b30a66$exports[1].question,
                    responses: []
                },
                {
                    question: $9dbb4acb43b30a66$exports[2].question,
                    responses: []
                },
                {
                    question: $9dbb4acb43b30a66$exports[3].question,
                    responses: []
                },
                {
                    question: $9dbb4acb43b30a66$exports[4].question,
                    responses: []
                },
                {
                    question: $9dbb4acb43b30a66$exports[5].question,
                    responses: []
                },
                {
                    question: $9dbb4acb43b30a66$exports[6].question,
                    responses: []
                },
                {
                    question: $9dbb4acb43b30a66$exports[7].question,
                    responses: []
                }
            ]
        };
    },
    methods: {
        emailResults () {
            let formattedBody = "Your results indicate you may have leg vein disease, or chronic venous insufficiency (CVI).\n\nYour results:\n\n" + `Question 1: ${this.quizData[0].question} \nResponse: ${this.quizResults[0].responses} \n\n` + `Question 2: ${this.quizData[1].question} \nResponse: ${this.quizResults[1].responses} \n\n` + `Question 3: ${this.quizData[2].question} \nResponse: ${this.quizResults[2].responses} \n\n` + `Question 4: ${this.quizData[3].question} \nResponse: ${this.quizResults[3].responses} \n\n` + `Question 5: ${this.quizData[4].question} \nResponse: ${this.quizResults[4].responses} \n\n` + `Question 6: ${this.quizData[5].question} \nResponse: ${this.quizResults[5].responses} \n\n` + `Question 7: ${this.quizData[6].question} \nResponse: ${this.quizResults[6].responses} \n\n` + `Question 8: ${this.quizData[7].question} \nResponse: ${this.quizResults[7].responses} \n\n` + 'Learn more about CVI at medtronic.com/breakfree \n \n' + 'Disclaimer: This tool is not meant to diagnose or eliminate a diagnosis for any disease or condition. The list of symptoms and risk factors is not exhaustive. Talk to your doctor for further information. \n' + 'UC202213131a EN ©2022 Medtronic. Medtronic and the Medtronic logo are trademarks of Medtronic. All other brands are trademarks of a Medtronic company. 07/2022';
            let mailToLink = 'mailto:?subject=Your%20Medtronic%20Leg%20Vein%20Disease%20Symptom%20Checker%20Results&body=' + encodeURIComponent(formattedBody);
            window.location.href = mailToLink;
        },
        downloadResults: $3ab6ab907d252fb9$export$6e584cf86eed7fe0,
        nextStep () {
            if (this.quizStep + 1 == this.quizData.length && this.quizResults[this.quizStep].responses.length > 0) {
                if ((this.quizResults[1].responses.toLowerCase() == 'yes' || this.quizResults[2].responses.toLowerCase() == 'yes' || this.quizResults[3].responses.toLowerCase() == 'yes') && this.quizResults[4].responses.length > 0 && !this.quizResults[4].responses.includes('None')) {
                    this.basicRequired = false;
                    this.results = 'positive';
                    this.quizFinished = true;
                } else {
                    this.basicRequired = false;
                    this.results = 'negative';
                    this.quizFinished = true;
                }
            } else if (this.quizStep >= 0 && this.quizResults[this.quizStep].responses.length > 0) {
                this.basicRequired = false;
                this.quizStep++;
            } else this.basicRequired = true;
        },
        prevStep () {
            if (this.quizStep > 0) this.quizStep--;
        }
    },
    computed: {
        quizQuestions () {
            return this.quizResults.map(({ question: question  })=>question
            );
        },
        quizAnswers () {
            return this.quizResults.map(({ responses: responses  })=>responses
            );
        }
    }
}).mount('#quizApp');


