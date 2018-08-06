import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserWritesPage } from './user-writes';

@NgModule({
  declarations: [
    UserWritesPage,
  ],
  imports: [
    IonicPageModule.forChild(UserWritesPage),
  ],
})
export class UserWritesPageModule {}
