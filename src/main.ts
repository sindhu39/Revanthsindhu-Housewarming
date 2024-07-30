// src/main.ts
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app/app.component';
import { InvitationComponent } from './app/invitation/invitation.component';
import { RsvpComponent } from './app/rsvp/rsvp.component';
import { ThankyouComponent } from './app/thankyou/thankyou.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, HttpClientModule),
    provideRouter([
      { path: '', component: InvitationComponent },
      { path: 'rsvp', component: RsvpComponent },
      {path: 'thankyou', component: ThankyouComponent}
    ])
  ]
}).catch(err => console.error(err));
