import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  title = 'navbar';

  orgName = environment.companyName;
  orgLogo = environment.companyLogo;

  userImage = 'https://avatars.githubusercontent.com/u/74348222?v=4';

  // Mobile Dropdown Toggle Logic
  mobileView = true;
  showMobileView() {
    if (this.mobileView) {
      this.mobileView = false;
    } else {
      this.mobileView = true;
    }
  }
}
``;
