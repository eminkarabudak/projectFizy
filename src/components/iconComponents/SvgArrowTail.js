import React from 'react'

const SvgArrowTail = (props) => {
  return (
    <svg width={24} height={24} viewBox="0 0 24 24" object-fit={"contain"} {...props}>
      <defs>
        <path
          id="prefix__a"
          d="M10.325 5.327a.998.998 0 01-.066 1.412L5.583 11H21a1 1 0 010 2H5.583l4.676 4.26a1 1 0 11-1.347 1.479l-5.774-5.26a2 2 0 010-2.957L8.912 5.26a1 1 0 011.413.066z"
        />
      </defs>
      <use fill="#FFF" xlinkHref="#prefix__a" fillRule="evenodd" />
    </svg>

  )
}

export default SvgArrowTail
