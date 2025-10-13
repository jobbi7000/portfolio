'use client';

import { useState } from 'react';
import { CalculatorState } from '@/types/calculator';

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>({
    display: '0',
    previousValue: null,
    operation: null,
    waitingForOperand: false,
    history: []
  });

  const performCalculation = (firstValue: number, operation: string, secondValue: number): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        if (secondValue === 0) {
          throw new Error('Cannot divide by zero');
        }
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const formatDisplay = (value: number): string => {
    if (Number.isInteger(value)) {
      return value.toString();
    }
    return value.toFixed(8).replace(/\.?0+$/, '');
  };

  const handleInput = (input: string) => {
    setState(prevState => {
      const newState = { ...prevState };

      if (input >= '0' && input <= '9') {
        // 숫자 입력
        if (newState.waitingForOperand) {
          newState.display = input;
          newState.waitingForOperand = false;
        } else {
          newState.display = newState.display === '0' ? input : newState.display + input;
        }
      } else if (input === '.') {
        // 소수점 입력
        if (newState.waitingForOperand) {
          newState.display = '0.';
          newState.waitingForOperand = false;
        } else if (newState.display.indexOf('.') === -1) {
          newState.display += '.';
        }
      } else if (input === 'C') {
        // 클리어
        newState.display = '0';
        newState.previousValue = null;
        newState.operation = null;
        newState.waitingForOperand = false;
      } else if (input === '⌫') {
        // 백스페이스
        if (newState.display.length > 1) {
          newState.display = newState.display.slice(0, -1);
        } else {
          newState.display = '0';
        }
      } else if (['+', '-', '×', '÷'].includes(input)) {
        // 연산자 입력
        if (newState.operation && newState.previousValue !== null && !newState.waitingForOperand) {
          try {
            const result = performCalculation(
              newState.previousValue,
              newState.operation,
              parseFloat(newState.display)
            );
            newState.display = formatDisplay(result);
            newState.previousValue = result;
          } catch (error) {
            newState.display = 'Error';
            newState.previousValue = null;
            newState.operation = null;
            newState.waitingForOperand = false;
            return newState;
          }
        } else {
          newState.previousValue = parseFloat(newState.display);
        }
        newState.operation = input;
        newState.waitingForOperand = true;
      } else if (input === '=') {
        // 등호 입력
        if (newState.operation && newState.previousValue !== null) {
          try {
            const result = performCalculation(
              newState.previousValue,
              newState.operation,
              parseFloat(newState.display)
            );
            const formattedResult = formatDisplay(result);
            
            // 히스토리에 추가
            const historyEntry = `${formatDisplay(newState.previousValue)} ${newState.operation} ${newState.display} = ${formattedResult}`;
            newState.history = [historyEntry, ...newState.history.slice(0, 9)]; // 최대 10개 유지
            
            newState.display = formattedResult;
            newState.previousValue = null;
            newState.operation = null;
            newState.waitingForOperand = true;
          } catch (error) {
            newState.display = 'Error';
            newState.previousValue = null;
            newState.operation = null;
            newState.waitingForOperand = false;
          }
        }
      }

      return newState;
    });
  };

  return {
    display: state.display,
    history: state.history,
    handleInput
  };
}

