import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { MeComponent } from './me/me.component';
import { StudiesComponent } from './studies/studies.component';

// Reitit tulevat routes-taulukkoon, taulukon olioiden tietotyyppinä Routes
const routes: Routes = [
  { path: 'me', component: MeComponent },
  { path: 'studies', component: StudiesComponent },
  { path: 'hobbies', component: HobbiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
