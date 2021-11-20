import React, { useState, useContext } from 'react';
import { CartContext } from '../components/context/CartContext';

const Add = () => {
    const { addCart } = useContext(CartContext);

    const [form, setForm] = useState({
        title: "",
        image: "",
        description: "",
        price: "",
        category: ""
    })
    const handleChange = (e) => {
        setForm({
            ...form,[e.target.name]:e.target.value 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addCart(form)
    }
    return (
        <>
            <div className="border border-gray-200 flex lg:max-w-lg md:max-w-md shadow-lg sm:ml-6 md:ml-32 sm:pl-2 lg:pl-5 lg:ml-72">
                <form class="w-full max-w-sm mt-6 mb-6" onSubmit={handleSubmit}>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Product Title
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-full-name" 
                        type="text"
                        name="title" 
                        value={form.title}
                        onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Product Image
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-period" 
                        type="text" 
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Product Description
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-full-name" 
                        type="text"
                        name="description" 
                        value={form.description}
                        onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                            Product Price
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-period" 
                        type="number" 
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                            Product Category
                        </label>
                        </div>
                        <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                        id="inline-full-name" 
                        type="text"
                        name="category" 
                        value={form.category}
                        onChange={handleChange}
                        />
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/3"></div>
                        <div class="md:w-2/3">
                        <button class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                        type="submit"
                        >
                            Save Product
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Add;