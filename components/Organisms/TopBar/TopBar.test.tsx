import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import TopBar from './TopBar';

describe('TopBar', () => {
  it('The TopBar rendered with content', () => {
    render(<TopBar />);
    const topBar = screen.getByTestId('topBar');
    const logo = screen.getByTestId('logo');
    const mainNavigation = screen.getByTestId('mainNavigation');

    expect(topBar && logo && mainNavigation).toBeTruthy();
  });
});
