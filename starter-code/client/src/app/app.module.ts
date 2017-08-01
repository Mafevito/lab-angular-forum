import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { ThreadsService } from '../services/threads.service';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { ThreadsComponent  } from './threads/threads.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreadsComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ThreadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
