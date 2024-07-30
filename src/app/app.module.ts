// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InvitationComponent } from './invitation/invitation.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: InvitationComponent },
      { path: 'rsvp', component: RsvpComponent },
      { path: 'thankyou', component: ThankyouComponent }
    ])
  ],
  providers: []
})
export class AppModule { }
