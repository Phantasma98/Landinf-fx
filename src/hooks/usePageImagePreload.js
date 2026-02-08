import { useEffect } from "react";

const IMAGE_EXT_RE = /\.(avif|webp|png|jpe?g|gif|svg)(\?.*)?$/i;
const PRELOADED_URLS = new Set();

function isImageUrl(value) {
  if (typeof value !== "string") return false;
  if (value.startsWith("data:image/")) return true;
  return IMAGE_EXT_RE.test(value);
}

function extractUrlsDeep(value, out, seen) {
  if (value == null) return;

  if (typeof value === "string") {
    if (isImageUrl(value)) out.add(value);
    return;
  }

  if (typeof value !== "object") return;
  if (seen.has(value)) return;
  seen.add(value);

  if (Array.isArray(value)) {
    value.forEach((item) => extractUrlsDeep(item, out, seen));
    return;
  }

  Object.values(value).forEach((entry) => extractUrlsDeep(entry, out, seen));
}

export function collectSectionImageUrls(sections = []) {
  const urls = new Set();
  const seen = new WeakSet();

  sections.forEach((section) => {
    extractUrlsDeep(section?.props, urls, seen);
  });

  return [...urls];
}

export default function usePageImagePreload(imageUrls = []) {
  useEffect(() => {
    imageUrls.forEach((url) => {
      if (!url || PRELOADED_URLS.has(url)) return;
      PRELOADED_URLS.add(url);

      const img = new Image();
      img.decoding = "async";
      img.src = url;
    });
  }, [imageUrls]);
}
