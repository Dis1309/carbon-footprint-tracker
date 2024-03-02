export default function Category({ isOpen, onClose }) {
    // return (
    //     <div>
    //         <alert message="category" />
    //     </div>
    // );
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-2xl mb-4">Update for today</h2>
                {/* Your form components go here */}
                <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded">
                    Close
                </button>
            </div>
        </div>
    );
}