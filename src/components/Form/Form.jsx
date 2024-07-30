import FileInput from './FileInput/FileInput';
import { From, Title } from './Form.styled';
import InputField from './InputField/InputField';
import SelectField from './SelectField';
import SendBtn from './SendBtn';

const Form = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements.group.value);
  };

  return (
    <From onSubmit={handleSubmit}>
      <Title>Device Photo Sender</Title>
      <SelectField />
      <InputField />
      <FileInput />
      <SendBtn />
    </From>
  );
};

export default Form;
