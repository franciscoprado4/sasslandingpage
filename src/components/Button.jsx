import clsx from "clsx";

export const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
}) => {
  return href ? (
    <a
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    ></a>
  ) : (
    <Button
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      TEXT
    </Button>
  );
};
