import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// Palvelimelta tuleva data toimitetaan komponentille Observable-muotoisena
// eli reaktiivisesti
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
// Tietotyypit
import { HobbiesData, MeData, StudiesData } from './dataClasses';

@Injectable({
  providedIn: 'root',
})
export class HomepageService {
  // valepalvelimen osoitteet
  medataurl = 'api/medatas';
  studiesurl = 'api/studies';
  hobbiesurl = 'api/hobbies';

  // liitettään eli injektoidaan HttpClient-olio tähän luokkaan
  // konstruktorin argumenttina (dependency injection)
  constructor(private http: HttpClient) {}

  getMeData(): Observable<MeData[]> {
    return this.http.get<MeData[]>(this.medataurl).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  getHobbiesData(): Observable<HobbiesData[]> {
    return this.http.get<HobbiesData[]>(this.hobbiesurl).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

  getStudiesData(): Observable<StudiesData[]> {
    return this.http.get<StudiesData[]>(this.studiesurl).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }
}
