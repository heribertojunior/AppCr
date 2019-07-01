import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LogiPage } from './logi.page';
import { ShareModule } from 'src/app/Share/share.module';

const routes: Routes = [
  {
    path: '',
    component: LogiPage
  }
];

@NgModule({
  imports: [ShareModule, CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [LogiPage]
})
export class LogiPageModule {}
