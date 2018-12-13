import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './routed/user-list/user-list.component';
import { UserCreateComponent } from './routed/user-create/user-create.component';
import { UserEditComponent } from './routed/user-edit/user-edit.component';
import { UserLoginComponent } from './routed/user-login/user-login.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserListComponent, UserCreateComponent, UserEditComponent, UserLoginComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
