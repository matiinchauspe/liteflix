# LITEFLIX

Enjoy from your house like a cinema

## Getting started

Let's run our app in local 🚀

```
yarn dev or npm run dev
```

## Development details

The application was developed using nextjs v13. Using server components along with the new appDir functionality (in Beta).
It's a bit cumbersome the folder architecture maybe since following what the 'vercel' people suggest we opted to put all the application content inside the 'app' folder. Perhaps it is a bit confusing as now the paths are there too. I could have put everything outside this folder but having the api in the same project could make everything even more confusing.

**Hint:**

- To corroborate errors in the image upload, you can upload an image that exceeds the 1MB limit.

#### API Repo:

- [Liteflix-API](https://github.com/matiinchauspe/liteflix-api)

## Demo

![demo](/demo.gif "demo")

# Pay attention here!

Due to a bug in the data fetching to simulate the functionality of 'getServerSideProps' in the server components, the page is static. So when you add a movie and go to the "Mis películas" list, you will not notice the change.
I propose you to clone the app and test it from the 'develop' branch, since in the local environment it is working as expected. The problem is in the build, it does not take the page as dynamic.

create an .env with these values to be able to test local - (See .env.sample)

```
MOVIE_DB_API_KEY="6f26fd536dd6192ec8a57e94141f8b20"
BASE_EXTERNAL_URL="https://api.themoviedb.org/3/"
BASE_LITEFLIX_API_URL="https://liteflix-api.vercel.app/api/v1/movies"
IMAGE_BASE_URL="https://image.tmdb.org/t/p"
```
