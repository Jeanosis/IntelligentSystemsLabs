(function (global) {
    // /***********************************************************************************************
    // * User Configuration.
    // **********************************************************************************************/
    // /** Map relative paths to URLs. */
    // const map: any = {
    // };

    // /** User packages configuration. */
    // const packages: any = {
    // };

    // ////////////////////////////////////////////////////////////////////////////////////////////////
    // /***********************************************************************************************
    //  * Everything underneath this line is managed by the CLI.
    //  **********************************************************************************************/
    // const barrels: string[] = [
    // // Angular specific barrels.
    // '@angular/core',
    // '@angular/common',
    // '@angular/compiler',
    // '@angular/http',
    // '@angular/router',
    // '@angular/platform-browser',
    // '@angular/platform-browser-dynamic',
    // '@angular/forms',
    // '@angular/material',
    // // Thirdparty barrels.
    // 'rxjs',
    // 'ng2-cookies',
    // // App specific barrels.
    // 'app',
    // 'app/shared',
    // /** @cli-barrel */
    // ];

    // const cliSystemConfigPackages: any = {};
    // barrels.forEach((barrelName: string) => {
    //     cliSystemConfigPackages[barrelName] = { main: 'index' };
    // });

    // /** Type declaration for ambient System. */
    // declare var System: any;

    // // Apply the CLI SystemJS configuration.
    // System.config({
    // map: {
    //     '@angular/material': 'lib/@angular/material',
    //     '@angular': 'lib/@angular',
    //     'rxjs': 'lib/rxjs',
    //     'ng2-cookies': 'lib/@angular/cookies'
    //     'main': '../main.js'
    // },
    // packages: cliSystemConfigPackages
    // });

    // // Apply the user's configuration.
    // System.config({ map, packages });
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/',
            'lib:': 'lib/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',
            'app/shared': 'app/shared',
            // angular bundles
            '@angular/core': 'lib:@angular/core.umd.js',
            '@angular/common': 'lib:@angular/common.umd.js',
            '@angular/compiler': 'lib:@angular/compiler.umd.js',
            '@angular/platform-browser': 'lib:@angular/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'lib:@angular/platform-browser-dynamic.umd.js',
            '@angular/http': 'lib:@angular/http.umd.js',
            '@angular/router': 'lib:@angular/router.umd.js',
            '@angular/forms': 'lib:@angular/forms.umd.js',
            '@angular/material': 'lib:@angular/material/material.umd.js',
            // other libraries
            'ng2-cookies': 'lib:@angular/cookies',
            'rxjs': 'lib:rxjs'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: '../main.js',
                defaultExtension: 'js'
            },
            'ng2-cookies': {
                main: 'ng2-cookies.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'app/shared': {
                defaultExtension: 'js'
            }
        }
    });
})(this);