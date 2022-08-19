import '@divriots/dockit-core/style.css';
import '@divriots/dockit-core/layout/dockit-layout.define.js';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import { styles } from '@divriots/dockit-core/layout';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import logoSvg from './logo.svg?raw';

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      width: max-content;
      font-size: 1.5rem;
      color: #cf649a;
    }

    .box {
      width: 4rem;
      height: 4rem;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
      border-radius: 0.2rem;
    }
  </style>
  <dockit-layout
    disable-color-scheme-change
    initial-color-scheme="light"
    .context="${context}"
  >
    <div class="logo" slot="logo">${unsafeHTML(logoSvg)} Sass Starter</div>
    <div class="prose">${unsafeHTML(content)}</div>
  </dockit-layout>
`;
