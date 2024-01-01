import React from "react";
import 'animate.css';
import { useInView } from 'react-intersection-observer';

export default function BlogCard({ product, animation }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div ref={ref} className={`col-sm-12 col-md-4 blog-card ${inView ? `animate__animated ${animation} delay-1s` : ''}`} style={{ marginBottom: "2rem", cursor: "pointer" }}>
      <img
        className="img-blog-card"
        src={product.imageSrc}
        alt={product.title}
        style={{ padding: "0", margin: "0" }}
      />
      <div className="blog-image-text" style={{ marginTop: "1rem" }}>
        <p style={{ color: "#888888", fontSize: "14px", textAlign: "start" }}>
          {product.date}
        </p>
        <p className="title-blog">
          {product.title}
        </p>
      </div>
    </div>
  );
}
