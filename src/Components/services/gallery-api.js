const url = 'https://pixabay.com/api/';
const key = '22354412-39f12e0c13d349d19862b3301';

const getPhoto = (query, page) => {
  return fetch(
    `${url}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Нет такого имени `));
  });
};

export default { getPhoto };
