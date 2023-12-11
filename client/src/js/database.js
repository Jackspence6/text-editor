import { openDB } from "idb";

const initdb = async () =>
	openDB("jate", 1, {
		upgrade(db) {
			if (db.objectStoreNames.contains("jate")) {
				console.log("jate database already exists!");
				return;
			}
			db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
			console.log("jate database created!");
		},
	});

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
	console.log("PUT to the database!");

	// Creating a connection to the database and version I want to use.
	const jateDb = await openDB("jate", 1);

	// Creating a new transaction and specifying the database and data privileges.
	const tx = jateDb.transaction("jate", "readwrite");

	// Opening up the desired object store.
	const store = tx.objectStore("jate");

	const request = store.put({ id: 1, jate: content });

	// Getting confirmation of the request.
	const result = await request;

	console.log("🚀 - Code saved to the database!", result);
};

// Method that gets all the content from the database
export const getDb = async () => {
	console.log("GET all from the database");

	// Creating a connection to the database and version I want to use.
	const jateDb = await openDB("jate", 1);

	// Creating a new transaction and specifying the database and data privileges.
	const tx = jateDb.transaction("jate", "readonly");

	// Opening up the desired object store.
	const store = tx.objectStore("jate");

	// Using the .getAll() method to get all data in the database.
	const request = store.getAll();

	// Getting confirmation of the request.
	const result = await request;

	console.log("result.value", result);
	return result;
};

initdb();
