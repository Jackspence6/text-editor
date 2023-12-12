# Text Editor: A Progressive Web App for Offline Editing

## Description

A browser-based text editor PWA with offline capabilities. Utilizes idb for data persistence and service workers for caching. Deployed on Heroku, offering a seamless note-taking and code snippet experience.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Offline Functionality](#offline-functionality)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

Clone the repository to your local machine:

```
git clone git@github.com:Jackspence6/text-editor.git
```

Navigate to the application directory and install dependencies:

```
npm install
```

## Configuration

Ensure `idb` is included in your project dependencies:

```
npm install idb
```

## Offline Functionality

This application uses service workers and IndexedDB to allow offline use:

- Service workers for caching static assets.
- IndexedDB for data storage and retrieval.

## Usage

1. Development Mode:

```
npm run start:dev
```

2. Production Mode:

```
npm run start
```

3. Server Only:

```
npm run server
```

4. Build Application:

```
npm run build
```

5. Install Dependencies:

```
npm run install
```

6. Client Only:

```
npm run client
```

## Features

- **IndexedDB Integration:** Immediate database creation on opening the text editor.
- **Data Persistence:** Automatic saving of content to IndexedDB when clicking off the DOM window.
- **Retrieval on Reopen:** Content retrieval from IndexedDB on reopening the text editor.
- **PWA Capabilities:** Ability to install the web application as an icon on your desktop.
- **Service Worker Registration:** Pre-caching of static assets and pages using Workbox.

## Contributing

Contributions are welcome. For major changes, please open an issue first to discuss your suggestions or improvements.

## License

[MIT](LICENSE)

## Contact

GitHub: [Jackspence6](https://github.com/Jackspence6)  
Email: [jackspence.dev@gmail.com](mailto:jackspence.dev@gmail.com)
