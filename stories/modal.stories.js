import React from 'react';
import { Story, Demo, Description, Code, comment } from './storybook/blocks';
import './modal.scss';

export default { title: 'Modal' };

export const modal = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  const openModal = () => {
    setIsModalVisible(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalVisible(false);
    document.body.style.overflow = '';
  };
  React.useEffect(() => {
    document.addEventListener('keydown', (evt) => handleKeydown(evt));
    return document.removeEventListener('keydown', (evt) => handleKeydown(evt));
  }, []);

  return (
    <Story>
      <Demo>
        <button type="button" className="Manifold-Button" onClick={() => openModal()}>
          Save Game
        </button>
        <div>
          <div
            className="Manifold-Modal"
            role="dialog"
            aria-modal={isModalVisible || undefined}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-desc"
            onClick={() => closeModal()}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="Manifold-Modal__Close"
                onClick={() => closeModal()}
                aria-label="Close"
              >
                ✕
              </button>
              <h1 id="dialog-title" style={{ marginTop: 0 }}>
                Save
              </h1>
              <p id="dialog-desc">
                Are you sure you want to save your game? This will overwrite previous save data.
              </p>
              <menu className="Manifold-Modal__Footer">
                <button type="button" className="Manifold-Button" onClick={() => closeModal()}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="Manifold-Button Manifold-Button--Black"
                  onClick={() => closeModal()}
                >
                  Save
                </button>
              </menu>
            </div>
          </div>
        </div>
      </Demo>
      <Description>
        <h1>Modal</h1>
        <p>
          Modals aren’t bad, just misunderstood ❤️. A modal is ideal for minimal, focused
          interaction that appears precisely when needed. If used sparingly and minimally, modals
          can really enhance the experience.
        </p>
        <h2>Setup</h2>
        <p>
          Though modals can be finicky to implement (especially accessible ones), most of the hassle
          is styling which Mercury takes care of for you. Hooking up functionality to a Mercury
          modal can be accomplished in 4 steps:
        </p>
        <ol>
          <li>
            Place your content inside a single <code>&lt;div&gt;</code>, inside your{' '}
            <code>role="dialog"</code> element.
          </li>
          <li>
            To show the modal, add <code>aria-modal="true"</code> to your <code>role="dialog"</code>{' '}
            element.
          </li>
          <li>
            To hide the modal again, remove <code>aria-modal="true"</code> (note this should happen
            for clicks on the <strong>background overlay</strong> as well as the obvious{' '}
            <strong>close button</strong>).
          </li>
          <li>
            Add <code>overflow: hidden</code> to the <code>&lt;body&gt;</code> element while the
            modal is visible.
          </li>
        </ol>
        <p>
          There’s an additional step that’s technically optional though highly-recommended for
          accessibility support: pressing the <kbd>Esc</kbd> key closes the modal.
        </p>
        <p>
          To see a minimal example of all this working, view the <strong>JSX</strong> tab below.
        </p>
      </Description>
      <Code
        tabs={{
          html: `<!-- modal hidden (default) -->
<div class="Manifold-Modal" role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <div>
    <button type="button" class="Manifold-Modal__Close" aria-label="Close">✕</button>
    <h1 id="dialog-title">Save</h1>
    <p id="dialog-desc">Are you sure you want to save your game? This will overwrite previous save data.</p>
    <menu class="Manifold-Modal__Footer">
      <button type="button">Cancel</button>
      <button type="submit">Save</button>
    </menu>
  </div>
</div>

<!-- modal visible -->
<div aria-modal="true" class="Manifold-Modal" role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <div>
    <button type="button" class="Manifold-Modal__Close" aria-label="Close">✕</button>
    <h1 id="dialog-title">Save</h1>
    <p id="dialog-desc">Are you sure you want to save your game? This will overwrite previous save data.</p>
    <menu class="Manifold-Modal__Footer">
      <button type="button">Cancel</button>
      <button type="submit">Save</button>
    </menu>
  </div>
</div>
`,
          jsx: `const HasModal = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const handleKeydown = (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  };
  const openModal = () => {
    setIsModalVisible(true);
    document.body.style.overflow = 'hidden';
  };
  const closeModal = () => {
    setIsModalVisible(false);
    document.body.style.overflow = '';
  };
  React.useEffect(() => {
    document.addEventListener('keydown', (evt) => handleKeydown(evt));
    return document.removeEventListener('keydown', (evt) => handleKeydown(evt));
  }, []);

  return (
    <>
      {/* open modal button */}
      <button onClick={() => openModal()} type="button">Save Game</button>

      {/* modal */}
      <div onClick={() => closeModal()} role="dialog" className="Manifold-Modal" aria-modal={isModalVisible || undefined} aria-labelledby="dialog-title" aria-describedby="dialog-desc">
        <div onClick={(e) => e.stopPropagation()}>
          <button onClick={() => closeModal()} className="Manifold-Modal__Close" type="button" aria-label="Close">✕</button>
          <h1 id="dialog-title">Save</h1>
          <p id="dialog-desc">Are you sure you want to save your game? This will overwrite previous save data.</p>
          <menu className="Manifold-Modal__Footer">
            <button type="button">Cancel</button>
            <button type="submit">Save</button>
          </menu>
        </div>
      </div>
    </>
  )
};`,
          scss: `${comment.block('Modal')}

.Manifold-Modal {
  @include mercury.Modal;

  ${comment.element}

  &__Close {
    @include mercury.Modal__Close;
  }

  &__Footer {
    @include mercury.Modal__Footer;
  }
}`,
        }}
      />
    </Story>
  );
};
