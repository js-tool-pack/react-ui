import { PropsBase } from '@pkg/shared';

interface BaseInputProps extends Omit<PropsBase<HTMLInputElement>, 'children'> {
  attrs?: Partial<React.InputHTMLAttributes<HTMLInputElement>>;
  rootAttrs?: Partial<React.HTMLAttributes<HTMLLabelElement>>;
  rootRef?: React.ForwardedRef<HTMLLabelElement>;
  name?: string;
}

export interface InputProps extends BaseInputProps {
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  onChange?: (value: string) => void;
  value?: string | number;
}
