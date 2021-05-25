var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    framework: 'jasmine2',
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/calculator.js'],
    directConnect: true,

    onPrepare: function () {
        switch(browser.params.baseUrl){
               case 'local':
               browser.params.url = "http://juliemr.github.io/protractor-demo/";
               break;
               case 'dit':
               browser.params.url = "http://juliemr.github.io/protractor-demo/";
               break;
               case 'sit':
               browser.params.url = "http://juliemr.github.io/protractor-demo/";
               break;
               default:
               browser.params.url = "http://juliemr.github.io/protractor-demo/";
        }
        //protractor-beautiful-reporter code
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports/screenshots'
        }).getJasmine2Reporter());

        //jasmine allure reporting
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport: {
                resultsDir: 'reports/allure-results'
            }
        }));
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }
}