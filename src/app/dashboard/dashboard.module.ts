import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ShareModule} from '../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ShareModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
