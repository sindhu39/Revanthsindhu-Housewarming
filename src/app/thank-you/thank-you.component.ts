import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-thank-you',
  template: `
    <div>
      <h1>Thank You!</h1>
      <p>Your RSVP has been successfully submitted.</p>
      <button (click)="goHome()">Return Home</button>
    </div>
  `,
  standalone: true,
  imports: [RouterModule]
})
export class ThankYouComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
