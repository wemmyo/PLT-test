This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Summary

### State Management

The state management is done with [Redux Toolkit (RTK)](https://redux-toolkit.js.org/).
I chose to use RTK because it is a very simple and easy to use library. It also has a lot of features that make it very powerful like RTK Query which was used to fetch data.
In a production app, I would use RTK Query to fetch data and RTK to manage the state of the app for scale and performance compared to React Context API.

### Styling

Semantic UI React was used for styling. I chose to use this library because it is very easy to use and has a lot of components that can be used to build the app quickly to keep things simple.

### Testing

I used Jest and React Testing Library to test the app, included some integration and unit tests. Jest-each is very handy for testing multiple scenarios.

### Suggestions and Improvements

Didn't want to spend too much time on this so I didn't add some features, but I would add those features if I had more time.

- Add Error UI for when there is an error fetching data
- Persist state in local storage for basket items, currently it resets when the page is refreshed
- Improve tests, add more tests for components, pages and snapshots to catch unexpected UI changes. Ensure correct endpoints are being called and data is being fetched correctly.
- Accessibility improvements, add aria labels and improve the UI for screen readers.
- Split up the components into smaller components to make them more reusable and easier to test
