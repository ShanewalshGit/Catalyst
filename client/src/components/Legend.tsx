export function Legend() {
  return (
    <div className="legend">
      <div className="lg-title">Key</div>
      <div className="lg-row">
        <svg className="lg-icon" viewBox="0 0 16 16">
          <rect x="2" y="4" width="12" height="8" fill="#1C1916" stroke="#5C5648" strokeWidth="1.5" />
        </svg>
        <span>General access</span>
      </div>
      <div className="lg-row">
        <svg className="lg-icon" viewBox="0 0 16 16">
          <rect x="2" y="4" width="12" height="8" fill="#171410" stroke="#7A5C30" strokeWidth="1.5" />
        </svg>
        <span>Restricted access</span>
      </div>
      <div className="lg-row">
        <svg className="lg-icon" viewBox="0 0 16 16">
          <rect x="2" y="4" width="12" height="8" fill="#0E1E1A" stroke="#2A7060" strokeWidth="1.5" />
        </svg>
        <span>Lithean apparatus</span>
      </div>
      <div className="lg-row">
        <svg className="lg-icon" viewBox="0 0 16 16">
          <polygon points="8,2 3,8 8,14 13,8" fill="#170B1E" stroke="#8B5CC7" strokeWidth="1.5" />
        </svg>
        <span>Overseer</span>
      </div>
      <div className="lg-row">
        <svg className="lg-icon" viewBox="0 0 16 16">
          <polygon points="8,1 14,7 12,14 4,14 2,7" fill="#1A1410" stroke="#B8923E" strokeWidth="1.8" />
        </svg>
        <span>Executors Precipice</span>
      </div>
      <div className="lg-row">
        <svg className="lg-icon" viewBox="0 0 16 16">
          <line x1="1" y1="8" x2="15" y2="8" stroke="#B8503A" strokeWidth="1.5" strokeDasharray="3,2" />
        </svg>
        <span>Patrol route</span>
      </div>
    </div>
  );
}
