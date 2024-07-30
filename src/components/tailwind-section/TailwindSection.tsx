import { ReactElement } from 'react';

export default function TailwindSection(): ReactElement {
    return (
        <>
            <h1>Tailwind</h1>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="bg-white p-8 rounded shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-4">
                        Hello, Tailwind CSS!
                    </h1>
                    <p className="text-gray-700">
                        This is a simple React component styled with Tailwind
                        CSS.
                    </p>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Click me
                    </button>
                </div>
            </div>
        </>
    );
}
