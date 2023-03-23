import React, { useCallback } from 'react'
import { PorgressBarWrapper, PorgressBarContent } from './styledComponents'
import { ProgressBarProps } from './contracts'

const ProgressBar = ({ value }: ProgressBarProps) => {
  const renderProgressText = useCallback(
    (progress: number) => (progress ? <span>{`${progress}%`}</span> : null),
    []
  )

  return (
    <PorgressBarWrapper>
      <PorgressBarContent data-testid="progress-bar-content" progress={value}>
        {renderProgressText(value)}
      </PorgressBarContent>
    </PorgressBarWrapper>
  )
}

export default ProgressBar
