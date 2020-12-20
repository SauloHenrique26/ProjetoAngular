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
      
      'Referrer-Policy': 'origin',
    })
  };


  constructor(private http: HttpClient) { }


  public getTaskfromApi(){
    return this.http.get<TasksModel>(`${this.apiUrl}`,this.httpOptions);
  }
  
  public putStatusTask(tasko: TasksModel){ 
    const chgstat= {
      id: tasko.id,
      tarefa: tasko.tarefa,
      observ: tasko.observ,
      hora: new Date(),
      status: true
    };
    console.log(`${this.apiUrl}${tasko.id}`,chgstat);
    return this.http.put<TasksModel>(`${this.apiUrl}${tasko.id}/`,chgstat,this.httpOptions)    
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