import CertificatesCard from './CertificatesCard'
import CertificatesCardSkeleton from './CertificatesCardSkeleton'
import { CertificateData } from '../data/CertificateData'
import { useState, useEffect } from 'react'

function Certificates() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCertificates() {
      try {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1500))
      } finally {
        setLoading(false)
      }
    }

    loadCertificates()
  }, [])

  // Loading state
  if (loading) {
    return (
      <div className='w-full flex flex-col gap-y-4 my-6'>
        <div className='mx-auto'>
          <h1 className='font-press text-[#0F766E] dark:text-[#2DD4BF]'>Certificates and Courses</h1>
        </div>
        <div className='w-full max-w-5xl mx-auto px-4'>
          <div className='flex gap-4 overflow-x-auto py-4 px-2 horizontal-scroll'>
            <CertificatesCardSkeleton />
            <CertificatesCardSkeleton />
            <CertificatesCardSkeleton />
            <CertificatesCardSkeleton />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full flex flex-col gap-y-4 my-6'>
      <div className='mx-auto'>
        <h1 className='font-press text-[#0F766E] dark:text-[#2DD4BF]'>Certificates and Courses</h1>
      </div>
      <div className='w-full max-w-5xl mx-auto px-4'>
        <div className='flex gap-4 overflow-x-auto py-4 px-2 horizontal-scroll scroll-smooth'>
          {CertificateData.map((Certificate) => (
            <CertificatesCard
              key={Certificate.id}
              Title={Certificate.Title}
              Image={Certificate.Image}
              description={Certificate.description}
              link={Certificate.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Certificates