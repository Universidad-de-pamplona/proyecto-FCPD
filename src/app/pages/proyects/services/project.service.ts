import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/core/services/request.service';
import { JwtService } from '../../auth/services/jwt.service';
import { Proyect } from 'src/app/core/models/project.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(  private request: RequestService , private  jwtService: JwtService,) { }



  getProyects(): Observable<Proyect[]> {

    return this.request.makePrivateRequest({ url: '/proyects', method: 'GET' })
  }

  getProyectById(id: number): Observable<Proyect> {

  return this.request.makePrivateRequest({ url: `/proyects/${id} `, method: 'GET' })
}

  createProyect(proyect: Proyect): Observable<Proyect> {

  return this.request.makePrivateRequest({ url: '/proyects', data:proyect , method: 'POST' })
}


updateProyect(proyect: Proyect): Observable<Proyect> {

  return this.request.makePrivateRequest({ url: `/proyects/${proyect.id} `, data:proyect , method: 'PUT' })
}

  deleteProyect(id: number): Observable<Proyect> {
    return this.request.makePrivateRequest({ url: `/proyects/${id} `,  method: 'DELETE' })
  }




}
