This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Setting Up Environment Variables

To configure the project, create a `.env.local` file in the root directory of your project and add the following variables:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blogCMS
JWT_SECRET=your_jwt_secret
```

- `MONGO_URI`: Replace `<username>` and `<password>` with your MongoDB credentials. This is the connection string for your MongoDB database.
- `JWT_SECRET`: Replace `your_jwt_secret` with a strong, unique secret key for signing JSON Web Tokens (JWT).

#### Important Notes:

- **Do not share your `.env.local` file** or expose sensitive information in public repositories.
- Use a secure and unique `JWT_SECRET` to ensure the security of your application.
- If deploying to a production environment, ensure these variables are set in your hosting platform's environment configuration.
- For local development, you can use tools like [dotenv](https://www.npmjs.com/package/dotenv) to manage environment variables.
- Always validate and sanitize environment variables before using them in your application.

To run this project, you need to set up the following environment variables in a `.env.local` file at the root of your project:

```env
MONGO_URI=mongodb+srv://yadavdipak2911:Dipak2024@cluster0.g5mfxfg.mongodb.net/blogCMS
JWT_SECRET=your_jwt_secret
```

- `MONGO_URI`: The connection string for your MongoDB database.
- `JWT_SECRET`: A secret key used for signing JSON Web Tokens (JWT).

Make sure to replace `your_jwt_secret` with a strong, secure secret key.

## Notes for Developers

1. **Database Connection**: Ensure that your MongoDB instance is running and accessible via the `MONGO_URI` provided.
2. **Security**: Never expose sensitive information like `MONGO_URI` or `JWT_SECRET` in public repositories. Use environment variables for secure storage.
3. **Dependencies**: Install all required dependencies using:

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Development Server**: Start the development server using:

   ```bash
   npm run dev
   ```

5. **Testing**: Add tests for new features and ensure existing tests pass before pushing changes.

6. **Code Quality**: Follow best practices for code quality and maintainability. Use linters and formatters as configured in the project.

For further assistance, refer to the project's documentation or reach out to the team.
