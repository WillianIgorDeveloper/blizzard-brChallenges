export const Button = ({ className, bg, children }) => {

   return (
      <div className={className}>
         <button
            className={`
               w-full flex items-center justify-center gap-2 p-3 text-white rounded font-medium text-sm transition-all duration-200 h-11
               ${bg ? "bg-brand-primary hover:bg-brand-hover" : "border border-white hover:bg-white hover:text-black"}
            `}
         >
            {children}
         </button>
      </div>
   )
}