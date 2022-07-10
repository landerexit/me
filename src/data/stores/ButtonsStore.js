import React from "react";
import { action, makeObservable, observable } from "mobx";

class ButtonsStore {
    constructor(){
        makeObservable( this, {
            popupMenu: observable.deep,

            setPopupMenu: action.bound,
            closePopupMenu: action.bound,
        } )
        
        this.closePopupMenu()
    }

    popupMenu = {}

    setPopupMenu(newStatus, newElement) {
        this.popupMenu = { status: newStatus, element: newElement }
    }

    closePopupMenu() {
        this.setPopupMenu(false, <></>)
    }
}

export default new ButtonsStore()