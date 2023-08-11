import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  }
];


@NgModule({
  declarations: [ LandingPageComponent ],
  imports: [
    CommonModule,  RouterModule.forChild(routes),

  ],
  exports:[
    LandingPageComponent
  ],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class LandingPageModule { }
