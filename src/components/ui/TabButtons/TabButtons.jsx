import styles from "./TabButtons.module.css";

export default function TabButtons({
  items = [],
  activeItem,
  onSelect,
  className = "",
  buttonClassName = "",
}) {
  return (
    <div className={`${styles.tabButtons} ${className}`}>
      {items.map((item) => (
        <button
          key={item}
          className={`${styles.tabBtn} ${activeItem === item ? styles.active : ""} ${buttonClassName}`}
          onClick={() => onSelect(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
