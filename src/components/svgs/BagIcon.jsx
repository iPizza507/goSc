import * as React from "react"

export const BagIcon = (props) => (
  <svg
    width={30}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 15v-5a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v5"
      // stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="M4.694 14.918c.145-1.741.218-2.611.792-3.14.574-.528 1.448-.528 3.195-.528H21.32c1.746 0 2.62 0 3.194.528.574.528.647 1.399.792 3.14l.764 9.166c.084 1.013.126 1.52-.17 1.843-.298.323-.806.323-1.824.323H5.924c-1.017 0-1.526 0-1.823-.323-.297-.323-.255-.83-.17-1.843l.763-9.166Z"
      // stroke="#000"
      strokeWidth={2}
    />
  </svg>
)

