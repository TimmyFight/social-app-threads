import Logo from '@/components/Moleculs/Logo/Logo';
import MainNavigation from '@/components/Moleculs/MainNavigation/MainNavigation';
import UserControls from '@/components/Moleculs/UserControls/UserControls';

const TopBar = () => {
  return (
    <section
      className="topbar"
      data-testid="topBar"
    >
      <Logo />
      <MainNavigation />
      <UserControls />
    </section>
  );
};

export default TopBar;
