const API_URL = `https://fakestoreapi.com/`;

// fetch single product
export const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

//get all products
export const getAllProducts = async (id) => {
  try {
    const response = await fetch(`${API_URL}products`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

// sort the product

export const getSortProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

//methods for categorization

export const getAllCategories = async (id) => {
  try {
    const response = await fetch(`${API_URL}products`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

//specific category
export const getProductByCategory = async (id) => {
  try {
    const response = await fetch(`${API_URL}products`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}


// method of fetch for  a new product

export const addNewProduct = async (product) => {
  try {
      const response = await fetch(`${API_URL}products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
              {
                  title: product.title,
                  price: product.price,
                  description: product.description,
                  category: product.category,
                  image: product.image
              }
          )
      });
      const data = await response.json();
      return data;
  }
  catch (error) {
      console.log(error);
  }
}

// delete product
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products/${id}`, {
      method: DELETE
    });
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

//update products
export const updateProduct = async (product) => {
  try {
      const response = await fetch(`${API_URL}products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
              {
                  title: product.title,
                  price: product.price,
                  description: product.description,
                  category: product.category,
                  image: product.image
              }
          )
      });
      const data = await response.json();
      return data;
  }
  catch (error) {
      console.log(error);
  }
}

