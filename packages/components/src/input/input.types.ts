import type { PropsBase, Size } from '@pkg/shared';

interface BaseInputProps extends Omit<PropsBase<HTMLInputElement>, 'children'> {
  attrs?: Partial<React.InputHTMLAttributes<HTMLInputElement>>;
  rootAttrs?: Partial<React.HTMLAttributes<HTMLLabelElement>>;
  rootRef?: React.ForwardedRef<HTMLLabelElement>;
  name?: string;
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
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  onChange?: (value: string) => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  value?: string | number;
  placeholder?: string;
  clearable?: boolean;
  disabled?: boolean;
  loading?: boolean;
  size?: Size;
}
