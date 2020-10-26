import React from 'react'
import './SideBar.css'
import Navitems from '../Navigations/Navbar/NavItems/NavItems'
import Aux from '../../hocs/Aux'
import BackDrop from '../BurderBuilder/BackDrop/BackDrop'


const sideBar = (props) => {

    let attachedClasses = ["SideBar", "Close"];
    if (props.Open) {
        attachedClasses = ["SideBar", "Open"];
    }

    return (
        <Aux>
            <BackDrop show={props.Open} clicked={props.Closed} />
            <div className={attachedClasses.join(' ')}>
                <nav className="SideBar-NavItems">
                    <Navitems />
                </nav>
            </div>
        </Aux>
    )
}

export default sideBar