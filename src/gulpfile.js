/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    del = require('del');

var webroot = "./wwwroot/";
var angular = "./node_modules/@angular/";

var paths = {
    js: webroot + "js/**/*.js",
    minJs: webroot + "js/**/*.min.js",
    css: webroot + "css/**/*.css",
    minCss: webroot + "css/**/*.min.css",
    concatJsDest: webroot + "js/site.min.js",
    concatCssDest: webroot + "css/site.min.css",
    appScripts: [
        webroot + "app/**/*.js",
        webroot + "app/**/*.map"
    ],
    libs: {
        angular: [
            angular + "core/bundles/core.umd.js",
            angular + "common/bundles/common.umd.js",
            angular + "compiler/bundles/compiler.umd.js",
            angular + "platform-browser/bundles/platform-browser.umd.js",
            angular + "platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            angular + "http/bundles/http.umd.js",
            angular + "router/bundles/router.umd.js",
            angular + "forms/bundles/forms.umd.js",
            angular + "material/bundles/material.umd.js"
        ],
        rxjs: "node_modules/rxjs/**/*.js",
        others: [
            "node_modules/zone.js/dist/zone.js",
            "node_modules/reflect-metadata/Reflect.js",
            "node_modules/systemjs/dist/system.src.js"
        ]
    }
};

gulp.task("lib", function() {
    gulp.src(paths.libs.angular).pipe(gulp.dest(webroot + "/lib/@angular"));
    gulp.src(paths.libs.rxjs).pipe(gulp.dest(webroot + "/lib/rxjs"));
    gulp.src(paths.libs.others).pipe(gulp.dest(webroot + "/lib/"));
});

gulp.task("clean:app_scripts", function () {
    return del(paths.appScripts);
});

gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);
