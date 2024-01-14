import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import StrongText from './StrongText';

describe('StrongText', () => {
  it('The StrongText rendered with content', () => {
    render(<StrongText>Test content</StrongText>);
    const strongText = screen.getByTestId('strongText');
    expect(strongText.textContent).toBe('Test content');
    expect(strongText.tagName).toBe('STRONG');
  });

  it('The StrongText rendered with custom class', () => {
    render(
      <StrongText customClass="text-neutral-900">Test content</StrongText>,
    );
    const strongText = screen.getByTestId('strongText');
    expect(strongText.className).toBe('text-neutral-900');
  });
});
