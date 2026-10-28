import React from 'react';

export default function VersionNavIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M5 3.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 3.25Zm0 4.75A.75.75 0 0 1 5.75 7.25h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8Zm0 4.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75ZM2.5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
    </svg>
  );
}

export function VersionJumpLink({ href, children }) {
  return (
    <a className="version-jump-link" href={href}>
      <span className="version-jump-link__icon" aria-hidden="true">🚀</span>
      {children}
    </a>
  );
}
