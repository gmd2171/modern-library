import React from 'react'
import { createStyles, Paper, Text, Title, Button, rem, Group, Card, Image, Badge, ActionIcon } from '@mantine/core';
import { IconShoppingCart, IconUser } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  
}));

const BookCard = ({ book }) => {
  const { bookImage, bookCategory, bookAuthor, bookTitle, bookPrice, bookDescription} = book
  const { classes } = useStyles();

  console.log(book)
  console.log(bookDescription)

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="http://127.0.0.1:5173/books">
        <Image
          src={bookImage}
          sx={{objectFit: 'cover'}}
          height={300}
          width='100%'
          alt='Book'
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          ta="center"
          fw={700}>
          {bookTitle}
        </Text>
        <Badge color="red" variant="filled">
          Rs. {bookPrice.toLocaleString()}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">{bookDescription}</Text>
      <Group position='apart' mt='md'>
        <Group>
          <ActionIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}><IconUser size="1rem" /></ActionIcon>
          <Text>{bookAuthor}</Text>
        </Group>
        <Badge color="red" variant='light'>
          {bookCategory}
        </Badge>
      </Group>

      <Link to='/checkout' state={{ book }} style={{ textDecoration: 'none' }}>
        <Button variant='gradient' color="blue" fullWidth mt="md" radius="sm" gradient={{ from: 'red', to: 'red', deg: 45 }}>
          Order Now
        </Button>
      </Link>
    </Card>
  )
}

export default BookCard