import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import MainNavigation from './MainNavigation';

describe('MainNavigation', () => {
  it('The MainNavigation rendered with content', () => {
    render(<MainNavigation />);
    const mainNavigation = screen.getByTestId('mainNavigation');

    expect(mainNavigation).toBeTruthy();
  });
});
