import React, {useState} from 'react';
import './App.sass';
import Modal from "../ui/Modal/index.module";

const App = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <>
      <div className={'App'}>
        <button onClick={() => setModalOpened(true)}>Open modal</button>
        <Modal isOpened={modalOpened} onClose={() => setModalOpened(false)}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci consectetur cupiditate deleniti doloremque ducimus
            exercitationem hic inventore maxime omnis vero? Dolorem ducimus in nostrum,
            quae quisquam repellendus sunt suscipit voluptates.
          </h2>
        </Modal>
      </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque aut, cum exercitationem fuga illum impedit officiis tenetur voluptatum. Aspernatur dolores ipsam ipsum minus, non nulla officia possimus quis voluptate!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque aut, cum exercitationem fuga illum impedit officiis tenetur voluptatum. Aspernatur dolores ipsam ipsum minus, non nulla officia possimus quis voluptate!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque aut, cum exercitationem fuga illum impedit officiis tenetur voluptatum. Aspernatur dolores ipsam ipsum minus, non nulla officia possimus quis voluptate!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque aut, cum exercitationem fuga illum impedit officiis tenetur voluptatum. Aspernatur dolores ipsam ipsum minus, non nulla officia possimus quis voluptate!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque aut, cum exercitationem fuga illum impedit officiis tenetur voluptatum. Aspernatur dolores ipsam ipsum minus, non nulla officia possimus quis voluptate!
    </>
  );
};

export default App;