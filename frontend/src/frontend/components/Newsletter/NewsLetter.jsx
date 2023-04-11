import { createStyles, Text, Title, TextInput, Button, Image, rem, Group } from '@mantine/core';
import peopleimage from '../../../assets/peopleimage.svg';

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: `calc(${theme.spacing.xl} * 2)`,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column-reverse',
            padding: theme.spacing.xl,
        },
    },

    body: {
        paddingRight: `calc(${theme.spacing.xl} * 4)`,

        [theme.fn.smallerThan('sm')]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
    },

    controls: {
        display: 'flex',
        marginTop: theme.spacing.xl,
    },

    inputWrapper: {
        width: '100%',
        flex: '1',
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },

    control: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
}));

export function NewsLetter() {
    const { classes } = useStyles();
    return (
        <Group position='center'>
                    <div className={classes.wrapper}>
            <div className={classes.body}>
                <Text fw={500} fz="lg" mb={5}>
                    Subscribe to our newsletter!
                </Text>
                <Text fz="sm" c="dimmed">
                    You will never miss important product updates. Our
                    newsletter is once a week, every Sunday.
                </Text>

                <div className={classes.controls}>
                    <TextInput
                        placeholder="Your email"
                        classNames={{ input: classes.input, root: classes.inputWrapper }}
                    />
                    <Button className={classes.control}>Subscribe</Button>
                </div>
            </div>
        </div>
        </Group>
    );
}