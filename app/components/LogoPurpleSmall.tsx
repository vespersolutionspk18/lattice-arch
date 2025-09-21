'use client'

import React from 'react'
import LogoPurple from './LogoPurple'

interface LogoPurpleSmallProps {
  animate?: boolean
}

const LogoPurpleSmall: React.FC<LogoPurpleSmallProps> = ({ animate = true }) => {
  return (
    <div style={{ transform: 'scale(0.6)', transformOrigin: 'center' }}>
      <LogoPurple animate={animate} />
    </div>
  )
}

export default LogoPurpleSmall