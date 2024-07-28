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
  attendees: number = 0;
  detailsVisible: boolean = false;

  constructor(private http: HttpClient) {}

  submitRsvp() {
    const rsvpDetails = { name: this.name, email: this.email };
    this.http.post('http://your-golang-api-url/rsvp', rsvpDetails).subscribe(response => {
      console.log('RSVP confirmed', response);
    });
  }
  incrementAttendees() {
    this.attendees += 1;
  }

  decrementAttendees() {
    if (this.attendees > 0) {
      this.attendees -= 1;
    }
  }
}
