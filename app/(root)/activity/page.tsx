import Headings from '@/components/Atoms/Headings/Headings';

const Page = async () => {
  return (
    <section>
      <Headings
        level={1}
        customClass="head-text mb-10"
      >
        <>Activity</>
      </Headings>
    </section>
  );
};

export default Page;
