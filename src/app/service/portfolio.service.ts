import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  URL = 'https://backendmss.onrender.com/';
  
  constructor(private http: HttpClient) { }

  //Persona 
  public getPersona(): Observable<any> {
    let datos=this.http.get(this.URL + 'personas/traer/perfil');
    return datos;
  }

  //Experiencia
  public getExperiencia(): Observable<any> {
    let datos=this.http.get(this.URL + 'experiencia/traer');
    return datos;
  }

  //Educacion
  public getEducacion(): Observable<any> {
    let datos=this.http.get(this.URL + 'educacion/traer');
    return datos;
  }

  //Skill
  public getSkill(): Observable<any> {
    let datos=this.http.get(this.URL + 'skill/traer');
    return datos;
  }

  //Proyecto
  public getProyecto(): Observable<any> {
    let datos=this.http.get(this.URL + 'proyecto/traer/primero');
    return datos;
  }

}
