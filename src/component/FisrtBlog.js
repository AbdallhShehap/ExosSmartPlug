import React from "react";
import "../assiste/blog1.css";


export default function Blog() {
  const blogData = [
    {
      id: 1,
      date: "Effortless Integration into Any System",
      title: "Exos streamlines your setup without requiring complex configurations or additional components, ensuring a hassle-free installation process.", 
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-1-1-740x700.jpg",
    },
    {

       



      id: 2,
      date: " Secure Control Anytime, Anywhere ",
      title: "Exos products prioritize safety. Easily manage your system securely for a reliable, secure experience.",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-3-740x700.jpg",
    },
    {
       

      id: 3,
      date: " Intuitive Human Detection Integration ",
      title: "Exos emphasizes human detection capabilities, ensuring intuitive control and safety for enhanced home management.",
      imageSrc:
        "https://wgl-demo.net/bili/wp-content/uploads/2022/03/blog-s-5-740x700.jpg",
    }
  ];

  return (
    <div className="blogPage container-fluid">
    <div className="row">
     
    </div>

      <div className="row titleBlogSection"
    
      >
      <h2>

       Smart products for your Entire Place
      </h2>


      </div>

      <div className="row " style={{}}>
  {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2 */}
      {/* col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-9 */}
      {/* col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-1*/}

        <div className="col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>

        <div className="col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-8">
          <div className="container-fluid">
            <div className="row">
              {blogData.map((product) => (
                <div key={product.id} className="col-sm-12 col-md-4" style={{marginBottom:"2rem",cursor: "pointer"
              }}>
                  <div className="blog-card" >
                    <img
                      className="img-blog-card image"
                      src={product.imageSrc}
                      alt={product.title}
                      style={{
                        //   display: 'flex',
                        //   justifyContent: 'start',
                        // borderRadius: "2%",
                        padding:"0",
                        margin:"0"
                      }}
                    />
                        <div className="middle">
  
  </div>
                    <div
                      className="blog-image-text"
                      style={{ marginTop: "1rem" }}
                    >
                      <p
                        style={{
                          color: "#888888",
                          fontSize: "14px",
                          // display: 'flex',
                          // justifyContent: 'start',
                          textAlign: "start",
                        }}
                      >
                        {product.date}-{" "}
                      
                      </p>

                      <p
                      className="title-blog"
                        style={{
                        
                        }}
                      >
                        {product.title}
                      </p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" col-sm-1 col-md-1 col-lg-1 col-xl-1 col-xxl-2"></div>
      </div>

   

    </div>
  );
}