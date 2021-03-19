import React from "react";
import "./style.scss";

interface ICardProps {
  size: string;
  title: string;
}

const Card = ({ size, title }: ICardProps) => {
  return (
    <div className="card">
      <h4>{title}</h4>
      <div className="card__body"></div>
    </div>
  );
};

export default Card;
