import { useState } from 'react'
import { FaFileDownload, FaEye } from "react-icons/fa"

const resumes = {
    fullstack: {
        role: "Full Stack Developer",
        label: "Full Stack",
        path: "/assets/full stack resume.pdf",
        filename: "Avinash_Boruah_Full_Stack_Resume.pdf"
    },
    ai: {
        role: "AI Engineer",
        label: "AI Engineer",
        path: "/assets/ai engineer resume.pdf",
        filename: "Avinash_Boruah_AI_Engineer_Resume.pdf"
    }
}

function Greetings() {
    const [selectedResume, setSelectedResume] = useState('fullstack')
    const currentResume = resumes[selectedResume]

    const handleViewResume = (path) => {
        window.open(encodeURI(path), '_blank')
    }

    const handleDownloadResume = (path, filename) => {
        const link = document.createElement('a')
        link.href = encodeURI(path)
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className='flex flex-col mx-auto max-w-4xl py-10 text-center mt-2 space-y-3 text-[#172121] dark:text-[#E5D0CC]'>
            <div className='font-press font-bold text-sm'>
                <h1>Hi, I'm Avinash Boruah</h1>
            </div>
            <div>
                <h1>{`{ ${currentResume.role} }`}</h1>
            </div>
            <div className='font-semibold max-w-2xs mx-auto md:max-w-xl text-sm'>
                <p>A curious software developer ... exploring full-stack development and AI, learning as I build</p>
            </div>

            {/* Resume Selection Toggle */}
            <div className='pt-2 flex flex-col items-center gap-3'>
                <div className='inline-flex p-1 rounded-full bg-[#BFACB5]/20 dark:bg-[#444554]/50 border border-[#BFACB5]/40'>
                    <button
                        type='button'
                        onClick={() => setSelectedResume('fullstack')}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                            selectedResume === 'fullstack'
                                ? 'bg-[#BFACB5] text-[#172121] shadow-sm'
                                : 'text-[#172121]/70 dark:text-[#E5D0CC]/70 hover:text-[#172121] dark:hover:text-[#E5D0CC]'
                        }`}
                    >
                        Full Stack
                    </button>
                    <button
                        type='button'
                        onClick={() => setSelectedResume('ai')}
                        className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                            selectedResume === 'ai'
                                ? 'bg-[#BFACB5] text-[#172121] shadow-sm'
                                : 'text-[#172121]/70 dark:text-[#E5D0CC]/70 hover:text-[#172121] dark:hover:text-[#E5D0CC]'
                        }`}
                    >
                        AI Engineer
                    </button>
                </div>

                {/* Resume Action Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 mx-auto'>
                    <button
                        onClick={() => handleViewResume(currentResume.path)}
                        className='flex items-center justify-center gap-2 px-5 py-2 bg-[#BFACB5] dark:bg-[#BFACB5] text-[#172121] rounded hover:bg-[#7F7B82] dark:hover:bg-[#7F7B82] transition-all duration-300 hover:scale-105 font-semibold text-sm cursor-pointer'
                    >
                        <FaEye size={16} />
                        View Resume ({currentResume.label})
                    </button>

                    <button
                        onClick={() => handleDownloadResume(currentResume.path, currentResume.filename)}
                        className='flex items-center justify-center gap-2 px-5 py-2 border border-[#BFACB5] dark:border-[#BFACB5] text-black dark:text-[#E5D0CC] rounded hover:bg-[#BFACB5]/20 dark:hover:bg-[#444554] transition-all duration-300 hover:scale-105 font-semibold text-sm cursor-pointer'
                    >
                        <FaFileDownload size={16} />
                        Download ({currentResume.label})
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Greetings