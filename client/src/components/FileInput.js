import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../firebase";



const FileInput = ({ name, label, value, type, handleInputState, ...rest }) => {
	const inputRef = useRef();
	const [progress, setProgress] = useState(0);
	const [progressShow, setProgressShow] = useState(false);

	const handleUpload = () => {
		setProgressShow(true);
		const fileName = new Date().getTime() + value.name;
		const storageRef = ref(
			storage,
			`/images/${fileName}`
		);
		const uploadTask = uploadBytesResumable(storageRef, value);
		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const uploaded = Math.floor(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(uploaded);
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => {
					handleInputState(name, url);
				});
			}
		);
	};

	return (
		<div >
			<input
				type="file"
				ref={inputRef}
				onChange={(e) => handleInputState(name, e.currentTarget.files[0])}
				vlaue={value}
				className="file-input file-input-bordered mb-3 file-input-primary w-full max-w-xs"
				{...rest}
			/>
			<button
				type="button"
				onClick={() => inputRef.current.click()}
				
			>
				{label}
			</button>
			{type === "image" && value && (
				<div className="card w-96 m-3 h-96 bg-base-100 shadow-xl">
				<figure><img
					className="max-w-sm max-h-sm rounded-lg shadow-2xl"
					src={typeof value === "string" ? value : URL.createObjectURL(value)}
					alt="file"
					
				/></figure>
				</div>
			)}
			{value !== null && !progressShow && typeof value !== "string" && (
				<button className="btn btn-primary mb-3" onClick={handleUpload} >
					Upload
				</button>
			)}
			{progressShow && progress < 100 && (
				<div >
					<p>{progress}%</p>
				</div>
			)}
			{progress === 100 && (
				<div className="m-4 text-green-600" >
					<h2>Success</h2>
				</div>
			)}
		</div>
	);
};

export default FileInput;