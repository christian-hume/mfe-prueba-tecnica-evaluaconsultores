import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat',
  standalone: true
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value) return '';

    // Quitar todo lo que no sea número
    const digits = value.replace(/\D/g, '');

    // Asegurar prefijo +569
    let formatted = digits;
    if (!digits.startsWith('569')) {
      formatted = '569' + digits;
    }

    // +569 1234 5678
    return (
      '+' +
      formatted.substring(0, 3) + ' ' +
      formatted.substring(3, 7) + ' ' +
      formatted.substring(7, 11)
    );
  }
}
