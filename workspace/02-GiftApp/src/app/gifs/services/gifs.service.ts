import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsRespone, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apikey       : string   =  'fwHVLO449TE0bty2sFoKDrDRETR2g4F3';
  private servicioUrl  : string   =  'https://api.giphy.com/v1/gifs';
  private _historial   : string[] =  [];

  public resultados: Gif[] = [];
  
  constructor( private http: HttpClient){ // Requiere HttpClientModule en app.module

    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!) ||[];
      this.resultados = JSON.parse(localStorage.getItem('resultados')!) ||[];
    }

  }
  
  get historial(){
    return [...this._historial]; // Rompe la referencia y crea un nuevo arreglo
  }

  buscarGifs(query:string = ''){

    query = query.trim().toLocaleLowerCase();// Convierte todo a minúscula
    
    if(!this._historial.includes(query)){ // Si el valor todavia no lo incluye, evita repetidos
      this._historial.unshift(query); // Inserta al inicio
      this._historial = this._historial.splice(0,10); // Corta el arreglo hasta 10
      
      localStorage.setItem('historial', JSON.stringify(this._historial));
   
    }

  const params = new HttpParams()
                    .set('api_key',this.apikey)
                    .set('limit', '10')
                    .set('q', query);

   this.http.get<SearchGifsRespone>(`${this.servicioUrl}/search`, { params } )
       .subscribe( (resp) =>{
         this.resultados = resp.data;
         localStorage.setItem('resultados', JSON.stringify(this._historial));
       });// Se ejecuta cuando se obtiene la resolución de la respuesta

  }

}

