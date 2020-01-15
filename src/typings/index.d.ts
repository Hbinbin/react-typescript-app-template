/// <reference types="./config.d.ts" />
/// <reference types="./common.d.ts" />
/// <reference types="./api.d.ts" />

interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
  __wxjs_environment: any;
  ENV: any;
  Config: IConfig;
}

declare const Config: IConfig;
declare const ENV: any;
