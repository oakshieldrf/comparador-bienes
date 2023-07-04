const { src, dest, watch, series } = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

// CSS y SASS
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const cssnano = require("cssnano");

// Imagenes
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

// Config CSS
function css(done) {
  src("src/scss/app.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    // .pipe(postcss(autoprefixer()))
    .pipe(sourcemaps.write("."))
    .pipe(dest("build/css"));
  done();
}

// Config IMAGEN
function imagenes() {
  return src("src/img/**/*")
    .pipe(imagemin({ optimizationLevel: 3 }))
    .pipe(dest("build/img"));
}

function imgWebp() {
  const opciones = {
    quality: 90,
  };

  return src("src/img/**/*.{png,jpg}")
    .pipe(webp(opciones))
    .pipe(dest("build/img"));
}

// Config JS
function js() {
  return src("src/js/*.js")
    .pipe(concat("bundle.js"))
    .pipe(uglify())
    .pipe(dest("build/js"));
}

function dev() {
  watch("src/scss/**/*.scss", css);
  watch("src/img/**/*", imagenes);
  watch("src/js/**/*.js", js);
}

exports.css = css;
exports.js = js;
exports.imagenes = imagenes;
exports.imgWebp = imgWebp;
exports.dev = dev;
exports.default = series(imagenes, imgWebp, css, js, dev);
