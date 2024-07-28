import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InvitationComponent {
  constructor(private router: Router) {}

  RSVP() {
    this.router.navigate(['/rsvp']);
  }
}
