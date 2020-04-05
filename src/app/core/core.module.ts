import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [AuthGuardService],
  declarations: [HeaderComponent, NavComponent],
  exports: [HeaderComponent, NavComponent]
})
export class CoreModule { }
