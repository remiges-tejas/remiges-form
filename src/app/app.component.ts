import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { FormComponent } from './componenets/form/form.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { UserdetailsComponent } from "./componenets/userdetails/userdetails.component";
import { DemoToggleComponent } from "./demo-toggle/demo-toggle.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FormComponent, FooterComponent, UserdetailsComponent, DemoToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'registration';
}
