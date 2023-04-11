import React from 'react'
import BookCard from '../components/Books/BookCard';
import HeaderMenu from '../components/Header/HeaderMenu'
import Register from '../components/Profiling/Register'
import Login from './../components/Profiling/Login';
import CardsCarousel from '../components/Books/CardCarousel';
import CheckOut from './../components/Payments/CheckOut';
import Hero from '../components/Hero/Hero';
import Footer from '../components/Footer/Footer';
import { Blockquote, Group } from '@mantine/core';
import Features from '../components/Features/Features';
import { NewsLetter } from '../components/Newsletter/NewsLetter';

const Home = () => {
  return (
    <div>
      <Hero />
      <Group mt='lg'>
        <Blockquote cite="– Charles W. Eliot" color='brand'>
          Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.
        </Blockquote>
      </Group>
      <Features />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home