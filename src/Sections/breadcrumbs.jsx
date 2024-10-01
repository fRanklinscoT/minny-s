import { Link } from 'react-router-dom';

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className="bg-gray-800 p-4 mb-6">
      <ol className="list-reset flex text-white">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="mr-2">
            {index > 0 && <span>/</span>}
            <Link to={crumb.link} className="text-blue-500 hover:underline">
              {crumb.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;