/// <reference types="react" />
declare type TelegramCommentsProps = {
    commentsNumber: number;
    containerClassName: string;
    isDark: boolean;
    showDislikes: boolean;
    websiteKey: string;
    wrapperClassName: string;
};
declare const TelegramComments: {
    ({ commentsNumber, containerClassName, isDark, showDislikes, websiteKey, wrapperClassName }: TelegramCommentsProps): JSX.Element;
    defaultProps: {
        commentsNumber: number;
        containerClassName: string;
        isDark: boolean;
        showDislikes: boolean;
        wrapperClassName: string;
    };
};
export default TelegramComments;
