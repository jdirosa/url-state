import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useUrlState } from "@jamesdirosa/use-urlstate";
interface User {
	name: string;
	id: string;
}

export const Home = () => {
	const defaultUser: User = {
		name: "james",
		id: "1234",
	};
	const [open, setOpen] = useUrlState("open", false);
	const [user, setUser] = useUrlState("user", defaultUser);

	return (
		<>
			<div className="App">
				<header className="App-header">
					<p>Name: {user?.name}</p>
					<p>Id: {user?.id}</p>
					<Link to="/2">Home</Link>
					<Button onClick={() => setOpen(true)}>Show Dialog</Button>
				</header>
			</div>
			<Dialog maxWidth="sm" open={open}>
				<DialogTitle>Title!</DialogTitle>
				<DialogContent style={{ width: "100%" }}>
					This is a test one
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setOpen(false)}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};
