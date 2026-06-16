const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU25KiOhT9l7xqDRdBhaquOoCKKHgDvHBqHqKEiw3hkoDglP8+hT3dPQ9npvrkKdmEvddea+38ADiLCVqiFsg/QF7GNaSo29I2R0AGahUEqAR94EMKgQzaycnYqiYJRTtLnWyanqtZLzHvTuvGvby5idtAZwrxsJuxL+DRB3l1TuLLXxJezuaobVwrkK4jdjNtyH51F/eG4Z4PjBeeHFwOtVW4Xs5v7gt4dBlhXMY4nOYRSlEJkyVqNzAuvwafn94uIuUv5niSh7vVEmUXrp2q09ncu610PKr4k9WL9uJptv0afLYH9Wgj3Re+G7S7ZDsIEm94z0lRbTI7OxtjXrzNUnplMHmDT+IQI9/wEaYxbb/Me6iOvBOKbhF0zHXpJhMJu+6atIQ585tabXvHpjXU8SKaKl8DzuuZNz+oB2hzYzvK9iapi63r4JBxQ77HLTYu47Hp5HC/bX8HvinfvfL6f3gvJiGyPEkKub3Jq0Xh7FarUW7R2Nlea+V+zw33coqEgLqnr8Gfic3RK6p50CgqO1zY5zJC9g3CiG5XeXD2efZoL2/QNKPsEz6kVfk3lIddr0lVR9KWtzEHhSaTVPO2UU7FXKut2dmJJMV5TXKmyJjr+qQdF/XOtHb7oORnFVri8aCxBcXMi8odI3sWatxWNybbl2dHr6g1fCBzjz4oURgTWkIaZ7iL8ZzQB9CvbXQpEX3SCyxMGX6vRKKYwQa73GTdpjZr8ueFzRSTWoN8cE3riT7okRfQB3mZXRAhyJ/HhGZlayFCYIgIkP/93gcYNfRNuK7cmBv0QRCXhLq4ypMM+u+yfnyFl0tWYWq3+KJ1G1QCmf0MI0pjHJKOyQrD8hLFNdIiSAmQA5gQ9NEjKpEPZFpW6GNutczvqD+OJWdymA9AH6RPSWIfyEDihrzEDgV2NGRlYfAP+Xbr0sI8/4YRBX2QPK+NWIGXhCEriZIgCN3FLv74ANjl8xGFcUKADLT1yBSQok0NNG7oVNcVI1S0UAGfDb174437pcUSnT8OvePr6WymcRCzO0PEW++SsavX9h7sdEmYm+zecV/+IwmQgV9M9OV5eBqsXbWgu0C514tWh5x4W5WKZDjCic1yOo3MduFx2fHaOBu1OBL8St1FvB5ZrqVPet7ISlxBqqPWbGxuqnRG6gMf1fEF/V5MzQt2JUQDy2TspjGsjSbUdDbDmLDnXFFrLhyJzHgeJm2u8TVl9IoJGVKrUyeSrkyxUwoDncf7+WY6jGaHKt4bm+0kfHPtc2qSX69V/PRTJ1V3DGL0HH4MOwH/oMk73s5Z7KP/26+/XpE/TKJqX1emSpNeuhd1vRUzLNCpvfZY/bhcTTyLDNhdjdRWmrkceDy+90GeQBpkZQpkALFfZs/iZVZ1TjVwkP2lmKa8GkoYml3DCSRU+XS/E6eIUJjmQOZGY244GA55rg/SVslzm0L6PjVA6daSKcHjJ6YnqCZSBwAA",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "923427582273",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "923427582273",                     // Developer's contact number
    DEVELOPER_NUMBER: '923427582273@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "false",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "false",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "ᴋʜᴀɴ-ᴍᴅ",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "false",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "false",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "false", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "false", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "false", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // true if want see admin activity 
};
        
