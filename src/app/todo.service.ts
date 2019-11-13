import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const API_URL = 'https://9303d922.ngrok.io';

@Injectable()
export class TodoService {

  constructor(private httpService: HttpClient) { }

  getToDoList() : Observable<any> {
    return this.httpService.get(API_URL + '/todos').pipe();
  }

  updateToDoItem(id: Number, completed: Boolean) : Observable<any> {
    let subURL = 'completed';
    if (completed === false)
      subURL = 'uncompleted';
    return this.httpService.put(API_URL + '/todo' + '/' + id + '/update/' + subURL, {}).pipe();
  }
}
