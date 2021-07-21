import { useState } from 'react';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const EmojiMart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('');
  console.log(selected);

  const [pushedEmoji, setPushedEmoji] = useState([]);
  console.log(pushedEmoji);

  const incrementEmoji = (emoji) => {
    setPushedEmoji(
      pushedEmoji.map((item) => {
        if (item.id === emoji.id) {
          item.count++;
        }
        return item;
      })
    );
  };

  const selectEmoji = (emoji) => {
    setSelected(emoji);
    const pushedEmojiIds = pushedEmoji.map((item) => item.id);
    if (!pushedEmojiIds.includes(emoji.id)) {
      setPushedEmoji([
        ...pushedEmoji,
        { id: emoji.id, content: emoji.native, count: 1 },
      ]);
    } else {
      incrementEmoji(emoji);
    }
    setIsOpen(false);
  };

  return (
    <div>
      <h1>emoji-mart</h1>
      <a
        href='https://github.com/missive/emoji-mart'
        target='_blank'
        rel='noopener noreferrer'
      >
        emoji-mart
      </a>
      <br />
      <br />
      {pushedEmoji.map((item) => (
        <button key={item.id} onClick={() => incrementEmoji(item)}>
          {item.content} {item.count}
        </button>
      ))}
      <br />
      <button onClick={() => setIsOpen(true)}>+</button>
      <br />
      {isOpen && <Picker onSelect={(emoji) => selectEmoji(emoji)} />}
    </div>
  );
};

export default EmojiMart;
