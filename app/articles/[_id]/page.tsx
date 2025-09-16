import React from "react";

const SinglePageItem = async (props: any) => {
  const item = await props;
  const item1 = await props.params;
  const ii = "687caf3399c5741caf6bb2b5";
  const i = await fetch(
    `http://localhost:5000/api/admin/?_id=687caf3399c5741caf6bb2b5&type=product`
  );
  console.log(await i.json());

  return <div>SinglePageItem</div>;
};

export default SinglePageItem;
