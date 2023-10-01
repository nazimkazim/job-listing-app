import React from "react";
import "./card.css";

const Card = ({
  data: { company, logo, postedAt, contract, location, position, new: n, featured, languages, tools, role, level }
}) => {
    const languagesAndTools = [...languages, ...tools, role, level]
  return (
    <div className="card">
      <div className="card-leftSide">
        <img src={logo} alt="" />
        <div className="card-description">
          <div className="card-description-top">
            <div className="card-description-top-firstDiv">{company}</div>
            {n ? (<div className="card-description-top-secondDiv">NEW!</div>) : ''}
            {featured ? (<div className="card-description-top-thirdDiv">FEATURED</div>) : ''}
          </div>
          <h3>{position}</h3>
          <div className="card-description-bottom">
            <p>{postedAt}</p>
            <p className="card-description-bottom-separator">*</p>
            <p>{contract}</p>
            <p className="card-description-bottom-separator">*</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="card-buttons">
      {languagesAndTools.map(item => <button className="card-buttons-button"> {item} </button>)}
      </div>
    </div>
  );
};

export default Card;
