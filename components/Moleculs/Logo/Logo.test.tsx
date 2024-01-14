import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Logo from './Logo';

describe('Logo', () => {
  it('The Logo rendered with content', () => {
    render(<Logo />);
    const logo = screen.getByTestId('logo');

    expect(logo).toBeTruthy();

    const logoImage = logo.querySelector('img');
    expect(logoImage?.getAttribute('alt')).toBe('SocialApp');

    const logoText = logo.querySelector('p');
    expect(logoText?.textContent).toBe('SocialApp');
  });
});
