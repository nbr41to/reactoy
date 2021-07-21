import { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';

const SmoothDnd = () => {
  const [items, setItems] = useState([
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
    { id: '4', text: 'Item 4' },
    { id: '5', text: 'Item 5' },
    { id: '6', text: 'Item 6' },
  ]);

  const onDrop = ({ removedIndex, addedIndex }) => {
    /* BUG FIX */
    console.log(items[removedIndex], items[addedIndex]);
    const temp = items[removedIndex];
    items[removedIndex] = items[addedIndex];
    items[addedIndex] = temp;
    setItems((prev) => [...items]);
  };

  return (
    <div>
      <h1>react-smooth-dnd</h1>
      <a
        href='https://github.com/kutlugsahin/react-smooth-dnd'
        target='_blank'
        rel='noopener noreferrer'
      >
        react-smooth-dnd
      </a>
      <br />
      <br />
      <Container className='flex' onDrop={(e) => onDrop(e)}>
        {items.map((item) => {
          console.log(items);
          return (
            <Draggable className='flex' key={item.id}>
              <div className='box'>{item.text}</div>
            </Draggable>
          );
        })}
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </Container>
    </div>
  );
};

export default SmoothDnd;
