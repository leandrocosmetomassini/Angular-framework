# Pipes App
1º Instalar Prime Ng:  
* [Primefaces](https://primefaces.org/primeng/showcase/#/setup)  
   ``` 

   npm install primeng --save

   npm install primeicons --save


   ```
* Bajar el servicio de Ng serve, y agregar los temas en el angular.json  
   ``` 
   "styles": [
        "src/styles.css",
        "node_modules/primeicons/primeicons.css",
        "node_modules/primeng/resources/themes/vela-blue/theme.css",
        "node_modules/primeng/resources/primeng.min.css"
    ],
```

2º En ***app.module***, importar la siguiente línea para utilizar botones:  
    ``` 
    import {ButtonModule} from 'primeng/button';
     imports: [
           BrowserModule,
          ButtonModule
      ],   
    ```
* Ya deberia funcionar el ejemplo del botón agregado.
   ``` 
   <button pButton type="button" icon="pi pi-check" iconPos="right" label="Click"></button>  
   
   ```

3º Crear estilos globales en el archivo ***styles.css***, desde las variables que se encuentran en el root, para que se apliquen en toda la aplicación:  
    ```
    html, body{
      margin: 10px;
      background-color:var( --surface-b);
      font-family: var( --font-family);
    }

    .text-layout{
      color: var( --text-color);
    } 
    
    ```








``
* []()

``
* []()

``
* []()
