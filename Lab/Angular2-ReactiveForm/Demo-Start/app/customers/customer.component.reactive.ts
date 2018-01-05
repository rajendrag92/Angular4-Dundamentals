import {Customer} from './customer'
import {Component,OnInit} from '@angular/core'
import {FormGroup,Validators,FormArray,AbstractControl,FormBuilder,FormControl,FormControlName}
 from '@angular/forms'


 @Component({
     selector:'customer-reactive',
     templateUrl:'./app/customers/customer.component.reactive.html'
 })
 export class CustomerReactiveComponent implements OnInit{
    customerForm : FormGroup
    customerModel : Customer

    constructor(private formBuilder:FormBuilder){

    }

     ngOnInit(): void {
        this.customerForm = this.formBuilder.group({
            firstName: ['',Validators.required],
            lastName:['',Validators.required],
            email:['',Validators.required],
            IsCatlog:[false]
        });
     }

 }