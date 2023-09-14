
    import { useParams, useNavigate } from 'react-router-dom'
    import { useEffect, useState } from 'react'
    import { getProduct } from './api'

    //Not needed just here as a reference
    // ProductDetail.propTypes = {
    //     product:{
    //         id: number,
    //         title: string,
    //         price: number,
    //         description: string,
    //         image: string,
    //         category: string,
    //         rating:{
    //             rate: number,
    //             count: number
    //         }

    // }

    export default function ProductDetail(){

        //Getting the id from the url (e.g. /products/:id
        const { id } = useParams();
        const navigate = useNavigate();

        //Storing the product in state retrieve by getProduct in useEffect
        const [fetchedProduct, setFetchedProduct] = useState({});
        

        async function fetched(){
            //Fetch product by id
            const product = await getProduct(id);
            
            //Store fetched product in state
            setFetchedProduct(product)
        };

        //Function to call on each render or re-render
        useEffect(()=>{

            fetched();
            

        },[])

        

        return(
            <div className="product-card" onClick={()=> navigate("/")}>
                <section className="product-card-content">
                    <h3>fetchedProduct.title</h3>
                    {/* img src? */}
                    <p>fetchedProduct.price</p>
                    <p>fetchedProduct.description</p>
                    <p>fetchedProduct.image</p>
                    <p>fetchedProduct.category</p>
                    <p>fetchedProduct.ratings.rate</p>
                    <p>fetchedProduct.ratings.count</p>
                
                </section>
            </div>
            


        )
    }

