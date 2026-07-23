
export function Title({ title , className }: { title: string; className?: string }) {
    return(
         <div className={`group absolute -top-5  z-10 rounded-lg bg-white px-3 py-1.5 shadow-sm border-l-4 border-blue-500 dark:bg-gray-800 ${className}`}>
              <span className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
                {title}
              </span>

              {/* Animated bottom border */}
              <span className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-blue-500 transition-transform duration-200 ease-out group-hover:scale-x-100 rounded-md"></span>
         </div>
    )
}