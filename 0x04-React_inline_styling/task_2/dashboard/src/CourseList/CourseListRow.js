import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow ({isHeader, textFirstCell, textSecondCell }) {
  const rowColor = css(isHeader ? styles.header : styles.normal);
    if (isHeader) {
        return (
          <tr className={rowColor}>
            {textSecondCell === null ? (
              <th className={css(styles.header)} colSpan={2}>{textFirstCell}</th>
            ) : (
              <>
                <th className={css(styles.header)}>{textFirstCell}</th>
                <th className={css(styles.header)}>{textSecondCell}</th>
              </>
            )}
          </tr>
        );
      } else {
        return (
          <tr className={rowColor}>
            <td>{textFirstCell}</td>
            <td>{textSecondCell}</td>
          </tr>
        );
      }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#deb5b545",
  },

  normal: {
    backgroundColor: "#f5f5f5ab",
  },
});

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