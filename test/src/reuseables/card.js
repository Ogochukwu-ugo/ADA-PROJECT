import './card.css';
// import Modal from './Modal';




const Card = ({name, profilePics, description, handleDelete, openDetail, id}) => {
  return (
    <div className="col-lg-3 col-md-4 mb-2">
        <div className="card">
            <div className="close" onClick={()=> handleDelete(id)}>
                X
            </div>
            <div>
                <img className="img-responsive profilePics" 
                src={profilePics} 
                alt='profile pics' />
            </div>
            <div className="descr"> 
                <p className="name"> {name}</p>
                <button className="profileBtn" data-bs-target="#detail" data-bs-toggle="modal" onClick={()=> openDetail(id)} >Click to view profile</button>
               
                <div id='detail' className='modal'>
                  <div className="modal-dialog">
                    <div className="modal-content">
                        
                        <div className="modal-body">
                            <div>
                                <img className="img-responsive profilePics" 
                                src={profilePics} 
                                alt='profile pics' />
                            </div>
                            <div className="descr"> 
                                <p className="name"> {name}</p>
                                <p className="description"> {description}</p>
                            </div>
                        </div>
                  </div>
                  </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Card


