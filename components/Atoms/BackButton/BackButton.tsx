'use client';

import { redirect, useRouter } from 'next/navigation';
import { classNames } from 'uploadthing/client';

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="pt-20">
      <button
        onClick={() => router.back()}
        className="flex items-center gap-3 !text-light-1 text-base-semibold bg-primary-500 rounded-full px-4 py-2"
      >
        &#8617; <span className="text-tiny-medium">Go back</span>
      </button>
    </div>
  );
};

export default BackButton;
