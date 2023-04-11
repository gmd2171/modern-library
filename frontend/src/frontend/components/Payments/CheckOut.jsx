import React from 'react'
import { Box, BackgroundImage, Flex, Center, Text, ThemeIcon, Paper, createStyles, rem, Title, TextInput, Group, Button, NumberInput, ActionIcon, Image } from '@mantine/core'
import { IconAddressBook, IconColorSwatch, IconPhone, IconUser } from '@tabler/icons-react'
import { useForm } from '@mantine/form';
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../../../axios/axios'
import { notifications } from '@mantine/notifications';

const useStyles = createStyles((theme) => ({
    card: {
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'transform 150ms ease, box-shadow 100ms ease',
        padding: theme.spacing.xl,
        paddingLeft: `calc(${theme.spacing.xl} * 2)`,

        '&:hover': {
            boxShadow: theme.shadows.md,
            transform: 'scale(1.02)',
        },

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: rem(6),
            backgroundImage: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
        },
    },

    secondCard: {
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 150ms ease, box-shadow 100ms ease',
        padding: theme.spacing.xl,
        paddingLeft: `calc(${theme.spacing.xl} * 2)`,

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: rem(6),
            backgroundImage: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.violet[6]),
        },
    },
}));



const CheckOut = () => {
    const { classes } = useStyles();
    const handlers = useRef();
    const location = useLocation();
    const { book } = location.state

    const registerCheckOutForm = useForm({
        initialValues: {
            fullName: '',
            address: '',
            phoneNo: '',
            quantity: 0,
        },

        validate: {
            fullName: (fullName) => (/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(fullName) ? null : 'Please enter a valid name'),
        },
    })

    const handleCheckOutForm = async (values) => {
        const userObjectString = localStorage.getItem('user')
        const user = JSON.parse(userObjectString)
        const { fullName, address, phoneNo, quantity } = values
        console.log(user)
        console.log(values)
        console.log(book)
        const response = await axios.post('/admin/orders/addOrder', { userid: user._id, name: fullName, address: address, contact: phoneNo, quantity: quantity, bookid: book._id })
        console.log(response.data)
        if (response.data.success) {
            notifications.show({
                title: 'Order Received ✅',
                message: 'Just wait for two days for delivery! 🕰️',
            })
            
        }
        else{
            notifications.show({
                title: 'Order Failed ❌',
                message: 'Try again! 🙏',
            })
        }
    }

    return (
        <div style={{ marginTop: 50 }}>
            <Flex
                sx={{ width: '100%' }}
                justify="center"
                direction="row"
                wrap="wrap">
                <Box mx="auto" sx={{ width: '48%' }}>
                    <Paper withBorder radius="md" className={classes.card} >
                        <Group>
                            <ThemeIcon
                                size="xl"
                                radius="md"
                                variant="gradient"
                                gradient={{ deg: 0, from: 'pink', to: 'orange' }}
                            >
                                <Image src={book.bookImage} />
                            </ThemeIcon>
                            <div>
                                <Text size="xl" weight={500}>
                                    {book.bookTitle}
                                </Text>
                                <Text size="sm" color="red" sx={{ fontSize: 32 }}>
                                    Rs. {book.bookPrice}
                                </Text>
                            </div>
                        </Group>
                    </Paper>
                </Box>
                <Box sx={{ width: '48%' }}>
                    <Title order={3} mb={16} color='red'>Delivery Information</Title>
                    <Paper withBorder radius="md" className={classes.secondCard} >
                        <form onSubmit={registerCheckOutForm.onSubmit((values) => handleCheckOutForm(values))}>
                            <TextInput
                                label="Name"
                                placeholder="Enter your Full Name"
                                radius="sm"
                                icon={<IconUser size={16} />}
                                withAsterisk
                                {...registerCheckOutForm.getInputProps('fullName')}
                            />
                            <TextInput
                                label="Delivery Address"
                                placeholder="Enter your full Address"
                                radius="sm"
                                icon={<IconAddressBook size={16} />}
                                withAsterisk
                                mt='md'
                                {...registerCheckOutForm.getInputProps('address')}
                            />
                            <TextInput
                                label="Contact"
                                placeholder="Enter your full contact"
                                radius="sm"
                                icon={<IconPhone size={16} />}
                                withAsterisk
                                mt='md'
                                {...registerCheckOutForm.getInputProps('phoneNo')}
                            />
                            <Group spacing={5} mt='md' position='center'>
                                <ActionIcon size={42} variant="default" onClick={() => handlers.current.decrement()}>
                                    –
                                </ActionIcon>

                                <NumberInput
                                    hideControls
                                    handlersRef={handlers}
                                    {...registerCheckOutForm.getInputProps('quantity')}
                                    min={0}
                                    step={1}
                                    styles={{ input: { width: rem(54), textAlign: 'center' } }}
                                />

                                <ActionIcon size={42} variant="default" onClick={() => handlers.current.increment()}>
                                    +
                                </ActionIcon>
                            </Group>
                            <Group position="center" mt="lg">
                                <Button type='submit' radius="sm" sx={{ width: '100%' }} size='md'>
                                    Place Order
                                </Button>
                            </Group>
                        </form>
                    </Paper>
                </Box>
            </Flex>
        </div>
    )
}

export default CheckOut