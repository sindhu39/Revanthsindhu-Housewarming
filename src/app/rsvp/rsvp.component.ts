import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class RsvpComponent {
  name: string = '';
  email: string = '';
  persons: number = 0;
  detailsVisible: boolean = false;

  constructor(private http: HttpClient) {}

  submitRsvp() {
    const rsvpDetails = { name: this.name, email: this.email,persons: this.persons };
    this.http.post('https://rsvp-backendrs-cd88dcc6415a.herokuapp.com/rsvp', rsvpDetails).subscribe(response => {
      console.log('RSVP confirmed', response);
    });
  }
  incrementAttendees() {
    this.persons += 1;
  }

  decrementAttendees() {
    if (this.persons > 0) {
      this.persons -= 1;
    }
  }
}
