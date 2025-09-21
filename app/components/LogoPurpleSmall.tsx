'use client'

import React from 'react'
import LogoPurple from './LogoPurple'

const LogoPurpleSmall: React.FC = () => {
  return (
    <div style={{ transform: 'scale(0.6)', transformOrigin: 'center' }}>
      <LogoPurple />
    </div>
  )
}

export default LogoPurpleSmall