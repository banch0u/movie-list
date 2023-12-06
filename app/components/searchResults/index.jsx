import React from 'react';
import Card from '../card';
import Wrapper from '../UI/wrapper';
import CustomPagination from '../customPagination';
const SearchResults = ({ data, changePage, type }) => {
  return (
    <Wrapper>
      <div className='flex flex-col gap-5 mb-5'>
        {data?.results?.map((item) => (
          <Card data={item} key={item.id} type={type} />
        ))}
      </div>
      <CustomPagination
        totalPages={data?.total_pages}
        changePage={changePage}
      />
    </Wrapper>
  );
};

export default SearchResults;
