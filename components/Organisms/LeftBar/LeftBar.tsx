'use client';

import { SignedIn, SignOutButton, useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import Typography from '@/components/Atoms/Typography/Typography';
import { sidebarLinks } from '@/constants';

const LeftBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section
      className="custom-scrollbar leftsidebar"
      data-testid="leftBar"
    >
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          if (link.route === '/profile') link.route = `${link.route}/${userId}`;
          return (
            <Link
              key={link.label}
              href={link.route}
              title={link.label}
              className={`leftsidebar_link ${isActive && 'bg-primary-500'}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <Typography customClass="text-light-1 max-lg:hidden">
                <>{link.label}</>
              </Typography>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push('/sign-in')}>
            <div className="flex cursor-pointer">
              <Image
                src="/assets/logout.svg"
                alt="Logout"
                width="24"
                height="24"
              />
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftBar;
