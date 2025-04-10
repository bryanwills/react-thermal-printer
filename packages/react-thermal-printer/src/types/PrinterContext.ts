import type { Printer } from '@react-thermal-printer/printer';

export interface PrinterContext {
  printer: Printer;
  width: number;
  reset(): void;
}
