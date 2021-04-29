import React from 'react';
import '../Header/Header.css';
const Header = (props) => {
    return (

        <div className="container mt-4 text-center">
        <h2 className="">Rick And Morty</h2>
        <div className="row ">
        <h6 className="count">{props.pageCount<10 ? "0"+props.pageCount : props.pageCount}/34</h6>
            <div className="col text-start">
                <button onClick={props.backPage} className="btn btn-outline-dark">Back</button>
            </div>
            <div className="col text-end">
                <button  onClick={props.nextPage} className="btn btn-outline-dark">Next</button>
            </div>
        </div>
        </div>
    )
}
export default Header;