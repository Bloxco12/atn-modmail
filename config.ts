export default {
	/**
	 * @param {String} ModMailCategoryID - Copy the ID of the ModMail Log category and paste it between the ''.
	 * @param {String} ModMailLogID - Same as above but with logs channel ID.
	 * @param {String} ModeratorRoleID - Same as above but with the role you want that gets access to ModMails.
	 * @param {String} ModPingRoleID - Same as above but with ModMail Ping role which will be notified whenever someone contacts the ModMail bot.
	 * @param {BigInteger} DefaultColor - Replace BEECCD with the HEX code of the color you would like.
	 * @param {String} Prefix - Prefix of the bot.
	 * @param {String} GuildID - ID of the server where the bot should run in.
	 * @param {String} CrossEmoji - Emoji that means something went wrong.
	 * @param {String} ModMailAutomaticMessage - A string containing parameters: {{userid}}, {{usermention}}, {{usertag}}
	 * @param {String} TickEmoji - Emoji that means a message has been sent to ModMail channel.
	 * @param {String} Token - Your token that you can get from https://discord.com/developers/applications
	 */
	ModMailCategoryID: "1461825003539402954",
	ModMailLogID: "1461825006295187496",
	ModeratorRoleID: "1463189770858397829",
	ModPingRoleID: "1461760248602820690",
	DefaultColor: 0xbeeccd,
	Prefix: "m!",
	GuildID: "1461381254229262408",
	CrossEmoji: "❌",
	ModMailAutomaticMessage: "Hello, and thank you for contacting bundle. today! So we can help you as fast as possible, please let us know how we can help you.",
	TickEmoji: "✅",
	Token: ".env",
};
