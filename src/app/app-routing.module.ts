import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventsComponent } from './events/events.component';
import { CommunitiesComponent } from './communities/communities.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'dates', component: CalendarComponent },
  { path: 'events', component: EventsComponent },
  { path: 'communities', component: CommunitiesComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }