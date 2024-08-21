
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
# API Reference



# Guestara
API collection for guestara assignment
# 📁 Folder: Category 


## End-point: Create Category
endpoint to create category
### Method: POST
>```
>/category
>```
### Body (**raw**)

```json
{
    "name": "nint1345_category",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "taxApplicability": true,
    "tax": 20000,
    "taxType": "direct" // direct or indirect
}
```

### Response: 200
```json
{
    "name": "nint134_category",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "taxApplicability": true,
    "tax": 10000,
    "taxType": "direct",
    "_id": "66c5b9b1316b050aa705a253",
    "createdAt": "2024-08-21T09:56:01.096Z",
    "updatedAt": "2024-08-21T09:56:01.096Z",
    "__v": 0
}
```

### Response: 500
```json
{
    "message": "Category validation failed: tax: Tax Number is required when tax applicability is true., taxType: Tax Type is required when tax applicability is true.",
    "stack": "ValidationError: Category validation failed: tax: Tax Number is required when tax applicability is true., taxType: Tax Type is required when tax applicability is true.\n    at Document.invalidate (/Users/pallavpatra/Guestara/node_modules/mongoose/lib/document.js:3312:32)\n    at model.<anonymous> (file:///Users/pallavpatra/Guestara/src/models/category.js:17:10)\n    at callMiddlewareFunction (/Users/pallavpatra/Guestara/node_modules/kareem/index.js:628:27)\n    at next (/Users/pallavpatra/Guestara/node_modules/kareem/index.js:93:7)\n    at Kareem.execPre (/Users/pallavpatra/Guestara/node_modules/kareem/index.js:122:8)\n    at Kareem.wrap (/Users/pallavpatra/Guestara/node_modules/kareem/index.js:368:8)\n    at model.$__validate (/Users/pallavpatra/Guestara/node_modules/kareem/index.js:502:11)\n    at /Users/pallavpatra/Guestara/node_modules/mongoose/lib/document.js:2643:10\n    at new Promise (<anonymous>)\n    at model.validate (/Users/pallavpatra/Guestara/node_modules/mongoose/lib/document.js:2642:10)"
}
```

### Response: 400
```json
{
    "message": "Category validation failed: taxType: garbage is not a valid tax type. Valid options are \"direct\" or \"indirect\".",
    "stack": "ValidationError: Category validation failed: taxType: garbage is not a valid tax type. Valid options are \"direct\" or \"indirect\".\n    at Document.invalidate (/Users/pallavpatra/Guestara/node_modules/mongoose/lib/document.js:3312:32)\n    at /Users/pallavpatra/Guestara/node_modules/mongoose/lib/document.js:3073:17\n    at /Users/pallavpatra/Guestara/node_modules/mongoose/lib/schemaType.js:1388:9\n    at process.processTicksAndRejections (node:internal/process/task_queues:77:11)"
}
```

### Response: 409
```json
{
    "message": "E11000 duplicate key error collection: test.categories index: name_1 dup key: { name: \"nint134_category\" }",
    "stack": "MongoServerError: E11000 duplicate key error collection: test.categories index: name_1 dup key: { name: \"nint134_category\" }\n    at InsertOneOperation.execute (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/operations/insert.js:51:19)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async executeOperation (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/operations/execute_operation.js:136:16)\n    at async Collection.insertOne (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/collection.js:155:16)"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All Categories
### Method: GET
>```
>/category/all?name=nint13_category&taxApplicability=true&tax=10000&taxType=direct
>```
### Query Params

|Param|value|
|---|---|
|name|nint13_category|
|taxApplicability|true|
|tax|10000|
|taxType|direct|


### Response: 200
```json
[
    {
        "_id": "66c569b535070c141252367d",
        "name": "first_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:14:45.614Z",
        "updatedAt": "2024-08-21T04:14:45.614Z",
        "__v": 0
    },
    {
        "_id": "66c56ca9c46527e27f1890e9",
        "name": "second_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:27:21.764Z",
        "updatedAt": "2024-08-21T04:27:21.764Z",
        "__v": 0
    },
    {
        "_id": "66c57039d27c58de8ce64499",
        "name": "third_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:42:33.210Z",
        "updatedAt": "2024-08-21T04:42:33.210Z",
        "__v": 0
    },
    {
        "_id": "66c5a4ba9d8eb4dd86200013",
        "name": "fourth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T08:26:34.655Z",
        "updatedAt": "2024-08-21T08:26:34.655Z",
        "__v": 0
    },
    {
        "_id": "66c5a6de848ebd90f7b84c2c",
        "name": "fifth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T08:35:42.229Z",
        "updatedAt": "2024-08-21T08:35:42.229Z",
        "__v": 0
    },
    {
        "_id": "66c5a8a41bf140ee4e9eff69",
        "name": "sixth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T08:43:16.328Z",
        "updatedAt": "2024-08-21T08:43:16.328Z",
        "__v": 0
    },
    {
        "_id": "66c5af0950a5108840fc5f72",
        "name": "seventh_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:10:33.507Z",
        "updatedAt": "2024-08-21T09:10:33.507Z",
        "__v": 0
    },
    {
        "_id": "66c5b0592f4593961bb55382",
        "name": "tenth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:16:09.401Z",
        "updatedAt": "2024-08-21T09:16:09.401Z",
        "__v": 0
    },
    {
        "_id": "66c5b16cfac3eeca073e943e",
        "name": "ten_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:20:44.145Z",
        "updatedAt": "2024-08-21T09:20:44.145Z",
        "__v": 0
    },
    {
        "_id": "66c5b5a8d4945f99df5bdfa6",
        "name": "ninth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:38:48.225Z",
        "updatedAt": "2024-08-21T09:38:48.225Z",
        "__v": 0
    },
    {
        "_id": "66c5b77a6848e1593eba2e01",
        "name": "nint11h_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:46:34.161Z",
        "updatedAt": "2024-08-21T09:46:34.161Z",
        "__v": 0
    },
    {
        "_id": "66c5b8469cb4cbbb6a6cc955",
        "name": "nint11_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:49:58.872Z",
        "updatedAt": "2024-08-21T09:49:58.872Z",
        "__v": 0
    },
    {
        "_id": "66c5b85f316b050aa705a249",
        "name": "nint12_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:50:23.093Z",
        "updatedAt": "2024-08-21T09:50:23.093Z",
        "__v": 0
    },
    {
        "_id": "66c5b8ea316b050aa705a24f",
        "name": "nint13_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:52:42.154Z",
        "updatedAt": "2024-08-21T09:52:42.154Z",
        "__v": 0
    },
    {
        "_id": "66c5b9b1316b050aa705a253",
        "name": "nint134_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:56:01.096Z",
        "updatedAt": "2024-08-21T09:56:01.096Z",
        "__v": 0
    }
]
```

### Response: 200
```json
[
    {
        "_id": "66c569b535070c141252367d",
        "name": "first_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:14:45.614Z",
        "updatedAt": "2024-08-21T04:14:45.614Z",
        "__v": 0
    }
]
```

### Response: 200
```json
[
    {
        "_id": "66c5b8ea316b050aa705a24f",
        "name": "nint13_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:52:42.154Z",
        "updatedAt": "2024-08-21T09:52:42.154Z",
        "__v": 0
    },
    {
        "_id": "66c5b9b1316b050aa705a253",
        "name": "nint134_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:56:01.096Z",
        "updatedAt": "2024-08-21T09:56:01.096Z",
        "__v": 0
    }
]
```

### Response: 200
```json
[
    {
        "_id": "66c569b535070c141252367d",
        "name": "first_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:14:45.614Z",
        "updatedAt": "2024-08-21T04:14:45.614Z",
        "__v": 0
    },
    {
        "_id": "66c56ca9c46527e27f1890e9",
        "name": "second_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:27:21.764Z",
        "updatedAt": "2024-08-21T04:27:21.764Z",
        "__v": 0
    },
    {
        "_id": "66c57039d27c58de8ce64499",
        "name": "third_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:42:33.210Z",
        "updatedAt": "2024-08-21T04:42:33.210Z",
        "__v": 0
    },
    {
        "_id": "66c5a4ba9d8eb4dd86200013",
        "name": "fourth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T08:26:34.655Z",
        "updatedAt": "2024-08-21T08:26:34.655Z",
        "__v": 0
    },
    {
        "_id": "66c5a6de848ebd90f7b84c2c",
        "name": "fifth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T08:35:42.229Z",
        "updatedAt": "2024-08-21T08:35:42.229Z",
        "__v": 0
    },
    {
        "_id": "66c5a8a41bf140ee4e9eff69",
        "name": "sixth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T08:43:16.328Z",
        "updatedAt": "2024-08-21T08:43:16.328Z",
        "__v": 0
    },
    {
        "_id": "66c5af0950a5108840fc5f72",
        "name": "seventh_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:10:33.507Z",
        "updatedAt": "2024-08-21T09:10:33.507Z",
        "__v": 0
    },
    {
        "_id": "66c5b0592f4593961bb55382",
        "name": "tenth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:16:09.401Z",
        "updatedAt": "2024-08-21T09:16:09.401Z",
        "__v": 0
    },
    {
        "_id": "66c5b16cfac3eeca073e943e",
        "name": "ten_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:20:44.145Z",
        "updatedAt": "2024-08-21T09:20:44.145Z",
        "__v": 0
    },
    {
        "_id": "66c5b5a8d4945f99df5bdfa6",
        "name": "ninth_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:38:48.225Z",
        "updatedAt": "2024-08-21T09:38:48.225Z",
        "__v": 0
    },
    {
        "_id": "66c5b77a6848e1593eba2e01",
        "name": "nint11h_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:46:34.161Z",
        "updatedAt": "2024-08-21T09:46:34.161Z",
        "__v": 0
    },
    {
        "_id": "66c5b8469cb4cbbb6a6cc955",
        "name": "nint11_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:49:58.872Z",
        "updatedAt": "2024-08-21T09:49:58.872Z",
        "__v": 0
    },
    {
        "_id": "66c5b85f316b050aa705a249",
        "name": "nint12_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T09:50:23.093Z",
        "updatedAt": "2024-08-21T09:50:23.093Z",
        "__v": 0
    }
]
```

### Response: 200
```json
[
    {
        "_id": "66c5b8ea316b050aa705a24f",
        "name": "nint13_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:52:42.154Z",
        "updatedAt": "2024-08-21T09:52:42.154Z",
        "__v": 0
    },
    {
        "_id": "66c5b9b1316b050aa705a253",
        "name": "nint134_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:56:01.096Z",
        "updatedAt": "2024-08-21T09:56:01.096Z",
        "__v": 0
    }
]
```

### Response: 200
```json
[
    {
        "_id": "66c5b8ea316b050aa705a24f",
        "name": "nint13_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:52:42.154Z",
        "updatedAt": "2024-08-21T09:52:42.154Z",
        "__v": 0
    },
    {
        "_id": "66c5b9b1316b050aa705a253",
        "name": "nint134_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:56:01.096Z",
        "updatedAt": "2024-08-21T09:56:01.096Z",
        "__v": 0
    }
]
```

### Response: 200
```json
[
    {
        "_id": "66c5b8ea316b050aa705a24f",
        "name": "nint13_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": true,
        "tax": 10000,
        "taxType": "direct",
        "createdAt": "2024-08-21T09:52:42.154Z",
        "updatedAt": "2024-08-21T09:52:42.154Z",
        "__v": 0
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Category
### Method: GET
>```
>/category/66c5b8ea316b050aa705a24f
>```
### Response: 200
```json
{
    "_id": "66c5b8ea316b050aa705a24f",
    "name": "nint13_category",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "taxApplicability": true,
    "tax": 10000,
    "taxType": "direct",
    "createdAt": "2024-08-21T09:52:42.154Z",
    "updatedAt": "2024-08-21T09:52:42.154Z",
    "__v": 0
}
```

### Response: 404
```json
{
    "message": "Category not found",
    "stack": "NotFoundError: Category not found\n    at CategoryService.getById (file:///Users/pallavpatra/Guestara/src/services/category.js:18:26)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

### Response: 404
```json
{
    "message": "Category not found",
    "stack": "NotFoundError: Category not found\n    at CategoryService.getById (file:///Users/pallavpatra/Guestara/src/services/category.js:18:26)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Edit Category
### Method: PATCH
>```
>/category/66c5b8ea316b050aa705a24f
>```
### Body (**raw**)

```json
{
    "name": "nint134_category",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "taxApplicability": true,
    "tax": 10000,
    "taxType": "direct"
}
```

### Response: 200
```json
{
    "_id": "66c5b8ea316b050aa705a24f",
    "name": "nint134_category_edit",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "taxApplicability": true,
    "tax": 10000,
    "taxType": "direct",
    "createdAt": "2024-08-21T09:52:42.154Z",
    "updatedAt": "2024-08-21T11:46:04.588Z",
    "__v": 0
}
```

### Response: 404
```json
{
    "message": "Category not found",
    "stack": "NotFoundError: Category not found\n    at CategoryService.update (file:///Users/pallavpatra/Guestara/src/services/category.js:25:33)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)"
}
```

### Response: 409
```json
{
    "message": "Plan executor error during findAndModify :: caused by :: E11000 duplicate key error collection: test.categories index: name_1 dup key: { name: \"nint134_category\" }",
    "stack": "MongoServerError: Plan executor error during findAndModify :: caused by :: E11000 duplicate key error collection: test.categories index: name_1 dup key: { name: \"nint134_category\" }\n    at Connection.sendCommand (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/cmap/connection.js:297:27)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async Connection.command (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/cmap/connection.js:325:26)\n    at async Server.command (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/sdam/server.js:166:24)\n    at async FindOneAndUpdateOperation.executeCommand (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/operations/command.js:74:16)\n    at async FindOneAndUpdateOperation.execute (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/operations/find_and_modify.js:91:24)\n    at async executeOperation (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/operations/execute_operation.js:136:16)\n    at async Collection.findOneAndUpdate (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/collection.js:480:16)\n    at async model.Query._findOneAndUpdate (/Users/pallavpatra/Guestara/node_modules/mongoose/lib/query.js:3407:13)\n    at async model.Query.exec (/Users/pallavpatra/Guestara/node_modules/mongoose/lib/query.js:4401:63)"
}```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Folder: Sub Category 


## End-point: Create Sub Category
### Method: POST
>```
>/sub-category
>```
### Body (**raw**)

```json
{
    "name": "thirteen",
    "category": "66c569b535070c141252367d",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "taxApplicability": false,
    "tax": 1234567
}
```

### Response: 201
```json
{
    "name": "eleven",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "category": "66c5b8ea316b050aa705a24f",
    "_id": "66c5f9cf75af0b9717ad67e2",
    "createdAt": "2024-08-21T14:29:35.871Z",
    "updatedAt": "2024-08-21T14:29:35.871Z",
    "taxApplicability": true,
    "__v": 0
}
```

### Response: 409
```json
{
    "message": "E11000 duplicate key error collection: test.subcategories index: name_1 dup key: { name: \"eleven\" }",
    "stack": "MongoServerError: E11000 duplicate key error collection: test.subcategories index: name_1 dup key: { name: \"eleven\" }\n    at InsertOneOperation.execute (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/operations/insert.js:51:19)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)\n    at async executeOperation (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/operations/execute_operation.js:136:16)\n    at async Collection.insertOne (/Users/pallavpatra/Guestara/node_modules/mongodb/lib/collection.js:155:16)"
}
```

### Response: 201
```json
{
    "name": "twelve",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "category": "66c5b8ea316b050aa705a24f",
    "taxApplicability": false,
    "tax": 1234567,
    "_id": "66c5fa953fffcf9f2229dc54",
    "createdAt": "2024-08-21T14:32:53.086Z",
    "updatedAt": "2024-08-21T14:32:53.086Z",
    "__v": 0
}
```

### Response: 201
```json
{
    "name": "fourteen",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "category": "66c5b8ea316b050aa705a24f",
    "_id": "66c5fefd321be60b6cca5898",
    "createdAt": "2024-08-21T14:51:41.351Z",
    "updatedAt": "2024-08-21T14:51:41.351Z",
    "taxApplicability": true,
    "tax": 10000,
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get All  Sub Category
### Method: GET
>```
>/sub-category/all?name=eleven&image=https://www.google.com/url?sa=i%26url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F%26psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA%26ust=1724298363577000%26source=images%26cd=vfe%26opi=89978449%26ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE
>```
### Query Params

|Param|value|
|---|---|
|category|66c569b535070c141252367d|
|name|eleven|
|image|https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE|
|description|description added|


### Response: 200
```json
[
    {
        "_id": "66c5e95a802cc64a9a6a8f23",
        "name": "first",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T13:19:22.878Z",
        "updatedAt": "2024-08-21T13:19:22.878Z",
        "__v": 0
    },
    {
        "_id": "66c5e99ee55519017db70124",
        "name": "second",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T13:20:30.403Z",
        "updatedAt": "2024-08-21T13:20:30.403Z",
        "__v": 0
    },
    {
        "_id": "66c5f6f5116cf1084da74b28",
        "name": "third",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:17:25.470Z",
        "updatedAt": "2024-08-21T14:17:25.470Z",
        "__v": 0
    },
    {
        "_id": "66c5f75ce89dfb29c57fddc6",
        "name": "fourht",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:19:08.631Z",
        "updatedAt": "2024-08-21T14:19:08.631Z",
        "__v": 0
    },
    {
        "_id": "66c5f7a02cd4220f8de21f86",
        "name": "five",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:20:16.782Z",
        "updatedAt": "2024-08-21T14:20:16.782Z",
        "__v": 0
    },
    {
        "_id": "66c5f7b83ffca6f8c3f0f115",
        "name": "six",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:20:40.638Z",
        "updatedAt": "2024-08-21T14:20:40.638Z",
        "__v": 0
    },
    {
        "_id": "66c5f89b1663abd404df8f59",
        "name": "seven",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:24:27.855Z",
        "updatedAt": "2024-08-21T14:24:27.855Z",
        "__v": 0
    },
    {
        "_id": "66c5f91805516b34bc89aefa",
        "name": "eight",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:26:32.703Z",
        "updatedAt": "2024-08-21T14:26:32.703Z",
        "__v": 0
    },
    {
        "_id": "66c5f9529ca85e3cbc52f5d1",
        "name": "nine",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:27:30.121Z",
        "updatedAt": "2024-08-21T14:27:30.121Z",
        "__v": 0
    },
    {
        "_id": "66c5f99dc86fecc4bd41947e",
        "name": "ten",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:28:45.411Z",
        "updatedAt": "2024-08-21T14:28:45.411Z",
        "taxApplicability": true,
        "tax": 10000,
        "__v": 0
    },
    {
        "_id": "66c5f9cf75af0b9717ad67e2",
        "name": "eleven",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:29:35.871Z",
        "updatedAt": "2024-08-21T14:29:35.871Z",
        "taxApplicability": true,
        "__v": 0
    },
    {
        "_id": "66c5fa953fffcf9f2229dc54",
        "name": "twelve",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "taxApplicability": false,
        "tax": 1234567,
        "createdAt": "2024-08-21T14:32:53.086Z",
        "updatedAt": "2024-08-21T14:32:53.086Z",
        "__v": 0
    }
]
```

### Response: 200
```json
[
    {
        "_id": "66c5f9cf75af0b9717ad67e2",
        "name": "eleven",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c5b8ea316b050aa705a24f",
            "name": "nint134_category_edit",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": true,
            "tax": 10000,
            "taxType": "direct",
            "createdAt": "2024-08-21T09:52:42.154Z",
            "updatedAt": "2024-08-21T11:47:47.144Z",
            "__v": 0
        },
        "createdAt": "2024-08-21T14:29:35.871Z",
        "updatedAt": "2024-08-21T14:29:35.871Z",
        "taxApplicability": true,
        "__v": 0
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Sub Category by Category
### Method: GET
>```
>/sub-category/all?category=66c569b535070c141252367d
>```
### Query Params

|Param|value|
|---|---|
|category|66c569b535070c141252367d|


### Response: 200
```json
[
    {
        "_id": "66c5fb823fffcf9f2229dc5a",
        "name": "thirteen",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": {
            "_id": "66c569b535070c141252367d",
            "name": "first_category",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": false,
            "tax": 0,
            "createdAt": "2024-08-21T04:14:45.614Z",
            "updatedAt": "2024-08-21T04:14:45.614Z",
            "__v": 0
        },
        "taxApplicability": false,
        "tax": 1234567,
        "createdAt": "2024-08-21T14:36:50.120Z",
        "updatedAt": "2024-08-21T14:36:50.120Z",
        "__v": 0
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Sub Category By Id
### Method: GET
>```
>/sub-category/66c5fb823fffcf9f2229dc5a
>```
### Response: 200
```json
{
    "_id": "66c5fb823fffcf9f2229dc5a",
    "name": "thirteen",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "category": {
        "_id": "66c569b535070c141252367d",
        "name": "first_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:14:45.614Z",
        "updatedAt": "2024-08-21T04:14:45.614Z",
        "__v": 0
    },
    "taxApplicability": false,
    "tax": 1234567,
    "createdAt": "2024-08-21T14:36:50.120Z",
    "updatedAt": "2024-08-21T14:36:50.120Z",
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update Sub Category
### Method: PATCH
>```
>/sub-category/66c5fb823fffcf9f2229dc5a
>```
### Body (**raw**)

```json
{
    "name": "hundred",
    "category": "66c5b8ea316b050aa705a24f",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added"
}
```

### Response: 200
```json
{
    "_id": "66c5fb823fffcf9f2229dc5a",
    "name": "hundred",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "description added",
    "category": "66c5b8ea316b050aa705a24f",
    "taxApplicability": false,
    "tax": 1234567,
    "createdAt": "2024-08-21T14:36:50.120Z",
    "updatedAt": "2024-08-21T14:57:38.293Z",
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Folder: Item 


## End-point: Create Item
### Method: POST
>```
>/item
>```
### Body (**raw**)

```json
{
    "name": "second",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "added",
    "taxApplicability": false,
    "base": 33,
    "discount": 3,
    "baseAmount": 90,
    "category": "66c569b535070c141252367d",
    "subCategory": "66c5f9cf75af0b9717ad67e2"
}
```

### Response: 201
```json
{
    "name": "second",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "added",
    "taxApplicability": false,
    "tax": 0,
    "baseAmount": 90,
    "discount": 3,
    "category": "66c569b535070c141252367d",
    "subCategory": "66c5f9cf75af0b9717ad67e2",
    "_id": "66c60b436bc6e8e6063e0a1d",
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get all items
### Method: GET
>```
>/item/all?name=fisrt&description=added
>```
### Query Params

|Param|value|
|---|---|
|name|fisrt|
|image|https://www.google.com/url?sa=i%26url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F%26psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA%26ust=1724298363577000%26source=images%26cd=vfe%26opi=89978449%26ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE|
|description|added|
|taxApplicability|false|
|tax|0|
|baseAmount|90|
|discount|3|


### Response: 200
```json
[
    {
        "_id": "66c60b346bc6e8e6063e0a1b",
        "name": "fisrt",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "added",
        "taxApplicability": false,
        "tax": 0,
        "baseAmount": 90,
        "discount": 3,
        "category": {
            "_id": "66c569b535070c141252367d",
            "name": "first_category",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": false,
            "tax": 0,
            "createdAt": "2024-08-21T04:14:45.614Z",
            "updatedAt": "2024-08-21T04:14:45.614Z",
            "__v": 0
        },
        "subCategory": {
            "_id": "66c5f9cf75af0b9717ad67e2",
            "name": "eleven",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "category": "66c5b8ea316b050aa705a24f",
            "createdAt": "2024-08-21T14:29:35.871Z",
            "updatedAt": "2024-08-21T14:29:35.871Z",
            "taxApplicability": true,
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "66c60b436bc6e8e6063e0a1d",
        "name": "second",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "added",
        "taxApplicability": false,
        "tax": 0,
        "baseAmount": 90,
        "discount": 3,
        "category": {
            "_id": "66c569b535070c141252367d",
            "name": "first_category",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": false,
            "tax": 0,
            "createdAt": "2024-08-21T04:14:45.614Z",
            "updatedAt": "2024-08-21T04:14:45.614Z",
            "__v": 0
        },
        "subCategory": {
            "_id": "66c5f9cf75af0b9717ad67e2",
            "name": "eleven",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "category": "66c5b8ea316b050aa705a24f",
            "createdAt": "2024-08-21T14:29:35.871Z",
            "updatedAt": "2024-08-21T14:29:35.871Z",
            "taxApplicability": true,
            "__v": 0
        },
        "__v": 0
    }
]
```

### Response: 200
```json
[
    {
        "_id": "66c60b346bc6e8e6063e0a1b",
        "name": "fisrt",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "added",
        "taxApplicability": false,
        "tax": 0,
        "baseAmount": 90,
        "discount": 3,
        "category": {
            "_id": "66c569b535070c141252367d",
            "name": "first_category",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": false,
            "tax": 0,
            "createdAt": "2024-08-21T04:14:45.614Z",
            "updatedAt": "2024-08-21T04:14:45.614Z",
            "__v": 0
        },
        "subCategory": {
            "_id": "66c5f9cf75af0b9717ad67e2",
            "name": "eleven",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "category": "66c5b8ea316b050aa705a24f",
            "createdAt": "2024-08-21T14:29:35.871Z",
            "updatedAt": "2024-08-21T14:29:35.871Z",
            "taxApplicability": true,
            "__v": 0
        },
        "__v": 0,
        "totalAmount": 87,
        "id": "66c60b346bc6e8e6063e0a1b"
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get items by category
### Method: GET
>```
>/item/all?category=66c569b535070c141252367d
>```
### Query Params

|Param|value|
|---|---|
|category|66c569b535070c141252367d|


### Response: 200
```json
[
    {
        "_id": "66c60b346bc6e8e6063e0a1b",
        "name": "fisrt",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "added",
        "taxApplicability": false,
        "tax": 0,
        "baseAmount": 90,
        "discount": 3,
        "category": {
            "_id": "66c569b535070c141252367d",
            "name": "first_category",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": false,
            "tax": 0,
            "createdAt": "2024-08-21T04:14:45.614Z",
            "updatedAt": "2024-08-21T04:14:45.614Z",
            "__v": 0
        },
        "subCategory": {
            "_id": "66c5f9cf75af0b9717ad67e2",
            "name": "eleven",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "category": "66c5b8ea316b050aa705a24f",
            "createdAt": "2024-08-21T14:29:35.871Z",
            "updatedAt": "2024-08-21T14:29:35.871Z",
            "taxApplicability": true,
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "66c60b436bc6e8e6063e0a1d",
        "name": "second",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "added",
        "taxApplicability": false,
        "tax": 0,
        "baseAmount": 90,
        "discount": 3,
        "category": {
            "_id": "66c569b535070c141252367d",
            "name": "first_category",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": false,
            "tax": 0,
            "createdAt": "2024-08-21T04:14:45.614Z",
            "updatedAt": "2024-08-21T04:14:45.614Z",
            "__v": 0
        },
        "subCategory": {
            "_id": "66c5f9cf75af0b9717ad67e2",
            "name": "eleven",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "category": "66c5b8ea316b050aa705a24f",
            "createdAt": "2024-08-21T14:29:35.871Z",
            "updatedAt": "2024-08-21T14:29:35.871Z",
            "taxApplicability": true,
            "__v": 0
        },
        "__v": 0
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get items by sub category
### Method: GET
>```
>/item/all?subCategory=66c5f9cf75af0b9717ad67e2
>```
### Query Params

|Param|value|
|---|---|
|subCategory|66c5f9cf75af0b9717ad67e2|


### Response: 200
```json
[
    {
        "_id": "66c60b346bc6e8e6063e0a1b",
        "name": "fisrt",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "added",
        "taxApplicability": false,
        "tax": 0,
        "baseAmount": 90,
        "discount": 3,
        "category": {
            "_id": "66c569b535070c141252367d",
            "name": "first_category",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": false,
            "tax": 0,
            "createdAt": "2024-08-21T04:14:45.614Z",
            "updatedAt": "2024-08-21T04:14:45.614Z",
            "__v": 0
        },
        "subCategory": {
            "_id": "66c5f9cf75af0b9717ad67e2",
            "name": "eleven",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "category": "66c5b8ea316b050aa705a24f",
            "createdAt": "2024-08-21T14:29:35.871Z",
            "updatedAt": "2024-08-21T14:29:35.871Z",
            "taxApplicability": true,
            "__v": 0
        },
        "__v": 0
    },
    {
        "_id": "66c60b436bc6e8e6063e0a1d",
        "name": "second",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "added",
        "taxApplicability": false,
        "tax": 0,
        "baseAmount": 90,
        "discount": 3,
        "category": {
            "_id": "66c569b535070c141252367d",
            "name": "first_category",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "taxApplicability": false,
            "tax": 0,
            "createdAt": "2024-08-21T04:14:45.614Z",
            "updatedAt": "2024-08-21T04:14:45.614Z",
            "__v": 0
        },
        "subCategory": {
            "_id": "66c5f9cf75af0b9717ad67e2",
            "name": "eleven",
            "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
            "description": "description added",
            "category": "66c5b8ea316b050aa705a24f",
            "createdAt": "2024-08-21T14:29:35.871Z",
            "updatedAt": "2024-08-21T14:29:35.871Z",
            "taxApplicability": true,
            "__v": 0
        },
        "__v": 0
    }
]
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: get item by id
### Method: GET
>```
>/item/66c60b346bc6e8e6063e0a1b
>```
### Response: 200
```json
{
    "_id": "66c60b346bc6e8e6063e0a1b",
    "name": "fisrt",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "added",
    "taxApplicability": false,
    "tax": 0,
    "baseAmount": 90,
    "discount": 3,
    "category": {
        "_id": "66c569b535070c141252367d",
        "name": "first_category",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "taxApplicability": false,
        "tax": 0,
        "createdAt": "2024-08-21T04:14:45.614Z",
        "updatedAt": "2024-08-21T04:14:45.614Z",
        "__v": 0
    },
    "subCategory": {
        "_id": "66c5f9cf75af0b9717ad67e2",
        "name": "eleven",
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
        "description": "description added",
        "category": "66c5b8ea316b050aa705a24f",
        "createdAt": "2024-08-21T14:29:35.871Z",
        "updatedAt": "2024-08-21T14:29:35.871Z",
        "taxApplicability": true,
        "__v": 0
    },
    "__v": 0
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Update item
### Method: PATCH
>```
>/item/66c60b346bc6e8e6063e0a1b
>```
### Body (**raw**)

```json
{
    "baseAmount" : 99
}
```

### Response: 200
```json
{
    "_id": "66c60b346bc6e8e6063e0a1b",
    "name": "fisrt",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenacresportsmed.com.au%2Fdummy-image%2F&psig=AOvVaw1N2nz2RF-_DFhh4VMPZvTA&ust=1724298363577000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIj8tY6WhYgDFQAAAAAdAAAAABAE",
    "description": "added",
    "taxApplicability": false,
    "tax": 0,
    "baseAmount": 99,
    "discount": 3,
    "category": "66c569b535070c141252367d",
    "subCategory": "66c5f9cf75af0b9717ad67e2",
    "__v": 0,
    "updatedAt": "2024-08-21T16:02:49.182Z",
    "totalAmount": 96,
    "id": "66c60b346bc6e8e6063e0a1b"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃


