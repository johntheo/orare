# Walkthrough
1. Run `npm init -y` and set index.ts as the entry point
2. Run `npm install --save-dev typescript` for adding typescript capabilities
3. Intall ambient types with `npm install @types/node --save-dev`
4. Create the file `tsconfig.json` for configuring TypeScript behavior 
    ```bash 
    npx tsc --init --rootDir src --outDir build \
    --esModuleInterop --resolveJsonModule --lib es6 \
    --module commonjs --allowJs true --noImplicitAny true
    ```
5. Create `src` folder and `indext.ts`
6. Generate run scripts `npx tsc`
7. Enabling test with Jest
   1. Install jest `npm install jest ts-jest --save-dev`
   2. Install jest types `npm install --save-dev @types/node @types/jest`
   3.  Create `jest.confi.js` in the root
       ```javascript
           module.exports = {
           preset: 'ts-jest',
           testEnvironment: 'node',
           modulePaths: ['<rootDir>/src'],
           moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
           };
       ```
8.  Enabling ColdReloading 
    1. `npm install --save-dev ts-node nodemon`
    2.  Add Nodemon Config `nodemon.json`
        ```json
        {
            "watch": ["src"],
            "ext": ".ts,.js",
            "ignore": [],
            "exec": "npx ts-node ./src/index.ts"
        }
        ```
    3. Add script in the package.json `"start:dev": "npx nodemon"` 
 9.  Creating production builds
     1.  Install `rimraf` for cleaning the dist folder: `npm install --save-dev rimraf`
     2.  Update build script in `package.json`: `"build": "rimraf ./dist && tsc"`
     3.  Add *Production Startuo Script*: `"start": "npm run build && node build/index.js"`
 10. Enabling LINT
     1.  Installing `npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin`
     2.  Configuring file `.eslintrc`
     ```json
        {
            "root": true,
            "parser": "@typescript-eslint/parser",
            "plugins": [
                "@typescript-eslint"
            ],
            "extends": [
                "eslint:recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            "rules": { 
                "no-console": "warn" 
            }
        }
     ```
     3. Configuring the lint ignore `.eslintignore`
     ```
        node_modules
        dist
     ```
     4. Adding script: in `package.json`: `"lint": "eslint . --ext .ts"`
  11. Configuring Prettier for running Lint while we code
      1.  Install: `npm install --save-dev prettier`
      2.  Configuring `.prettierrc`
      ```json
        {
            "semi": true,
            "trailingComma": "none",
            "singleQuote": true,
            "printWidth": 80
        }
      ```
      3.  Adding script: `"prettier-format": "prettier --config .prettierrc 'src/**/*.ts' --write"`
      4.  Install VSCode Extension: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode 
      5.  Prettier + ESLint: 
          1.  `npm install --save-dev eslint-config-prettier eslint-plugin-prettier`
          2.  `.eslintrc`
            ```json
                {
                    "root": true,
                    "parser": "@typescript-eslint/parser",
                    "plugins": [
                        "@typescript-eslint",
                        "prettier"
                    ],
                    "extends": [
                        "eslint:recommended",
                        "plugin:@typescript-eslint/eslint-recommended",
                        "plugin:@typescript-eslint/recommended",
                        "prettier"
                    ],
                    "rules": {
                        "no-console": "warn",       
                        "prettier/prettier": "error" 
                    }
                }
            ```
9. Configuring Husky for ensuring patterns on commmit
   1.  Installing: `npm install husky --save-dev`
   2.  Configuring `package.json`: 
   ```json
    {
        ...
        "husky": {
            "hooks": {
                "pre-commit": "npm run prettier-format && npm run lint"
            }
        }
    }
   ```
   3.  