import type { PropsBase, Size } from '@pkg/shared';
import React from 'react';

interface BaseInputProps extends Omit<PropsBase<HTMLInputElement>, 'children'> {
  attrs?: Partial<React.InputHTMLAttributes<HTMLInputElement>>;
  rootAttrs?: Partial<React.HTMLAttributes<HTMLLabelElement>>;
  rootRef?: React.ForwardedRef<HTMLLabelElement>;
}

interface TextareaProps {
  autoSize?:
    | {
        minRows?: number;
        maxRows?: number;
      }
    | boolean;
  rows?: number;
}

export interface InputProps extends BaseInputProps, TextareaProps {
  countView?: (value: string, wordCount: number) => React.ReactNode;
  type?: 'textarea' | 'password' | 'text';
  showPasswordOn?: 'mouseDown' | 'click';
  onChange?: (value: string) => void;
  count?: (value: string) => number;
  status?: 'warning' | 'error';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  placeholder?: string;
  showCount?: boolean;
  clearable?: boolean;
  maxLength?: number;
  disabled?: boolean;
  loading?: boolean;
  value?: string;
  size?: Size;
}

export interface InputLocale {
  placeholder: string;
}
