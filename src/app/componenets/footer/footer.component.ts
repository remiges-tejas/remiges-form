import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  todayDate = new Date().toLocaleDateString();

  logo =
    'https://remiges.tech/wp-content/uploads/2020/06/Remiges-logo-inverse_white.svg';
  cName = environment.companyName;
  version = environment.app_version;
  release_date = environment.app_release_date;
}
