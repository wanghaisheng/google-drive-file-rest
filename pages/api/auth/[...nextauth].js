import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
	site: process.env.SITE || "http://localhost:3000",

	// Configure Google authentication providers
	providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
		}),

	],
	jwt: {

		encryption: true

	},

	secret: "secret token",


	callbacks: {
		async session({ session, token, user }) {
		  session.user.username = session.user.name
		    .split(" ")
		    .join("")
		    .toLocaleLowerCase();
	    
		  session.user.uid = token.sub;
		  return session;
		}
	      },
	      
	      secret: process.env.SECRET // SECRET env variable 	
};

export default (req, res) => NextAuth(req, res, options);
