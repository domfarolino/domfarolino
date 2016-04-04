System.register(['angular2/platform/browser', './app/app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent);
            // In order to start the Service Worker located at "./sw.js"
            // uncomment this line. More about Service Workers here
            // https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('./sw.js').then(function (registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                }).catch(function (err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
            }
        }
    }
});
//# sourceMappingURL=main.js.map