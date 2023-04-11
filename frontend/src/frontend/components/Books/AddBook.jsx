import {
    TextInput,
    Text,
    Paper,
    Group,
    Button,
    Stack,
    Center,
    FileInput,
    Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconBook, IconUser, IconCategory, IconUsers, IconUpload, IconBook2 } from '@tabler/icons-react';
import { NumberInput, rem } from '@mantine/core';
import { storage } from '../../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import axios from '../../../axios/axios'
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const navigate = useNavigate();
    const registerBookForm = useForm({
        initialValues: {
            bookName: '',
            bookCategory: '',
            bookAuthor: '',
            bookPrice: '',
            bookImage: '',
            bookDescription: '',
        },

        validate: {
            bookName: (bookName) => (/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(bookName) ? null : 'Please enter a valid book title'),
            bookCategory: (bookCategory) => (/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(bookCategory) ? null : 'Please enter a valid book categpry'),
            bookAuthor: (bookAuthor) => (/^[A-Za-z]+(?:\s+[A-Za-z]+)*$/.test(bookAuthor) ? null : 'Please enter a book author'),
            bookPrice: (bookPrice) => (/^[0-9]+(\.[0-9]{1,2})?$/.test(bookPrice) ? null : 'Please enter a valid book price'),
            bookDescription: (bookDescription) => (/^\S.{0,194}\S$/.test(bookDescription) ? null : 'Please enter a valid book description less than 200 words'),
        },
    })

    async function uploadImage(f) {
        const imageupload = f.name
        const storageRef = ref(storage, `${imageupload}`);
        const uploadTask = await uploadBytesResumable(storageRef, f);
        console.log(uploadTask)
        const downloadURL = await getDownloadURL(uploadTask.ref)
        return downloadURL
    }

    const handleRegisterBookForm = async (values) => {
        const { bookName, bookCategory, bookAuthor, bookPrice, bookImage, bookDescription } = values
        const bookImageURL = await uploadImage(bookImage);
        const user = await axios.post('/admin/books/addBook', { bookTitle: bookName, bookCategory: bookCategory, bookAuthor: bookAuthor, bookPrice: bookPrice, imageURL: bookImageURL, bookDescription: bookDescription })
        console.log(user)
        alert('Book is added to the collection')
        navigate('/books')
    }


    return (
        <Center>
            <Paper radius="md" p="xl" withBorder='true' sx={{ width: 400 }} mt={70}>
                <Text size="lg" weight={500} mb={20} align='center'>
                    Add Book to Modern library
                </Text>

                <form onSubmit={registerBookForm.onSubmit((values) => handleRegisterBookForm(values))}>
                    <Stack>
                        <TextInput
                            label="Title"
                            placeholder="Enter book title"
                            radius="md"
                            icon={<IconBook size={16} />}
                            withAsterisk
                            {...registerBookForm.getInputProps('bookName')}
                        />
                        <Textarea
                            autosize
                            placeholder="Enter book description"
                            label="Description"
                            withAsterisk
                            {...registerBookForm.getInputProps('bookDescription')}
                            radius='md'
                            minRows={5}
                        />
                        <TextInput
                            label="Category"
                            placeholder="Enter book category"
                            radius="md"
                            icon={<IconCategory size={16} />}
                            withAsterisk
                            {...registerBookForm.getInputProps('bookCategory')}
                        />
                        <TextInput
                            label="Author"
                            placeholder="Enter book author"
                            radius="md"
                            icon={<IconUser size={16} />}
                            withAsterisk
                            {...registerBookForm.getInputProps('bookAuthor')}
                        />
                        <NumberInput
                            label="Price"
                            parser={(value) => value.replace(/Rs.\s?|(,*)/g, '')}
                            formatter={(value) =>
                                !Number.isNaN(parseFloat(value))
                                    ? `Rs. ${value}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                                    : 'Rs. '
                            }
                            rightSection={<></>}
                            {...registerBookForm.getInputProps('bookPrice')}
                        />
                        <FileInput withAsterisk label="Upload Image" icon={<IconUpload size={rem(14)} />} {...registerBookForm.getInputProps('bookImage')} />
                    </Stack>
                    <Group position="center" mt="lg">
                        <Button type='submit' radius="sm" sx={{ width: '100%' }} size='md'>
                            Add Book
                        </Button>
                    </Group>
                </form>
            </Paper>
        </Center>
    );
}

export default AddBook