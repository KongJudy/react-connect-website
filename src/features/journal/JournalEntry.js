import { useDispatch } from 'react-redux';
import { addEntry } from './journalSlice';
import { useState } from 'react';
import './journalEntry.css';

const JournalEntry = () => {
  const [entry, setEntry] = useState('');
  const dispatch = useDispatch();

  const handleEntryChange = (event) => {
    setEntry(event.target.value);
  };

  const handleSaveEntry = () => {
    dispatch(addEntry(entry));
    console.log('Entry saved: ', entry);
  };

  return (
    <div className='journal-container'>
      <form className='journalForm'>
        <label htmlFor='title'>Title:</label>
        <input type='text' id='title' name='title' />

        <label htmlFor='entry'>Entry:</label>
        <textarea
          id='entry'
          className='journal-textarea'
          name='entry'
          value={entry}
          onChange={handleEntryChange}
        ></textarea>

        <button onClick={handleSaveEntry}>Save</button>
      </form>
    </div>
  );
};

export default JournalEntry;
