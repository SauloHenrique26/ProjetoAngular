import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TasksModel } from '../model/tasks.model';


@Injectable({
  providedIn: 'root'
})
export class TaskServices {

  apiUrl = 'http://127.0.0.1:8000/Tarefa/';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  };


  constructor(private http: HttpClient) { }

  public getTaskfromApi(){
    return this.http.get<TasksModel>(this.apiUrl);
  }
}
