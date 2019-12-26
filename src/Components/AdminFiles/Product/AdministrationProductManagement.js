import React from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {Link,withRouter } from 'react-router-dom'
import { FaPencilAlt,FaTimes} from "react-icons/fa"
class AdministrationProductManagement extends React.Component {
  DeleteProduct = (_id) => //Supprimer un synonyme 
  {
     axios.delete(`/Administration/${this.props.adminid}/products/delete/${_id}`)
     .then(() =>{ this.props.Delete(_id)
      this.props.history.push(`/Administration/${this.props.adminid}/products`)
    })
       .catch(err => alert(err));
   }
   EditProduct(_id,name,img, price,colors,Tissue,category,rating) //Editer un synonyme d'un mot
   { 
     axios.put(`/Administration/${this.props.adminid}/products/edit/${_id}`, 
     {
       name: name,
       img: img,
       price: price,
       colors: colors,
       Tissue: Tissue,
       category: category,
       rating: rating
     })
     .then(() => {
       
       this.props.Edit(_id,name, img, price, colors, Tissue, category, rating)
       this.props.history.push(`/Administration/${this.props.adminid}/products`)
       })
     .catch(err => alert(err));
   }
  render() {
    const {product} =this.props
    return (
      <div>
            <div className="flip-box">
                    <div className="flip-box-inner">
                       <div className="flip-box-front">
                        <img className="product_image_decoration" src={product.img} alt={product.name} />
                    </div>
                    <div className="flip-box-back" style={{backgroundColor:  `#${Math.floor(Math.random()*16777215).toString(16)}`}}>
                        <p>{product.name}</p>
                        <p>{product.price} DT</p>
                        <p>{product.category}</p>
                        <Link to={`/Administration/${this.props.adminid}/products/delete/${product._id}`}>  
                         <button style={{backgroundColor: "transparent"}} onClick={() => this.DeleteProduct(product._id)}><FaTimes style={{color: "white"}}/> </button>
                        </Link>
                        <Link to={`/Administration/${this.props.adminid}/products/edit/${product._id}`}>
                        <button style={{backgroundColor: "transparent"}} onClick={()=>this.EditProduct(product._id,
                         prompt('Edit product name ', product.name), 
                         prompt('Editer product img', product.img), 
                         prompt('Editer product price', product.price), 
                         prompt('Edit product colors ', product.colors), 
                         prompt('Edit product tissue ', product.Tissue),
                         prompt('Edit product category ', product.category), 
                         prompt('Edit product rating ', product.rating))}> <FaPencilAlt style={{color: "white"}}/> </button>
                        </Link>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>
{
  return {
    Delete:_id=> //dispatch SUPPRESSION action vers le store
      {
        dispatch({
          type:'DELETE_PRODUCT', 
           _id 
        })
      },
      Edit: (_id,name, img, price, colors, Tissue, category, rating) => //dispatch EDITION action vers le store
      {
        dispatch({
          type:'PRODUCT_EDIT',
          _id,
          name: name,
          img: img,
          price: price,
          colors: colors,
          Tissue: Tissue,
          category: category,
          rating: rating
        })
      }

}
}

export default connect(null,mapDispatchToProps)(withRouter(AdministrationProductManagement))