import {
    TextInput,
    PasswordInput,
    Text,
    Paper,
    Group,
    Button,
    Anchor,
    Stack,
    Center,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconLock, IconMailbox } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import axios from '../../../axios/axios'
import { useNavigate } from 'react-router-dom';
import { notifications } from '@mantine/notifications';

function Login() {
    const navigate = useNavigate();
    const loginForm = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (email) => (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email) ? null : 'Invalid Email'),
            password: (password) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*&#^()])[A-Za-z\d@$!%*?&]{8,}$/.test(password) ? null : 'Invalid Password'),
        },
    })

    const handleloginForm = async (values) => {
        const { email, password } = values
        console.log(email, password)
        try {
            const response = await axios.post('/login', { email: email, password: password })
            const user = response.data
            console.log(user)

            if (user) {
                localStorage.setItem('user', JSON.stringify(user.user))
            }

            if (user.success) {
                notifications.show({
                    title: 'Login Successful ✅',
                    message: 'Happy Reading! 🙌',
                })
            }
            else {
                notifications.show({
                    title: 'Login Failed ❌',
                    message: 'Try again! 🙏',
                })
            }

            if (user.role === 'user') {
                navigate('/')
            }

            if (user.role === 'admin') {
                navigate('/admin')
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <Center>
            <Paper radius="md" p="xl" withBorder='true' sx={{ width: 400 }} mt={70}>
                <Text size="lg" weight={500} mb={20} align='center'>
                    Login to Modern library
                </Text>

                <form onSubmit={loginForm.onSubmit((values) => handleloginForm(values))}>
                    <Stack>
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="example@gmail.com"
                            radius="md"
                            icon={<IconMailbox size={16} />}
                            {...loginForm.getInputProps('email')}
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Enter Password"
                            radius="md"
                            icon={<IconLock size={16} />}
                            {...loginForm.getInputProps('password')}
                        />
                    </Stack>
                    <Group position="apart" mt="lg">
                        <Link to='/register'>
                            <Anchor
                                component="button"
                                type="button"
                                color="dimmed"
                                onClick={() => toggle()}
                                size="xs"
                            >
                                Don't have an account? Register
                            </Anchor></Link>

                        <Button type="submit" radius="xl">
                            Login
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Center>
    );
}

export default Login