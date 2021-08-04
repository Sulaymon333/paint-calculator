import { useState, useContext } from 'react';
import { FormContext } from '../store/contextProvider';

const Form = () => {
    const formCtx = useContext(FormContext);
    const [formData, setFormData] = useState({
        paintName: '',
        pricePerLitre: '',
        sqmPerLitre: '',
        levels: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        formCtx.updateFormData({ ...formData });
    };

    return (
        <div className="bg-red-200 rounded-md overflow-hidden shadow-lg p-5 mb-4 mx-32">
            <h1 className="text-gray-700 text-2xl font-bold mb-3">Paint Information</h1>
            <form className="text-gray-700" onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label className="block mb-1" htmlFor="paint-name">
                        Paint Name:
                    </label>
                    <input
                        required
                        type="text"
                        id="paint-name"
                        name="paintName"
                        onChange={handleChange}
                        placeholder="Paint name"
                        className="input"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="block mb-1" htmlFor="price-per-litre">
                        Price per litre:
                    </label>
                    <input
                        required
                        type="number"
                        id="price-per-litre"
                        name="pricePerLitre"
                        value={formData.pricePerLitre}
                        onChange={handleChange}
                        placeholder="200"
                        min="1"
                        className="input"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="block mb-1" htmlFor="square-per-litre">
                        Number of square meter/litre of paint:
                    </label>
                    <input
                        required
                        type="number"
                        id="square-per-litre"
                        name="sqmPerLitre"
                        value={formData.sqmPerLitre}
                        onChange={handleChange}
                        placeholder="3"
                        min="1"
                        className="input"
                    />
                </div>
                <div className="form-group mb-3">
                    <label className="block mb-1" htmlFor="levels">
                        Number of levels of paint:
                    </label>
                    <input
                        required
                        type="number"
                        id="levels"
                        name="levels"
                        value={formData.levels}
                        onChange={handleChange}
                        placeholder="1-3"
                        min="1"
                        max="3"
                        className="input"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-5 bg-blue-700 text-white rounded-full py-2 px-4 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-700 focus:ring-opacity-70"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Form;
