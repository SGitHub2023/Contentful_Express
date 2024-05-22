import contentful from 'contentful';
import express from 'express';
import cors from 'cors';

const { createClient } = contentful;
const app = express();
const PORT = 8000;
const client = createClient({
	space: 'wxpxksaaxofc',
	accessToken: 'HqdGmItCuT9U7tSpBWQhOu0k7TbV9xZcsYKoaluSTqQ',
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

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));
