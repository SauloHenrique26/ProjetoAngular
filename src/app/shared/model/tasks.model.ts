import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

export interface TasksModel{

    id: number;
    tarefa: string;
    observ: string;
    status: string;
    hora: Date;
};