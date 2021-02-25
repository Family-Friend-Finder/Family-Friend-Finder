import React from "react"

function MatchList(props) {

    console.log(props);


    return (
        <div className="list-group-item list-group-item-action">
            <div className="row">
                <div className="col-10 col-md-10 col-sm-10">
                    <div>
                        {props.firstName} {props.lastName}
                    </div>
                </div>
                <div className="col-2 col-md-2 col-sm-2">
                    <button className="btn-primary btn-md">View</button>
                    <button className="btn-primary btn-md mr-2" onClick={() => props.deleteFunc(props.id)}>Delete</button>
                </div>
            </div>
            <div className="row">
                <div className="col-2 col-md-2 col-sm-2">
                    <img src={props.imageURL} height="400" width="300" alt="Profile Pic Thumbnail" />
                </div>
                <div className="col-10 col-md-10 col-sm-10">
                    <p>{props.description}</p>
                </div>
            </div>
        </div>

    )
}

export default MatchList;