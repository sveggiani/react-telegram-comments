import * as React from 'react'

const { useEffect, useRef } = React

const COMMENTS_APP_SCRIPT = "https://comments.app/js/widget.js?3";

type TelegramCommentsProps = {
  customColor: string,
  customHeight: number,
  commentsNumber: number,
  containerClassName: string,
  isDark: boolean,
  pageId: string,
  showColorfulNames: boolean,
  showDislikes: boolean,
  showIconOutlines: boolean,
  websiteKey: string,
  wrapperClassName: string
}

<script async src="https://comments.app/js/widget.js?3"  data-height="300" data-page-id="myPage" data-color="8EC6EB" data-outlined="1" data-colorful="1" data-dark="1"></script>

const TelegramCommentsDefaultProps = {
  commentsNumber: 5,
  containerClassName: "telegram-comments",
  isDark: false,
  showColorfulNames: false,
  showDislikes: true,
  wrapperClassName: "telegram-comments__wrapper"
};

const TelegramComments = ({
  customColor,
  customHeight,
  commentsNumber,
  containerClassName,
  isDark,
  pageId,
  showColorfulNames,
  showDislikes,
  showIconOutlines,
  websiteKey,
  wrapperClassName
}: TelegramCommentsProps) => {
  
  try {
    // if no Website keys is passed do nothing
    if (!websiteKey) {
      throw new Error("Required websiteKey not provided;");
    }

    const placeholderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = COMMENTS_APP_SCRIPT;
      script.async = true;

      customColor && script.setAttribute('data-color', customColor);
      customHeight && script.setAttribute('data-height', customHeight as unknown as string);
      script.setAttribute('data-limit', commentsNumber as unknown as string);
      isDark && script.setAttribute('data-dark', "1");
      pageId && script.setAttribute('data-page-id', pageId);
      showColorfulNames && script.setAttribute('data-colorful', "1");
      showDislikes && script.setAttribute('data-dislikes', "1");
      showIconOutlines && script.setAttribute('data-outlined', "1");
      script.setAttribute(
        'data-comments-app-website',
        websiteKey
      );
  
      if (placeholderRef.current) {
        placeholderRef.current.appendChild(script);
      }
    }, []);
  
    return (
      <div className={containerClassName}>
        <div className={wrapperClassName} ref={placeholderRef} />
      </div>
    );

  } catch(e) {
    console.error(e);
    return null;
  }
};

TelegramComments.defaultProps = TelegramCommentsDefaultProps;

export default TelegramComments;
