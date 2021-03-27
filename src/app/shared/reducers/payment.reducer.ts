import { Action } from '@ngrx/store'
import { Payment } from '../models/payment.model'
import * as PaymentActions from '../actions/payment.action'

export function reducer(state: Payment[], action:PaymentActions.Actions)
{
    switch(action.type){
        case PaymentActions.ADD_PAYMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}