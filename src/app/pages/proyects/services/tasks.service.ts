import { Injectable } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { JwtService } from '../../auth/services/jwt.service';
import { RequestService } from 'src/app/core/services/request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private request: RequestService, private jwtService: JwtService) { }

  getTasksByProyect(idProyect: number): Observable<Task[]> {

    return this.request.makePrivateRequest({ url: '/tasks',  method: 'GET' });
  }

  getTaskById(id: number): Observable<Task> {

    return this.request.makePrivateRequest({ url: `/tasks/${id}`, method: 'GET' });
  }

  createTask(task: Task): Observable<Task> {
    return this.request.makePrivateRequest({ url: '/tasks', data: task, method: 'POST' });
  }

  updateTask(task: Task): Observable<Task> {
    return this.request.makePrivateRequest({ url: `/tasks/${task.PK}`, data: task, method: 'PUT' });
  }

  deleteTask(id: number): Observable<Task> {
    return this.request.makePrivateRequest({ url: `/tasks/${id}`, method: 'DELETE' });
  }


}
