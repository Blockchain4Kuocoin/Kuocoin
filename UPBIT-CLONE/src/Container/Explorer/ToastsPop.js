import React from 'react';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

const ToastsPop = () => {
  ToastsStore.success("Copied!");

  return (
    <div>
      {/* <button type="button"
              id="popup"
              onClick={ToastsPop}>
          Toast
      </button> */}
      <ToastsContainer position={ToastsContainerPosition.TOP_CENTER}
              store={ToastsStore} 
                      lightBackground/>
    </div>
  );
};

export default ToastsPop;

// class ToastsPop extends Component {
 
//     onClickToastPopup(){
//         ToastsStore.success("Copied!");
//     }
 
//     render(){
//         return(
//             <div>
//                 <header>
//                     <h2>Toast Popup</h2>
//                 </header>
//                 <div>
//                     <button type="button"
//                             id="popup"
//                             onClick={this.onClickToastPopup}>
//                         Toast
//                     </button>
//                     <ToastsContainer position={ToastsContainerPosition.TOP_CENTER}
//                     				 store={ToastsStore} 
//                                      lightBackground/>
//                 </div>
//             </div>
//         );
//     }
 
// }

// export default ToastsPop;
