import type { JSX } from "astro/jsx-runtime";

type Props = {
  title?: string;
  children?: JSX.Element | JSX.Element[];
  className?: string;
};

export const Section = ({
  title = "",
  className = "",
  children = [],
}: Props) => {
  return (
    <section className={className}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};
