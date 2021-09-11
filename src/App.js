import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

export default function App() {
  const [query, setQuery] = useState('');
  // const [loading, SetLoading] = useState(false)

  const onSubmit = query => {
    setQuery({ query });
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} />
      {/* {this.state.loading && <h1> Downloading... </h1>} */}
      <ImageGallery query={query} />

      <ToastContainer autoClose={3000} position="top-left" />
    </div>
  );
}

// class App extends Component {
//   state = {
//     query: '',
//     loading: false,
//   };

//   componentDidMount() {}

//   onSubmit = query => {
//     this.setState({ query });
//     console.log(query);
//   };
//   render() {
//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.onSubmit} />
//         {/* {this.state.loading && <h1> Downloading... </h1>} */}
//         <ImageGallery query={this.state.query} />

//         <ToastContainer autoClose={3000} position="top-left" />
//       </div>
//     );
//   }
// }

// export default App;
