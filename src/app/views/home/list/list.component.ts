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
    this.dataSourceok = [];
    this.dataSourcenok = [];
    this.tasksModel = new TasksModel()  
    this.getTasks(); 
    
  };

  ngOnInit(): void {
  }
  
  public getTasks(){
    var arrok: Array<String> = [];
    var arrnok: Array<String> = [];
    this.taskservice.getTaskfromApi().subscribe(rs => {

      var teste = Object.values(rs)
      for (let i = 0 ; i<teste.length;++i){
        if (teste[i].status == true){      
          arrok.push(teste[i]) 
        }else{
          arrnok.push(teste[i]) 

        }
      }
      
      this.dataSourceok=arrok
      this.dataSourcenok=arrnok
    });     
  };
  
  
  public okbtn(dtSrcV: TasksModel){
    this.changeStatus(dtSrcV);   
  }

  public nokbtn(tmdl: TasksModel){
    this.notOKStatus(tmdl);
  }
  
  
  
  public changeStatus(dtSrcok: TasksModel){ 

    this.taskservice.putStatusTask(dtSrcok).subscribe(data => {      
      for ( let i =0; i<this.dataSourcenok.length; ++i ){
        if (this.dataSourcenok[i].id == data.id ){
          this.dataSourceok.push(this.dataSourcenok[i]);
          this.dataSourcenok.splice(i,1)  
                  
        }
      }          
    });
  };



  public notOKStatus(dtSrc: TasksModel){
    
    this.taskservice.nOkStatusTask(dtSrc).subscribe(data => {
      for ( let i =0; i<this.dataSourceok.length; ++i ){
        if (this.dataSourceok[i].id == data.id ){
          this.dataSourcenok.push(this.dataSourceok[i])
          this.dataSourceok.splice(i,1)          
        }
      }           
    });
  };


  openDialog(){
    
  }


}

  
  


