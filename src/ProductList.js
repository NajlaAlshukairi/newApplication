import './App.css';
import React, {useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
 
     const [posts, setPosts] = useState([]);
     const [id, setId] = useState(null);
     const [name, setName] = useState("");
     const [price, setPrice] = useState("");
     const [noInStock, setNoInStock] = useState("");
     



     useEffect(() => {
        axios.get("https://challenge.telypay.net/product/all")
           .then(res =>{
            console.log (res)
        setPosts(res.data)
        setName(res[0].name)
        setPrice(res[0].price)
        setNoInStock(res[0].noInStock)
        //setId(res[0].id)
           })
           .catch((err) => {
              console.log(err);
           })
     }, [])
     const deleteHandler = (name=> {
        axios.delete(`https://challenge.telypay.net/product/all/${name}`)
        .then((res) => {
            console.log(res);
            setPosts(oldValues => {
                return oldValues.filter((_, post) => post !==name)
              })
        })
        .catch((err) => {
            console.lod(err);
        })
       
     })
    

     const searchHandler = (id=> {
        axios.filter(`https://challenge.telypay.net/product/all/${id}`)
        .then((res) => {
            console.log(res);
            setPosts(posts => {
                return posts.filter((_, post) => post.id.match(setPosts))
              })
        })
        .catch((err) => {
            console.lod(err);
        })
     })


     const selectData= (id) => {
        axios.get("https://challenge.telypay.net/product/all")
           .then( (item=posts[id-1]) => {
        console.log("function called")
        setName(item.name)
        setPrice(item.price)
        setNoInStock(item.noInStock)
        //setId(item.id)
     })
    }
    

     return (
     <div>
       <h1 className="h1">Product List</h1>
       <input placeholder='enter the id' onChange={searchHandler} />


      <ul>
         <table claccName= "table">
            <tr>
            <th><input placeholder='enter the id' type="text" value={id} onChange={(e) => {setId(e.target.value)}} /></th>
            <th><input placeholder='enter the Name' type="text" value={name} onChange={(e) => {setName(e.target.value)}}/></th>
            <th><input placeholder='enter the Price' type="text" value={price} onChange={(e) => {setPrice(e.target.value)}}/></th>
            <th><input placeholder='enter the noinstock' type="text" value={noInStock} onChange={(e) => {setNoInStock(e.target.value)}}/></th>
            <th><button  >Post</button></th>





            </tr>
         <tr>
             <th>Id</th>
             <th>Name</th>
             <th>Price</th>
             <th>On In Stock</th>
             <th>Operation</th>
         </tr>
         {
            posts.map((post)=>
             <tr >
                 <td>{post.id}</td>
                 <td>{post.name}</td>
                 <td>{post.price}</td>
                 <td>{post.noInStock}</td>
                 <td><button onClick={() => deleteHandler(post.id)} className='delete'> Delete</button> 
                  <button className='edit' onClick={() => selectData(post.name)} >Edit</button></td>
             </tr>
             )
         }
     </table>
      </ul>
     </div>
     )
     
     }
     export default ProductList;