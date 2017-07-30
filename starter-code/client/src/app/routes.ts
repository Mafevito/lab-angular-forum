import { Routes } from '@angular/router';
import { ThreadsComponent } from './threads/threads.component';
import { SessionService } from '../services/session.service';

 export const routes: Routes = [
     { path: '', component: ThreadsComponent },
     { path: '**', redirectTo: '' }
 ];
