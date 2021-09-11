import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    query: '',
    loading: false,
  };

  componentDidMount() {}

  onSubmit = query => {
    this.setState({ query });
    console.log(query);
  };
  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {/* {this.state.loading && <h1> Downloading... </h1>} */}
        <ImageGallery query={this.state.query} />

        <ToastContainer autoClose={3000} position="top-left" />
      </div>
    );
  }
}

export default App;
