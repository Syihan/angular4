import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customtitlecase'
})
export class CustomTitleCase implements PipeTransform {
  transform(value: string)  {
    const split = value.toLowerCase().split(' ');
    const prepositions = ['a', 'and', 'for', 'from', 'of', 'the'];

    for (let i = 0; i < split.length; i++) {
      if (!prepositions.includes(split[i]) || i === 0) {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
      }
    }

    return split.join(' ');
  }
}
