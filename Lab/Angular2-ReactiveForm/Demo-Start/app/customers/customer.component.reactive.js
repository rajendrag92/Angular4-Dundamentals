"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var CustomerReactiveComponent = (function () {
    function CustomerReactiveComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    CustomerReactiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerForm = this.formBuilder.group({
            firstName: ['', forms_1.Validators.required],
            lastName: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            isCatlog: [false]
        });
        this.customerForm.get('isCatlog').valueChanges.subscribe(function (value) {
            console.log("Value intrested " + value);
            _this.showAddress = value;
        });
        var firstName = this.customerForm.get('firstName');
        firstName.valueChanges.subscribe(function (frm) {
            console.log(frm);
            _this.invalidFristName = (firstName.dirty || firstName.touched)
                && firstName.valid;
        });
    };
    CustomerReactiveComponent = __decorate([
        core_1.Component({
            selector: 'customer-reactive',
            templateUrl: './app/customers/customer.component.reactive.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], CustomerReactiveComponent);
    return CustomerReactiveComponent;
}());
exports.CustomerReactiveComponent = CustomerReactiveComponent;
//# sourceMappingURL=customer.component.reactive.js.map