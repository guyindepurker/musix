
// import React, { Component } from 'react'

// import './PopUpMenu.scss'

// class PopUpMenu extends Component {

//     constructor(props) {
//         super(props);
//         // create a ref to store the textInput DOM element
//         this.popUpMenu = React.createRef();
//       }

//     getIconClass(idx) {
//         return `fas fa-${this.props.menuItems[idx].iconStr}`
//     }

//     itemClicked(itemFunction) {
//         itemFunction()
//         // this.$emit('closePopup')
//     }

//     componentDidMount() {
//         if (this.props.offsetY) {
//             let elpopUp = this.popUpMenu
//             elpopUp.style.left = '95%'
//             elpopUp.style.top = `${this.offsetY}px`
//         }
//     }
//     render() {
//         return (
//             <section className="popup-menu" ref={this.popUpMenu}>
//                 <div className="menu-item flex align-center">
//                     <span className="menu-item-icon flex align-center justify-center" >
//                     {this.props.menuItems.map(item, idx => <i  className={this.iconClass(idx)} key={item} value={item} onClick={this.itemClicked(menuitem.func)}></i>)}
//                     </span>
//                     <span className="menu-item-txt">{menuitem.txt}</span>
//                 </div>
//             </section >

//         )
//     }
// }

// export default PopUpMenu
