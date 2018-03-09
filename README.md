# react-search
Searcher using react

## Setup

1. Create Firebase Project
2. Config your project to manage social login using facebook
3. Create a file named keys.js with this structure

```
  const keys = {
    FIREBASE_API_KEY: JSON.stringify('YOUR_KEY'),
    FIREBASE_AUTH_DOMAIN: JSON.stringify('YOUR_DOMAIN.firebaseapp.com'),FIREBASE_DATABASE_URL: JSON.stringify('https://YOUR_DOMAIN.firebaseio.com'),FIREBASE_PROJECT_ID: JSON.stringify('YOUR_PROJECT_ID'),
    FIREBASE_STORAGE_BUCKET: JSON.stringify('YOUR_DOMAIN.appspot.com'),FIREBASE_MESSAGING_SENDER_ID: JSON.stringify('YOUR_SENDER_ID')
  }

  module.exports = keys
```
4. Install dependencies
```
yarn
```
## Run

```
yarn run dev
```