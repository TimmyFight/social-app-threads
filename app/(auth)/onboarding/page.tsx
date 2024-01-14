import Headings from '@/components/Atoms/Headings/Headings';

async function Page() {
  return (
    <main>
      <Headings
        level={1}
        customClass="heading-text"
      >
        <>Onboarding</>
      </Headings>
    </main>
  );
}

export default Page;
