import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../src/app/header/header.component';
import { BookingComponent } from './booking/booking.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'booking', component: BookingComponent },
  { path: '', component: WrapperComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
