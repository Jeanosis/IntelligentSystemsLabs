(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/',
            'lib:': 'js/lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            // angular bundles
            '@angular/core': 'lib:@angular/core.umd.js',
            '@angular/common': 'lib:@angular/common.umd.js',
            '@angular/compiler': 'lib:@angular/compiler.umd.js',
            '@angular/platform-browser': 'lib:@angular/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'lib:@angular/platform-browser-dynamic.umd.js',
            '@angular/http': 'lib:@angular/http.umd.js',
            '@angular/router': 'lib:@angular/router.umd.js',
            '@angular/forms': 'lib:@angular/forms.umd.js',
            // other libraries
            'rxjs': 'lib:rxjs',
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);