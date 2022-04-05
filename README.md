This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




To get Google access credentials, you will need to login to the Google Cloud console. Sign in using your Google account and create a new project. Under + Create credentials in the top-menu bar select OAuth Client id. If requested to “Configure Consent Screen”, click on this button. On the new page that opens up, select external for the user type and click on create. Next, input your app name and email then save and continue. Leave the scope and Test users section empty and click on “Save and Continue”. Back on the dashboard, repeat the first step and click on Oauth Client id. Select “Web application” for the application type. Click on Add URI and enter http://localhost. Finally, in the Authorized redirect URIs section, click Add URI and in the field provided, key in http://localhost/api/auth/callback/google. Then create the authentication key. Copy the client ID and the client secret and add it to your application for use.



https://medium.com/@prodmxle/setting-up-nextauth-js-application-and-deploying-it-via-vercel-d6b02bf98397


The NEXTAUTH_URL is the domain you will get after you deploy the application to vercel. Example: mynextauthapp.vercel.app

To deploy the application for production, you will need one more environment variable, namely SECRET.

.env.local
