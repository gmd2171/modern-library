import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem, Title } from '@mantine/core';
import BookCard from './BookCard';
import { useEffect, useState } from 'react';
import axios from '../../../axios/axios'

function CardCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const [data, setData] = useState([])

    const fetchBooks = async () => {
        try {
            const response = await axios.get('/books/getBooks')
            console.log(response.data.books)
            setData(response.data.books)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1.5rem'}}>
            <div style={{ width: '96.5%' }}>
                <Carousel
                    slideSize="30%"
                    breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
                    slideGap="xl"
                    align="start"
                    slidesToScroll={mobile ? 1 : 2}
                >
                    {
                        data.map((book) => (
                            <Carousel.Slide key={book.bookTitle}>
                                <BookCard book = {book} />
                            </Carousel.Slide>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
}

export default CardCarousel