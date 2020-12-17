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
      'Content-Type': 'application/json',
      'Access-Control-Request-Method': 'PUT',
      'Referrer-Policy': 'origin',
    })
  };


  constructor(private http: HttpClient) { }


  public getTaskfromApi(){
    return this.http.get<TasksModel>(`${this.apiUrl}`,this.httpOptions);
  }
  
  public putStatusTask(idc: number,tarefa:String, observ:String,horai:Date, stat:boolean){ 
    const chgstat= {
      id: idc,
      tarefa: tarefa,
      observ: observ,
      hora: '2020-11-22T17:51:29-03:00',
      status: stat
    };
    console.log(`${this.apiUrl}${idc}`,chgstat);
    return this.http.put<TasksModel>(`${this.apiUrl}${idc}/`,chgstat,this.httpOptions)    
  }

  public nOkStatusTask(taskn: TasksModel){ 
    const chgstat= {
      id: taskn.id,
      tarefa: taskn.tarefa,
      observ: taskn.observ,
      hora: new Date(),
      status: false
    };
    console.log(`${this.apiUrl}${taskn.id}`,chgstat);
    return this.http.put<TasksModel>(`${this.apiUrl}${taskn.id}/`,chgstat,this.httpOptions)    
  }

}