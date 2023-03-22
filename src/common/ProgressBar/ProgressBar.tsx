import React, { useState, useEffect, useRef } from 'react'
import { PorgressBarWrapper, PorgressBarContent } from './styledComponents'

interface ProgressBarProps {
  value: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value
}: {
  value: number
}) => {
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(0)

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
        <span>{`${progress}%`}</span>
      </PorgressBarContent>
    </PorgressBarWrapper>
  )
}

export default ProgressBar
