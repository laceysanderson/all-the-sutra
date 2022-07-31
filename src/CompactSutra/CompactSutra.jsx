import React from 'react';
import './CompactSutra.css';

const CompactSutra = (props) => (
    <div className="compact-sutra list-group-item container text-center">
      <div className="sutra-core-info row">
        <div className="col-3">
          <h2 className="sutra-number">
              1.1
          </h2>
        </div>
        <div className="col">
          <h2 className="sanskrit-devanagari">
            अथ योगानुशासनम्
          </h2>
          <h2 className="sanskrit-latin">
            atha yogānuśāsanam
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="core-english-translation">
          <div className="text">
            Now, the teachings of yoga.
          </div>
        </div>
      </div>
    </div>
)

export default CompactSutra
