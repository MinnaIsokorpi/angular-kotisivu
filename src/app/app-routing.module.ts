import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MapComponent } from './map/map.component';
import { MeComponent } from './me/me.component';
import { StudiesComponent } from './studies/studies.component';

// Navigoinnin reitit tulevat routes-taulukkoon, taulukon olioiden tietotyyppinä Routes
const routes: Routes = [
  { path: 'me', component: MeComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: '', redirectTo: '/me', pathMatch: 'full' },
  { path: 'map', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
