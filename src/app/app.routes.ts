import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';

export const routes: Routes = [
    {path:'',component:LoginSignupComponent},
    {path:'main',loadChildren:()=>import('./pages/main/main.routes')}
];
