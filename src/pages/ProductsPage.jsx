import { BetweenHorizontalStart, ShieldEllipsis, BetweenHorizontalEnd, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import ProductsTable from '../components/products/ProductsTable';

const PRODUCT_ITEMS = [
  {name: "Berkas Masuk", icon: BetweenHorizontalStart, value: '1234', color: '#6366F1'},
  {name: "Berkas Pending", icon: ShieldEllipsis, value: '21', color: '#EF4444'},
  {name: "Berkas Kirim", icon: BetweenHorizontalEnd, value: '1211', color: '#F59E0B'},
  {name: "SPPT Jadi", icon: ShieldCheck, value: '1023', color: '#10B981'},
];

function ProductsPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Mutasi Habis"/>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS  */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
        >
          {PRODUCT_ITEMS.map((item, index) => (
            <StatCard 
              key={`product-${index}`}
              name={item.name}
              icon={item.icon}
              value={item.value}
              color={item.color}
            />
          ))}
        </motion.div>
        <ProductsTable />
        {/* CHARTS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;