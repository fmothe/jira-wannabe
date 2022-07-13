This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This is a really simplified version of what [**Jira**](https://www.atlassian.com/es/software/jira) or [**Trello**](https://trello.com/) does.


## Installations

For this project you are going to need yarn.
After installing yarn you can run the following command:
```bash
yarn install
```
This command install all the required packages into your project inside the */node_modules*

## Getting Started

First, run the development server:

```bash
yarn dev
```


## Set up your enviroment
To run this app and its database you need to set up your env, for that u have to create a .env file inside the root of the project.

Once done that you can copy the contents from env_TEMPLATE filo into your `.env` and put your credentials for your database if needed.


## Running the database.
To set up the mongodb, you only need to run the following command:
```bash
docker-compose up --build
```
This will create the database containter, you can check if the database is up by running: 
```bash
docker ps
```

After that you can do a get request  on `http://localhost:3000/api/seed` to populate the database with a few examples.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Please feel free to fork and improve from this !