import React from "react";

// Sample data - in a real scenario, you would fetch this data from an API or another source
const videoData = [
  {
    src: "https://www.youtube.com/embed/3R2D2RYppw8",
    title: "Jump and live: Kids Dancing Fun at Kangaroo Kids!",
  },
  {
    src: "https://www.youtube.com/embed/bdc2mcUs368",
    title: "Jump and Play with Kangaroo Kids: Fun Exercise Adventures for Children",
  },
  {
    src: "https://www.youtube.com/embed/YNFt8-f93VI",
    title: "Kangaroo Kids Fitness Fun: Jump into Action with Exercise",
  },
  {
    src: "https://www.youtube.com/embed/c9hzdSJxDRY",
    title: "Kangaroo Kids Get Active: Fun Exercise Adventures for Young Explorers",
  },
  {
    src: "https://www.youtube.com/embed/1Im_1oNgTLk",
    title: "Jump and Play with Kangaroo Kids: Fun Exercise Adventures for Youngsters!",
  },
  {
    src: "https://www.youtube.com/embed/v6Nn81B4pHg",
    title: "Kangaroo Kids Having Fun Indoors: Enjoyable Indoor Activities for Children!",
  },
  {
    src: "https://www.youtube.com/embed/3N7nZMDGfYs",
    title: "Nursery Activities (3)",
  },
  {
    src: "https://www.youtube.com/embed/zBA_zIKU7PA",
    title: "Nobo Barsha Celebration at Kangaroo Kids Rashbehari",
  },
  {
    src: "https://www.youtube.com/embed/PeF2D6qLCts",
    title: "Kids Interactive Session at Kangaroo Kids Rashbehari School",
  },
  {
    src: "https://www.youtube.com/embed/1eyHgzGFy4Q",
    title: "Slumber Party at Kangaroo Kids Pre School Rashbehari",
  },
  {
    src: "https://www.youtube.com/embed/4ejrTh0WT18",
    title: "Nature Walk at Kangaroo Kids Rashbehari Preschool",
  },
];

const CurriculumVideos = () => {
  return (
    <>
      {/*======== Curriculum Section ========*/}
      <section className="service-section space">
        <div className="container">
          <p className="text-center fs-4 pb-4" style={{ color: "#624099" }}>
            Our curriculum experts use effective pedagogical approaches to help
            children recognize patterns and make connections to process new
            working memories, aiding their transition into the brain's long-term
            storage areas.
          </p>
          <h2 className="sec-title mb-4 text-center" style={{ color: "#66267b" }}>
            A Day in <span style={{ color: "#FEC20B" }}>Kangaroo Kids</span>
          </h2>
          <div className="row gy-30">
            {videoData.map((video, index) => (
              <div className="col-md-4" key={index}>
                <div className="iframe-box">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.src}
                    title={video.title}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*======== / Curriculum Section ========*/}
    </>
  );
};

export default CurriculumVideos;
