import {PipeTransform, Pipe, Injectable} from '@angular/core';

@Injectable()
@Pipe({name: 'shuffle'})
export class ShufflePipe implements PipeTransform {

  // Using a version of the Fisher-Yates shuffle algorithm
  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  transform(arr: any[]): any[] {
    if (!Array.isArray(arr)) {
      return arr;
    }

    let shuffled = [...arr];
    for (let i = 0, n = arr.length - 1, l = n - 1; i < l; ++i) {
      const j = Math.floor(Math.random() * (n - i + 1)) + i;
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  }
}