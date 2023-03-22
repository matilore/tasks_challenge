import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress(prevProgress => {
        const nextProgress = prevProgress + 1
        if (nextProgress >= value) {
          clearInterval(intervalId)
        }
        return nextProgress
      })
    }, 10)

    return () => {
      clearInterval(intervalId)
    }
  }, [value])

  return (
    <PorgressBarWrapper>
      <PorgressBarContent progress={progress} />
    </PorgressBarWrapper>
  )
}

export default ProgressBar
