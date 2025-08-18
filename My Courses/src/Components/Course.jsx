import React, { Component } from "react";

export default function Course({ course }) {
  const { title, description, duration, instructor, image } = course;
  return (
    <div className="course-container">
      <img src={image} alt={title} className="course-image" />
      <h2 className="course-title">{title}</h2>
      <p className="course-description">{description}</p>
      <div className="course-details">
        <p>Duration: {duration}</p>
        <p>Instructor: {instructor}</p>
      </div>
    </div>
  );
}
