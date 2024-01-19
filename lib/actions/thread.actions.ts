'use server';

import { revalidatePath } from 'next/cache';

import Thread from '../models/thread.model';
import User from '../models/user.model';
import { connectToDB } from '../mongoose';

interface ThreadValues {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function createThread({
  text,
  author,
  communityId,
  path,
}: ThreadValues) {
  connectToDB();

  const createdThread = await Thread.create({
    text,
    author,
    communityId,
  });

  await User.findByIdAndUpdate(author, {
    $push: { threads: createdThread._id },
  });

  revalidatePath(path);
}
