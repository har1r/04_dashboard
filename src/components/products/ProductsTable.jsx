import { motion } from 'framer-motion';
import { Search, Eye, Import } from 'lucide-react';
import { useState } from 'react';
import PRODUCT_DATA from './PRODUCT_DATA';
import { div } from 'framer-motion/client';

// const PRODUCT_DATA = [
// 	{ id: 1, name: "Wireless Earbuds", category: "Electronics", price: 59.99, stock: 143, sales: 1200 },
// 	{ id: 2, name: "Leather Wallet", category: "Accessories", price: 39.99, stock: 89, sales: 800 },
// 	{ id: 3, name: "Smart Watch", category: "Electronics", price: 199.99, stock: 56, sales: 650 },
// 	{ id: 4, name: "Yoga Mat", category: "Fitness", price: 29.99, stock: 210, sales: 950 },
// 	{ id: 5, name: "Coffee Maker", category: "Home", price: 79.99, stock: 78, sales: 720 },
// ];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // const filtered = PRODUCT_DATA.filter(
    //     (product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
    // );
    const filtered = PRODUCT_DATA[term] || [];
    setFilteredProducts(filtered);
  };

  //Mengambil Key Terakhir jika term tidak di isi
  const keys = Object.keys(PRODUCT_DATA); // Ambil semua key dari PRODUCT_DATA
  const lastKey = keys[keys.length - 1]; // Dapatkan key terakhir
  const lastProductData = PRODUCT_DATA[lastKey]; // Ambil array berdasarkan key terakhir

  return (
    <motion.div
        className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
    >
        <div className='flex justify-between items-center mb-6'>
            <h2 className='text-xl font-semibold text-gray-100'>Berkas Siap Kirim</h2>
            <div className='relative'>
                <input 
                    type="text" 
                    placeholder='Search no. agenda...'
                    className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    onChange={handleSearch}
					value={searchTerm}
                />
                <Search className='absolute left-3 top-2.5 text-gray-400' size={18}/>
            </div>
        </div>
        <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-700'>
                <thead>
                    <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>No. Agenda :</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>{searchTerm || lastKey}</th>
                    </tr>
                    <tr>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider writing-mode-vertical-rl'>Tanggal :</th>
                        <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider writing-mode-vertical-rl'>20/12/2024</th>
                    </tr>
                    <tr>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
							Tanggal Nopel
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
							Nopel
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
							Nama Pemohon
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
							Luas Tanah
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
							Luas Bangunan
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
							Actions
						</th>
					</tr>
                </thead>
                <tbody className='divide-y divide-gray-700'>
                    {searchTerm !== "" ? filteredProducts.map((data, _) => (
                        <motion.tr
                            key={data.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {data.tanggal}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                                {/* <img
                                    src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
                                    alt='Product img'
                                    className='size-10 rounded-full'
                                /> */}
                                {data.nopel}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {data.nama_pemohon}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {data.luas_tanah}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{data.luas_bangunan}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                <button className='text-indigo-400 hover:text-indigo-300'>
                                    <Eye size={18} />
                                </button>
                            </td>
                        </motion.tr>
                    )): lastProductData.map((data, _) => (
                        <motion.tr
                            key={data.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {data.tanggal}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
                                {/* <img
                                    src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
                                    alt='Product img'
                                    className='size-10 rounded-full'
                                /> */}
                                {data.nopel}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {data.nama_pemohon}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                {data.luas_tanah}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{data.luas_bangunan}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
                                <button className='text-indigo-400 hover:text-indigo-300'>
                                    <Eye size={18} />
                                </button>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    </motion.div>
  );
};

export default ProductsTable;
