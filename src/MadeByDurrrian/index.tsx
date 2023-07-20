'use client'

import React, { useEffect, useState } from 'react'
import SquareLogo from './atomic/SquareLogo'
import WordOnly from './atomic/WordOnly'

interface IMadeByDurrrian
  extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  /**
   * Whether to show the button or not
   */
  show: boolean
}

const MadeByDurrrian = ({ show, ...props }: IMadeByDurrrian) => {
  useEffect(() => {
    console.log('%cMade with joy by Durrrian \ndurrrian.com', 'color:yellow;background:black;')
  }, [])

  const [hovered, setHovered] = useState(false)

  const handleMouseEnter = () => {
    setHovered(true)
  }

  const handleMouseLeave = () => {
    setHovered(false)
  }

  const buttonStyles: React.CSSProperties = {
    backgroundColor: '#ffffff',
    width: '85px',
    height: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    gap: '2px',
    padding: '2.5px 8px',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    outline: hovered ? '1.5px solid #f5cd3d' : `calc(85px / 2) solid rgba(245, 205, 61, 0.5)`,
    outlineOffset: hovered ? '3px' : `calc(85px / -2)`,
    cursor: 'pointer',
    transition: '0.3s',
  }

  if (show) {
    return (
      <a
        style={buttonStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
        href='https://durrrian.com'
        target='_blank'
        rel='noreferrer'
      >
        <SquareLogo />

        <WordOnly />
      </a>
    )
  } else {
    return <></>
  }
}

export default MadeByDurrrian
