import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutPageComponent} from './about-page/about-page.component';
import {ContactListComponent} from './contact-list/contact-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
