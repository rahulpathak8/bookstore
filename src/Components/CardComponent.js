import React from "react";
import { Badge } from "react-bootstrap";

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
                      by {item.author}| {item.published}
                    </text>
                    <div>
                      <text>{item.type}</text>
                    </div>
                    <div>
                      {" "}
                      <Badge bg="danger">{item.deal}</Badge>
                    </div>
                    <div>{item.price}</div>
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
