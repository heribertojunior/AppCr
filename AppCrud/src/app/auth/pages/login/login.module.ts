import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { ShareModule } from 'src/app/Share/share.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [ShareModule, CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [LoginPage]
})
export class LoginPageModule {}
