import { TextInput, Textarea, SimpleGrid, Group, Title, Button, rem } from '@mantine/core';
import { useForm } from '@mantine/form';

function ContactUs() {
    const contactForm = useForm({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validate: {
            name: (value) =>
                /^([A-Za-zÀ-ÖØ-öø-ÿ]+ )+([A-Za-zÀ-ÖØ-öø-ÿ])+$/i.test(value)
                    ? null : 'Name must contain at least two letters and no numbers',
            email: (value) =>
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i.test(value) ? null : 'Please enter a valid email address',
            subject: (value) =>
                /^(?=.{1,100}$)[A-Za-z]+(?:[-'\s][A-Za-z]+)*$/.test(value)
                    ? null
                    : 'Subject must contain only letters, spaces, hyphens, and apostrophes, and be between 1 and 100 characters long',
            message: (value) =>
                /^(?=.{1,500}$)[^\n]*$/.test(value)
                    ? null
                    : 'Message must be between 1 and 500 characters long and not contain line breaks',
        },
    });

    const handleContactForm = (values) => {
        console.log(values)
    }

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: rem(32) }}>
            <form onSubmit={contactForm.onSubmit((values) => { handleContactForm(values) })} style={{ width: '50%' }}>
                <Title
                    order={3}
                    sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}` })}
                    align="center"
                >
                    Reach out to us!
                </Title>

                <SimpleGrid cols={2} mt="xl" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        name="name"
                        variant="filled"
                        {...contactForm.getInputProps('name')}
                    />
                    <TextInput
                        label="Email"
                        placeholder="Your email"
                        name="email"
                        variant="filled"
                        {...contactForm.getInputProps('email')}
                    />
                </SimpleGrid>

                <TextInput
                    label="Subject"
                    placeholder="Subject"
                    mt="md"
                    name="subject"
                    variant="filled"
                    {...contactForm.getInputProps('subject')}
                />
                <Textarea
                    mt="md"
                    label="Message"
                    placeholder="Your message"
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    {...contactForm.getInputProps('message')}
                />

                <Group position="center" mt="xl">
                    <Button type="submit" size="md">
                        Send message
                    </Button>
                </Group>
            </form>
        </div>
    );
}

export default ContactUs