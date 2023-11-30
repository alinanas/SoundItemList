import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterFolders',
  standalone: true
})
export class FilterFolderPipe implements PipeTransform {

  transform(values: any[], parentId: number | null): any[] {
    return values.filter(v => v.parentId === parentId);
  }
}
