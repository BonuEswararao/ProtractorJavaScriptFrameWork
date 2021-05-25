const { element, browser } = require("protractor");
 
var calculatorPage = function(){
    this.firstNumber = element(by.model('first'));
    this.secondNumber = element(by.model('second')); 
    this.goBtn = element(by.id('gobutton'));
    this.result = element(by.css('h2[class="ng-binding"]'));

    this.homePage = function(){   
        var webUrl = browser.params.url;
        console.log("Current Environment is : "+browser.params.url);
        console.log("Web Url is : "+webUrl)
        browser.get(webUrl);
    }
}

module.exports = new calculatorPage();