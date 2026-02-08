import { useState } from "react";
import styles from "./CopyButton.module.css";
import { CopyUrl, Check } from "@/assets";

export default function CopyButton({
  text,
  size = 24,
  className = "",
  onCopy,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    onCopy?.(text);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`${styles.copyButton} ${copied ? styles.copied : ""} ${className}`}
      onClick={handleCopy}
    >
      <img
        src={copied ? Check : CopyUrl}
        alt={copied ? "copied" : "copy"}
        width={size}
        height={size}
      />
    </div>
  );
}
