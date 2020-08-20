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
- Replies to other users comments
- Like or dislike options
- Customization the number of comments to show
- Ability to add other users as Administrators or Moderators
- Ability to delete comments and ban users
- Suscribe to comments (using your Telegram account and )
- Created by [Telegram](https://telegram.org) :blue_heart:

## To-Do

- [ ] Add some tests
- [ ] Write better documentation

    

## How to Use

1. Sign-up to [comments.app](https://comments.app), add your site and get a valid _Site ID_ for your domain.
2. Add the component package to your project with `yarn add react-telegram-comments` or `npm install react-telegram-comments`.
3. Import the component in your pages or components:
    ```javascript
    import TelegramComments from 'react-telegram-comments';
    ```
4. Add `TelegramComments` to your component or page:
    ```javascript
    const Comments = () => (
      <TelegramComments
        websiteKey={websiteKey}
      />
    );

    export default Comments;
    ```
5. Done

*Important:* Have in mind that for the moment the widget doesn't work with local domains. You'll need to publish your application to see it in action.

    

## Configuration and Customization Using Props

- `commentsNumber` _{number}_ optional The number of comments to display (`5`)
- `containerClassName`: _{string}_ optional The components main container class (`"telegram-comments"`)
- `isDark`: _{boolean}_ optional Use the dark theme (`false`)
- `showDislikes`  _{boolean}_ Add the dislike option for comments (`true`)
- `websiteKey`: _{string}_ _required_ The Site ID
- `wrapperClassName`: _{string}_ optional The inner wrapper class, in case you need another one (`"telegram-comments__wrapper"`)


### Full Example

```javascript
<TelegramComments
  commentsNumber={3}
  containerClassName="awesome-comments"
  isDark
  showDislikes
  websiteKey={process.env.COMMENTS_APP_KEY}
  wrapperClassName="awesome-comments__wrapper"
/>
```
