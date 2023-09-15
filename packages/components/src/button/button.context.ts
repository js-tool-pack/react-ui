import type { ButtonProps } from './button.types';
import { createContext } from 'react';

export const ButtonContext = createContext<ButtonProps>({});
