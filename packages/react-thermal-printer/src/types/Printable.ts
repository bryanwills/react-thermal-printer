import type { JSX, ReactElement } from 'react';
import type { PrinterContext } from './PrinterContext';

export interface Printable<Props = any> {
  (props: Props): JSX.Element;
  print: (elem: ReactElement<Props>, context: PrinterContext) => void | Promise<void>;
}

export function isPrintable(val: unknown): val is Printable {
  return typeof val === 'function' && typeof (val as Printable).print === 'function';
}
