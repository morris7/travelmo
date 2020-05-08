import { useRouter } from 'next/router';
import http from '../../src/client/shared/services/http';

const Location = ({ post }) => {
  const router = useRouter();
  const query = router.query;
  console.log('post', post)
  return (
    <article>
      {/* <h1>{query.location}</h1> */}
      <h1>{post.title.rendered}</h1>
      <section dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}

Location.getInitialProps = async ctx => {
  const response = await http.getPost(ctx.query.location);

  const post = response && response.data && response.data[0];
  console.log('post', post)
  return {
    post
  };
}

export default Location;