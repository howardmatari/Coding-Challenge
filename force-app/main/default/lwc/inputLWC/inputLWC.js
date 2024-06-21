import { LightningElement } from "lwc";

export default class LightningInputFieldInLwc extends LightningElement {
  handleChange(event) {
    const value = event.target.value;
    const valueChangeEvent = new CustomEvent("valuechange", {
      detail: { value }
    });
    // Fire the custom event
    this.dispatchEvent(valueChangeEvent);
  }
}