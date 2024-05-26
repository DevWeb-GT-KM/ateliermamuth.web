type FormattedDateProps = {
  date: Date;
  className: string;
};

export const FormattedDate: React.FC<FormattedDateProps> = ({
  date,
  className,
}) => {
  const formatedDate = `${String(date.getUTCDate()).padStart(2, "0")}/${String(
    date.getUTCMonth() + 1
  ).padStart(2, "0")}/${date.getUTCFullYear()}`;

  return <p className={className}>{formatedDate}</p>;
};
