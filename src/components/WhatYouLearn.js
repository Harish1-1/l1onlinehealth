
import React from 'react';
import './WhatYouLearn.css';

function WhatYouLearn() {
  return (
    <section className="what-you-learn">
      <h2>What will you learn In ACCA?</h2>
      <div className="levels">
        <div className="level-item">
          <h3>Knowledge Level</h3>
          <ul>
            <li>Business and Technology (BT)</li>
            <li>Management Accounting (MA)</li>
            <li>Financial Accounting (FA)</li>
          </ul>
        </div>
        <div className="level-item">
          <h3>Skill Level</h3>
          <ul>
            <li>Corporate and Business Law (LW)</li>
            <li>Performance Management (PM)</li>
            <li>Taxation (TX)</li>
            <li>Financial Reporting (FR)</li>
            <li>Audit and Assurance (AA)</li>
            <li>Financial Management (FM)</li>
          </ul>
        </div>
        <div className="level-item">
          <h3>Professional Level</h3>
          <ul>
            <li>SBL – Strategic Business Leader</li>
            <li>SBR – Strategic Business Reporting</li>
            <li>Two out of the following:</li>
            <li>Advanced Financial Management (AFM)</li>
            <li>Advanced Performance Management (APM)</li>
            <li>Advanced Taxation (ATX)</li>
            <li>Advanced Audit and Assurance (AAA)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhatYouLearn;
