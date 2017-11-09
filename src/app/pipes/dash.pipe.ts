import { Pipe, PipeTransform } from '@angular/core';

/*
 * Replaces spaces with dash
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */

@Pipe({name: 'dash'})

export class DashPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(' ', '-');
  }
}
