export function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="text-[17px] py-3.75 px-10 rounded-[30px]
            outline-none border-none
            text-white bg-[#853030]
            cursor-pointer transition duration-300 hover:bg-[#762a2a]
            active:scale-95">
            {children}
        </button>
    );
}