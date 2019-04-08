import { LitElement, html, customElement, property, css } from "lit-element";
import "@polymer/paper-card/paper-card.js";
import "@polymer/paper-button/paper-button.js";



@customElement("list-item")
export class ListItem extends LitElement {
  @property({type: Object}) data: any;

  constructor() {
    super();
  }

  static get styles(){
    return  css `
      div {
        padding: 10px;
      }
    `;
  }


  render() {
    return html`
      <div>
          <div>
          ${this.data.map((item:any, index: any) => html `
            <div class="card">
              <h2>${index+1}. ${item.title}</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div class="fakeimg" style="height:150px;"><img src="${item.thumbnailUrl}"></div>
              <p>Some text..</p>
            </div>
          `)}
          </div>
      </div>
    `;
  }

}
