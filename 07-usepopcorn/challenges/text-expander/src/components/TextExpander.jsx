import React, { useState } from "react";
import PropTypes from "prop-types";

const TextExpander = ({
  collapsedWordsLimit = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Collapse",
  buttonColor = "#333",
  textColor = "#111",
  isExpandedByDefault = false,
  className = "",
  inlineButton = true,
  textSize = "18px",
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(isExpandedByDefault);
  const truncatedText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedWordsLimit).join(" ") +
      (children.split(" ").length > collapsedWordsLimit ? "..." : "");

  const buttonStyle = {
    border: 0,
    color: buttonColor,
    backgroundColor: "transparent",
    cursor: "pointer",
    display: inlineButton ? "inline" : "block",
  };
  const textStyle = {
    color: textColor,
    fontSize: textSize,
  };

  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  return (
    <div className={className}>
      <span style={textStyle}>{truncatedText}</span>
      <button onClick={toggleExpansion} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
};

TextExpander.propTypes = {
  collapsedWordsLimit: PropTypes.number,
  expandButtonText: PropTypes.string,
  collapseButtonText: PropTypes.string,
  buttonColor: PropTypes.string,
  textColor: PropTypes.string,
  isExpandedByDefault: PropTypes.bool,
  className: PropTypes.string,
  inlineButton: PropTypes.bool,
  textSize: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default TextExpander;
