// NOTE: These definitions support NodeJS and TypeScript 3.2 - 3.4.

// NOTE: TypeScript version-specific augmentations can be found in the following paths:
//          - ~/base.d.ts         - Shared definitions common to all TypeScript versions
//          - ~/index.d.ts        - Definitions specific to TypeScript 2.1
//          - ~/ts3.2/base.d.ts   - Definitions specific to TypeScript 3.2
//          - ~/ts3.2/index.d.ts  - Definitions specific to TypeScript 3.2 with global and assert pulled in

// Reference required types from the default lib:
/// <reference lib="es2018" />
/// <reference lib="esnext.asynciterable" />
/// <reference lib="esnext.intl" />
/// <reference lib="esnext.bigint" />

// Base definitions for all NodeJS modules that are not specific to any version of TypeScript:
// tslint:disable-next-line:no-bad-reference
/// <reference path="../ts3.1/base.d.ts" />

// TypeScript 3.2-specific augmentations:
/// <reference path="fs.d.ts" />
/// <reference path="process.d.ts" />
/// <reference path="util.d.ts" />
/// <reference path="globals.d.ts" />
