import React, { Component } from 'react';

class Form extends Component{
    constructor(){
        super();
        this.state={
            imageURL: '',
            productName: '',
            productPrice: 0
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }
    handleImageURLChange(value){
        this.setState({
            imageURL: value
        })
    }
    handleProductNameChange(value){
        this.setState({
            productName: value
        })
    }
    handleProductPriceChange(value){
        this.setState({
            productPrice: value
        })
    }
    handleAdd = () => {
        this.setState({
            imageURL: "",
            productName: "",
            productPrice: 0
        });
    }
    resetForm(event) {
        this.setState({
            imageURL: "",
            productName: "",
            productPrice: 0
        })
    }

    render(){
        console.log(this.state.imageURL)
        console.log(this.state.imageURL)
        return(
            <div className="form-component">
                <div className= "outer-green-box">
                    <section className= "input-boxes">
                        <input className= "actual-image"></input>
                        <input 
                            onChange={(e) => this.handleImageURLChange(e.target.value)} 
                            className= "image-url-box" 
                            placeholder= "Image URL">
                        </input>
                        <input 
                            onChange={(e) => this.handleProductNameChange(e.target.value)}
                            className= "product-name" 
                            placeholder= "Product Name">
                        </input>
                        <input 
                            onChange={(e) => this.handleProductPriceChange(e.target.value)}
                            className= "price-box" 
                            placeholder= "Price">
                        </input>
                    </section>
                    <section className= "buttons">
                        <button 
                            onClick={this.resetForm}
                            className= "cancel-button">Cancel</button>
                        <button 
                            onClick={this.handleAdd}
                            className= "add-button">Add to Inventory</button>
                    </section>
                </div>
            </div>
        )
    }
}

  export default Form;