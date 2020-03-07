import { assetPath } from 'express-manifest-helpers';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';

export default function renderPage(component: any) {
  const helmet = Helmet.renderStatic();

  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
      </head>
      <body>
        ${renderToString({<component />})}
        <script src=${assetPath('app.js')}></script>
      </body>
    </html>
  `;
}
