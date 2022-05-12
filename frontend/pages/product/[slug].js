import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div className='container mx-auto px-4'>Slug is {slug}</div>;
};

export default Slug;
