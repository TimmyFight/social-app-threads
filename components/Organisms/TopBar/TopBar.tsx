import Logo from '@/components/Moleculs/Logo/Logo';
import UserControls from '@/components/Moleculs/UserControls/UserControls';

const TopBar = () => {
  return (
    <section
      className="topbar"
      data-testid="topBar"
    >
      <Logo />
      <UserControls />
    </section>
  );
};

export default TopBar;
