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


    