import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import LeftBar from './LeftBar';

describe('LeftBar', () => {
  it('The LeftBar rendered with content', () => {
    render(<LeftBar />);
    const leftBar = screen.getByTestId('leftBar');

    expect(leftBar).toBeTruthy();
  });
});
