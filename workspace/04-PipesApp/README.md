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
4º Crear un módulo para ***Prime Ng***:

```
  ng g m primeNg

```
* Pegar dentro las dos líneas del ***app.module.ts*** en el módulo personalizado que acabamos de crear, que serviria solo para exportar los módulos, tener en cuenta de acomodarlos alfabeticamente.
```
// Pime Ng
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

@NgModule({
  exports: [
    ButtonModule,
    CardModule
  ]
})
export class PrimeNgModule { }


```

* Luego importar el nuevo módulo en ***app.module.ts***  

```
 imports: [
    BrowserModule,
    PrimeNgModule
  ],

```

5º Crear la carpeta ***shared***, para módulos que se compartan en toda la aplicación. Luego crear el folder de ***ventas***, y dentro de ventas ***pipes***, ***pages***, e ***interfaces***.

* Crear los siguientes módulos:

```
  ng g m shared
  ng g m ventas

```
* Crear un componente público dentro de ***shared***, para la barra del menú.

```
  ng g c shared/menu --skipTests -is

```

* Ahora para poder utilizar este component hay que exportarlo en ***shared.module.ts***, para utilizarlo fuera del módulo ***shared***.

```
 exports:[
    MenuComponent
  ],

```
* Importar el ***MenubarModule*** en ***prime-ng-module.ts***.

```
  import {MenubarModule} from 'primeng/menubar';

    @NgModule({
      exports: [
        ButtonModule,
        CardModule,
        MenubarModule
      ]
    })

```

* Para utilizarlo hay que importar el ***shared.module***, en ***app.module.ts***

```
  import { SharedModule } from './shared/shared.module';

  imports: [
    BrowserModule,
    SharedModule,
    PrimeNgModule
  ],


```

6º En ***menu.component.html*** pegar el código de PrimeNg

```

  <p-menubar [model]="items"></p-menubar>

```

* En ***shared.module.ts***, hay que importar ***PrimeNgModule***
```
   imports: [
    CommonModule,
    PrimeNgModule
  ]

```
* Ahora hay que crear las propiedades del menú en el ***menu.components.ts***.
  Para empezar pegar el tipado:
```
import {MenuItem} from 'primeng/api';

```
* Luego en el ***ngOnInit()***

```
   items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'File',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];
    }

```

* En ***app.module.ts***, ya no es necesario importar  el ***PrimeNgModule***, porque el mismo fue imporado en ***shared.module.ts***, por lo tanto hay que borrarle la línea:

```
 Borrar -->> import { PrimeNgModule } from './prime-ng/prime-ng.module'; <<-- Borrar

```




```



```
```



```

``
* []()

``
* []()

``
* []()
