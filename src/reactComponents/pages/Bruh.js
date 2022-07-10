import React from "react";
import { inject, observer } from "mobx-react";  

const Bruh = inject()(
    observer( ({ }) => {
        return (
            <div
                className='wrapper PLA'
            >
                <h1>заглушка</h1>
            </div>
        )
    })
) 

export default Bruh