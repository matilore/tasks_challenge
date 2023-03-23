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

- I didn't use any state managment or route packages because in this specific case they were not required.
- I Declare App as the main entry component
- Dashboard component represents the main Feature
- ProgressBar component has been placed in a "common" folder together with Checkboxes because of their level of agnosticism

### Product Considerations
