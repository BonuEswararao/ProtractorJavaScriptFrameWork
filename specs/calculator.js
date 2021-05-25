const { browser } = require("protractor");
var calculatorPage = require('../pageObjects/calculatorPageObjects');

describe('Protractor Demo App', function () {

  beforeEach(function () {

  })

  it('Should have a title', function () {
    calculatorPage.homePage();
    expect(browser.getTitle()).toEqual('Super Calculator');
  });

  it('Should add Two Numbers', function () {
    calculatorPage.firstNumber.sendKeys("2");
    calculatorPage.secondNumber.sendKeys("3");
    calculatorPage.goBtn.click();
    expect(calculatorPage.result.getText()).toEqual("5");
  });
})