import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  date: Array<string>;
  year: string;
  month: string;
  day: string;
  hour: string;

  transform(value: string, args?: any): string {
    let dayAndHour: Array<string>;

    this.date = value.split('-');
    this.year = this.date[0];
    this.month = this.date[1];
    dayAndHour = this.date[2].split(':');
    this.day = dayAndHour[0];
    this.hour = dayAndHour[1];
    return this.day + '.' + this.month + ' ' + this.year + ', ' + this.hour + ' hodin';
  }

}
