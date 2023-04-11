import type * as http from 'http';
import type * as https from 'https';
import type * as httpProxy from 'http-proxy';
import * as proxyFromEnv from 'proxy-from-env';

export interface CreateServerOptions {
  httpProxyOptions?: httpProxy.ServerOptions;
  httpsOptions?: https.ServerOptions;
  handleInitialRequest?: (
    req: http.IncomingMessage,
    res: http.ServerResponse,
    location: Location
  ) => void;
  getProxyForUrl: typeof proxyFromEnv.getProxyForUrl;
  maxRedirects: number;
  originBlacklist: string[];
  originWhitelist: string[];
  checkRateLimit: (origin: string) => string | undefined;
  redirectSameOrigin: boolean;
  requireHeader?: string | string[];
  removeHeaders: string[];
  setHeaders: {[key: string]: string};
  corsMaxAge?: number;
  helpFile: string;
}

export function createServer(options?: CreateServerOptions): http.Server | https.Server;
