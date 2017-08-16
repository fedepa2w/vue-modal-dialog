
function error() {
  throw Error(`[vue-modal-dialog] The modal component (<modal>) must be placed in a template (preferable root).`);
}

class Modal {
  passComponent(modal) {
    this.open = modal.open;
    this.submit = modal.submit;
    this.cancel = modal.cancel;
  };

  // placeholder methods
  open()    { error() };
  submit()  { error() };
  cancel()  { error() };
}

export default ModalService = new Modal();