# Improve Vue 3.4 App Safety Using ESLint

You can use ESLint to detect syntax errors, pattern mistakes, repeated code, and other issues before committing changes in your Vue 3.4 (Options API, SCSS) project.

## 1. Install ESLint for Vue

Run the following command:

```sh
npm install eslint eslint-plugin-vue eslint-config-prettier --save-dev
```

## 2. Initialize ESLint

Run:

```sh
npx eslint --init
```

Choose the following options:
- **"To check syntax, find problems, and enforce code style"**
- **"Vue"** as your framework
- **"JavaScript modules (import/export)"**
- **"Vue" (Options API)**
- Select a **style guide** (e.g., Airbnb or Standard)
- Enable **TypeScript** if needed
- Save in **JSON format**

## 3. Configure `.eslintrc.json`

Ensure your ESLint config includes:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  "rules": {
    "vue/no-unused-vars": "warn",
    "vue/no-v-html": "warn",
    "vue/no-mutating-props": "error",
    "no-console": "warn",
    "no-unused-vars": "warn"
  }
}
```

## 4. Detect Repeated Code

Install `eslint-plugin-sonarjs`:

```sh
npm install eslint-plugin-sonarjs --save-dev
```

Modify `.eslintrc.json` to include:

```json
{
  "plugins": ["sonarjs"],
  "extends": ["plugin:sonarjs/recommended"]
}
```

## 5. Prevent Issues Before Commit

Use `husky` and `lint-staged` to enforce ESLint before committing:

```sh
npx husky-init && npm install
npm install lint-staged --save-dev
```

Modify `package.json`:

```json
"lint-staged": {
  "*.{js,vue}": "eslint --fix"
}
```

Then, run:

```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

## 🎯 Final Setup Summary

- ESLint will now detect **syntax errors** and **pattern mistakes**.
- `eslint-plugin-sonarjs` helps find **repeated code** and **complex functions**.
- Husky and lint-staged ensure **no bad code is committed**.

Now, every time you commit, ESLint will **automatically check and fix issues** before your code is pushed! 🚀

