import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './modules/users/user-details/user-details.component';
import { UserListComponent } from './modules/users/user-list/user-list.component';
import { UsersComponent } from './modules/users/users.component';
import { RootNavComponent } from './root-nav/root-nav.component';
import { TestComponent } from './root-nav/test/test.component';


const routes: Routes = [
  { path: '', redirectTo: "login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UsersComponent },
   { path: 'root-nav', component: RootNavComponent },
  { path: 'user-list',   component: UserListComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'test', component: TestComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
