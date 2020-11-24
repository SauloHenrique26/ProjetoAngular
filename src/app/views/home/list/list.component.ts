import { Component, OnInit } from '@angular/core';
import { TasksModel } from 'src/app/shared/model/tasks.model';

import { TaskServices } from 'src/app/shared/service/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  dataSource: any
  
  constructor(public taskservice: TaskServices){  
    this.dataSource = [];
    this.getTasks();
  };

  ngOnInit(): void {
  }
  public getTasks(){
    this.taskservice.getTaskfromApi().subscribe(rs => {
      this.dataSource = rs;  
    });
  };



}
