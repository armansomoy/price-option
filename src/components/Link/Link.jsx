import React from "react";
import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <div>
      <li key={route.id} className="m-10">
        <a href={`route.path`}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
