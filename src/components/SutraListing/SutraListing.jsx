import React from 'react';
import './SutraListing.css';
import CompactSutra from '../CompactSutra/CompactSutra';
import book from './data';

export default function SutraListing() {
  return (
    book.map(chapter => (
      <div className="chapter-wrapper" key={chapter.number}>
        <div className="chapter">
          <h2 className="higher">Chapter {chapter.number}: {chapter.latin}</h2>
          <h3 className="higher">{chapter.devanagari}</h3>
        </div>
        <div className="list-group list-group-flush">
          {chapter.sutra.map(sutra => (
            <CompactSutra
              key={sutra.number}
              number={sutra.number}
              devanagari={sutra.devanagari}
              latin={sutra.latin}
            />
          ))}
        </div>
      </div>
    ))
  )
}
