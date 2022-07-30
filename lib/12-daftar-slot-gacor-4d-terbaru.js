'use babel';

import 12DaftarSlotGacor4dTerbaruView from './12-daftar-slot-gacor-4d-terbaru-view';
import { CompositeDisposable } from 'atom';

export default {

  12DaftarSlotGacor4dTerbaruView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.12DaftarSlotGacor4dTerbaruView = new 12DaftarSlotGacor4dTerbaruView(state.12DaftarSlotGacor4dTerbaruViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.12DaftarSlotGacor4dTerbaruView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '12-daftar-slot-gacor-4d-terbaru:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.12DaftarSlotGacor4dTerbaruView.destroy();
  },

  serialize() {
    return {
      12DaftarSlotGacor4dTerbaruViewState: this.12DaftarSlotGacor4dTerbaruView.serialize()
    };
  },

  toggle() {
    console.log('12DaftarSlotGacor4dTerbaru was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
