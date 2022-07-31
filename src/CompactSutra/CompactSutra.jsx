import React from 'react';
import './CompactSutra.css';

const CompactSutra = (props) => (
    <div className="card-container">
        <div className="card compact-sutra">
            <div className="sutra-number">
                1.1
            </div>
            <div className="sanskit-devanagari">
              अथ योगानुशासनम्
            </div>
            <div className="sanskit-latin">
              atha yogānuśāsanam
            </div>
            <div className="core-english-translation">
              <div className="text">
                Now, the teachings of yoga.
              </div>
              <div className="translator">
                Chip Hartranft, Arlington Center
              </div>
            </div>
        </div>
    </div>
)

export default CompactSutra
