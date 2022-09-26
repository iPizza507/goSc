import React from 'react'
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonCard = () => {
  return (
    <div className="card-container"> 
    <div className="item"> 
      <div className="item-title">
        <Skeleton width={312} height={390} />
      </div >
      <div className="item-description">
        <h3><Skeleton width={120} height={18} /></h3>
          <div>
            <p><Skeleton width={80} height={15} /></p>
            <div>
              <p><Skeleton width={60} height={15} /></p>
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}
