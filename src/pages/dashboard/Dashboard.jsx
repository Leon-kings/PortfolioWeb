


// /* eslint-disable no-unused-vars */
// // components/Dashboard.jsx
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../../App';
// import Cookies from 'js-cookie'; // Add this import
// import { 
//   Dashboard as DashboardIcon,
//   People,
//   Email,
//   Message,
//   AttachMoney,
//   TrendingUp,
//   Settings,
//   Logout,
//   Notifications,
//   Search,
//   Menu as MenuIcon,
//   Close,
//   MoreVert,
//   Refresh,
//   Assessment,
//   Payment,
//   Star,
//   ArrowUpward,
//   ArrowDownward,
//   Person,
//   Receipt,
//   Timeline,
//   PieChart,
//   BarChart,
//   ShowChart,
//   CloudDownload,
//   Print,
//   FilterList,
//   Sort,
//   Check,
//   Warning,
//   Info,
//   AccessTime,
//   Delete,
//   Edit,
//   Visibility,
//   MarkEmailRead,
//   Work,
//   MonetizationOn,
//   CheckCircle,
//   Cancel,
//   Markunread
// } from '@mui/icons-material';
// import { toast } from 'react-toastify';

// // ==================== STAT CARD COMPONENT ====================
// const StatCard = ({ title, value, icon, trend, color, trendDirection = 'up', subtitle, loading }) => {
//   return (
//     <motion.div
//       whileHover={{ y: -8, scale: 1.02 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all"
//     >
//       {loading ? (
//         <div className="animate-pulse">
//           <div className="flex items-start justify-between mb-4">
//             <div className="p-3 bg-white/10 rounded-xl w-12 h-12"></div>
//             <div className="w-16 h-6 bg-white/10 rounded-full"></div>
//           </div>
//           <div className="h-4 bg-white/10 rounded w-24 mb-2"></div>
//           <div className="h-8 bg-white/10 rounded w-32"></div>
//         </div>
//       ) : (
//         <>
//           <div className="flex items-start justify-between mb-4">
//             <div className={`p-3 bg-gradient-to-br ${color} rounded-xl shadow-lg`}>
//               {React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
//             </div>
//             {trend && (
//               <motion.div 
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold
//                   ${trendDirection === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
//               >
//                 {trendDirection === 'up' ? <ArrowUpward className="w-3 h-3" /> : <ArrowDownward className="w-3 h-3" />}
//                 <span>{trend}</span>
//               </motion.div>
//             )}
//           </div>
//           <h3 className="text-gray-400 text-xs sm:text-sm mb-1 truncate">{title}</h3>
//           <div className="flex items-end justify-between">
//             <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
//             {subtitle && <span className="text-xs text-gray-400 hidden sm:inline">{subtitle}</span>}
//           </div>
//         </>
//       )}
//     </motion.div>
//   );
// };

// // ==================== MESSAGES TABLE COMPONENT ====================
// const MessagesTable = ({ messages, loading, onMarkRead }) => {
//   const [expandedMessage, setExpandedMessage] = useState(null);
//   const [filter, setFilter] = useState('all'); // all, read, unread

//   const filteredMessages = messages?.filter(msg => {
//     if (filter === 'read') return msg.isRead;
//     if (filter === 'unread') return !msg.isRead;
//     return true;
//   });

//   const getServiceColor = (service) => {
//     const colors = {
//       'Web Development': 'bg-blue-500/20 text-blue-400',
//       'Mobile Development': 'bg-purple-500/20 text-purple-400',
//       'UI/UX Design': 'bg-pink-500/20 text-pink-400',
//       'Consulting': 'bg-green-500/20 text-green-400'
//     };
//     return colors[service] || 'bg-gray-500/20 text-gray-400';
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffTime = Math.abs(now - date);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
//     if (diffDays === 1) return 'Yesterday';
//     if (diffDays < 7) return `${diffDays} days ago`;
//     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
//     return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 col-span-2">
//       <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
//         <div>
//           <h3 className="text-lg font-semibold text-white">Contact Messages</h3>
//           <p className="text-sm text-gray-400">User inquiries and feedback</p>
//         </div>
//         <div className="flex items-center space-x-2 overflow-x-auto pb-1">
//           <div className="flex items-center space-x-1 p-1 bg-white/5 rounded-lg border border-white/10">
//             {['all', 'unread', 'read'].map((f) => (
//               <button
//                 key={f}
//                 onClick={() => setFilter(f)}
//                 className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
//                   filter === f
//                     ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
//                     : 'text-gray-400 hover:text-white hover:bg-white/5'
//                 }`}
//               >
//                 {f.charAt(0).toUpperCase() + f.slice(1)}
//               </button>
//             ))}
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             className="p-2 hover:bg-white/5 rounded-lg transition-colors"
//           >
//             <FilterList className="w-4 h-4 text-gray-400" />
//           </motion.button>
//         </div>
//       </div>

//       {loading ? (
//         <div className="space-y-4">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <div key={i} className="animate-pulse flex items-center justify-between p-4 bg-white/5 rounded-xl">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white/10 rounded-full"></div>
//                 <div>
//                   <div className="h-4 bg-white/10 rounded w-32 mb-2"></div>
//                   <div className="h-3 bg-white/10 rounded w-24"></div>
//                 </div>
//               </div>
//               <div className="w-20 h-8 bg-white/10 rounded-full"></div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <>
//           <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar pr-1">
//             {filteredMessages?.length === 0 ? (
//               <div className="text-center py-12">
//                 <Message className="w-12 h-12 text-gray-600 mx-auto mb-4" />
//                 <p className="text-gray-400">No messages found</p>
//               </div>
//             ) : (
//               filteredMessages?.map((message, index) => (
//                 <motion.div
//                   key={message._id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                   className="group"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.01, x: 5 }}
//                     onClick={() => setExpandedMessage(expandedMessage === message._id ? null : message._id)}
//                     className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer ${
//                       !message.isRead ? 'border-l-4 border-purple-500' : ''
//                     }`}
//                   >
//                     <div className="flex items-start sm:items-center space-x-4 mb-3 sm:mb-0">
//                       <div className="relative">
//                         <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
//                           <Person className="w-5 h-5 text-gray-400" />
//                         </div>
//                         {!message.isRead && (
//                           <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900" />
//                         )}
//                       </div>
//                       <div>
//                         <p className="font-medium text-white flex items-center flex-wrap gap-2">
//                           {message.name}
//                           <span className={`text-xs px-2 py-1 rounded-full ${getServiceColor(message.services)}`}>
//                             {message.services}
//                           </span>
//                         </p>
//                         <div className="flex items-center space-x-2 mt-1">
//                           <span className="text-xs text-gray-400">{message.email}</span>
//                           <span className="text-xs text-gray-500">•</span>
//                           <span className="text-xs text-gray-400">{formatDate(message.createdAt)}</span>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center justify-between sm:justify-end space-x-3">
//                       <div className={`px-2 py-1 rounded-full text-xs ${
//                         message.isRead ? 'bg-gray-500/20 text-gray-400' : 'bg-purple-500/20 text-purple-400'
//                       }`}>
//                         {message.isRead ? 'Read' : 'Unread'}
//                       </div>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           onMarkRead(message._id);
//                         }}
//                         className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
//                       >
//                         {message.isRead ? 
//                           <MarkEmailRead className="w-4 h-4 text-green-400" /> : 
//                           <Markunread className="w-4 h-4 text-gray-400" />
//                         }
//                       </button>
//                     </div>
//                   </motion.div>
                  
//                   <AnimatePresence>
//                     {expandedMessage === message._id && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="mt-2 p-4 bg-white/5 rounded-xl border border-white/10"
//                       >
//                         <div className="space-y-4">
//                           <div>
//                             <p className="text-xs text-gray-400 mb-2">Message</p>
//                             <p className="text-sm text-white bg-white/5 p-3 rounded-lg">
//                               {message.message}
//                             </p>
//                           </div>
//                           <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//                             <div>
//                               <p className="text-xs text-gray-400 mb-1">Message ID</p>
//                               <p className="text-xs text-white font-mono">{message._id.slice(-8)}</p>
//                             </div>
//                             <div>
//                               <p className="text-xs text-gray-400 mb-1">Date</p>
//                               <p className="text-xs text-white">
//                                 {new Date(message.createdAt).toLocaleDateString('en-US', {
//                                   month: 'short',
//                                   day: 'numeric',
//                                   year: 'numeric'
//                                 })}
//                               </p>
//                             </div>
//                             <div>
//                               <p className="text-xs text-gray-400 mb-1">Service</p>
//                               <p className="text-xs text-white">{message.services}</p>
//                             </div>
//                             <div>
//                               <p className="text-xs text-gray-400 mb-1">Status</p>
//                               <p className={`text-xs px-2 py-1 rounded-full inline-block ${
//                                 message.isRead ? 'bg-gray-500/20 text-gray-400' : 'bg-purple-500/20 text-purple-400'
//                               }`}>
//                                 {message.isRead ? 'Read' : 'Unread'}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))
//             )}
//           </div>
          
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             className="w-full mt-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-400 hover:text-white transition-colors"
//           >
//             View All Messages
//           </motion.button>
//         </>
//       )}
//     </div>
//   );
// };

// // ==================== SUBSCRIPTIONS COMPONENT ====================
// const SubscriptionsList = ({ subscriptions, loading }) => {
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffTime = Math.abs(now - date);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
//     if (diffDays === 1) return 'Yesterday';
//     if (diffDays < 7) return `${diffDays} days ago`;
//     return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10">
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h3 className="text-lg font-semibold text-white">Email Subscriptions</h3>
//           <p className="text-sm text-gray-400">Latest newsletter subscribers</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
//             {subscriptions?.filter(s => s.isActive).length || 0} Active
//           </span>
//         </div>
//       </div>

//       {loading ? (
//         <div className="space-y-4">
//           {[1, 2, 3, 4].map((i) => (
//             <div key={i} className="animate-pulse flex items-center justify-between p-3 bg-white/5 rounded-xl">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-white/10 rounded-full"></div>
//                 <div className="w-32 h-4 bg-white/10 rounded"></div>
//               </div>
//               <div className="w-20 h-6 bg-white/10 rounded-full"></div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
//           {subscriptions?.length === 0 ? (
//             <div className="text-center py-8">
//               <Email className="w-12 h-12 text-gray-600 mx-auto mb-4" />
//               <p className="text-gray-400">No subscriptions yet</p>
//             </div>
//           ) : (
//             subscriptions?.map((sub, index) => (
//               <motion.div
//                 key={sub._id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
//               >
//                 <div className="flex items-center space-x-3 min-w-0">
//                   <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
//                     <Email className="w-5 h-5 text-green-400" />
//                   </div>
//                   <div className="min-w-0">
//                     <p className="font-medium text-white truncate">{sub.email}</p>
//                     <p className="text-xs text-gray-400">
//                       Subscribed {formatDate(sub.subscribedAt)}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-2 flex-shrink-0">
//                   <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${
//                     sub.isActive 
//                       ? 'bg-green-500/20 text-green-400' 
//                       : 'bg-gray-500/20 text-gray-400'
//                   }`}>
//                     {sub.isActive ? 'Active' : 'Inactive'}
//                   </span>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // ==================== HIRE REQUESTS COMPONENT ====================
// const HireRequests = ({ requests, loading }) => {
//   const getStatusColor = (status) => {
//     const colors = {
//       'new': 'bg-blue-500/20 text-blue-400',
//       'reviewed': 'bg-yellow-500/20 text-yellow-400',
//       'contacted': 'bg-green-500/20 text-green-400',
//       'archived': 'bg-gray-500/20 text-gray-400'
//     };
//     return colors[status] || 'bg-gray-500/20 text-gray-400';
//   };

//   const getBudgetColor = (budget) => {
//     if (budget.includes('5000+')) return 'bg-purple-500/20 text-purple-400';
//     if (budget.includes('1000-5000')) return 'bg-blue-500/20 text-blue-400';
//     if (budget.includes('500-1000')) return 'bg-green-500/20 text-green-400';
//     return 'bg-gray-500/20 text-gray-400';
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffTime = Math.abs(now - date);
//     const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
//     if (diffDays === 1) return 'Yesterday';
//     if (diffDays < 7) return `${diffDays} days ago`;
//     if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
//     return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
//   };

//   return (
//     <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10">
//       <div className="flex items-center justify-between mb-6">
//         <div>
//           <h3 className="text-lg font-semibold text-white">Hire Requests</h3>
//           <p className="text-sm text-gray-400">Project inquiries</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
//             {requests?.filter(r => r.status === 'new').length || 0} New
//           </span>
//         </div>
//       </div>

//       {loading ? (
//         <div className="space-y-4">
//           {[1, 2, 3].map((i) => (
//             <div key={i} className="animate-pulse p-4 bg-white/5 rounded-xl">
//               <div className="flex items-center space-x-3 mb-3">
//                 <div className="w-10 h-10 bg-white/10 rounded-full"></div>
//                 <div className="flex-1">
//                   <div className="h-4 bg-white/10 rounded w-32 mb-2"></div>
//                   <div className="h-3 bg-white/10 rounded w-24"></div>
//                 </div>
//               </div>
//               <div className="h-3 bg-white/10 rounded w-3/4"></div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
//           {requests?.length === 0 ? (
//             <div className="text-center py-8">
//               <Work className="w-12 h-12 text-gray-600 mx-auto mb-4" />
//               <p className="text-gray-400">No hire requests yet</p>
//             </div>
//           ) : (
//             requests?.map((request, index) => (
//               <motion.div
//                 key={request._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.05 }}
//                 className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
//                   <div className="flex items-start space-x-3">
//                     <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
//                       <Work className="w-5 h-5 text-purple-400" />
//                     </div>
//                     <div>
//                       <p className="font-medium text-white">{request.name}</p>
//                       <div className="flex flex-wrap items-center gap-2 mt-1">
//                         <span className={`text-xs px-2 py-1 rounded-full ${getBudgetColor(request.budget)}`}>
//                           {request.budget}
//                         </span>
//                         <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}>
//                           {request.status}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <span className="text-xs text-gray-400 whitespace-nowrap">
//                     {formatDate(request.createdAt)}
//                   </span>
//                 </div>
//                 <p className="text-sm text-gray-300 mt-2 line-clamp-2">{request.message}</p>
//                 <div className="flex items-center justify-end space-x-2 mt-3 pt-2 border-t border-white/10">
//                   <button className="p-1 hover:bg-white/10 rounded transition-colors">
//                     <Visibility className="w-4 h-4 text-gray-400" />
//                   </button>
//                   <button className="p-1 hover:bg-white/10 rounded transition-colors">
//                     <Edit className="w-4 h-4 text-gray-400" />
//                   </button>
//                   <span className="text-xs text-gray-500">{request.email}</span>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// // ==================== MAIN DASHBOARD COMPONENT ====================
// export const Dashboard = () => {
//   const { user, logout } = useAuth();
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [dashboardData, setDashboardData] = useState(null);
  
//   // Get user data from cookies
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     role: '',
//     avatar: ''
//   });

//   useEffect(() => {
//     // Get user data from cookies
//     const userName = Cookies.get('userName') || 
//                     Cookies.get('username') || 
//                     Cookies.get('name') || 
//                     user?.name || 
//                     'John Doe';
    
//     const userEmail = Cookies.get('userEmail') || 
//                      Cookies.get('email') || 
//                      user?.email || 
//                      'john.doe@example.com';
    
//     const userRole = Cookies.get('userRole') || 
//                     Cookies.get('role') || 
//                     user?.role || 
//                     'Administrator';
    
//     const userAvatar = Cookies.get('userAvatar') || 
//                       user?.avatar || 
//                       `https://i.pravatar.cc/150?u=${userName}`;

//     setUserData({
//       name: userName,
//       email: userEmail,
//       role: userRole,
//       avatar: userAvatar
//     });

//     // Also store in cookies if not exists
//     if (!Cookies.get('userName')) {
//       Cookies.set('userName', userName, { expires: 7 });
//     }
//     if (!Cookies.get('userEmail')) {
//       Cookies.set('userEmail', userEmail, { expires: 7 });
//     }
//     if (!Cookies.get('userRole')) {
//       Cookies.set('userRole', userRole, { expires: 7 });
//     }
//     if (!Cookies.get('userAvatar')) {
//       Cookies.set('userAvatar', userAvatar, { expires: 7 });
//     }

//   }, [user]);

//   // Fetch data from APIs
//   useEffect(() => {
//     fetchDashboardData();
//   }, []);

//   const fetchDashboardData = async () => {
//     setLoading(true);
//     try {
//       // Fetch all data in parallel
//       const [messagesRes, subscriptionsRes, hireRes] = await Promise.all([
//         fetch('https://leonstatusprofile.onrender.com/messages'),
//         fetch('https://leonstatusprofile.onrender.com/subscription'),
//         fetch('https://leonstatusprofile.onrender.com/hire')
//       ]);

//       const messagesData = await messagesRes.json();
//       const subscriptionsData = await subscriptionsRes.json();
//       const hireData = await hireRes.json();

//       setDashboardData({
//         messages: messagesData.data || [],
//         subscriptions: subscriptionsData.data || [],
//         hireRequests: hireData.data || [],
//         stats: {
//           totalMessages: messagesData.count || 0,
//           unreadMessages: messagesData.data?.filter(m => !m.isRead).length || 0,
//           totalSubscriptions: subscriptionsData.count || 0,
//           activeSubscriptions: subscriptionsData.data?.filter(s => s.isActive).length || 0,
//           totalHireRequests: hireData.count || 0,
//           newHireRequests: hireData.data?.filter(h => h.status === 'new').length || 0
//         }
//       });

//       toast.success('📊 Dashboard data refreshed successfully!');
//     } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//       toast.error('❌ Failed to fetch dashboard data');
      
//       // Set mock data for development
//       setDashboardData({
//         messages: [],
//         subscriptions: [],
//         hireRequests: [],
//         stats: {
//           totalMessages: 0,
//           unreadMessages: 0,
//           totalSubscriptions: 0,
//           activeSubscriptions: 0,
//           totalHireRequests: 0,
//           newHireRequests: 0
//         }
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMarkAsRead = async (messageId) => {
//     try {
//       // Update local state optimistically
//       setDashboardData(prev => ({
//         ...prev,
//         messages: prev.messages.map(msg =>
//           msg._id === messageId ? { ...msg, isRead: true } : msg
//         ),
//         stats: {
//           ...prev.stats,
//           unreadMessages: prev.stats.unreadMessages - 1
//         }
//       }));
      
//       toast.success('✅ Message marked as read');
      
//       // Here you would typically make an API call to update the backend
//       // await fetch(`https://leonstatusprofile.onrender.com/messages/${messageId}/read`, { method: 'PUT' });
      
//     } catch (error) {
//       toast.error('❌ Failed to mark message as read');
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15
//       }
//     }
//   };

//   return (
//     <div className="w-full flex h-screen bg-gray-900 text-white overflow-hidden">
//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
//         {/* Header */}
//         <header className="bg-gray-800/30 backdrop-blur-xl border-b border-white/10 p-3 sm:p-4 sticky top-0 z-10">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2 sm:space-x-4 flex-1"> 
//               <div className="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full pl-9 sm:pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center space-x-2 sm:space-x-3">
//               <motion.button
//                 whileHover={{ rotate: 180 }}
//                 transition={{ duration: 0.5 }}
//                 onClick={fetchDashboardData}
//                 className="p-2 hover:bg-white/5 rounded-lg transition-colors relative"
//               >
//                 <Refresh className="text-gray-400 hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 className="p-2 hover:bg-white/5 rounded-lg transition-colors relative hidden sm:block"
//               >
//                 <Notifications className="text-gray-400 hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
//               </motion.button>
              
//               <div className="hidden md:flex items-center space-x-2">
//                 <div className="h-8 w-px bg-white/10 mx-2"></div>
//                 <div className="flex items-center space-x-2">
//                   <div className="text-right hidden lg:block">
//                     <p className="text-sm font-medium text-white truncate max-w-[150px]">
//                       {userData.name || 'John Doe'}
//                     </p>
//                     <p className="text-xs text-gray-400 truncate max-w-[150px]">
//                       {userData.role || 'Administrator'}
//                     </p>
//                   </div>
//                   <img 
//                     src={userData.avatar || 'https://i.pravatar.cc/150?img=1'} 
//                     alt={userData.name}
//                     className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-500"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="p-4 sm:p-6 lg:p-8">
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="space-y-6 sm:space-y-8"
//           >
//             {/* Welcome Banner */}
//             <motion.div
//               variants={itemVariants}
//               className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl p-4 sm:p-6 border border-white/10"
//             >
//               <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
//               <div className="relative z-10">
//                 <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                   <div>
//                     <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                       Welcome back, {userData.name.split(' ')[0] || 'John'}! 👋
//                     </h1>
//                     <p className="text-sm sm:text-base text-gray-400">
//                       {new Date().toLocaleDateString('en-US', { 
//                         weekday: 'long', 
//                         month: 'long', 
//                         day: 'numeric', 
//                         year: 'numeric' 
//                       })}
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Logged in as {userData.email}
//                     </p>
//                   </div>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/10 text-sm sm:text-base"
//                   >
//                     <CloudDownload className="w-4 h-4" />
//                     <span>Export</span>
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Stats Grid */}
//             <motion.div variants={itemVariants}>
//               <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
//                 <StatCard
//                   title="Total Messages"
//                   value={dashboardData?.stats.totalMessages || 0}
//                   icon={<Message />}
//                   trend={dashboardData?.stats.unreadMessages ? `+${dashboardData.stats.unreadMessages} unread` : null}
//                   trendDirection="up"
//                   color="from-purple-500 to-pink-500"
//                   loading={loading}
//                 />
//                 <StatCard
//                   title="Unread"
//                   value={dashboardData?.stats.unreadMessages || 0}
//                   icon={<Markunread />}
//                   trend={`${((dashboardData?.stats.unreadMessages / dashboardData?.stats.totalMessages) * 100 || 0).toFixed(1)}%`}
//                   trendDirection="up"
//                   color="from-red-500 to-orange-500"
//                   loading={loading}
//                 />
//                 <StatCard
//                   title="Subscriptions"
//                   value={dashboardData?.stats.totalSubscriptions || 0}
//                   icon={<Email />}
//                   trend={`${dashboardData?.stats.activeSubscriptions || 0} active`}
//                   trendDirection="up"
//                   color="from-green-500 to-emerald-500"
//                   loading={loading}
//                 />
//                 <StatCard
//                   title="Hire Requests"
//                   value={dashboardData?.stats.totalHireRequests || 0}
//                   icon={<Work />}
//                   trend={`+${dashboardData?.stats.newHireRequests || 0} new`}
//                   trendDirection="up"
//                   color="from-blue-500 to-cyan-500"
//                   loading={loading}
//                 />
//                 <StatCard
//                   title="Active Rate"
//                   value={`${((dashboardData?.stats.activeSubscriptions / dashboardData?.stats.totalSubscriptions) * 100 || 0).toFixed(1)}%`}
//                   icon={<CheckCircle />}
//                   trend="Active subs"
//                   trendDirection="up"
//                   color="from-yellow-500 to-amber-500"
//                   loading={loading}
//                 />
//                 <StatCard
//                   title="Response Rate"
//                   value="94%"
//                   icon={<TrendingUp />}
//                   trend="+5.2%"
//                   trendDirection="up"
//                   color="from-indigo-500 to-purple-500"
//                   loading={loading}
//                 />
//               </div>
//             </motion.div>

//             {/* Main Content Grid */}
//             <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <MessagesTable 
//                 messages={dashboardData?.messages || []} 
//                 loading={loading}
//                 onMarkRead={handleMarkAsRead}
//               />
//             </motion.div>

//             {/* Secondary Content Grid */}
//             <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <SubscriptionsList 
//                 subscriptions={dashboardData?.subscriptions || []} 
//                 loading={loading} 
//               />
//               <HireRequests 
//                 requests={dashboardData?.hireRequests || []} 
//                 loading={loading} 
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// };

// // Add custom scrollbar styles
// const style = document.createElement('style');
// style.textContent = `
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 6px;
//   }
//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: rgba(255,255,255,0.05);
//     border-radius: 10px;
//   }
//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background: rgba(255,255,255,0.2);
//     border-radius: 10px;
//   }
//   .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//     background: rgba(255,255,255,0.3);
//   }
//   .bg-grid {
//     background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
//       linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
//     background-size: 24px 24px;
//   }
//   @media (min-width: 480px) {
//     .xs\\:grid-cols-2 {
//       grid-template-columns: repeat(2, minmax(0, 1fr));
//     }
//   }
// `;
// document.head.appendChild(style);



























/* eslint-disable no-unused-vars */
// pages/dashboard/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../App'; // Make sure this import path is correct
import Cookies from 'js-cookie';
import { 
  Dashboard as DashboardIcon,
  Email,
  Message,
  TrendingUp,
  Settings,
  Logout,
  Notifications,
  Search,
  Refresh,
  CloudDownload,
  FilterList,
  Delete,
  Edit,
  Visibility,
  MarkEmailRead,
  Work,
  CheckCircle,
  Markunread,
  Person
} from '@mui/icons-material';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// ==================== STAT CARD COMPONENT ====================
const StatCard = ({ title, value, icon, trend, color, trendDirection = 'up', subtitle, loading }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all"
    >
      {loading ? (
        <div className="animate-pulse">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 bg-white/10 rounded-xl w-12 h-12"></div>
            <div className="w-16 h-6 bg-white/10 rounded-full"></div>
          </div>
          <div className="h-4 bg-white/10 rounded w-24 mb-2"></div>
          <div className="h-8 bg-white/10 rounded w-32"></div>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 bg-gradient-to-br ${color} rounded-xl shadow-lg`}>
              {React.cloneElement(icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" })}
            </div>
            {trend && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-semibold
                  ${trendDirection === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}
              >
                <span>{trend}</span>
              </motion.div>
            )}
          </div>
          <h3 className="text-gray-400 text-xs sm:text-sm mb-1 truncate">{title}</h3>
          <div className="flex items-end justify-between">
            <p className="text-2xl sm:text-3xl font-bold text-white">{value}</p>
            {subtitle && <span className="text-xs text-gray-400 hidden sm:inline">{subtitle}</span>}
          </div>
        </>
      )}
    </motion.div>
  );
};

// ==================== MESSAGES TABLE COMPONENT ====================
const MessagesTable = ({ messages, loading, onMarkRead, onDelete }) => {
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredMessages = messages?.filter(msg => {
    if (filter === 'read') return msg.isRead;
    if (filter === 'unread') return !msg.isRead;
    return true;
  });

  const getServiceColor = (service) => {
    const colors = {
      'Web Development': 'bg-blue-500/20 text-blue-400',
      'Mobile Development': 'bg-purple-500/20 text-purple-400',
      'UI/UX Design': 'bg-pink-500/20 text-pink-400',
      'Consulting': 'bg-green-500/20 text-green-400'
    };
    return colors[service] || 'bg-gray-500/20 text-gray-400';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10 lg:col-span-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Messages</h3>
          <p className="text-sm text-gray-400">User inquiries and feedback</p>
        </div>
        <div className="flex items-center space-x-2 overflow-x-auto pb-1">
          <div className="flex items-center space-x-1 p-1 bg-white/5 rounded-lg border border-white/10">
            {['all', 'unread', 'read'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                  filter === f
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="animate-pulse flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                <div>
                  <div className="h-4 bg-white/10 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-24"></div>
                </div>
              </div>
              <div className="w-20 h-8 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar pr-1">
            {filteredMessages?.length === 0 ? (
              <div className="text-center py-12">
                <Message className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400">No messages found</p>
              </div>
            ) : (
              filteredMessages?.map((message, index) => (
                <motion.div
                  key={message._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.01, x: 5 }}
                    onClick={() => setExpandedMessage(expandedMessage === message._id ? null : message._id)}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer ${
                      !message.isRead ? 'border-l-4 border-purple-500' : ''
                    }`}
                  >
                    <div className="flex items-start sm:items-center space-x-4 mb-3 sm:mb-0">
                      <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                          <Person className="w-5 h-5 text-gray-400" />
                        </div>
                        {!message.isRead && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-gray-900" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-white flex items-center flex-wrap gap-2">
                          {message.name}
                          <span className={`text-xs px-2 py-1 rounded-full ${getServiceColor(message.services)}`}>
                            {message.services}
                          </span>
                        </p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-gray-400">{message.email}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-400">{formatDate(message.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end space-x-3">
                      <div className={`px-2 py-1 rounded-full text-xs ${
                        message.isRead ? 'bg-gray-500/20 text-gray-400' : 'bg-purple-500/20 text-purple-400'
                      }`}>
                        {message.isRead ? 'Read' : 'Unread'}
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onMarkRead(message._id);
                        }}
                        className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                      >
                        {message.isRead ? 
                          <MarkEmailRead className="w-4 h-4 text-green-400" /> : 
                          <Markunread className="w-4 h-4 text-gray-400" />
                        }
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (window.confirm('Are you sure you want to delete this message?')) {
                            onDelete(message._id, 'message');
                          }
                        }}
                        className="p-1.5 hover:bg-red-500/20 rounded-lg transition-colors"
                      >
                        <Delete className="w-4 h-4 text-red-400" />
                      </button>
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {expandedMessage === message._id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs text-gray-400 mb-2">Message</p>
                            <p className="text-sm text-white bg-white/5 p-3 rounded-lg">
                              {message.message}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div>
                              <p className="text-xs text-gray-400 mb-1">Message ID</p>
                              <p className="text-xs text-white font-mono">{message._id.slice(-8)}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 mb-1">Date</p>
                              <p className="text-xs text-white">
                                {new Date(message.createdAt).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 mb-1">Service</p>
                              <p className="text-xs text-white">{message.services}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 mb-1">Status</p>
                              <p className={`text-xs px-2 py-1 rounded-full inline-block ${
                                message.isRead ? 'bg-gray-500/20 text-gray-400' : 'bg-purple-500/20 text-purple-400'
                              }`}>
                                {message.isRead ? 'Read' : 'Unread'}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

// ==================== SUBSCRIPTIONS COMPONENT ====================
const SubscriptionsList = ({ subscriptions, loading, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Email Subscriptions</h3>
          <p className="text-sm text-gray-400">Latest newsletter subscribers</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">
            {subscriptions?.filter(s => s.isActive).length || 0} Active
          </span>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                <div className="w-32 h-4 bg-white/10 rounded"></div>
              </div>
              <div className="w-20 h-6 bg-white/10 rounded-full"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
          {subscriptions?.length === 0 ? (
            <div className="text-center py-8">
              <Email className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No subscriptions yet</p>
            </div>
          ) : (
            subscriptions?.map((sub, index) => (
              <motion.div
                key={sub._id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Email className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-white truncate">{sub.email}</p>
                    <p className="text-xs text-gray-400">
                      Subscribed {formatDate(sub.subscribedAt)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <span className={`px-2 py-1 rounded-full text-xs whitespace-nowrap ${
                    sub.isActive 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {sub.isActive ? 'Active' : 'Inactive'}
                  </span>
                  <button
                    onClick={() => {
                      if (window.confirm('Are you sure you want to delete this subscription?')) {
                        onDelete(sub._id, 'subscription');
                      }
                    }}
                    className="p-1.5 hover:bg-red-500/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Delete className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

// ==================== HIRE REQUESTS COMPONENT ====================
const HireRequests = ({ requests, loading, onDelete }) => {
  const getStatusColor = (status) => {
    const colors = {
      'new': 'bg-blue-500/20 text-blue-400',
      'reviewed': 'bg-yellow-500/20 text-yellow-400',
      'contacted': 'bg-green-500/20 text-green-400',
      'archived': 'bg-gray-500/20 text-gray-400'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400';
  };

  const getBudgetColor = (budget) => {
    if (budget.includes('5000+')) return 'bg-purple-500/20 text-purple-400';
    if (budget.includes('1000-5000')) return 'bg-blue-500/20 text-blue-400';
    if (budget.includes('500-1000')) return 'bg-green-500/20 text-green-400';
    return 'bg-gray-500/20 text-gray-400';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Hire Requests</h3>
          <p className="text-sm text-gray-400">Project inquiries</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
            {requests?.filter(r => r.status === 'new').length || 0} New
          </span>
        </div>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse p-4 bg-white/5 rounded-xl">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-white/10 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-white/10 rounded w-32 mb-2"></div>
                  <div className="h-3 bg-white/10 rounded w-24"></div>
                </div>
              </div>
              <div className="h-3 bg-white/10 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
          {requests?.length === 0 ? (
            <div className="text-center py-8">
              <Work className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No hire requests yet</p>
            </div>
          ) : (
            requests?.map((request, index) => (
              <motion.div
                key={request._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Work className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{request.name}</p>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${getBudgetColor(request.budget)}`}>
                          {request.budget}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(request.status)}`}>
                          {request.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {formatDate(request.createdAt)}
                    </span>
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this hire request?')) {
                          onDelete(request._id, 'hire');
                        }
                      }}
                      className="p-1.5 hover:bg-red-500/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Delete className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-2 line-clamp-2">{request.message}</p>
                <div className="flex items-center justify-end space-x-2 mt-3 pt-2 border-t border-white/10">
                  <span className="text-xs text-gray-500">{request.email}</span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

// ==================== MAIN DASHBOARD COMPONENT ====================
export const Dashboard = () => {
  // This will now work because Dashboard is rendered inside AuthProvider
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(true);
  const [User,setUser]= useState();
  const navigate =useNavigate();
  const [dashboardData, setDashboardData] = useState({
    messages: [],
    subscriptions: [],
    hireRequests: [],
    stats: {
      totalMessages: 0,
      unreadMessages: 0,
      totalSubscriptions: 0,
      activeSubscriptions: 0,
      totalHireRequests: 0,
      newHireRequests: 0
    }
  });
  
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    role: 'Administrator',
    avatar: 'https://i.pravatar.cc/150?u=Admin'
  });

  // Get user data from auth context and cookies
  useEffect(() => {
    const userName = Cookies.get('userName') || 
                    Cookies.get('username') || 
                    Cookies.get('name') || 
                    user?.name || // Use auth context user
                    'Admin User';
    
    const userEmail = Cookies.get('userEmail') || 
                     Cookies.get('email') || 
                     user?.email || // Use auth context user
                     'admin@example.com';
    
    const userRole = Cookies.get('userRole') || 
                    Cookies.get('role') || 
                    user?.role || // Use auth context user
                    'Administrator';
    
    const userAvatar = Cookies.get('userAvatar') || 
                      user?.avatar ||
                      `https://i.pravatar.cc/150?u=${userName}`;

    setUserData({
      name: userName,
      email: userEmail,
      role: userRole,
      avatar: userAvatar
    });
  }, [user]); // Re-run when user from auth context changes

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      const [messagesRes, subscriptionsRes, hireRes] = await Promise.all([
        fetch('https://leonstatusprofile.onrender.com/messages'),
        fetch('https://leonstatusprofile.onrender.com/subscription'),
        fetch('https://leonstatusprofile.onrender.com/hire')
      ]);

      if (!messagesRes.ok || !subscriptionsRes.ok || !hireRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const messagesData = await messagesRes.json();
      const subscriptionsData = await subscriptionsRes.json();
      const hireData = await hireRes.json();

      setDashboardData({
        messages: messagesData.data || [],
        subscriptions: subscriptionsData.data || [],
        hireRequests: hireData.data || [],
        stats: {
          totalMessages: messagesData.count || 0,
          unreadMessages: messagesData.data?.filter(m => !m.isRead).length || 0,
          totalSubscriptions: subscriptionsData.count || 0,
          activeSubscriptions: subscriptionsData.data?.filter(s => s.isActive).length || 0,
          totalHireRequests: hireData.count || 0,
          newHireRequests: hireData.data?.filter(h => h.status === 'new').length || 0
        }
      });

      toast.success('📊 Dashboard data refreshed successfully!');
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      toast.error('❌ Failed to fetch dashboard data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleMarkAsRead = async (messageId) => {
    try {
      const message = dashboardData.messages.find(m => m._id === messageId);
      if (!message) return;

      setDashboardData(prev => ({
        ...prev,
        messages: prev.messages.map(msg =>
          msg._id === messageId ? { ...msg, isRead: true } : msg
        ),
        stats: {
          ...prev.stats,
          unreadMessages: prev.stats.unreadMessages - 1
        }
      }));

      const response = await fetch(`https://leonstatusprofile.onrender.com/messages/${messageId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isRead: true })
      });

      if (!response.ok) {
        throw new Error('Failed to mark as read');
      }

      toast.success('✅ Message marked as read');
    } catch (error) {
      console.error('Error marking message as read:', error);
      toast.error('❌ Failed to mark message as read');
      fetchDashboardData();
    }
  };

  const handleDelete = async (id, type) => {
    try {
      let url = '';
      switch(type) {
        case 'message':
          url = `https://leonstatusprofile.onrender.com/messages/${id}`;
          break;
        case 'subscription':
          url = `https://leonstatusprofile.onrender.com/subscription/${id}`;
          break;
        case 'hire':
          url = `https://leonstatusprofile.onrender.com/hire/${id}`;
          break;
        default:
          return;
      }

      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      setDashboardData(prev => {
        const newData = { ...prev };
        
        switch(type) {
          case 'message':
            newData.messages = prev.messages.filter(item => item._id !== id);
            newData.stats.totalMessages = prev.stats.totalMessages - 1;
            if (prev.messages.find(m => m._id === id)?.isRead === false) {
              newData.stats.unreadMessages = prev.stats.unreadMessages - 1;
            }
            break;
          case 'subscription':
            newData.subscriptions = prev.subscriptions.filter(item => item._id !== id);
            newData.stats.totalSubscriptions = prev.stats.totalSubscriptions - 1;
            if (prev.subscriptions.find(s => s._id === id)?.isActive) {
              newData.stats.activeSubscriptions = prev.stats.activeSubscriptions - 1;
            }
            break;
          case 'hire':
            newData.hireRequests = prev.hireRequests.filter(item => item._id !== id);
            newData.stats.totalHireRequests = prev.stats.totalHireRequests - 1;
            if (prev.hireRequests.find(h => h._id === id)?.status === 'new') {
              newData.stats.newHireRequests = prev.stats.newHireRequests - 1;
            }
            break;
        }
        
        return newData;
      });

      toast.success(`✅ ${type} deleted successfully!`);
    } catch (error) {
      console.error('Error deleting item:', error);
      toast.error(`❌ Failed to delete ${type}`);
      fetchDashboardData();
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        await axios.post(
          "https://leonstatusprofile.onrender.com/admin/logout",
          {},
          { headers: { Authorization: `Bearer ${token}` } },
        );
      }

      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");

      navigate("/login");
    } catch (error) {
      // Still clear local data even if API call fails
      setUser(null);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
      navigate("/login");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/30 backdrop-blur-xl border-b border-white/10 p-3 sm:p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <DashboardIcon className="text-white w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Analytics Dashboard</h2>
                <p className="text-xs text-gray-400">v2.0</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <motion.button
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              onClick={fetchDashboardData}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors relative"
            >
              <Refresh className="text-gray-400 hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors relative hidden sm:block"
            >
              <Notifications className="text-gray-400 hover:text-white w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            </motion.button>
            
            <div className="flex items-center space-x-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-white">{userData.name}</p>
                <p className="text-xs text-gray-400">{userData.role}</p>
              </div>
              <div className="relative">
                <img 
                  src={userData.avatar} 
                  alt={userData.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-purple-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://i.pravatar.cc/150?u=fallback';
                  }}
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Welcome Banner */}
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 rounded-2xl p-4 sm:p-6 border border-white/10"
          >
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid"></div>
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Welcome back, {userData.name.split(' ')[0]}! 👋
                  </h1>
                  <p className="text-sm sm:text-base text-gray-400">
                    {new Date().toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {userData.email}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLogout}
                    className="flex items-center justify-center space-x-2 bg-red-500/20 hover:bg-red-500/30 px-4 py-2 rounded-lg transition-colors border border-red-500/30 text-sm sm:text-base"
                  >
                    <Logout className="w-4 h-4" />
                    <span>Logout</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/10 text-sm sm:text-base"
                  >
                    <CloudDownload className="w-4 h-4" />
                    <span>Export</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
              <StatCard
                title="Total Messages"
                value={dashboardData.stats.totalMessages}
                icon={<Message />}
                trend={dashboardData.stats.unreadMessages ? `+${dashboardData.stats.unreadMessages} unread` : null}
                trendDirection="up"
                color="from-purple-500 to-pink-500"
                loading={loading}
              />
              <StatCard
                title="Unread"
                value={dashboardData.stats.unreadMessages}
                icon={<Markunread />}
                trend={`${((dashboardData.stats.unreadMessages / dashboardData.stats.totalMessages) * 100 || 0).toFixed(1)}%`}
                trendDirection="up"
                color="from-red-500 to-orange-500"
                loading={loading}
              />
              <StatCard
                title="Subscriptions"
                value={dashboardData.stats.totalSubscriptions}
                icon={<Email />}
                trend={`${dashboardData.stats.activeSubscriptions || 0} active`}
                trendDirection="up"
                color="from-green-500 to-emerald-500"
                loading={loading}
              />
              <StatCard
                title="Hire Requests"
                value={dashboardData.stats.totalHireRequests}
                icon={<Work />}
                trend={`+${dashboardData.stats.newHireRequests || 0} new`}
                trendDirection="up"
                color="from-blue-500 to-cyan-500"
                loading={loading}
              />
              <StatCard
                title="Active Rate"
                value={`${((dashboardData.stats.activeSubscriptions / dashboardData.stats.totalSubscriptions) * 100 || 0).toFixed(1)}%`}
                icon={<CheckCircle />}
                trend="Active subs"
                trendDirection="up"
                color="from-yellow-500 to-amber-500"
                loading={loading}
              />
              <StatCard
                title="Response Rate"
                value="94%"
                icon={<TrendingUp />}
                trend="+5.2%"
                trendDirection="up"
                color="from-indigo-500 to-purple-500"
                loading={loading}
              />
            </div>
          </motion.div>

          {/* Messages Table - Full Width */}
          <motion.div variants={itemVariants} className="w-full">
            <MessagesTable 
              messages={dashboardData.messages} 
              loading={loading}
              onMarkRead={handleMarkAsRead}
              onDelete={handleDelete}
            />
          </motion.div>

          {/* Secondary Content Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SubscriptionsList 
              subscriptions={dashboardData.subscriptions} 
              loading={loading}
              onDelete={handleDelete}
            />
            <HireRequests 
              requests={dashboardData.hireRequests} 
              loading={loading}
              onDelete={handleDelete}
            />
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

// Add custom scrollbar styles (only once)
if (typeof document !== 'undefined' && !document.querySelector('#dashboard-styles')) {
  const style = document.createElement('style');
  style.id = 'dashboard-styles';
  style.textContent = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255,255,255,0.05);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.3);
    }
    .bg-grid {
      background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size: 24px 24px;
    }
    @media (min-width: 480px) {
      .xs\\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
  `;
  document.head.appendChild(style);
}