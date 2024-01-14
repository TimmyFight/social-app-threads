import Headings from '@/components/Atoms/Headings/Headings';

const RightBar = () => {
  return (
    <section
      className="custom-scrollbar rightsidebar"
      data-testid="rightBar"
    >
      <div className="flex flex-1 flex-col justify-start">
        <Headings
          level={3}
          customClass="text-heading4-medium text-light-1"
        >
          <>Suggested Communities</>
        </Headings>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <Headings
          level={3}
          customClass="text-heading4-medium text-light-1"
        >
          <>Suggested Communities</>
        </Headings>
      </div>
    </section>
  );
};

export default RightBar;
