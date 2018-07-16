import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonsPage } from './salons';

@NgModule({
  declarations: [
    SalonsPage,
  ],
  imports: [
    IonicPageModule.forChild(SalonsPage),
  ],
})
export class SalonsPageModule {}
