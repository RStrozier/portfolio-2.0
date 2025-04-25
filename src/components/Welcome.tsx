import { motion } from "framer-motion"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md"
import { Link } from "react-router-dom"

const Welcome = () => {
    return (
        <>
            <div className="h-screen">
                <div className="flex justify-center md:mx-2">
                    <div className="black-bubble mt-6 w-3/4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5 }}
                            className="sansation-light text-2xl text-green-200 z-10 relative mt-1 py-3 mx-2 mb-1"
                        >
                            Welcome To Rashida's Digital Timeline Portfolio
                        </motion.div>

                        <Link to="/projects">
                            <button className="open-sans border-1 border-blue-200 text-blue-300 font-semibold text-base mt-3 px-4 py-3 rounded hover:bg-blue-500 hover:text-white hover:cursor-pointer transition duration-300 hover:border-2 hover:border-white">
                                Jump to Projects
                            </button>
                        </Link>

                        <div className="mt-5 p-2 text-white z-10 mx-2 md:mx-5 relative text-base roboto-mono">
                            This digital portfolio allows you to learn more through a custom interactive story. This is a way to tell my coding journey through digital art. Enjoy your experience and thank you for creating space with me to embrace the journey.
                        </div>

                        <div className="sansation-bold p-1 z-10 relative text-sm text-gray-200 mt-3">
                            Begin scrolling to view my perspectives.
                        </div>

                        {/* Slow pulse motion */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: [0.7, 0.9, 0.7],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                        >
                            <div className="text-yellow-300 flex justify-center text-4xl mt-1">
                                <MdOutlineKeyboardDoubleArrowDown />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Welcome