export default function About() {

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen text-center px-4">
            <div className="max-w-4xl mx-auto">
                {/* Main title and subtitle */}
                <h1 className="text-5xl font-bold text-main-purple mt-8">We make your operations AUTOMATIC</h1>
                <p className="mt-4 text-xl text-gray-700">Alt Workspaces is all about making your daily tasks a breeze by automating the mundane stuff. We tailor workspaces for everyone - whether you're in Marketing, Sales, or Communications, making life simpler for the whole crew.</p>

                {/* Buttons */}
                <div className="flex justify-center space-x-4 my-8">
                    <button>Free Consultation</button>
                    <button>Our sevices</button>
                </div>
            </div>
        </div>
    );
}