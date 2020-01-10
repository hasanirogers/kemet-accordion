import { LitElement, html, css } from 'lit-element';

export class KemetAccordion extends LitElement {

  static get properties() {
    return {
      'opened': { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();

    // property defaults
    this.opened = false;
  }

  static styles = css`
    .panel {
      overflow: hidden;
      max-height: 0px;
      transition: all 600ms ease;
    }

    :host {
      display: block;
    }

    :host([opened]) .panel {
      max-height: 99rem;
    }

    [name="trigger"] {
      cursor: pointer
    }
  `;

  render() {
    return html`
      <slot name="trigger" @click="${this.toggle}"></slot>
      <div class="panel">
        <slot name="panel"></slot>
      </div>
    `;
  }

  toggle() {
    this.opened = !this.opened;
  }
}
