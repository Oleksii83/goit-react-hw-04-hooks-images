import { useState, useEffect } from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import API from '../services/gallery-api';
import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
};

export default function ImageGallery({ query }) {
  const [pictures, setPictures] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    setStatus(Status.PENDING);

    API.getPhoto(query, 1)
      .then(pictures => {
        if (pictures.total === 0) {
          return toast.error(`No result for "${query}". Try another query`);
        }
        setPictures(pictures.hits);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
      .finally(() => {
        setStatus(Status.RESOLVED);
        setPage(2);
      });
  }, [query]);

  const getNextPagePictures = () => {
    setStatus('pending');

    API.getPhoto(query, page)
      .then(result => {
        if (result.hits.length === 0) {
          toast.warning(`No more pictures for "${query}" query`);
          return;
        }
        setPictures(pictures => [...pictures, ...result.hits]);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      })
      .finally(() => {
        setPage(page + 1);
      });
    setStatus(Status.RESOLVED);
  };

  const toggleModal = url => {
    setIsModalOpen(!isModalOpen);
    setModalUrl(url);
  };

  if (status === Status.IDLE) {
    return null;
  }

  if (status === Status.RESOLVED || status === Status.PENDING) {
    return (
      <>
        <ul className={s.ImageGallery}>
          {pictures &&
            pictures.map(picture => (
              <ImageGalleryItem
                key={picture.id}
                url={picture.webformatURL}
                tags={picture.tags}
                modalUrl={picture.largeImageURL}
                onClick={toggleModal}
              />
            ))}
        </ul>
        {status === Status.PENDING && <Loader />}
        {pictures && <Button onClick={getNextPagePictures} />}
        {isModalOpen && <Modal onClose={toggleModal} url={modalUrl} />}
      </>
    );
  }

  if (status === Status.REJECTED) {
    return <h2>{error.message}</h2>;
  }
}

// class ImageGallery extends Component {
//   state = {
//     pictures: null,
//     error: null,
//     status: 'idle',
//     page: 1,
//     isModalOpen: false,
//     modalUrl: '',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const { query } = this.props;
//     const { page } = this.state;
//     if (prevProps.query !== query) {
//       this.setState({ pictures: null, status: 'pending', page: 1 });

//       API.getPhoto(query, page)
//         .then(pictures => {
//           if (pictures.total === 0) {
//             return toast.error(`No result for ${query}. Try another query`);
//           }
//           this.setState({
//             pictures: pictures.hits,
//           });
//         })
//         .catch(error => this.setState({ error, status: 'rejected' }))
//         .finally(() =>
//           this.setState(prevState => {
//             return { status: 'idle', page: prevState.page + 1 };
//           }),
//         );
//     }
//   }

//   getNextPagePictures = () => {
//     const { page } = this.state;
//     const { query } = this.props;

//     this.setState({ status: 'pending' });

//     API.getPhoto(query, page)
//       .then(pictures => {
//         if (pictures.hits.length === 0) {
//           console.log('lenght 0');
//           toast.warning(`No more pictures for "${query}" query`);
//           return;
//         }
//         this.setState(prevState => {
//           return {
//             pictures: [...prevState.pictures, ...pictures.hits],
//             page: prevState.page + 1,
//           };
//         });
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       })
//       .catch(error => this.setState({ error, status: 'rejected' }))
//       .finally(() => this.setState({ status: 'idle' }));
//   };

//   toggleModal = url => {
//     this.setState(prevState => {
//       return {
//         isModalOpen: !prevState.isModalOpen,
//         modalUrl: url,
//       };
//     });
//   };

//   render() {
//     const { pictures, error, status, isModalOpen, modalUrl } = this.state;

//     if (status === 'idle') {
//       return (
//         <>
//           <ul className={s.ImageGallery}>
//             {pictures &&
//               pictures.map(picture => (
//                 <ImageGalleryItem
//                   key={picture.id}
//                   url={picture.webformatURL}
//                   tags={picture.tags}
//                   modalUrl={picture.largeImageURL}
//                   onClick={this.toggleModal}
//                 />
//               ))}
//           </ul>
//           {pictures && <Button onClick={this.getNextPagePictures} />}
//           {isModalOpen && <Modal onClose={this.toggleModal} url={modalUrl} />}
//         </>
//       );
//     }

//     if (status === 'rejected') {
//       return <h2>{error.message}</h2>;
//     }

//     if (status === 'pending') {
//       return (
//         <>
//           <ul className={s.ImageGallery}>
//             {pictures &&
//               pictures.map(picture => (
//                 <ImageGalleryItem key={picture.id} url={picture.webformatURL} tags={picture.tags} />
//               ))}
//           </ul>
//           <Loader />
//           <Button onClick={this.getNextPagePictures} />
//         </>
//       );
//     }
//   }
// }

// export default ImageGallery;
