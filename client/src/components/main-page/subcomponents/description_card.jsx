import React from "react";

const DescriptionCard = ({ title, description, badgeClass, iconClass }) => {
  return (
    <div className="4u" key={title}>
      <section className="first">
        <span className={badgeClass}>
          <span className={iconClass} />
        </span>
        <header>
          <h2>{title}</h2>
        </header>
        <p>{description}</p>
      </section>
    </div>
  );
};

export default DescriptionCard;
