import React, { forwardRef, useEffect } from "react";

export const Checkbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = React.useRef();
  const resolveRef = ref || defaultRef;

  useEffect(() => {
    resolveRef.current.indeterminate = indeterminate;
  }, [resolveRef, indeterminate]);

  return (
    <>
      <input type='checkbox' ref={resolveRef} {...rest} />
    </>
  );
});
