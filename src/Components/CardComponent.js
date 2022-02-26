import React from "react";
import { Badge } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import "./CardComponent.css";

const CardComponent = (props) => {
  console.log(props.data);
  return (
    <div className="container ">
      <div className="row">
        {props.data.map((item) => {
          return (
            <div className="col-10">
              <div class="card cardContainer" onClick={() => {}}>
                <div class="card-horizontal">
                  <div class="img-square-wrapper">
                    <img src={item.img} className="card-img cardImg" />
                  </div>
                  <div class="cardbody">
                    <h4 class="cardTitle">{item.title}</h4>
                    <text className="authorName">
                      {" "}
                      by {item.author} | published in {item.published}
                    </text>
                    <div>
                      <text className="bookType">{item.type}</text>
                    </div>
                    <div>
                      {" "}
                      <Badge bg="danger">{item.deal}</Badge>
                    </div>
                    <div className="price">
                      {" "}
                      <FaRupeeSign className="rupeeIcon"></FaRupeeSign>
                      {item.price}
                      {".00 /-"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardComponent;
