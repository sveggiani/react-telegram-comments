Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useEffect = React.useEffect, useRef = React.useRef;
var COMMENTS_APP_SCRIPT = "https://comments.app/js/widget.js?3";
React.createElement("script", { async: true, src: "https://comments.app/js/widget.js?3", "data-height": "300", "data-page-id": "myPage", "data-color": "8EC6EB", "data-outlined": "1", "data-colorful": "1", "data-dark": "1" });
var TelegramCommentsDefaultProps = {
    commentsNumber: 5,
    containerClassName: "telegram-comments",
    isDark: false,
    showColorfulNames: false,
    showDislikes: true,
    wrapperClassName: "telegram-comments__wrapper"
};
var TelegramComments = function (_a) {
    var customColor = _a.customColor, customHeight = _a.customHeight, commentsNumber = _a.commentsNumber, containerClassName = _a.containerClassName, isDark = _a.isDark, pageId = _a.pageId, showColorfulNames = _a.showColorfulNames, showDislikes = _a.showDislikes, showIconOutlines = _a.showIconOutlines, websiteKey = _a.websiteKey, wrapperClassName = _a.wrapperClassName;
    try {
        // if no Website keys is passed do nothing
        if (!websiteKey) {
            throw new Error("Required websiteKey not provided;");
        }
        var placeholderRef_1 = useRef(null);
        useEffect(function () {
            var script = document.createElement('script');
            script.src = COMMENTS_APP_SCRIPT;
            script.async = true;
            customColor && script.setAttribute('data-color', customColor);
            customHeight && script.setAttribute('data-height', customHeight);
            script.setAttribute('data-limit', commentsNumber);
            isDark && script.setAttribute('data-dark', "1");
            pageId && script.setAttribute('data-page-id', pageId);
            showColorfulNames && script.setAttribute('data-colorful', "1");
            showDislikes && script.setAttribute('data-dislikes', "1");
            showIconOutlines && script.setAttribute('data-outlined', "1");
            script.setAttribute('data-comments-app-website', websiteKey);
            if (placeholderRef_1.current) {
                placeholderRef_1.current.appendChild(script);
            }
        }, []);
        return (React.createElement("div", { className: containerClassName },
            React.createElement("div", { className: wrapperClassName, ref: placeholderRef_1 })));
    }
    catch (e) {
        console.error(e);
        return null;
    }
};
TelegramComments.defaultProps = TelegramCommentsDefaultProps;

exports.default = TelegramComments;
//# sourceMappingURL=index.js.map
