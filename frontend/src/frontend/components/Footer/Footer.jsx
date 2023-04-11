import { createStyles, Anchor, Group, ActionIcon, rem, Text, Title } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import Logo from '../Extras/Logo';
import FooterLinks from './FooterLinks';

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(24),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${theme.spacing.md} ${theme.spacing.md}`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.lg,
            marginBottom: theme.spacing.sm,
        },
    },
}));

const links =
    [
        { "link": "#", "label": "Home" },
        { "link": "#", "label": "Books" },
        { "link": "#", "label": "Blog" },
    ]

function Footer() {
    const { classes } = useStyles();

    return (
        <div className={classes.footer}>
            <div className={classes.inner}>
                <Group position='apart' spacing={12}>
                    <Logo />
                    <Title order={6}>Digital Library</Title>
                </Group>

                <Group className={classes.links}>
                    {
                        links.map((link) => {
                            return (
                                <FooterLinks key={link.label} link={link} />
                            )
                        })
                    }
                </Group>

                <Group spacing="xs" position="right" noWrap>
                    <ActionIcon size="lg" variant="gradient" radius="xl">
                        <IconBrandTwitter size="1.05rem" stroke={2} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant="gradient" radius="xl">
                        <IconBrandYoutube size="1.05rem" stroke={2} />
                    </ActionIcon>
                    <ActionIcon size="lg" variant='gradient' radius="xl">
                        <IconBrandInstagram size="1.05rem" stroke={2} />
                    </ActionIcon>
                </Group>
            </div>
        </div>
    );
}

export default Footer