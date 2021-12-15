import React from 'react';

export default class App extends React.Component {
    state = {
        imageURL: "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg"
    }

    change = () => {
        let dogURL = "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
        let catURL = "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";

        // let image = this.state.imageURL === catURL ? dogURL : catURL;
        // this.setState({image: this.state.imageURL === catURL ? dogURL : catURL});
        // return this.setState({imageURL: catURL ? dogURL : catURL});

        let imageURL = this.state.imageURL === catURL ? dogURL : catURL;
        this.setState({imageURL});
    }

    render() {
        const urlImage = this.state.imageURL;

        return (
            <>

                <p>Welcome to 30 Days of React</p>
                <img src={urlImage} alt='image de animal'></img>
                <br></br>
                <button onClick={this.change}>Change</button>
                

            </>
        )
    }
}