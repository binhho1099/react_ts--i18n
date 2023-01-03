import React from 'react';

type AdvancedProps = {
  status: 'success' | 'error' | 'warning';
  children: React.ReactNode;
};

function AdvancedProp({ status, children }: AdvancedProps) {
  return (
    <div>
      status: {status} - {children}
    </div>
  );
}

export default AdvancedProp;
