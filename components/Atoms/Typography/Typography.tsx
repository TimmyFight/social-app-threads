interface TypographyProperties {
  children?: JSX.Element;
  customClass?: string;
}

const Typography = ({
  children = <></>,
  customClass = '',
}: TypographyProperties) => {
  return (
    <p
      data-testid="typography"
      className={customClass}
    >
      {children}
    </p>
  );
};

export default Typography;
