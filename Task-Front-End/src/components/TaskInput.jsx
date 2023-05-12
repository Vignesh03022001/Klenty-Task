const TaskInput = () => {
    return (
        <div className=" sm:w-10/12 lg:w-4/12 mx-auto mt-4">
            <div className="relative rounded-md shadow-sm flex flex-wrap justify-around items-center">
                <input type="text" name="price" id="price" className="block w-5/6 rounded-md border-0 py-2 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="" />

            <button className="flex items-center p-2 border-2 border-gray-300 rounded-md shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
        </div>
        </div>
    )
}
export default TaskInput