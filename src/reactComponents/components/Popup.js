import { inject, observer } from "mobx-react";
import React from "react";

const Popup = inject( "ButtonsStore" )(
    observer(({ ButtonsStore }) => {
        return (
            <section 
                className="flex flex-column flex-align-center flex-justify-center popup"
                onClick={ButtonsStore.closePopupMenu}
            >
                <div
                    onClick={(event) => event.stopPropagation()}
                >
                    {ButtonsStore.popupMenu.element}
                </div>
                <button
                    className="primary-button popup__button"
                    onClick={ButtonsStore.closePopupMenu}
                >
                    Закрыть
                </button>
            </section>
        )
    })
)

export default Popup

