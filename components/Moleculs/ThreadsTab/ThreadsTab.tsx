interface ThreadsTabProperties {
  currentUserId: string;
  accountId: string;
  acountType: string;
}

const ThreadsTab = async ({
  currentUserId,
  accountId,
  acountType,
}: ThreadsTabProperties) => {
  return <div>ThreadsTab</div>;
};

export default ThreadsTab;
