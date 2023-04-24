import axios from 'axios';

axios.defaults.baseURL = 'https://6445047c914c816083c405f6.mockapi.io/';

export const getAllUsers = async (page, per_page, value) => {
  try {
    if (page && per_page) {
      return await axios
        .get(`tweets/?page=${page}&limit=${per_page}&followed=${value}`)
        .then(({ data }) => {
          return data;
        });
    }
  } catch (err) {
    console.log(err);
  }
};

export const updateUserData = async (id, body) => {
  try {
    await axios.put(`tweets/${id}`, { ...body }).then(({ data }) => {
      return data;
    });
  } catch (err) {
    console.log(err);
  }
};
