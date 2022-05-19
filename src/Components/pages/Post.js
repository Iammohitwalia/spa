import { useParams, useSearchParams } from 'react-router-dom';

 const Post = () => {
     let {category,id} = useParams();
     let [searchParams, setSearchParams]=useSearchParams();
     console.log(searchParams.get('price'));
     console.log(searchParams.get('sort'));

  return (
    <div>post -{category}{id}</div>
  );
};
export default Post;
