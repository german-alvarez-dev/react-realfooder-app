import React from 'react'

//import Toast from 'react-bootstrap/Toast'

const CustomToast = ({ visible, text, handleToast }) => {
    return (
        <div style={{ padding: '30px', backgroundColor: 'orange', position: 'fixed', right: '10px', bottom: '10px', width: '300px' }} show={visible} onClose={() => handleToast(false)} delay={4000} autohide>
               <span>Real Fooder App</span>

            <span> {text} </span>
                 
        </div>
    )
}

export default CustomToast

// const CustomToast = ({ visible, text, handleToast }) => {
//     return (
//         <Toast style={{ position: 'fixed', right: '10px', bottom: '10px', width: '400px', height:'200px' }} show={visible} onClose={() => handleToast(false)} delay={4000} autohide>
//             <Toast.Header> <h3 className="mr-auto">FitApp_ Encuentra tu rutina</h3> </Toast.Header>
//             <Toast.Body>{text}</Toast.Body>
//         </Toast>
//     )
// }

// export default CustomToast