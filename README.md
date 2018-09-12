## phone-words

Minimalistic REST app with node.js backend and react frontend.

* Demo: https://phone-words.herokuapp.com

### Usage

```bash
# installs all dependencies also in server subfolder
yarn install  

# runs api server
yarn server:compile&&yarn server:run

# opens webpack dev server
yarn dev
```

### Development

```bash 
yarn test # runs tests
yarn validate # runs linter
```

### Deploy to heroku
```bash
heroku login
heroku create <app-name>
git push heroku HEAD:master --force-with-lease
```

## Author and license
(c) 2018 Pavel Zbytovský, https://zby.cz

Licenced under MIT license.
