import { VAR, createCommand } from './Command';
import { ESC } from './common';

/**
 * Select an international character set
 * | Format   | Value    |
 * |---------|----------|
 * | ASCII   | ESC R n  |
 * | Hex     | 1B 52 n  |
 * | Decimal | 27 82 n  |
 *
 * @see https://download4.epson.biz/sec_pubs/pos/reference_en/escpos/esc_cr.html
 */
export const internationalCharacterSet = createCommand('internationalCharacterSet', {
  format: [ESC, 0x52, VAR],
  write(n: number) {
    return [ESC, 0x52, n];
  },
});
