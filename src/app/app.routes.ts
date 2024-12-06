import { Routes } from '@angular/router';
import { UserdetailsComponent } from './componenets/userdetails/userdetails.component';
import { FormComponent } from './componenets/form/form.component';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'data',
    component: UserdetailsComponent,
  },
  {
    path: 'register',
    component: FormComponent,
  },
];
