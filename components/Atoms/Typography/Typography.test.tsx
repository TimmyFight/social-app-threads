import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Typography from './Typography';

describe('Typography', () => {
  it('The Typography rendered with default properties', () => {
    render(<Typography />);
    const typography = screen.getByTestId('typography');
    expect(typography.tagName).toBe('P');
    expect(typography.textContent).toBe('');
  });
  it('The Typography rendered with a specific properties', () => {
    render(
      <Typography customClass="testClass">
        <>Test Typography</>
      </Typography>,
    );
    const typography = screen.getByTestId('typography');
    expect(typography.tagName).toBe('P');
    expect(typography.className).toBe('testClass');
    expect(typography.textContent).toBe('Test Typography');
  });
});
