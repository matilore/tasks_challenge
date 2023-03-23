import React from 'react'

const GroupActionIcon = ({
  style,
  selected
}: {
  style?: { marginLeft: string }
  selected: boolean
}) => (
  <svg
    width="14"
    height="8"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style || undefined}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={
        selected
          ? 'M7.00005 1.39129L13.3333 7.99989L14 7.30425L7.00005 0L0 7.30436L0.666662 8L7.00005 1.39129Z'
          : 'M7.00005 6.60871L13.3333 0.000106694L14 0.69575L7.00005 8L0 0.695643L0.666662 0L7.00005 6.60871Z'
      }
      fill="#999999"
    />
  </svg>
)

export default GroupActionIcon
