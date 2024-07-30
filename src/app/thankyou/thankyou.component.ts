import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  template: `
    <div class="thank-you-container">
    <img src="assets/thankyou.jpg" alt="Thank You" class="thank-you-image">
      <h1>Your RSVP has been successfully submitted.</h1>
      <button (click)="goHome()">Return Home</button>
    </div>
  `,
  standalone: true,
  imports: [RouterModule],
  styles: [`
    .thank-you-container {
      text-align: center;
      padding: 20px;
    }
    .thank-you-image {
      max-width: 100%;
      height: auto;
      margin-bottom: 20px;
    }
  `]
})
export class ThankyouComponent {
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}