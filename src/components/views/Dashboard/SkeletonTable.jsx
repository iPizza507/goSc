import React from "react"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

export const SkeletonTable = () => {
  return (
    <div className="card-container">
      <div className="skeleton-data">
        <Skeleton width={1050} height={70} />
        <Skeleton width={1050} height={50} />
        <Skeleton width={1050} height={50} />
        <Skeleton width={1050} height={50} />
        <Skeleton width={1050} height={50} />
        <Skeleton width={1050} height={50} />
        <Skeleton width={1050} height={50} />
      </div>
    </div>
  )
}
