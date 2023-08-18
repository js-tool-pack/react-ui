import { render } from '@testing-library/react';
import { Collapse } from '..';
import { Left } from '@pkg/icons';
import { testAttrs } from '~/testAttrs';

describe('Collapse', () => {
  testAttrs(Collapse);

  test('basic', () => {
    expect(
      render(
        <Collapse title={'第十四章'}>
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  test('size', () => {
    expect(
      render(
        <Collapse>视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。</Collapse>,
      ).container.firstChild,
    ).toHaveClass('t--size-m');
    expect(
      render(
        <Collapse size="medium">
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toHaveClass('t--size-m');
    expect(
      render(
        <Collapse size="small">
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toHaveClass('t--size-sm');
    expect(
      render(
        <Collapse size="large">
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toHaveClass('t--size-lg');
  });

  test('disabled', () => {
    expect(
      render(
        <Collapse title={'第十四章'} disabled>
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toHaveClass('t-collapse--disabled');
  });

  test('expanded', () => {
    expect(
      render(
        <Collapse title={'第十四章'} expanded>
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toHaveClass('t-collapse--active');
  });

  test('extra', () => {
    expect(
      render(
        <Collapse title={'第十四章'} extra="《道德经》">
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  test('icon', () => {
    expect(
      render(
        <Collapse title={'第十四章'} icon={() => <Left />}>
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });

  test('icon-placement', () => {
    expect(
      render(
        <Collapse title={'第十四章'} icon={() => <Left />} iconPlacement="end">
          视之不见名曰夷，听之不闻名曰希，搏之不得名曰微。
        </Collapse>,
      ).container.firstChild,
    ).toMatchSnapshot();
  });
});
