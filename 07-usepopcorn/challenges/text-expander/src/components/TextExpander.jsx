import React, { useState } from "react";
import PropTypes from "prop-types";

const TextExpander = ({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Collapse",
  buttonColor = "#333",
  textColor = "#111",
  expanded = false,
  className = "",
  buttonInline = true,
  textSize = "18px",
  children,
}) => {
  const [expand, setExpand] = useState(expanded);
  const shortText = expand
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ");

  const buttonStyle = {
    border: 0,
    color: buttonColor,
    backgroundColor: "transparent",
    cursor: "pointer",
    display: buttonInline ? "inline" : "block",
  };
  const textStyle = {
    color: textColor,
    fontSize: textSize,
  };

  const handleCollapse = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className={className}>
      <span style={textStyle}>
        {shortText} {!expand && "..."}
      </span>
      <button onClick={handleCollapse} style={buttonStyle}>
        {expand ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

TextExpander.propTypes = {
  collapsedNumWords: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  expanded: PropTypes.bool,
  className: PropTypes.string,
  buttonInline: PropTypes.bool,
  textSize: PropTypes.string,
  children: PropTypes.any,
};

export default TextExpander;
