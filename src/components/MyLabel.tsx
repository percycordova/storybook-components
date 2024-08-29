import "./MyLabel.css";

export interface Props {
  /**
   *Text to display
   */
  label: string;

  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize all letters
   */
  allCaps?: boolean;

  /**
   * Label color
   */

  color?: "primary" | "secondary" | "tertiary";

  /**
   * Font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: Props) => {
  return (
    <span
      style={{
        color: fontColor,
        textTransform: allCaps ? "uppercase" : "none",
      }}
      className={`${size} label  text-${color}`}
    >
      {label}
    </span>
  );
};
