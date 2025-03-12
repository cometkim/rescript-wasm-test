import fs from "https://esm.sh/memfs@4.17.0";

export { fs };
export const cwd = "/";
export const src = new URL("/wasm/playground_main.wasm", import.meta.url);

const {
  promise: compiler,
  resolve: setCompiler,
} = Promise.withResolvers();

function abs(path) {
  return path.startsWith("/") ? path : cwd + path;
}

function na(label) {
  throw new Error(`${label} is not available`);
};

const strings = ["12.0.0-alpha.10", "5", "warning_error", "success", "warning_flag_error", "res", "unexpected_error"];
const fragments = {
  get_Array: (a) => a.Array,
  get_Date: (a) => a.Date,
  get_Error: (a) => a.Error,
  get_JSON: (a) => a.JSON,
  get_Math: (a) => a.Math,
  get_Object: (a) => a.Object,
  get_RegExp: (a) => a.RegExp,
  get_String: (a) => a.String,
  get_length: (a) => a.length,
  js_expr_12c48ca8: () => ({}),
  js_expr_21711c2a: () => ({}),
  js_expr_2d7ff750: () =>
    function(a) {
      throw a;
    },
  meth_call_0_toString: (a) => a.toString(),
  obj_0: (a, b, c) => ({
    api_version: a,
    version: b,
    make: c,
  }),
  obj_1: (a, b, c, d, e, f, g, h) => ({
    version: a,
    rescript: b,
    convertSyntax: c,
    setModuleSystem: d,
    setFilename: e,
    setWarnFlags: f,
    setOpenModules: g,
    getConfig: h,
  }),
  obj_10: (a, b) => ({
    msg: a,
    type: b,
  }),
  obj_2: (a, b, c) => ({
    module_system: a,
    warn_flags: b,
    open_modules: c,
  }),
  obj_3: (a, b) => ({
    errors: a,
    type: b,
  }),
  obj_4: (a, b, c, d) => ({
    js_code: a,
    warnings: b,
    type_hints: c,
    type: d,
  }),
  obj_5: (a, b, c) => ({
    msg: a,
    warn_flags: b,
    type: c,
  }),
  obj_6: (a, b) => ({
    line: a,
    col: b,
  }),
  obj_7: (a, b) => ({
    line: a,
    col: b,
  }),
  obj_8: (a, b, c, d) => ({
    start: a,
    end: b,
    kind: c,
    hint: d,
  }),
  obj_9: (a, b, c, d) => ({
    code: a,
    fromLang: b,
    toLang: c,
    type: d,
  }),
  set_rescript_compiler: (a, b) => setCompiler(b),
};

const M = {
  ...Math,
  fmod: (a, b) => a % b,
};

const u = [
  Float32Array,
  Float64Array,
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Int32Array,
  Int32Array,
  Int32Array,
  Float32Array,
  Float64Array,
  Uint8Array,
  Uint16Array,
  Uint8ClampedArray,
];

const open_flags = [
  fs.constants.RDONLY,
  fs.constants.O_WRONLY,
  fs.constants.O_RDWR,
  fs.constants.O_APPEND,
  fs.constants.O_CREAT,
  fs.constants.O_TRUNC,
  fs.constants.O_EXCL,
  fs.constants.O_NONBLOCK,
];

var c = {
  map: new WeakMap(),
  set: new Set(),
  finalization: new FinalizationRegistry((a) => c.set.delete(a)),
};

function P(a) {
  const b = new WeakRef(a);
  c.map.set(a, b);
  c.set.add(b);
  c.finalization.register(a, b, a);
}

function T(a) {
  const b = c.map.get(a);
  if (b) {
    c.map.delete(a);
    c.set.delete(b);
    c.finalization.unregister(a);
  }
}

function B() {
  return [...c.set].map((a) => a.deref()).filter((a) => a);
}

const l = new TextDecoder("utf-8", { ignoreBOM: 1 });
const C = new TextEncoder();

function F(a, b) {
  b = Math.imul(b, 0xcc9e2d51 | 0);
  b = (b << 15) | (b >>> 17);
  b = Math.imul(b, 0x1b873593);
  a ^= b;
  a = (a << 13) | (a >>> 19);
  return (((a + (a << 2)) | 0) + (0xe6546b64 | 0)) | 0;
}

function G(a, b) {
  for (var c = 0; c < b.length; c++) a = F(a, b.charCodeAt(c));
  return a ^ b.length;
}

function k(a, b) {
  var c;
  if (a.isFile()) c = 0;
  else if (a.isDirectory()) c = 1;
  else if (a.isCharacterDevice()) c = 2;
  else if (a.isBlockDevice()) c = 3;
  else if (a.isSymbolicLink()) c = 4;
  else if (a.isFIFO()) c = 5;
  else if (a.isSocket()) c = 6;
  return x(
    b,
    a.dev,
    a.ino | 0,
    c,
    a.mode,
    a.nlink,
    a.uid,
    a.gid,
    a.rdev,
    BigInt(a.size),
    a.atimeMs / 1000,
    a.mtimeMs / 1000,
    a.ctimeMs / 1000,
  );
}

const w = {
  jstag:
    WebAssembly.JSTag ||
    new WebAssembly.Tag({
      parameters: ["externref"],
      results: [],
    }),
  identity: (a) => a,
  from_bool: (a) => !!a,
  get: (a, b) => a[b],
  set: (a, b, c) => (a[b] = c),
  delete: (a, b) => delete a[b],
  instanceof: (a, b) => a instanceof b,
  typeof: (a) => typeof a,
  equals: (a, b) => a == b,
  strict_equals: (a, b) => a === b,
  fun_call: (a, b, c) => a.apply(b, c),
  meth_call: (a, b, c) => a[b].apply(a, c),
  new_array: (a) => new Array(a),
  new_obj: () => ({}),
  new: (a, b) => new a(...b),
  global_this: globalThis,
  iter_props: (a, b) => {
    for (var c in a) if (Object.hasOwn(a, c)) b(c);
  },
  array_length: (a) => a.length,
  array_get: (a, b) => a[b],
  array_set: (a, b, c) => (a[b] = c),
  read_string: (a) => l.decode(new Uint8Array(h, 0, a)),
  read_string_stream: (a, b) =>
    l.decode(new Uint8Array(h, 0, a), {
      stream: b,
    }),
  append_string: (a, b) => a + b,
  write_string: (a) => {
    var c = 0,
      b = a.length;
    for (; ;) {
      const { read: d, written: e } = C.encodeInto(a.slice(c), O);
      b -= d;
      if (!b) return e;
      z(e);
      c += d;
    }
  },
  ta_create: (a, b) => new u[a](b),
  ta_normalize: (a) => (a instanceof Uint32Array ? new Int32Array(a.buffer, a.byteOffset, a.length) : a),
  ta_kind: (b) => u.findIndex((a) => b instanceof a),
  ta_length: (a) => a.length,
  ta_get_f64: (a, b) => a[b],
  ta_get_f32: (a, b) => a[b],
  ta_get_i32: (a, b) => a[b],
  ta_get_i16: (a, b) => a[b],
  ta_get_ui16: (a, b) => a[b],
  ta_get_i8: (a, b) => a[b],
  ta_get_ui8: (a, b) => a[b],
  ta_get16_ui8: (a, b) => a[b] | (a[b + 1] << 8),
  ta_get32_ui8: (a, b) => a[b] | (a[b + 1] << 8) | (a[b + 2] << 16) | (a[b + 3] << 24),
  ta_set_f64: (a, b, c) => (a[b] = c),
  ta_set_f32: (a, b, c) => (a[b] = c),
  ta_set_i32: (a, b, c) => (a[b] = c),
  ta_set_i16: (a, b, c) => (a[b] = c),
  ta_set_ui16: (a, b, c) => (a[b] = c),
  ta_set_i8: (a, b, c) => (a[b] = c),
  ta_set_ui8: (a, b, c) => (a[b] = c),
  ta_set16_ui8: (a, b, c) => {
    a[b] = c;
    a[b + 1] = c >> 8;
  },
  ta_set32_ui8: (a, b, c) => {
    a[b] = c;
    a[b + 1] = c >> 8;
    a[b + 2] = c >> 16;
    a[b + 3] = c >> 24;
  },
  ta_fill: (a, b) => a.fill(b),
  ta_blit: (a, b) => b.set(a),
  ta_subarray: (a, b, c) => a.subarray(b, c),
  ta_set: (a, b, c) => a.set(b, c),
  ta_new: (a) => new Uint8Array(a),
  ta_copy: (a, b, c, d) => a.copyWithin(b, c, d),
  ta_bytes: (a) => new Uint8Array(a.buffer, a.byteOffset, a.length * a.BYTES_PER_ELEMENT),
  ta_blit_from_string: (a, b, c, d, e) => {
    for (let f = 0; f < e; f++) c[d + f] = R(a, b + f);
  },
  ta_blit_to_string: (a, b, c, d, e) => {
    for (let f = 0; f < e; f++) S(c, d + f, a[b + f]);
  },
  wrap_callback: (b) =>
    function(...a) {
      if (a.length === 0) a = [undefined];
      return d(b, a.length, a, 1);
    },
  wrap_callback_args: (b) =>
    function(...a) {
      return d(b, 1, [a], 0);
    },
  wrap_callback_strict: (c, b) =>
    function(...a) {
      a.length = c;
      return d(b, c, a, 0);
    },
  wrap_callback_unsafe: (b) =>
    function(...a) {
      return d(b, a.length, a, 2);
    },
  wrap_meth_callback: (b) =>
    function(...a) {
      a.unshift(this);
      return d(b, a.length, a, 1);
    },
  wrap_meth_callback_args: (b) =>
    function(...a) {
      return d(b, 2, [this, a], 0);
    },
  wrap_meth_callback_strict: (c, b) =>
    function(...a) {
      a.length = c;
      a.unshift(this);
      return d(b, a.length, a, 0);
    },
  wrap_meth_callback_unsafe: (b) =>
    function(...a) {
      a.unshift(this);
      return d(b, a.length, a, 2);
    },
  wrap_fun_arguments: (b) =>
    function(...a) {
      return b(a);
    },
  format_float: (a, b, c, d) => {
    function j(a, b) {
      if (Math.abs(a) < 1.0) return a.toFixed(b);
      else {
        var c = Number.parseInt(a.toString().split("+")[1]);
        if (c > 20) {
          c -= 20;
          a /= Math.pow(10, c);
          a += new Array(c + 1).join("0");
          if (b > 0) a = a + "." + new Array(b + 1).join("0");
          return a;
        } else return a.toFixed(b);
      }
    }
    switch (b) {
      case 0:
        var e = d.toExponential(a),
          f = e.length;
        if (e.charAt(f - 3) === "e") e = e.slice(0, f - 1) + "0" + e.slice(f - 1);
        break;
      case 1:
        e = j(d, a);
        break;
      case 2:
        a = a ? a : 1;
        e = d.toExponential(a - 1);
        var i = e.indexOf("e"),
          h = +e.slice(i + 1);
        if (h < -4 || d >= 1e21 || d.toFixed(0).length > a) {
          var f = i - 1;
          while (e.charAt(f) === "0") f--;
          if (e.charAt(f) === ".") f--;
          e = e.slice(0, f + 1) + e.slice(i);
          f = e.length;
          if (e.charAt(f - 3) === "e") e = e.slice(0, f - 1) + "0" + e.slice(f - 1);
          break;
        } else {
          var g = a;
          if (h < 0) {
            g -= h + 1;
            e = d.toFixed(g);
          } else while (((e = d.toFixed(g)), e.length > a + 1)) g--;
          if (g) {
            var f = e.length - 1;
            while (e.charAt(f) === "0") f--;
            if (e.charAt(f) === ".") f--;
            e = e.slice(0, f + 1);
          }
        }
        break;
    }
    return c ? " " + e : e;
  },
  gettimeofday: () => new Date().getTime() / 1000,
  gmtime: (a) => {
    var b = new Date(a * 1000),
      c = b.getTime(),
      e = new Date(Date.UTC(b.getUTCFullYear(), 0, 1)).getTime(),
      d = Math.floor((c - e) / 86400000);
    return n(
      b.getUTCSeconds(),
      b.getUTCMinutes(),
      b.getUTCHours(),
      b.getUTCDate(),
      b.getUTCMonth(),
      b.getUTCFullYear() - 1900,
      b.getUTCDay(),
      d,
      false,
    );
  },
  localtime: (a) => {
    var b = new Date(a * 1000),
      c = b.getTime(),
      f = new Date(b.getFullYear(), 0, 1).getTime(),
      d = Math.floor((c - f) / 86400000),
      e = new Date(b.getFullYear(), 0, 1),
      g = new Date(b.getFullYear(), 6, 1),
      h = Math.max(e.getTimezoneOffset(), g.getTimezoneOffset());
    return n(
      b.getSeconds(),
      b.getMinutes(),
      b.getHours(),
      b.getDate(),
      b.getMonth(),
      b.getFullYear() - 1900,
      b.getDay(),
      d,
      b.getTimezoneOffset() < h,
    );
  },
  mktime: (a, b, c, d, e, f) => new Date(a, b, c, d, e, f).getTime(),
  random_seed: () => crypto.getRandomValues(new Int32Array(12)),
  open: (a, d, c) => {
    a = abs(a);
    return fs.openSync(
      a,
      open_flags.reduce((a, b, c) => (d & (1 << c) ? a | b : a), 0),
      c,
    );
  },
  close: (a) => {
    a = abs(a);
    return fs.closeSync(a);
  },
  write: (a, b, c, d, e) => {
    return fs.writeSync(a, b, c, d, e === null ? e : Number(e));
  },
  read: (a, b, c, d, e) => {
    return fs.readSync(a, b, c, d, e);
  },
  file_size: (a) => {
    return fs.fstatSync(a, {
      bigint: true,
    }).size;
  },
  register_channel: P,
  unregister_channel: T,
  channel_list: B,
  exit: (a) => console.log(`exited ${a}`),
  argv: () => ["a.out"],
  on_windows: () => false,
  getenv: () => null,
  system: () => na("node:child_process"),
  isatty: () => false,
  time: () => performance.now(),
  getcwd: () => cwd,
  chdir: (a) => na("node:process.chdir()"),
  mkdir: (a, b) => fs.mkdirSync(a, b),
  rmdir: (a) => fs.rmdirSync(a),
  unlink: (a) => fs.unlinkSync(a),
  readdir: (a) => fs.readdirSync(a),
  stat: (a, b) => k(fs.statSync(a), b),
  lstat: (a, b) => k(fs.lstatSync(a), b),
  fstat: (a, b) => k(fs.fstatSync(a), b),
  file_exists: (a) => +fs.existsSync(a),
  is_directory: (a) => +fs.lstatSync(a).isDirectory(),
  utimes: (a, b, c) => fs.utimesSync(a, b, c),
  truncate: (a, b) => fs.truncateSync(a, b),
  ftruncate: (a, b) => fs.ftruncateSync(a, b),
  rename: (a, b) => fs.renameSync(a, b),
  throw: (a) => {
    throw a;
  },
  start_fiber: () => na("ocaml:effects"),
  suspend_fiber: () => na("ocaml:effects"),
  resume_fiber: () => na("ocaml:effects"),
  weak_new: (a) => new WeakRef(a),
  weak_deref: (a) => {
    var b = a.deref();
    return b === undefined ? null : b;
  },
  weak_map_new: () => new WeakMap(),
  map_new: () => new Map(),
  map_get: (a, b) => {
    var c = a.get(b);
    return c === undefined ? null : c;
  },
  map_set: (a, b, c) => a.set(b, c),
  map_delete: (a, b) => a.delete(b),
  log: (a) => console.log(a),
};

const m = {
  test: (a) => +(typeof a === "string"),
  compare: (a, b) => (a < b ? -1 : +(a > b)),
  hash: G,
  decodeStringFromUTF8Array: () => "",
  encodeStringToUTF8Array: () => 0,
  fromCharCodeArray: () => "",
};

const imports = {
  Math: M,
  bindings: w,
  "wasm:js-string": m,
  "wasm:text-decoder": m,
  "wasm:text-encoder": m,
  js: {},
  env: {},
  strings,
  fragments,
};

const compileOptions = {
  builtins: ["js-string", "text-decoder", "text-encoder"],
};

const wasm = await WebAssembly.instantiateStreaming(
  fetch(src),
  imports,
  compileOptions,
);

var {
  caml_callback: d,
  caml_alloc_tm: n,
  caml_alloc_stat: x,
  caml_handle_uncaught_exception: o,
  caml_buffer: y,
  caml_extract_string: z,
  string_get: R,
  string_set: S,
  _initialize,
} = wasm.instance.exports,
  h = y?.buffer,
  O = h && new Uint8Array(h, 0, h.length);

export async function initialize() {
  globalThis.addEventListener("error", (a) => a.error && o(a.error));
  await _initialize();
  return await compiler;
}
