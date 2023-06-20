import { useLocation, Link } from "react-router-dom";
// Components
import NavbarContainer from "../navbar/NavbarContainer";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathCrumbs = location.pathname.split('/').filter(crumb => crumb !== '');

  if (pathCrumbs.length === 0) {
    return null;
  }

  let currentLink = '';
  const crumbs = pathCrumbs.map((crumb, index, array) => {
    const decodedCrumb = decodeURIComponent(crumb);
    currentLink += `/${decodedCrumb}`;

    const isLastCrumb = index === array.length - 1;
    const crumbClass = isLastCrumb ? 'text-gray-300' : 'text-purple-500';
    const hoverClass = isLastCrumb ? '' : 'hover:text-purple-300';

    return (
      <li key={decodedCrumb}>
        {isLastCrumb ? (
          <>
            <span className="mx-1 text-lg text-gray-500">/</span><span className={`${crumbClass}`}>{decodedCrumb}</span>
          </>
        ) : (
          <Link
            to={currentLink}
            className={`${crumbClass} ${hoverClass}`}
          >
            <span className="mx-1 text-lg text-gray-500">/</span><span>{decodedCrumb}</span>
          </Link>
        )}
      </li>
    );
  });

  return (
    <NavbarContainer additionClass={'flex py-0 lg:px-20 xl:px-40 min-h-[5vh] bg-[#f5f5f4]'}>
      <nav className="w-full rounded-md">
        <ol className="list-reset flex">
          {crumbs}
        </ol>
      </nav>
    </NavbarContainer>
  );
}
