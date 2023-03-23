# [Factorial Challenge](https://github.com/matilore/metrics_dashboard)

<hr/>

### Setup

It requires node 16.19.1 and npm 8.19.3.

Execute the following commands at root level

```bash
npm install
```

### Start application

```bash
npm start
```

## Client Endpoints

- <http://localhost:3000>

### APP Structure

```bash

.
└── Root/
    ├── src/
    │   ├── assets/
    │   │   └── icons
    │   ├── common/
    │   │   ├── CheckboxGroup
    │   │   └── ProgressBar
    │   ├── features/
    │   │   ├── Dashboard/
    │   │   │   ├── components/
    │   │   │   │   └── TasksChecker/
    │   │   │   │       ├── datamodel/
    │   │   │   │       │   └── api
    │   │   │   │       ├── styledComponents
    │   │   │   │       ├── contracts.tsx
    │   │   │   │       ├── hooks.tsx
    │   │   │   │       ├── TasksChecker.tsx
    │   │   │   │       ├── index.tsx
    │   │   │   │       └── utils.ts
    │   │   │   ├── styledComponents
    │   │   │   ├── constants.ts
    │   │   │   ├── contracts.ts
    │   │   │   ├── Dashboard.tsx
    │   │   │   └── index.tsx
    │   │   └── App
    │   ├── styles/
    │   │   ├── constants
    │   │   ├── globalStyles
    │   │   ├── helmet.tsx
    │   │   └── theme.ts
    │   ├── index.html
    │   └── index.tsx
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── webpack.common.js
    ├── webpack.dev.js
    └── webpack.prod.js
```

## Main libraries used

#### Client

- React
- Webpack
- Typescript
- Jest
- testing-library/react
- Styled components

### Technical Considerations

- _I LEFT THE .ENV FILE IN THIS SPECIFIC CASE IN ORDER TO ALLOW THE EASY INSTALL AND USE BY THE REVIEWERS WITHOUT THE NECESSITY OF USING THIRD PARTIES SECRETS MANAGEMENT TOOLS_
- _THE GET QUERY FETCHES THE 1ST DOCUMENT IN THE COLLECTION, THE SEED FILE WILL GENERATE EACH TIME IS RUNNED A NEW DOCUMENT IN USERMETRICS COLLECTION => IF DATA VARIES FROM 1 ACCESS TO ANOTHER IS BECAUSE IN THE MEANTIME THE SEED SCRIPT HAS BEEN RUNNED AT LEAST ONCE_
- I decided to use npm workspaces in order to make easier and elegant the install and execution of the 2 different packages.
- I used a different file structure between api and client because the nature of React make personally easier to manage and segment files per feature and not so much by functionality. In the API you will find main folder encapsuling services, models... in react you could find a datamodel inside the Dashboard main folder. Styles components also appear in different folder hierarchy based on the specificity of its use.
- I tested few components in the client but i deprioritized the testing of the api.
- I used mongoose to increase rigidity in terms of schema for MongoDB.
- In order to reduce complexity I decided to have one single User in the DB, all metrics will be related to that user. At the same time I decided to create the User collection in order to reflect some scalability for an immaginary extension of the app in terms of funtionality.
- There is 1 main collection 'usermetrics', this is unique for each user (1 to 1 relation) but it includes 3 different categories of metrics dataseries. So 1 has many metrics divided by metric type and the type of metrics could be expanded in the future.
- I didn't use any route package or redux because the product didn't required it.
- I created a PUT route method because in reality the creation of user metrics is donde by the seed file. What the user is doing by interacting is updating the resource.
- The client uses relative paths for http requests, I added a proxy in the dev server in order to manage this case. The build script is generating an output of client + api in _root/dist_
- I didn't use different env files for different environments because of the simple nature of the application

### Product Considerations

- The main idea behind the metrics dashboard is that the user should upload 1 metric for each category per day. Adding more than 1 metric of the same type per day would create misleading information. For the purpose of allowing experimenting and using the app I didn't implement any frontend or backend validation to limit the number of post.
