import React from "react";
import "../assiste/blog2.css";

export default function Blog() {
  const blogData = [
    {
      id: 1,
      date: "Activate Overload Protection",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-1-1-740x700.jpg",
    },
    {
      id: 2,
      date: " Activate Safety Shutdown Mode",

      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-3-740x700.jpg",
    },
    {
      id: 3,
      date: "Enable Night Safety Lights",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-5-740x700.jpg",
    },
  ];

  return (
    <div className="blogPage2 container-fluid">
      <div className="row"></div>

      <div className="row titleBlogSection2">
        <h2>How Will You Ensure Your Home's Safety?</h2>
      </div>

      <div className="row " style={{}}>
        {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
        {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
        {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}

        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div
            className="container-fluid"
            style={{ padding: "0", margin: "0" }}
          >
            <div className="row">
              {blogData.map((product) => (
                <div
                  key={product.id}
                  className="col-sm-4 col-md-4 secondimgblog"
                >
                  <div className="blog-card2">
                    <img
                      className="img-blog-card2 image2"
                      src={product.imageSrc}
                      alt={product.title}
                      style={{
                        //   display: 'flex',
                        //   justifyContent: 'start',
                        // borderRadius: "2%",
                        padding: "0",
                        margin: "0",
                      }}
                    />
                    <div className="middle2" style={{width:"100%", height:"100%"}}>
                    <div class="text" style={{width:"100%", height:"100%"}}>
                      <img src={require("../images/download (1).png")} width="100%" height="100%" style={{objectFit:"cover", opacity:"0.3"}}/>
                    </div>

                    </div>

                    <div
                      className="blog-image-text2"
                      style={{ marginTop: "1rem" }}
                    >
                      <p className="textUnderImg2">{product.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
