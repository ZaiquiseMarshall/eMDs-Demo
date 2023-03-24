import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';

const routerOpts: ExtraOptions = {
  'scrollPositionRestoration' : 'enabled'
}
const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '**', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOpts)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
