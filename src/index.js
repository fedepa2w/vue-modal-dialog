import { ModalComponent } from './modal.component';
export { DialogService } from './dialog.service';
export { ModalService } from './modal.service';

export default {
  install(Vue) {
    ModalComponent(Vue);
  }
};