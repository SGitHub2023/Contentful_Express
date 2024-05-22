import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});


export const getContent = async (id) => {
  try {
    let cf_entries = await client.getEntries({
      content_type: id,
    });

    return cf_entries.items.map((data) => {
      //console.log(data);
      //return data.fields;
			return {...data.fields, id: data.sys.id};
    });
  } catch (error) {
    console.error(error);
  }
};

export const getProject = async (slug) => {
	try {
		let cf_entries = await client.getEntries({
			"fields.slug": slug,
			content_type: "project",
		});
		return cf_entries.items.map((data) => {
			return {...data.fields, id: data.sys.id};
		});
	}
	catch (error) {
		console.error(error);
	}
}
