import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { motion } from 'framer-motion';

// const PAT_DATA = [
//   { name: "Target", value: 567 },
//   { name: "Realisasi", value: 630 },

// ];

const COLORS = ["#EC4899", "#10B981", "#F59E0B"]; //#6366F1", "#8B5CF6"

function ServiceBarChart({title, targetvalue, realvalue}) {
	const DATA = [
		{ name: "Target", value: targetvalue },
		{ name: "Realisasi", value: realvalue },
	  
	];
  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>{title}</h2>

			<div className='h-80'>
				<ResponsiveContainer>
					<BarChart 
						data={DATA} 
						margin={{ top: 20, right: 30, left: 50, bottom: 20 }} 
						barCategoryGap="20%"
					>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
							formatter={(value) => `Rp ${value.toLocaleString('id-ID')}`}
						/>
						<Bar dataKey={"value"} fill='#8884d8' barSize={55}>
							{DATA.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
  );
};

export default ServiceBarChart;