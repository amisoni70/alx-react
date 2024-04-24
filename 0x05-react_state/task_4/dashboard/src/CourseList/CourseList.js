import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

function CourseList({ listCourses }) {
    return (
        <>
        <table className={css(styles.table)} id="CourseList">
        <thead>
            <CourseListRow textFirstCell="Available courses" textSecondCell={null} isHeader={true} />
            <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
        {listCourses.length > 0 ? (
          listCourses.map(({ id, name, credit }) => <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />)
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
        </tbody>
        </table>
        </>
    );
}

const styles = StyleSheet.create({
    table: {
        marginTop: "2em",
        width: "80%",
        border: "1px solid #ddd",
        fontSize: "1.2rem",
        marginBottom: "15em",
        marginLeft: "auto",
        marginRight: "auto",
      },
      
      th: {
        borderBottom: "1px solid #ddd",
        width: "80%"
      },
      
      td: {
        width: "80%",
      },
      
      tr: {
        ":nth-child(2)": {
          textAlign: "left",
        },
      },
});

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
    listCourses: [],
};

export default CourseList;