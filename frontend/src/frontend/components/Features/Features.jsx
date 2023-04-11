import { createStyles, Card, Overlay, Button, Text, rem, Group} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(240),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '80%',
    },

    content: {
        ...theme.fn.cover(),
        padding: theme.spacing.xl,
        zIndex: 1,
    },

    action: {
        position: 'absolute',
        bottom: theme.spacing.xl,
        right: theme.spacing.xl,
    },

    title: {
        color: theme.white,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
    },

    description: {
        color: theme.white,
        maxWidth: rem(220),
    },
}));

function Features() {
    const { classes, cx, theme } = useStyles();

    return (
        <Group sx={{marginTop: '1rem', marginBottom: '1rem'}} position='center'>
                    <Card
            radius="md"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80)`}}
            className={cx(classes.card)}
        >
            <Overlay
                gradient={`linear-gradient(105deg, ${theme.primaryColor} 90%, #312f2f 50%, ${theme.colors.gray} 100%)`}
                opacity={1.5}
                zIndex={0}
            />

            <div className={classes.content}>
                <Text size="lg" weight={700} className={classes.title}>
                    Buy & Save
                </Text>

                <Text size="sm" className={classes.description}>
                    Save up to 25% at Fifth Season Books in Islamabad, Karachi, Lahore and Sargodha
                </Text>

                <Button
                    className={classes.action}
                    variant="white"
                    color="dark"
                    component="a"
                    size="xs"
                    href='#'
                >
                    Buy now
                </Button>
            </div>
        </Card>
        </Group>
    );
}

export default Features