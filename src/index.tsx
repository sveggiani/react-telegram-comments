import * as React from 'react'

const { useEffect, useRef } = React

const COMMENTS_APP_SCRIPT = "https://comments.app/js/widget.js?3";

type TelegramCommentsProps = {
  commentsNumber: number,
  containerClassName: string,
  isDark: boolean,
  showDislikes: boolean,
  websiteKey: string,
  wrapperClassName: string
}

const TelegramCommentsDefaultProps = {
  commentsNumber: 5,
  containerClassName: "telegram-comments",
  isDark: false,
  showDislikes: true,
  wrapperClassName: "telegram-comments__wrapper"
};

const TelegramComments = ({
  commentsNumber,
  containerClassName,
  isDark,
  showDislikes,
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
      script.setAttribute(
        'data-comments-app-website',
        websiteKey
      );
      isDark && script.setAttribute('data-dark', "1");
      showDislikes && script.setAttribute('data-dislikes', "1");
      script.setAttribute('data-limit', commentsNumber as unknown as string);
  
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
