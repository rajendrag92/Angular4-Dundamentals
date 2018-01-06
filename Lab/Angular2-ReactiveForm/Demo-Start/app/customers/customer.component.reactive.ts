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
    showAddress:false
    invalidFristName:any
    constructor(private formBuilder:FormBuilder){

    }

     ngOnInit(): void {

        this.customerForm = this.formBuilder.group({
            firstName: ['',Validators.required],
            lastName:['',Validators.required],
            email:['',Validators.required],
            isCatlog:[false]
        });

        this.customerForm.get('isCatlog').valueChanges.subscribe( value => {
            console.log("Value intrested " + value);
               this.showAddress=value; 
        })

        const firstName = this.customerForm.get('firstName');

        firstName.valueChanges.subscribe( frm => {

                console.log(frm);
               this.invalidFristName = (firstName.dirty||firstName.touched) 
                                            && firstName.valid; 
        })


     }

 }