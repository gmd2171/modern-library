import React, { useEffect, useState } from 'react'
import { createStyles, Table, Checkbox, ScrollArea, Group, Avatar, Text, rem, Title } from '@mantine/core';
import axios from '../../../axios/axios'

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors.gray[0],
  },

  title: {
    color: theme.colors.brand,
    marginLeft: '4.7rem',
  },
}));

const Orders = () => {
  const [orders, setOrders] = useState([])
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(['1']);

  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );

  const toggleAll = () =>
    setSelection((current) => (current.length === orders.length ? [] : orders.map((item) => item._id)));

  const rows = orders.map((item) => {
    const selected = selection.includes(item._id);
    
    return (
      <tr key={item._id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item._id)}
            onChange={() => toggleRow(item._id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            <Avatar size={26} src='http://projects.websetters.in/digg-seos/digg/wp-content/themes/twentytwenty-child-theme/img/demo-prof.jpg' radius={26} />
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
          </Group>
        </td>
        <td>{item.address}</td>
        <td>{item.contact}</td>
        <td>{item.quantity}</td>
        <td>{item.bookid.bookTitle}</td>
        <td>{(item.bookid.bookPrice * item.quantity).toLocaleString()}</td>
      </tr>
    );
  });

  /*Get the list of all the orders */
  const getOrders = async () => {
    const userObjectString = localStorage.getItem('user')
    const user = JSON.parse(userObjectString)

    try {
      const response = await axios.get(`/admin/orders/getOrders`)
      setOrders(response.data.orders)
    }

    catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getOrders()
  }, [])

  console.log(orders)

  console.log(selection)

  return (
    <ScrollArea mt='2rem'>
      <Title order={3} className={classes.title}>Orders</Title>
      <div style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'column', marginTop: '0.5rem'}}>
        <Table miw='50%' verticalSpacing="sm" maw='90%'>
          <thead>
            <tr>
              <th style={{ width: rem(40) }}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === orders.length}
                  indeterminate={selection.length > 0 && selection.length !== orders.length}
                  transitionDuration={0}
                />
              </th>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Quantity</th>
              <th>Book</th>
              <th>Total Amount (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    </ScrollArea>
  )
}

export default Orders