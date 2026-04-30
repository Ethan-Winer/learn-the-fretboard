import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringNumberToLetter',
})
export class StringNumberToLetterPipe implements PipeTransform {
  strings = ["e", "B", "G", "D", "A", "E"]
  transform(value: number): string{
    return this.strings[value - 1]
  }
}
