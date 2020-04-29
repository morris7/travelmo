import { useRouter } from 'next/router';

const Location = () => {
    const router = useRouter();
    const query = router.query;

    return (
        <h1>{query.location}</h1>
    );
}

export default Location;