import { Component, OnInit } from '@angular/core';
import { TasksModel } from 'src/app/shared/model/tasks.model';
import { TaskServices } from 'src/app/shared/service/task.service';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  dataSource: any;
  dataSourceok: any;
  dataSourcenok: any;
  tasksModel: TasksModel;
  
  constructor(public taskservice: TaskServices){ 

    this.dataSource = [];
    this.tasksModel = new TasksModel()  
    this.getTasks(); 
    this.newVetor()
    
  };

  ngOnInit(): void {
  }
  public getTasks(){
    this.taskservice.getTaskfromApi().subscribe(rs => {
      this.dataSource = rs;  
    }); 
    
  };
  
  
  public okbtn(id: number,tarefa:String,observ:String){
    this.changeStatus(id,tarefa,observ);
    this.getTasks(); 
  }

  public nokbtn(tmdl: TasksModel){
    this.notOKStatus(tmdl);
    this.getTasks(); 
  }
  
  
  
  public changeStatus(id: number,tarefa:String,observ:String){

    let stat=true;
    let hora = new Date();

    this.taskservice.putStatusTask(id,tarefa,observ,hora,stat).subscribe(data => {
      for ( let i =0; i<this.dataSource.length; ++i ){
        if (this.dataSource[i].id == data.id ){
          this.dataSource.splice(i,1)          
        }
      }          
     });

  };



  public notOKStatus(dtSrc: TasksModel){
    
    this.taskservice.nOkStatusTask(dtSrc).subscribe(data => {
      for ( let i =0; i<this.dataSource.length; ++i ){
        if (this.dataSource[i].id == data.id ){
          this.dataSource.splice(i,1)          
        }
      }           
     });
    };
  
  
  
  
  public newVetor(){
    let s:any
    
    this.taskservice.getTaskfromApi().subscribe(rs => {
      this.dataSource = rs; 
      for (let i=0; i<this.dataSource.length;++i){
        if(rs.status == true)
          this.dataSourceok = rs
          debugger
      } 

    }); 

  }

  
  

}
