import React from 'react'
const SvgDefault = (props) => {
  return (
    <svg viewBox="0 0 947 50" {...props}>
      <g fill="none" fillRule="evenodd">
        <path
          fill="#FFF"
          stroke="#8E9FAD"
          d="M939 .5H8c-2.071 0-3.946.84-5.303 2.197A7.473 7.473 0 00.5 8v34c0 2.071.84 3.946 2.197 5.303A7.473 7.473 0 008 49.5h931c2.071 0 3.946-.84 5.303-2.197A7.473 7.473 0 00946.5 42V8c0-2.071-.84-3.946-2.197-5.303A7.473 7.473 0 00939 .5z"
        />
        <text
          fill="#000"
          fontFamily="GreycliffCF"
          fontSize={14}
          fontWeight={400}
          opacity={0.303}
        >
          <tspan x={16} y={30}>
            {"Bir anahtar kelime arat\u0131n"}
          </tspan>
        </text>
        <path
          d="M920.5 17a6.5 6.5 0 015.178 10.43l4.064 4.064a.884.884 0 01-1.165 1.321l-.083-.073-4.065-4.064A6.5 6.5 0 11920.5 17zm0 1.757a4.743 4.743 0 100 9.486 4.743 4.743 0 000-9.486z"
          fill="#000"
        />
      </g>
    </svg>
  )
}

export default SvgDefault
