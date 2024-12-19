import { motion } from 'framer-motion';
import { BookCheck } from 'lucide-react';
import Header from '../components/common/Header';
import StatCard from '../components/common/StatCard';
import SalesOverviewChart from '../components/overview/SalesOverviewChart';
import CategoryDistributinChart from '../components/overview/CategoryDistributinChart';
import SalesChanneChart from '../components/overview/SalesChannelChart';

const STAT_ITEMS = [
  {name: "Mutasi Habis", icon: BookCheck, value: '523', color: '#10B981'}, //#6366F1
  {name: "Mutasi Sebagian", icon: BookCheck, value: '1,345', color: '#10B981'}, //#8B5CF6
  {name: "Objek Pajak baru", icon: BookCheck, value: '576', color: '#10B981'}, //#EC4899
  {name: "Pembetulan", icon: BookCheck, value: '59', color: '#10B981'},
];

function OverviewPage() {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Overview"/>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS  */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
        >
          {STAT_ITEMS.map((item, index) => (
            <StatCard 
              key={`statcard-${index}`}
              name={item.name}
              icon={item.icon}
              value={item.value}
              color={item.color}
            />
          ))}
        </motion.div>
        {/* CHARTS */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart />
          <CategoryDistributinChart />
          <SalesChanneChart title="Pajak Air Tanah" targetvalue={756000000} realvalue={787000000}/>
          <SalesChanneChart title="Umbul-Umbul" targetvalue={456000000} realvalue={533000000}/>
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;