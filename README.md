[![](https://comsysto.github.io/poc-angular-form-validation-backend/doc/banner.svg)](https://github.com/comsysto/poc-angular-form-validation-frontend)

# Frontend

Proof of Concept of ServerSide Form Validation with i18n and Angular Frontend.

 * :sparkles: **Frontend**
 * :sparkles: [Backend](https://github.com/comsysto/poc-angular-form-validation-backend)

&nbsp;

### Proof of Concept Outline

 * See [Backend](https://github.com/comsysto/poc-angular-form-validation-backend)
 * The Frontend should also support Intl MessageFormat pluralization support for 18n. Therefore we use:
   * https://github.com/ngx-translate/core
   * https://github.com/lephyrus/ngx-translate-messageformat-compiler


&nbsp;

### Frontend Description


The Frontend will provide:

 * a form to to create *Tickets*.
 * form validation in the *Tickets* form.
 * Form Validation Rules and i18n messages loaded from backend.
 * i18n JSON message files with pluralization support.

&nbsp;

### Deployment

Deployed to GitHub Pages on gh-pages Push

 * https://comsysto.github.io/poc-angular-form-validation-frontend/

Run on a clean master branch to deploy:

```
bash deploy-to-gh-pages.sh
```

&nbsp;


### Development

**Quickstart:**

```bash
https://github.com/comsysto/poc-angular-form-validation-frontend
poc-angular-form-validation-frontend
yarn install

yarn start
```

Now server is running on http://localhost:4200/

&nbsp;

**Run Tests:**

```
yarn test
```

&nbsp;

**Editor/IDE**

At best use [Visual Studio Code](https://code.visualstudio.com/) since it has great TypeScript support.

 * Do not forget to install [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
 * At best install the [Angular Essentials Package](https://marketplace.visualstudio.com/items?itemName=johnpapa.angular-essentials)
 * See [Angular and VS Code Debugging Guide](https://code.visualstudio.com/docs/nodejs/angular-tutorial)
 * Add to config `{ "files.trimTrailingWhitespace": true }`

&nbsp;

### License

[MIT](./LICENSE) © [Bernhard Grünewaldt](https://github.com/clouless)
