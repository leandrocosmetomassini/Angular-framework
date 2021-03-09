import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'vuela'
})
export class Vuela implements PipeTransform{
    
    transform( valor:boolean):string{
        return (valor)
            ? 'vuela'
            : 'No vuela';
    }

}