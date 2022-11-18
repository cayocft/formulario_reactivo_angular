import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url_backend = environment.url_backend;
  constructor(private http:HttpClient) { }
}
