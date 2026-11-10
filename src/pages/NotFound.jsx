import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <section className="container page-head">
      <Seo title="Page not found" description="This page could not be found." />
      <h1>Page not found</h1>
      <p className="lead">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </section>
  );
}
