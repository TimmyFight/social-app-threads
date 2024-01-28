import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import Headings from '@/components/Atoms/Headings/Headings';
import { fetchUser } from '@/lib/actions/user.actions';

async function Page() {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect('/onboarding');
  return (
    <section>
      <Headings
        level={1}
        customClass="head-text mb-10"
      >
        <>Search</>
      </Headings>
    </section>
  );
}

export default Page;
