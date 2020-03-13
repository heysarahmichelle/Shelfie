import React, { Component } from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className= "product-component">
                <div className= "red-box">
                    <img className ="product-image"/>
                    <section className= "spots">
                        <p className= "item-spot">Item</p>
                        <p className= "price-spot">Price</p>
                        <section className= "product-component-buttons">
                            <button onClick={()=>this.props.deleteProduct(this.props.product.id)} className= "product-delete">Delete</button>
                            <button className= "product-edit">Edit</button>
                        </section>
                    </section>
                </div>
                <div className= "red-box">
                    <img className ="product-image"/>
                    <section className= "spots">
                        <p className= "item-spot">Item</p>
                        <p className= "price-spot">Price</p>
                        <section className= "product-component-buttons">
                            <button onClick={()=>this.props.deleteProduct(this.props.product.id)} className= "product-delete">Delete</button>
                            <button className= "product-edit">Edit</button>
                        </section>
                    </section>
                </div>
                <div className= "red-box">
                    <img className ="product-image"/>
                    <section className= "spots">
                        <p className= "item-spot">Item</p>
                        <p className= "price-spot">Price</p>
                        <section className= "product-component-buttons">
                            <button onClick={()=>this.props.deleteProduct(this.props.product.id)} className= "product-delete">Delete</button>
                            <button className= "product-edit">Edit</button>
                        </section>
                    </section>
                </div>
                <div className= "red-box">
                    <img className ="product-image"/>
                    <section className= "spots">
                        <p className= "item-spot">Item</p>
                        <p className= "price-spot">Price</p>
                        <section className= "product-component-buttons">
                            <button onClick={()=>this.props.deleteProduct(this.props.product.id)} className= "product-delete">Delete</button>
                            <button className= "product-edit">Edit</button>
                        </section>
                    </section>
                </div>
            </div>
        )
    }
}

  export default Product;