// import { useState, useRef } from "react";
// import Card from "./card";


// const Modal = ({name, profilePics, description, id}) =>{
//     const [isOpen, setIsOpen] = useState(false);
//     const modalRef = useRef(null);

//     const  openModal =() => {
//         setIsOpen(true);
//         const modal = new Modal(modalRef.current);
//         modal.show();
//     };

//     const closeModal = () => {
//         setIsOpen(false);
//         const modal = new Modal(modalRef.current);
//         modal.hide();
//     };

//     return (
//         <>
//         <div className="modal" tabIndex="-1" ref={modalRef}>
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <button type="button" className="btn-close" onClick={closeModal}></button>
//                     </div>
//                     <div className="modal-body">
//                         <div>
//                             <img className="img-responsive profilePics" 
//                             src={profilePics} 
//                             alt='profile pics' />
//                         </div>
//                         <div className="descr"> 
//                             <p className="name"> {name}</p>
//                             <p className="description"> {description}</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <Card openModal={openModal}/>
//         </>
//     )

// };

// export default Modal


