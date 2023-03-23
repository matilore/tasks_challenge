# [Lodgify Challenge](https://github.com/matilore/tasks_challenge)

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
    │   │   ├── CheckboxGroup/
    │   │   │   ├── styledComponents
    │   │   │   ├── test
    │   │   │   ├── CheckboxGroup.tsx
    │   │   │   ├── index.tsx
    │   │   │   └── contracts.ts
    │   │   └── ProgressBar/
    │   │       ├── styledComponents
    │   │       ├── test
    │   │       ├── contracts.ts
    │   │       ├── ProgressBar.tsx
    │   │       └── index.tsx
    │   ├── features/
    │   │   ├── Dashboard/
    │   │   │   ├── components/
    │   │   │   │   └── TasksChecker/
    │   │   │   │       ├── datamodel/
    │   │   │   │       │   ├── api
    │   │   │   │       │   ├── utils.ts
    │   │   │   │       │   └── utils.test.ts
    │   │   │   │       ├── test
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
- I Declare App as the main entry component.
- Dashboard component represents the main Feature.
- ProgressBar component has been placed in a "common" folder together with Checkboxes because of their level of agnosticism.
- The Dashboard component is the source of the progress and tasks state which are inherited to its children.
- TasksChecker handle the logic for displaying the proper group of tasks. It also syntetize in "handleCheckboxChange" the global state changes when the checkboxes are clicked. This has been done this way in order to let the Checkboxes to be agnostic and re-usable and to avoid the passing of unnecesary props. listenOutsideClick is in charge of listening for clicks outside the main component and closes the selected group of tasks.
- CheckboxGroup execute the "handleCheckboxChange" received as prop.
- ProgressBar is based on a component receiving the progress value and it uses a transition to generate de progression effect
- The response is parsed, the parsing involves an initial calculation of the values sum, this is used to get the normalized values and their sum. In addition the parsing is replacing the original values with the normalized values and also attach ids in order to make more convenient the task groups selection
