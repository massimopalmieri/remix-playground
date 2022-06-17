import {Link, Outlet} from '@remix-run/react';

export default function Layout() {
  return <div>
    <ul>
      <li><Link to='/test'>test</Link></li>
    </ul>
    
    <Outlet />
  </div>;
}
