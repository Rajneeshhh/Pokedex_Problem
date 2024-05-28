This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, install dependencies:
```bash
npm i
```
Create .env file and add Database url by replacing user password and db name:
DATABASE_URL="postgresql://postgres:password@localhost:5432/db_name"

Perform Migration:
```bash
npx prisma init
npx prisma migrate dev --name init
npx prisma generate
```


Then, populate a the database with initial or sample data using a command:

```bash
npm run seed
```

Then, run the development server:

```bash
npm run dev
```



Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Screenshots

## 1

![part1](https://github.com/Rajneeshhh/Pokedex_Problem/assets/88944205/893285c7-acf9-4736-a0df-cc33b668f3ae)


## 2

![part2](https://github.com/Rajneeshhh/Pokedex_Problem/assets/88944205/31806b19-2134-4a5b-bab6-352fe991a06d)


## 3

![part3](https://github.com/Rajneeshhh/Pokedex_Problem/assets/88944205/babfde14-e1f4-489b-9110-03f3b57691f3)


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
