import Link from "next/link";
import React from "react";

const Products = (props) => {
  return (
    <div className='container mx-auto px-4'>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 md:py-24 mx-auto'>
          <div className='flex flex-wrap w-full md:mb-20'>
            <div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
                Product List
              </h1>
              <div className='h-1 w-20 bg-indigo-500 rounded'></div>
            </div>
          </div>
          <div className='flex flex-wrap -m-4'>
            {props.products.data.map((item) => {
              return (
                <div className='xl:w-1/4 md:w-1/2 p-4' key={item.id}>
                  <div className='bg-gray-100 p-6 rounded-lg'>
                    <img
                      className='h-60 rounded m-auto mb-6'
                      src={item.attributes.image.data.attributes.name}
                      alt='content'
                    />
                    {/* <div className='hidden bg-white bg-black bg-red-800 bg-yellow-800 bg-green-800 bg-purple-800 bg-blue-800' /> */}
                    <h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
                      {item.attributes.category}
                    </h3>
                    <h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
                      {item.attributes.title}
                    </h2>
                    <button
                      className={`border-2 border-gray-300 ml-1 ${
                        item.attributes.color === "black" ||
                        item.attributes.color === "white"
                          ? `bg-${item.attributes.color}`
                          : `bg-${item.attributes.color}-800`
                      } rounded-full w-6 h-6 focus:outline-none`}></button>{" "}
                    <p className='leading-relaxed text-base'>
                      {item.attributes.description}
                    </p>
                    <Link href={`/product/${item.attributes.slug}`}>
                      <button class='my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm'>
                        Buy now
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  let headers = {
    Authorization:
      "Bearer bfb8a3ba866eae3649fefc416af8421a2152dce42bf4aa52eec023e918f8cffdedbde89daa015bf2af9f0d10d9b30d8f42ec3423d4d26b6959dd62c5c82fc305fec6df8f900a0c6fe05b2ab7f6b6f5a6d80e61f37a092eecdf0cd93cd17c61f258818a374011e4314a051c42a765c44d71afae6eca7abc4d806716ff348946be",
  };
  let a = await fetch("http://localhost:1337/api/products?populate=*", {
    headers: headers,
  });
  let products = await a.json();

  console.log(products);

  return {
    props: { products }, // will be passed to the page component as props
  };
}

export default Products;
