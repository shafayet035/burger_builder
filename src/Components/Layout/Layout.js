import React, { Component } from 'react'
import Aux from '../../hocs/Aux'
import './Layout.css'
import Navbar from '../Navigations/Navbar/Navbar'
import SideBar from '../SideBar/SideBar'


class Layout extends Component {

    state = {
        sideBar: false
    }

    sideBarClosed = () => {
        this.setState({ sideBar: false })
    }

    sideBarOpen = () => {
        this.setState({ sideBar: true })
    }




    render() {
        return (
            <Aux>
                <SideBar
                    Open={this.state.sideBar}
                    Closed={this.sideBarClosed}>
                </SideBar>

                <Navbar Open={this.sideBarOpen}></Navbar>
                <main>{this.props.children}</main>
            </Aux>
        )
    }
}

export default Layout