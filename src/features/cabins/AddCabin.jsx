import Button from "../../ui/Button.jsx";
import CreateCabinForm from "./CreateCabinForm-v1.jsx";
import { useState } from "react";
import Modal from "../../ui/Modal-v1.jsx";
import CabinTable from "./CabinTable.jsx";

function AddCabin(){
    return <div>
    <Modal>
        <Modal.Open opens={'cabin-form'}>
            <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name={'cabin-form'}>
            <CreateCabinForm/>
        </Modal.Window>
    </Modal>
    </div>
}

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
