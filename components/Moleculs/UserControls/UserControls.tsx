import { OrganizationSwitcher, SignedIn, SignOutButton } from '@clerk/nextjs';
import Image from 'next/image';

const UserControls = () => {
  return (
    <>
      <div
        className="flex items-center gap-1"
        data-testid="userControls"
      >
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
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
      </div>

      <OrganizationSwitcher
        appearance={{
          elements: {
            organizationSwitcherTrigger: 'py-2 px-4',
          },
        }}
      />
    </>
  );
};

export default UserControls;
