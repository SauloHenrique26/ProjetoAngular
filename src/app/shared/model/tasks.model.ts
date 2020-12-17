export class TasksModel{

    id: number;
    tarefa: string;
    observ: string;
    status: boolean;
    hora: Date;

    constructor(){
        this.id=0
        this.tarefa=""
        this.observ = ""
        this.status=false
        this.hora= new Date();
    
    }
};