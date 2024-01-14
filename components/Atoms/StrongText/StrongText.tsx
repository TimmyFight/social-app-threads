interface StrongTextProperties {
  children: string;
  customClass?: string;
}

const StrongText = ({
  children,
  customClass = 'text-neutral-300',
}: StrongTextProperties) => {
  return (
    <strong
      data-testid="strongText"
      className={customClass}
    >
      {children}
    </strong>
  );
};

export default StrongText;
