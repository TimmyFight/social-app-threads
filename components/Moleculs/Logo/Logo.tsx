import Image from 'next/image';
import Link from 'next/link';

import Typography from '@/components/Atoms/Typography/Typography';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-4"
      data-testid="logo"
    >
      <Image
        src="/logo.svg"
        alt="SocialApp"
        width={28}
        height={28}
      />
      <Typography customClass="text-headings3-bold text-light-1 max-sx:hidden">
        <>SocialApp</>
      </Typography>
    </Link>
  );
};

export default Logo;
