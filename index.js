import express from "express";

const app = express();

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

const port = 3310;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

app.get("/api/employees", (req, res) => {
	res.json({ results: sampleEmployee });
});
