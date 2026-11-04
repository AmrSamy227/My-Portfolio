type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
  description?: string;
  titleId?: string;
};

export function SectionHeading({ number, label, title, description, titleId }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-heading__eyebrow">
        <span className="section-index">{number}</span>
        <span>{label}</span>
      </div>
      <div className="section-heading__body">
        <h2 id={titleId}>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
