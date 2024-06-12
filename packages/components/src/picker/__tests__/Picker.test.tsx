import { PickerOption, PickerPanel, Picker } from '..';
import { render } from '@testing-library/react';
import { testAttrs } from '~/testAttrs';

describe('Picker', () => {
  testAttrs(Picker);
  testAttrs(PickerPanel);

  test('basic', () => {
    const { container } = render(
      <PickerPanel
        options={[createLetterOptions('A', 2), createLetterOptions('0', 2)]}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  test('basic2', () => {
    const { container } = render(
      <Picker
        options={[createLetterOptions('A', 2), createLetterOptions('0', 2)]}
      />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  function createLetterOptions(char: string, length: number): PickerOption[] {
    return Array.from({ length }).map((_, i) => {
      const letter = String.fromCharCode(char.charCodeAt(0) + i);
      return {
        label: letter,
        value: letter,
      };
    });
  }
});
