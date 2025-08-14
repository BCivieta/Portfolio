type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, eyebrow, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <div className="wrap">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

