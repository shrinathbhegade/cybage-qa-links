var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app',

    paths: {
        'jquery': '../lib/jquery-1.7.2.min',
        'knockout': '../lib/knockout-3.5.1',
        'pager': '../lib/pager.min',
       
    },


    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

