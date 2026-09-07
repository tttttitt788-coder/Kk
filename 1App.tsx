import React, { useState, useEffect } from 'react';
import {
  Home,
  MessageCircle,
  User,
  ShoppingBag,
  Menu,
  X,
  Plus,
  Search,
  Bell,
  Settings,
  LogOut,
  Mic,
  MicOff,
  Volume2,
  Users,
  Flame,
  Sparkles,
  Zap,
} from 'lucide-react';
import { createBrowserClient } from '@supabase/ssr';

// ============================================
// MAIN APP
// ============================================
export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'rooms' | 'profile' | 'shop'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserOnline, setIsUserOnline] = useState(true);
  const [unreadNotifications, setUnreadNotifications] = useState(3);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // Simulate Realtime Updates
    const interval = setInterval(() => {
      setIsUserOnline(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-purple-500/20 bg-slate-950/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SoulStar
            </h1>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            <NavButton
              icon={<Home size={20} />}
              label="Home"
              active={currentPage === 'home'}
              onClick={() => setCurrentPage('home')}
            />
            <NavButton
              icon={<MessageCircle size={20} />}
              label="Rooms"
              active={currentPage === 'rooms'}
              onClick={() => setCurrentPage('rooms')}
            />
            <NavButton
              icon={<ShoppingBag size={20} />}
              label="Shop"
              active={currentPage === 'shop'}
              onClick={() => setCurrentPage('shop')}
            />
            <NavButton
              icon={<User size={20} />}
              label="Profile"
              active={currentPage === 'profile'}
              onClick={() => setCurrentPage('profile')}
            />
          </nav>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-purple-300 hover:text-purple-100 transition">
              <Bell size={20} />
              {unreadNotifications > 0 && (
                <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
              )}
            </button>

            <button className="px-4 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-purple-100 transition border border-purple-500/30">
              <Settings size={20} />
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-purple-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-purple-500/20 bg-slate-900/50 backdrop-blur-lg p-4 flex flex-col gap-2">
            <MobileNavButton active={currentPage === 'home'} onClick={() => setCurrentPage('home')}>
              <Home size={20} /> Home
            </MobileNavButton>
            <MobileNavButton active={currentPage === 'rooms'} onClick={() => setCurrentPage('rooms')}>
              <MessageCircle size={20} /> Rooms
            </MobileNavButton>
            <MobileNavButton active={currentPage === 'shop'} onClick={() => setCurrentPage('shop')}>
              <ShoppingBag size={20} /> Shop
            </MobileNavButton>
            <MobileNavButton active={currentPage === 'profile'} onClick={() => setCurrentPage('profile')}>
              <User size={20} /> Profile
            </MobileNavButton>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'rooms' && <RoomsPage />}
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'profile' && <ProfilePage />}
      </main>
    </div>
  );
}

// ============================================
// HOME PAGE
// ============================================
function HomePage() {
  const [trendingRooms, setTrendingRooms] = useState<any[]>([
    {
      id: '12345678',
      name: 'Late Night Vibes 🌙',
      category: 'chat',
      members: 24,
      maxMembers: 50,
      thumbnail: '🌙',
      owner: 'Luna',
      trending: true,
    },
    {
      id: '87654321',
      name: 'Gaming Legends 🎮',
      category: 'games',
      members: 42,
      maxMembers: 50,
      thumbnail: '🎮',
      owner: 'Pro_Gamer',
      trending: true,
    },
    {
      id: '54321678',
      name: 'Music Lovers 🎵',
      category: 'music',
      members: 18,
      maxMembers: 50,
      thumbnail: '🎵',
      owner: 'DJ_Echo',
      trending: true,
    },
  ]);

  return (
    <div className="space-y-12">
      {/* HERO SECTION */}
      <section className="relative rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-10 blur-3xl" />
        <div className="relative bg-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome Back to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">SoulStar</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Connect with amazing people through voice, make new friends, and join vibrant communities.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition flex items-center justify-center gap-2">
                <Plus size={20} />
                Create Room
              </button>
              <button className="px-6 py-3 rounded-lg border border-purple-500/50 hover:border-purple-400 text-purple-300 hover:text-purple-100 font-semibold transition">
                Explore Rooms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard icon={<Users size={24} />} label="Online Users" value="2,847" trend="+12%" />
        <StatCard icon={<MessageCircle size={24} />} label="Active Rooms" value="156" trend="+8%" />
        <StatCard icon={<Flame size={24} />} label="Total Gifts Sent" value="12.5K" trend="+23%" />
        <StatCard icon={<Zap size={24} />} label="Your Level" value="42" trend="+2 XP" />
      </section>

      {/* TRENDING ROOMS */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Flame className="text-orange-500" />
            Trending Now
          </h3>
          <a href="#" className="text-purple-400 hover:text-purple-300 text-sm">
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendingRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      {/* FEATURED USERS */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">People You Might Know</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { id: '11111111', name: 'Alexandra', status: 'In Gaming Room', avatar: '👩' },
            { id: '22222222', name: 'Marcus', status: 'Hosting Music Session', avatar: '👨' },
            { id: '33333333', name: 'Sophie', status: 'Online', avatar: '👩‍🦰' },
            { id: '44444444', name: 'James', status: 'Offline', avatar: '👨‍🦱' },
          ].map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// ROOMS PAGE
// ============================================
function RoomsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [rooms, setRooms] = useState<any[]>([
    {
      id: '12345678',
      name: 'Night Owls Club',
      category: 'chat',
      members: 28,
      maxMembers: 50,
      thumbnail: '🦉',
      owner: 'Luna',
      isFeatured: true,
    },
    {
      id: '87654321',
      name: 'FPS Champions',
      category: 'games',
      members: 45,
      maxMembers: 50,
      thumbnail: '🎮',
      owner: 'Pro_Gamer',
      isFeatured: false,
    },
    // ... more rooms
  ]);

  const categories = [
    { icon: '💬', name: 'chat', label: 'Chat' },
    { icon: '🎵', name: 'music', label: 'Music' },
    { icon: '🎮', name: 'games', label: 'Games' },
    { icon: '📚', name: 'education', label: 'Learning' },
    { icon: '⛪', name: 'religion', label: 'Religion' },
    { icon: '⚽', name: 'sports', label: 'Sports' },
    { icon: '😂', name: 'comedy', label: 'Comedy' },
  ];

  return (
    <div className="space-y-8">
      {/* SEARCH & FILTERS */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-purple-400" size={20} />
          <input
            type="text"
            placeholder="Search rooms, topics, or users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* CATEGORY FILTER */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition ${
              selectedCategory === null
                ? 'bg-purple-600 text-white'
                : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
            }`}
          >
            All Rooms
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === cat.name
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ROOMS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* CREATE ROOM BUTTON */}
      <div className="fixed bottom-8 right-8">
        <button className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition transform hover:scale-110">
          <Plus size={28} />
        </button>
      </div>
    </div>
  );
}

// ============================================
// SHOP PAGE
// ============================================
function ShopPage() {
  const [userCoins, setUserCoins] = useState(5432);
  const [userCrystals, setUserCrystals] = useState(125);

  const storeItems = [
    {
      id: 'coins_500',
      name: '500 Coins',
      amount: 500,
      priceUsd: 4.99,
      icon: '🪙',
      featured: false,
    },
    {
      id: 'coins_2500',
      name: '2,500 Coins',
      amount: 2500,
      priceUsd: 19.99,
      icon: '🪙',
      featured: true,
    },
    {
      id: 'crystals_10',
      name: '10 Crystals',
      amount: 10,
      priceUsd: 9.99,
      icon: '💎',
      featured: false,
    },
    {
      id: 'crystals_50',
      name: '50 Crystals',
      amount: 50,
      priceUsd: 39.99,
      icon: '💎',
      featured: true,
    },
  ];

  const gifts = [
    { id: '1', name: 'Rose', icon: '🌹', price: 50 },
    { id: '2', name: 'Heart', icon: '❤️', price: 50 },
    { id: '3', name: 'Diamond', icon: '💎', price: 100 },
    { id: '4', name: 'Fireworks', icon: '🎆', price: 200 },
    { id: '5', name: 'Crown', icon: '👑', price: 300 },
    { id: '6', name: 'Meteor', icon: '☄️', price: 500 },
  ];

  return (
    <div className="space-y-12">
      {/* WALLET DISPLAY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <WalletCard type="coins" amount={userCoins} />
        <WalletCard type="crystals" amount={userCrystals} />
      </div>

      {/* CURRENCY PACKAGES */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Get Coins & Crystals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {storeItems.map((item) => (
            <StoreItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* GIFTS */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Send Gifts</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {gifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} userCoins={userCoins} />
          ))}
        </div>
      </section>
    </div>
  );
}

// ============================================
// PROFILE PAGE
// ============================================
function ProfilePage() {
  const [user, setUser] = useState({
    id: '12345678',
    username: 'SoulStar_User',
    avatarUrl: '👤',
    bio: '🎵 Music lover | 🎮 Gamer | 💬 Chatter',
    level: 42,
    coins: 5432,
    crystals: 125,
    roomsCreated: 8,
    followers: 342,
    following: 156,
    joinedAt: 'Mar 2024',
  });

  return (
    <div className="space-y-8">
      {/* PROFILE HEADER */}
      <div className="rounded-2xl bg-gradient-to-b from-purple-600/20 to-transparent border border-purple-500/20 p-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-6xl border-4 border-purple-400">
            {user.avatarUrl}
          </div>

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-2">{user.username}</h2>
            <p className="text-gray-300 mb-4">{user.bio}</p>

            <div className="flex flex-wrap gap-4 mb-4">
              <ProfileStat label="Level" value={user.level} icon="⭐" />
              <ProfileStat label="Followers" value={user.followers} icon="👥" />
              <ProfileStat label="Following" value={user.following} icon="👤" />
            </div>

            <div className="flex gap-3">
              <button className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition">
                Edit Profile
              </button>
              <button className="px-6 py-2 rounded-lg border border-purple-500/50 text-purple-300 hover:text-purple-100 transition">
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <ProfileStatCard label="Rooms Created" value={user.roomsCreated} icon="🚪" />
        <ProfileStatCard label="Coins" value={user.coins} icon="🪙" />
        <ProfileStatCard label="Crystals" value={user.crystals} icon="💎" />
        <ProfileStatCard label="Joined" value={user.joinedAt} icon="📅" />
      </div>

      {/* ACTIVITY */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Recent Activity</h3>
        <div className="space-y-3">
          <ActivityItem type="gift" message="Sent 🌹 Rose to Luna in Gaming Room" time="2 hours ago" />
          <ActivityItem type="room" message="Created new room: Music Vibes 🎵" time="5 hours ago" />
          <ActivityItem type="follow" message="Started following Alex_Pro" time="1 day ago" />
          <ActivityItem type="level" message="Reached Level 42" time="2 days ago" />
        </div>
      </section>
    </div>
  );
}

// ============================================
// COMPONENTS
// ============================================

function NavButton({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        active
          ? 'bg-purple-600 text-white'
          : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
      }`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function MobileNavButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition ${
        active
          ? 'bg-purple-600 text-white'
          : 'text-gray-300 hover:bg-purple-600/20'
      }`}
    >
      {children}
    </button>
  );
}

function StatCard({
  icon,
  label,
  value,
  trend,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-lg bg-slate-800/50 border border-purple-500/20 p-6 hover:border-purple-500/40 transition">
      <div className="flex items-center justify-between mb-2">
        <span className="text-purple-400">{icon}</span>
        <span className="text-green-400 text-sm font-semibold">{trend}</span>
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function RoomCard({ room }: { room: any }) {
  const percentage = (room.members / room.maxMembers) * 100;
  return (
    <div className="rounded-xl bg-slate-800/50 border border-purple-500/20 hover:border-purple-500/40 overflow-hidden transition hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer group">
      <div className="p-6">
        {/* ROOM HEADER */}
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{room.thumbnail}</div>
          {room.isFeatured && (
            <span className="px-2 py-1 rounded-full bg-purple-600/30 text-purple-300 text-xs font-semibold">
              Featured
            </span>
          )}
        </div>

        {/* ROOM INFO */}
        <h4 className="font-bold text-white mb-1 text-lg">{room.name}</h4>
        <p className="text-gray-400 text-sm mb-4">by {room.owner}</p>

        {/* MEMBERS PROGRESS */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">
              {room.members}/{room.maxMembers} members
            </span>
            <span className="text-purple-400 text-sm font-semibold">{percentage.toFixed(0)}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-700">
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* JOIN BUTTON */}
        <button className="w-full px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold transition">
          Join Room
        </button>
      </div>
    </div>
  );
}

function UserCard({ user }: { user: any }) {
  return (
    <div className="rounded-lg bg-slate-800/50 border border-purple-500/20 p-4 hover:border-purple-500/40 transition text-center">
      <div className="text-3xl mb-3">{user.avatar}</div>
      <h4 className="font-bold text-white mb-1">{user.name}</h4>
      <p className="text-gray-400 text-sm mb-4">{user.status}</p>
      <button className="w-full px-3 py-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 text-sm font-semibold transition">
        Add Friend
      </button>
    </div>
  );
}

function WalletCard({ type, amount }: { type: 'coins' | 'crystals'; amount: number }) {
  const isCoins = type === 'coins';
  return (
    <div
      className={`rounded-xl border p-8 ${
        isCoins
          ? 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30'
          : 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30'
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-2">{isCoins ? 'Your Coins' : 'Your Crystals'}</p>
          <p className="text-4xl font-bold text-white">{amount.toLocaleString()}</p>
        </div>
        <div className="text-6xl">{isCoins ? '🪙' : '💎'}</div>
      </div>
      <button className={`w-full mt-4 px-4 py-2 rounded-lg font-semibold transition ${
        isCoins
          ? 'bg-yellow-600 hover:bg-yellow-500 text-white'
          : 'bg-blue-600 hover:bg-blue-500 text-white'
      }`}>
        Get More
      </button>
    </div>
  );
}

function StoreItemCard({ item }: { item: any }) {
  const isCrystal = item.icon === '💎';
  return (
    <div className={`rounded-lg border p-6 hover:border-opacity-100 transition cursor-pointer ${
      item.featured
        ? `bg-gradient-to-br ${isCrystal ? 'from-blue-600/20 to-blue-600/5' : 'from-yellow-600/20 to-yellow-600/5'} border-${isCrystal ? 'blue' : 'yellow'}-500/50`
        : `bg-slate-800/50 border-purple-500/20`
    }`}
    >
      {item.featured && (
        <div className="mb-2 inline-block px-2 py-1 rounded-full bg-purple-600/30 text-purple-300 text-xs font-semibold">
          Best Value
        </div>
      )}
      <div className="text-4xl mb-3">{item.icon}</div>
      <h4 className="font-bold text-white mb-1">{item.name}</h4>
      <p className="text-gray-400 text-sm mb-4">{item.amount.toLocaleString()} items</p>
      <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold transition">
        ${item.priceUsd}
      </button>
    </div>
  );
}

function GiftCard({ gift, userCoins }: { gift: any; userCoins: number }) {
  const canAfford = userCoins >= gift.price;
  return (
    <div className={`rounded-lg border p-4 transition cursor-pointer ${
      canAfford
        ? 'bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40'
        : 'bg-slate-900/50 border-gray-600/20 opacity-50'
    }`}
    >
      <div className="text-3xl mb-2 text-center">{gift.icon}</div>
      <p className="text-white text-sm font-semibold text-center mb-2">{gift.name}</p>
      <p className={`text-center text-sm font-bold ${
        canAfford ? 'text-yellow-400' : 'text-gray-500'
      }`}>
        {gift.price}
      </p>
    </div>
  );
}

function ProfileStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: number | string;
  icon: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-gray-400 text-xs">{label}</p>
        <p className="text-white font-bold">{value}</p>
      </div>
    </div>
  );
}

function ProfileStatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number | string;
  icon: string;
}) {
  return (
    <div className="rounded-lg bg-slate-800/50 border border-purple-500/20 p-6 text-center">
      <p className="text-3xl mb-2">{icon}</p>
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

function ActivityItem({
  type,
  message,
  time,
}: {
  type: string;
  message: string;
  time: string;
}) {
  const icons: Record<string, string> = {
    gift: '🎁',
    room: '🚪',
    follow: '👥',
    level: '⭐',
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-purple-500/10 hover:border-purple-500/20 transition">
      <span className="text-2xl">{icons[type]}</span>
      <div className="flex-1">
        <p className="text-white">{message}</p>
        <p className="text-gray-400 text-sm">{time}</p>
      </div>
    </div>
  );
}
