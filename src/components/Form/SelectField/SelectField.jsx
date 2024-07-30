import Select from 'react-select';
import groups from '../../../constants/groups';

const customStyles = {
  container: provided => ({
    ...provided,
    display: 'block', // Устанавливаем блоковый контент
    width: '100%', // Ширина на всю доступную ширину
    marginBottom: '16px', // Добавляем нижний отступ
    cursor: 'pointer', // Курсор pointer для контейнера
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%', // Ширина на всю доступную ширину
    fontSize: '16px',
    lineHeight: '1.25',
    border: '2px solid #1b953f', // Цвет и ширина рамки
    color: '#1b953f', // Цвет текста
    padding: '0', // Убираем внутренние отступы
    background: 'transparent', // Прозрачный фон
    boxShadow: state.isFocused ? '0 0 0 1px #1b953f' : 'none', // Тень при фокусе
    height: '50px', // Устанавливаем высоту
    cursor: 'pointer', // Курсор pointer для управляющего элемента
    '&:hover': {
      border: '2px solid #1b953f', // Цвет рамки при наведении
    },
  }),
  menu: provided => ({
    ...provided,
    width: '100%', // Ширина меню на всю доступную ширину
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Белый фон с 80% прозрачностью
    borderRadius: 4,
    boxShadow: '0 0 0 1px #1b953f', // Тень меню
    marginTop: '0', // Убираем верхний отступ
    padding: '0', // Убираем внутренние отступы
    cursor: 'pointer', // Курсор pointer для меню
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#1b953f' : 'white',
    color: state.isSelected ? 'white' : '#1b953f',
    padding: '10px',
    fontSize: '16px',
    lineHeight: '1.25',
    cursor: 'pointer', // Курсор pointer для опций
    '&:hover': {
      backgroundColor: '#d4e9d5',
    },
  }),
  singleValue: provided => ({
    ...provided,
    color: '#1b953f',
    fontSize: '16px',
    lineHeight: '1.25',
  }),
  placeholder: provided => ({
    ...provided,
    color: '#1b953f',
    fontSize: '16px',
    lineHeight: '1.25',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: '#1b953f', // Цвет шеврона
    fontSize: '24px', // Размер шеврона
    cursor: 'pointer', // Курсор pointer для шеврона
  }),
  indicatorSeparator: () => ({
    display: 'none', // Убираем сепаратор
  }),
};

const SelectField = () => {
  return (
    <>
      <Select
        options={groups}
        placeholder={'Підгрупа'}
        styles={customStyles}
        name="group"
      />
    </>
  );
};

export default SelectField;
