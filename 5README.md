# 🎤 SoulStar - Professional Voice Chat Application

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)

**A modern, feature-rich voice chat platform built with React, TypeScript, Supabase, and Tailwind CSS**

[Features](#features) • [Tech Stack](#tech-stack) • [Getting Started](#getting-started) • [Admin Dashboard](#admin-dashboard) • [Database](#database)

</div>

---

## ✨ Features

### 🎙️ Core Voice Chat Features
- **Public & Private Voice Rooms** - Create and join voice rooms with customizable settings
- **8-Digit User IDs** - Unique identifier system for users (e.g., `12345678`)
- **8-Digit Room IDs** - Unique identifier system for rooms (e.g., `87654321`)
- **Real-time Member Management** - Live member list with status updates
- **Voice Controls** - Mic on/off, volume control, speaker selection
- **Text Chat** - Real-time messaging within rooms with Supabase Realtime

### 🎁 Gift & Reward System
- **Animated Gifts** - Send 6+ different gift types (Rose, Heart, Diamond, Fireworks, Crown, Meteor)
- **Gift Tracking** - Track all sent/received gifts
- **Categories** - Celebration, Love, Appreciation, Funny, Seasonal
- **Rarity System** - Common, Rare, Epic, Legendary gifts

### 💎 Shop & Virtual Currency
- **Dual Currency** - Coins (soft currency) and Crystals (premium currency)
- **Store Items** - Purchase coins and crystals with real money
- **Currency Packages** - 500 coins, 2500 coins, 10 crystals, 50 crystals, etc.
- **Payment Integration** - Stripe integration ready (demo mode available)
- **User Wallets** - Track balance, spending, and rewards

### 👤 User Profiles & Social
- **Customizable Profiles** - Avatar, bio, gender, age, verification status
- **User Levels** - Experience system with level progression
- **Badges & Achievements** - Earn badges for completing activities
- **Follow System** - Follow/unfollow other users
- **Activity Timeline** - View recent activities and milestones

### 🛠️ Admin Dashboard (Separate Application)
- **User Management** - View, search, filter, and manage all users
- **Room Management** - Create, edit, delete, and moderate rooms
- **Gift Management** - Add, edit, and customize gifts
- **Store Management** - Manage store items and pricing
- **Analytics & Reports** - Real-time statistics and charts
- **System Settings** - Configure app-wide settings
- **Moderation Tools** - Ban, mute, kick users; delete content

### 🎨 Modern UI/UX
- **Dark Theme** - Beautiful dark purple/blue gradient design
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Real-time Updates** - Powered by Supabase Realtime
- **Smooth Animations** - Framer Motion animations
- **Accessibility** - WCAG 2.1 AA compliant

---

## 🛠️ Tech Stack

### Frontend
- **React 19.1** - Latest React with hooks
- **TypeScript 5.9** - Type-safe development
- **Vite 7.3** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Advanced animations
- **React Router v6** - Client-side routing

### Backend & Database
- **Supabase** - PostgreSQL database + Auth + Realtime
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Robust relational database
- **Edge Functions** - Serverless functions for heavy lifting

### State Management & APIs
- **Zustand** - Lightweight state management
- **TanStack Query** - Server state management
- **Axios** - HTTP client
- **Zod** - Runtime type validation

### Voice & Video
- **LiveKit** - WebRTC-based voice/video platform (ready to integrate)
- **WebRTC** - P2P audio streaming

### Payments
- **Stripe** - Payment processing (demo mode ready)

---

## 📋 Database Schema

### Main Tables
```
users
├── id (UUID)
├── user_id_8 (VARCHAR[8]) - Unique 8-digit ID
├── username, email, avatar_url, bio
├── level, is_verified, is_online
└── timestamps

rooms
├── id (UUID)
├── room_id_8 (VARCHAR[8]) - Unique 8-digit ID
├── name, description, category
├── owner_id, room_type (public/private/password)
├── member counts, voice/video settings
└── timestamps

room_members
├── room_id, user_id
├── role (owner/admin/member)
├── is_mic_on, speaker_volume
└── timestamps

gifts
├── id (UUID)
├── name, icon_url, animation_url
├── price, category, rarity
└── display_order

gift_sends (tracking)
├── gift_id, sender_id, recipient_id
├── room_id, quantity
└── sent_at

store_items
├── name, type (coins/crystals/pass/badge)
├── amount, price (USD, Local)
├── featured flag
└── timestamps

user_wallets
├── user_id, coins, crystals
├── total_spent_usd
└── reward tracking

chat_messages
├── room_id, user_id
├── content, message_type
├── attachment_url
└── timestamps
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 20.0 or higher
- **pnpm** or npm
- Supabase account (free tier available)
- LiveKit account (optional, for voice)

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/soulstar
cd soulstar
```

2. **Install Dependencies**
```bash
pnpm install
# or
npm install
```

3. **Setup Environment Variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_LIVEKIT_URL=your_livekit_url
VITE_STRIPE_PUBLIC_KEY=your_stripe_key
```

4. **Setup Database**
```bash
# Push schema to Supabase
pnpm db:push

# Or migrate
pnpm db:migrate
```

5. **Run Development Server**
```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📱 Application Structure

### Main App (`/src/App.tsx`)
**Pages:**
- **Home** - Trending rooms, featured users, quick stats
- **Rooms** - Browse, search, filter, and join voice rooms
- **Shop** - Purchase coins/crystals and send gifts
- **Profile** - User profile, stats, activity timeline

**Features:**
- Navigation header with notifications
- Real-time online status
- Responsive mobile menu
- User wallet display

### Admin Dashboard (`/src/AdminDashboard.tsx`)
**Sections:**
- **Dashboard** - Overview with key metrics and charts
- **Users** - Searchable user table with management tools
- **Rooms** - Create, edit, delete rooms with bulk actions
- **Gifts** - Manage gift catalog (add, edit, delete, rarity)
- **Store** - Manage store items, pricing, featured items
- **Analytics** - Charts, trends, revenue reports
- **Settings** - System-wide configuration

**Access:** Separate app at `/admin` (authentication required)

---

## 🎯 Key Features Explained

### User ID System (8 digits)
Each user gets a unique 8-digit ID:
- **Generated automatically** on signup
- **Format**: Random 8-digit number (10000000 - 99999999)
- **Used for**: Quick user identification, sharing profiles
- **Example**: User `12345678`

### Room ID System (8 digits)
Each room gets a unique 8-digit ID:
- **Generated automatically** on room creation
- **Format**: Random 8-digit number (10000000 - 99999999)
- **Used for**: Quick room joining, room links
- **Example**: Room `87654321`

### Gift System
- **6+ Gift Types**: Rose 🌹, Heart ❤️, Diamond 💎, Fireworks 🎆, Crown 👑, Meteor ☄️
- **Animated Renders**: Smooth animations when sent
- **Tracking**: Admin can see all gift sends
- **Pricing**: Variable pricing from 50 to 500 coins
- **Admin Control**: Edit gift properties from dashboard

### Currency System
- **Coins** (Soft Currency):
  - Free-to-play currency
  - Earned through activities
  - Used for gifts and cosmetics
  
- **Crystals** (Premium Currency):
  - Purchased with real money
  - Limited supply
  - Higher-value items

---

## 🛡️ Admin Dashboard Controls

### Full Control Over Everything
The admin dashboard provides complete control:

#### Users Section
- ✅ Search and filter users
- ✅ View user profiles and stats
- ✅ Verify/unverify users
- ✅ Ban/unban users
- ✅ Delete user accounts
- ✅ Export user data

#### Rooms Section
- ✅ View all rooms with stats
- ✅ Create new rooms
- ✅ Edit room settings (name, description, category, type)
- ✅ Delete rooms
- ✅ Featured room management
- ✅ Bulk actions

#### Gifts Section
- ✅ Add new gifts
- ✅ Edit gift properties (name, icon, animation)
- ✅ Set gift prices
- ✅ Manage rarity levels
- ✅ Control display order
- ✅ Enable/disable gifts

#### Store Section
- ✅ Add new store items
- ✅ Edit pricing (USD, local currencies)
- ✅ Manage featured items
- ✅ Control availability
- ✅ Bulk price updates

#### Settings Section
- ✅ App configuration
- ✅ Feature flags (voice, video, payments)
- ✅ Maintenance mode
- ✅ Email settings
- ✅ Security settings

#### Analytics
- ✅ User growth charts
- ✅ Revenue trends
- ✅ Room activity
- ✅ Gift distribution
- ✅ Export reports

---

## 🔐 Authentication

### User Registration
- Email + Password
- Optional: Phone verification
- Custom avatar selection
- Bio and profile setup

### Admin Access
- Separate authentication
- Admin-only endpoints
- Audit logging
- Session management

---

## 💰 Payment Integration

### Stripe Integration
- Ready for production
- Demo mode for testing
- Support for multiple currencies
- Receipt generation
- Refund handling

### Store Packages (Examples)
```
💰 Coins:
- 500 coins - $4.99
- 2,500 coins - $19.99 (Best Value)
- 5,000 coins - $34.99

💎 Crystals:
- 10 crystals - $9.99
- 50 crystals - $39.99 (Best Value)
- 100 crystals - $69.99
```

---

## 📊 Real-time Features

### Supabase Realtime
- **User Status** - Online/offline updates
- **Room Members** - Join/leave notifications
- **Messages** - Real-time chat
- **Gifts** - Live gift sends
- **Room Updates** - Member count, settings changes

### Subscription Example
```typescript
// Subscribe to room members
const subscription = supabase
  .channel(`room:${roomId}`)
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'room_members' },
    (payload) => handleUpdate(payload)
  )
  .subscribe()
```

---

## 🎨 Customization

### Themes
The app uses Tailwind CSS v4 with custom color scheme:
- **Primary**: Purple/Pink gradient
- **Secondary**: Blue/Cyan
- **Dark**: Slate-950 to Gray-900
- **Accents**: Purple, Pink, Blue, Yellow

### Icons
All icons from **Lucide React** - 500+ options

### Animations
**Framer Motion** for smooth animations:
- Page transitions
- Card hovers
- Loading states
- Gift animations

---

## 📦 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t soulstar .
docker run -p 5173:5173 soulstar
```

### Self-hosted
```bash
pnpm build
pnpm preview
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🎯 Roadmap

- [x] Core voice chat
- [x] Gift system
- [x] Shop and currency
- [x] Admin dashboard
- [ ] Mobile app (React Native)
- [ ] Video chat support
- [ ] Game integration
- [ ] AI recommendations
- [ ] Multi-language support
- [ ] Advanced analytics

---

## 📞 Support

- 📧 Email: support@soulstar.app
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/soulstar/issues)
- 💬 Discord: [Join Server](https://discord.gg/soulstar)

---

## 👨‍💻 Built with ❤️ by the SoulStar Team

**Version:** 1.0.0  
**Last Updated:** 2024

---

<div align="center">

⭐ If you found this helpful, please consider giving it a star!

[⬆ back to top](#-soulstar---professional-voice-chat-application)

</div>
