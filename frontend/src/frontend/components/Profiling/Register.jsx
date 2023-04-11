import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Checkbox,
    Anchor,
    Stack,
    Center,
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconLock, IconMail, IconMailbox, IconMailFast, IconMan, IconMessage, IconRecordMail, IconUser } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import axios from '../../../axios/axios'
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';

function Register() {
    const navigate = useNavigate()
    const registerForm = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            terms: false,
        },

        validate: {
            name: (name) => (/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(name) ? null : 'Invalid Name'),
            email: (email) => (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) ? null : 'Invalid Email'),
            password: (password) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*&#^()])[A-Za-z\d@$!%*?&]{8,}$/.test(password) ? null : 'Invalid Password'),
            terms: isNotEmpty('You must accept terms of use')
        },
    })

    const handleRegisterForm = async (values) => {
        const { name, email, password, terms } = values;
        try {
            const user = await axios.post('/register', { name: name, email: email, password: password, terms: terms })
            if (user) {
                notifications.show({
                    title: 'Success!',
                    message: 'Your account has been created! 🥳',
                })
            }
            else {
                notifications.show({
                    title: 'Error ❌!',
                    message: 'Failed to create your account. try again! 😞',
                })
            }
            navigate('/login')
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <Center>
            <Paper radius="md" p="xl" withBorder='true' sx={{ width: 400 }} mt={70}>
                <Text size="lg" weight={500} mb={20} align='center'>
                    Register with Modern library
                </Text>

                <form onSubmit={registerForm.onSubmit((values) => handleRegisterForm(values))}>
                    <Stack>
                        <TextInput
                            label="Name"
                            placeholder="Enter name"
                            radius="md"
                            icon={<IconUser size={16} />}
                            withAsterisk
                            {...registerForm.getInputProps('name')}
                        />
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="example@gmail.com"
                            radius="md"
                            icon={<IconMailbox size={16} />}
                            {...registerForm.getInputProps('email')}
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Enter Password"
                            radius="md"
                            icon={<IconLock size={16} />}
                            {...registerForm.getInputProps('password')}
                        />
                        <Checkbox
                            label="I accept terms and conditions"
                            {...registerForm.getInputProps('terms', { type: 'checkbox' })}
                        />
                    </Stack>
                    <Group position="apart" mt="xl">
                        <Link to='/login'>
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={() => toggle()}
                                size="xs"
                            >
                                Already have an account? Login
                            </Anchor></Link>

                        <Button type="submit" radius="xl">
                            Register
                        </Button>

                    </Group>
                </form>
            </Paper>
        </Center>
    );
}

export default Register