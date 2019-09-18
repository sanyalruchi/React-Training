import React, {Component} from 'react';
import Sidebar from 'react-sidebar';

export default class AppSidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            sidebarOpen: true
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({sidebarOpen: open})
    }

    render() {
        return (
            <Sidebar
                Sidebar = {<b>Sidebar content</b>}
                open = {this.state.sidebarOpen}
                onSetOpen = {this.onSetSidebarOpen}
                docked =  "false"
                styles={{ sidebar: { background: "skyblue", width: "20%" } }}>            
            </Sidebar>
        )
    }
}