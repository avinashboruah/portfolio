function CertificatesCardSkeleton() {
  return (
    <div className='w-[300px] min-h-[250px] shrink-0 border border-[#BFACB5] dark:border-[#BFACB5]/40 p-4 flex flex-col rounded-sm animate-pulse'>

      {/* Certificate title skeleton */}
      <div className='h-4 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-3/4 mb-4'></div>

      {/* Certificate image skeleton */}
      <div className='w-full h-40 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded my-2'></div>

      {/* Description skeleton */}
      <div className='space-y-2 mb-2 h-[80px]'>
        <div className='h-3 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-full'></div>
        <div className='h-3 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-full'></div>
        <div className='h-3 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-5/6'></div>
        <div className='h-3 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded w-4/6'></div>
      </div>

      {/* Button skeleton */}
      <div className='flex justify-between items-center mt-auto gap-x-4'>
        <div className='h-4 w-12 bg-[#7F7B82] dark:bg-[#E5D0CC] rounded'></div>
      </div>
    </div>
  );
}

export default CertificatesCardSkeleton;
