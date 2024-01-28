import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import Headings from '@/components/Atoms/Headings/Headings';
import Typography from '@/components/Atoms/Typography/Typography';
import UserCard from '@/components/Moleculs/UserCard/UserCard';
import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';

async function Page() {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  const result = await fetchUsers({
    userId: user.id,
    searchString: '',
    pageNumber: 1,
    pageSize: 25,
  });

  return (
    <section>
      <Headings
        level={1}
        customClass="head-text mb-10"
      >
        <>Search</>
      </Headings>

      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <Typography customClass="no-results">
            <>No users</>
          </Typography>
        ) : (
          <>
            {result.users.map((user) => (
              <UserCard
                key={user.id}
                id={user.id}
                name={user.name}
                username={user.username}
                imageUrl={user.image}
                userType="User"
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Page;
