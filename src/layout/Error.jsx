
const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                            <span className="sr-only">Error</span><span className="text-orange-500">404</span>
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Cannot find this page.</p>
                        <a rel="noopener noreferrer" href="/" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Go to homepage</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;