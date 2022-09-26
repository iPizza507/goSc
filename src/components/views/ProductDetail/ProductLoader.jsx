import Skeleton from "react-loading-skeleton"
import { Navbar } from "../Navbar"
import 'react-loading-skeleton/dist/skeleton.css'

export const ProductLoader = () => {
  return (
          <>
            <Navbar />
            <section className='product-section'>
                <div className='product-container'>
      
                    <div className='product-img'>
                        <Skeleton width={500} height={500}/>
                    </div>
      
      
                    <div className='product-info'>
                        <h1 className='title'><Skeleton variant="rect" width={447} height={54} containerClassName="avatar-skeleton" /></h1>
                        <span className='price'><Skeleton width={80} height={23} /></span>
                        <p className='description'><Skeleton width={410} height={12} /></p>
                        <p className=''><Skeleton width={410} height={12} /></p>
                        <p className=''><Skeleton width={350} height={12} /></p>

                        <span className='size'><Skeleton width={120} height={14} /></span>
                        <div className='size-options'>
                            <div className='size-skeleton'><Skeleton width={133} height={71} /></div>
                            <div className='size-skeleton'><Skeleton width={133} height={71} /></div>
                            <div className='size-skeleton'><Skeleton width={133} height={71} /></div>
                        </div>
      
                        <div className='buttons'>
                            <a href="/#">Add to Bag</a>
                            <span>or</span>
                            <a href="/#">Go to Products</a>
                        </div>
                    </div>
      
                </div>
            </section>
          </>
  )
}
