import { Component, OnInit } from '@angular/core';
import { Payment } from '../../shared/models/payment.model'
import { Store } from '@ngrx/store'
import { Appstate } from './../../app.state';
import * as PaymentActions from '../../shared/actions/payment.action'
import { PaymentsService } from 'src/app/shared/services/payments.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  PaymentForm: FormGroup;

  constructor(
    private store: Store<Appstate>,
    private paymentService: PaymentsService,
    private toastrService: ToastrService,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {
    this.PaymentForm = this.fb.group({
      FirstName: ['', [Validators.required]],
      LastName: ['', [Validators.required]],
      Email: ['',[Validators.required]],
      Budget:['', [Validators.required]],
      Phone:['', [Validators.required]],
    })   
  }


  postBudget(payment: Payment)
  {
    this.paymentService.postPayment(payment).subscribe(
      res=>{
        if(res)
        {
          this.toastrService.success('Posted Successfully')
        }
      },
      err=>{
        this.toastrService.error('Something went wrong')
      }
    )
  }

}
