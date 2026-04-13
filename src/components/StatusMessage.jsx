import React from 'react';
import { PackageX, AlertCircle } from 'lucide-react';

export const Loader = () => (
  <div className="status-container">
    <span className="loader"></span>
    <div className="status-text">Fetching amazing products</div>
    <div className="status-subtext">Please wait a moment...</div>
  </div>
);

export const ErrorMessage = ({ message }) => (
  <div className="status-container" style={{ borderColor: 'var(--danger-color)' }}>
    <AlertCircle className="status-icon" size={48} style={{ color: 'var(--danger-color)', opacity: 1 }} />
    <div className="status-text">Oops! Something went wrong</div>
    <div className="status-subtext">{message}</div>
    <button className="btn-primary" style={{ marginTop: '1.5rem', backgroundColor: 'var(--danger-color)' }} onClick={() => window.location.reload()}>
      Try Again
    </button>
  </div>
);

export const EmptyState = ({ query }) => (
  <div className="status-container">
    <PackageX className="status-icon" size={64} />
    <div className="status-text">No products found</div>
    <div className="status-subtext">
      We couldn't find anything matching "{query}". Try adjusting your search.
    </div>
  </div>
);
