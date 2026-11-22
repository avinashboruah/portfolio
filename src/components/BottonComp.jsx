import { FaGithub } from "react-icons/fa6";
import { useSound } from "../context/SoundContext";

function BottonComp() {
  const { playSFX } = useSound();

  return (
    <div className="text-xs flex justify-center items-center dark:text-white/50 gap-2 m-5 ">
      <span>By <span className="underline text-[#7F7B82] dark:text-[#BFACB5]">Avinash Boruah</span><span className="dark:text-[#E5D0CC]"> ✨ </span>the repo on GitHub</span>
      <a
        href="https://github.com/avinashboruah/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playSFX('open')}
        className="flex items-center gap-1 text-[#7F7B82] dark:text-[#BFACB5] hover:underline"
      >
        <FaGithub size={15} />
      </a>
    </div>
  )
}

export default BottonComp