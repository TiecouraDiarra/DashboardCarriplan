import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

    // getAuth$(): Observable<{}> {
    //     return of({});
    // }

    constructor(private http: HttpClient) {}

  //Connexion
  connexion(numeroOrEmail: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        numeroOrEmail,
        password,
      },
      httpOptions
    );
  }
}
