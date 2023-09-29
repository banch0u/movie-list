import Button from '../UI/button';

const SearchBar = () => {
  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    window.location.replace(`/search/${e.target[0].value}`);
  };

  return (
    <form onSubmit={handleForm} className='flex text-black'>
      <input
        type='text'
        placeholder='Search for a movie, tv show...'
        className='rounded-l-lg w-full px-4 outline-customOrange'
      />
      <Button round={'right'}>Search</Button>
    </form>
  );
};

export default SearchBar;
