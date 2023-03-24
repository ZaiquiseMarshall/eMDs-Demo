import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, Observable, Subject, throwError } from 'rxjs';
import { RegisterForm } from '../models/register-form.model';

@Injectable({
  providedIn: 'root'
})
export class EndpointFactoryService {
  protected baseUrl: string = ""

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { this.baseUrl = baseUrl }

  private readonly _registerUrl: string = "api/registration/registerUser/";

  private responseSrc = new Subject<any>();
  errResponse = this.responseSrc.asObservable();

  get registerUrl() {
    return this.baseUrl + this._registerUrl;
  }

  registerUser(data: any): Observable<any> {
    let url = this.registerUrl;
    return this.http.post(url, data).pipe(
      catchError(err => {
        return err;
       })
    );
  }


}
