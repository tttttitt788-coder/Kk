import {
  pgTable,
  text,
  varchar,
  integer,
  uuid,
  boolean,
  timestamp,
  jsonb,
  decimal,
  uniqueIndex,
  index,
  foreignKey,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// =============================
// USERS & AUTHENTICATION
// =============================
export const users = pgTable(
  'users',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    user_id_8: varchar('user_id_8', { length: 8 }).notNull().unique(),
    username: varchar('username', { length: 50 }).notNull().unique(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    avatarUrl: text('avatar_url'),
    bio: text('bio'),
    gender: varchar('gender', { length: 20 }),
    age: integer('age'),
    isVerified: boolean('is_verified').default(false),
    isOnline: boolean('is_online').default(false),
    lastOnline: timestamp('last_online').defaultNow(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => ({
    userIdIdx: uniqueIndex('idx_users_user_id_8').on(table.user_id_8),
    usernameIdx: uniqueIndex('idx_users_username').on(table.username),
  })
);

// =============================
// ROOMS & VOICE CHAT
// =============================
export const rooms = pgTable(
  'rooms',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    room_id_8: varchar('room_id_8', { length: 8 }).notNull().unique(),
    name: varchar('name', { length: 100 }).notNull(),
    description: text('description'),
    ownerId: uuid('owner_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    category: varchar('category', {
      length: 50,
      enum: [
        'chat',
        'music',
        'games',
        'education',
        'religion',
        'sports',
        'comedy',
        'other',
      ],
    }).notNull(),
    roomType: varchar('room_type', {
      length: 20,
      enum: ['public', 'private', 'password'],
    }).default('public'),
    password: varchar('password', { length: 255 }),
    thumbnailUrl: text('thumbnail_url'),
    maxMembers: integer('max_members').default(50),
    currentMembers: integer('current_members').default(0),
    isActive: boolean('is_active').default(true),
    isFeatured: boolean('is_featured').default(false),
    voiceEnabled: boolean('voice_enabled').default(true),
    videoEnabled: boolean('video_enabled').default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => ({
    roomIdIdx: uniqueIndex('idx_rooms_room_id_8').on(table.room_id_8),
    ownerIdx: index('idx_rooms_owner_id').on(table.ownerId),
    categoryIdx: index('idx_rooms_category').on(table.category),
  })
);

// =============================
// ROOM MEMBERS & CONNECTIONS
// =============================
export const roomMembers = pgTable(
  'room_members',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    roomId: uuid('room_id')
      .notNull()
      .references(() => rooms.id, { onDelete: 'cascade' }),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    role: varchar('role', {
      length: 20,
      enum: ['owner', 'admin', 'member'],
    }).default('member'),
    isMicOn: boolean('is_mic_on').default(false),
    speakerVolume: integer('speaker_volume').default(100),
    joinedAt: timestamp('joined_at').defaultNow().notNull(),
    leftAt: timestamp('left_at'),
  },
  (table) => ({
    roomIdx: index('idx_room_members_room_id').on(table.roomId),
    userIdx: index('idx_room_members_user_id').on(table.userId),
    uniqueIdx: uniqueIndex('unique_room_user').on(table.roomId, table.userId),
  })
);

// =============================
// GIFTS & REWARDS
// =============================
export const gifts = pgTable(
  'gifts',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    giftId: varchar('gift_id', { length: 50 }).notNull().unique(),
    name: varchar('name', { length: 100 }).notNull(),
    description: text('description'),
    iconUrl: text('icon_url').notNull(),
    animationUrl: text('animation_url'),
    price: integer('price').notNull(), // coins/crystals
    category: varchar('category', {
      length: 50,
      enum: [
        'celebration',
        'love',
        'appreciation',
        'funny',
        'seasonal',
      ],
    }),
    rarity: varchar('rarity', {
      length: 20,
      enum: ['common', 'rare', 'epic', 'legendary'],
    }).default('common'),
    isActive: boolean('is_active').default(true),
    displayOrder: integer('display_order').default(0),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => ({
    giftIdIdx: uniqueIndex('idx_gifts_gift_id').on(table.giftId),
  })
);

// =============================
// GIFT SENDS (Tracking)
// =============================
export const giftSends = pgTable(
  'gift_sends',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    giftId: uuid('gift_id')
      .notNull()
      .references(() => gifts.id, { onDelete: 'cascade' }),
    senderId: uuid('sender_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    recipientId: uuid('recipient_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    roomId: uuid('room_id').references(() => rooms.id, { onDelete: 'set null' }),
    quantity: integer('quantity').default(1),
    sentAt: timestamp('sent_at').defaultNow().notNull(),
  },
  (table) => ({
    senderIdx: index('idx_gift_sends_sender_id').on(table.senderId),
    roomIdx: index('idx_gift_sends_room_id').on(table.roomId),
  })
);

// =============================
// STORE & PURCHASES
// =============================
export const storeItems = pgTable(
  'store_items',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    itemId: varchar('item_id', { length: 50 }).notNull().unique(),
    name: varchar('name', { length: 100 }).notNull(),
    description: text('description'),
    type: varchar('type', {
      length: 50,
      enum: ['coins', 'crystals', 'premium_pass', 'badge'],
    }).notNull(),
    amount: integer('amount'),
    priceUsd: decimal('price_usd', { precision: 10, scale: 2 }),
    priceLocal: decimal('price_local', { precision: 10, scale: 2 }),
    currency: varchar('currency', { length: 10 }).default('USD'),
    iconUrl: text('icon_url').notNull(),
    displayOrder: integer('display_order').default(0),
    isActive: boolean('is_active').default(true),
    isFeatured: boolean('is_featured').default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => ({
    itemIdIdx: uniqueIndex('idx_store_items_item_id').on(table.itemId),
  })
);

// =============================
// PURCHASES
// =============================
export const purchases = pgTable(
  'purchases',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    storeItemId: uuid('store_item_id')
      .notNull()
      .references(() => storeItems.id, { onDelete: 'cascade' }),
    amount: integer('amount'),
    pricePaid: decimal('price_paid', { precision: 10, scale: 2 }),
    paymentMethod: varchar('payment_method', { length: 50 }),
    transactionId: varchar('transaction_id', { length: 255 }).unique(),
    status: varchar('status', {
      length: 20,
      enum: ['pending', 'completed', 'failed'],
    }).default('completed'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  }
);

// =============================
// USER WALLETS
// =============================
export const userWallets = pgTable(
  'user_wallets',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .unique()
      .references(() => users.id, { onDelete: 'cascade' }),
    coins: integer('coins').default(0),
    crystals: integer('crystals').default(0),
    totalSpentUsd: decimal('total_spent_usd', { precision: 10, scale: 2 }).default('0'),
    lastRewardDate: timestamp('last_reward_date'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  }
);

// =============================
// ACHIEVEMENTS & BADGES
// =============================
export const badges = pgTable(
  'badges',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    badgeId: varchar('badge_id', { length: 50 }).notNull().unique(),
    name: varchar('name', { length: 100 }).notNull(),
    description: text('description'),
    iconUrl: text('icon_url').notNull(),
    criteria: jsonb('criteria'),
    rewardCoins: integer('reward_coins').default(0),
    isActive: boolean('is_active').default(true),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  }
);

export const userBadges = pgTable(
  'user_badges',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    badgeId: uuid('badge_id')
      .notNull()
      .references(() => badges.id, { onDelete: 'cascade' }),
    earnedAt: timestamp('earned_at').defaultNow().notNull(),
  },
  (table) => ({
    uniqueIdx: uniqueIndex('unique_user_badge').on(table.userId, table.badgeId),
  })
);

// =============================
// CHAT MESSAGES
// =============================
export const chatMessages = pgTable(
  'chat_messages',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    roomId: uuid('room_id')
      .notNull()
      .references(() => rooms.id, { onDelete: 'cascade' }),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    content: text('content').notNull(),
    messageType: varchar('message_type', {
      length: 20,
      enum: ['text', 'image', 'emoji', 'system'],
    }).default('text'),
    attachmentUrl: text('attachment_url'),
    isDeleted: boolean('is_deleted').default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    roomIdx: index('idx_chat_messages_room_id').on(table.roomId),
  })
);

// =============================
// NOTIFICATIONS
// =============================
export const notifications = pgTable(
  'notifications',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    notificationType: varchar('notification_type', {
      length: 50,
      enum: ['join', 'leave', 'gift', 'room_created', 'mention'],
    }).notNull(),
    relatedUserId: uuid('related_user_id').references(() => users.id, {
      onDelete: 'cascade',
    }),
    relatedRoomId: uuid('related_room_id').references(() => rooms.id, {
      onDelete: 'cascade',
    }),
    title: varchar('title', { length: 255 }),
    description: text('description'),
    isRead: boolean('is_read').default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    userIdx: index('idx_notifications_user_id').on(table.userId),
  })
);

// =============================
// ADMIN SETTINGS
// =============================
export const adminSettings = pgTable(
  'admin_settings',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    settingKey: varchar('setting_key', { length: 255 }).notNull().unique(),
    settingValue: jsonb('setting_value').notNull(),
    updatedBy: uuid('updated_by').references(() => users.id),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  }
);

// =============================
// MODERATION LOGS
// =============================
export const moderationLogs = pgTable(
  'moderation_logs',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    adminId: uuid('admin_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    action: varchar('action', {
      length: 50,
      enum: ['mute', 'ban', 'kick', 'delete_room', 'delete_message'],
    }).notNull(),
    targetType: varchar('target_type', { length: 50 }),
    targetId: uuid('target_id'),
    reason: text('reason'),
    durationMinutes: integer('duration_minutes'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  }
);

// Type Exports for TypeScript
export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export type Room = typeof rooms.$inferSelect;
export type InsertRoom = typeof rooms.$inferInsert;

export type RoomMember = typeof roomMembers.$inferSelect;
export type InsertRoomMember = typeof roomMembers.$inferInsert;

export type Gift = typeof gifts.$inferSelect;
export type InsertGift = typeof gifts.$inferInsert;

export type StoreItem = typeof storeItems.$inferSelect;
export type InsertStoreItem = typeof storeItems.$inferInsert;

export type Purchase = typeof purchases.$inferSelect;
export type InsertPurchase = typeof purchases.$inferInsert;

export type UserWallet = typeof userWallets.$inferSelect;
export type InsertUserWallet = typeof userWallets.$inferInsert;

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = typeof chatMessages.$inferInsert;

export type Badge = typeof badges.$inferSelect;
export type UserBadge = typeof userBadges.$inferSelect;

export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;
