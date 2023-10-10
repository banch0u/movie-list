import React from 'react';
import Wrapper from '../UI/wrapper';
import Title from '../UI/title';
import { DefaultProfile } from '../../icons';
import ShowMoreContent from '../UI/showMoreContent';
const Reviews = ({ bg = true, data }) => {
  const parceDate = (dateString) => {
    const tempDate = new Date(dateString);
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const year = tempDate.getFullYear();
    const month = tempDate.getMonth();
    const day = tempDate.getDate();
    return day + ' ' + monthNames[month] + ' ' + year;
  };

  return (
    <section
      className='py-16'
      style={{ backgroundColor: bg ? '#000' : '#1F1F1F' }}>
      <Wrapper>
        <Title link={false}>Reviews</Title>
        <div className='mt-4 flex flex-col gap-3'>
          {data?.results?.slice(0, 3).map((item) => (
            <div key={item.id}>
              <div className='flex gap-2 mb-1 items-center'>
                {item?.author_details?.avatar_path ? (
                  <div className='w-[30px] h-[30px] rounded-full overflow-hidden'>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STORAGE +
                        item?.author_details?.avatar_path
                      }
                      alt={item?.author_details?.username}
                    />
                  </div>
                ) : (
                  <DefaultProfile />
                )}

                <p className='text-xl font-medium'>
                  {item?.author_details?.username}
                </p>
              </div>
              <ShowMoreContent id={item.id}>{item?.content}</ShowMoreContent>
              <div className='flex justify-end'>
                <p className='font-light'>{parceDate(item?.created_at)}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Reviews;
