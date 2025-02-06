What to do to reproduce the issue:

1. npx create-next-app@latest  
2. then follow the instructions in "https://payloadcms.com/docs/getting-started/installation" "Adding to existing app"

As part of step 2. I copy-pasted the entire (payload) folder from https://github.com/payloadcms/payload/tree/main/templates/blank/src/app/(payload) and separated my front-end into (front-end)

3. apart from following all the payload instructions, I found it necessary to follow my own steps to make the automatic type generation work
3.1 I added the following to package.json:
    "generate:types": "cross-env NODE_OPTIONS=--no-deprecation payload generate:types",
    "payload": "cross-env NODE_OPTIONS=--no-deprecation payload"
3.2 I did "npm i cross-env"
3.3 I added the following lines to "payload.config.ts"
    
    const filename = fileURLToPath(import.meta.url)
    const dirname = path.dirname(filename)

    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },

Only then running "pnpm run payload generate:types" created a "payload-types.ts" with the following console message:
    [12:01:51] INFO: Compiling TS types for Collections and Globals...
    [12:01:51] INFO: Types written to /Users/whatisloves/help-me-app/payload-types.ts


4. I copy-pasted the code for Banner block from Payload Website template. After pasting config, I generated types. Then inserted banner component.
5. In admin panel I put some random text in RTE and made a banner component. Upon rendering I am getting this message in the console:
    "Lexical => JSX converter: Blocks converter: found banner block, but no converter is provided"

    and "unknown" mode shows on the webpage where <RichText /> component should render

6. When I try to run "npm run payload generate:types" I am getting the following error:
    node:internal/process/promises:394
    triggerUncaughtException(err, true /* fromPromise */);
    ^
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".css" for /Users/whatisloves/help-me-app/node_modules/@payloadcms/richtext-lexical/dist/exports/react/components/RichText/index.css
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:183:9)
    at defaultGetFormat (node:internal/modules/esm/get_format:209:36)
    at defaultLoad (node:internal/modules/esm/load:119:22)
    at async nextLoad (node:internal/modules/esm/hooks:748:22)
    at async load (file:///Users/whatisloves/help-me-app/node_modules/tsx/dist/esm/index.mjs?1738856302886:2:1762)
    at async nextLoad (node:internal/modules/esm/hooks:748:22)
    at async Hooks.load (node:internal/modules/esm/hooks:385:20)
    at async handleMessage (node:internal/modules/esm/worker:199:18) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}