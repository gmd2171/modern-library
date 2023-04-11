import { createStyles, Container, Title, Text, Button, rem } from '@mantine/core';
import { IconArrowDown, IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#11284b',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage:
            'linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #5F3DC4 100%), url(https://cdn.wallpapersafari.com/0/80/KIiEkW.jpg)',
        paddingTop: 20,
        paddingBottom: 20,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('md')]: {
            flexDirection: 'column',
        },
    },

    image: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    content: {
        paddingTop: `calc(${theme.spacing.lg} * 1.5)`,
        paddingBottom: `calc(${theme.spacing.lg} * 1.5)`,
        [theme.fn.smallerThan('md')]: {
            marginRight: 0,
        },
    },

    title: {
        color: theme.white,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        lineHeight: 1.05,
        maxWidth: rem(500),
        fontSize: rem(48),

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            fontSize: rem(34),
            lineHeight: 1.15,
        },
    },

    description: {
        color: theme.white,
        opacity: 0.75,
        maxWidth: rem(500),

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
        },
    },

    control: {
        paddingLeft: rem(50),
        paddingRight: rem(50),
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: rem(22),

        [theme.fn.smallerThan('md')]: {
            width: '100%',
        },
    },
}));

function Hero() {
    const { classes } = useStyles();
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            A{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                digital book store
                            </Text>{' '}
                            Containing variety of Books
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Our store offers a wide range of digital books, including fiction, non-fiction, romance, mystery, and more. Whether you're looking for the latest bestseller or a timeless classic, we've got you covered.
                        </Text>

                        <Link to='/books'>
                            <Button
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                                size="xl"
                                className={classes.control}
                                mt={40}
                            >
                                Start Browsing
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Hero