# 🛠️ SoulStar Admin Dashboard - Complete Guide

<div align="center">

**Master Control Panel for SoulStar Voice Chat Application**

[Dashboard](#-dashboard-overview) • [Users](#-user-management) • [Rooms](#-room-management) • [Gifts](#-gift-management) • [Store](#-store-management) • [Settings](#-system-settings)

</div>

---

## 📊 Dashboard Overview

### What You See
The main dashboard provides a complete system overview:

```
┌─────────────────────────────────────────────────────────┐
│                    KEY METRICS CARDS                    │
├─────────────────────────────────────────────────────────┤
│ 👥 Total Users      │ 🚪 Active Rooms     │ 🎁 Gifts     │
│ 2,847               │ 156                 │ 12.5K        │
│ +12% this month     │ +8% this week       │ +23% daily   │
├─────────────────────────────────────────────────────────┤
│                   ACTIVITY CHART (24H)                  │
│                   [Colored bars showing activity peaks] │
├─────────────────────────────────────────────────────────┤
│              SYSTEM STATUS         │    QUICK ACTIONS    │
│ ✅ Database: Online                │ ➕ Create Room      │
│ ✅ API Servers: Online             │ 🎁 Add Gift         │
│ ✅ CDN: Online                     │ 💰 Add Store Item   │
│ ✅ Voice Service: Online           │ 👤 Verify User      │
└─────────────────────────────────────────────────────────┘
```

### Metrics Explained
- **Total Users**: Active user count with trend
- **Active Rooms**: Currently running voice rooms
- **Total Gifts**: Sum of all gifts sent
- **Revenue**: Monthly revenue from store purchases

---

## 👥 User Management

### Access
Click **Users** in the sidebar

### View All Users
```
Search Bar: Find users by username or email
Filter Options: 
├── Status (Online/Offline)
├── Level Range
├── Joined Date
└── Verification Status
```

### User Table Columns
| Column | Description |
|--------|-------------|
| **User ID (8-digit)** | Unique identifier (e.g., `12345678`) |
| **Username** | Display name |
| **Email** | Contact email |
| **Level** | User experience level |
| **Status** | Online/Offline indicator |
| **Rooms Created** | Number of rooms they own |
| **Actions** | View, Edit, Delete |

### User Actions

#### 👁️ View User Profile
```
Click View Icon → See full profile:
├── Avatar & Bio
├── Level & Experience
├── Badges & Achievements
├── Followers/Following
├── Activity Timeline
├── Rooms Created
├── Total Spent (USD)
└── Account Settings
```

#### ✏️ Edit User
```
Click Edit Icon → Modify:
├── Username (if not taken)
├── Email
├── Bio
├── Avatar URL
├── Gender/Age
├── Verification Status
├── Account Status (Active/Suspended)
└── Level Adjustment
```

#### 🗑️ Delete User
```
Click Delete Icon → Confirm deletion:
⚠️  This will:
├── Delete all their rooms (content stays)
├── Delete their profile
├── Clear their wallet
├── Refund outstanding currency
├── Keep transaction history
└── Send deletion confirmation email
```

#### Bulk Actions
```
Select Multiple Users → Perform batch operations:
├── Verify All
├── Send Announcement
├── Adjust Levels (all)
├── Suspend/Ban
├── Export Data
└── Send Credits
```

### Common Use Cases

#### Verify a New User
1. Search for user by username
2. Click **View** 
3. Confirm details
4. Click **Edit**
5. Toggle **Verification Status** to ON
6. Save

#### Ban a User
1. Find user
2. Click **Edit**
3. Set **Account Status** to "Suspended"
4. Add **Reason** (abuse, harassment, etc.)
5. Set **Duration** (24h, 7d, permanent)
6. Save & Notify User

#### Give User Currency as Reward
1. Find user
2. Click **View**
3. Click **Add Credits** button
4. Select type (Coins/Crystals)
5. Enter amount
6. Add reason/note
7. Confirm

---

## 🚪 Room Management

### Access
Click **Rooms** in the sidebar

### View All Rooms
```
Filter Options:
├── Room Type (Public/Private/Password)
├── Category (Chat/Music/Games/etc.)
├── Status (Active/Inactive)
├── Owner
├── Member Count Range
└── Date Created
```

### Room Table/Cards
Shows:
- Room Name & ID (8-digit)
- Room Type & Category
- Owner Name
- Current Members / Max Members
- Status (Active/Inactive)
- Created Date
- Actions (View, Edit, Delete)

### Room Actions

#### 👁️ View Room Details
```
Shows:
├── Room Statistics
│   ├── Total Members
│   ├── Active Members Now
│   ├── Total Messages
│   └── Gift Count
├── Members List (with roles)
├── Chat History
├── Settings
└── Moderation Options
```

#### ✏️ Edit Room
```
Editable Fields:
├── Room Name
├── Description
├── Category (Chat/Music/Games/Education/Religion/Sports/Comedy/Other)
├── Thumbnail/Icon
├── Room Type (Public/Private/Password)
│   └── Password (if Private)
├── Max Members
├── Voice Enabled (Toggle)
├── Video Enabled (Toggle)
├── Featured Status (Homepage visibility)
└── Description
```

#### 🗑️ Delete Room
```
Click Delete → Confirm:
⚠️  This will:
├── Archive room data
├── Notify all members
├── Clear active connections
├── Keep chat history (archived)
└── Refund member activities
```

#### 🛡️ Moderate Room
```
Moderation Options:
├── Mute All (prevent chat)
├── Lock Voice (stop new connections)
├── Clear Chat History
├── Ban Specific Users
├── Send System Message
└── Close Temporarily
```

### Common Use Cases

#### Create Emergency Broadcast Room
1. Click **+ Create Room**
2. Set **Name**: "System Announcement"
3. Set **Type**: Public
4. Set **Category**: Other
5. Toggle **Featured**: ON (shows on homepage)
6. Save
7. Post announcement message

#### Feature a Popular Room
1. Find the room
2. Click **Edit**
3. Toggle **Featured**: ON
4. Adjust **Display Order**: 1 (appears first)
5. Save

#### Remove Inappropriate Content
1. View Room
2. Click **Clear Chat History**
3. Select **Date Range** to clear
4. Confirm
5. Send notification to room owner

---

## 🎁 Gift Management

### Access
Click **Gifts** in the sidebar

### View All Gifts
```
Display Format: Grid of Gift Cards

Each Card Shows:
├── Gift Icon/Emoji (🌹, 💎, 👑, etc.)
├── Gift Name
├── Price (in coins)
├── Rarity Level
├── Category
└── Edit/Delete Buttons
```

### Gift Properties

| Property | Options | Example |
|----------|---------|---------|
| **Name** | Text | "Rose", "Diamond" |
| **Icon/Emoji** | Unicode emoji | 🌹, 💎, 👑 |
| **Animation URL** | Video/GIF link | `animation.mp4` |
| **Price** | Integer coins | 50, 100, 500 |
| **Category** | Multiple choice | Celebration, Love, Appreciation |
| **Rarity** | common/rare/epic/legendary | Epic |
| **Display Order** | Priority number | 1 (appears first) |
| **Active** | Toggle | ON/OFF |

### Gift Actions

#### ➕ Add New Gift
```
1. Click "+ Add New Gift"
2. Fill Form:
   ├── Gift Name
   ├── Upload/Select Icon
   ├── Upload Animation (optional)
   ├── Set Price (coins)
   ├── Select Category
   ├── Set Rarity
   ├── Set Display Order
   └── Enable/Disable
3. Click "Create Gift"
```

#### ✏️ Edit Gift
```
1. Click Edit icon on gift card
2. Modify any property:
   ├── Name
   ├── Icon
   ├── Animation
   ├── Price
   ├── Category
   ├── Rarity
   ├── Display Order
   └── Active Status
3. Click "Save Changes"
4. Changes apply immediately
```

#### 🗑️ Delete Gift
```
1. Click Delete icon
2. Confirm deletion:
   ├── Existing instances stay (history)
   ├── Can't be sent going forward
   └── Archived for records
3. Deleted gifts removed from shop
```

#### 📊 View Gift Statistics
```
Shows:
├── Total Sent (all time)
├── Sent This Month
├── Average Price Paid
├── Most Popular Users (senders/receivers)
└── Trends
```

### Gift Categories Explained

**Celebration** 🎉
- Used for special occasions
- Examples: Fireworks ☄️, Crown 👑

**Love** ❤️
- Romantic gestures
- Examples: Rose 🌹, Heart ❤️

**Appreciation** 👏
- Thank you gifts
- Examples: Diamond 💎, Star ⭐

**Funny** 😂
- Humorous/silly gifts
- Examples: Poop 💩, Ghost 👻

**Seasonal** 🎄
- Holiday/seasonal gifts
- Examples: Christmas 🎄, Fireworks 🎆

### Gift Pricing Strategy

```
Common Tiers:
├── Common (50 coins)
│   └── Rose 🌹, Heart ❤️
├── Rare (100 coins)
│   └── Diamond 💎
├── Epic (300 coins)
│   └── Crown 👑
└── Legendary (500 coins)
    └── Meteor ☄️
```

### Pro Tips for Gift Management

✅ **DO:**
- Create 1 gift every week (keeps app fresh)
- Use emojis for instant visual recognition
- Create seasonal gifts for holidays
- Monitor gift popularity (adjust prices if needed)
- Retire old gifts to archive

❌ **DON'T:**
- Make gifts too expensive (kills sending)
- Add too many similar gifts (confuses users)
- Forget to toggle "Active" (dead gifts in shop)
- Price legendary gifts too cheap (devalues them)

---

## 🛍️ Store Management

### Access
Click **Store** in the sidebar

### Store Items Table
| Column | Content |
|--------|---------|
| **Item Name** | Display name |
| **Type** | Coins/Crystals/Pass/Badge |
| **Amount** | Quantity (500 coins, 10 crystals) |
| **Price (USD)** | Amount in USD |
| **Featured** | Checkbox for homepage promotion |
| **Actions** | Edit, Delete |

### Currency Types

#### 💰 Coins (Soft Currency)
```
Purpose: In-game purchases, gifts, rewards
Pricing Tier:
├── 500 coins = $4.99
├── 2,500 coins = $19.99 (20% bonus)
└── 5,000 coins = $34.99 (25% bonus)

Bonus Strategy:
Larger purchases give better value
→ Encourages bigger purchases
```

#### 💎 Crystals (Premium Currency)
```
Purpose: Exclusive items, premium gifts
Pricing Tier:
├── 10 crystals = $9.99
├── 50 crystals = $39.99 (15% bonus)
└── 100 crystals = $69.99 (20% bonus)

Psychology:
Higher perceived value
→ Better for exclusive items
```

#### 🎫 Passes (Subscription)
```
Examples:
├── 1-Month Premium Pass = $4.99
│   └── +50 coins daily, exclusive rooms, 10% gift discount
├── 3-Month Premium Pass = $12.99
│   └── +100 coins daily, badge, 15% gift discount
└── 1-Year Premium Pass = $39.99
    └── +200 coins daily, premium badge, 20% gift discount
```

#### 🏆 Badges
```
Cosmetic Items:
├── VIP Badge = $2.99
├── Creator Badge = $2.99
├── Moderator Badge = Free (admin-only)
└── Limited Edition Badge = $4.99 (limited stock)
```

### Store Actions

#### ➕ Add New Store Item
```
1. Click "+ Add Store Item"
2. Fill Form:
   ├── Item Name (e.g., "2500 Coins")
   ├── Type (Coins/Crystals/Pass/Badge)
   ├── Amount (500, 2500, 10, 50, etc.)
   ├── Price USD
   ├── Price Local (optional, auto-convert)
   ├── Currency
   ├── Upload Icon/Image
   ├── Display Order (affects sorting)
   ├── Featured Toggle (homepage visibility)
   └── Active Toggle
3. Click "Create Item"
```

#### ✏️ Edit Store Item
```
1. Click Edit icon
2. Modify:
   ├── Price (update all prices at once option)
   ├── Amount
   ├── Featured Status
   ├── Active Status
   ├── Display Order
   └── Icon/Image
3. Save Changes
4. Updates live immediately
```

#### 📌 Set as Featured
```
Featured Items appear:
├── At top of store
├── In "Recommended" section
├── In promotion banners
└── On homepage

Best Practices:
- Feature 2-3 items max
- Rotate monthly
- Feature "Best Value" packages
- Feature seasonal/limited items
```

#### 💰 Manage Pricing

```
Price Update Strategies:
1. Seasonal Promotions
   └── 10-20% discount on holidays
   
2. Flash Sales
   └── 24-48 hour limited discounts
   
3. Bundle Deals
   └── Buy 3, get 1 free (adjust pricing)
   
4. Early Access
   └── Premium users get lower prices
```

### Common Use Cases

#### Launch a Promotion
1. Go to Store
2. Find items to discount
3. Click Edit
4. Reduce Price by 20%
5. Set Featured: ON
6. Set dates (if platform supports)
7. Save & Announce

#### Add New Currency Package
1. Click "+ Add Store Item"
2. Name: "4000 Coins"
3. Type: Coins
4. Amount: 4000
5. Price: $29.99 (20% bonus over normal)
6. Display Order: 3
7. Create

#### Retire Low-Performing Item
1. Find item
2. Click Edit
3. Toggle Active: OFF
4. Save
5. Item removed from store (kept in history)

---

## ⚙️ System Settings

### Access
Click **Settings** in the sidebar

### Settings Available

#### App Configuration
```
├── App Name (SoulStar)
├── App Version (1.0.0)
├── Environment (Production/Staging/Development)
└── Support Email (support@soulstar.app)
```

#### Feature Flags
```
Toggles to Enable/Disable Features:
├── Voice Chat (ON/OFF)
├── Video Chat (ON/OFF)
├── Gift Sending (ON/OFF)
├── In-App Purchases (ON/OFF)
├── User Signups (ON/OFF)
└── Admin Panel Access (ON/OFF)
```

#### Limits & Constraints
```
├── Max Room Size (default: 50)
├── Max Rooms per User (default: unlimited)
├── Min Password Length (default: 8)
├── Gift Send Cooldown (default: none)
└── Message Character Limit (default: 500)
```

#### Moderation Settings
```
├── Auto-delete hate speech (ON/OFF)
├── Require verification for rooms (ON/OFF)
├── Minimum level to create room (default: 1)
├── Minimum level to send gifts (default: 1)
└── Report Review Queue
```

#### Email Settings
```
├── Enable Email Notifications (ON/OFF)
├── Welcome Email (ON/OFF)
├── Gift Notifications (ON/OFF)
├── Room Invitations (ON/OFF)
├── Newsletter (ON/OFF)
└── Email From Address (noreply@soulstar.app)
```

#### Payment Settings
```
├── Stripe Public Key
├── Stripe Secret Key
├── Currency (USD/AED/SAR/etc.)
├── Tax Rate (0-10%)
└── Refund Policy Duration (30 days)
```

#### Maintenance
```
├── Maintenance Mode (ON/OFF)
│   └── Message displayed to users
├── Backup Schedule (daily/weekly)
├── Log Retention (7-90 days)
└── Database Optimization
```

### Changing Settings

#### Toggle Features
```
1. Find Feature Toggle
2. Click Switch
3. Confirm Change
4. Takes effect immediately
5. Logged in audit trail
```

#### Update Values
```
1. Click on field
2. Enter new value
3. Tab out or press Enter
4. Confirm if prompted
5. Saves automatically
6. Changes immediate (no cache)
```

#### Maintenance Mode
```
When Enabled:
├── Users see maintenance message
├── New signups blocked
├── Rooms can't be created
├── Admin dashboard still accessible
└── Perfect for updates/patches

Steps:
1. Toggle "Maintenance Mode" ON
2. Enter message (e.g., "Upgrading systems")
3. Set estimated time
4. Save
5. When done, toggle OFF
```

---

## 📈 Analytics Section

### Metrics Displayed

#### User Metrics
```
├── Total Registered Users (all-time)
├── Active Users (last 24h)
├── New Users (today)
├── User Growth Graph (30 days)
└── Retention Rate (%)
```

#### Room Metrics
```
├── Total Rooms Created
├── Active Rooms Now
├── Average Room Size
├── Most Popular Category
├── Room Activity Graph
└── Peak Usage Times
```

#### Gift Metrics
```
├── Total Gifts Sent
├── Gifts Sent Today
├── Most Popular Gift
├── Revenue from Gifts
├── Gift Category Distribution
└── Sender/Receiver Heat Map
```

#### Revenue Metrics
```
├── Total Revenue (all-time)
├── Monthly Revenue
├── Daily Revenue
├── Average Transaction
├── Top Selling Items
└── Revenue by Payment Method
```

### Chart Types

```
Line Charts: 
→ Trends over time (user growth, revenue)

Bar Charts:
→ Comparisons (categories, items)

Pie Charts:
→ Distribution (gift types, payment methods)

Heat Maps:
→ Activity patterns (peak times, popular features)
```

### Export Data

```
Available Formats:
├── CSV (spreadsheet)
├── JSON (API ready)
├── PDF (reports)
└── Excel (workbooks)

Export Options:
├── Custom date range
├── Select specific metrics
├── Include charts
└── Send via email
```

---

## 🔒 Admin Access & Security

### Admin Authentication
```
Login Requirements:
├── Admin email
├── Strong password
├── (Optional) 2FA
└── Session management
```

### Permission Levels
```
SUPER ADMIN:
├── All permissions
├── User management
├── System settings
└── Access logs

MODERATOR:
├── User moderation
├── Room management
├── Content removal
└── Limited settings access

ANALYST:
├── View-only access
├── Analytics reports
├── Export data
└── No modifications
```

### Audit Logging
```
All admin actions logged:
├── What was changed
├── Who changed it
├── When it was changed
├── From which IP
└── Rollback available
```

---

## 🆘 Troubleshooting

### Common Issues

#### Users Not Showing Up
```
✓ Check filters aren't too restrictive
✓ Verify search term is correct
✓ Refresh page (Ctrl+R)
✓ Check user actually exists
✓ Clear browser cache
```

#### Changes Not Saving
```
✓ Check for validation errors
✓ Verify you have permission
✓ Check internet connection
✓ Try again (temporary glitch)
✓ Contact support
```

#### Performance Slow
```
✓ Reduce filters (fewer results loaded)
✓ Close notifications
✓ Clear browser storage
✓ Use modern browser (Chrome/Firefox)
✓ Check server status
```

#### Stripe Integration Issues
```
✓ Verify API keys in settings
✓ Check Stripe account is active
✓ Test transaction in sandbox mode
✓ Review transaction logs
✓ Contact Stripe support
```

---

## 📞 Admin Support

- **Dashboard Help**: Press `?` on any page
- **Email**: admin-support@soulstar.app
- **Chat**: Admin support channel (requires access)
- **Docs**: Full API documentation available
- **Updates**: Check changelog weekly

---

## 🎯 Admin Best Practices

✅ **DO:**
- Check dashboard daily (5 minutes)
- Monitor for abuse reports
- Respond to user issues within 24h
- Update store items weekly
- Feature seasonal gifts/items
- Keep settings documentation updated
- Regular backups
- Monthly analytics review

❌ **DON'T:**
- Leave debug mode ON in production
- Share admin credentials
- Make bulk deletions without backup
- Ignore user reports
- Forget password changes
- Skip security updates
- Overload with too many items in store

---

## 🚀 Getting Started

1. **Access Admin Dashboard**: `/admin`
2. **Login** with admin credentials
3. **Complete Setup**: 
   - Configure settings
   - Add initial gifts
   - Add store items
   - Set featured rooms
4. **Monitor Dashboard** daily
5. **Respond to issues** as they arise

---

<div align="center">

**Questions? Suggestions? Email: admin@soulstar.app**

---

Updated: 2024 | Version 1.0

</div>
