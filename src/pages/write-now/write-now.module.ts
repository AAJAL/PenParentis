import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WriteNowPage } from './write-now';
//import {UserWritesPage} from '../user-writes/user-writes';

@NgModule({
  declarations: [
    WriteNowPage,
  ],
  imports: [
    IonicPageModule.forChild(WriteNowPage),
  ],
})
export class WriteNowPageModule {}
