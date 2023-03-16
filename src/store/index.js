let baseUrl = "http://localhost:3000/"; 

export const allProducts = () => {
  let status = "loading";
  // async function t() {
  //   let products = await fetch(baseUrl + "products");
  //   products = await products.json();
  //   return products;
  // }

  fetch(baseUrl + "products")
    .then((response) => response.json())
    .then((data) => {
      console.log("THE DATA", data);
      return { products: data, status: "success" };
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return { products: [], status };
};

export const users = async () => {
  let users = await fetch(baseUrl + "users");
  return await users.json();
};
