import React, { useState, useEffect } from 'react';
import {
  Settings,
  Users,
  Gift,
  Zap,
  TrendingUp,
  Eye,
  Edit2,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  LogOut,
  Bell,
  ChevronDown,
  Home,
  ShoppingCart,
  BarChart3,
  AlertCircle,
  CheckCircle,
  AlertTriangle,
  Lock,
  Globe,
  DollarSign,
} from 'lucide-react';

// ============================================
// ADMIN DASHBOARD APP
// ============================================
export default function AdminDashboard() {
  const [currentSection, setCurrentSection] = useState<
    'dashboard' | 'users' | 'rooms' | 'gifts' | 'store' | 'settings' | 'analytics'
  >('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [adminNotifications, setAdminNotifications] = useState(5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 flex">
      {/* SIDEBAR */}
      <aside
        className={`fixed lg:relative h-screen bg-gray-900/95 backdrop-blur-xl border-r border-blue-500/20 flex flex-col transition-all duration-300 z-50 ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        {/* LOGO */}
        <div className="p-6 border-b border-blue-500/20 flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {isSidebarOpen && (
            <div>
              <h1 className="font-bold text-white">SoulStar</h1>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          )}
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          <SidebarItem
            icon={<Home size={20} />}
            label="Dashboard"
            active={currentSection === 'dashboard'}
            onClick={() => setCurrentSection('dashboard')}
            isCollapsed={!isSidebarOpen}
          />
          <SidebarItem
            icon={<Users size={20} />}
            label="Users"
            active={currentSection === 'users'}
            onClick={() => setCurrentSection('users')}
            isCollapsed={!isSidebarOpen}
            badge="2.4K"
          />
          <SidebarItem
            icon={<Globe size={20} />}
            label="Rooms"
            active={currentSection === 'rooms'}
            onClick={() => setCurrentSection('rooms')}
            isCollapsed={!isSidebarOpen}
            badge="156"
          />
          <SidebarItem
            icon={<Gift size={20} />}
            label="Gifts"
            active={currentSection === 'gifts'}
            onClick={() => setCurrentSection('gifts')}
            isCollapsed={!isSidebarOpen}
          />
          <SidebarItem
            icon={<ShoppingCart size={20} />}
            label="Store"
            active={currentSection === 'store'}
            onClick={() => setCurrentSection('store')}
            isCollapsed={!isSidebarOpen}
          />
          <SidebarItem
            icon={<BarChart3 size={20} />}
            label="Analytics"
            active={currentSection === 'analytics'}
            onClick={() => setCurrentSection('analytics')}
            isCollapsed={!isSidebarOpen}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            label="Settings"
            active={currentSection === 'settings'}
            onClick={() => setCurrentSection('settings')}
            isCollapsed={!isSidebarOpen}
          />
        </nav>

        {/* FOOTER */}
        <div className="p-4 border-t border-blue-500/20 space-y-2">
          {isSidebarOpen && (
            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm text-gray-300">
              <p className="font-semibold text-white mb-1">Admin User</p>
              <p className="text-xs">admin@soulstar.app</p>
            </div>
          )}
          <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-red-500/20 text-red-400 transition">
            <LogOut size={20} />
            {isSidebarOpen && 'Logout'}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-auto">
        {/* TOP BAR */}
        <header className="sticky top-0 z-40 bg-gray-900/80 backdrop-blur-xl border-b border-blue-500/20 px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-blue-500/20 rounded-lg transition"
            >
              <ChevronDown size={20} className="text-gray-400" />
            </button>
            <h2 className="text-2xl font-bold text-white capitalize">
              {currentSection === 'dashboard' && 'Dashboard Overview'}
              {currentSection === 'users' && 'User Management'}
              {currentSection === 'rooms' && 'Room Management'}
              {currentSection === 'gifts' && 'Gift Store'}
              {currentSection === 'store' && 'Store Management'}
              {currentSection === 'analytics' && 'Analytics & Reports'}
              {currentSection === 'settings' && 'System Settings'}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-400 hover:text-white transition">
              <Bell size={20} />
              {adminNotifications > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              )}
            </button>
            <button className="p-2 hover:bg-blue-500/20 rounded-lg transition text-gray-400 hover:text-white">
              <Settings size={20} />
            </button>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="p-8">
          {currentSection === 'dashboard' && <DashboardSection />}
          {currentSection === 'users' && <UsersSection />}
          {currentSection === 'rooms' && <RoomsSection />}
          {currentSection === 'gifts' && <GiftsSection />}
          {currentSection === 'store' && <StoreSection />}
          {currentSection === 'analytics' && <AnalyticsSection />}
          {currentSection === 'settings' && <SettingsSection />}
        </div>
      </main>
    </div>
  );
}

// ============================================
// DASHBOARD SECTION
// ============================================
function DashboardSection() {
  const metrics = [
    { label: 'Total Users', value: '2,847', trend: '+12%', icon: '👥', color: 'blue' },
    { label: 'Active Rooms', value: '156', trend: '+8%', icon: '🚪', color: 'green' },
    { label: 'Total Gifts', value: '12.5K', trend: '+23%', icon: '🎁', color: 'purple' },
    { label: 'Revenue', value: '$4,234', trend: '+15%', icon: '💰', color: 'yellow' },
  ];

  return (
    <div className="space-y-8">
      {/* KEY METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => (
          <MetricCard key={i} {...metric} />
        ))}
      </div>

      {/* RECENT ACTIVITY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* CHART PLACEHOLDER */}
        <div className="lg:col-span-2 rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Activity Over Time</h3>
          <div className="h-64 flex items-end justify-between gap-2">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t opacity-80 hover:opacity-100 transition"
                style={{ height: `${Math.random() * 100}%` }}
              />
            ))}
          </div>
          <p className="text-gray-400 text-xs mt-4 text-center">Last 24 Hours</p>
        </div>

        {/* QUICK ACTIONS */}
        <div className="space-y-4">
          <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <QuickActionButton icon={<Plus size={18} />} label="Create Room" />
              <QuickActionButton icon={<Gift size={18} />} label="Add Gift" />
              <QuickActionButton icon={<DollarSign size={18} />} label="Add Store Item" />
              <QuickActionButton icon={<Users size={18} />} label="Verify User" />
            </div>
          </div>

          {/* SYSTEM STATUS */}
          <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
            <h3 className="text-lg font-bold text-white mb-4">System Status</h3>
            <div className="space-y-3">
              <StatusItem label="Database" status="online" />
              <StatusItem label="API Servers" status="online" />
              <StatusItem label="CDN" status="online" />
              <StatusItem label="Voice Service" status="online" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// USERS MANAGEMENT
// ============================================
function UsersSection() {
  const [users, setUsers] = useState([
    {
      id: '11111111',
      username: 'Luna_Night',
      email: 'luna@example.com',
      level: 45,
      status: 'online',
      rooms: 5,
      joined: '2024-03-15',
    },
    {
      id: '22222222',
      username: 'Pro_Gamer',
      email: 'pro@example.com',
      level: 38,
      status: 'offline',
      rooms: 8,
      joined: '2024-02-10',
    },
    {
      id: '33333333',
      username: 'Music_Lover',
      email: 'music@example.com',
      level: 32,
      status: 'online',
      rooms: 3,
      joined: '2024-04-01',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* CONTROLS */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 transition">
          <Download size={18} />
          Export Data
        </button>
      </div>

      {/* USERS TABLE */}
      <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600/10 border-b border-blue-500/20">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">User ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Username</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Level</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Rooms</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-500/10">
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-500/10 transition"
                >
                  <td className="px-6 py-4 text-sm font-mono text-cyan-400">{user.id}</td>
                  <td className="px-6 py-4 text-sm text-white">{user.username}</td>
                  <td className="px-6 py-4 text-sm text-gray-400">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                      Level {user.level}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`w-2 h-2 rounded-full inline-block ${
                        user.status === 'online' ? 'bg-green-500' : 'bg-gray-500'
                      }`}
                    />
                    <span className="text-sm text-gray-300 ml-2">{user.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{user.rooms}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="p-2 rounded hover:bg-blue-500/20 text-blue-400 transition">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 rounded hover:bg-yellow-500/20 text-yellow-400 transition">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 rounded hover:bg-red-500/20 text-red-400 transition">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ROOMS MANAGEMENT
// ============================================
function RoomsSection() {
  const [rooms, setRooms] = useState([
    {
      id: '12345678',
      name: 'Late Night Vibes 🌙',
      roomType: 'public',
      category: 'chat',
      owner: 'Luna_Night',
      members: 24,
      maxMembers: 50,
      created: '2024-04-10',
      status: 'active',
    },
    {
      id: '87654321',
      name: 'Gaming Legends 🎮',
      roomType: 'private',
      category: 'games',
      owner: 'Pro_Gamer',
      members: 45,
      maxMembers: 50,
      created: '2024-04-08',
      status: 'active',
    },
  ]);

  return (
    <div className="space-y-6">
      {/* CONTROLS */}
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 transition">
          <Plus size={18} />
          Create Room
        </button>
        <button className="px-4 py-2 rounded-lg border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 transition">
          <Filter size={18} className="inline mr-2" />
          Filter
        </button>
      </div>

      {/* ROOMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <RoomAdminCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
}

// ============================================
// GIFTS MANAGEMENT
// ============================================
function GiftsSection() {
  const [gifts, setGifts] = useState([
    { id: '1', name: 'Rose', icon: '🌹', price: 50, category: 'love', rarity: 'common' },
    { id: '2', name: 'Diamond', icon: '💎', price: 100, category: 'appreciation', rarity: 'rare' },
    { id: '3', name: 'Crown', icon: '👑', price: 300, category: 'celebration', rarity: 'epic' },
    { id: '4', name: 'Meteor', icon: '☄️', price: 500, category: 'celebration', rarity: 'legendary' },
  ]);

  return (
    <div className="space-y-6">
      {/* ADD GIFT */}
      <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 transition">
        <Plus size={18} />
        Add New Gift
      </button>

      {/* GIFTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {gifts.map((gift) => (
          <GiftAdminCard key={gift.id} gift={gift} />
        ))}
      </div>
    </div>
  );
}

// ============================================
// STORE MANAGEMENT
// ============================================
function StoreSection() {
  const [storeItems, setStoreItems] = useState([
    { id: '1', name: '500 Coins', amount: 500, price: 4.99, type: 'coins', featured: false },
    { id: '2', name: '2,500 Coins', amount: 2500, price: 19.99, type: 'coins', featured: true },
    { id: '3', name: '10 Crystals', amount: 10, price: 9.99, type: 'crystals', featured: false },
    { id: '4', name: '50 Crystals', amount: 50, price: 39.99, type: 'crystals', featured: true },
  ]);

  return (
    <div className="space-y-6">
      {/* ADD ITEM */}
      <button className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold flex items-center gap-2 transition">
        <Plus size={18} />
        Add Store Item
      </button>

      {/* STORE ITEMS */}
      <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-blue-600/10 border-b border-blue-500/20">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Item Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Featured</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-500/10">
              {storeItems.map((item) => (
                <tr key={item.id} className="hover:bg-blue-500/10 transition">
                  <td className="px-6 py-4 text-sm text-white">{item.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === 'coins'
                        ? 'bg-yellow-500/20 text-yellow-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-300">{item.amount}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-white">${item.price}</td>
                  <td className="px-6 py-4">
                    <input type="checkbox" checked={item.featured} className="rounded" />
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="p-2 rounded hover:bg-yellow-500/20 text-yellow-400 transition">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 rounded hover:bg-red-500/20 text-red-400 transition">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ANALYTICS SECTION
// ============================================
function AnalyticsSection() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="User Growth" />
        <ChartCard title="Revenue Trend" />
        <ChartCard title="Room Activity" />
        <ChartCard title="Gift Distribution" />
      </div>
    </div>
  );
}

// ============================================
// SETTINGS SECTION
// ============================================
function SettingsSection() {
  const [settings, setSettings] = useState({
    appName: 'SoulStar',
    maxRoomSize: 50,
    minPasswordLength: 8,
    maintenanceMode: false,
    emailNotifications: true,
  });

  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6 max-w-2xl">
        <h3 className="text-xl font-bold text-white mb-6">System Settings</h3>

        <div className="space-y-6">
          {/* APP NAME */}
          <SettingField label="App Name" type="text" value={settings.appName} />

          {/* MAX ROOM SIZE */}
          <SettingField label="Max Room Size" type="number" value={settings.maxRoomSize} />

          {/* PASSWORD LENGTH */}
          <SettingField label="Min Password Length" type="number" value={settings.minPasswordLength} />

          {/* TOGGLES */}
          <div className="flex items-center justify-between py-3 border-b border-blue-500/10">
            <span className="text-white">Maintenance Mode</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={settings.maintenanceMode} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
            </label>
          </div>

          <div className="flex items-center justify-between py-3 border-b border-blue-500/10">
            <span className="text-white">Email Notifications</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked={settings.emailNotifications} className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600" />
            </label>
          </div>

          {/* SAVE BUTTON */}
          <button className="w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// HELPER COMPONENTS
// ============================================

function SidebarItem({
  icon,
  label,
  active,
  onClick,
  isCollapsed,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  isCollapsed: boolean;
  badge?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
        active
          ? 'bg-blue-600 text-white'
          : 'text-gray-400 hover:bg-blue-500/20 hover:text-blue-300'
      }`}
    >
      <div className="flex items-center gap-3">
        {icon}
        {!isCollapsed && <span>{label}</span>}
      </div>
      {!isCollapsed && badge && (
        <span className="px-2 py-0.5 rounded-full bg-white/10 text-xs text-gray-300">
          {badge}
        </span>
      )}
    </button>
  );
}

function MetricCard({
  label,
  value,
  trend,
  icon,
  color,
}: {
  label: string;
  value: string;
  trend: string;
  icon: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    blue: 'from-blue-600/20 to-cyan-600/20 border-blue-500/20',
    green: 'from-green-600/20 to-emerald-600/20 border-green-500/20',
    purple: 'from-purple-600/20 to-pink-600/20 border-purple-500/20',
    yellow: 'from-yellow-600/20 to-orange-600/20 border-yellow-500/20',
  };

  return (
    <div className={`rounded-xl bg-gradient-to-br ${colors[color]} border p-6`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-green-400 text-sm font-semibold">{trend}</span>
      </div>
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <p className="text-3xl font-bold text-white">{value}</p>
    </div>
  );
}

function QuickActionButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="w-full flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-500/20 text-gray-300 hover:text-blue-300 transition">
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}

function StatusItem({ label, status }: { label: string; status: 'online' | 'offline' }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-300 text-sm">{label}</span>
      <span className={`flex items-center gap-2 text-xs font-semibold ${
        status === 'online' ? 'text-green-400' : 'text-red-400'
      }`}>
        <span className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-green-500' : 'bg-red-500'}`} />
        {status}
      </span>
    </div>
  );
}

function RoomAdminCard({ room }: { room: any }) {
  return (
    <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6 hover:border-blue-500/40 transition">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-bold text-white text-lg mb-1">{room.name}</h4>
          <p className="text-sm text-gray-400">by {room.owner}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          room.roomType === 'public'
            ? 'bg-green-500/20 text-green-300'
            : 'bg-red-500/20 text-red-300'
        }`}>
          {room.roomType}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-blue-500/10">
        <div>
          <p className="text-gray-400 text-xs">Members</p>
          <p className="text-lg font-bold text-white">{room.members}/{room.maxMembers}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xs">Category</p>
          <p className="text-lg font-bold text-white capitalize">{room.category}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 px-3 py-2 rounded-lg hover:bg-blue-500/20 text-blue-300 text-sm transition">
          <Eye size={14} className="inline mr-2" />
          View
        </button>
        <button className="flex-1 px-3 py-2 rounded-lg hover:bg-yellow-500/20 text-yellow-300 text-sm transition">
          <Edit2 size={14} className="inline mr-2" />
          Edit
        </button>
        <button className="flex-1 px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-300 text-sm transition">
          <Trash2 size={14} className="inline mr-2" />
          Delete
        </button>
      </div>
    </div>
  );
}

function GiftAdminCard({ gift }: { gift: any }) {
  return (
    <div className="rounded-lg bg-gray-800/50 border border-blue-500/20 p-4 hover:border-blue-500/40 transition">
      <div className="text-4xl mb-3 text-center">{gift.icon}</div>
      <h4 className="font-bold text-white text-center mb-2">{gift.name}</h4>
      <p className="text-gray-400 text-xs text-center mb-3">{gift.price} coins</p>

      <div className="flex gap-2">
        <button className="flex-1 px-2 py-1.5 rounded text-xs hover:bg-yellow-500/20 text-yellow-300 transition">
          <Edit2 size={12} className="inline" />
        </button>
        <button className="flex-1 px-2 py-1.5 rounded text-xs hover:bg-red-500/20 text-red-300 transition">
          <Trash2 size={12} className="inline" />
        </button>
      </div>
    </div>
  );
}

function ChartCard({ title }: { title: string }) {
  return (
    <div className="rounded-xl bg-gray-800/50 border border-blue-500/20 p-6">
      <h3 className="text-lg font-bold text-white mb-4">{title}</h3>
      <div className="h-64 flex items-end justify-between gap-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t hover:opacity-100 opacity-80 transition"
            style={{ height: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function SettingField({
  label,
  type,
  value,
}: {
  label: string;
  type: string;
  value: string | number;
}) {
  return (
    <div className="py-3 border-b border-blue-500/10">
      <label className="block text-sm text-gray-300 mb-2">{label}</label>
      <input
        type={type}
        defaultValue={value}
        className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-blue-500/20 text-white focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
