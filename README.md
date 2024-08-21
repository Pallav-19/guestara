
# Guestara

Local setup and API documentations


## Tech Stack


**Server:** Node, Express

**Database:** MongoDB on Atlas with Mongoose ODM.

**hooks:** husky for pre-commit hook

**deployment:** AWS EC2


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ATLAS_URI`

`PORT`


## Run Locally

Clone the project

```bash
  git clone git@github.com:Pallav-19/guestara.git
```

Go to the project directory

```bash
  cd guestara
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start:dev
```

Run Lint

```bash
   npm run Lint
```

Fix Lint Issues
```bash
   npm run lint:fix
```



## Extra Efforts

- Centralised Error Handling.
- Centralised Promise Handling.
- linting and formatting in development mode.
- pre commit hook to ensure everything is formatted well before pushing.
- MVC with Services Architecture.
- CI/CD pipeline for auto deployment.
- SSL certificaate added and https enabled in deployment.
- custom domain added.
- clean code.
- different flow to start the application, where if the execution of the previous child process fails i.e. linting here, the application won't start.


## Has Room For

- automated testing using jest
- more optimisation in code - completely class based controllers and Routers
- JSDoc generated documentation
- swagger documentation.
- adding another layer of repositiories below services to make the code base Repository Model.
## Postman Collection

#### Click here to get the postman documentation
[Collection](https://documenter.getpostman.com/view/16563017/2sA3sAioVp)


## Demo

Insert gif or link to demo

coming soon.
# Guestara

Local setup and API documentations. coming soon ...

