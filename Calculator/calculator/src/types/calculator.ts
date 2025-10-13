export interface CalculatorState {
  display: string;
  previousValue: number | null;
  operation: string | null;
  waitingForOperand: boolean;
  history: string[];
}

export type OperationType = '+' | '-' | '×' | '÷' | '=' | 'C' | '⌫';

export interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
  className?: string;
  type?: 'number' | 'operation' | 'function';
}

