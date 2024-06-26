import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return [];
    if(!args) return value;
    args = args.toLowerCase();
    return value.filter((item:any)=>{
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
