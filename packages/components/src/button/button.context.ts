import { createContext } from 'react';
import type { ButtonProps } from './button.types';

export const ButtonContext = createContext<ButtonProps>({});
