import Image from 'next/image';
import React from 'react';

import Headings from '@/components/Atoms/Headings/Headings';
import Typography from '@/components/Atoms/Typography/Typography';

interface ProfileHeaderProperties {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
}

const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
}: ProfileHeaderProperties) => {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative object-cover">
            <Image
              src={imgUrl}
              alt={username}
              className="rounded-full object-cover shadow-2xl"
              width={20}
              height={20}
            />
          </div>

          <div className="flex-1">
            <Headings
              level={2}
              customClass="text-left text-heading3-bold text-light-1"
            >
              <>{name}</>
            </Headings>
            <Typography customClass="text-base-medium text-gray-1">
              <>{username}</>
            </Typography>
          </div>
        </div>
      </div>

      <Typography customClass="mt-6 max-w-lg text-base-regular text-light-2">
        <>{bio}</>
      </Typography>

      <div className="mt-12 h-0.5 w-full bg-dark-3" />
    </div>
  );
};

export default ProfileHeader;
