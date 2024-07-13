import  { useState } from 'react';
import './profile.css'

function Profile() {

  const [photos, setPhotos] = useState(['https://media.istockphoto.com/photos/indian-young-fitness-man-showing-biceps-picture-id499158078?k=6&m=499158078&s=612x612&w=0&h=ynbIYKNHE3TIIMF8bhbIXWbtR5Z6scBDJdoaXSVzcmA=']);

  const handleProfileIconClick = () => {
    document.getElementById('file-input').click();
  };
  const storePic=()=>{
    localStorage.setItem("pic",JSON.stringify(photos));
}
  const handleFileChange = (event) => {
    const files = event.target.files;
    const newPhotos = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        newPhotos.push(URL.createObjectURL(file));
      }
    }
    setPhotos(newPhotos);
  };
  return (
    <div className="profile-container">
      <img
        src={photos}
        alt=""
        className="profile-icon"
        onClick={handleProfileIconClick}
      />
      <input
        type="file"
        id="file-input"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={handleFileChange}
        onClick={storePic}
      />
    </div>
  );
}
export default Profile;
