import { LitElement, html, css, customElement, property } from "lit-element";

import axios from "axios";

import './listItem';



@customElement("my-list")
export class MyList extends LitElement {

  @property() api_url = "https://jsonplaceholder.typicode.com/photos";
  @property() name = "";
  @property() data = [];

  static styles = css`
    .header {
      color: green;
      text-align: center;
      font-weight: bold;
    }
  `;

  constructor() {
    super();

    axios.get(this.api_url).then(resp => {
      this.data = resp.data;
      console.log(resp.data)
    });
  }

  render() {
    
    return html`
      <div class="header">Web Components By ${this.name}</div> 
      <h2>Github Api Repository</h2>
      <list-item .data=${this.data}></list-item>
    `;
  }
}
