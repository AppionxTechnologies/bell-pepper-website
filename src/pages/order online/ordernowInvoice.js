import React from 'react'
import './ordernowInvoice.css'

export default function OrdernowInvoice() {
  return (
    <>
        <div className='invoice-ordernow'>
            <div className='invoice-container'>
                <form>
                    <div className='ordernumber-heading mt-4 px-3 fw-semibold'>
                        <p>Order #1234</p>
                    </div>
                    <p className='px-3'>-Delivery</p>
                </form>
            </div>
        </div>
    </>
  )
}
