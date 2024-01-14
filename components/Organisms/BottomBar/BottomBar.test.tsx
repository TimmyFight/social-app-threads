import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import BottomBar from './BottomBar';

describe('BottomBar', () => {
  it('The BottomBar rendered with content', () => {
    render(<BottomBar />);
    const bottomBar = screen.getByTestId('bottomBar');

    expect(bottomBar).toBeTruthy();
  });
});
