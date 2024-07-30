import { useRef, useState } from 'react';
import colors from '../../../styles/colors';
import { Img, ImgBox, Input, Label, Span } from './FileInput.styled';
import { FiUpload } from 'react-icons/fi';
import { FaWindowClose } from 'react-icons/fa';

const FileInput = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleClear = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setImageSrc(null);
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Label>
        <FiUpload color={colors.green} size={24} />
        <Span>Завантажити фото</Span>
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          id="file-input"
          ref={fileInputRef}
          name="photo"
        />
      </Label>

      {imageSrc && (
        <ImgBox>
          <FaWindowClose
            style={{ position: 'absolute', top: 0, right: 0 }}
            size={36}
            color={`${colors.grey}cc`}
            onClick={handleClear}
          />

          <Img src={imageSrc} alt="Device" />
        </ImgBox>
      )}
    </>
  );
};

export default FileInput;
