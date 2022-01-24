# Next-Menu - Frontend

## Getting Started

First, run the development server:

yarn dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying pages/index.tsx. The page auto-updates as you edit the file.

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.tsx.

The pages/api directory is mapped to /api/\*. Files in this directory are treated as API routes instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Pre-rendering

By default, Next.js pre-renders every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

You can check that pre-rendering is happening by taking the following steps:

Disable JavaScript in your browser [here’s how in Chrome](https://developer.chrome.com/docs/devtools/javascript/disable/)
Reloading your page to see if it renders correctly.

## Static Generation vs Server Side Generation

We recommend using [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

On the other hand, Static Generation is not a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering). It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate frequently updated data. The team behind Next.js has created a react hook for data fetching called [SWR](https://swr.vercel.app/). It handles caching, revalidation, focus tracking, re-fetching on interval, and more. We won’t cover the details here, but here’s an example usage:

```bash
    import useSWR from 'swr'

    function Profile() {
    const { data, error } = useSWR('/api/user', fetch)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>hello {data.name}!</div>
    }
```

## Data fetching

For data fetching please follow the next documentation [here](https://nextjs.org/docs/basic-features/data-fetching)
Primarily with the help of [SWR](https://swr.vercel.app/) a React Hooks for Data fetching library

## Styling

For styling please use [Semantic-UI](https://react.semantic-ui.com/) and [Styled-components](https://styled-components.com/)

To combine the two please following this [link](https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity)
