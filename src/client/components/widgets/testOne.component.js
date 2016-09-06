import React from 'react';

export default function testOne(props) {
  console.log(props);
  return (
    <div onClick={() => props.actions('work', {pids: ['870970-basis:22677780']})}>Dette er den første test</div>
  );
}