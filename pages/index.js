import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const Index = ({ stories }) => {
  const router = useRouter();
  console.log('check', router.isFallback);
  console.log('propds ', stories);
  // useEffect(() => {
  //   (async () => {
  //     console.log('fetching');
  //     const { data } = await axios.get(apiUrl);
  //     console.log(data);
  //   })();
  // }, []);
  return (
    <div>
      {stories.map((story) => (
        <h2 key={story._id} style={{ marginTop: 4, padding: 2 }}>
          {story.title}
        </h2>
      ))}
    </div>
  );
};

export async function getStaticProps(context) {
  const { data } = await axios.get(
    'https://teapost.herokuapp.com/api/v1/stories'
  );
  // console.log('data ', data.stories);
  return {
    props: {
      stories: data.stories,
    },
    revalidate: 5,
  };
}
export default Index;
