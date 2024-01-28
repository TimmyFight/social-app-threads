import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import Typography from '@/components/Atoms/Typography/Typography';
import ProfileHeader from '@/components/Moleculs/ProfileHeader/ProfileHeader';
import ThreadsTab from '@/components/Moleculs/ThreadsTab/ThreadsTab';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { profileTabs } from '@/constants';
import { fetchUser } from '@/lib/actions/user.actions';

async function Page({ params }: { params: { id: string } }) {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  const userInfo = await fetchUser(params.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className="mt-9">
        <Tabs
          defaultValue="threads"
          className="w-full"
        >
          <TabsList className="tab">
            {profileTabs.map((tab) => (
              <TabsTrigger
                value={tab.value}
                key={tab.label}
                className="tab"
              >
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <Typography customClass="max-sm:hidden">
                  <>{tab.label}</>
                </Typography>

                {tab.label === 'Threads' && (
                  <Typography customClass="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                    <>{userInfo?.threads?.length}</>
                  </Typography>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          {profileTabs.map((tab) => (
            <TabsContent
              key={`content-${tab.label}`}
              value={tab.value}
              className="w-full text-ligth-1"
            >
              <ThreadsTab
                currentUserId={user.id}
                accountId={userInfo.id}
                acountType="User"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default Page;
