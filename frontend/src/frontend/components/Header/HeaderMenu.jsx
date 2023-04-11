import {
    createStyles,
    Header,
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Menu,
    Text,
    Avatar,
    Indicator,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Extras/Logo';
import { IconSettings, IconMessageCircle, IconPhoto, IconSearch, IconArrowsLeftRight, IconTrash, IconLogout, IconUser, IconMailFast } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            color: '#228be6',
            borderRadius: '4px'
        }),
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

function HeaderMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    console.log(user)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        setUser(user)
    }, [])

    console.log(user)


    const handleLogout = () => {
        localStorage.removeItem('user')
        window.location.reload();
    }

    return (
        <Box>
            <Header height={60} px="xl">
                <Group position="apart" sx={{ height: '100%' }}>
                    <Logo />

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <Link className={classes.link} to='/'>
                            Home
                        </Link>
                        <Link className={classes.link} to='/books'>
                            Books
                        </Link>
                        <Link className={classes.link} to='/blogs'>
                            Blogs
                        </Link>
                        <Link className={classes.link} to='/contact'>
                            Contact
                        </Link>
                    </Group>

                    {
                        user ? (
                            <Group className={classes.hiddenMobile}>
                                <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
                                    <Menu.Target>
                                        <Indicator>
                                            <Avatar src="https://youthwhatsapp.files.wordpress.com/2016/02/attitude-boys-dps-profile-pictures-for-facebook-with-amazing-look1-1.jpg" />
                                        </Indicator>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Label>Manage your account</Menu.Label>
                                        <Menu.Item icon={<IconUser size={14} />}>{user.name}</Menu.Item>
                                        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                                        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>

                                        <Menu.Divider />

                                        <Menu.Label>Danger zone</Menu.Label>
                                        <Menu.Item icon={<IconLogout size={14} />} onClick={handleLogout}>Log Out</Menu.Item>
                                        <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        ) : (
                            <Group className={classes.hiddenMobile}>
                                <Link to={user ? '/' : '/login'}>
                                    <Button variant="default">Log in</Button>
                                </Link>
                                <Link to='/register'>
                                    <Button>Sign up</Button>
                                </Link>
                            </Group>
                        )
                    }

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                className={classes.hiddenDesktop}
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <a href="#" className={classes.link}>
                        Books
                    </a>
                    <a href="#" className={classes.link}>
                        Blogs
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />


                    {
                        user ? (
                            <Group>
                                <Menu shadow="md" width={200} trigger="hover" openDelay={100} closeDelay={400}>
                                    <Menu.Target>
                                        <Group>
                                            <Indicator>
                                                <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                                            </Indicator>
                                        </Group>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Label>Manage your account</Menu.Label>
                                        <Menu.Item icon={<IconUser size={14} />}>{user.name}</Menu.Item>
                                        <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
                                        <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>

                                        <Menu.Divider />

                                        <Menu.Label>Danger zone</Menu.Label>
                                        <Menu.Item icon={<IconLogout size={14} />} onClick={handleLogout}>Log Out</Menu.Item>
                                        <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete my account</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        ) : (
                            <Group>
                                <Link to={user ? '/' : '/login'}>
                                    <Button variant="default">Log in</Button>
                                </Link>
                                <Link to='/register'>
                                    <Button>Sign up</Button>
                                </Link>
                            </Group>
                        )
                    }
                </ScrollArea>
            </Drawer>
        </Box>
    );
}

export default HeaderMenu