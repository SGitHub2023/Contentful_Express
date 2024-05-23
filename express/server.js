import contentful from 'contentful';
import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv'

const { createClient } = contentful;
dotenv.config();
const app = express();

//const PORT = process.env.port || 3000;
const port = 8000;
const client = createClient({
	space: process.env.VITE_CONTENTFUL_SPACE_ID,
	accessToken: process.env.VITE_CONTENTFUL_ACCESS_TOKEN
});

// Set headers for CORS policy due to localhost environment
app.use(cors());
const setHeaders = (res) => {
	res.setHeader("Access-Control-Allow-Origin", "*")
	res.setHeader("Access-Control-Allow-Credentials", "true");
	res.setHeader("Access-Control-Max-Age", "1800");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );
};

// Generic function to fetch different content types from contentful
const getContent = async (args) => {
	try {
		let entries = await client.getEntries(args);
		return entries.items.map((data) => {
			return {...data.fields, id: data.sys.id};
		});
	}
	catch (error) {
		console.error(error);
	}
}

// Route for content type 'section'
app.get('/contentful/sections', async (req, res) => {
	setHeaders(res);
	let args = {
		content_type: "section"
	}
	try {
		res.send(await getContent(args));
	}
	catch (error) {
		console.log(error);
		res.status(500).send('Server Error');
	}
});

// Route for content type 'project'
app.get('/contentful/projects', async (req, res) => {
	setHeaders(res);
	let args = {
		content_type: "project"
	}
	try {
		res.send(await getContent(args));
	}
	catch (error) {
		console.log(error);
		res.status(500).send('Server Error');
	}
});

// Dynamic route for a single entry of content type 'project'
app.get('/contentful/projects/:slug', async (req, res) => {
	setHeaders(res);
	let args = {
		"fields.slug": req.params.slug,
		content_type: "project",
	}
	try {
		res.send(await getContent(args));
	}
	catch (error) {
		console.log(error);
		res.status(500).send('Server Error');
	}
});

app.listen(port, () => console.log(`Server is running on PORT:${port}`));
