# LITEFLIX

Enjoy from your house like a cinema

## Getting started

Let's run our app in local 🚀

```
yarn dev or npm run dev
```

## Development details

The application was developed using nextjs v13. Using server components along with the new appDir functionality (in Beta).

**Hint:**

- To corroborate errors in the image upload, you can upload an image that exceeds the 1MB limit.

#### API Repo:

- [Liteflix-API](https://github.com/matiinchauspe/liteflix-api)

## Demo

![demo](/demo.gif "demo")

# Pay attention here!

Due to a bug in the data fetching to simulate the functionality of 'getServerSideProps' in the server components, the page is static. So when you add a movie and go to the "Mis películas" list, you will not notice the change.
I propose you to clone the app and test it from the 'develop' branch, since in the local environment it is working as expected. The problem is in the build, it does not take the page as dynamic.

