import React, { useState } from 'react';
import Modal from 'react-modal';

import './AddMovie.css';

Modal.setAppElement('#root');

const AddMovie = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    let newMovie = {
      id: Math.random(),
      name: name,
      date: date,
      rating: rating,
      image: image,
      type: type,
      description: description,
    };
    addNewMovie(e, newMovie);
    setIsOpen(false);
    setName('');
    setDate('');
    setRating('');
    setImage('');
    setType('');
    setDescription('');
  };

  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(event) => setName(event.target.value)}
            />
            <label>Movie Rate</label>
            <div className="rating-search"></div>
            <input
              type="number"
              name="rating"
              value={rating}
              required
              onChange={(event) => setRating(event.target.value)}
            />
            <label>Movie Release Date</label>
            <input
              type="number"
              name="date"
              value={date}
              required
              onChange={(event) => setDate(event.target.value)}
            />
            <label>Movie Image</label>
            <input
              type="url"
              name="image"
              required
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
            <label>Movie Type</label>
            <input
              type="text"
              name="type"
              value={type}
              required
              onChange={(event) => setType(event.target.value)}
            />
            <label>Movie Summary</label>
            <textarea
              type="text"
              name="description"
              value={description}
              required
              onChange={(event) => setDescription(event.target.value)}
            />
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;
