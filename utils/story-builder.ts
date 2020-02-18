/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from 'lit-html';

export function storyBuilder(storyFn: () => any) {
  const parameters: any = {};
  const options: any = {};
  const decorators: any[] = [];
  const api = {
    withParameter: (name: string, value: any) => {
      parameters[name] = value;
      return api;
    },
    withOptions: (name: string, value: any) => {
      options[name] = value;
      return api;
    },
    withDecorator: (decorator: any) => {
      decorators.push(decorator);
      return api;
    },
    withName: (name: string) => {
      options.name = name;
      return api;
    },
    build: () => {
      const elm = document.createElement('div');
      render(storyFn(), elm);
      (storyFn as any).story = {
        ...options,
        parameters: {
          ...parameters,
          mdxSource: elm.innerHTML.replace(/<!---->/g, '').trim(),
        },
        decorators: [...decorators],
      };
      return storyFn;
    },
  };
  return api;
}
