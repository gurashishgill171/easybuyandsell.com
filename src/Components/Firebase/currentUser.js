import {auth} from './firebase'
import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios'
export const AuthContext=createContext();




// {!currentUser? <Sign/> :<Login />> }

export const CurrentUser = ({children}) => {
    
    const [currentUser, setcurrentUser] = useState(null)

    const [products, setproducts] = useState([ ])
    // {id: 1, title: 'Shoes', description: 'Running shoes', image: [], price: '₹560',seller:'parmeet',email:'parmeet@z.com',phone:'100'},
    // {id: 1, title: 'Shoes', description: 'Running shoes', image: [], price: '₹560',seller:'parmeet',email:'parmeet@z.com',phone:'100'},
    // {id: 1, title: 'Shoes', description: 'Running shoes', image: [], price: '₹560',seller:'parmeet',email:'parmeet@z.com',phone:'100'},
    // {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: [], price: '₹1200',seller:'parmeet',email:'parmeet@z.com',phone:'100'},
    // {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: [], price: '₹1200',seller:'parmeet',email:'parmeet@z.com',phone:'100'},
    // {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: [], price: '₹1200',seller:'parmeet',email:'parmeet@z.com',phone:'100'},
    // {id: 2, title: 'Mattress', description: 'Sleepwell mattress', image: [], price: '₹1200',seller:'parmeet',email:'parmeet@z.com',phone:'100'}

    const [searchProducts, setsearchProducts] = useState([ ])

     useEffect(() => {
         auth.onAuthStateChanged((e)=>setcurrentUser(e));
         
         axios.get("http://localhost:8080/products", { params: { num: 1 } })
         .then((res) => {
             let items = []
             let x
             for (x in res.data) {
                 items.push({
                     "title": res.data[x].name,
                     "description": res.data[x].description,
                     "image": res.data[x].imageUrl,
                     "price": res.data[x].price,
                     "seller": res.data[x].seller,
                     "phone": res.data[x].phone,
                     "email": res.data[x].email
                 })
             }
             setproducts([...products, ...items])
         })
         .catch((e) => { alert(e) })
     }, [])


    return <AuthContext.Provider value={{"currentUser":currentUser,
                                        "products":products,
                                        "setproducts":setproducts,
                                        "searchProducts":searchProducts,
                                        "setsearchProducts":setsearchProducts}}>
         {children}
         </AuthContext.Provider>;
}



