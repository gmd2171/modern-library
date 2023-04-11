import React from 'react'
import { Anchor } from '@mantine/core'

const FooterLinks = ({ link }) => {
    return (
        <Anchor
            color="dimmed"
            key={link.label}
            href={link.link}
            sx={{ lineHeight: 1 }}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    )
}

export default FooterLinks