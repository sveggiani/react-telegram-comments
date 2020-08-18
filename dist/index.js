Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

var useEffect = React.useEffect, useRef = React.useRef;
var COMMENTS_APP_SCRIPT = "https://comments.app/js/widget.js?3";
var TelegramCommentsDefaultProps = {
    commentsNumber: 5,
    containerClassName: "telegram-comments",
    isDark: false,
    showDislikes: true,
    wrapperClassName: "telegram-comments__wrapper"
};
var TelegramComments = function (_a) {
    var commentsNumber = _a.commentsNumber, containerClassName = _a.containerClassName, isDark = _a.isDark, showDislikes = _a.showDislikes, websiteKey = _a.websiteKey, wrapperClassName = _a.wrapperClassName;
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
            script.setAttribute('data-comments-app-website', websiteKey);
            isDark && script.setAttribute('data-dark', "1");
            showDislikes && script.setAttribute('data-dislikes', "1");
            script.setAttribute('data-limit', commentsNumber);
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
