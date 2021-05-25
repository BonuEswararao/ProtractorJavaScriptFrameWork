const { element } = require("protractor");

var protoCommercePage = function(){
    this.name = element(by.name('name'));
    this.email = element(by.css('input[type="text"]'));
    this.password = element(by.id('exampleInputPassword1'));
    this.checkbox = element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female"));
    this.studentEmpStatus = element.all(by.name('inlineRadioOptions')).first();
    this.submitBtn = element(by.buttonText('Submit'));
    this.submitSuccess = element(by.css("div[class='alert alert-success alert-dismissable']"));
    this.angularError = element(by.css("div[class='alert alert-danger']"));
    this.shopLink = element(by.linkText("Shop"));
    this.productList = element.all(by.tagName("app-card"));
    this.addButton = element(by.css("button[class='btn btn-info']"));
    this.checkOutBtn = element(by.partialLinkText('Checkout'));

}