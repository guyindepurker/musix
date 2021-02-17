
import React from 'react'

import './DontMatchResCmp.scss'

const DontMatchResCmp = () => {

    return (
        <div className="dont-match-res-cmp">
            <i className="fas fa-exclamation-circle"></i>
            <p className="err-msg">
                Sorry we cant find results...
            </p>
            <h6 className="flex center-center">Look for something else</h6>
        </div>

    )

}

export default DontMatchResCmp
