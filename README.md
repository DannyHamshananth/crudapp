CRUD Application
=======
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Prerequisites
- NodeJS installed
- MySQL installed
- phpMyAdmin/MySQL Workbench installed (Optional)
- Create a database in MySQL

First, run the development server:

```bash
cd /crudapp # In the terminal change the directory to the cloned project folder

npm  i # To install dependencies

```

To setup create Tables.
Update the .env file, by replacing your own db credintals.
DATABASE_URL="mysql://dbusername:dbpassword@localhost:3306/dbname"


```bash
npx prisma migrate deploy #  This will create tables in the database

npm run dev # To start the development server
```