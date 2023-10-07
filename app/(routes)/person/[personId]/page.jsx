'use client';
import React, { useEffect } from 'react';
import InfoCard from '../../../components/infoCard';
import Overview from '../../../components/overview';
import Slogan from '../../../components/slogan';
import SwiperSection from '../../../components/swiperSection';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getPersonDetails } from '../../../redux/people/detailsSlice';
import { getPersonExternalLinks } from '../../../redux/people/externalLinksSlice';
import { getPersonCombinedCredits } from '../../../redux/people/combinedCreditsSlice';
import { getPersonImages } from '../../../redux/people/imagesSlice';

const Movie = () => {
  const { personId } = useParams();
  const dispatch = useDispatch();
  const personDetails = useSelector((state) => state.personDetails);
  const personExternalLinks = useSelector((state) => state.personExternalLinks);
  const personCombinedCredits = useSelector(
    (state) => state.personCombinedCredits
  );
  const personImages = useSelector((state) => state.personImages);
  const getMostPopularCharacter = (data, dep) => {
    let ans = '';
    ans = undefined;
    if (dep === 'Acting') {
      const sortedCastDescending = data?.cast
        ?.slice()
        .sort((a, b) => b.vote_average - a.vote_average);
      let vote = 1000;
      let filteredCast = sortedCastDescending?.filter(
        (item) => item.vote_count > 1000
      );
      while (filteredCast?.length < 11) {
        filteredCast = sortedCastDescending?.filter(
          (item) => item.vote_count > vote
        );
        vote -= 100;

        if (vote < 0) {
          break;
        }
      }
      if (filteredCast && filteredCast.length > 0) {
        ans = filteredCast[0].character;
      }
    } else {
      const sortedCastDescending = data?.crew
        ?.slice()
        .sort((a, b) => b.vote_average - a.vote_average);
      let vote = 1000;
      let filteredCast = sortedCastDescending?.filter(
        (item) => item.vote_count > 1000
      );
      while (filteredCast?.length < 11) {
        filteredCast = sortedCastDescending?.filter(
          (item) => item.vote_count > vote
        );
        vote -= 100;
        if (vote < 0) {
          break;
        }
      }
      if (filteredCast && filteredCast.length > 0) {
        ans = filteredCast[0].job;
      }
    }
    return ans;
  };
  const sortByPopularity = (data, dep) => {
    let ans = '';
    if (dep === 'Acting') {
      const sortedCastDescending = data?.cast
        ?.slice()
        .sort((a, b) => b.vote_average - a.vote_average);
      let vote = 1000;
      let filteredCast = sortedCastDescending?.filter(
        (item) => item.vote_count > 1000
      );
      while (filteredCast?.length < 11) {
        filteredCast = sortedCastDescending?.filter(
          (item) => item.vote_count > vote
        );
        vote -= 100;

        if (vote < 0) {
          break;
        }
      }
      ans = { cast: filteredCast };
    } else {
      const sortedCrewDescending = data?.crew
        ?.slice()
        .sort((a, b) => b.vote_average - a.vote_average);
      let vote = 1000;
      const encounteredTitles = new Set();
      let filteredCrew = [];
      sortedCrewDescending?.forEach((item) => {
        if (!encounteredTitles.has(item.title)) {
          encounteredTitles.add(item.title);
          if (item.vote_count > vote) {
            filteredCrew.push(item);
          }
        }
      });
      while (filteredCrew?.length < 11) {
        filteredCrew = sortedCrewDescending
          ?.filter((item) => item.vote_count > vote)
          .filter((item) => {
            if (!encounteredTitles.has(item.title)) {
              encounteredTitles.add(item.title);
              return true;
            }
            return false;
          });
        vote -= 100;
        if (vote < 0) {
          break;
        }
      }
      ans = { crew: filteredCrew };
    }
    console.log(data, ans);
    return ans;
  };

  useEffect(() => {
    dispatch(getPersonDetails(personId, { language: 'en-US' }));
    dispatch(getPersonExternalLinks(personId));
    dispatch(getPersonCombinedCredits(personId, { language: 'en-US' }));
    dispatch(getPersonImages(personId));
  }, [dispatch]);
  return (
    <main>
      <InfoCard
        details={personDetails?.data}
        externalLinks={personExternalLinks?.data}
        type={'person'}
        credits={personCombinedCredits?.data}
      />
      <Slogan
        tagline={getMostPopularCharacter(
          personCombinedCredits?.data,
          personDetails?.data?.known_for_department
        )}
      />
      <Overview overview={personDetails?.data?.biography} title={'Biography'} />
      <SwiperSection
        bg={false}
        title={'Known for'}
        type={'card'}
        data={sortByPopularity(
          personCombinedCredits?.data,
          personDetails?.data?.known_for_department
        )}
        cast={
          personDetails?.data?.known_for_department === 'Acting'
            ? 'cast'
            : 'crew'
        }
      />
      <SwiperSection
        title={'Images'}
        type={'slide-sm'}
        images={personImages?.data}
      />
    </main>
  );
};

export default Movie;
