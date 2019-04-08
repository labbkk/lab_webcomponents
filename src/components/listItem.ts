import { LitElement, html, customElement, property, css } from "lit-element";
import "@polymer/paper-card/paper-card.js";
import "@polymer/paper-button/paper-button.js";
import '@polymer/iron-image/iron-image.js';



@customElement("list-item")
export class ListItem extends LitElement {
  @property({type: Object}) data: any;

  constructor() {
    super();
  }

  static get styles(){
    return  css `
    .flex {
      display: -webkit-flex; 
      -webkit-flex-wrap: wrap; 
      display: flex;   
      flex-wrap: wrap;
    }
      div {
        padding: 10px;
      }
      .images {
        max-width: 600px;
      }
      iron-image {
        width: 400px;
        height: 400px;
        background-color: lightgray;
      }
      .flex {
        display: flex;
      }
    `;
  }


  render() {
    return html`
      <div>
          <div class="flex">
            <div class="images">
            <h4>${this.data.title}</h4>
              <iron-image sizing="contain" fade preload src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></iron-image>
            </div>
          </div>
      </div>
    `;
  }

}
