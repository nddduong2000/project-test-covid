import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DatePickerCustormComponent} from "./_component/form/date-picker-custorm/date-picker-custorm.component";

const routes: Routes = [
  {
    path: '',
    component: DatePickerCustormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
