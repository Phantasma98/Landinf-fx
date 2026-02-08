import { Link } from "react-router-dom";

export default function SecondaryBtn({ text, href, onClick, size = "l" }) {
  const className = `btn-secondary font-button-${size === "m" ? "s" : "l"}${size === "m" ? " btn-m" : ""}`;

  if (href) {
    // Handle hash links
    if (href.startsWith("#") || href.startsWith("/#")) {
      return (
        <a href={href} className={className}>
          {text}
        </a>
      );
    }
    return (
      <Link to={href} className={className}>
        {text}
      </Link>
    );
  }
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
