import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { StoreModule } from '@ngrx/store'
import { reducer } from './shared/reducers/payment.reducer';
import { AlternativeComponent } from './views/alternative/alternative.component';
import { FormComponent } from './views/form/form.component'

import { ToastrModule } from 'ngx-toastr'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AlternativeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      payment:reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
