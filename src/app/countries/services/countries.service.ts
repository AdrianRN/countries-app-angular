import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1'

  constructor(private http: HttpClient) { }

  // el of retorna un nuevo observable con el valor que se le pase por parametro, en este caso un arreglo vacio
  searchCapital( term: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountry( term: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
      .pipe(
        // If there's an error, the rxjs operator "of" will return a new Observable with an empty array
        catchError(
          error => of([])
          )
      );
  }

  searchRegion( region: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
      .pipe(
        catchError(error => of([]))
      );
  }

  searchCountryByAlphaCode(code: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null ),
        catchError( () => of(null))
      );
  }

}
