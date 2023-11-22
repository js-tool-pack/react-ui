import { fireEvent, render } from '@testing-library/react';
import { ImagePreviewGroup, Image } from '~/image';
import { testAttrs } from '~/testAttrs';

describe('Image', () => {
  testAttrs(Image);

  test('basic', () => {
    render(<Image />);
    expect(document.body).toMatchSnapshot();
  });

  describe('preview', () => {
    test('disabled', () => {
      render(<Image preview={false} />);
      expect(document.body).toMatchSnapshot();
    });

    test('enabled', () => {
      render(<Image />);
      expect(document.body).toMatchSnapshot();
    });
  });

  test('group', () => {
    render(
      <ImagePreviewGroup>
        <Image src="https://test.com/a.png" />
        <Image src="https://test.com/b.png" />
        <Image src="https://test.com/c.png" />
      </ImagePreviewGroup>,
    );

    fireEvent.click(document.querySelectorAll('.t-image__img')![1]!);

    expect(
      document.querySelector<HTMLImageElement>('.t-image-preview img')!.src,
    ).toBe('https://test.com/b.png');
    expect(
      document.querySelector('.t-image-preview__progress'),
    ).toHaveTextContent('2 / 3');
  });
});
