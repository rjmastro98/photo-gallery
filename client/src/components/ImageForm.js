import { useState } from "react";
import axios from 'axios';
import FileInput from "./FileInput";


const ImageForm = () => {
	const [data, setData] = useState({
		name: "",
		description: "",
		img: "",
	});

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleInputState = (name, value) => {
		setData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const url = process.env.REACT_APP_API_URL + "/images"
			const { data : res } = await axios.post(url, data);
			console.log(res)
		} catch (error) {
			console.log(error)
		}
	};

	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
			<form className="max-w-md" onSubmit={handleSubmit} >
				<h1 className="text-5xl my-5 font-bold">Image Upload</h1>
				<input
					type="text"
					className="input input-bordered mb-3 input-primary w-full max-w-xs"
					placeholder="Name"
					name="name"
					onChange={handleChange}
					value={data.name}
				/>
				<input
					type="text"
					className="input input-bordered mb-3 input-primary w-full max-w-xs"
					placeholder="Description"
					name="description"
					onChange={handleChange}
					value={data.description}
				/>
				<FileInput
					name="img"
					handleInputState={handleInputState}
					type="image"
					value={data.img}
				/>
				<button className="btn btn-primary" type="submit" >
					Submit
				</button>
			</form>
		</div>
	</div>
	);
};

export default ImageForm;

