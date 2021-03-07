import React,{createContext,useState} from 'react'
import dslr from '../assets/dslr.jpg'
import headphone from '../assets/headphones.jpg'
import iphone from '../assets/iphone.jpg'
import blueYetti from '../assets/microphone.jpg'
import perfume from '../assets/perfume.jpg'
import ring from '../assets/rings.jpg'
import shoes from '../assets/shoes.jpg'
import watch from '../assets/watch.jpg'


export  const ProductsContext=createContext()
const ProductsContextProvider=(props)=>{
    const [products]=useState([
        {id:1,name:'Dslr',price:300, image:dslr,status:'hot'},
        {id:2,name:'Head Phone',price:100, image:headphone,status:'new'},
        {id:3,name:'Iphone',price:999, image:iphone,status:'hot'},
        {id:4,name:'Blue Yetti',price:200, image:blueYetti,status:'hot'},
        {id:5,name:'Perfume',price:100, image:perfume,status:'new'},
        {id:6,name:'Ring',price:350, image:ring,status:'new'},
        {id:7,name:'Shoes',price:90, image:shoes,status:'hot'},
        {id:8,name:'Watch',price:190, image:watch,status:'new'},
    ])
    return(
          <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
          </ProductsContext.Provider>
    )
}

export default ProductsContextProvider