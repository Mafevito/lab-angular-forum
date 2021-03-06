import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { SessionService } from '../services/session.service';
import { LoginComponent  } from './login/login.component';
import { SignupComponent  } from './signup/signup.component';

 export const routes: Routes = [
     { path: '', component: ThreadsComponent },
     { path: 'login', component: LoginComponent },
     { path: 'signup', component: SignupComponent },
     { path: '**', redirectTo: '' }
 ];
