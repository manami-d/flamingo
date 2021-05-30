[Figma](https://www.figma.com/file/fiy0FDK8RYYqJnG1qTrA3c/Mi-chan) | [Trello](https://trello.com/b/crjZ41sx/web-app-tracker) </br>

---

## Styling

---

**Global Styles**

chuck anything into `styles/globals.scss`

All colors etc. should be assigned in here, component styling should be limited to layout and responsiveness.

</br>

**Styling per Component/Page**

you will need to either use JS inside the file (i.e. [styled components](https://styled-components.com/)) or create an individual css file that must be a module. i.e. footerStyles.module.css

</br>

**Bootstrap**

import the file into \_app.js

```js
// pages/_app.js
import 'bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
```

</br>

---

## Icons

---

React Icons has been imported into the Package and gives us access to a lot of common icons very easily. [React Icons](https://react-icons.github.io/react-icons)

**How To**

Step 1. import the icon into the file: `js import {AiOutlineInstagram} from 'react-icons/ai' `

step 2. use it `js <AiOutlineInstagram />`

</br>

---

## Importing fonts/ StyleSheets

---

Put these inside pages/\_document.js

```js
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet" />
        </ Head>
        <body>
```

</br>

---

## Environment Variables

---

Save these inside .env.local example=thisIsASecret and reference them inside your code i.e.

```js
process.env.example;
```

[DOCS - loading-environment-variables](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables) </br>

---

## Learn More

---

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

</br>

---

## Deployment

---

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
