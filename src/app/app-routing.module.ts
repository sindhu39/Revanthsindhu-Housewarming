// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationComponent } from './invitation/invitation.component';
import { RsvpComponent } from './rsvp/rsvp.component';

export const routes: Routes = [
  { path: '', component: InvitationComponent },
  { path: 'rsvp', component: RsvpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
