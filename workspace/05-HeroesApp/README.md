# Heroes App

1º Instalar [Angular Material Design](https://material.angular.io/):   
  ``` 
    ng add @angular/material

  ``` 

2º Ahora para este ejemplo voy a crear varios módulos:
  
  ``` 
    ng g m auth
    ng g m heroes
    ng g m material
  
    // También componentes
    ng g c auth/pages/login --skipTests -is
    ng g c auth/pages/registro --skipTests -is
    ng g c heroes/pages/agregar --skipTests -is
    ng g c heroes/pages/buscar --skipTests -is
    ng g c heroes/pages/heroe --skipTests -is
    ng g c heroes/pages/home --skipTests -is
    ng g c heroes/pages/listar --skipTests -is
    ng g c shared/errorPage --skipTests -is

  ``` 
  
3º También es necesario crear las rutas principales para la aplicación en el ***app.module.ts***:

  ``` 
    ng g m appRouting --flat // --flat para que no cree un directorio y lo coloque en la raíz del proyecto

  ``` 

  * No es necesario que este importado el common module, ya que no voy a utilizar ni pipes, ni *ngFor, etc, tampoco las declarations.
  ```
  import { Routes } from '@angular/router';

  const routes: Routes = [
    {
        path: '404',
        component: ErrorPageComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
  ]
  ``` 
 
 4º Para utilizar carga perezosa, ***Lazy Load***, es necesario que en ***auth/***, se cree el siguiente módulo:
  ``` 
    ng g m auth/authRouthing --flat

    const routes: Routes = [
    {
        path: '',
        children: [ // Rutas hijas que va a tener
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'registro',
            component: RegistroComponent
        },
        {
            path: '**',
            redirectTo: 'login'
        }
        ]
    }
    ]


    @NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
    })
 
  ``` 
* En ***auth.module.ts***, es necesario importar ***AuthRouthingModule***:
  ``` 
    @NgModule({
    declarations: [
        LoginComponent,
        RegistroComponent
    ],
    imports: [
        CommonModule,
        AuthRouthingModule
    ]
    })

  ``` 
  * Para que Angular sepa que  ***AuthRouthingModule*** existe, es necesario decirle que cuando alguien navege al auth carge ese módulo. Para que eso pase hay que ir a ***app-routing.module.ts***,  pegar el siguiente código en routes:
  ``` 
    {
     path: 'auth',
     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
     // Cuando alguien entre al path auth, carge sus hijos, el módulo hijo va a venir de el producto del auth.module, cuando se carge en memoria, el módulo que va a cargar va a ser el AuthModule.
    },
  
  ``` 
