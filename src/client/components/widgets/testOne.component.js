import React from 'react';

export default function testOne(props) {
  return (
    <div onClick={() => props.actions.request('work', {pids: ['870970-basis:22677780']})}>Dette er den første test</div>
  );
}

testOne.widgetize = {
  name: 'testOne',
  connect: true,
};
