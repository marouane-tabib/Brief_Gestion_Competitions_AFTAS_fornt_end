import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {

  url: string = 'http://localhost:8080/api/v1';

  constructor(private http:HttpClient) {}

  getAllCompetitions(): any{
    return this.http.get(this.url + '/competitions');
  }

}
