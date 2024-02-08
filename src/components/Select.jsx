import React, { useId } from 'react'

const Select = ({
    options,
    label,
    className = "",
    ...props
}, ref) => {
  
  const id = useId()
  
  return (
    <div className="w-full">

      {label && <label htmlFor={id} className=""></label>}
      <select
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
      >
        {options?.map((option, index) => (
          <>
          <option key={option} value={option}>
            {option}
          </option>
          {index !== (options.length-1) && <hr className="py-4" />}
          </>
        ))}
      </select>
      
    </div>
  );
}

export default React.forwardRef(Select)