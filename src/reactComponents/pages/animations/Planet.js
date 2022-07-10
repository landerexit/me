import React from "react";

function Planet() {
    return ( 
        <section className="flex flex-align-center flex-justify-center planet__wrapper">
            <div className="planet__background-stars-1"/>
            <div className="planet">
                <div className="planet__shadow planet__shadow__planet"/>
                <div className="planet__cloud-group-1">
                    <div className="planet__cloud planet__cloud-group-1-1"/>
                    <div className="planet__cloud planet__cloud-group-1-2"/>
                </div>
                <div className="planet__cloud-group-2">
                    <div className="planet__cloud planet__cloud-group-2-1"/>
                    <div className="planet__cloud planet__cloud-group-2-2"/>
                    <div className="planet__cloud planet__cloud-group-2-3"/>
                </div>
                <div className="planet__cloud-group-3">
                    <div className="planet__cloud planet__cloud-group-3-1"/>
                    <div className="planet__cloud planet__cloud-group-3-2"/>
                    <div className="planet__cloud planet__cloud-group-3-3"/>
                </div>
                <div className="planet__cloud-group-4">
                    <div className="planet__cloud planet__cloud-group-4-1"/>
                    <div className="planet__cloud planet__cloud-group-4-2"/>
                </div>
            </div>

            <div className="planet__orbit__wrapper planet__orbit__wrapper-1">
                <div className="planet__orbit planet__orbit-1">
                    <div className="planet__moon">
                        <div className="planet__shadow planet__shadow__moon"/>
                        <div className="planet__moon__texture__wrapper">
                            <div className="planet__moon__texture planet__moon__texture-1"/>
                            <div className="planet__moon__texture planet__moon__texture-2"/>
                            <div className="planet__moon__texture planet__moon__texture-3"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="planet__orbit__wrapper planet__orbit__wrapper-2">
                <div className="planet__orbit planet__orbit-2">
                    <div className="planet__meteor__path">
                        <div className="planet__meteor"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Planet