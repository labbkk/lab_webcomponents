import { LitElement, html, css, customElement, property } from 'lit-element';
import { MyList } from './components/myList';

import './components/styles.scss'

class App extends LitElement {
    render() {
        return html`
            <my-list name="Lit-Element"></my-list>
        `;
      }
}
customElements.define('my-app', App);