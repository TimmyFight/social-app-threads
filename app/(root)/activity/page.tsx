import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import Headings from '@/components/Atoms/Headings/Headings';
import Typography from '@/components/Atoms/Typography/Typography';
import { fetchUser, getActivity } from '@/lib/actions/user.actions';

async function Page() {
  const user = await currentUser();

  if (!user) redirect('/sign-in');

  const userInfo = await fetchUser(user.id);

  if (!userInfo?.onboarded) redirect('/onboarding');

  const acitvities = await getActivity(userInfo._id);

  return (
    <section>
      <Headings
        level={1}
        customClass="head-text mb-10"
      >
        <>Activity</>
      </Headings>

      <section className="mt-10 flex flex-col gap-5">
        {acitvities.length > 0 ? (
          <>
            {acitvities.map((activity) => (
              <Link
                key={activity._id}
                href={`/thread/${activity.parentId}`}
              >
                <article className="activity-card">
                  <Image
                    src={activity.author.image}
                    alt={activity.author.username}
                    width={20}
                    height={20}
                    className="rounded-full object-cover"
                  />

                  <Typography customClass="!text-small-regular text-light-1">
                    <>
                      <span className="mr-1 text-primary-500">
                        {activity.author.name}
                      </span>{' '}
                      replied to your thread
                    </>
                  </Typography>
                </article>
              </Link>
            ))}
          </>
        ) : (
          <>
            <Typography customClass="no-result">
              <>No activity yet.</>
            </Typography>
          </>
        )}
      </section>
    </section>
  );
}

export default Page;
