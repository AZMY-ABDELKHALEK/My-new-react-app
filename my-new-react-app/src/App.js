import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList'; 
import Filter from './components/Filter';       
import AddMovieForm from './components/AddMovieForm';
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";






const App = () => {
  const initialMovies = [
    {
      title: 'Birds Of Prey (2020)',
      id : 1,
      description: 'Join Harley Quinn and her gang of antiheroes as they embark on a wild and chaotic adventure in Gotham City. Birds Of Prey is a rollercoaster of action, humor, and girl power, bringing a fresh twist to the DC Universe.',
      trailerLink: 'https://youtu.be/kGM4uYZzfu0?si=qJjbrIRCDSOfUGPB',
      posterURL: 'https://ew.com/thmb/364AzBfyRIAprhdtFz4w5YqOiq0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/birds-of-prey-album-1-2000-3acb33979c7f4966873ca9e14fd315f4.jpg',
      rating: 4.5,
    },
    {
      title: 'Jumanji (The Next Level)',
      id : 2,
      description: 'The Jumanji adventure continues, and this time, the game takes an unexpected turn. Follow our group of friends as they navigate through new challenges, face dangerous creatures, and discover the true meaning of friendship and teamwork.',
      trailerLink: 'https://youtu.be/F6QaLsw8EWY?si=8lpWvpojJs0t2SO5',
      posterURL: 'https://target.scene7.com/is/image/Target/GUEST_f43f013c-a54e-4b0a-b576-f60d5fc667a3?wid=488&hei=488&fmt=pjpeg',
      rating: 4.2,
    },
    {
      title: 'Fast and Furious (Season 8) ',
      id : 3,
      description: 'Buckle up for another adrenaline-pumping ride with the Fast and Furious crew. In this eighth installment, the stakes are higher, the action is faster, and the family bonds are tested like never before. Get ready for heart-stopping car chases and jaw-dropping stunts.',
      trailerLink: 'https://youtu.be/uisBaTkQAEs?si=rD-IocDPLrv6-aIB',
      posterURL: 'https://play-lh.googleusercontent.com/kupQy2h3z8bV370r_2ctE_Nyz7I0_wvi0gt15xsb-aw5zH-a_6YCCUr_YKOhFl_twzu7',
      rating: 4.8,
    },
    {
      title: 'After (2019)',
      id : 4,
      description: 'After is a romantic drama that explores the complexities of love, heartbreak, and self-discovery. Follow Tessa s journey as she navigates through the challenges of college life, relationships, and the unexpected twists that love brings.',
      trailerLink: 'https://youtu.be/g99KPOpqZ4Q?si=FEsmECxFDhPbSZNV',
      posterURL: 'https://www.haya-mag.com/uploads/uploads/13c1b9b8aedb91d7e0b4487a4c1250b42e49c49a.jpeg',
      rating: 3.9,
    },
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setFilterRating(e.target.value);
  };

  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating === '' || movie.rating >= parseFloat(filterRating))
  );

    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </Router>
    );
  };

export default App;
