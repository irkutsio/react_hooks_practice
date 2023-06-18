import { useEffect } from 'react';

const { useState, useMemo } = require('react');

function complexCompute(number) {
//   for (let i = 0; i < 1000000000; i++) {}
  for (let i = 0; i < 10; i++) {}
  return number * 2;
}

export const TestUseMemo = () => {
  const [total, setTotal] = useState(10);
  const [colored, setColored] = useState(false);

  const styled = useMemo(() => {
    return { color: colored ? 'red' : 'green' };
  }, [colored]);

  const computed = useMemo(() => {
    console.log('useMemo');
    return complexCompute(total);
  }, [total]);

  useEffect(() => {
    console.log('useEffect styled');
  }, [styled]);

  return (
    <div>
      <div>
        <h5>TEST USEMEMO</h5>
        <p style={styled}>{computed}</p>
      </div>
      <div>
        <button
          onClick={() => {
            setTotal(prev => prev + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setTotal(prev => prev - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setColored(prev => (prev = !prev));
          }}
        >
          Color Change
        </button>
      </div>
    </div>
  );
};
