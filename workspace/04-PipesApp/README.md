![Prime Ng](http://primefaces.org/wp-content/uploads/2016/08/primeng-2.png)
# Pipes App: Por Leandro C. Tomassini
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


7º Crear un modulo ***appRouter --flat***, el flat es para que no cree la carpeta, sirve para crear las rutas. 

```
  ng g m appRouter --flat

```
* Dentro no ocupamos el ***commonModule***, sino que hay que importarle:
```
  import { RouterModule } from '@angular/router';

```
* Ahora hay que crear las páginas que se van a utilizar:

```
  ng g c ventas/pages/numeros --skipTests -is
  ng g c ventas/pages/noComunes --skipTests -is
  ng g c ventas/pages/basicos --skipTests -is
  ng g c ventas/pages/ordenar --skipTests -is
  
```
* Hay que definir las rutas en el ***app-router.module.ts***


```
import { RouterModule, Routes } from '@angular/router';

const routes:  Routes =[
  {
    path: '',
    component: BasicosComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ]
})

```
* Completo se veria así:


```
  const routes:  Routes = [
    {
      path: '',
      component: BasicosComponent,
      pathMatch: 'full'
    },
    {
      path: 'numeros',
      component: NumerosComponent
    },
    {
      path: 'no-comunes',
      component: NoComunesComponent
    },
    {
      path: 'ordenar',
      component: OrdenarComponent
    },
    {
      path: '**',
      redirectTo: ''
    }
  ];

```
* Estos nuevos módulos, estan definidos en ***ventas.module.ts***, pero no estan siendo exportados para poder  utilizarlos fuera del módulo de ventas.

```
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],

```

* Ahora hay que importar el ***app-router.module.ts***, en el ***app.module.ts***, porque este necesita saber las rutas de la aplicación.

```
   imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule
  ],

```

8 º En ***app.compponent.html***, hay que insertar:

```
  <router-outlet></router-outlet>

```

* Para que funcione desde ***app-router-module.ts*** hay que exportarlo.

```
  exports:[
    RouterModule
  ]

```

* Ahora se puede personalizar las opciones del menú, en el archivo ***menu.component.ts***, y dirigir la ruta correspondiente al hacer click sobre alguna de las opciones.

```
    ngOnInit(): void {
          this.items = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                  {
                      label: 'Textos y fechas',
                      icon: 'pi pi-align-left',
                      routerLink: '/' 
                  },
                  {
                      label: 'Números',
                      icon: 'pi pi-dollar',
                      routerLink: 'numeros' 
                  },
                  {
                      label: 'No comúnes',
                      icon: 'pi pi-globe',
                      routerLink: 'no-comunes' 
                  },
                  
              ]
          },
          {
            label: 'Pipes Personalizados',
            icon: 'pi pi-cog',
            items: []
          }
        ];
      }
```
* Para agregar un ícono en el menú, se puede realizar de la siguiente manera, en el archivo ***menu.component.html***.

```
  <p-menubar [model]="items">
    <ng-template pTemplate="end">
        <img src="favicon.ico" height="40" class="p-mr-2">
    </ng-template>
  </p-menubar>

```
9º Ahora hay que instalar ***PrimeFlex***, para que el menú se comporte de una manera mas agradable a la vista, al utilizar distintos tamaños de pantalla, para eso primero es necesario instalarlo utilizando el siguiente comando:

```
    npm install primeflex --save

```

* En el archivo ***angular.json***, es necesario pegar la siguiente línea, en ***"styles"***, para poder aplicar los cambios es necesario primero bajar el ***ng serve***, y luego volver a subirlo:
```
  "./node_modules/primeflex/primeflex.css"

```

* Para utilizar los módulos de PrimeNg, en el archivo ***basicos.component.html***, es necesario importar ***PrimeNgModule***, en el archivo ***ventas.module.ts***.

```
  import { PrimeNgModule } from '../prime-ng/prime-ng.module';

   imports: [
    CommonModule,
    PrimeNgModule
  ]

```
* También es necesario que ***ventas.module.ts***, se encuentre importado en ***app.module.ts***.

```
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],

```

* Ahora ya se puede editar correctamente el arhivo ***basicos.component.html***, agregando tarjetas, y más elementos como en el siguiente ejemplo:


```
  <div class="text-layout">
      <h1>Pipes básicos</h1>
      <p>
          Pipes incluídos en Angular - Usualmene en el Common Module.
      </p>
  </div>
  <div class="p-grid">
      <div class="p-col-4">
          <p-card header="Uppercase">
              1
          </p-card>
      </div>
      <div class="p-col-4">
          <p-card>
              2
          </p-card>
      </div>
      <div class="p-col-4">
          <p-card>
              3
          </p-card>
      </div>
  </div>
```

10º  

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
