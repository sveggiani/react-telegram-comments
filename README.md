# react-telegram-comments

A really simple React component/library to allow website visitors to comment and interact with others using their Telegram's account.

References:

- [Telegram - Comments.app](https://comments.app/)
- [What is Telegram?](https://telegram.org/faq#q-what-is-telegram-what-do-i-do-here)

## Motivation

The main motivation for this component is to a provide a lightweight alternative to Discord (and similar services) to handle comments in websites.

[See it in action!](https://actionauta.com/notes/integrating-tailwind-css-modules-sass-stylelint-nextjs)

## Comments.app Features

- Light / Dark themes
- Customization for UI colors and icons
- Allow to reply to comments
- Like or dislike options
- Customize the number of comments to show
- Ability to add other users as Administrators or Moderators
- Ability to delete comments and ban users
- Suscribe to comments (using your Telegram account and [@discussbot](https://t.me/discussbot))
- Created by [Telegram](https://telegram.org) :blue_heart:

## To-Do

- [ ] Add some tests
- [x] Add prop for custom height
- [x] Add prop for different color names
- [x] Add prop for custom colors
- [x] Add prop for icon outlines
- [x] Write better documentation

## How to Use

1. Sign-up to [comments.app](https://comments.app), add your site and get a valid _Site ID_ for your domain.
2. Add the component package to your project with `yarn add react-telegram-comments` or `npm install react-telegram-comments`.
3. Import the component in your pages or components:
   ```javascript
   import TelegramComments from "react-telegram-comments";
   ```
4. Add `TelegramComments` to your component or page:

   ```javascript
   const Comments = () => <TelegramComments websiteKey={websiteKey} />;

   export default Comments;
   ```

5. Done

_Important:_ Have in mind that for the moment the widget doesn't work with local domains. You'll need to publish your application to see it in action.

## Configuration and Customization Using Props

- `customColor` _{string}_ _optional_ Highlight color, hex value without # (`null`)
- `customHeight` _{number}_ _optional_ Custom widget height in pixels (`null`)
- `commentsNumber` _{number}_ _optional_ The number of comments to display (`5`)
- `isDark` _{boolean}_ _optional_ Use dark theme (`false`)
- `pageId` _{string}_ _optional_ Unique identifier of the page. Page URL by default (`null`)
- `showColorfulNames` _{boolean}_ _optional_ Use different color for usernames (`false`)
- `showDislikes` _{boolean}_ _optional_ Add the dislike option for comments (`true`)
- `showIconOutlines` _{boolean}_ _optional_ Display outlined icons (`false`)
- `websiteKey`: _{string}_ _required_ The Site ID
- `containerClassName`: _{string}_ _optional_ The components main container class (`"telegram-comments"`)
- `wrapperClassName`: _{string}_ _optional_ The inner wrapper class, in case you need another one (`"telegram-comments__wrapper"`)

### Full Example

```javascript
<TelegramComments
  customColor="fb9f9f"
  customHeight="450"
  commentsNumber={3}
  isDark
  pageId="about-page"
  showColorfulNames
  showDislikes
  showIconOutlines
  websiteKey={process.env.COMMENTS_APP_KEY}
  containerClassName="awesome-comments"
  wrapperClassName="awesome-comments__wrapper"
/>
```
