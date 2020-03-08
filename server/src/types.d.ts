declare const IS_SERVER: boolean;

declare module 'express-manifest-helpers' {
  import { RequestHandler } from 'express';

  export default function(options: object): RequestHandler;
  export function assetPath(asset: string): string;
}
