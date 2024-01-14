import Logo from '@/components/Moleculs/Logo/Logo';
import MainNavigation from '@/components/Moleculs/MainNavigation/MainNavigation';

const TopBar = () => {
  return (
    <section
      className="topbar"
      data-testid="topBar"
    >
      <Logo />
      <MainNavigation />
    </section>
  );
};

export default TopBar;
