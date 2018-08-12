import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filesize' })
export class FileSizePipe implements PipeTransform {
  transform() {}
}
@Pipe({ name: 'cal' })
export class Calc implements PipeTransform {
  transform() {}
}