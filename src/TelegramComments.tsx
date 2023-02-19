import React, { useEffect, useRef } from "react";

export const COMMENTS_APP_SCRIPT = "https://comments.app/js/widget.js?3";

export interface TelegramCommentsProps {
  commentsNumber?: number;
  containerClassName?: string;
  customColor?: string;
  customHeight?: number;
  onLoad?: () => void;
  pageId?: string;
  showColorfulNames?: boolean;
  showDislikes?: boolean;
  showIconOutlines?: boolean;
  useDarkMode?: boolean;
  websiteKey: string;
  wrapperClassName?: string;
}

const TelegramComments = ({
  commentsNumber = 5,
  containerClassName = "telegram-comments",
  customColor,
  customHeight,
  onLoad,
  pageId,
  showColorfulNames = false,
  showDislikes = true,
  showIconOutlines,
  useDarkMode = false,
  websiteKey,
  wrapperClassName = "telegram-comments__wrapper",
}: TelegramCommentsProps) => {
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = COMMENTS_APP_SCRIPT;
    script.async = true;

    // mandatory attributes
    script.setAttribute("data-limit", commentsNumber as unknown as string);
    script.setAttribute("data-comments-app-website", websiteKey);

    // optional attributes
    customColor && script.setAttribute("data-color", customColor);
    customHeight &&
      script.setAttribute("data-height", customHeight as unknown as string);
    useDarkMode && script.setAttribute("data-dark", "1");
    pageId && script.setAttribute("data-page-id", pageId);
    showColorfulNames && script.setAttribute("data-colorful", "1");
    showDislikes && script.setAttribute("data-dislikes", "1");
    showIconOutlines && script.setAttribute("data-outlined", "1");

    script.onload = onLoad ? () => onLoad() : null;
    script.onerror = (e) => console.log(e);

    if (placeholderRef.current) {
      placeholderRef.current.appendChild(script);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if no Website keys is passed do nothing
  if (!websiteKey) {
    return null;
  }

  return (
    <div data-testid="rtc-container" className={containerClassName}>
      <div
        data-testid="rtc-wrapper"
        className={wrapperClassName}
        ref={placeholderRef}
      />
    </div>
  );
};

export default TelegramComments;
