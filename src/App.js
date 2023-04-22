import React, { useEffect, useState } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL, deleteObject } from 'firebase/storage';
import { v4 } from 'uuid';


const App = () => {
	const [imageUpload, setImageUpload] = useState(null);
	const [imageList, setImageList] = useState([]);
	const [singleImage, setSingleImage] = useState(null);
	const imageListRef = ref(storage, 'images/');
	const singleImageRef = ref(storage, 'images/eddy-lackmann-lLdGG3ESoiI-unsplash.jpg2326737b-2b43-4d66-973c-a171c7eac148')

	const uploadImage = () => {
		if (imageUpload == null) return console.log("Please select image");

		const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload).then((snapshot) => {
			getDownloadURL(snapshot.ref).then((url) => {
				setImageList((prev) => [...prev, url])
			})
		})
	}

	const deleteImage = () => {
		deleteObject(singleImageRef).then(() => {
			console.log("File deleted successfully");
		}).catch((error) => {
			console.log("Some error occured");
		});
	}

	const downloadSingleImage = () => {
		getDownloadURL(singleImageRef).then((url) => {
			setSingleImage(url)
		})
	}

	useEffect(() => {
		listAll(imageListRef).then((response) => {
			response.items.forEach((item) => {
				getDownloadURL(item).then((url) => {
					setImageList((prev) => [...prev, url])
				})
			})
		})

		downloadSingleImage();
	}, []);

	return (
		<>
			<div>
				Hello This is me!
				<div>
					<input type='file' onChange={(e) => { setImageUpload(e.target.files[0]) }} />
					<button onClick={uploadImage}>Upload Image</button>
				</div>

				<div>
					{imageList.map((url) => {
						return <img src={url} key={url} height='100px' width='100px' />
					})}
				</div>

				<br />
				<br />
				<br />
				<button onClick={deleteImage}>Delete Image</button>
				<img src={singleImage} height='100px' width='100px' />
			</div>
		</>
	)
}

export default App
