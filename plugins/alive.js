const { cmd } = require("../command");

cmd(
  {
    pattern: "alive",
    react: "🤖",
    desc: "Show bot status",
    category: "main",
    filename: __filename,
    fromMe: false,
  },
  async (malvin, mek, m, { reply }) => {
    try {
      const from = mek.key.remoteJid;

      await malvin.sendPresenceUpdate("recording", from);

      // Alive Image & Caption
      await malvin.sendMessage(
        from,
        {
          image: {
            url: "https://files.catbox.moe/g1zze2.jpg",
          },
          caption: `DTZ NOVA X MD is Online ✅

*𝗕𝗼𝘁 𝗩𝗲𝗿𝘀𝗶𝗼𝗻* : 𝗗𝗧𝗭 𝗡𝗢𝗩𝗔 𝗫 𝗠𝗗
*𝗢𝘄𝗻𝗲𝗿* :  ɪᴛ ᴢ ᴍᴇ ᴅᴛᴢ❤(-ᗪᑌᒪᗩ-)❤™͢⚙
*𝗦𝗲𝗿𝘃𝗲𝗿* : 🎓 ⏤͟͟͞͞ const 𝐌 ᴇᴍʙᴇʀ  𝙾ꜰ ᵀꫝᴱ 🍃 Ｄαяк Ｔєᴄн Ｚσηє 🍃 𝐖ʜᴀᴛꜱᴀᴘᴘ 𝐁ᴏᴛ 𝐃ᴇᴠʟᴏᴘᴇʀ ( 開発者 ) ⚙ꪶ 𝐓𝙴𝙰𝙼 リーダー ⏤͟͞ 🎓 
          
*We are not responsible for any*  
*WhatsApp bans that may occur due to*  
*the usage of this bot. Use it wisely*  
*and at your own risk* ⚠️`,
        },
        { quoted: mek }
      );

      // Delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Voice Message
      await malvin.sendMessage(
        from,
        {
          audio: {
            url: "https://files.catbox.moe/wz8rh7.mp3",
          },
          mimetype: "audio/mpeg",
          ptt: true,
        },
        { quoted: mek }
      );
    } catch (e) {
      console.error("❌ Error in .alive command:", e);
      reply("❌ Error while sending alive message!");
    }
          })
