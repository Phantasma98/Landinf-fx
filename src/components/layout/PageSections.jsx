import { useMemo } from "react";
import usePageImagePreload, { collectSectionImageUrls } from "@/hooks/usePageImagePreload";

export default function PageSections({ sections = [] }) {
  const imageUrls = useMemo(() => collectSectionImageUrls(sections), [sections]);
  usePageImagePreload(imageUrls);

  return sections.map(({ id, Component, props = {} }, index) => {
    const key = id || `${Component?.displayName || Component?.name || "section"}-${index}`;
    return (
      <div key={key} id={id} className="section-wrapper">
        <Component {...props} />
      </div>
    );
  });
}
