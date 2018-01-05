import {Customer} from './customer'
import {Component,OnInit} from '@angular/core'
import {FormGroup,FormArray,AbstractControl,FormBuilder,FormControl,FormControlName}
 from '@angular/forms'
import {  } from '@angular/core/src/metadata/lifecycle_hooks';

 @Component({
     selector:'customer-reactive',
     templateUrl:'./app/customers/customer.component.reactive.html'
 })
 export class CustomerReactiveComponent implements OnInit{
     ngOnInit(): void {
         throw new Error("Method not implemented.");
     }

 }