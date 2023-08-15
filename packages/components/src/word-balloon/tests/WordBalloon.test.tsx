import { testAttrs } from '~/testAttrs';
import { WordBalloon } from '..';
import { render } from '@testing-library/react';

describe('WordBalloon', () => {
  testAttrs(WordBalloon);

  test('snap', () => {
    const { container } = render(<WordBalloon />);
    expect(container.querySelector('.t-word-balloon__arrow')).not.toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('placement', () => {
    expect(
      render(<WordBalloon placement="bottom" />).container.firstChild,
    ).toHaveClass('t-word-balloon--bottom');
    expect(
      render(<WordBalloon placement="right" />).container.firstChild,
    ).toHaveClass('t-word-balloon--right');
  });

  test('showArrow', () => {
    const { container } = render(<WordBalloon showArrow={false} />);
    expect(container.querySelector('.t-word-balloon__arrow')).toBeNull();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('background', () => {
    const { container } = render(<WordBalloon background={'pink'} />);
    expect(container.firstChild).toHaveStyle({ '--t-word-balloon-bg': 'pink' });
  });

  test('arrowStyle', () => {
    const { container } = render(
      <WordBalloon arrowStyle={{ background: 'pink' }} />,
    );
    expect(container.querySelector('.t-word-balloon__arrow')).toHaveStyle({
      background: 'pink',
    });
  });

  test('contentStyle', () => {
    const { container } = render(
      <WordBalloon contentStyle={{ background: 'pink' }} />,
    );
    expect(container.querySelector('.t-word-balloon__content')).toHaveStyle({
      background: 'pink',
    });
  });
});
