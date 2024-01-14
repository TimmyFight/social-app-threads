import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Headings from './Headings';

describe('Headings', () => {
  it('The Headings rendered with default properties', () => {
    render(<Headings />);
    const heading = screen.getByTestId('heading');
    expect(heading.tagName).toBe('H1');
    expect(heading.textContent).toBe('');
  });
  it('The Headings rendered with a specific properties', () => {
    render(
      <Headings
        level={3}
        customClass="testClass"
      >
        <>Test H3</>
      </Headings>,
    );
    const heading = screen.getByTestId('heading');
    expect(heading.tagName).toBe('H3');
    expect(heading.className).toBe('testClass');
    expect(heading.textContent).toBe('Test H3');
  });
});
