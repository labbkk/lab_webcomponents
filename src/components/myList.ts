import { LitElement, html, css, customElement, property } from "lit-element";

import axios from "axios";

//import './listItem';



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
    .flex {
      display: flex;
      flex-wrap: wrap;
    }
  `;

  constructor() {
    super();

    this.fetchData();

    import('./listItem').then((listItem) => {
      console.log("listItem loaded ", listItem);
    }).catch((reason) => {
      console.log("listItem failed to load", reason);
    });
  }

  async fetchData(){
    return await axios.get(this.api_url).then(resp => {
      this.data = resp.data;
    });
  }



  render() {
    
    return html`
      <div class="header">Web Components By ${this.name}</div> 
      <h2>Github Api Repository</h2>
      <div class="flex">
      </div>
      ${this.data.map((item, index: any) => html`
     
        <list-item .data=${item} .index=${index}></list-item>
      `)}
    `;
  }
}
