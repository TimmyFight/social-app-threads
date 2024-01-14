import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import RightBar from './RightBar';

describe('RightBar', () => {
  it('The RightBar rendered with content', () => {
    render(<RightBar />);
    const rightBar = screen.getByTestId('rightBar');

    expect(rightBar).toBeTruthy();
  });
});
