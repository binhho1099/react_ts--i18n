import React from 'react';

type StyleProp = {
  styles: React.CSSProperties;
};

function StyleProps({ styles }: StyleProp) {
  return <div style={styles}>StyleProps</div>;
}

export default StyleProps;
