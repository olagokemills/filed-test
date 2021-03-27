import { Payment } from './shared/models/payment.model'

export interface Appstate{
    readonly payment: Payment[]
}