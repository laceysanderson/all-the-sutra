import React from 'react';
import './CompactSutra.css';

export default function CompactSutra(sutra) {
  return (
    <div className="compact-sutra list-group-item container text-center">
      <div className="sutra-core-info row">
        <div className="col-3 left-side">
          <h2 className="sutra-number">
              {sutra.number}
          </h2>
        </div>
        <div className="col right-side">
          <h2 className="sanskrit-devanagari">
            {sutra.devanagari}
          </h2>
          <h2 className="sanskrit-latin">
            {sutra.latin}
          </h2>
        </div>
      </div>
      <div className="core-english-translation row">
        <div className="col-3 left-side info">
          {sutra.author}
        </div>
        <div className="col right-side text">
          {sutra.translation}
        </div>
      </div>
    </div>
  )
}
