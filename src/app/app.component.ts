import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private router: Router) {
    // Constructor logic
  }

  navigateToAboutUs() {
    const element = document.querySelector('.about-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToHome() {
    const element = document.querySelector('.top-line');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateToWhatWeOffer() {
    const element = document.querySelector('.centered');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  navigateTocompanydetails() {
    const element = document.querySelector('.company-details');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
