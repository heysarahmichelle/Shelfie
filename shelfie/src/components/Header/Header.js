import React, { Component } from 'react';

class Header extends Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div>
                <div className="header-component">
                    <section className="logo-component">
                        <img
                            className="shelfie-logo"
                            src="photos/shelfie-photo.png"
                            height="35px"
                        />
                        <p>SHELFIE</p>
                    </section>
                </div>
            </div>
        )
    }
}

  export default Header;