import React from 'react'
import { Group, Image, Title } from '@mantine/core';
import library from '../../../assets/library.png'

const Logo = () => {
    return (
        <>
            <Group>
                <Image src={library} width='32' />
            </Group>
        </>
    )
}

export default Logo
