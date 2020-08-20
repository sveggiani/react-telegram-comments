/// <reference types="react" />
declare type TelegramCommentsProps = {
    customColor: string;
    customHeight: number;
    commentsNumber: number;
    containerClassName: string;
    isDark: boolean;
    pageId: string;
    showColorfulNames: boolean;
    showDislikes: boolean;
    showIconOutlines: boolean;
    websiteKey: string;
    wrapperClassName: string;
};
declare const TelegramComments: {
    ({ customColor, customHeight, commentsNumber, containerClassName, isDark, pageId, showColorfulNames, showDislikes, showIconOutlines, websiteKey, wrapperClassName }: TelegramCommentsProps): JSX.Element;
    defaultProps: {
        commentsNumber: number;
        containerClassName: string;
        isDark: boolean;
        showColorfulNames: boolean;
        showDislikes: boolean;
        wrapperClassName: string;
    };
};
export default TelegramComments;
