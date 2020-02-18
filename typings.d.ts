/* eslint-disable @typescript-eslint/no-explicit-any */

// declaration.d.ts
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
