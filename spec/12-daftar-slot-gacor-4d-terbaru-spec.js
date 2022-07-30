'use babel';

import 12DaftarSlotGacor4dTerbaru from '../lib/12-daftar-slot-gacor-4d-terbaru';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('12DaftarSlotGacor4dTerbaru', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('12-daftar-slot-gacor-4d-terbaru');
  });

  describe('when the 12-daftar-slot-gacor-4d-terbaru:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.12-daftar-slot-gacor-4d-terbaru')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '12-daftar-slot-gacor-4d-terbaru:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.12-daftar-slot-gacor-4d-terbaru')).toExist();

        let 12DaftarSlotGacor4dTerbaruElement = workspaceElement.querySelector('.12-daftar-slot-gacor-4d-terbaru');
        expect(12DaftarSlotGacor4dTerbaruElement).toExist();

        let 12DaftarSlotGacor4dTerbaruPanel = atom.workspace.panelForItem(12DaftarSlotGacor4dTerbaruElement);
        expect(12DaftarSlotGacor4dTerbaruPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '12-daftar-slot-gacor-4d-terbaru:toggle');
        expect(12DaftarSlotGacor4dTerbaruPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.12-daftar-slot-gacor-4d-terbaru')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '12-daftar-slot-gacor-4d-terbaru:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let 12DaftarSlotGacor4dTerbaruElement = workspaceElement.querySelector('.12-daftar-slot-gacor-4d-terbaru');
        expect(12DaftarSlotGacor4dTerbaruElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '12-daftar-slot-gacor-4d-terbaru:toggle');
        expect(12DaftarSlotGacor4dTerbaruElement).not.toBeVisible();
      });
    });
  });
});
