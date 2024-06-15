import React from "react";

const CategoriesDetails = ({ params }) => {
  console.log(params);

  if (params.features.length == 3) {
    return <div>{params.features[2]}</div>;
  }
  if (params.features.length == 2) {
    return <div>{params.features[1]}</div>;
  }

  return (
    <div className="h-screen">
      <h3 className="text-3xl font-semibold">Categories details page</h3>
    </div>
  );
};

export default CategoriesDetails;
