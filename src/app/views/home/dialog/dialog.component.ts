import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { TaskServices } from 'src/app/shared/service/task.service';
import { TasksModel } from 'src/app/shared/model/tasks.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  taskform: FormGroup | undefined;
  checkoutform: any

  constructor(
 
  ) {

    this.tst()
  
    
  }

  ngOnInit(): void {
    
  }
  
  createForm(task: TasksModel){
    this.taskform = new FormGroup({
  
      tarefa: new FormControl(task.tarefa),
      observ: new FormControl(task.observ),
      hora: new FormControl(task.hora),
    });

  }

  
  tst(){
    console.log("sei lá")
  }
}
