import React, { useState, useEffect, useRef, useCallback } from 'react'
import { PorgressBarWrapper, PorgressBarContent } from './styledComponents'
import { ProgressBarProps } from './contracts'

const ProgressBar = ({ value }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)

  const renderProgressText = useCallback(
    (progress: number) => (progress ? <span>{`${progress}%`}</span> : null),
    []
  )

  useEffect(() => {
    const animateProgress = () => {
      const nextProgress =
        progressRef.current < value
          ? progressRef.current + 1
          : progressRef.current - 1
      if (nextProgress === value) {
        setProgress(value)
        return
      }
      setProgress(nextProgress)
      progressRef.current = nextProgress
      requestAnimationFrame(animateProgress)
    }

    requestAnimationFrame(animateProgress)
  }, [value])

  return (
    <PorgressBarWrapper>
      <PorgressBarContent progress={progress}>
        {renderProgressText(progress)}
      </PorgressBarContent>
    </PorgressBarWrapper>
  )
}

export default ProgressBar
