import React, { useState } from "react";

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const certificates = [
    {
      id: 1,
      title: "HTML5 Certificate",
      imageUrl:
        "https://github.com/user-attachments/assets/152f1552-0f3b-4165-97dd-9053827b9365",
    },
    {
      id: 2,
      title: "CSS3 Certificate",
      imageUrl:
        "https://github.com/user-attachments/assets/730821c9-dd5f-4290-a947-13e691d167d4",
    },
    {
      id: 3,
      title: "Javascript Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/af42c7a9-1ae3-4946-bcba-8cf639acff3d",
    },
    {
      id: 4,
      title: "Bootstrap5 Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/1b3b3cb2-d83f-4720-b1ac-b9f5029bc5f8",
    },
    {
      id: 5,
      title: "MySQL Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/0b7e34cd-5856-41cd-bd31-a8ed4dc264d3",
    },
    {
      id: 6,
      title: "MongoDB Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/8cf15d69-c9c4-42ac-a86a-f5eb41efd361",
    },
    {
      id: 7,
      title: "React JS Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/88f962b0-bb17-4bc0-8f90-f824c70d7281",
    },
    {
      id: 8,
      title: "Node JS Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/c51c5307-9cb0-4758-9020-884b0f5a4252",
    },
    {
      id: 9,
      title: "Full Stack Certification",
      imageUrl:
        "https://github.com/user-attachments/assets/2994f9c1-5620-42c8-b069-4e36b53b812f",
    },
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? certificates.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === certificates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="py-5 px-4">
      <h2 className="text-center text-primary fw-bold mb-4">My Certificates</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {certificates.map((cert, index) => (
          <div className="col" key={cert.id}>
            <div
              className="card h-100 border-0 shadow-lg rounded-4 hover-shadow"
              style={{
                transform: "perspective(1000px) rotateX(5deg) rotateY(5deg)",
                transition: "transform 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "perspective(1000px) rotateX(5deg) rotateY(5deg) scale(1)";
              }}
              onClick={() => openModal(index)}
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="card-img-top rounded-top-4"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{cert.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content shadow-lg border-0 rounded-4">
              <button
                type="button"
                className="btn-close btn-close-black position-absolute top-1 end-0 m-0"
                onClick={closeModal}
                style={{ zIndex: 1050 }}
              ></button>
              <div className="modal-body text-center">
                <button
                  className="btn btn-primary position-absolute start-0 top-50 translate-middle-y rounded-circle"
                  onClick={goToPrevious}
                >
                  &lt;
                </button>
                <img
                  src={certificates[currentImageIndex].imageUrl}
                  alt={certificates[currentImageIndex].title}
                  className="img-fluid rounded shadow-lg"
                />
                <h5 className="mt-3">
                  {certificates[currentImageIndex].title}
                </h5>
                <button
                  className="btn btn-primary position-absolute end-0 top-50 translate-middle-y rounded-circle"
                  onClick={goToNext}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
