# react-telegram-comments v2

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

A really simple React component/library to allow website visitors to comment and interact with others using their Telegram's account.

References:

- [Telegram - Comments.app](https://comments.app/)
- [What is Telegram?](https://telegram.org/faq#q-what-is-telegram-what-do-i-do-here)

## Motivation

The main motivation for this component is to a provide a lightweight alternative to Discord (and similar services) to handle comments in websites.

See it in action!:

- [Example page](https://sveggiani.github.io/react-telegram-comments)
- [On my personal website](https://actionauta.com/notes/integrating-tailwind-css-modules-sass-stylelint-nextjs)

## Comments.app Features

- Light and dark themes
- Customization for UI colors and icons
- Allow to reply to comments
- Like or dislike options
- Customize the number of comments to show
- Ability to add other users as Administrators or Moderators
- Ability to delete comments and ban users
- Suscribe to comments (using your Telegram account and [@discussbot](https://t.me/discussbot))

_Created by [Telegram](https://telegram.org)_ :blue_heart:

## How to Use

1. Sign-up to [comments.app](https://comments.app), add your site and get a valid _Site ID_ for your domain.
2. Add the component package to your project with `yarn add react-telegram-comments` or `npm install react-telegram-comments`.
3. Import the component in your pages or components:
   ```javascript
   import { TelegramComments } from "react-telegram-comments";
   ```
4. Add `TelegramComments` to your component or page:

   ```javascript
   const Comments = () => <TelegramComments websiteKey={websiteKey} />;

   export default Comments;
   ```

_Important:_ Have in mind that for the moment the widget doesn't work with local domains. You'll need to publish your website to see it in action.

## Configuration and Customization Using Props

- `commentsNumber` _{number}_ _optional_ The number of comments to display (`5`)
- `containerClassName`: _{string}_ _optional_ The components main container class (`"telegram-comments"`)
- `customColor` _{string}_ _optional_ Highlight color, hex value without # (`null`)
- `customHeight` _{number}_ _optional_ Custom widget height in pixels (`null`)
- `onLoad`: _{}_ _optional_ Callback function to be executed when the external script is loaded
- `pageId` _{string}_ _optional_ Unique identifier of the page. Page URL by default (`null`)
- `showColorfulNames` _{boolean}_ _optional_ Use different color for usernames (`false`)
- `showDislikes` _{boolean}_ _optional_ Add the dislike option for comments (`true`)
- `showIconOutlines` _{boolean}_ _optional_ Display outlined icons (`false`)
- `useDarkMode` _{boolean}_ _optional_ Use dark theme (`false`)
- `websiteKey`: _{string}_ _required_ The Site ID
- `wrapperClassName`: _{string}_ _optional_ The inner wrapper class, in case you need another one (E.g. `"telegram-comments__wrapper"`)

### Full Example

```javascript
<TelegramComments
  commentsNumber={3}
  containerClassName="awesome-comments"
  customColor="663399"
  customHeight="450"
  isDark
  onLoad={() => console.log("Comments loaded!")}
  pageId="about-page"
  showColorfulNames
  showDislikes
  showIconOutlines
  websiteKey={process.env.COMMENTS_APP_KEY}
  wrapperClassName="awesome-comments__wrapper"
/>
```

### Change log

#### v2.0.0

- Rewrite component using modern TypeScript and React.
- New, simplified build system using `tsc` only.
- Automated builds and NPM publish using github actions.
- Add unitary tests (finally!).
- Enhanced documentation and demo page added.
- `isDark` prop renamed to `useDarkMode` (only breaking change from v1)
- Add `onLoad` callback prop

---

[npm-url]: https://www.npmjs.com/package/react-telegram-comments
[npm-image]: https://img.shields.io/npm/v/react-telegram-comments
[github-license]: https://img.shields.io/github/license/sveggiani/react-telegram-comments
[github-license-url]: https://github.com/sveggiani/react-telegram-comments/blob/master/LICENSE
[github-build]: https://github.com/sveggiani/react-telegram-comments/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/sveggiani/react-telegram-comments/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/react-telegram-comments

Proudly made in :argentina:
