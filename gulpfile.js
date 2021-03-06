const gulp = require("gulp");
const favicons = require("gulp-favicons");
const log = require("fancy-log");

gulp.task("favicon", function () {
  return gulp.src("img/logo.png").pipe(favicons({
    appName: "disjfa.github.io",
    appDescription: "disjfa.github.io",
    developerName: "disjfa",
    developerURL: "http://disjfa.nl/",
    background: "#2C3E50",
    theme_color: "#1abc9c",
    path: "/icon/",
    url: "https://disjfa.github.io/",
    display: "standalone",
    orientation: "portrait",
    start_url: "/?homescreen=1",
    version: 1.0,
    logging: false,
    online: false,
    html: "index.html",
    pipeHTML: true,
    replace: true,
  }))
    .on("error", log)
    .pipe(gulp.dest("./icon"));
});
