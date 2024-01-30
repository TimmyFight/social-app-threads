'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Headings from '@/components/Atoms/Headings/Headings';
import Typography from '@/components/Atoms/Typography/Typography';
import { Button } from '@/components/ui/button';

interface UserCard {
  id: string;
  name: string;
  username: string;
  imageUrl: string;
  userType: string;
}

const UserCard = ({ id, name, username, imageUrl, userType }: UserCard) => {
  const router = useRouter();
  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <Image
          src={imageUrl}
          alt={username}
          width={48}
          height={48}
          className="rounded-full"
        />

        <div className="flex-1 text-ellipsis">
          <Headings
            level={4}
            customClass="text-base-bold text-light-1"
          >
            <>{name}</>
          </Headings>
          <Typography customClass="text-small-medium text-gray-1">
            <>@{username}</>
          </Typography>
        </div>
      </div>

      <Button
        className="user-card_btn"
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
