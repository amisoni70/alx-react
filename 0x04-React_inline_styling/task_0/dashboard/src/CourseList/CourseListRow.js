import React from "react";
import PropTypes from "prop-types";

const rowColor = {
  backgroundColor: "#f5f5f5ab",
};

const headerColor = {
  backgroundColor: "#deb5b545",
};

function CourseListRow ( {isHeader, textFirstCell, textSecondCell } ) {
    if (isHeader) {
        return (
          <tr style={rowColor}>
            {textSecondCell === null ? (
              <th style={headerColor} colSpan={2}>{textFirstCell}</th>
            ) : (
              <>
                <th style={headerColor}>{textFirstCell}</th>
                <th style={headerColor}>{textSecondCell}</th>
              </>
            )}
          </tr>
        );
      } else {
        return (
          <tr style={rowColor}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </tr>
        );
      }
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;